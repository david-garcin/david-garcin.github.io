async function updateContentOnceLoaded1()
{
    var data =`
==13377== Memcheck, a memory error detector<br />
==13377== Copyright (C) 2002-2017, and GNU GPL'd, by Julian Seward et al.<br />
==13377== Using Valgrind-3.13.0 and LibVEX; rerun with -h for copyright info<br />
==13377== Command: true can take useless params and still be one true self<br />
==13377== Parent PID: 13367<br />
==13377== <br />
==13377== <br />
==13377== <span class="valgrind_summary_title">HEAP SUMMARY:</span><br />
==13377== &nbsp; &nbsp; in use at exit: 0 bytes in 0 blocks<br />
==13377== &nbsp; total heap usage: 0 allocs, 0 frees, 0 bytes allocated<br />
==13377== <br />
==13377== All heap blocks were freed -- no leaks are possible<br />
==13377== <br />
==13377== For counts of detected and suppressed errors, rerun with: -v<br />
==13377== <span class="valgrind_summary_title">ERROR SUMMARY:</span> 0 errors from 0 contexts (suppressed: 0 from 0)<br />
`;
    var analysis_div = document.getElementById('valgrind.result1.Report');
    analysis_div.innerHTML=data;
}
updateContentOnceLoaded1();
