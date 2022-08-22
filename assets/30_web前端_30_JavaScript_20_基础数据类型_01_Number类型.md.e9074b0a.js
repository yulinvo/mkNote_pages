import{_ as s,c as a,o as n,b as l}from"./app.8608f89d.js";const d=JSON.parse('{"title":"\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362","slug":"\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362"},{"level":2,"title":"MAX_VALUE","slug":"max-value"},{"level":2,"title":"MIN_VALUE","slug":"min-value"},{"level":2,"title":"NaN","slug":"nan"},{"level":2,"title":"\u4E0D\u540C\u8FDB\u5236","slug":"\u4E0D\u540C\u8FDB\u5236"}],"relativePath":"30_web\u524D\u7AEF/30_JavaScript/20_\u57FA\u7840\u6570\u636E\u7C7B\u578B/01_Number\u7C7B\u578B.md"}'),p={name:"30_web\u524D\u7AEF/30_JavaScript/20_\u57FA\u7840\u6570\u636E\u7C7B\u578B/01_Number\u7C7B\u578B.md"},e=l(`<h2 id="\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362" tabindex="-1">\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362 <a class="header-anchor" href="#\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a></h2><ul><li><p>\u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528Number()\u51FD\u6570</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">- \u5B57\u7B26\u4E32 --&gt; \u6570\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;">	1.\u5982\u679C\u662F\u7EAF\u6570\u5B57\u7684\u5B57\u7B26\u4E32\uFF0C\u5219\u76F4\u63A5\u5C06\u5176\u8F6C\u6362\u4E3A\u6570\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;">    2.\u5982\u679C\u5B57\u7B26\u4E32\u4E2D\u6709\u975E\u6570\u5B57\u7684\u5185\u5BB9\uFF0C\u5219\u8F6C\u6362\u4E3ANaN                             #\uFF01\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">    3.\u5982\u679C\u5B57\u7B26\u4E32\u662F\u4E00\u4E2A\u7A7A\u4E32\u6216\u8005\u662F\u4E00\u4E2A\u5168\u662F\u7A7A\u683C\u7684\u5B57\u7B26\u4E32\uFF0C\u5219\u8F6C\u6362\u4E3A0               #\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- \u5E03\u5C14 --&gt; \u6570\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;">	true \u8F6C\u6210 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    false \u8F6C\u6210 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- null --&gt; \u6570\u5B57     0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- undefined --&gt; \u6570\u5B57 NaN</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u65B9\u5F0F\u4E8C\uFF1A\u8FD9\u79CD\u65B9\u5F0F\u4E13\u95E8\u7528\u6765\u5BF9\u4ED8\u5B57\u7B26\u4E32</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">- parseInt() \u628A\u4E00\u4E2A\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u4E00\u4E2A\u6574\u6570    #\u5982parseInt(&quot;123px;&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">	parseInt()\u4ECE\u5DE6\u5230\u53F3\uFF0C\u9047\u5230\u975E\u6574\u6570\u540E\u9762\u7684\u5C31\u4E0D\u770B\u4E86\uFF0C\u5982&#39;123.456&#39;\u548C&#39;123px456&#39;\u90FD\u53EA\u80FD\u53D6\u51FA123</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- parseFloat() \u628A\u4E00\u4E2A\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u4E00\u4E2A\u6D6E\u70B9\u6570    </span></span>
<span class="line"><span style="color:#A6ACCD;">	#\u5982parseFloat(&#39;123.456px;&#39;)     \u53D6\u51FA123.456</span></span>
<span class="line"><span style="color:#A6ACCD;">	#parseFloat(&#39;123.456.789px;&#39;)   \u53D6\u51FA123.456</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5982\u679C\u5BF9\u975EString\u4F7F\u7528parseInt()\u6216parseFloat()\uFF0C\u5B83\u4F1A\u5148\u5C06\u5176\u8F6C\u6362\u4E3AString\u7136\u540E\u5728\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">	#\u5982parseInt(null)    --&gt; parseInt(&#39;null&#39;)        --&gt;NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">	#\u5982parseInt(true)    --&gt; parseInt(&#39;true&#39;)        --&gt;NaN</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h2 id="max-value" tabindex="-1">MAX_VALUE <a class="header-anchor" href="#max-value" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Number.MAX_VALUE							#JS\u6570\u5B57\u53EF\u4EE5\u8868\u793A\u7684\u6700\u5927\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Number.MAX_VALUE*2							</span></span>
<span class="line"><span style="color:#A6ACCD;">	# \u7528Number\u8868\u793A\u7684\u6570\u5B57\u8D85\u8FC7\u4E86\u6700\u5927\u503C(\u5E76\u4E0D\u4F1A\u62A5\u9519)\uFF0C\u5219\u4F1A\u8FD4\u56DE\u4E00\u4E2AInfinity \u8868\u793A\u6B63\u65E0\u7A77</span></span>
<span class="line"><span style="color:#A6ACCD;">	# -Infinity \u8868\u793A\u8D1F\u65E0\u7A77</span></span>
<span class="line"><span style="color:#A6ACCD;">	# \u4F7F\u7528typeof\u68C0\u67E5Infinity\u4E5F\u4F1A\u8FD4\u56DEnumber, \u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49a=Infinity,typeof a\u662F\u6570\u5B57\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="min-value" tabindex="-1">MIN_VALUE <a class="header-anchor" href="#min-value" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Number.MIN_VALUE							#JS\u6570\u5B57\u53EF\u4EE5\u8868\u793A\u7684\u6700\u5C0F\u6B63\u6570\uFF08\u540C\u6837\u6700\u5927\u7684\u8D1F\u6570-Number.MIN_VALUE\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Number.Min_VALUE\u8FD4\u56DE\u7684\u5E76\u4E0D\u662F\u4E00\u4E2A\u8D1F\u6570\uFF0C\u800C\u662F\u4E00\u4E2A\u80FD\u8868\u793A\u7684\u6700\u5C0F\u7684\u5927\u4E8E0\u7684\u6D6E\u70B9\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="nan" tabindex="-1">NaN <a class="header-anchor" href="#nan" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># NaN \u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u6570\u5B57\uFF0C\u8868\u793ANot A Number </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u4E24\u4E2A\u5B57\u7B26\u4E32\u76F8\u4E58 &quot;abc&quot; * &quot;bcd&quot; 	\u7ED3\u679C\u4E3ANaN\uFF0C\u4F7F\u7528typeof \${\u7ED3\u679C}\u68C0\u67E5\u4E00\u4E2ANaN\u4E5F\u4F1A\u8FD4\u56DEnumber</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># a=NaN, typeof a\u662F\u6570\u5B57\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>isNaN\u5224\u65AD\u662F\u5426\u662F\u6570\u5B57</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var score = prompt(&quot;\u8BF7\u8F93\u5165\u5C0F\u660E\u7684\u671F\u672B\u6210\u7EE9:&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">isNaN(score)            #\u5224\u65AD\u7528\u6237\u8F93\u5165\u7684\u662F\u5426\u662F\u6570\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#\u6CE8\u610F\uFF1Aprompt\u63A5\u6536\u7684\u90FD\u662F\u4E00\u4E2Astring\u7C7B\u578B\uFF0C\u8F6C\u6362\uFF1Avar score = +prompt(&quot;\u8BF7\u8F93\u5165\u6570\u5B57:&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h2 id="\u4E0D\u540C\u8FDB\u5236" tabindex="-1">\u4E0D\u540C\u8FDB\u5236 <a class="header-anchor" href="#\u4E0D\u540C\u8FDB\u5236" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">##\u4F46\u662F\u8F93\u51FA\u7684\u65F6\u5019\u90FD\u4F1A\u4EE5\u5341\u8FDB\u5236\u8F93\u51FA\uFF0C\u5982console.log(a)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#var a=0x10;	\u4EE50x\u5F00\u5934\u8868\u793A16\u8FDB\u5236\u7684\u6570\u5B57              		</span></span>
<span class="line"><span style="color:#A6ACCD;">#var a=010;		\u4EE50\u5F00\u5934\u8868\u793A\u516B\u8FDB\u5236\u7684\u6570\u5B57                       </span></span>
<span class="line"><span style="color:#A6ACCD;">#var a=0b10;	\u4EE50b\u5F00\u5934\u8868\u793A\u4E8C\u8FDB\u5236\u7684\u6570\u5B57\uFF0C\u4F46\u662F\u4E0D\u662F\u6240\u6709\u7684\u6D4F\u89C8\u5668\u90FD\u652F\u6301\uFF08\u706B\u72D0\u3001chrome\u4E2D\u652F\u6301\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">parseInt\u6307\u5B9A\u8FDB\u5236\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    a = &quot;070&quot;  &amp;&amp;  parseInt(a)   </span></span>
<span class="line"><span style="color:#A6ACCD;">        #&quot;070&quot;\u8FD9\u79CD\u5B57\u7B26\u4E32\uFF0C\u5927\u90E8\u5206\u6D4F\u89C8\u5668\u90FD\u4F1A\u5F53\u621010\u8FDB\u5236\u89E3\u6790\uFF0C\u4F46\u662F\u6709\u4E9B\u6D4F\u89C8\u5668\u4F1A\u5F53\u62108\u8FDB\u5236\u89E3\u6790\uFF08IE\u8001\u7684\u7248\u672C\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">    a = parseInt(a,10);    #\u53EF\u4EE5\u5728parseInt()\u4E2D\u4F20\u9012\u4E00\u4E2A\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u6765\u6307\u5B9A\u6570\u5B57\u7684\u8FDB\u5236</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,11),t=[e];function o(c,r,A,i,C,u){return n(),a("div",null,t)}const D=s(p,[["render",o]]);export{d as __pageData,D as default};
