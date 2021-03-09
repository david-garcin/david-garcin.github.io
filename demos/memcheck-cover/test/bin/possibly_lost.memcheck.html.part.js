async function updateContentOnceLoaded13()
{
    var data =`
==13286== Memcheck, a memory error detector<br />
==13286== Copyright (C) 2002-2017, and GNU GPL'd, by Julian Seward et al.<br />
==13286== Using Valgrind-3.13.0 and LibVEX; rerun with -h for copyright info<br />
==13286== Command: possibly_lost<br />
==13286== Parent PID: 13276<br />
==13286== <br />
==13286== <br />
==13286== <span class="valgrind_summary_title">HEAP SUMMARY:</span><br />
==13286== &nbsp; &nbsp; in use at exit: 6 bytes in 1 blocks<br />
==13286== &nbsp; total heap usage: 1 allocs, 0 frees, 6 bytes allocated<br />
==13286== <br />
==13286== <span class="warning_leak">6 bytes in 1 blocks are possibly lost in loss record 1 of 1</span><br />
==13286== &nbsp; &nbsp;at 0x4C31B0F: malloc (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)<br />
==13286== &nbsp; &nbsp;by 0x4EDBAF9: strdup (<span class="leak_file_info">/build/glibc-S9d2JN/glibc-2.27/string/strdup.c:42</span>)<br />
==13286== &nbsp; &nbsp;by 0x108659: breakage::evil_possibly_lost_func() (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/possibly_lost/main.cpp#L12">&lt;memcheck-cover&gt;/tests/bin/possibly_lost/main.cpp:12</a>)<br />
==13286== &nbsp; &nbsp;by 0x108672: main (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/possibly_lost/main.cpp#L21">&lt;memcheck-cover&gt;/tests/bin/possibly_lost/main.cpp:21</a>)<br />
==13286== <br />
==13286== <span class="valgrind_summary_title">LEAK SUMMARY:</span><br />
==13286== &nbsp; &nbsp;definitely lost: 0 bytes in 0 blocks<br />
==13286== &nbsp; &nbsp;indirectly lost: 0 bytes in 0 blocks<br />
==13286== <span class="warning_leak">&nbsp; &nbsp; &nbsp;possibly lost: 6 bytes in 1 blocks</span><br />
==13286== &nbsp; &nbsp;still reachable: 0 bytes in 0 blocks<br />
==13286== &nbsp; &nbsp; &nbsp; &nbsp; suppressed: 0 bytes in 0 blocks<br />
==13286== <br />
==13286== For counts of detected and suppressed errors, rerun with: -v<br />
==13286== <span class="valgrind_summary_title">ERROR SUMMARY:</span> 1 errors from 1 contexts (suppressed: 0 from 0)<br />
`;
    var analysis_div = document.getElementById('valgrind.result13.Report');
    analysis_div.innerHTML=data;
}
updateContentOnceLoaded13();
