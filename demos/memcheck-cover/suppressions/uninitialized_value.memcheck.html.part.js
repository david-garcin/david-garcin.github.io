async function updateContentOnceLoaded2()
{
    var data =`
==13389== Memcheck, a memory error detector<br />
==13389== Copyright (C) 2002-2017, and GNU GPL'd, by Julian Seward et al.<br />
==13389== Using Valgrind-3.13.0 and LibVEX; rerun with -h for copyright info<br />
==13389== Command: uninitialized_value with suppressions<br />
==13389== Parent PID: 13378<br />
==13389== <br />
==13389== <span class="warning_leak">Conditional jump or move depends on uninitialised value(s)</span><br />
==13389== &nbsp; &nbsp;at 0x108AC0: breakage::evil_jump_on_stack_uninitialized_value() (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L14">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:14</a>)<br />
==13389== &nbsp; &nbsp;by 0x108BC6: main (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L34">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:34</a>)<br />
==13389== <span class="leak_context_info">&nbsp;Uninitialised value was created by a stack allocation</span><br />
==13389== &nbsp; &nbsp;at 0x108A88: breakage::evil_jump_on_stack_uninitialized_value() (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L5">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:5</a>)<br />
==13389== <br />
<div class="suppression_title" onclick="javascript:ToogleSuppressionVisibility(this)"><span class="suppression_visibility_icon"><div class="expand"><div></div></div></span> Show generated suppression</div><br /><div class="hidden suppression_content">{<br />
 &nbsp; &lt;insert_a_suppression_name_here&gt;<br />
 &nbsp; Memcheck:Cond<br />
 &nbsp; fun:_ZN8breakage38evil_jump_on_stack_uninitialized_valueEv<br />
 &nbsp; fun:main<br />
}</div>====<br />====<br />
==13389== <span class="warning_leak">Conditional jump or move depends on uninitialised value(s)</span><br />
==13389== &nbsp; &nbsp;at 0x4F45B2A: std::ostreambuf_iterator&lt;char, std::char_traits&lt;char&gt; &gt; std::num_put&lt;char, std::ostreambuf_iterator&lt;char, std::char_traits&lt;char&gt; &gt; &gt;::_M_insert_int&lt;long&gt;(std::ostreambuf_iterator&lt;char, std::char_traits&lt;char&gt; &gt;, std::ios_base&amp;, char, long) const (in /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.25)<br />
==13389== &nbsp; &nbsp;by 0x4F52074: std::ostream&amp; std::ostream::_M_insert&lt;long&gt;(long) (in /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.25)<br />
==13389== &nbsp; &nbsp;by 0x108B5D: breakage::evil_use_of_uninitialized_value() (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L26">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:26</a>)<br />
==13389== &nbsp; &nbsp;by 0x108BCB: main (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L35">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:35</a>)<br />
==13389== <span class="leak_context_info">&nbsp;Uninitialised value was created by a heap allocation</span><br />
==13389== &nbsp; &nbsp;at 0x4C3217F: operator new(unsigned long) (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)<br />
==13389== &nbsp; &nbsp;by 0x108B4C: breakage::evil_use_of_uninitialized_value() (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L23">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:23</a>)<br />
==13389== &nbsp; &nbsp;by 0x108BCB: main (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L35">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:35</a>)<br />
==13389== <br />
<div class="suppression_title" onclick="javascript:ToogleSuppressionVisibility(this)"><span class="suppression_visibility_icon"><div class="expand"><div></div></div></span> Show generated suppression</div><br /><div class="hidden suppression_content">{<br />
 &nbsp; &lt;insert_a_suppression_name_here&gt;<br />
 &nbsp; Memcheck:Cond<br />
 &nbsp; fun:_ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE13_M_insert_intIlEES3_S3_RSt8ios_basecT_<br />
 &nbsp; fun:_ZNSo9_M_insertIlEERSoT_<br />
 &nbsp; fun:_ZN8breakage31evil_use_of_uninitialized_valueEv<br />
 &nbsp; fun:main<br />
}</div>====<br />====<br />
==13389== <span class="warning_leak">Use of uninitialised value of size 8</span><br />
==13389== &nbsp; &nbsp;at 0x4F4562E: ??? (in /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.25)<br />
==13389== &nbsp; &nbsp;by 0x4F45B53: std::ostreambuf_iterator&lt;char, std::char_traits&lt;char&gt; &gt; std::num_put&lt;char, std::ostreambuf_iterator&lt;char, std::char_traits&lt;char&gt; &gt; &gt;::_M_insert_int&lt;long&gt;(std::ostreambuf_iterator&lt;char, std::char_traits&lt;char&gt; &gt;, std::ios_base&amp;, char, long) const (in /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.25)<br />
==13389== &nbsp; &nbsp;by 0x4F52074: std::ostream&amp; std::ostream::_M_insert&lt;long&gt;(long) (in /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.25)<br />
==13389== &nbsp; &nbsp;by 0x108B5D: breakage::evil_use_of_uninitialized_value() (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L26">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:26</a>)<br />
==13389== &nbsp; &nbsp;by 0x108BCB: main (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L35">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:35</a>)<br />
==13389== <span class="leak_context_info">&nbsp;Uninitialised value was created by a heap allocation</span><br />
==13389== &nbsp; &nbsp;at 0x4C3217F: operator new(unsigned long) (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)<br />
==13389== &nbsp; &nbsp;by 0x108B4C: breakage::evil_use_of_uninitialized_value() (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L23">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:23</a>)<br />
==13389== &nbsp; &nbsp;by 0x108BCB: main (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L35">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:35</a>)<br />
==13389== <br />
<div class="suppression_title" onclick="javascript:ToogleSuppressionVisibility(this)"><span class="suppression_visibility_icon"><div class="expand"><div></div></div></span> Show generated suppression</div><br /><div class="hidden suppression_content">{<br />
 &nbsp; &lt;insert_a_suppression_name_here&gt;<br />
 &nbsp; Memcheck:Value8<br />
 &nbsp; obj:/usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.25<br />
 &nbsp; fun:_ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE13_M_insert_intIlEES3_S3_RSt8ios_basecT_<br />
 &nbsp; fun:_ZNSo9_M_insertIlEERSoT_<br />
 &nbsp; fun:_ZN8breakage31evil_use_of_uninitialized_valueEv<br />
 &nbsp; fun:main<br />
}</div>====<br />====<br />
==13389== <span class="warning_leak">Conditional jump or move depends on uninitialised value(s)</span><br />
==13389== &nbsp; &nbsp;at 0x4F4563B: ??? (in /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.25)<br />
==13389== &nbsp; &nbsp;by 0x4F45B53: std::ostreambuf_iterator&lt;char, std::char_traits&lt;char&gt; &gt; std::num_put&lt;char, std::ostreambuf_iterator&lt;char, std::char_traits&lt;char&gt; &gt; &gt;::_M_insert_int&lt;long&gt;(std::ostreambuf_iterator&lt;char, std::char_traits&lt;char&gt; &gt;, std::ios_base&amp;, char, long) const (in /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.25)<br />
==13389== &nbsp; &nbsp;by 0x4F52074: std::ostream&amp; std::ostream::_M_insert&lt;long&gt;(long) (in /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.25)<br />
==13389== &nbsp; &nbsp;by 0x108B5D: breakage::evil_use_of_uninitialized_value() (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L26">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:26</a>)<br />
==13389== &nbsp; &nbsp;by 0x108BCB: main (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L35">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:35</a>)<br />
==13389== <span class="leak_context_info">&nbsp;Uninitialised value was created by a heap allocation</span><br />
==13389== &nbsp; &nbsp;at 0x4C3217F: operator new(unsigned long) (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)<br />
==13389== &nbsp; &nbsp;by 0x108B4C: breakage::evil_use_of_uninitialized_value() (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L23">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:23</a>)<br />
==13389== &nbsp; &nbsp;by 0x108BCB: main (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L35">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:35</a>)<br />
==13389== <br />
<div class="suppression_title" onclick="javascript:ToogleSuppressionVisibility(this)"><span class="suppression_visibility_icon"><div class="expand"><div></div></div></span> Show generated suppression</div><br /><div class="hidden suppression_content">{<br />
 &nbsp; &lt;insert_a_suppression_name_here&gt;<br />
 &nbsp; Memcheck:Cond<br />
 &nbsp; obj:/usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.25<br />
 &nbsp; fun:_ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE13_M_insert_intIlEES3_S3_RSt8ios_basecT_<br />
 &nbsp; fun:_ZNSo9_M_insertIlEERSoT_<br />
 &nbsp; fun:_ZN8breakage31evil_use_of_uninitialized_valueEv<br />
 &nbsp; fun:main<br />
}</div>====<br />====<br />
==13389== <span class="warning_leak">Conditional jump or move depends on uninitialised value(s)</span><br />
==13389== &nbsp; &nbsp;at 0x4F45B86: std::ostreambuf_iterator&lt;char, std::char_traits&lt;char&gt; &gt; std::num_put&lt;char, std::ostreambuf_iterator&lt;char, std::char_traits&lt;char&gt; &gt; &gt;::_M_insert_int&lt;long&gt;(std::ostreambuf_iterator&lt;char, std::char_traits&lt;char&gt; &gt;, std::ios_base&amp;, char, long) const (in /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.25)<br />
==13389== &nbsp; &nbsp;by 0x4F52074: std::ostream&amp; std::ostream::_M_insert&lt;long&gt;(long) (in /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.25)<br />
==13389== &nbsp; &nbsp;by 0x108B5D: breakage::evil_use_of_uninitialized_value() (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L26">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:26</a>)<br />
==13389== &nbsp; &nbsp;by 0x108BCB: main (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L35">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:35</a>)<br />
==13389== <span class="leak_context_info">&nbsp;Uninitialised value was created by a heap allocation</span><br />
==13389== &nbsp; &nbsp;at 0x4C3217F: operator new(unsigned long) (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)<br />
==13389== &nbsp; &nbsp;by 0x108B4C: breakage::evil_use_of_uninitialized_value() (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L23">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:23</a>)<br />
==13389== &nbsp; &nbsp;by 0x108BCB: main (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/uninitialized_value/main.cpp#L35">&lt;memcheck-cover&gt;/tests/bin/uninitialized_value/main.cpp:35</a>)<br />
==13389== <br />
<div class="suppression_title" onclick="javascript:ToogleSuppressionVisibility(this)"><span class="suppression_visibility_icon"><div class="expand"><div></div></div></span> Show generated suppression</div><br /><div class="hidden suppression_content">{<br />
 &nbsp; &lt;insert_a_suppression_name_here&gt;<br />
 &nbsp; Memcheck:Cond<br />
 &nbsp; fun:_ZNKSt7num_putIcSt19ostreambuf_iteratorIcSt11char_traitsIcEEE13_M_insert_intIlEES3_S3_RSt8ios_basecT_<br />
 &nbsp; fun:_ZNSo9_M_insertIlEERSoT_<br />
 &nbsp; fun:_ZN8breakage31evil_use_of_uninitialized_valueEv<br />
 &nbsp; fun:main<br />
}</div>====<br />====<br />
==13389== <br />
==13389== <span class="valgrind_summary_title">HEAP SUMMARY:</span><br />
==13389== &nbsp; &nbsp; in use at exit: 0 bytes in 0 blocks<br />
==13389== &nbsp; total heap usage: 3 allocs, 3 frees, 76,804 bytes allocated<br />
==13389== <br />
==13389== All heap blocks were freed -- no leaks are possible<br />
==13389== <br />
==13389== For counts of detected and suppressed errors, rerun with: -v<br />
==13389== <span class="valgrind_summary_title">ERROR SUMMARY:</span> 5 errors from 5 contexts (suppressed: 0 from 0)<br />
`;
    var analysis_div = document.getElementById('valgrind.result2.Report');
    analysis_div.innerHTML=data;
}
updateContentOnceLoaded2();
