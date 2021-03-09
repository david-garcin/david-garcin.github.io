async function updateContentOnceLoaded10()
{
    var data =`
==13111== Memcheck, a memory error detector<br />
==13111== Copyright (C) 2002-2017, and GNU GPL'd, by Julian Seward et al.<br />
==13111== Using Valgrind-3.13.0 and LibVEX; rerun with -h for copyright info<br />
==13111== Command: mismatched_delete<br />
==13111== Parent PID: 13101<br />
==13111== <br />
==13111== <span class="warning_leak">Mismatched free() / delete / delete []</span><br />
==13111== &nbsp; &nbsp;at 0x4C3323B: operator delete(void*) (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)<br />
==13111== &nbsp; &nbsp;by 0x1086E5: breakage::evil_delete_int_array(int*) (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/mismatched_delete/main.cpp#L9">&lt;memcheck-cover&gt;/tests/bin/mismatched_delete/main.cpp:9</a>)<br />
==13111== &nbsp; &nbsp;by 0x1086FB: main (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/mismatched_delete/main.cpp#L17">&lt;memcheck-cover&gt;/tests/bin/mismatched_delete/main.cpp:17</a>)<br />
==13111== <span class="leak_context_info">&nbsp;Address 0x5b7fc80 is 0 bytes inside a block of size 12 alloc'd</span><br />
==13111== &nbsp; &nbsp;at 0x4C3289F: operator new[](unsigned long) (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)<br />
==13111== &nbsp; &nbsp;by 0x1086D7: breakage::alloc_int_array() (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/mismatched_delete/main.cpp#L4">&lt;memcheck-cover&gt;/tests/bin/mismatched_delete/main.cpp:4</a>)<br />
==13111== &nbsp; &nbsp;by 0x1086F3: main (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/mismatched_delete/main.cpp#L15">&lt;memcheck-cover&gt;/tests/bin/mismatched_delete/main.cpp:15</a>)<br />
==13111== <br />
==13111== <br />
==13111== <span class="valgrind_summary_title">HEAP SUMMARY:</span><br />
==13111== &nbsp; &nbsp; in use at exit: 0 bytes in 0 blocks<br />
==13111== &nbsp; total heap usage: 2 allocs, 2 frees, 72,716 bytes allocated<br />
==13111== <br />
==13111== All heap blocks were freed -- no leaks are possible<br />
==13111== <br />
==13111== For counts of detected and suppressed errors, rerun with: -v<br />
==13111== <span class="valgrind_summary_title">ERROR SUMMARY:</span> 1 errors from 1 contexts (suppressed: 0 from 0)<br />
`;
    var analysis_div = document.getElementById('valgrind.result10.Report');
    analysis_div.innerHTML=data;
}
updateContentOnceLoaded10();
