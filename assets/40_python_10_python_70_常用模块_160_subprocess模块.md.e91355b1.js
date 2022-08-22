import{_ as s,c as n,o as a,b as p}from"./app.8608f89d.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/160_subprocess\u6A21\u5757.md"}'),l={name:"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/160_subprocess\u6A21\u5757.md"},o=p(`<div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import  subprocess</span></span>
<span class="line"><span style="color:#A6ACCD;">subprocess.run(&#39;ipconfig&#39;)      #2.x\u6CA1\u6709run\u65B9\u6CD5\uFF0C\u66FF\u6362os.system()</span></span>
<span class="line"><span style="color:#A6ACCD;">subprocess.call(&#39;ipconfig&#39;)     #2.x\u7684\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">subprocess.call([&quot;df&quot;,&quot;-h&quot;])    #2.x\u7684\u65B9\u6CD5\uFF0C\u6709\u591A\u4E2A\u53C2\u6570\u7684\u65F6\u5019</span></span>
<span class="line"><span style="color:#A6ACCD;">subprocess.call(&quot;df -h&quot;,shell=True)         #2.x\u7684\u65B9\u6CD5\uFF0C\u7528\u539F\u751F\u7684shell\u6267\u884C\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">a=subprocess.call(&#39;df -h&#39;,shell=True)   #print a\u53EA\u662F\u4E00\u4E2A\u72B6\u6001\u8FD4\u56DE\u7801\uFF0C\u4E0D\u662F\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">a=subprocess.call(&#39;df -h&#39;,shell=True,stdout=subprocess.PIPE)        #&#39;df -h&#39;\u5B9E\u9645\u662F\u5728\u5F53\u524D\u8FDB\u7A0B\u7684\u5B50\u8FDB\u7A0B\u6267\u884C\u7684\uFF0C\u52A0\u4E0A\u7BA1\u9053</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E24\u4E2A\u8FDB\u7A0B\u4E4B\u95F4\u9ED8\u8BA4\u662F\u4E0D\u80FD\u901A\u4FE1\u7684\uFF0C\u9700\u8981\u501F\u52A9\u7BA1\u9053\uFF08stdout=subprocess.PIPE\uFF0C\u5B50\u8FDB\u7A0B\u8F93\u51FA\u4F20\u9012\u7ED9\u4E0A\u4E00\u7EA7\u8FDB\u7A0B\uFF08\u4F1A\u6709stderr\uFF09\uFF0C\u540C\u7406\u8FD8\u6709stdin\u5F53\u524D\u7684\u8F93\u5165\u4F20\u9012\u7ED9\u5B50\u8FDB\u7A0B\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">a=subprocess.Popen(&#39;df -h&#39;,shell=True,stdout=subprocess.PIPE)        #a\u83B7\u53D6\u7684\u624D\u662F\u7ED3\u679C,df -h&#39;\u5B9E\u9645\u662F\u5728\u5F53\u524D\u8FDB\u7A0B\u7684\u5B50\u8FDB\u7A0B\u6267\u884C\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">print a.stdout.read()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">subprocess.check_call(&quot;sdf&quot;,shell=True)             #\u5982\u679C\u547D\u4EE4\u6CA1\u6709\u6B63\u5E38\u6267\u884C(\u72B6\u6001\u7801\u4E0D\u662F0)\uFF0C\u4F1A\u62A5\u9519\u629B\u5F02\u5E38</span></span>
<span class="line"><span style="color:#A6ACCD;">subprocess.check_output()                           #\u5982\u679C\u72B6\u6001\u7801\u662F0\uFF0C\u8FD4\u56DE\u6267\u884C\u7ED3\u679C\uFF0C\u5426\u5219\u629B\u5F02\u5E38</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">cwd\uFF1A\u8BBE\u7F6E\u5B50\u8FDB\u7A0B\u7684\u5F53\u524D\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u793A\u4F8B\uFF1A\u4E0E\u5B50\u8FDB\u7A0B\u4EA4\u4E92</span></span>
<span class="line"><span style="color:#A6ACCD;">import  subprocess</span></span>
<span class="line"><span style="color:#A6ACCD;">obj=subprocess.Popen([&quot;python&quot;],stdin=subprocess.PIPE,stdout=subprocess.PIPE,stderr=subprocess.PIPE)</span></span>
<span class="line"><span style="color:#A6ACCD;">obj.stdin.write(&#39;print 1 \\n&#39;)       #\u8FDB\u5165\u4EA4\u4E92\u5668\u4E4B\u540E\u8F93\u5165\u7684\u7B2C\u4E00\u53E5\u8BDD\uFF0C\u8BB0\u5F97\u6362\u884C\uFF0C\u4E0D\u7136\u547D\u4EE4\u8FDE\u5230\u4E00\u8D77\u65E0\u6CD5\u6267\u884C\u4F1A\u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">obj.stdin.write(&#39;print 2 \\n&#39;)       #\u8FDB\u5165\u4EA4\u4E92\u5668\u4E4B\u540E\u8F93\u5165\u7684\u7B2C\u4E8C\u53E5\u8BDD</span></span>
<span class="line"><span style="color:#A6ACCD;">obj.stdin.write(&#39;print 3 \\n&#39;)       #\u8FDB\u5165\u4EA4\u4E92\u5668\u4E4B\u540E\u8F93\u5165\u7684\u7B2C\u4E09\u53E5\u8BDD</span></span>
<span class="line"><span style="color:#A6ACCD;">obj.stdin.write(&#39;print 4 \\n&#39;)       #\u8FDB\u5165\u4EA4\u4E92\u5668\u4E4B\u540E\u8F93\u5165\u7684\u7B2C\u56DB\u53E5\u8BDD</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">out_error_list = obj.communicate(timeout=10)            #\u9000\u51FA\u4EA4\u4E92\u5668\uFF0C\u83B7\u53D6\u7ED3\u679C\uFF0C\u83B7\u53D6\u5230\u7684\u5C31\u662F\u4E0A\u97624\u884C\u547D\u4EE4\u7684\u8F93\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;">print out_error_list</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,1),e=[o];function t(c,r,i,A,C,u){return a(),n("div",null,e)}const y=s(l,[["render",t]]);export{d as __pageData,y as default};
