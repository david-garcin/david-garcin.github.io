async function updateContentOnceLoaded4()
{
    var data =`
==13194== Memcheck, a memory error detector<br />
==13194== Copyright (C) 2002-2017, and GNU GPL'd, by Julian Seward et al.<br />
==13194== Using Valgrind-3.13.0 and LibVEX; rerun with -h for copyright info<br />
==13194== Command: fishy_argument_value<br />
==13194== Parent PID: 13184<br />
==13194== <br />
==13194== <span class="warning_leak">Argument 'size' of function malloc has a fishy (possibly negative) value: -1</span><br />
==13194== &nbsp; &nbsp;at 0x4C31B0F: malloc (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)<br />
==13194== &nbsp; &nbsp;by 0x108917: breakage::evil_fishy_alloc() (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/fishy_argument_value/main.cpp#L11">&lt;memcheck-cover&gt;/tests/bin/fishy_argument_value/main.cpp:11</a>)<br />
==13194== &nbsp; &nbsp;by 0x108925: main (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/fishy_argument_value/main.cpp#L18">&lt;memcheck-cover&gt;/tests/bin/fishy_argument_value/main.cpp:18</a>)<br />
==13194== <br />
==13194== <br />
==13194== <span class="valgrind_summary_title">HEAP SUMMARY:</span><br />
==13194== &nbsp; &nbsp; in use at exit: 0 bytes in 0 blocks<br />
==13194== &nbsp; total heap usage: 2 allocs, 2 frees, 76,800 bytes allocated<br />
==13194== <br />
==13194== All heap blocks were freed -- no leaks are possible<br />
==13194== <br />
==13194== For counts of detected and suppressed errors, rerun with: -v<br />
==13194== <span class="valgrind_summary_title">ERROR SUMMARY:</span> 1 errors from 1 contexts (suppressed: 0 from 0)<br />
`;
    var analysis_div = document.getElementById('valgrind.result4.Report');
    analysis_div.innerHTML=data;
}
updateContentOnceLoaded4();
