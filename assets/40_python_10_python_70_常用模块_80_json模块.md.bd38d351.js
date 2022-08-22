import{_ as s,c as n,o as a,b as p}from"./app.8608f89d.js";const d=JSON.parse('{"title":"f.write(str(dic))","description":"","frontmatter":{},"headers":[],"relativePath":"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/80_json\u6A21\u5757.md"}'),l={name:"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/80_json\u6A21\u5757.md"},o=p(`<p><strong>\u7528\u4E8E\u5E8F\u5217\u5316\u7684\u4E24\u4E2A\u6A21\u5757\uFF1A</strong></p><p>\u200B <strong>json</strong>\uFF1A\u7528\u4E8E\u5B57\u7B26\u4E32\u548Cpython\u6570\u636E\u7C7B\u578B\u95F4\u8FDB\u884C\u8F6C\u6362</p><p>\u200B <strong>pickle</strong>\uFF1A\u7528\u4E8Epython\u7279\u6709\u7684\u7C7B\u578B\u548Cpython\u6570\u636E\u7C7B\u578B\u95F4\u8FDB\u884C\u8F6C\u6362</p><p><strong>json\u6A21\u5757\u63D0\u4F9B\u4E864\u4E2A\u529F\u80FD\uFF1Adumps\u3001dump\u3001loads\u3001load</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">json.dumps</span></span>
<span class="line"><span style="color:#A6ACCD;">    t={&#39;name&#39;:&#39;jim&#39;};json.dumps(t)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">json.loads</span></span>
<span class="line"><span style="color:#A6ACCD;">    aa=&#39;{&quot;name&quot;: &quot;jim&quot;}&#39;;json.loads(aa)				#aa=&quot;{&#39;name&#39;: &#39;jim&#39;}&quot;\u4E0D\u884Cloads\u4E0D\u6210\u529F\u4E3A\u4EC0\u4E48\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">json\u7684\u5199\u6CD5\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">f = open(&#39;tmp.txt&#39;,&#39;wb&#39;)                 #json\u5728python2.x\u4E2D\u8FD9\u79CD\u683C\u5F0F\u6CA1\u6709\u95EE\u9898\uFF0C\u57283.x\u4E2Djson\u5199\u5165\u8981\u662F\u5B57\u7B26\u4E32\u683C\u5F0F\uFF0Cw\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">dic={&#39;name&#39;:&#39;alex&#39;,&#39;age&#39;:&#39;24&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;"># f.write(str(dic))</span></span>
<span class="line"><span style="color:#A6ACCD;">f.write(json.dumps(dic))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># f.write(123)          #\u6B63\u5E38\u60C5\u51B5\u4E0B\u53EA\u80FD\u5199\u5165\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;">f.close()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">f=open(&#39;tmp.txt&#39;,&#39;rb&#39;)          #json\u5728python2.x\u4E2D\u8FD9\u79CD\u683C\u5F0F\u6CA1\u6709\u95EE\u9898\uFF0C\u57283.x\u4E2Djson\u8BFB\u53D6\u8981\u662F\u5B57\u7B26\u4E32\u683C\u5F0F\uFF0Cr\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;"># print pickle.loads(f.read())</span></span>
<span class="line"><span style="color:#A6ACCD;">a=json.loads(f.read())</span></span>
<span class="line"><span style="color:#A6ACCD;">for i,v in a.items():</span></span>
<span class="line"><span style="color:#A6ACCD;">    print i,v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),e=[o];function t(c,r,i,A,C,y){return a(),n("div",null,e)}const D=s(l,[["render",t]]);export{d as __pageData,D as default};
