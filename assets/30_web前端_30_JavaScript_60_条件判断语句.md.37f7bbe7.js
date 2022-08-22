import{_ as s,c as n,o as a,b as l}from"./app.8608f89d.js";const u=JSON.parse('{"title":"if\u8BED\u53E5","description":"","frontmatter":{},"headers":[{"level":2,"title":"if\u8BED\u53E5","slug":"if\u8BED\u53E5"},{"level":2,"title":"switch\u8BED\u53E5","slug":"switch\u8BED\u53E5"}],"relativePath":"30_web\u524D\u7AEF/30_JavaScript/60_\u6761\u4EF6\u5224\u65AD\u8BED\u53E5.md"}'),p={name:"30_web\u524D\u7AEF/30_JavaScript/60_\u6761\u4EF6\u5224\u65AD\u8BED\u53E5.md"},e=l(`<h2 id="if\u8BED\u53E5" tabindex="-1">if\u8BED\u53E5 <a class="header-anchor" href="#if\u8BED\u53E5" aria-hidden="true">#</a></h2><ul><li><p>\u8BED\u6CD5</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if(\u6761\u4EF61 &amp;&amp; \u6761\u4EF62){</span></span>
<span class="line"><span style="color:#A6ACCD;">	xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">}else if(\u6761\u4EF6\u8868\u8FBE\u5F0F){ </span></span>
<span class="line"><span style="color:#A6ACCD;">	xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">}else{        #else\u4E5F\u53EF\u4EE5\u7701\u7565\uFF0C\u53EA\u5199\u4E00\u4E2Aif(\u6761\u4EF6\u8868\u8FBE\u5F0F){xxx}</span></span>
<span class="line"><span style="color:#A6ACCD;">	xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u53EA\u6709\u4E00\u6761\u8BED\u53E5\u65F6\u7684\u7B80\u5199\u5F62\u5F0F</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if(true) alert(&#39;xxx&#39;)        #if(true) return</span></span>
<span class="line"><span style="color:#A6ACCD;">	#if\u8BED\u53E5\u53EA\u80FD\u63A7\u5236\u7D27\u968F\u5176\u540E\u7684\u90A3\u4E2A\u8BED\u53E5</span></span>
<span class="line"><span style="color:#A6ACCD;">	#\u4E4B\u6240\u4EE5\u9700\u8981\u4EE3\u7801\u5757{}\uFF0C\u662F\u56E0\u4E3A\u8981\u6267\u884C\u591A\u6761\u8BED\u53E5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><p>if(num = 10){xxx} #\u8FD9\u79CD\u8D4B\u503C\u8BED\u53E5\u5224\u65AD\uFF0C\u6C38\u8FDC\u4E3Atrue</p><h2 id="switch\u8BED\u53E5" tabindex="-1">switch\u8BED\u53E5 <a class="header-anchor" href="#switch\u8BED\u53E5" aria-hidden="true">#</a></h2><ul><li><p>\u8BED\u6CD5</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">switch(\u6761\u4EF6\u8868\u8FBE\u5F0F){</span></span>
<span class="line"><span style="color:#A6ACCD;">	case \u8868\u8FBE\u5F0F:</span></span>
<span class="line"><span style="color:#A6ACCD;">		\u8BED\u53E5...</span></span>
<span class="line"><span style="color:#A6ACCD;">		break;                #\u4E3A\u4EC0\u4E48\u8981\u52A0break\uFF0C\u5728#P33 09:50</span></span>
<span class="line"><span style="color:#A6ACCD;">	case \u8868\u8FBE\u5F0F:</span></span>
<span class="line"><span style="color:#A6ACCD;">		\u8BED\u53E5...</span></span>
<span class="line"><span style="color:#A6ACCD;">		break;</span></span>
<span class="line"><span style="color:#A6ACCD;">	default:</span></span>
<span class="line"><span style="color:#A6ACCD;">		\u8BED\u53E5...</span></span>
<span class="line"><span style="color:#A6ACCD;">		break;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">switch(num){</span></span>
<span class="line"><span style="color:#A6ACCD;">    case 1:</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&quot;\u58F9&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        //\u4F7F\u7528break\u53EF\u4EE5\u6765\u9000\u51FAswitch\u8BED\u53E5</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">    case 2:</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&quot;\u8D30&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">    case 3:</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&quot;\u53C1&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default:</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&quot;\u975E\u6CD5\u6570\u5B57~~&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;        #default\u7684\u8FD9\u4E2Abreak\u52A0\u4E0D\u52A0\u5E94\u8BE5\u6CA1\u6709\u5F71\u54CD\u7684\u5427</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u7EC3\u4E60: \u5BF9\u4E8E\u6210\u7EE9\u5927\u4E8E60\u5206\u7684\uFF0C\u8F93\u51FA&#39;\u5408\u683C&#39;\u3002\u4F4E\u4E8E60\u5206\u7684\uFF0C\u8F93\u51FA&#39;\u4E0D\u5408\u683C&#39;</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u65B9\u5F0F\u4E00\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">switch(parseInt(score/10)){                     #\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">	case 10:</span></span>
<span class="line"><span style="color:#A6ACCD;">	case 9:</span></span>
<span class="line"><span style="color:#A6ACCD;">	case 8:</span></span>
<span class="line"><span style="color:#A6ACCD;">	case 7:</span></span>
<span class="line"><span style="color:#A6ACCD;">	case 6:</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u5408\u683C&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		break;</span></span>
<span class="line"><span style="color:#A6ACCD;">	default:</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u4E0D\u5408\u683C&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		break;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u65B9\u5F0F\u4E8C\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">switch(true){        #\u8FD9\u79CD\u65B9\u5F0F\u662Fjs\u72EC\u6709\u7684\uFF0C\u5176\u4ED6\u8BED\u8A00\u4E2D\u4E0D\u80FD\u8FD9\u4E48\u7528\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">	case score &gt;= 60:</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u5408\u683C&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		break;</span></span>
<span class="line"><span style="color:#A6ACCD;">	default:</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u4E0D\u5408\u683C&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		break;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul>`,5),o=[e];function c(t,A,i,r,C,y){return a(),n("div",null,o)}const d=s(p,[["render",c]]);export{u as __pageData,d as default};
