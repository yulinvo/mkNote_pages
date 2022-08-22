import{_ as s,c as n,o as a,b as p}from"./app.8608f89d.js";const _=JSON.parse('{"title":"\u95ED\u5305","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u95ED\u5305","slug":"\u95ED\u5305"}],"relativePath":"40_python/10_python/110_\u95ED\u5305.md"}'),l={name:"40_python/10_python/110_\u95ED\u5305.md"},e=p(`<h3 id="\u95ED\u5305" tabindex="-1">\u95ED\u5305 <a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a></h3><blockquote><p>\u53C2\u8003\u6587\u6863\uFF1A<a href="https://www.bilibili.com/video/BV1M7411a7M3?from=search&amp;seid=599210040493285521&amp;spm_id_from=333.337.0.0" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1M7411a7M3?from=search&amp;seid=599210040493285521&amp;spm_id_from=333.337.0.0</a></p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u6C42\u5E73\u5747\u503C\uFF0C\u5E38\u89C4\u5199\u6CD5\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    li = []										#\u5168\u5C40\u53D8\u91CF\uFF0C\u90FD\u53EF\u4EE5\u4FEE\u6539\uFF0C\u6570\u636E\u4E0D\u5B89\u5168</span></span>
<span class="line"><span style="color:#A6ACCD;">    def average(value):</span></span>
<span class="line"><span style="color:#A6ACCD;">        li.append(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return sum(li)/len(li)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    print(average(10))</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(average(20))</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(average(30))</span></span>
<span class="line"><span style="color:#A6ACCD;">-----------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6C42\u5E73\u5747\u503C\uFF0C\u95ED\u5305\u5199\u6CD5\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    def average():</span></span>
<span class="line"><span style="color:#A6ACCD;">        li = []									#\u5C06\u5217\u8868\u5728\u51FD\u6570\u4E2D\u9690\u85CF\u8D77\u6765\uFF0C\u5728\u5176\u4ED6\u5730\u65B9\u5C31\u4E0D\u80FD\u4FEE\u6539\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">        def inner(value):</span></span>
<span class="line"><span style="color:#A6ACCD;">            li.append(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">            return sum(li)/len(li)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return inner</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    avg = average()</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(avg(10))</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(avg(20))</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(avg(30))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u53C2\u8003\u6587\u6863\uFF1Ahttps://www.bilibili.com/video/BV1JW411i7HR/?spm_id_from=333.788.recommend_more_video.0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u95ED\u5305\uFF1A \u5185\u90E8\u51FD\u6570\u5BF9\u5916\u90E8\u51FD\u6570\u4F5C\u7528\u57DF\u91CC\u53D8\u91CF\u7684\u5F15\u7528			#\u5916\u90E8\u51FD\u6570\u7684\u53D8\u91CF\uFF01\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">def func():</span></span>
<span class="line"><span style="color:#A6ACCD;">    a = 1                       			#\u5916\u90E8\u51FD\u6570\u4F5C\u7528\u57DF\u91CC\u7684\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&#39;this is func...&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    def func1(num):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&#39;this is func1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(num + a)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return func1</span></span>
<span class="line"><span style="color:#A6ACCD;">var = func()</span></span>
<span class="line"><span style="color:#A6ACCD;">var(3)</span></span>
<span class="line"><span style="color:#A6ACCD;">-----------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">mylist = [1,2,3,4,5]</span></span>
<span class="line"><span style="color:#A6ACCD;">def func(obj):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&#39;func&#39;,obj)</span></span>
<span class="line"><span style="color:#A6ACCD;">    def func1():</span></span>
<span class="line"><span style="color:#A6ACCD;">        obj[0] += 1							#\u6301\u6709\u5916\u90E8\u51FD\u6570\u4E2D\u7684\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&#39;func1:&#39;,obj)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return func1</span></span>
<span class="line"><span style="color:#A6ACCD;">var = func(mylist)</span></span>
<span class="line"><span style="color:#A6ACCD;">var()</span></span>
<span class="line"><span style="color:#A6ACCD;">var()</span></span>
<span class="line"><span style="color:#A6ACCD;">var()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),o=[e];function t(c,r,i,A,C,y){return a(),n("div",null,o)}const d=s(l,[["render",t]]);export{_ as __pageData,d as default};
