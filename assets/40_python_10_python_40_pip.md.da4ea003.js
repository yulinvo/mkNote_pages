import{_ as s,c as a,o as n,b as p}from"./app.8608f89d.js";const h=JSON.parse('{"title":"\u914D\u7F6Epip\u4EE3\u7406\u52A0\u901F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6Epip\u4EE3\u7406\u52A0\u901F","slug":"\u914D\u7F6Epip\u4EE3\u7406\u52A0\u901F"},{"level":3,"title":"windows\u914D\u7F6E\u52A0\u901F","slug":"windows\u914D\u7F6E\u52A0\u901F"},{"level":3,"title":"linux\u914D\u7F6E\u52A0\u901F","slug":"linux\u914D\u7F6E\u52A0\u901F"},{"level":2,"title":"pip\u5E38\u7528\u547D\u4EE4","slug":"pip\u5E38\u7528\u547D\u4EE4"},{"level":3,"title":"\u589E\uFF1A","slug":"\u589E\uFF1A"},{"level":3,"title":"\u5220\uFF1A","slug":"\u5220\uFF1A"},{"level":3,"title":"\u6539\uFF1A","slug":"\u6539\uFF1A"},{"level":3,"title":"\u67E5\uFF1A","slug":"\u67E5\uFF1A"}],"relativePath":"40_python/10_python/40_pip.md"}'),l={name:"40_python/10_python/40_pip.md"},e=p(`<h2 id="\u914D\u7F6Epip\u4EE3\u7406\u52A0\u901F" tabindex="-1">\u914D\u7F6Epip\u4EE3\u7406\u52A0\u901F <a class="header-anchor" href="#\u914D\u7F6Epip\u4EE3\u7406\u52A0\u901F" aria-hidden="true">#</a></h2><p>\u914D\u7F6Epython\u7684pip\u6E90\uFF1A<a href="https://developer.aliyun.com/mirror/" target="_blank" rel="noreferrer">https://developer.aliyun.com/mirror/</a></p><h3 id="windows\u914D\u7F6E\u52A0\u901F" tabindex="-1">windows\u914D\u7F6E\u52A0\u901F <a class="header-anchor" href="#windows\u914D\u7F6E\u52A0\u901F" aria-hidden="true">#</a></h3><ul><li><p>\u65B9\u5F0F\u4E00\uFF1A pip config edit</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pip config --editor C:\\WINDOWS\\system32\\notepad.exe edit \uFF0C\u6DFB\u52A0\u5185\u5BB9\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">	[global]</span></span>
<span class="line"><span style="color:#A6ACCD;">	index-url = https://pypi.tuna.tsinghua.edu.cn/simple</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6587\u4EF6\u9ED8\u8BA4\u4FDD\u5B58\u4F4D\u7F6E\uFF1A	C:\\Users\\\${user}\\AppData\\Roaming\\pip\\pip.ini</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u65B9\u5F0F\u4E8C\uFF1A \u624B\u52A8\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">1, cd %APPDATA%				#\u672C\u673A\u4E0A\u7684\u76EE\u5F55\u662F C:\\Users\\\${user}\\AppData\\Roaming</span></span>
<span class="line"><span style="color:#A6ACCD;">2, mkdir pip &amp;&amp; cd pip &amp;&amp; touch pip.ini</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#cat pip.ini</span></span>
<span class="line"><span style="color:#A6ACCD;">	[global]</span></span>
<span class="line"><span style="color:#A6ACCD;">	index-url = https://pypi.tuna.tsinghua.edu.cn/simple</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h3 id="linux\u914D\u7F6E\u52A0\u901F" tabindex="-1">linux\u914D\u7F6E\u52A0\u901F <a class="header-anchor" href="#linux\u914D\u7F6E\u52A0\u901F" aria-hidden="true">#</a></h3><ul><li><p>\u65B9\u5F0F\u4E00 \uFF1A pip config edit</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># pip config edit  --editor vim				#\u914D\u7F6E\u6587\u4EF6\u9ED8\u8BA4\u4FDD\u5B58\u5728\uFF1A&quot;~/.config/pip/pip.conf&quot;	</span></span>
<span class="line"><span style="color:#A6ACCD;">    [global]</span></span>
<span class="line"><span style="color:#A6ACCD;">    index-url = https://mirrors.aliyun.com/pypi/simple/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    [install]</span></span>
<span class="line"><span style="color:#A6ACCD;">    trusted-host=mirrors.aliyun.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6CE8\u610F\uFF1A\u76EE\u5F55\u8981\u5148\u521B\u5EFA\u5230&quot;~/.config/pip&quot;\uFF0C\u4E0D\u7136\u5F53\u76EE\u5F55\u4E0D\u5B58\u5728\u65F6\u914D\u7F6E\u6587\u4EF6\u65E0\u6CD5\u4FDD\u5B58</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u65B9\u5F0F\u4E8C\uFF1A \u624B\u52A8\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">touch ~/.pip/pip.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#cat ~/.pip/pip.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">    [global]</span></span>
<span class="line"><span style="color:#A6ACCD;">    index-url = https://mirrors.aliyun.com/pypi/simple/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    [install]</span></span>
<span class="line"><span style="color:#A6ACCD;">    trusted-host=mirrors.aliyun.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><p><strong>\u6D4B\u8BD5</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pip config get global.index-url					#\u8F93\u51FAhttps://mirrors.aliyun.com/pypi/simple/</span></span>
<span class="line"><span style="color:#A6ACCD;">pip config get install.trusted-host				#\u8F93\u51FAmirrors.aliyun.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="pip\u5E38\u7528\u547D\u4EE4" tabindex="-1">pip\u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#pip\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a></h2><p>/usr/local/python3/bin/python3.9 -m pip install --upgrade pip #\u5347\u7EA7pip</p><h3 id="\u589E\uFF1A" tabindex="-1">\u589E\uFF1A <a class="header-anchor" href="#\u589E\uFF1A" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pip install django							#\u5B89\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5220\uFF1A" tabindex="-1">\u5220\uFF1A <a class="header-anchor" href="#\u5220\uFF1A" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u6539\uFF1A" tabindex="-1">\u6539\uFF1A <a class="header-anchor" href="#\u6539\uFF1A" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u67E5\uFF1A" tabindex="-1">\u67E5\uFF1A <a class="header-anchor" href="#\u67E5\uFF1A" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,18),t=[e];function i(o,c,r,d,u,A){return n(),a("div",null,t)}const y=s(l,[["render",i]]);export{h as __pageData,y as default};
