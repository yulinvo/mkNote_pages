import{_ as s,c as a,o as n,b as l}from"./app.8608f89d.js";const d=JSON.parse('{"title":"\u521B\u5EFA\u6570\u7EC4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA\u6570\u7EC4","slug":"\u521B\u5EFA\u6570\u7EC4"},{"level":3,"title":"\u8BFB\u53D6/\u6DFB\u52A0\u5143\u7D20","slug":"\u8BFB\u53D6-\u6DFB\u52A0\u5143\u7D20"},{"level":3,"title":"length","slug":"length"},{"level":2,"title":"\u80FD\u5F71\u54CD\u539F\u6570\u7EC4\u65B9\u6CD5","slug":"\u80FD\u5F71\u54CD\u539F\u6570\u7EC4\u65B9\u6CD5"},{"level":2,"title":"\u5FAA\u73AF\u5217\u8868","slug":"\u5FAA\u73AF\u5217\u8868"},{"level":2,"title":"for...in","slug":"for-in"},{"level":2,"title":"for...of","slug":"for-of"},{"level":2,"title":"\u5224\u65AD\u5217\u8868\u662F\u5426\u5305\u542B\u67D0\u503C","slug":"\u5224\u65AD\u5217\u8868\u662F\u5426\u5305\u542B\u67D0\u503C"},{"level":2,"title":"push","slug":"push"},{"level":2,"title":"pop","slug":"pop"},{"level":2,"title":"unshift","slug":"unshift"},{"level":2,"title":"shift","slug":"shift"},{"level":2,"title":"filter","slug":"filter"},{"level":2,"title":"forEach","slug":"foreach"},{"level":2,"title":"fill","slug":"fill"},{"level":2,"title":"slice","slug":"slice"},{"level":2,"title":"splice","slug":"splice"},{"level":2,"title":"some","slug":"some"},{"level":2,"title":"every","slug":"every"},{"level":2,"title":"map","slug":"map"},{"level":2,"title":"concat","slug":"concat"},{"level":2,"title":"join","slug":"join"},{"level":2,"title":"reverse","slug":"reverse"},{"level":2,"title":"sort","slug":"sort"},{"level":2,"title":"reduce","slug":"reduce"},{"level":2,"title":"\u7C7B\u6570\u7EC4 => list\u6570\u7EC4","slug":"\u7C7B\u6570\u7EC4-list\u6570\u7EC4"}],"relativePath":"30_web\u524D\u7AEF/30_JavaScript/20_\u57FA\u7840\u6570\u636E\u7C7B\u578B/07_List\u7C7B\u578B.md"}'),p={name:"30_web\u524D\u7AEF/30_JavaScript/20_\u57FA\u7840\u6570\u636E\u7C7B\u578B/07_List\u7C7B\u578B.md"},e=l(`<h2 id="\u521B\u5EFA\u6570\u7EC4" tabindex="-1">\u521B\u5EFA\u6570\u7EC4 <a class="header-anchor" href="#\u521B\u5EFA\u6570\u7EC4" aria-hidden="true">#</a></h2><ul><li><p>\u65B9\u5F0F\u4E00</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var arr = new Array();</span></span>
<span class="line"><span style="color:#A6ACCD;">var arr2 = new Array(10,20,30);</span></span>
<span class="line"><span style="color:#A6ACCD;">arr2 = new Array(10);       #\u8FD9\u79CD\u8868\u793A\u7684\u662F\u521B\u5EFA\u957F\u5EA6\u4E3A10\u7684\u6570\u7EC4\uFF0C\u6B64\u65F6\u8868\u793A\u7684\u5C31\u4E0D\u662F\u6570\u7EC4\u7684\u5143\u7D20\u662F10\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u65B9\u5F0F\u4E8C</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var arr = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">var arr = [1,2,3,4,5,10];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h3 id="\u8BFB\u53D6-\u6DFB\u52A0\u5143\u7D20" tabindex="-1">\u8BFB\u53D6/\u6DFB\u52A0\u5143\u7D20 <a class="header-anchor" href="#\u8BFB\u53D6-\u6DFB\u52A0\u5143\u7D20" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">arr[0] = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">arr[1] = 33;</span></span>
<span class="line"><span style="color:#A6ACCD;">arr[arr.length] = 123;                #\u5411\u6570\u7EC4\u7684\u672B\u5C3E\u4F4D\u7F6E\u6DFB\u52A0\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">arr.hello = &quot;abc&quot;;    #\u8FD9\u6837\u4E5F\u80FD\u5199\uFF0C\u4F46\u662F\u6CA1\u6709\u610F\u4E49\u4E86\uFF0C\u76F8\u5F53\u4E8E\u662F\u6DFB\u52A0\u4E86\u4E00\u4E2Ahello\u7684\u5C5E\u6027\uFF08\u6570\u7EC4\u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u80FD\u505A\u7684\u4E8B\u60C5\u4ED6\u90FD\u80FD\u505A\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="length" tabindex="-1">length <a class="header-anchor" href="#length" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">arr.length                #\u5BF9\u4E8E\u8FDE\u7EED\u7684\u6570\u7EC4\uFF0C\u4F7F\u7528length\u53EF\u4EE5\u83B7\u53D6\u5230\u6570\u7EC4\u7684\u957F\u5EA6\uFF08\u5143\u7D20\u7684\u4E2A\u6570\uFF09\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">    #arr[10] = 100;  \u4F46\u662F\u5BF9\u4E8E\u975E\u8FDE\u7EED\u7684\u6570\u7EC4\uFF0C\u4F7F\u7528length\u4F1A\u83B7\u53D6\u5230\u6570\u7EC4\u7684\u6700\u5927\u7684\u7D22\u5F15+1\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4FEE\u6539length:</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u5982\u679C\u4FEE\u6539\u7684length\u5927\u4E8E\u539F\u957F\u5EA6\uFF0C\u5219\u591A\u51FA\u90E8\u5206\u4F1A\u7A7A\u51FA\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u5982\u679C\u4FEE\u6539\u7684length\u5C0F\u4E8E\u539F\u957F\u5EA6\uFF0C\u5219\u591A\u51FA\u7684\u5143\u7D20\u4F1A\u88AB\u5220\u9664\uFF0Carr.length = 10;        </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u80FD\u5F71\u54CD\u539F\u6570\u7EC4\u65B9\u6CD5" tabindex="-1">\u80FD\u5F71\u54CD\u539F\u6570\u7EC4\u65B9\u6CD5 <a class="header-anchor" href="#\u80FD\u5F71\u54CD\u539F\u6570\u7EC4\u65B9\u6CD5" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u80FD\u5F71\u54CD\u539F\u6570\u7EC4\u7684\u65B9\u6CD5\uFF1Apush/pop/shift/unshift/splice/sort/reverse</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5FAA\u73AF\u5217\u8868" tabindex="-1">\u5FAA\u73AF\u5217\u8868 <a class="header-anchor" href="#\u5FAA\u73AF\u5217\u8868" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">aa=[11,22,33,44,55]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for (var i = 0;i &lt; aa.length;i++ ){console.log(aa[i])}    #\u9700\u8981\u5148\u5B9A\u4E49i=0\uFF0C\u5FAA\u73AF\u5B8C\u6210\u540Ei\u7684\u503C\u4E3A6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="for-in" tabindex="-1">for...in <a class="header-anchor" href="#for-in" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">for (var i in aa){console.log(i)}        #\u8F93\u51FA\u7684\u7ED3\u679C\u4E3A\u5217\u8868\u7684\u7D22\u5F15\u503C\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A&#39;4&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="for-of" tabindex="-1">for...of <a class="header-anchor" href="#for-of" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">for (var i of aa){console.log(i)}        #\u8F93\u51FA\u7ED3\u679C\u4E3A\u5217\u8868\u4E2D\u7684\u503C\uFF0C\u5FAA\u73AF\u5B8C\u6210\u540Ei\u7684\u503C\u4E3A55</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5224\u65AD\u5217\u8868\u662F\u5426\u5305\u542B\u67D0\u503C" tabindex="-1">\u5224\u65AD\u5217\u8868\u662F\u5426\u5305\u542B\u67D0\u503C <a class="header-anchor" href="#\u5224\u65AD\u5217\u8868\u662F\u5426\u5305\u542B\u67D0\u503C" aria-hidden="true">#</a></h2><ul><li><p>includes\u65B9\u6CD5</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (aa.includes(22)) { console.log(&#39;true&#39;) }    #\u4E0D\u4EC5\u9002\u7528\u4E8E\u5224\u65ADlist\u662F\u5426\u5305\u542B\u7279\u5B9A\u5143\u7D20\uFF0C\u4E5F\u9002\u7528\u4E8E\u5224\u65AD\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u5305\u542B\u7279\u5B9A\u5B57\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>indexOf\u65B9\u6CD5</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if(aa.indexOf(22) !== -1) {console.log(&#39;true&#39;)}    #\u4E0D\u4EC5\u9002\u7528\u4E8E\u5224\u65ADlist\u662F\u5426\u5305\u542B\u7279\u5B9A\u5143\u7D20\uFF0C\u4E5F\u9002\u7528\u4E8E\u5224\u65AD\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u5305\u542B\u7279\u5B9A\u5B57\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u5224\u8BFB\u662F\u5426\u5305\u542B\u7A7A\u65F6\uFF1A\u6570\u7EC4\u548C\u5B57\u7B26\u4E32\u7684\u533A\u522B</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[11,22,33,44,55].indexOf(&#39;&#39;)                #\u6570\u7EC4\u5224\u65AD\u7684\u65F6\u5019\u4E3Afalse\uFF0C\u4E0D\u5305\u542B</span></span>
<span class="line"><span style="color:#A6ACCD;">&#39;abc&#39;.includes(&#39;&#39;)            #\u5B57\u7B26\u4E32\u5224\u65AD\u7684\u65F6\u5019\u4E3Atrue\uFF0C\u5305\u542B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h2 id="push" tabindex="-1">push <a class="header-anchor" href="#push" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u5411\u6570\u7EC4\u7684\u672B\u5C3E\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u6570\u7EC4\u7684\u65B0\u7684\u957F\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">arr.push(&quot;\u5510\u50E7&quot;,&quot;\u8718\u86DB\u7CBE&quot;,&quot;\u767D\u9AA8\u7CBE&quot;,&quot;\u7389\u5154\u7CBE&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="pop" tabindex="-1">pop <a class="header-anchor" href="#pop" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u5220\u9664\u6570\u7EC4\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20,\u5E76\u5C06\u88AB\u5220\u9664\u7684\u5143\u7D20\u4F5C\u4E3A\u8FD4\u56DE\u503C\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">arr.pop();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="unshift" tabindex="-1">unshift <a class="header-anchor" href="#unshift" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u5411\u6570\u7EC4\u5F00\u5934\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u65B0\u7684\u6570\u7EC4\u957F\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">arr.unshift(&quot;\u5510\u50E7&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="shift" tabindex="-1">shift <a class="header-anchor" href="#shift" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u53EF\u4EE5\u5220\u9664\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u5E76\u5C06\u88AB\u5220\u9664\u7684\u5143\u7D20\u4F5C\u4E3A\u8FD4\u56DE\u503C\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">arr.shift();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="filter" tabindex="-1">filter <a class="header-anchor" href="#filter" aria-hidden="true">#</a></h2><blockquote><p>filter\u8FC7\u6EE4\u4E0D\u5F71\u54CD\u539F\u6570\u7EC4\uFF0C\u800C\u662F\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">alreadyFinishCount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.todolist.filter((item) =&gt; item.status == true).length;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#\u6B64\u5904\u53EF\u4EE5\u6539\u4E3A\uFF1Athis.todolist.filter((item) =&gt; item.status).length;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>\u793A\u4F8B\uFF1A\u4E24\u4E2Alist\u6C42\u4EA4\u96C6</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">...new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">(arr)]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr2</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">// 4 5 6</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">s2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">						</span><span style="color:#676E95;">//\u6CE8\u610Ffilter\u8FD4\u56DE\u7684\u662Ftrue\u3001false</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="foreach" tabindex="-1">forEach <a class="header-anchor" href="#foreach" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">arr.forEach((\u6B63\u5728\u904D\u5386\u7684\u5143\u7D20,\u6B63\u5728\u904D\u5386\u5143\u7D20\u7684\u7D22\u5F15,\u6B63\u5728\u904D\u5386\u7684\u6570\u7EC4)=&gt;{...})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">arr.forEach(function(value, index, totalObj){        #forEach</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(value);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="fill" tabindex="-1">fill <a class="header-anchor" href="#fill" aria-hidden="true">#</a></h2><h2 id="slice" tabindex="-1">slice <a class="header-anchor" href="#slice" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u53EF\u4EE5\u7528\u6765\u4ECE\u6570\u7EC4\u63D0\u53D6\u6307\u5B9A\u5143\u7D20; \u8BE5\u65B9\u6CD5\u4E0D\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\uFF0C\u800C\u662F\u5C06\u622A\u53D6\u5230\u7684\u5143\u7D20\u5C01\u88C5\u5230\u4E00\u4E2A\u65B0\u6570\u7EC4\u4E2D\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">arr.slice(1,4);             #\u5305\u542B\u5F00\u59CB\u7D22\u5F15\u5143\u7D20\uFF0C\u4E0D\u5305\u542B\u7ED3\u675F\u4F4D\u7F6E\u7684\u7D22\u5F15\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;">arr.slice(3);               #\u4ECE3\u5F00\u59CB\u7684\u6240\u6709\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;">arr.slice(1,-2);            #-1 \u5012\u6570\u7B2C\u4E00\u4E2A\uFF0C-2 \u5012\u6570\u7B2C\u4E8C\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="splice" tabindex="-1">splice <a class="header-anchor" href="#splice" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u4F7F\u7528splice()\u4F1A\u5F71\u54CD\u5230\u539F\u6570\u7EC4\uFF0C\u4F1A\u5C06\u6307\u5B9A\u5143\u7D20\u4ECE\u539F\u6570\u7EC4\u4E2D\u5220\u9664\uFF0C\u5E76\u5C06\u88AB\u5220\u9664\u7684\u5143\u7D20\u4F5C\u4E3A\u8FD4\u56DE\u503C\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">arr.splice(3,0,&quot;\u725B\u9B54\u738B&quot;,&quot;\u94C1\u6247\u516C\u4E3B&quot;,&quot;\u7EA2\u5B69\u513F&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="some" tabindex="-1">some <a class="header-anchor" href="#some" aria-hidden="true">#</a></h2><h2 id="every" tabindex="-1">every <a class="header-anchor" href="#every" aria-hidden="true">#</a></h2><p>every\u5224\u65AD\u5F53\u6570\u7EC4\u4E2D\u6240\u6709\u5143\u7D20\u90FD\u6EE1\u8DB3\u6761\u4EF6\u7ED3\u679C\u624D\u4E3A\u771F\uFF0C\u53EA\u8981\u6709\u4E00\u4E2A\u4E0D\u662F\u5C31\u4E3A\u5047</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">every</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">aaa</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">every</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ischecked </span><span style="color:#89DDFF;">==</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> )        </span></span>
<span class="line"><span style="color:#A6ACCD;">#\u6240\u6709\u7684ischecked\u52FE\u9009\u624D\u4E3A\u771F\uFF0C\u53EA\u8981\u6709\u4E00\u4E2A\u4E0D\u662F\u5C31\u4E3A\u5047</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">-</span></span>
<span class="line"></span></code></pre></div><h2 id="map" tabindex="-1">map <a class="header-anchor" href="#map" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">*</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)            </span><span style="color:#676E95;">//\u7ED3\u679C[10,20,30,40]</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> [item </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">//\u7ED3\u679C[[10],[20],[30],[40]]</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)         </span><span style="color:#676E95;">//\u7ED3\u679C[false,false,true,true]</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="concat" tabindex="-1">concat <a class="header-anchor" href="#concat" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u53EF\u4EE5\u8FDE\u63A5\u4E24\u4E2A\u6216\u591A\u4E2A\u6570\u7EC4\uFF0C\u5E76\u5C06\u65B0\u7684\u6570\u7EC4\u8FD4\u56DE\uFF1B    \u8BE5\u65B9\u6CD5\u4E0D\u4F1A\u5BF9\u539F\u6570\u7EC4\u4EA7\u751F\u5F71\u54CD</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">arr.concat(arr2,arr3,&quot;\u725B\u9B54\u738B&quot;,&quot;\u94C1\u6247\u516C\u4E3B&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#\u6CE8\u610F\uFF1A[1,2,3] + [4,5]  \u7ED3\u679C\u4E3A\uFF1A&#39;1,2,34,5&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">[...[1,2,3],...[4,5]]        #\u8FD8\u53EF\u4EE5\u7528\u8FD9\u79CDES6\u4E2D\u7684\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="join" tabindex="-1">join <a class="header-anchor" href="#join" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u5C06\u6570\u7EC4\u8F6C\u6362\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u5728join()\u4E2D\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD9\u4E2A\u5B57\u7B26\u4E32\u5C06\u4F1A\u6210\u4E3A\u6570\u7EC4\u4E2D\u5143\u7D20\u7684\u8FDE\u63A5\u7B26;\u5982\u679C\u4E0D\u6307\u5B9A\u8FDE\u63A5\u7B26\uFF0C\u5219\u9ED8\u8BA4\u4F7F\u7528,\u4F5C\u4E3A\u8FDE\u63A5\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">arr.join(&quot;@-@&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="reverse" tabindex="-1">reverse <a class="header-anchor" href="#reverse" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u8BE5\u65B9\u6CD5\u4F1A\u76F4\u63A5\u4FEE\u6539\u539F\u6570\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">arr.reverse();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="sort" tabindex="-1">sort <a class="header-anchor" href="#sort" aria-hidden="true">#</a></h2><blockquote><p>\u4F1A\u5F71\u54CD\u539F\u6570\u7EC4</p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u5347\u5E8F\uFF1Aaa.sort((a,b)=&gt;a-b)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u964D\u5E8F\uFF1Aaa.sort((a,b)=&gt;b-a)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="reduce" tabindex="-1">reduce <a class="header-anchor" href="#reduce" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const todos = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    { todo: &quot;\u5954\u9A70&quot;, flag: true },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { todo: &quot;\u5965\u8FEA&quot;, flag: false },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { todo: &quot;\u5B9D\u9A6C&quot;, flag: true }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">todos.reduce((pre, todo,index) =&gt; pre + (todo.flag ? 1 : 0), 0)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7C7B\u6570\u7EC4-list\u6570\u7EC4" tabindex="-1">\u7C7B\u6570\u7EC4 =&gt; list\u6570\u7EC4 <a class="header-anchor" href="#\u7C7B\u6570\u7EC4-list\u6570\u7EC4" aria-hidden="true">#</a></h2><ul><li><p>\u65B9\u5F0F\u4E00\uFF1AArray.from()\u65B9\u6CD5</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let allSpan = document.getElementsByClassName(&#39;menuSpan&#39;)    #\u6B64\u65F6allSpan\u662F\u7C7Blist\u5217\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">    #\u6B64\u65F6 allSpan.forEach(item=&gt;{}) \u6B64\u65F6\u4F1A\u62A5\u9519 allSpan.forEach is not a function</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Array.from(allSpan).forEach(element =&gt; {...});    #Array.from(allSpan)\u8F6C\u6362\u4E0B\u5C31\u53EF\u4EE5\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u65B9\u5F0F\u4E8C\uFF1A ...[xx]\u65B9\u6CD5\u8FDB\u884C\u5C55\u5F00</p></li></ul>`,55),o=[e];function c(t,r,i,C,A,y){return n(),a("div",null,o)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
