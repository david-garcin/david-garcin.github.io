#! /bin/bash

memcheck_cover_root_dir=$1

resolved_script_path=$(readlink -f "$0")
current_script_dir=$(dirname "${resolved_script_path}")
current_full_path=$(readlink -e "${current_script_dir}")

memcheck_demo_dir="${current_full_path}/memcheck-cover/"
tmp_out_dir="${current_full_path}/tmp/"

RESET_FORMAT=$(echo -e '\e[0m')
RED_COLOR=$(echo -e '\e[31m')
GREEN_COLOR=$(echo -e '\e[32m')
CYAN_COLOR=$(echo -e '\e[0;36m')

####################
###  FUNCTIONS   ###
####################

function error_and_exit()
{
    local error_message=$1

    echo "${RED_COLOR}Error:${RESET_FORMAT} ${error_message}"
}

function print_info()
{
    local info_message=$1

    echo -e "${CYAN_COLOR}Info:${RESET_FORMAT} ${info_message}"
}

function indent()
{
    local indent_string=$1

    gawk '{ print "'"${indent_string}"'" $0; }'
}

function resize_window()
{
    local min_height=$1
    local min_width=$2

    local current_height=$(tput lines)
    local current_width=$(tput cols)

    if [ $current_height -lt $min_height ]; then
        current_height=$min_height
    fi

    if [ $current_width -lt $min_width ]; then
        current_width=$min_width
    fi

    echo -en "\e[8;${current_height};${current_width}t"
}

####################
###     MAIN     ###
####################

resize_window 50 200

if [ ! -d "${memcheck_cover_root_dir}" ]; then
    error_and_exit "Could not find memcheck-cover dir '${memcheck_cover_root_dir}'"
    exit 1
fi

if [ -d "${memcheck_demo_dir}" ]; then
    print_info "Removing previous output from '${memcheck_demo_dir}'"
    rm -r "${memcheck_demo_dir}"
fi

mkdir "${memcheck_demo_dir}" 2>&1 || error_and_exit "Could not create directory"

#######
### Generate binaries
#######

# Call make to generate tests binaries
print_info "Generating memcheck binaries ..."
make -C "${memcheck_cover_root_dir}" test_compile | indent "    "

#######
### Generate valgrind reports
#######

memcheck_cover_bin="${memcheck_cover_root_dir}bin/memcheck_runner.sh"
memcheck_html_generator_bin="${memcheck_cover_root_dir}bin/generate_html_report.sh"

{
    # Run memcheck-cover one each one of them
    for test_bin_dir in $(find "${memcheck_cover_root_dir}tests/bin/" -mindepth 1 -maxdepth 1 -type d); do
        test_bin_name=$(basename "${test_bin_dir}")

        print_info "Generating memcheck report for '${test_bin_name}' ..."
        {
            # Add the dir to the PATH to avoid having the full path in the report
            PATH="${PATH}:${test_bin_dir}/out/"
            "${memcheck_cover_bin}" -o "${tmp_out_dir}test/bin/${test_bin_name}" --fullpath-after= -- "${test_bin_name}" 2>&1 | indent "    "
        }
    done

    # Move invalid_delete to another directory
    alternative_dir="${tmp_out_dir}z/test/bin/"
    mkdir -p "${alternative_dir}"
    mv "${tmp_out_dir}test/bin/invalid_delete.memcheck" "${alternative_dir}"
}

print_info "Generating memcheck report for 'true' ..."
"${memcheck_cover_bin}" -o "${tmp_out_dir}true" --fullpath-after= -- true can take useless params and still be one true self 2>&1 | indent "    "

print_info "Generating memcheck report with suppressions for 'uninitialized_value' ..."
{
    # Add the dir to the PATH to avoid having the full path in the report
    PATH="${PATH}:${memcheck_cover_root_dir}tests/bin/uninitialized_value/out/"
    "${memcheck_cover_bin}" -o "${tmp_out_dir}suppressions/uninitialized_value" -s --fullpath-after= -- uninitialized_value with suppressions 2>&1 | indent "    "
}

#######
### Generate HTML config
#######

config_file="${tmp_out_dir}memcheck-cover.config"

print_info "Generating memcheck HTML generator config ..."
{
    cd "${tmp_out_dir}"
    "${memcheck_html_generator_bin}" -g | indent "    "
}

print_info "Computing memcheck-cover sha1..."
{
    cd "${memcheck_cover_root_dir}"
    memcheck_cover_sha1=$(git rev-parse HEAD)

    echo "    Found sha1: ${GREEN_COLOR}${memcheck_cover_sha1}${RESET_FORMAT}"
}

print_info "Editing memcheck HTML generator config ..."
{
    # Path prefix substitution
    echo "memcheck_path_prefix_replacement[\"${memcheck_cover_root_dir}\"]=\"<memcheck-cover>/\""

    # Source control link generation
    echo "memcheck_url_prefix_replacement[\"${memcheck_cover_root_dir}\"]=\"https://github.com/Farigh/memcheck-cover/blob/${memcheck_cover_sha1}/\""
    echo "memcheck_url_prefix_replacement_type[\"${memcheck_cover_root_dir}\"]=\"github\""
} >> "${config_file}"

#######
### Generate HTML
#######

print_info "Generating memcheck HTML report ..."
{
    "${memcheck_html_generator_bin}" -c "${config_file}" -i "${tmp_out_dir}" -o "${memcheck_demo_dir}" | indent "    "
}

print_info "Anonymizing HTML report ..."
while IFS= read -r -d '' file_to_update; do
    sed -i "s#${memcheck_cover_root_dir}#memcheck-cover/#g" "${file_to_update}"
done < <(find "${memcheck_demo_dir}" -name "*.html.part.js" -type f -print0)


# Cleanup tmp files
rm -rf "${tmp_out_dir}"
