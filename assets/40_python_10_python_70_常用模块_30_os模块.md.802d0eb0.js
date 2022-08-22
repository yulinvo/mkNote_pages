import{_ as s,c as a,o as n,b as p}from"./app.8608f89d.js";const y=JSON.parse('{"title":"path","description":"","frontmatter":{},"headers":[{"level":3,"title":"path","slug":"path"}],"relativePath":"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/30_os\u6A21\u5757.md"}'),l={name:"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/30_os\u6A21\u5757.md"},e=p(`<div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">os.getcwd()                   #\u83B7\u53D6\u5F53\u524D\u7684\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u5373\u5F53\u524Dputhon\u811A\u672C\u7684\u5DE5\u4F5C\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">os.chdir(&#39;dirname&#39;)          #\u6539\u53D8\u5F53\u524D\u811A\u672C\u7684\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u76F8\u5F53\u4E8Ecd\uFF0C\u5207\u6362\u76EE\u5F55\u5FC5\u987B\u8981\u7528\u8FD9\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">os.curdir                     #\u8FD4\u56DE\u5F53\u524D\u76EE\u5F55\uFF1A(&#39;.&#39;)\uFF1Bos\u7684\u5C5E\u6027\uFF0C\u4E0D\u662F\u65B9\u6CD5\uFF0C\u76F4\u63A5\u8C03\u7528\uFF0C\u8FD4\u56DE&#39;.&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">os.pardir                     #\u83B7\u53D6\u4E0A\u7EA7\u76EE\u5F55\u5B57\u7B26\u4E32\u540D\uFF1B os\u7684\u5C5E\u6027\uFF0C\u4E0D\u662F\u65B9\u6CD5\uFF0C\u76F4\u63A5\u8C03\u7528\uFF0C\u8FD4\u56DE&#39;..&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">os.chmod                        #\u4FEE\u6539\u6587\u4EF6\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">os.mkdir(&#39;dir1&#39;)                     #\u751F\u6210\u5355\u7EA7\u76EE\u5F55\uFF0C\u76F8\u5F53\u4E8Emkdir dir1</span></span>
<span class="line"><span style="color:#A6ACCD;">os.rmdir(&#39;dir1&#39;)                     #\u5220\u9664\u5355\u7EA7\u76EE\u5F55\uFF0C\u76F8\u5F53\u4E8Ermdir dir1</span></span>
<span class="line"><span style="color:#A6ACCD;">os.makedirs(&#39;dir1/dir2/dir3&#39;)    #\u53EF\u751F\u6210\u591A\u5C42\u9012\u5F52\u76EE\u5F55\uFF0C \u4E2D\u95F4\u4E0D\u5B58\u5728\u7684\u76EE\u5F55\u4E5F\u88AB\u5EFA\u7ACB\u8D77\u6765\uFF0C os.mkdir()\u6CA1\u6709\u4E0A\u9762\u8FD9\u4E2A\u529F\u80FD\uFF0C\u5B83\u53EA\u80FD\u4E00\u5C42\u4E00\u5C42\u5730\u5EFA\u76EE\u5F55\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">os.removedirs(&#39;dir1&#39;)              </span></span>
<span class="line"><span style="color:#A6ACCD;">	#\u82E5\u76EE\u5F55\u4E3A\u7A7A\uFF0C\u5219\u5220\u9664\uFF0C\u5E76\u9012\u5F52\u5230\u4E0A\u7EA7\u76EE\u5F55\uFF0C\u82E5\u4E5F\u4E3A\u7A7A\u5219\u5220\u9664\uFF0C\u4EE5\u6B64\u7C7B\u63A8</span></span>
<span class="line"><span style="color:#A6ACCD;">	#\u548Cmakedirs\u4E00\u6B21\u521B\u5EFA\u591A\u4E2A\u7C7B\u4F3C\uFF0Cremovedirs\u4E00\u6B21\u53EF\u4EE5\u5220\u9664\u591A\u4E2A\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">	#\u5982\u679C\u8981\u5220\u9664\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6A21\u5757shutil\u7684retree\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">os.listdir(&#39;dir1&#39;)                   #\u5217\u51FA\u6307\u5B9A\u6587\u4EF6\u5939\u4E0B\u7684\u6240\u6709\u5B50\u76EE\u5F55\u548C\u6587\u4EF6\uFF0C\u5305\u62EC\u9690\u85CF\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">os.remove()                           #\u5220\u9664\u4E00\u4E2A\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">os.rename(&#39;oldname&#39;,&#39;newname&#39;)      #\u91CD\u547D\u540D\u6587\u4EF6/\u76EE\u5F55\uFF0Cnewname\u4E0D\u80FD\u5B58\u5728</span></span>
<span class="line"><span style="color:#A6ACCD;">	os.rename(&#39;D://Viedo/123&#39;,&#39;123-&#39;)	#\u4F1A\u5C06\u6539\u540D\u540E\u7684\u6587\u4EF6\u5B58\u653E\u5230\u5F53\u524D(\u6267\u884C\u4EE3\u7801)\u6587\u4EF6\u540C\u7EA7\u76EE\u5F55\u4E0B\uFF0C\u800C\u4E0D\u662FD://Viedo/\u76EE\u5F55\u4E0B\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">os.stat(&#39;path/filename&#39;)            #\u83B7\u53D6\u6587\u4EF6/\u76EE\u5F55\u4FE1\u606F\uFF0C\u4FEE\u6539\u65F6\u95F4\u3001\u521B\u5EFA\u65F6\u95F4\u3001\u5927\u5C0F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">os.sep				#\u8F93\u51FA\u7CFB\u7EDF\u7279\u5B9A\u7684\u8DEF\u5F84\u5206\u9694\u7B26\uFF0Clinux\u4E3A&#39;/&#39;\uFF0Cwin\u4E3A\u2018\\\\\u2019\uFF0Cpython\u73B0\u5728\u80FD\u591F\u81EA\u52A8\u8BC6\u522B\u5904\u7406\uFF0C\u54EA\u79CD\u659C\u6760\u90FD\u53EF\u4EE5</span></span>
<span class="line"><span style="color:#A6ACCD;">os.linesep                            #\u8F93\u51FA\u7CFB\u7EDF\u4F7F\u7528\u7684\u884C\u7EC8\u6B62\u7B26,linux\u4E3A\u2018\\n\u2019,win\u4E3A&#39;\\t\\n&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">os.pathsep                            #\u8F93\u51FA\u7528\u4E8E\u5206\u5272\u6587\u4EF6\u8DEF\u5F84\u7684\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;">os.name                               #\u8F93\u51FA\u5B57\u7B26\u4E32\u6307\u793A\u5F53\u524D\u4F7F\u7528\u5E73\u53F0\u3002win--&gt;&#39;nt&#39;,linux--&gt;&#39;posix&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">os.environ                            #\u83B7\u53D6\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">os.system()   #\u8FD0\u884Cshell\u547D\u4EE4\uFF0C\u76F4\u63A5\u663E\u793A\uFF1B\u6BCF\u6267\u884C\u4E00\u6B21\uFF0C\u76F8\u5F53\u4E8E\u5355\u72EC\u5F00\u542F\u4E86\u4E00\u4E2Ashell\uFF0C\u6267\u884C\u5B8C\u540Ekill\u6389\u4E86\uFF0C\u6240\u4EE5\u66F4\u6539\u76EE\u5F55\u7684\u65F6\u5019\uFF0C\u5728\u8FD9cd\u4E86\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u76EE\u5F55\u8FD8\u662F\u6CA1\u53D8</span></span>
<span class="line"><span style="color:#A6ACCD;">os.popen(&#39;&#39;).read()      #\u83B7\u53D6\u6267\u884C\u7684\u7ED3\u679C\uFF0Ca=os.system(&#39;dir&#39;)\uFF0Ca\u662F\u6267\u884C\u7684\u72B6\u6001\u7801\uFF0C\u5982\u679C\u8981\u83B7\u53D6\u7ED3\u679C\uFF0Ca=os.popen(&#39;dir&#39;).read(),print (a)  a\u662F\u5B57\u7B26\u4E32\uFF0C\u4F46\u91CC\u9762\u6709\u6362\u884C\u7B26\uFF0C\u800C\u4E142.x\u7248\u672C\u4E5F\u8981\u52A0()\u624D\u663E\u793A\u6B63\u5E38\uFF1F\uFF1F\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="path" tabindex="-1">path <a class="header-anchor" href="#path" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">os.path.abspath(path)                     #\u8FD4\u56DEpath\u89C4\u8303\u5316\u7684\u7EDD\u5BF9\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">	#print(os.path.abspath(&#39;123.py&#39;))    \u4F1A\u5728&#39;123.py&#39;\u6587\u4EF6\u524D\u52A0\u4E0A\u5F53\u524D\u7684\u6267\u884C\u76EE\u5F55\uFF08\u4E0D\u7BA1\u5F53\u524D\u76EE\u5F55\u4E0B\u6709\u6CA1\u6709&#39;123.py&#39;\u6587\u4EF6\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">os.path.split(path)                       #\u5C06path\u5206\u5272\u4E3A\u76EE\u5F55\u548C\u6587\u4EF6\u540D\u4E8C\u5143\u7EC4\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;">os.path.dirname(path)                     #\u8FD4\u56DEpath\u7684\u76EE\u5F55\uFF0C\u5B9E\u9645\u5C31\u662Fos.path.split(path)\u4E2D\u7684\u7B2C\u4E00\u9879</span></span>
<span class="line"><span style="color:#A6ACCD;">os.path.basename(path)                    #\u8FD4\u56DEpath\u6700\u540E\u7684\u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">os.path.exists(path)                      #\u5224\u65ADpath\u662F\u5426\u5B58\u5728</span></span>
<span class="line"><span style="color:#A6ACCD;">os.path.isabs(path)                       #\u5224\u65AD\u662F\u5426\u662F\u7EDD\u5BF9\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">os.path.isdir(path)                       #\u5224\u65ADpath\u662F\u5426\u662F\u4E00\u4E2A\u5B58\u5728\u7684\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">os.path.isfile(path)                      #\u5224\u65ADpath\u662F\u5426\u662F\u4E00\u4E2A\u5B58\u5728\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">os.path.join(path1,path2,path3)           #\u5C06\u591A\u4E2A\u8DEF\u5F84\u7EC4\u5408\u540E\u8FD4\u56DE\uFF0C\u7B2C\u4E00\u4E2A\u7EDD\u5BF9\u8DEF\u5F84\u4E4B\u524D\u7684\u53C2\u6570\u5C06\u88AB\u5FFD\u7565\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">	#\u5982os.path.join(&#39;a&#39;,&#39;/b&#39;,&#39;c&#39;)\uFF0C\u7ED3\u679C\u4E3A&#39;/b\\\\c&#39;\uFF0C\u8DEF\u5F84&#39;a&#39;\u88AB\u5FFD\u7565\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">os.path.getatime(path)                    #\u8FD4\u56DEpath\u6240\u6307\u5411\u7684\u6587\u4EF6\u6216\u8005\u76EE\u5F55\u7684\u6700\u540E\u5B58\u53D6\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">os.path.getmtime(path)                    #\u8FD4\u56DEpath\u6240\u6307\u5411\u7684\u6587\u4EF6\u6216\u8005\u76EE\u5F55\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),o=[e];function t(c,i,r,A,C,h){return n(),a("div",null,o)}const D=s(l,[["render",t]]);export{y as __pageData,D as default};
