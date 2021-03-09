async function updateContentOnceLoaded20()
{
    var data =`
==13310== Memcheck, a memory error detector<br />
==13310== Copyright (C) 2002-2017, and GNU GPL'd, by Julian Seward et al.<br />
==13310== Using Valgrind-3.13.0 and LibVEX; rerun with -h for copyright info<br />
==13310== Command: valgrind_warnings<br />
==13310== Parent PID: 13300<br />
==13310== <br />
==13310== <span class="valgrind_warning">Warning: invalid file descriptor -1 in syscall write()</span><br />
==13310== <span class="valgrind_warning">Warning: ignored attempt to set SIGSTOP handler in sigaction();</span><br />
==13310== &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="valgrind_warning_context">the SIGSTOP signal is uncatchable</span><br />
==13310== <span class="valgrind_warning">Warning: bad signal number 65 in sigaction()</span><br />
==13310== <span class="valgrind_warning">Warning: ignored attempt to set SIGRT32 handler in sigaction();</span><br />
==13310== &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="valgrind_warning_context">the SIGRT32 signal is used internally by Valgrind</span><br />
==13310== <br />
==13310== <span class="valgrind_summary_title">HEAP SUMMARY:</span><br />
==13310== &nbsp; &nbsp; in use at exit: 0 bytes in 0 blocks<br />
==13310== &nbsp; total heap usage: 0 allocs, 0 frees, 0 bytes allocated<br />
==13310== <br />
==13310== All heap blocks were freed -- no leaks are possible<br />
==13310== <br />
==13310== For counts of detected and suppressed errors, rerun with: -v<br />
==13310== <span class="valgrind_summary_title">ERROR SUMMARY:</span> 0 errors from 0 contexts (suppressed: 0 from 0)<br />
`;
    var analysis_div = document.getElementById('valgrind.result20.Report');
    analysis_div.innerHTML=data;
}
updateContentOnceLoaded20();
