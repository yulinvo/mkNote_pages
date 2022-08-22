import{_ as s,c as n,o as a,b as l}from"./app.8608f89d.js";const _=JSON.parse('{"title":"\u8FED\u4EE3\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8FED\u4EE3\u5668","slug":"\u8FED\u4EE3\u5668"},{"level":2,"title":"\u53EF\u8FED\u4EE3\u5BF9\u8C61","slug":"\u53EF\u8FED\u4EE3\u5BF9\u8C61"},{"level":2,"title":"\u8FED\u4EE3\u5668\u4E0E\u53EF\u8FED\u4EE3\u5BF9\u8C61\u7684\u5224\u65AD","slug":"\u8FED\u4EE3\u5668\u4E0E\u53EF\u8FED\u4EE3\u5BF9\u8C61\u7684\u5224\u65AD"}],"relativePath":"40_python/10_python/130_\u8FED\u4EE3\u5668.md"}'),p={name:"40_python/10_python/130_\u8FED\u4EE3\u5668.md"},e=l(`<p><strong>\u8FED\u4EE3\u5668\u4ECB\u7ECD</strong></p><blockquote><p>1\uFF0Clist\u3001tuple\u3001dict\u3001\u4E4B\u6240\u4EE5\u80FD\u88AB\u8FED\u4EE3\uFF0C\u662F\u56E0\u4E3Adir(xx)\u91CC\u9762\u6709\u4E00\u4E2A&#39;<em>_iter__&#39;\u548C&#39;</em>_next__&#39;\u8FD9\u4E24\u4E2A\u65B9\u6CD5</p><p>2\uFF0C&#39;__iter__&#39;\u65B9\u6CD5\u9700\u8981\u8FD4\u56DE\u5BF9\u8C61\u672C\u8EAB\uFF0C\u5373self</p><p>3\uFF0C&#39;__next__&#39;\u65B9\u6CD5\u8FD4\u56DE\u4E0B\u4E00\u4E2A\u6570\u636E\uFF0C\u5982\u679C\u6570\u636E\u6CA1\u6709\u4E86\uFF0C\u8FD9\u9700\u8981\u629B\u51FA\u4E00\u4E2AStopIteration\u7684\u5F02\u5E38</p><p>\u53C2\u8003\u6587\u6863\uFF1A<a href="https://www.bilibili.com/video/BV1BT4y1P7nn?from=search&amp;seid=16150640023895278497&amp;spm_id_from=333.337.0.0" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1BT4y1P7nn?from=search&amp;seid=16150640023895278497&amp;spm_id_from=333.337.0.0</a></p></blockquote><p>\u8FED\u4EE3\u5668\u662F\u8BBF\u95EE\u96C6\u5408\u5143\u7D20\u7684\u4E00\u79CD\u65B9\u5F0F\uFF1A</p><p>\u200B 1\uFF0C\u8FED\u4EE3\u5BF9\u8C61\u4ECE\u7B2C\u4E00\u4E2A\u5143\u7D20\u5F00\u59CB\u8BBF\u95EE\uFF0C\u76F4\u5230\u6240\u6709\u5143\u7D20\u88AB\u8BBF\u95EE\u5B8C\u7ED3\u675F</p><p>\u200B 2\uFF0C\u8FED\u4EE3\u5668\u53EA\u80FD\u5F80\u524D\uFF0C\u4E0D\u80FD\u540E\u9000\uFF08\u4F9D\u7136\u662F\u4ECE\u7B2C\u4E00\u4E2A\u5143\u7D20\u8BBF\u95EE\u5230\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u4E0D\u662F\u9006\u5E8F\u7684\uFF09,\u4E0D\u8FC7\u4E5F\u5F88\u5C11\u540E\u9000</p><p>\u200B 3\uFF0C\u8FED\u4EE3\u5668\u4E0D\u9700\u8981\u4E8B\u5148\u51C6\u5907\u597D\u6574\u4E2A\u8FED\u4EE3\u8FC7\u7A0B\u4E2D\u7684\u6240\u6709\u5143\u7D20\uFF0C\u53EA\u662F\u5728\u8FED\u4EE3\u5230\u67D0\u5143\u7D20\u65F6\u624D\u8BA1\u7B97\u8BE5\u5143\u7D20\uFF0C\u8FD9\u4E2A\u7279\u5B9A\u4F7F\u5B83\u7279\u522B\u9002\u5408\u4FBF\u5229\u4E00\u4E9B\u5DE8\u5927\u6216\u662F\u65E0\u9650\u7684\u96C6\u5408\uFF0C\u6BD4\u5982\u51E0\u4E2AG\u7684\u6587\u4EF6 \u200B 4, \u8FED\u4EE3\u5B8C\u6210\u540E\u4F1A\u62A5\u9519\uFF1AStopIteration,\u5982iter\u91CC\u9762\u53EA\u67092\u4E2A\u5143\u7D20\uFF0C\u6267\u884C\u4E86\u4E09\u6B21next() a=iter([11,22,33]);print a.next()</p><h2 id="\u8FED\u4EE3\u5668" tabindex="-1">\u8FED\u4EE3\u5668 <a class="header-anchor" href="#\u8FED\u4EE3\u5668" aria-hidden="true">#</a></h2><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IT</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">None:</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">counter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__iter__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> self</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__next__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">counter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">counter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">raise</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StopIteration</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">counter</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">it1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">IT</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># for i in range(10):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># print(next(it1))							#\u901A\u8FC7next\u65B9\u6CD5\u8C03\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># print(it1.__next__())						#\u901A\u8FC7__next__()\u8C03\u7528\uFF0C\u540Cnext()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> it1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">								</span><span style="color:#676E95;">#for...in...\u5FAA\u73AF</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">item</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53EF\u8FED\u4EE3\u5BF9\u8C61" tabindex="-1">\u53EF\u8FED\u4EE3\u5BF9\u8C61 <a class="header-anchor" href="#\u53EF\u8FED\u4EE3\u5BF9\u8C61" aria-hidden="true">#</a></h2><blockquote><p>\u5224\u65AD\u4F9D\u636E\uFF1A\u5185\u90E8\u662F\u5426\u6709__iter__\u4E14\u8FD4\u56DE\u8FED\u4EE3\u5668\u5BF9\u8C61</p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class IT(object):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self) -&gt; None:</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.counter = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __iter__(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        return self</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __next__(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.counter += 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        if self.counter &gt;= 5:</span></span>
<span class="line"><span style="color:#A6ACCD;">            raise StopIteration()</span></span>
<span class="line"><span style="color:#A6ACCD;">        return self.counter</span></span>
<span class="line"><span style="color:#A6ACCD;">class Foo(object):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __iter__(self) -&gt; None:</span></span>
<span class="line"><span style="color:#A6ACCD;">        return IT()								#\u8FD4\u56DE\u4E00\u4E2A\u53EF\u8FED\u4EE3\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">obj = Foo()</span></span>
<span class="line"><span style="color:#A6ACCD;">for item in obj:</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(item)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>\u81EA\u5B9A\u4E49\u5FAA\u73AF\u8FED\u4EE3\u5668</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class IterRange(object):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self,num) -&gt; None:</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.num  = num</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.counter = -1</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __iter__(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        return self</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __next__(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.counter += 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        if self.counter &gt;= self.num :					#\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">            raise StopIteration()</span></span>
<span class="line"><span style="color:#A6ACCD;">        return self.counter</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Xrange(object):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self,max_num) -&gt; None:</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.max_num = max_num</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __iter__(self) -&gt; None:</span></span>
<span class="line"><span style="color:#A6ACCD;">        return IterRange(self.max_num)						#\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for item in Xrange(15):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(item)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h2 id="\u8FED\u4EE3\u5668\u4E0E\u53EF\u8FED\u4EE3\u5BF9\u8C61\u7684\u5224\u65AD" tabindex="-1">\u8FED\u4EE3\u5668\u4E0E\u53EF\u8FED\u4EE3\u5BF9\u8C61\u7684\u5224\u65AD <a class="header-anchor" href="#\u8FED\u4EE3\u5668\u4E0E\u53EF\u8FED\u4EE3\u5BF9\u8C61\u7684\u5224\u65AD" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u4EE3\u7801\u540C\u3010\u53EF\u8FED\u4EE3\u5BF9\u8C61\u3011\u4E2D\u7684\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">from collections import Iterator,Iterable</span></span>
<span class="line"><span style="color:#A6ACCD;">obj = list([11,22,33])</span></span>
<span class="line"><span style="color:#A6ACCD;">print(isinstance(obj,Iterator))						#obj\u4E0D\u662F\u8FED\u4EE3\u5668\uFF0C\u4F46\u662F\u662F\u53EF\u8FED\u4EE3\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">print(isinstance(obj,Iterable))						#obj\u4E0D\u662F\u8FED\u4EE3\u5668\uFF0C\u4F46\u662F\u662F\u53EF\u8FED\u4EE3\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-----------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">v1 = range(1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">dir(v1)										#\u6B64\u65F6v1\u662F\u53EF\u8FED\u4EE3\u5BF9\u8C61\uFF0C\u800C\u4E0D\u662F\u8FED\u4EE3\u5668\uFF08\u53EA\u6709__iter__\uFF0C\u6CA1\u6709__next__\u65B9\u6CD5\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">v2 = v1.__iter__()</span></span>
<span class="line"><span style="color:#A6ACCD;">dir(v2)										#\u6B64\u65F6v2\u662F\u8FED\u4EE3\u5668\uFF08\u65E2\u6709__iter__\u65B9\u6CD5\uFF0C\u4E5F\u6709__next__\u65B9\u6CD5\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,14),o=[e];function t(c,r,i,A,C,y){return a(),n("div",null,o)}const F=s(p,[["render",t]]);export{_ as __pageData,F as default};
