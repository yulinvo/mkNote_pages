import{_ as s,c as n,o as a,b as p}from"./app.8608f89d.js";const _=JSON.parse('{"title":"a.py\uFF1A\u5B9A\u4E49\u7C7B\uFF0C\u5E26\u65B9\u6CD5\u7684\u3002\u901A\u8FC7pickle\u5E8F\u5217\u5316\u5B58\u50A8\u5230\u672C\u5730","description":"","frontmatter":{},"headers":[],"relativePath":"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/90_pickle\u6A21\u5757.md"}'),l={name:"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/90_pickle\u6A21\u5757.md"},e=p(`<p><strong>\u7528\u4E8E\u5E8F\u5217\u5316\u7684\u4E24\u4E2A\u6A21\u5757\uFF1A</strong></p><p>\u200B <strong>json</strong>\uFF1A\u7528\u4E8E\u5B57\u7B26\u4E32\u548Cpython\u6570\u636E\u7C7B\u578B\u95F4\u8FDB\u884C\u8F6C\u6362</p><p>\u200B <strong>pickle</strong>\uFF1A\u7528\u4E8Epython\u7279\u6709\u7684\u7C7B\u578B\u548Cpython\u6570\u636E\u7C7B\u578B\u95F4\u8FDB\u884C\u8F6C\u6362</p><p>pickle\u662Fpython\u4E2D\u72EC\u6709\u7684\uFF0C\u4E24\u8FB9\u90FD\u662Fpython\u624D\u884C\uFF1B</p><p>pickle\u652F\u6301\u7684\u8303\u56F4\u6BD4\u8F83\u5927\uFF1A\u5982\u7C7B\u3001\u7A0B\u5E8F\u3001\u51FD\u6570\u90FD\u652F\u6301\u5E8F\u5217\u5316 \uFF0C\u6E38\u620F\u7684\u5B58\u6863\u4E5F\u662F\u4F7F\u7528pickle\u7684\u5E8F\u5217\u5316\u529F\u80FD</p><p><strong>pickle\u6A21\u5757\u63D0\u4F9B\u4E864\u4E2A\u529F\u80FD\uFF1Adumps\u3001dump\u3001loads\u3001load</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pickle.dumps</span></span>
<span class="line"><span style="color:#A6ACCD;">	-	t={&#39;name&#39;:&#39;jim&#39;};	pickle.dumps(t)</span></span>
<span class="line"><span style="color:#A6ACCD;">	-	stu=Student();	stu_data=pickle.dumps(stu)			#\u5E8F\u5217\u5316class\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pickle.loads</span></span>
<span class="line"><span style="color:#A6ACCD;">	-	obj=pickle.loads(stu_data);		print(obj.name)			#\u53CD\u5E8F\u5217\u5316class\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">###</span></span>
<span class="line"><span style="color:#A6ACCD;">a.py\uFF1A\u5B9A\u4E49\u7C7B\uFF0C\u5E26\u65B9\u6CD5\u7684\u3002\u901A\u8FC7pickle\u5E8F\u5217\u5316\u5B58\u50A8\u5230\u672C\u5730</span></span>
<span class="line"><span style="color:#A6ACCD;">b.py\uFF1A\u8BFBa\u5B58\u7684\u6587\u4EF6\uFF0C\u62FF\u5230\u5BF9\u8C61\uFF0C\u6267\u884Ca\u7684\u65B9\u6CD5             #b\u4E2D\u6CA1\u6709\u5B9A\u4E49a\u4E2D\u7684\u76F8\u5173\u65B9\u6CD5\u4E5F\u80FD\u6267\u884C\uFF0C\u76F8\u5F53\u4E8E\u5C06\u6570\u636E\u62F7\u8D1D\u4E86\u4E00\u4EFD</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pickle\u7684\u5199\u6CD5\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">f = open(&#39;tmp.txt&#39;,&#39;wb&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">dic={&#39;name&#39;:&#39;alex&#39;,&#39;age&#39;:&#39;24&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;"># f.write(str(dic))                 #\u8FD9\u79CD\u5199\u6CD5\u4F1A\u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">f.write(pickle.dumps(dic))</span></span>
<span class="line"><span style="color:#A6ACCD;">#pickle.dump(dic,f)                 #pickle\u7684dump\u7684\u5199\u6CD5\uFF0C\u7B2C\u4E00\u4E2Aobject\uFF0C\u7B2C\u4E8C\u4E2Afile\uFF0C\u4E0D\u7528f.write\u4E86         ;dump\u4E86\u51E0\u6B21\u5C31\u53EF\u4EE5\u8BFB\u51E0\u6B21</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># f.write(123)          #\u6B63\u5E38\u60C5\u51B5\u4E0B\u53EA\u80FD\u5199\u5165\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;">f.close()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">f=open(&#39;tmp.txt&#39;,&#39;rb&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"># print pickle.loads(f.read())</span></span>
<span class="line"><span style="color:#A6ACCD;">a=pickle.loads(f.read())</span></span>
<span class="line"><span style="color:#A6ACCD;">#a=pickle.load(f)                #load\u7684\u5199\u6CD5\uFF0C\u76F8\u5F53\u4E8E\u5148\u8BFB\u51FA\u5185\u5BB9\u5728loads\u5408\u5E76\u4E3A\u4E86\u4E00\u6B65load</span></span>
<span class="line"><span style="color:#A6ACCD;">for i,v in a.items():</span></span>
<span class="line"><span style="color:#A6ACCD;">    print i,v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),o=[e];function t(c,i,r,A,C,d){return a(),n("div",null,o)}const D=s(l,[["render",t]]);export{_ as __pageData,D as default};
