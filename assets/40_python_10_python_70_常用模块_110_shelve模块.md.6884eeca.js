import{_ as s,c as n,o as a,b as p}from"./app.8608f89d.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/110_shelve\u6A21\u5757.md"}'),l={name:"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/110_shelve\u6A21\u5757.md"},e=p(`<p>shelve\u6A21\u5757\u662F\u4E00\u4E2A\u7B80\u5355\u7684k\u3001v\u5C06\u5185\u5B58\u6570\u636E\u901A\u8FC7\u6587\u4EF6\u6301\u4E45\u5316\u7684\u6A21\u5757\uFF0C\u53EF\u4EE5\u6301\u4E45\u5316\u4EFB\u4F55pickle\u53EF\u652F\u6301\u7684python\u6570\u636E\u683C\u5F0F\uFF08\u5B9E\u9645\u662F\u5BF9pickle\u53C8\u4F5C\u4E86\u4E00\u5C42\u5C01\u88C5\uFF09</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import  shelve,pickle</span></span>
<span class="line"><span style="color:#A6ACCD;">d=shelve.open(&#39;shelve_test&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">class Test(object):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self,n):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.n = n</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">t=Test(123)</span></span>
<span class="line"><span style="color:#A6ACCD;">t2=Test(123334)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">name=[&#39;alex&#39;,&#39;rain&#39;,&#39;test&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">d[&#39;test&#39;] = name                #\u6301\u4E45\u5316\u5217\u8868\uFF0C\u6307\u5B9A\u4E86\u4E00\u4E2A\u540D\u5B57\u4E3Atest \uFF0C\u5C06name\u5B58\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">d[&#39;t1&#39;] = t                     #\u6301\u4E45\u5316\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">d[&#39;t2&#39;] = t2                    #\u540C\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">d.close()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#\u8FD0\u884C\u540E2.x\u4F1A\u751F\u6210\u4E00\u4E2A\u6587\u4EF6\uFF0C3.x\u4F1A\u751F\u62103\u4E2A\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">a=shelve.open(&#39;shelve_test&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">print a.get(&#39;test&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">print dir(a)</span></span>
<span class="line"><span style="color:#A6ACCD;">b=a.get(&#39;t1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">print b.n</span></span>
<span class="line"><span style="color:#A6ACCD;">b2=a.get(&#39;t2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">print b2.n</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),t=[e];function o(c,r,A,C,i,_){return a(),n("div",null,t)}const d=s(l,[["render",o]]);export{D as __pageData,d as default};
