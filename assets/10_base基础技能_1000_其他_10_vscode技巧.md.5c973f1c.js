import{_ as s,c as n,o as a,b as p}from"./app.8608f89d.js";const d=JSON.parse('{"title":"VSCode\u6280\u5DE7","description":"","frontmatter":{},"headers":[{"level":3,"title":"VSCode\u6280\u5DE7","slug":"vscode\u6280\u5DE7"}],"relativePath":"10_base\u57FA\u7840\u6280\u80FD/1000_\u5176\u4ED6/10_vscode\u6280\u5DE7.md"}'),l={name:"10_base\u57FA\u7840\u6280\u80FD/1000_\u5176\u4ED6/10_vscode\u6280\u5DE7.md"},o=p(`<h3 id="vscode\u6280\u5DE7" tabindex="-1">VSCode\u6280\u5DE7 <a class="header-anchor" href="#vscode\u6280\u5DE7" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">-  \u7F16\u8F91aa.py\u6587\u4EF6\u65F6\uFF0C\u76F4\u63A5\u6253\u5F00\u4E24\u4E2A\u7EC8\u7AEF\uFF1Apython\u7EC8\u7AEF\u3001ipython\u7EC8\u7AEF\uFF0C\u7136\u540E\u5728ipython\u4E2Dload aa.py\u540E\uFF0C\u5C31\u53EF\u4EE5\u5B9E\u65F6\u8C03\u8BD5\u4E86\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">-  django\u4E2D\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E0A\u8FF0\u65B9\u6CD5\uFF0Capp01/views.py\u6587\u4EF6\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">	class C1(View)					#\u7EE7\u627FAPIView\u6D4B\u8BD5\u7ED3\u679C\u4E5F\u4E00\u6837\uFF0C\u90FD\u662F\u6CA1\u6709\u5B9A\u4E49get/post\u65B9\u6CD5\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">		pass</span></span>
<span class="line"><span style="color:#A6ACCD;">	load app01/views.py\uFF0C\u7136\u540Ec=getattr(C1,&#39;get&#39;) &amp;&amp; c??\u5C31\u53EF\u4EE5\u770B\u5230\u6E90\u7801\u4E86...!!!!</span></span>
<span class="line"><span style="color:#A6ACCD;">	\u6B64\u65F6\u5C31\u53EF\u4EE5\u770B\u5230\u3010View\u7C7B\u4E2D\u7684get\u3001post\u65B9\u6CD5\u5728\u6E90\u7801\u91CC\u9762\u6CA1\u6709\u5199\uFF0C\u5FC5\u987B\u662F\u8981\u7528\u6237\u81EA\u5DF1\u5B9A\u4E49\u3011</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-	python manage.py shell\u8FDB\u5165ipython\u754C\u9762\uFF0C\u7136\u540Efrom app01.models import User</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-  print\u81EA\u52A8\u6DFB\u52A0\u62EC\u53F7():</span></span>
<span class="line"><span style="color:#A6ACCD;">	setting--&gt;\u641C\u7D22\u201CAdd Brackets\u201D--&gt;\u6269\u5C55\u4E2D\u9009\u62E9python\u5BF9\u5E94\u7684&quot;Auto Complete: Add Brackets&quot;\uFF0C\u9009\u4E2D\u5373\u53EF\uFF0C\u5BF9\u5E94\u7684\u952E\u503C\u4E3A\uFF1A		&quot;python.autoComplete.addBrackets&quot;: true, \u7136\u540E\u91CD\u542Fvscode(\u6D4B\u8BD5\u65F6\u4E0D\u91CD\u542F\u65E0\u6CD5\u751F\u6548)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-  debug\u5931\u6548\u95EE\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">   \u4EE3\u7801\u5904\u6253\u4E86\u65AD\u70B9\uFF0C\u4F46\u662F\u65AD\u70B9\u662F\u7A7A\u5FC3\u7684\u65E0\u6CD5\u751F\u6548\uFF0C\u6B64\u65F6\u5C06\u9F20\u6807\u653E\u5230\u7A7A\u5FC3\u7684\u65AD\u70B9\u5904(\u6216\u8005\u653E\u5230\u5DE6\u4FA7\u680FDebug\u7684\u7A7A\u5FC3\u65AD\u70B9\u5904)\u63D0\u793A</span></span>
<span class="line"><span style="color:#A6ACCD;">	Breakpoint in file excluded by filters. </span></span>
<span class="line"><span style="color:#A6ACCD;">	Note: may be excluded because of &quot;justMyCode&quot; option (default == true). Try setting &quot;justMyCode&quot;: false 	in the debug configuration (e.g., launch.json).</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	\u5904\u7406\u65B9\u6CD5\uFF1A\u5728\u914D\u7F6E\u6587\u4EF6launch.json\u4E2D\u6DFB\u52A0\u4E00\u4E2A&quot;justMyCode&quot;: false\u7684\u914D\u7F6E\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;configurations&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &quot;name&quot;: &quot;Python: Django&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &quot;type&quot;: &quot;python&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &quot;request&quot;: &quot;launch&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &quot;program&quot;: &quot;\${workspaceFolder}\\\\manage.py&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &quot;args&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &quot;runserver&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &quot;django&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &quot;justMyCode&quot;: false							#\u6DFB\u52A0\u6B64\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- \u9009\u62E9\u4EE3\u7801\u683C\u5F0F\u5316\u5DE5\u5177</span></span>
<span class="line"><span style="color:#A6ACCD;">	\u65B9\u5F0F\u4E00\uFF1A\u6587\u6863\u53F3\u952E--&quot;\u4F7F\u7528...\u683C\u5F0F\u5316\u6587\u6863&quot; -- \u914D\u7F6E\u9ED8\u8BA4\u683C\u5F0F\u5316\u5DE5\u5177</span></span>
<span class="line"><span style="color:#A6ACCD;">	\u65B9\u5F0F\u4E8C\uFF1Actrl+shift+p -- format -- &quot;\u4F7F\u7528...\u683C\u5F0F\u5316\u6587\u6863&quot; -- \u914D\u7F6E\u9ED8\u8BA4\u683C\u5F0F\u5316\u5DE5\u5177</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),t=[o];function e(c,C,r,A,i,u){return a(),n("div",null,t)}const D=s(l,[["render",e]]);export{d as __pageData,D as default};
