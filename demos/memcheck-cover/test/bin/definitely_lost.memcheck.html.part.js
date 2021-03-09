async function updateContentOnceLoaded3()
{
    var data =`
==13350== Memcheck, a memory error detector<br />
==13350== Copyright (C) 2002-2017, and GNU GPL'd, by Julian Seward et al.<br />
==13350== Using Valgrind-3.13.0 and LibVEX; rerun with -h for copyright info<br />
==13350== Command: definitely_lost<br />
==13350== Parent PID: 13340<br />
==13350== <br />
==13350== <br />
==13350== <span class="valgrind_summary_title">HEAP SUMMARY:</span><br />
==13350== &nbsp; &nbsp; in use at exit: 4 bytes in 1 blocks<br />
==13350== &nbsp; total heap usage: 2 allocs, 1 frees, 72,708 bytes allocated<br />
==13350== <br />
==13350== <span class="error_leak">4 bytes in 1 blocks are definitely lost in loss record 1 of 1</span><br />
==13350== &nbsp; &nbsp;at 0x4C3217F: operator new(unsigned long) (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)<br />
==13350== &nbsp; &nbsp;by 0x108687: breakage::evil_definitely_lost_func() (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/definitely_lost/main.cpp#L4">&lt;memcheck-cover&gt;/tests/bin/definitely_lost/main.cpp:4</a>)<br />
==13350== &nbsp; &nbsp;by 0x10869B: main (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/definitely_lost/main.cpp#L10">&lt;memcheck-cover&gt;/tests/bin/definitely_lost/main.cpp:10</a>)<br />
==13350== <br />
==13350== <span class="valgrind_summary_title">LEAK SUMMARY:</span><br />
==13350== <span class="error_leak">&nbsp; &nbsp;definitely lost: 4 bytes in 1 blocks</span><br />
==13350== &nbsp; &nbsp;indirectly lost: 0 bytes in 0 blocks<br />
==13350== &nbsp; &nbsp; &nbsp;possibly lost: 0 bytes in 0 blocks<br />
==13350== &nbsp; &nbsp;still reachable: 0 bytes in 0 blocks<br />
==13350== &nbsp; &nbsp; &nbsp; &nbsp; suppressed: 0 bytes in 0 blocks<br />
==13350== <br />
==13350== For counts of detected and suppressed errors, rerun with: -v<br />
==13350== <span class="valgrind_summary_title">ERROR SUMMARY:</span> 1 errors from 1 contexts (suppressed: 0 from 0)<br />
`;
    var analysis_div = document.getElementById('valgrind.result3.Report');
    analysis_div.innerHTML=data;
}
updateContentOnceLoaded3();
