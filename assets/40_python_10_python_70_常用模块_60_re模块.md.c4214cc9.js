import{_ as s,c as a,o as n,b as l}from"./app.8608f89d.js";const D=JSON.parse('{"title":"\u5E2E\u52A9\u6587\u6863","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5E2E\u52A9\u6587\u6863","slug":"\u5E2E\u52A9\u6587\u6863"},{"level":3,"title":"\u6B63\u5219\u8BED\u6CD5","slug":"\u6B63\u5219\u8BED\u6CD5"},{"level":3,"title":"match","slug":"match"},{"level":3,"title":"\u5BF9\u5206\u7EC4\u547D\u540D","slug":"\u5BF9\u5206\u7EC4\u547D\u540D"},{"level":3,"title":"\u8D2A\u5A6A/\u975E\u8D2A\u5A6A\u6A21\u5F0F","slug":"\u8D2A\u5A6A-\u975E\u8D2A\u5A6A\u6A21\u5F0F"},{"level":3,"title":"findall","slug":"findall"},{"level":3,"title":"search","slug":"search"},{"level":3,"title":"sub","slug":"sub"},{"level":3,"title":"split","slug":"split"},{"level":3,"title":"compile","slug":"compile"},{"level":3,"title":"flag\u4F4D","slug":"flag\u4F4D"},{"level":3,"title":"strat\u3001end\u3001span","slug":"strat\u3001end\u3001span"}],"relativePath":"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/60_re\u6A21\u5757.md"}'),p={name:"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/60_re\u6A21\u5757.md"},e=l(`<h3 id="\u5E2E\u52A9\u6587\u6863" tabindex="-1">\u5E2E\u52A9\u6587\u6863 <a class="header-anchor" href="#\u5E2E\u52A9\u6587\u6863" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">print(re.__doc__)			#\u67E5\u770B\u5E2E\u52A9\u6587\u6863</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u6B63\u5219\u8BED\u6CD5" tabindex="-1">\u6B63\u5219\u8BED\u6CD5 <a class="header-anchor" href="#\u6B63\u5219\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\\d    \u4EFB\u610F\u4E00\u4E2A\u6570\u5B57\uFF0C0~9 \u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">\\D    \\d\u7684\u53CD\u96C6\uFF0C\u4E5F\u5C31\u662F\u975E\u6570\u5B57\u7684\u4EFB\u610F\u4E00\u4E2A\u5B57\u7B26\uFF0C\u7B49\u540C\u4E8E[^\\d]</span></span>
<span class="line"><span style="color:#A6ACCD;">\\w    \u4EFB\u610F\u4E00\u4E2A\u5B57\u6BCD\u6216\u6570\u5B57\u6216\u4E0B\u5212\u7EBF\uFF0C\u4E5F\u5C31\u662F A~Z,a~z,0~9,_ \u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">\\W    \\w\u7684\u53CD\u96C6\uFF0C\u4E5F\u5C31\u662F[^\\w]</span></span>
<span class="line"><span style="color:#A6ACCD;">\\s    \u7A7A\u683C\u3001\u5236\u8868\u7B26\u3001\u6362\u9875\u7B26\u7B49\u7A7A\u767D\u5B57\u7B26\u7684\u5176\u4E2D\u4EFB\u610F\u4E00\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">\\S    \\s\u7684\u53CD\u96C6\uFF0C\u4E5F\u5C31\u662F[^\\s]</span></span>
<span class="line"><span style="color:#A6ACCD;">\\b\uFF1A\u5339\u914D\u5355\u8BCD\u8FB9\u754C    (\u9ED8\u8BA4\u597D\u50CF\u662F\u4EE5\u7A7A\u683C\u4F5C\u4E3A\u5355\u8BCD\u7684\u8FB9\u754C)  ,\u4E5F\u5C31\u662F\u5355\u8BCD\u548C\u7A7A\u683C\u4E4B\u95F4\u7684\u4F4D\u7F6E\uFF0C\u7B26\u53F7\u672C\u8EAB\u4E0D\u5339\u914D\u4EFB\u4F55\u5B57\u7B26; </span></span>
<span class="line"><span style="color:#A6ACCD;">\\B\uFF1A\u5339\u914D\u975E\u5355\u8BCD\u8FB9\u754C</span></span>
<span class="line"><span style="color:#A6ACCD;">\\n:</span></span>
<span class="line"><span style="color:#A6ACCD;">\\t:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.    \u5C0F\u6570\u70B9\u53EF\u4EE5\u5339\u914D\u9664\u4E86\u6362\u884C\u7B26\\n\u4EE5\u5916\u7684\u4EFB\u610F\u4E00\u4E2A\u5B57\u7B26	</span></span>
<span class="line"><span style="color:#A6ACCD;">	#\u5982\u679C\u8981\u5339\u914D\u5B57\u7B26\u4E32\u4E2D\u7684&#39;.&#39;\u9700\u8981\u8F6C\u4E49\uFF0C\u5982re.math(r&#39;\\d\\.\\d&#39;,&#39;1.2&#39;)\uFF0C\u5982\u679C\u4E0D\u8F6C\u4E49&#39;1a2&#39;\u4E5F\u80FD\u5339\u914D\u5230re.search(r&#39;\\d.\\d&#39;,&#39;1a2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">[]: \u4E00\u7EC4\u6570\u636E\uFF0C\u8FD9\u4E2A\u91CC\u9762\u4E0D\u7528\u8F6C\u4E49\uFF0C\u5982[0-5]\u548C[012345]\u6548\u679C\u76F8\u540C    \u5982\uFF1A[^()]\uFF1A\u4E0D\u5305\u542B\u5DE6\u62EC\u53F7\u6216\u8005\u53F3\u62EC\u53F7\uFF0C\u4E0D\u662F[^(|)]</span></span>
<span class="line"><span style="color:#A6ACCD;">     \u5982\uFF1A\u5339\u914D\u6240\u6709\u5B57\u7B26\u4E32\u6570\u5B57@\u7B49\u90AE\u7BB1\u5408\u6CD5\u5B57\u7B26\uFF1A[a-zA-Z0-9@._]</span></span>
<span class="line"><span style="color:#A6ACCD;">     #[]\u79CD\u7684\u5185\u5BB9\u4E0D\u9700\u8981\u8F6C\u4E49\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">     	\u5982\u5339\u914Durl\u793A\u4F8B\uFF1Ahttps://www.google.com/ \u6B63\u5219\u4E3A\uFF1A re.match(&#39;(?P&lt;url&gt;[\\w:./]+)&#39;,line)  #\u70B9&#39;.&#39;\u4E5F\u4E0D\u9700\u8981\u8F6C\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{m,}    \u8868\u8FBE\u5F0F\u81F3\u5C11\u91CD\u590Dm\u6B21\uFF0C\u6BD4\u5982\\w\\d{2,}\u53EF\u4EE5\u5339\u914Da12,_1111,M123\u7B49\u7B49</span></span>
<span class="line"><span style="color:#A6ACCD;">?    \u5339\u914D\u8868\u8FBE\u5F0F0\u6B21\u6216\u80051\u6B21\uFF0C\u76F8\u5F53\u4E8E{0,1}\uFF0C\u6BD4\u5982a[cd]?\u53EF\u4EE5\u5339\u914Da,ac,ad</span></span>
<span class="line"><span style="color:#A6ACCD;">+    \u8868\u8FBE\u5F0F\u81F3\u5C11\u51FA\u73B01\u6B21\uFF0C\u76F8\u5F53\u4E8E{1,}\uFF0C\u6BD4\u5982a+b\u53EF\u4EE5\u5339\u914Dab,aab,aaab\u7B49\u7B49</span></span>
<span class="line"><span style="color:#A6ACCD;">*    \u8868\u8FBE\u5F0F\u51FA\u73B00\u6B21\u5230\u4EFB\u610F\u6B21\uFF0C\u76F8\u5F53\u4E8E{0,}\uFF0C\u6BD4\u5982\\^*b\u53EF\u4EE5\u5339\u914Db,^^^b\u7B49\u7B49</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="match" tabindex="-1">match <a class="header-anchor" href="#match" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#match\u662F\u4ECE\u5934\u5F00\u59CB\u5339\u914D !!!!			\u6709group()\u65B9\u6CD5\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-------------------\u57FA\u672C\u7528\u6CD5------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">m=re.match(&#39;abc&#39;,&#39;abcdef&#39;)  &amp;&amp; print m.group()    		#print m.group() \u6253\u5370\u5339\u914D\u5230\u7684\u6240\u6709\u4E1C\u897F</span></span>
<span class="line"><span style="color:#A6ACCD;">	#match\u662F\u4ECE\u5F00\u5934\u5339\u914D\uFF0Cre.match(&#39;bc&#39;,&#39;abcdef&#39;)\u5339\u914D\u4E0D\u5230</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">m=re.match(&#39;[0-9]&#39;,&#39;75abced&#39;)    </span></span>
<span class="line"><span style="color:#A6ACCD;">	# \u53EA\u80FD\u5339\u914D\u52307; </span></span>
<span class="line"><span style="color:#A6ACCD;">	# \u2018[0-9][0-9]\u2019\u6216&#39;[0-9]*&#39;\u80FD\u5339\u914D\u523075; </span></span>
<span class="line"><span style="color:#A6ACCD;">	# &#39;[0-9]{0,10}&#39;\u5339\u914D0-10\u6B21</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-------------------group/groups------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">group\u3001groups\u5206\u7EC4\uFF1A				#\u53EA\u6709\u5339\u914D\u7684\u65F6\u5019\u5206\u7EC4\u4E86\u624D\u6709\u610F\u4E49\uFF0C\u5982(\\d)(\\d)\u8FD9\u6837\u624D\u6709\u610F\u4E49\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">	1\uFF0Cgroups()\u53EA\u6709\u5728\u5206\u7EC4\u540E\u624D\u4F1A\u5C06\u7ED3\u679C\u653E\u5230groups\u4E2D\uFF0C\u5982\u679C\u6CA1\u6709\u5206\u7EC4\u5373\u4F7F\u80FD\u5339\u914D\u5230groups()\u4E5F\u4E0D\u4F1A\u6709\u7ED3\u679C\u7684\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">		\u6BD4\u5982m =re.match(&#39;abc&#39;,&#39;abcdef&#39;)\uFF0C\u5176\u4E2Dgroup()\u6709\u7ED3\u679C\uFF0Cgroups()\u662F\u7A7A\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u793A\u4F8B\u4E00\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">	m = re.match(&#39;(?P&lt;year&gt;[0-9]{4})/(?P&lt;mouth&gt;[0-9]{2})&#39;,&#39;2009/12&#39;)	</span></span>
<span class="line"><span style="color:#A6ACCD;">		m.group()			#\u8F93\u51FA&#39;2009/12&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">		m.group(0)			#\u8F93\u51FA&#39;2009/12&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">		m.group(1)			#\u8F93\u51FA&#39;2009&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">		m.group(2)			#\u8F93\u51FA&#39;12&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">		m.group(&#39;year&#39;)		#\u8F93\u51FA&#39;2009&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">		m.group(&#39;mouth&#39;)	#\u8F93\u51FA&#39;12&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		m.groups(n)			#\u4E0D\u4F20\u9012\u53C2\u6570\u30010\u30011\u30012\u3001\u4EFB\u610F\u6570\u5B57\uFF0C\u7ED3\u679C\u90FD\u662F\u8F93\u51FA(&#39;2009&#39;, &#39;12&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">			#m.groups()\u53EA\u6709\u5728\u5206\u7EC4\u540E\u624D\u4F1A\u5C06\u7ED3\u679C\u653E\u5230groups\u4E2D\uFF0C\u5982\u679C\u6CA1\u6709\u5206\u7EC4\u5373\u4F7F\u80FD\u5339\u914D\u5230groups()\u4E5F\u4E0D\u4F1A\u6709\u7ED3\u679C\uFF0C\u6BD4\u5982</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span></span>
<span class="line"><span style="color:#A6ACCD;">\u793A\u4F8B\u4E8C\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">	m=re.match(&#39;(a)b(c)&#39;,&#39;abcdef&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">	m.group()					#\u8F93\u51FA&#39;abc&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	m.group(0)					#\u8F93\u51FA&#39;abc&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	m.group(1)					#\u8F93\u51FA&#39;a&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	m.group(2)					#\u8F93\u51FA&#39;c&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	m.groups(n)					#\u4E0D\u4F20\u9012\u53C2\u6570\u30010\u30011\u30012\u3001\u4EFB\u610F\u6570\u5B57\uFF0C\u7ED3\u679C\u90FD\u662F\u8F93\u51FA(&#39;a&#39;, &#39;c&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5BF9\u5206\u7EC4\u547D\u540D" tabindex="-1">\u5BF9\u5206\u7EC4\u547D\u540D <a class="header-anchor" href="#\u5BF9\u5206\u7EC4\u547D\u540D" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">m=re.search(&#39;(?P&lt;year&gt;[0-9]{4})/(?P&lt;mouth&gt;[0-9]{2})&#39;,&#39;assafd 2009/12&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">m=re.search(&#39;(?P&lt;last&gt;\\w+),(?P&lt;first&gt;\\w+):(?P&lt;phone&gt;\\S+)&#39;,&#39;oldboy,Beijing:123&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u8D2A\u5A6A-\u975E\u8D2A\u5A6A\u6A21\u5F0F" tabindex="-1">\u8D2A\u5A6A/\u975E\u8D2A\u5A6A\u6A21\u5F0F <a class="header-anchor" href="#\u8D2A\u5A6A-\u975E\u8D2A\u5A6A\u6A21\u5F0F" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">content = &#39;Hello 1234567 is a number. Regex String&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">print re.match(&#39;.*(\\d+).*&#39;, content).group(1)             #\u8F93\u51FA\u7ED3\u679C&#39;7&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">print re.match(&#39;.*?(\\d+).*&#39;, content).group(1)            #\u7ED3\u679C\u4E3A&#39;1234567&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">print re.match(&#39;.*?(\\d+).*&#39;, content, flags=re.S).group(1)        # re.S\u8BBE\u7F6E&#39;.&#39;\u53EF\u4EE5\u5339\u914D\u6362\u884C\u7B26 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="findall" tabindex="-1">findall <a class="header-anchor" href="#findall" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u4E0D\u662F\u4ECE\u5934\u5339\u914D\uFF0C\u6240\u6709\u7B26\u5408\u6761\u4EF6\u7684\u90FD\u5339\u914D\u51FA\u6765\uFF0C\u8FD4\u56DE\u7684\u662F\u4E00\u4E2Alist\u5217\u8868 !!!	findall\u65B9\u6CD5\u76F4\u63A5\u5C31\u51FA\u7ED3\u679C\u4E86\uFF0C\u4E0D\u7528\u5728m.group()\u8C03\u7528\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">m=re.findall(&#39;[0-9]*&#39;,&#39;75aba123ce1d&#39;)  &amp;&amp; print m</span></span>
<span class="line"><span style="color:#A6ACCD;">	#\u56E0\u4E3A\u5339\u914D\u7684\u6B21\u6570\u91CC\u9762\u5305\u542B0\u6B21\uFF0C\u5C06\u6BCF\u4E2A\u5B57\u7B26\u4E32\u90FD\u5339\u914D\u4E86\uFF0C\u7ED3\u679C\u4E3A\uFF1A  [&#39;75&#39;, &#39;&#39;, &#39;&#39;, &#39;&#39;, &#39;123&#39;, &#39;&#39;, &#39;&#39;, &#39;1&#39;, &#39;&#39;, &#39;&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">	#m=re.findall(&#39;[0-9]{0,10}&#39;,&#39;75aba123ce1d&#39;) \u6548\u679C\u540C\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">	#m=re.findall(&#39;[0-9]+&#39;,&#39;75aba123ce1d&#39;)	&amp;&amp; print m\uFF0C\u7ED3\u679C\u4E3A\uFF1A [&#39;75&#39;, &#39;123&#39;, &#39;1&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	------\u8D2A\u5A6A\u6A21\u5F0F\u3001\u975E\u8D2A\u5A6A\u6A21\u5F0F--------</span></span>
<span class="line"><span style="color:#A6ACCD;">	#re.findall(&#39;[0-9]*&#39;,&#39;75aba123ce1d&#39;)	==&gt; [&#39;75&#39;, &#39;&#39;, &#39;&#39;, &#39;&#39;, &#39;123&#39;, &#39;&#39;, &#39;&#39;, &#39;1&#39;, &#39;&#39;, &#39;&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">	#re.findall(&#39;[0-9]*?&#39;,&#39;75aba123ce1d&#39;)	==&gt; [\u2018\u2019\uFF0C&#39;7&#39;,&#39;5&#39;, &#39;&#39;, &#39;&#39;, &#39;&#39;,&#39;1&#39;, &#39;2&#39; ,&#39;3&#39;, &#39;&#39;, &#39;&#39;, &#39;1&#39;, &#39;&#39;, &#39;&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	#re.findall(&#39;[0-9]+&#39;,&#39;75aba123ce1d&#39;)	==&gt; [&#39;75&#39;, &#39;123&#39;, &#39;1&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">	#re.findall(&#39;[0-9]+?&#39;,&#39;75aba123ce1d&#39;)	==&gt; [&#39;7&#39;, &#39;5&#39;, &#39;1&#39;, &#39;2&#39;, &#39;3&#39;, &#39;1&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">re.findall(&#39;.&#39;,&#39;75aba123ce1d&#39;)		#\u5339\u914D\u5355\u4E2A\u5B57\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">	#\u7ED3\u679C[&#39;7&#39;, &#39;5&#39;, &#39;a&#39;, &#39;b&#39;, &#39;a&#39;, &#39;1&#39;, &#39;2&#39;, &#39;3&#39;, &#39;c&#39;, &#39;e&#39;, &#39;1&#39;, &#39;d&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">re.findall(&#39;.*&#39;,&#39;75aba123ce1d&#39;)		#\u5339\u914D\u4EFB\u610F\u5B57\u7B26\uFF0C\u540E\u9762\u7684&#39;&#39;\u56E0\u4E3A\u6CA1\u6709\u4E86\uFF0C*\u5305\u542B\u4E86\u5339\u914D0\u6B21\uFF0C\u6240\u4EE5\u6709\u4E00\u4E2A&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	#\u7ED3\u679C[&#39;75aba123ce1d&#39;, &#39;&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">re.findall(&#39;.+&#39;,&#39;75aba123ce1d&#39;)		#\u7ED3\u679C[&#39;75aba123ce1d&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5206\u7EC4\u65F6\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">	re.findall(&#39;(\\d)(\\d)&#39;,&#39;75123ce1d&#39;)	==&gt;\u7ED3\u679C\u4E3A\uFF1A[(&#39;7&#39;, &#39;5&#39;), (&#39;1&#39;, &#39;2&#39;)]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="search" tabindex="-1">search <a class="header-anchor" href="#search" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u627E\u5230\u7B2C\u4E00\u4E2A\u5373\u8FD4\u56DE\uFF0C\u4E0D\u7EE7\u7EED\u67E5\u627E!!!			\u6709group()\u65B9\u6CD5\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">m=re.search(&#39;75&#39;,&#39;a75aba123ce1d&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">	#m.group()		\u7ED3\u679C\u4E3A&#39;75&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	#m.group(0)		\u7ED3\u679C\u4E3A&#39;75&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">re.search(r&#39;[0-9.a-z]{1,26}@[0-9.a-z]{1,20}.[0-9a-z]{1,8}&#39;,email)               #email\u7684\u7B80\u5355\u7684\u5408\u6CD5\u6027\u5339\u914D</span></span>
<span class="line"><span style="color:#A6ACCD;">	# r   \u6309\u7167\u539F\u751F\u5B57\u7B26\uFF08\u4E0D\u8F6C\u4E49\u7684\u5F62\u5F0F\uFF09\u5339\u914D\uFF0C\u5EFA\u8BAE\u8FD8\u662F\u5199\u4E0A\u6BD4\u8F83\u4FDD\u9669</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">m = re.search(&#39;(?P&lt;year&gt;[0-9]{4})/(?P&lt;mouth&gt;[0-9]{2})&#39;,&#39;assafd 2009/12&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">	#m.group(n)				#\u53C2\u6570\u4E3A0\u30011\u30012\u53C2\u8003\u4E0A\u9762\u7684match\u6848\u4F8B\uFF0C\u542B\u4E49\u540C</span></span>
<span class="line"><span style="color:#A6ACCD;">	#m.groups(n)			#\u4E0D\u4F20\u9012\u53C2\u6570\u30010\u30011\u30012\u3001\u4EFB\u610F\u6570\u5B57\uFF0C\u7ED3\u679C\u90FD\u662F\u8F93\u51FA(&#39;2009&#39;, &#39;12&#39;)\uFF0C\u4E0Ematch\u6848\u4F8B\u540C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="sub" tabindex="-1">sub <a class="header-anchor" href="#sub" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u66FF\u6362\uFF0C\u6CA1\u6709replace\u65B9\u6CD5\uFF0C\u53EA\u6709sub\u65B9\u6CD5;	sub\u65B9\u6CD5\u76F4\u63A5\u5C31\u51FA\u7ED3\u679C\u4E86\uFF0C\u4E0D\u7528\u5728m.group()\u8C03\u7528\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">m=re.sub(&#39;a&#39;,&#39;A&#39;,&#39;a75aba123ce1d&#39;,count=2)		#count=2\u53EA\u66FF\u6362\u524D2\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">print m     #sub\u6CA1\u6709group\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="split" tabindex="-1">split <a class="header-anchor" href="#split" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#split\u62C6\u5206\uFF1B	split\u65B9\u6CD5\u76F4\u63A5\u5C31\u51FA\u7ED3\u679C\u4E86\uFF0C\u4E0D\u7528\u5728m.group()\u8C03\u7528\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">re.split(&#39;[+-]&#39;, &#39;1+2*3/4-2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="compile" tabindex="-1">compile <a class="header-anchor" href="#compile" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">p = re.compile(&#39;^[0-9]{2}&#39;)        </span></span>
<span class="line"><span style="color:#A6ACCD;">	#\u63D0\u524D\u5BF9\u5339\u914D\u516C\u5F0F\u8FDB\u884C\u7F16\u8BD1\uFF0C\u5982\u679C\u6587\u672C\u5F88\u957F(\u5982\u8D85\u8FC710W\u884C)\uFF0C\u5EFA\u8BAE\u5148\u7F16\u8BD1\u5728\u5339\u914D\uFF0C\u8FD9\u6837\u5C31\u53EA\u9700\u7F16\u8BD1\u4E00\u6B21\uFF0C\u4E0A\u9762\u7684\u6A21\u5F0F\u662F\u6BCF\u6B21\u5339\u914D\u90FD\u4F1A\u7F16\u8BD1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">m = p.match(&#39;1234567890&#39;)   \u6216\u8005\uFF1Are.match(p,&#39;123456&#39;).group()\u90FD\u53EF\u4EE5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">print m.group()                     #\u7ED3\u679C\u4E3A12</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="flag\u4F4D" tabindex="-1">flag\u4F4D <a class="header-anchor" href="#flag\u4F4D" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">re.I:     \u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u5982\uFF1Am=re.search(&#39;[a-z]&#39;,&#39;AZC&#39;,flags=re.I)</span></span>
<span class="line"><span style="color:#A6ACCD;">re.M:     \u591A\u884C\u5339\u914D\uFF0C\u5F71\u54CD ^ \u548C $;  \u9ED8\u8BA4\u5339\u914D\u4EE5\\n\u4E3A\u7ED3\u5C3E  re.search(&#39;^a.+$&#39;,&#39;alex \\njack\\nrain\\nli&#39;,flags=re.M)</span></span>
<span class="line"><span style="color:#A6ACCD;">re.S:     re.S\u8BBE\u7F6E&#39;.&#39;\u53EF\u4EE5\u5339\u914D\u6362\u884C\u7B26\uFF0C\u548C re.M\u7684\u533A\u522B\u662F\u4EC0\u4E48\uFF1F\uFF1F\uFF1F    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="strat\u3001end\u3001span" tabindex="-1">strat\u3001end\u3001span <a class="header-anchor" href="#strat\u3001end\u3001span" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">m = re.search(r&quot;abc&quot;,&quot;123abc456abc789&quot;)			# r   \u6309\u7167\u539F\u751F\u5B57\u7B26\uFF08\u4E0D\u8F6C\u4E49\u7684\u5F62\u5F0F\uFF09\u5339\u914D\uFF0C\u5EFA\u8BAE\u8FD8\u662F\u5199\u4E0A\u6BD4\u8F83\u4FDD\u9669</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">m.group()			#&#39;abc&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">m.start()			#3			\u5339\u914D\u7684\u8D77\u59CBindex\u7D22\u5F15</span></span>
<span class="line"><span style="color:#A6ACCD;">m.end()				#6			\u5339\u914D\u7684\u7ED3\u675Findex\u7D22\u5F15</span></span>
<span class="line"><span style="color:#A6ACCD;">m.span()			#(3, 6)		\u5F00\u59CB\u5230\u7ED3\u675F\u7684\u7D22\u5F15\u8303\u56F4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,24),t=[e];function c(o,r,i,A,C,d){return n(),a("div",null,t)}const u=s(p,[["render",c]]);export{D as __pageData,u as default};
