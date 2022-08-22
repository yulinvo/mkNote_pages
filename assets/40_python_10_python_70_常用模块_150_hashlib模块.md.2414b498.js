import{_ as s,c as n,o as a,b as p}from"./app.8608f89d.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/150_hashlib\u6A21\u5757.md"}'),l={name:"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/150_hashlib\u6A21\u5757.md"},e=p(`<p>\u7528\u4E8E\u52A0\u5BC6\u76F8\u5173\u7684\u64CD\u4F5C\uFF0C3.x\u91CC\u9762\u4EE3\u66FF\u4E86md5\u6A21\u5757\u548Csha\u6A21\u5757\uFF0C\u4E3B\u8981\u63D0\u4F9BSHA1\u3001SHA224\u3001SHA256\u3001SHA384\u3001SHA512\u3001MD5\u7B97\u6CD5</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import  hashlib</span></span>
<span class="line"><span style="color:#A6ACCD;">m=hashlib.md5()                              #sha1\u7684\u7C7B\u4F3C</span></span>
<span class="line"><span style="color:#A6ACCD;">m.update(b&#39;hello&#39;)                #&#39;hello&#39;\u5C31\u662F\u8981\u52A0\u5BC6\u7684\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;">m.update(b&quot;it&#39;s me&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">print  m.digest()</span></span>
<span class="line"><span style="color:#A6ACCD;">print len(m.hexdigest())            #\u5E38\u7528\u7684\u662F\u8FD9\u79CD\uFF0C\u8F93\u51FA\u7684\u662F32\u4F4D\u6570\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">python\u4E2D\u8FD8\u6709\u4E00\u79CDhmac\u6A21\u5757\uFF0C\u5728\u539F\u6709\u52A0\u5BC6\u7B97\u6CD5\u7684\u57FA\u7840\u4E0A\u5728\u52A0\u5BC6\u4E00\u5C42\uFF0C\u52A0\u5BC6\u884C\u66F4\u5F3A\uFF0C\u5E38\u7528\u4E8E\u6D88\u606F\u52A0\u5BC6\uFF0C\u56E0\u4E3A\u901F\u5EA6\u6BD4\u8F83\u5FEB</span></span>
<span class="line"><span style="color:#A6ACCD;">import  hmac</span></span>
<span class="line"><span style="color:#A6ACCD;">h = hmac.new(&#39;hello&#39;)          #\u8FD9\u662F\u4F20\u9012\u4E00\u4E2Akey</span></span>
<span class="line"><span style="color:#A6ACCD;">h.update(&#39;nihao&#39;)              #\u8FD9\u662F\u9700\u8981\u52A0\u5BC6\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">print h.hexdigest()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),t=[e];function o(c,i,r,_,h,A){return a(),n("div",null,t)}const m=s(l,[["render",o]]);export{d as __pageData,m as default};
