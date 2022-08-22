import{_ as s,c as a,o as n,b as l}from"./app.8608f89d.js";const u=JSON.parse('{"title":"\u642D\u5EFAgitlab","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u642D\u5EFAgitlab","slug":"\u642D\u5EFAgitlab"}],"relativePath":"10_base\u57FA\u7840\u6280\u80FD/50_git/gitlab.md"}'),p={name:"10_base\u57FA\u7840\u6280\u80FD/50_git/gitlab.md"},e=l(`<h3 id="\u642D\u5EFAgitlab" tabindex="-1">\u642D\u5EFAgitlab <a class="header-anchor" href="#\u642D\u5EFAgitlab" aria-hidden="true">#</a></h3><ul><li><p>\u65B0\u5EFAyum\u7684gitlab\u4ED3\u5E93</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#cat /etc/yum.repos.d/gitlab-ce.repo</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[gitlab-ce]</span></span>
<span class="line"><span style="color:#A6ACCD;">name=Gitlab CE Repository</span></span>
<span class="line"><span style="color:#A6ACCD;">baseurl=https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el$releasever/</span></span>
<span class="line"><span style="color:#A6ACCD;">gpgcheck=0</span></span>
<span class="line"><span style="color:#A6ACCD;">enabled=1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u6267\u884C\u5B89\u88C5</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo yum makecache</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo yum install gitlab-ce</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u542F\u52A8gitlab</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># sudo gitlab-ctl reconfigure</span></span>
<span class="line"><span style="color:#A6ACCD;">	#systemctl restart gitlab-runsvdir(\u91CD\u542F???)</span></span>
<span class="line"><span style="color:#A6ACCD;"># sudo gitlab-ctl start		 \u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">	# gitlab-ctl status \u67E5\u770B\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">    # gitlab-ctl stop \u505C\u6B62</span></span>
<span class="line"><span style="color:#A6ACCD;">    # gitlab-ctl restart \u91CD\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u8BBF\u95EE\u6D4B\u8BD5\uFF1A http://192.168.122.123/			#root/\${password}\u7B2C\u4E00\u6B21\u767B\u5F55\u4F1A\u63D0\u793A\u4FEE\u6539\u5BC6\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">- \u8BBE\u7F6E\u4E2D\u6587</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>&quot;User Settings&quot;--Preferences--Localization \u9009\u62E9\u4E2D\u6587</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2 \u521B\u5EFA\u9879\u76EE\u7EC4--\u5728\u9879\u76EE\u7EC4\u4E2D\u521B\u5EFA\u9879\u76EE</span></span></code></pre></div>`,5),t=[e];function c(o,i,r,A,C,d){return n(),a("div",null,t)}const y=s(p,[["render",c]]);export{u as __pageData,y as default};
