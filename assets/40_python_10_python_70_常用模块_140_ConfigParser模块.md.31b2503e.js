import{_ as s,c as n,o as a,b as e}from"./app.8608f89d.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/140_ConfigParser\u6A21\u5757.md"}'),p={name:"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/140_ConfigParser\u6A21\u5757.md"},o=e(`<p>\u7528\u4E8E\u751F\u6210\u548C\u4FEE\u6539\u5E38\u89C1\u914D\u7F6E\u6587\u6863\uFF0C\u57283.x\u91CC\u53D8\u6210\u4E86\u5C0F\u5199</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u751F\u6210\u914D\u7F6E\u6587\u4EF6\uFF08\u4F46\u6CA1\u8DD1\u901A\uFF0C\u4E0D\u77E5\u9053\u95EE\u9898\u51FA\u5728\u54EA\uFF1F\uFF1F\uFF1F\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">import  ConfigParser</span></span>
<span class="line"><span style="color:#A6ACCD;">config = ConfigParser.ConfigParser()</span></span>
<span class="line"><span style="color:#A6ACCD;">config[&#39;DEFAULT&#39;] = {&#39;ServerAliveInterval&#39;:45,</span></span>
<span class="line"><span style="color:#A6ACCD;">                     &#39;Compression&#39;:&#39;yes&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                     &#39;CompressionLevel&#39;:9 }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">config[&#39;bitbucket.org&#39;] =  {}</span></span>
<span class="line"><span style="color:#A6ACCD;">config[&#39;bitbucket.org&#39;][&#39;User&#39;] = &#39;hg&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">config[&#39;topsecret.server.com&#39;]={}</span></span>
<span class="line"><span style="color:#A6ACCD;">topsecret = config[&#39;topsecret.server.com&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">topsecret[&#39;Host Port&#39;] = &#39;50022&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">topsecret[&#39;Forwardxll&#39;] = &#39;no&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">config[&#39;DEFAULT&#39;][&#39;Forwardxll&#39;] = &#39;yes&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">with open(&#39;example.ini&#39;,&#39;w&#39;) as configfile:</span></span>
<span class="line"><span style="color:#A6ACCD;">    config.write(configfile)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u8BFB\u3001\u589E\u5220\u6539\u67E5\u7684\u8FC7\u7A0B\u6CA1\u6709\u8BB0\u5F55\uFF0C\u9700\u8981\u53EF\u4EE5\u56DE\u5934\u770B\u89C6\u9891</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),l=[o];function c(t,r,i,C,A,_){return a(),n("div",null,l)}const g=s(p,[["render",c]]);export{f as __pageData,g as default};
