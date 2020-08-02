#! /bin/bash

memcheck_cover_root_dir=$1

resolved_script_path=$(readlink -f "$0")
current_script_dir=$(dirname "${resolved_script_path}")
current_full_path=$(readlink -e "${current_script_dir}")

memcheck_demo_dir="${current_full_path}/memcheck-cover/"

RESET_FORMAT=$(echo -e '\e[00m')
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

    echo -en "${CYAN_COLOR}Info:${RESET_FORMAT} ${info_message}"
}

function print_done()
{
    echo "${GREEN_COLOR}Done${RESET_FORMAT}"
}

####################
###     MAIN     ###
####################

if [ ! -d "${memcheck_cover_root_dir}" ]; then
    error_and_exit "Could not find memcheck-cover dir '${memcheck_cover_root_dir}'"
    exit 1
fi

if [ -d "${memcheck_demo_dir}" ]; then
    print_info "Removing previous output from '${memcheck_demo_dir}'\n"
    rm -r "${memcheck_demo_dir}"
fi

mkdir "${memcheck_demo_dir}" 2>&1 || error_and_exit "Could not create directory"

print_info "Copying files from '${memcheck_cover_root_dir}'..."
rsync -av --progress "${memcheck_cover_root_dir}/tests/generate_html_outputs_ts/ref/many_result_report/" "${memcheck_demo_dir}" --exclude memcheck-cover.css --exclude memcheck-cover.js
cp "${memcheck_cover_root_dir}/bin/html_res/memcheck-cover."* "${memcheck_demo_dir}"
# cp -f "${memcheck_cover_root_dir}/tests/generate_html_outputs_ts/ref/violation_suppression_report/uninitialized_value.memcheck.html.part" "${memcheck_demo_dir}test/bin/"
print_done
