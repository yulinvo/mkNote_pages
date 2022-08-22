import{_ as s,c as n,o as a,b as l}from"./app.8608f89d.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/100_shutil\u6A21\u5757.md"}'),p={name:"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/100_shutil\u6A21\u5757.md"},e=l(`<p><strong>shutil</strong>\u6A21\u5757\uFF08\u9AD8\u7EA7\u7684 \u6587\u4EF6\u3001\u6587\u4EF6\u5939\u3001\u538B\u7F29\u5305 \u5904\u7406\u6A21\u5757\uFF09</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">shutil.copyfileobj(fsrc,fdst)       #\u62F7\u8D1D\u6587\u4EF6\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">shutil.copyfile(src,dst)            #\u62F7\u8D1D\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">shutil.copymode(src,dst)            #\u4EC5\u62F7\u8D1D\u6743\u9650\uFF0C\u5185\u5BB9\u3001\u7EC4\u3001\u7528\u6237\u5747\u4E0D\u53D8</span></span>
<span class="line"><span style="color:#A6ACCD;">shutil.copystat(src,dst)            #\u62F7\u8D1D\u72B6\u6001\u7684\u4FE1\u606F\uFF0C\u5305\u62EC\uFF1Amode bits\u3001atime\u3001mtime\u3001flags</span></span>
<span class="line"><span style="color:#A6ACCD;">shutil.copy(src,dst)                #\u62F7\u8D1D\u6587\u4EF6\u548C\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">shutil.copy2(src,dst)               #\u62F7\u8D1D\u6587\u4EF6\u548C\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">shutil.ignore_patterns(*patterns)   #\u597D\u50CF\u662F\u9700\u8981\u914D\u5408\u4E0B\u9762\u7684shutil.copytree\uFF08\uFF09\u4F7F\u7528\uFF0C\u5982\uFF1Ashutil.ignore_patterns(&#39;*.pyc&#39;,&#39;tmp*&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">shutil.copytree(src,dst,symlinks=False,ignore=None)     #\u9012\u5F52\u7684\u53BB\u62F7\u8D1D\u6587\u4EF6,\u5982\uFF1Ashutil.copytree(src,dst,symlinks=False,ignore=ignore_patterns(&#39;*.pyc&#39;,&#39;tmp*&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">shutil.rmtree(path[,ignore_errors=[,onerror]])      #\u9012\u5F52\u7684\u5220\u9664\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">shutil.move(src,dst)                #\u9012\u5F52\u7684\u53BB\u79FB\u52A8\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">shutil.make_archive(base_name=/user/123/xx.zip,format=,root_dir=&#39;&#39;)         #\u521B\u5EFA\u538B\u7F29\u5305\u5E76\u8FD4\u56DE\u6587\u4EF6\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">        base_name\uFF1A\u6587\u4EF6\u540D\uFF0C\u4E0D\u5199\u76EE\u5F55\u9ED8\u8BA4\u5F53\u524D\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">        format\uFF1A\u538B\u7F29\u5305\u79CD\u7C7B\uFF0Czip\u3001tar\u3001bztar\u3001gztar</span></span>
<span class="line"><span style="color:#A6ACCD;">        root_dir: \u8981\u538B\u7F29\u7684\u6587\u4EF6\u8DEF\u5F84\uFF08\u9ED8\u8BA4\u5F53\u524D\u8DEF\u5F84\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">        owner:\u7528\u6237\uFF0C\u9ED8\u8BA4\u5F53\u524D\u7528\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;">        group:\u7EC4\uFF0C\u9ED8\u8BA4\u5F53\u524D\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">        logger\uFF1A\u7528\u4E8E\u8BB0\u5F55\u65E5\u5FD7\uFF0C\u901A\u5E38\u662Flogging.Logger\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">shutil\u5BF9\u538B\u7F29\u5305\u7684\u5904\u7406\u662F\u8C03\u7528ZipFile\u548CTarFile\u4E24\u4E2A\u6A21\u5757\u6765\u8FDB\u884C\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">    zipfile\u538B\u7F29\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    z=zipfile.ZipFile(&#39;laxi.zip&#39;,&#39;w&#39;)           #z\u662F\u5B9E\u4F8B\uFF0C\u4E5F\u53EF\u4EE5\u53EB\u53E5\u67C4</span></span>
<span class="line"><span style="color:#A6ACCD;">    z.write(&#39;a.log&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    z.write(&#39;data.data&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    z.close()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    zipfile\u89E3\u538B\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    z=zipfile.ZipFile(&#39;laxi.zip&#39;,&#39;r&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    z.extractall()</span></span>
<span class="line"><span style="color:#A6ACCD;">    z.close</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    tarfile\u538B\u7F29\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    tar=tarfile.open(&#39;your.tar&#39;,&#39;w&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    tar.add(&#39;/home/123.zip&#39;,arcname=&#39;&#39;,)</span></span>
<span class="line"><span style="color:#A6ACCD;">    tar.add(&#39;/home/111.zip&#39;,arcname=&#39;&#39;,)</span></span>
<span class="line"><span style="color:#A6ACCD;">    tar.close()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    tarfile\u89E3\u538B\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    tar=tarfile.open(&#39;your.tar&#39;,&#39;r&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    tar.extractall()                        #\u53EF\u8BBE\u7F6E\u89E3\u538B\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">    tar.close()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),o=[e];function t(c,r,i,A,C,y){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{D as __pageData,d as default};
