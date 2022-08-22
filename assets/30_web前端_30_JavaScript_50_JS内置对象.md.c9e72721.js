import{_ as s,c as a,o as n,b as l}from"./app.8608f89d.js";const d=JSON.parse('{"title":"Math","description":"","frontmatter":{},"headers":[{"level":2,"title":"Math","slug":"math"},{"level":2,"title":"Date","slug":"date"},{"level":2,"title":"re\u6B63\u5219\u8868\u8FBE\u5F0F","slug":"re\u6B63\u5219\u8868\u8FBE\u5F0F"},{"level":3,"title":"\u6B63\u5219\u8BED\u6CD5","slug":"\u6B63\u5219\u8BED\u6CD5"},{"level":3,"title":"\u521B\u5EFA\u6B63\u5219\u8868\u8FBE\u5F0F","slug":"\u521B\u5EFA\u6B63\u5219\u8868\u8FBE\u5F0F"},{"level":3,"title":"test","slug":"test"},{"level":3,"title":"exec","slug":"exec"},{"level":3,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60"}],"relativePath":"30_web\u524D\u7AEF/30_JavaScript/50_JS\u5185\u7F6E\u5BF9\u8C61.md"}'),p={name:"30_web\u524D\u7AEF/30_JavaScript/50_JS\u5185\u7F6E\u5BF9\u8C61.md"},e=l(`<h2 id="math" tabindex="-1">Math <a class="header-anchor" href="#math" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Math.PI \u8868\u793A\u7684\u5706\u5468\u7387</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Math.abs(-1)			#abs()\u53EF\u4EE5\u7528\u6765\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u7EDD\u5BF9\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Math.ceil(1.2)					#\u53EF\u4EE5\u5BF9\u4E00\u4E2A\u6570\u8FDB\u884C\u5411\u4E0A\u53D6\u6574\uFF0C\u5C0F\u6570\u4F4D\u53EA\u6709\u6709\u503C\u5C31\u81EA\u52A8\u8FDB1</span></span>
<span class="line"><span style="color:#A6ACCD;">Math.floor(1.9)					#\u53EF\u4EE5\u5BF9\u4E00\u4E2A\u6570\u8FDB\u884C\u5411\u4E0B\u53D6\u6574\uFF0C\u5C0F\u6570\u90E8\u5206\u4F1A\u88AB\u820D\u6389</span></span>
<span class="line"><span style="color:#A6ACCD;">Math.round(1.3)					#\u53EF\u4EE5\u5BF9\u4E00\u4E2A\u6570\u8FDB\u884C\u56DB\u820D\u4E94\u5165\u53D6\u6574</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Math.random()					#\u53EF\u4EE5\u7528\u6765\u751F\u6210\u4E00\u4E2A0-1\u4E4B\u95F4\u7684\u968F\u673A\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Math.max(10,45,30,100);			#max() \u53EF\u4EE5\u83B7\u53D6\u591A\u4E2A\u6570\u4E2D\u7684\u6700\u5927\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">Math.min(10,45,30,100);			#min() \u53EF\u4EE5\u83B7\u53D6\u591A\u4E2A\u6570\u4E2D\u7684\u6700\u5C0F\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Math.pow(x,y)					#\u8FD4\u56DEx\u7684y\u6B21\u5E42</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Math.sqrt()						#\u7528\u4E8E\u5BF9\u4E00\u4E2A\u6570\u8FDB\u884C\u5F00\u65B9\u8FD0\u7B97</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="date" tabindex="-1">Date <a class="header-anchor" href="#date" aria-hidden="true">#</a></h2><ul><li><p>\u521B\u5EFADate\u5BF9\u8C61</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var d1 = new Date();  		#\u4E0D\u6307\u5B9A\u65F6\u95F4\uFF0C\u5219\u4F1A\u5C01\u88C5\u4E3A\u5F53\u524D\u4EE3\u7801\u6267\u884C\u7684\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var d2 = new Date(&quot;2/18/2011 11:10:30&quot;);		#\u65F6\u95F4\u7684\u5B57\u7B26\u4E32\u683C\u5F0F\uFF1A\u6708\u4EFD/\u65E5/\u5E74 \u65F6:\u5206:\u79D2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u5E38\u7528\u7684\u65B9\u6CD5</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">getDate()            # \u83B7\u53D6\u5F53\u524D\u65E5\u671F\u5BF9\u8C61\u662F\u51E0\u65E5</span></span>
<span class="line"><span style="color:#A6ACCD;">    var date = d2.getDate();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">getDay()                #\u83B7\u53D6\u5F53\u524D\u65E5\u671F\u5BF9\u8C61\u662F\u5468\u51E0</span></span>
<span class="line"><span style="color:#A6ACCD;">    - \u4F1A\u8FD4\u56DE\u4E00\u4E2A0-6\u7684\u503C; 0 \u8868\u793A\u5468\u65E5,1\u8868\u793A\u5468\u4E00</span></span>
<span class="line"><span style="color:#A6ACCD;">    var day = d2.getDay();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">getMonth()              #\u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u5BF9\u8C61\u7684\u6708\u4EFD</span></span>
<span class="line"><span style="color:#A6ACCD;">    - \u4F1A\u8FD4\u56DE\u4E00\u4E2A0-11\u7684\u503C;0 \u8868\u793A1\u6708, 1 \u8868\u793A2\u6708, 11 \u8868\u793A12\u6708</span></span>
<span class="line"><span style="color:#A6ACCD;">    var month = d2.getMonth();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">getFullYear()           #\u83B7\u53D6\u5F53\u524D\u65E5\u671F\u5BF9\u8C61\u7684\u5E74\u4EFD</span></span>
<span class="line"><span style="color:#A6ACCD;">    var year = d2.getFullYear();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">getTime()               #\u83B7\u53D6\u5F53\u524D\u65E5\u671F\u5BF9\u8C61\u7684\u65F6\u95F4\u6233</span></span>
<span class="line"><span style="color:#A6ACCD;">    - \u65F6\u95F4\u6233\uFF0C\u6307\u7684\u662F\u4ECE\u683C\u6797\u5A01\u6CBB\u6807\u51C6\u65F6\u95F4\u76841970\u5E741\u67081\u65E50\u65F60\u52060\u79D2, \u5230\u5F53\u524D\u65E5\u671F\u6240\u82B1\u8D39\u7684\u6BEB\u79D2\u6570\uFF081\u79D2 = 1000\u6BEB\u79D2\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">    - \u8BA1\u7B97\u673A\u5E95\u5C42\u5728\u4FDD\u5B58\u65F6\u95F4\u65F6\u4F7F\u7528\u90FD\u662F\u65F6\u95F4\u6233</span></span>
<span class="line"><span style="color:#A6ACCD;">    var time = new Date(&quot;1/1/1970 0:0:0&quot;).getTime();</span></span>
<span class="line"><span style="color:#A6ACCD;">    	#\u8FD9\u4E2A\u65F6\u95F4\u6233\u4E0D\u662F0\uFF0C\u800C\u662F\u4E00\u4E2A\u8D1F\u503C\uFF0C\u56E0\u4E3Ad3\u8BBE\u7F6E\u7684\u65F6\u95F4\u662F\u5317\u4EAC\u65F6\u95F4\uFF0C\u4E0D\u662F\u683C\u6797\u5A01\u6CBB\u6807\u51C6\u65F6\u95F4\uFF0C\u8FD9\u4E2A\u65F6\u95F4\u6233\u9664\u4E00\u4E0B\u521A\u597D\u662F8\u4E2A\u5C0F\u65F6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Date.now();                 #date\u5BF9\u8C61\u63D0\u4F9B\u7684now()\u65B9\u6CD5\u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u7684\u65F6\u95F4\u6233</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h2 id="re\u6B63\u5219\u8868\u8FBE\u5F0F" tabindex="-1">re\u6B63\u5219\u8868\u8FBE\u5F0F <a class="header-anchor" href="#re\u6B63\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a></h2><h3 id="\u6B63\u5219\u8BED\u6CD5" tabindex="-1">\u6B63\u5219\u8BED\u6CD5 <a class="header-anchor" href="#\u6B63\u5219\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u91CF\u8BCD\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    - \u91CF\u8BCD\u53EA\u5BF9\u5B83\u524D\u8FB9\u7684\u4E00\u4E2A\u5185\u5BB9\u8D77\u4F5C\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">    - {n} \u6B63\u597D\u51FA\u73B0n\u6B21</span></span>
<span class="line"><span style="color:#A6ACCD;">    - {m,n} \u51FA\u73B0m-n\u6B21</span></span>
<span class="line"><span style="color:#A6ACCD;">    - {m,} m\u6B21\u4EE5\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">    - + \u81F3\u5C11\u4E00\u4E2A\uFF0C\u76F8\u5F53\u4E8E{1,}</span></span>
<span class="line"><span style="color:#A6ACCD;">    - * 0\u4E2A\u6216\u591A\u4E2A\uFF0C\u76F8\u5F53\u4E8E{0,}</span></span>
<span class="line"><span style="color:#A6ACCD;">    - ? 0\u4E2A\u62161\u4E2A\uFF0C\u76F8\u5F53\u4E8E{0,1}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    reg = /(ab){3}/;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    /^a$/.test(&#39;aaa&#39;)        #\u7ED3\u679C\u4E3Afalse</span></span>
<span class="line"><span style="color:#A6ACCD;">    /^a|a$/.test(&#39;aaa&#39;)        #\u7ED3\u679C\u4E3Atrue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\\w           - \u4EFB\u610F\u5B57\u6BCD\u3001\u6570\u5B57\u3001_  [A-z0-9_]</span></span>
<span class="line"><span style="color:#A6ACCD;">\\W            - \u9664\u4E86\u5B57\u6BCD\u3001\u6570\u5B57\u3001_  [^A-z0-9_]        #\u5339\u914D@#%\u4E4B\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">\\d            - \u4EFB\u610F\u7684\u6570\u5B57 [0-9]    					#\u4E0D\u80FD\u5339\u914D\u591A\u4F4D\u6578\uFF0C\u6BD4\u5982100\uFF0C\u9700\u8981\\d*</span></span>
<span class="line"><span style="color:#A6ACCD;">\\D            - \u9664\u4E86\u6570\u5B57 [^0-9]</span></span>
<span class="line"><span style="color:#A6ACCD;">\\s            - \u7A7A\u683C            					#\\s\u8868\u793A\u5339\u914D\u4E00\u6B21\u7A7A\u683C\uFF0C\u7B49\u540C\u4E0E \\s{1}</span></span>
<span class="line"><span style="color:#A6ACCD;">\\S            - \u9664\u4E86\u7A7A\u683C    						#\u7EAF\u7A7A\u683C\u7684\u8BDD\u4F1A\u662Ffalse</span></span>
<span class="line"><span style="color:#A6ACCD;">\\b            - \u5355\u8BCD\u8FB9\u754C(\u53EA\u5199\u4E00\u4E2A\\b\u800C\u4E0D\u662F\u4E00\u5BF9\u5219\u8868\u793A\u5355\u8BCD\u7684\u4E00\u4FA7)    </span></span>
<span class="line"><span style="color:#A6ACCD;">	#/\\bchild\\b/.test(str)</span></span>
<span class="line"><span style="color:#A6ACCD;">	#/\\ba/.test(&#39;as&#39;) \u53EA\u5199\u4E00\u4FA7\uFF08\u7ED3\u679C\u4E3Atrue\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">\\B            - \u9664\u4E86\u5355\u8BCD\u8FB9\u754C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F6C\u4E49\u5B57\u7B26\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    reg = /\\./;                         #\\\u8868\u793A\u8F6C\u79FB\u5B57\u7B26\uFF0C\u662F\u5426\u542B\u6709\u5B57\u7B26&#39;.&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    reg = /\\\\/;                         #\\\u8868\u793A\u8F6C\u79FB\u5B57\u7B26\uFF0C\u662F\u5426\u542B\u6709\u5B57\u7B26&#39;\\&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        #console.log(reg.test(&quot;b.\\\\&quot;))      #\u5B57\u7B26\u4E32\u4E2D\\\u4E5F\u8868\u793A\u8F6C\u79FB\uFF0C\u5982\u679C\u53EA\u5199\u4E00\u4E2A\\\uFF0C\u5C06\u628A\u540E\u9762\u7684\u201D\u7ED9\u8F6C\u4E49\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">            #\u5B57\u7B26\u4E32\u4E2D\u5305\u542B\u4E00\u4E2A\\\u65F6\u4E5F\u8981\u5199\u4E24\u4E2A\\\uFF0C\u8F93\u51FA\u7684\u65F6\u5019\u53EA\u4F1A\u8F93\u51FA\u4E00\u4E2A\\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    \u6CE8\u610F\uFF1A\u4F7F\u7528\u6784\u9020\u51FD\u6570\u65F6\uFF0C\u7531\u4E8E\u5B83\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u800C\\\u662F\u5B57\u7B26\u4E32\u4E2D\u8F6C\u4E49\u5B57\u7B26\uFF0C\u5982\u679C\u8981\u4F7F\u7528\\\u5219\u9700\u8981\u4F7F\u7528\\\\\u6765\u4EE3\u66FF</span></span>
<span class="line"><span style="color:#A6ACCD;">        reg = new RegExp(&quot;\\\\.&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        reg = new RegExp(&quot;\\\\\\\\&quot;);               #\u5339\u914D\u2018\\\\\u2019</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u521B\u5EFA\u6B63\u5219\u8868\u8FBE\u5F0F" tabindex="-1">\u521B\u5EFA\u6B63\u5219\u8868\u8FBE\u5F0F <a class="header-anchor" href="#\u521B\u5EFA\u6B63\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a></h3><ul><li><p>\u65B9\u5F0F\u4E00</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var reg = new RegExp(&quot;\u6B63\u5219\u8868\u8FBE\u5F0F&quot;,&quot;\u5339\u914D\u6A21\u5F0F&quot;); 			#\u4F7F\u7528typeof\u68C0\u67E5\u6B63\u5219\u5BF9\u8C61\uFF0C\u4F1A\u8FD4\u56DEobject</span></span>
<span class="line"><span style="color:#A6ACCD;">	\u5339\u914D\u6A21\u5F0F\uFF1Ai \u5FFD\u7565\u5927\u5C0F\u5199;  g \u5168\u5C40\u5339\u914D\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var reg = new RegExp(&quot;a&quot;,&quot;i&quot;); \u8FD9\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u53EF\u4EE5\u6765\u68C0\u67E5\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u542B\u6709a\uFF08\u4E0D\u7BA1\u662F\u5F00\u5934\u8FD8\u662F\u5728\u4E2D\u95F4\u3001\u7ED3\u5C3E\u90FD\u53EF\u4EE5\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u65B9\u5F0F\u4E8C</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var reg = /a/i;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">reg = /a|b|c/;    #\u521B\u5EFA\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u68C0\u67E5\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u6709a\u6216b</span></span>
<span class="line"><span style="color:#A6ACCD;">reg = /[A-z]/;    #[]\u91CC\u7684\u5185\u5BB9\u4E5F\u662F\u6216\u7684\u5173\u7CFB\uFF1B[A-z] \u4EFB\u610F\u5B57\u6BCD\uFF0C\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD</span></span>
<span class="line"><span style="color:#A6ACCD;">reg = /a[bde]c/;    #//\u68C0\u67E5\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u542B\u6709 abc \u6216 adc \u6216 aec</span></span>
<span class="line"><span style="color:#A6ACCD;">reg = /[^ab]/;    #[^ ] \u9664\u4E86              \uFF01\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">    #reg.test(&#39;abc&#39;);       \u7ED3\u679C\u662Ftrue                      #P86 12:50</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h3 id="test" tabindex="-1">test <a class="header-anchor" href="#test" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u7528\u6765\u68C0\u67E5\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u7B26\u5408\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u89C4\u5219\uFF0C\u5982\u679C\u7B26\u5408\u5219\u8FD4\u56DEtrue\uFF0C\u5426\u5219\u8FD4\u56DEfalse</span></span>
<span class="line"><span style="color:#A6ACCD;">reg.test(&quot;Acadfadc&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="exec" tabindex="-1">exec <a class="header-anchor" href="#exec" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u7EC3\u4E60" tabindex="-1">\u7EC3\u4E60 <a class="header-anchor" href="#\u7EC3\u4E60" aria-hidden="true">#</a></h3><ul><li><p>\u7EC3\u4E60\u4E00\uFF1A\u63A5\u6536\u4E00\u4E2A\u7528\u6237\u7684\u8F93\u5165\uFF0C\u53BB\u9664\u6389\u5B57\u7B26\u4E32\u4E2D\u7684\u524D\u540E\u7684\u7A7A\u683C</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u6613\u9519\u70B9\uFF1A\u4E24\u8FB9\u7684\u7A7A\u683C\u53BB\u9664\u6389\uFF0C\u4E2D\u95F4\u7684\u7A7A\u683C\u4E0D\u9664\u53BB</span></span>
<span class="line"><span style="color:#A6ACCD;">    #str.replace(/\\s/g , &quot;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    #str.replace(/^\\s*|\\s*$/g,&quot;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul>`,15),t=[e];function o(c,r,A,C,i,y){return n(),a("div",null,t)}const u=s(p,[["render",o]]);export{d as __pageData,u as default};
