async function updateContentOnceLoaded6()
{
    var data =`
==13362== Memcheck, a memory error detector<br />
==13362== Copyright (C) 2002-2017, and GNU GPL'd, by Julian Seward et al.<br />
==13362== Using Valgrind-3.13.0 and LibVEX; rerun with -h for copyright info<br />
==13362== Command: indirectly_lost<br />
==13362== Parent PID: 13352<br />
==13362== <br />
==13362== <br />
==13362== <span class="valgrind_summary_title">HEAP SUMMARY:</span><br />
==13362== &nbsp; &nbsp; in use at exit: 96 bytes in 2 blocks<br />
==13362== &nbsp; total heap usage: 3 allocs, 1 frees, 72,800 bytes allocated<br />
==13362== <br />
==13362== <span class="error_leak">48 bytes in 1 blocks are indirectly lost in loss record 1 of 2</span><br />
==13362== &nbsp; &nbsp;at 0x4C3217F: operator new(unsigned long) (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)<br />
==13362== &nbsp; &nbsp;by 0x109063: allocate (<span class="leak_file_info">/usr/include/c++/7/ext/new_allocator.h:111</span>)<br />
==13362== &nbsp; &nbsp;by 0x109063: allocate (<span class="leak_file_info">/usr/include/c++/7/bits/alloc_traits.h:436</span>)<br />
==13362== &nbsp; &nbsp;by 0x109063: std::__allocated_ptr&lt;std::allocator&lt;std::_Sp_counted_ptr_inplace&lt;breakage::LinkedElem, std::allocator&lt;breakage::LinkedElem&gt;, (__gnu_cxx::_Lock_policy)2&gt; &gt; &gt; std::__allocate_guarded&lt;std::allocator&lt;std::_Sp_counted_ptr_inplace&lt;breakage::LinkedElem, std::allocator&lt;breakage::LinkedElem&gt;, (__gnu_cxx::_Lock_policy)2&gt; &gt; &gt;(std::allocator&lt;std::_Sp_counted_ptr_inplace&lt;breakage::LinkedElem, std::allocator&lt;breakage::LinkedElem&gt;, (__gnu_cxx::_Lock_policy)2&gt; &gt;&amp;) (<span class="leak_file_info">/usr/include/c++/7/bits/allocated_ptr.h:104</span>)<br />
==13362== &nbsp; &nbsp;by 0x108B43: __shared_count&lt;breakage::LinkedElem, std::allocator&lt;breakage::LinkedElem&gt; &gt; (<span class="leak_file_info">/usr/include/c++/7/bits/shared_ptr_base.h:635</span>)<br />
==13362== &nbsp; &nbsp;by 0x108B43: __shared_ptr&lt;std::allocator&lt;breakage::LinkedElem&gt; &gt; (<span class="leak_file_info">/usr/include/c++/7/bits/shared_ptr_base.h:1295</span>)<br />
==13362== &nbsp; &nbsp;by 0x108B43: shared_ptr&lt;std::allocator&lt;breakage::LinkedElem&gt; &gt; (<span class="leak_file_info">/usr/include/c++/7/bits/shared_ptr.h:344</span>)<br />
==13362== &nbsp; &nbsp;by 0x108B43: allocate_shared&lt;breakage::LinkedElem, std::allocator&lt;breakage::LinkedElem&gt; &gt; (<span class="leak_file_info">/usr/include/c++/7/bits/shared_ptr.h:691</span>)<br />
==13362== &nbsp; &nbsp;by 0x108B43: make_shared&lt;breakage::LinkedElem&gt; (<span class="leak_file_info">/usr/include/c++/7/bits/shared_ptr.h:707</span>)<br />
==13362== &nbsp; &nbsp;by 0x108B43: breakage::evil_linked_ptr_indirectly_lost() (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/indirectly_lost/main.cpp#L25">&lt;memcheck-cover&gt;/tests/bin/indirectly_lost/main.cpp:25</a>)<br />
==13362== &nbsp; &nbsp;by 0x108EE8: main (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/indirectly_lost/main.cpp#L35">&lt;memcheck-cover&gt;/tests/bin/indirectly_lost/main.cpp:35</a>)<br />
==13362== <br />
==13362== <span class="error_leak">96 (48 direct, 48 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2</span><br />
==13362== &nbsp; &nbsp;at 0x4C3217F: operator new(unsigned long) (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)<br />
==13362== &nbsp; &nbsp;by 0x109063: allocate (<span class="leak_file_info">/usr/include/c++/7/ext/new_allocator.h:111</span>)<br />
==13362== &nbsp; &nbsp;by 0x109063: allocate (<span class="leak_file_info">/usr/include/c++/7/bits/alloc_traits.h:436</span>)<br />
==13362== &nbsp; &nbsp;by 0x109063: std::__allocated_ptr&lt;std::allocator&lt;std::_Sp_counted_ptr_inplace&lt;breakage::LinkedElem, std::allocator&lt;breakage::LinkedElem&gt;, (__gnu_cxx::_Lock_policy)2&gt; &gt; &gt; std::__allocate_guarded&lt;std::allocator&lt;std::_Sp_counted_ptr_inplace&lt;breakage::LinkedElem, std::allocator&lt;breakage::LinkedElem&gt;, (__gnu_cxx::_Lock_policy)2&gt; &gt; &gt;(std::allocator&lt;std::_Sp_counted_ptr_inplace&lt;breakage::LinkedElem, std::allocator&lt;breakage::LinkedElem&gt;, (__gnu_cxx::_Lock_policy)2&gt; &gt;&amp;) (<span class="leak_file_info">/usr/include/c++/7/bits/allocated_ptr.h:104</span>)<br />
==13362== &nbsp; &nbsp;by 0x108AD0: __shared_count&lt;breakage::LinkedElem, std::allocator&lt;breakage::LinkedElem&gt; &gt; (<span class="leak_file_info">/usr/include/c++/7/bits/shared_ptr_base.h:635</span>)<br />
==13362== &nbsp; &nbsp;by 0x108AD0: __shared_ptr&lt;std::allocator&lt;breakage::LinkedElem&gt; &gt; (<span class="leak_file_info">/usr/include/c++/7/bits/shared_ptr_base.h:1295</span>)<br />
==13362== &nbsp; &nbsp;by 0x108AD0: shared_ptr&lt;std::allocator&lt;breakage::LinkedElem&gt; &gt; (<span class="leak_file_info">/usr/include/c++/7/bits/shared_ptr.h:344</span>)<br />
==13362== &nbsp; &nbsp;by 0x108AD0: allocate_shared&lt;breakage::LinkedElem, std::allocator&lt;breakage::LinkedElem&gt; &gt; (<span class="leak_file_info">/usr/include/c++/7/bits/shared_ptr.h:691</span>)<br />
==13362== &nbsp; &nbsp;by 0x108AD0: make_shared&lt;breakage::LinkedElem&gt; (<span class="leak_file_info">/usr/include/c++/7/bits/shared_ptr.h:707</span>)<br />
==13362== &nbsp; &nbsp;by 0x108AD0: breakage::evil_linked_ptr_indirectly_lost() (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/indirectly_lost/main.cpp#L24">&lt;memcheck-cover&gt;/tests/bin/indirectly_lost/main.cpp:24</a>)<br />
==13362== &nbsp; &nbsp;by 0x108EE8: main (<a class="leak_file_info" href="https://github.com/Farigh/memcheck-cover/blob/bb3373b2dcf6e9e30a9ba4b21e82533529055370/tests/bin/indirectly_lost/main.cpp#L35">&lt;memcheck-cover&gt;/tests/bin/indirectly_lost/main.cpp:35</a>)<br />
==13362== <br />
==13362== <span class="valgrind_summary_title">LEAK SUMMARY:</span><br />
==13362== <span class="error_leak">&nbsp; &nbsp;definitely lost: 48 bytes in 1 blocks</span><br />
==13362== <span class="error_leak">&nbsp; &nbsp;indirectly lost: 48 bytes in 1 blocks</span><br />
==13362== &nbsp; &nbsp; &nbsp;possibly lost: 0 bytes in 0 blocks<br />
==13362== &nbsp; &nbsp;still reachable: 0 bytes in 0 blocks<br />
==13362== &nbsp; &nbsp; &nbsp; &nbsp; suppressed: 0 bytes in 0 blocks<br />
==13362== <br />
==13362== For counts of detected and suppressed errors, rerun with: -v<br />
==13362== <span class="valgrind_summary_title">ERROR SUMMARY:</span> 1 errors from 1 contexts (suppressed: 0 from 0)<br />
`;
    var analysis_div = document.getElementById('valgrind.result6.Report');
    analysis_div.innerHTML=data;
}
updateContentOnceLoaded6();
