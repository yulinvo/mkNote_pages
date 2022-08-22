import{_ as s,c as n,o as a,b as l}from"./app.8608f89d.js";const u=JSON.parse('{"title":"while\u5FAA\u73AF","description":"","frontmatter":{},"headers":[{"level":2,"title":"while\u5FAA\u73AF","slug":"while\u5FAA\u73AF"},{"level":2,"title":"for\u5FAA\u73AF","slug":"for\u5FAA\u73AF"},{"level":3,"title":"break\u548Ccontinue","slug":"break\u548Ccontinue"}],"relativePath":"30_web\u524D\u7AEF/30_JavaScript/70_\u5FAA\u73AF\u8BED\u53E5.md"}'),p={name:"30_web\u524D\u7AEF/30_JavaScript/70_\u5FAA\u73AF\u8BED\u53E5.md"},e=l(`<h2 id="while\u5FAA\u73AF" tabindex="-1">while\u5FAA\u73AF <a class="header-anchor" href="#while\u5FAA\u73AF" aria-hidden="true">#</a></h2><ul><li><p>while\u5FAA\u73AF</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">while(\u6761\u4EF6\u8868\u8FBE\u5F0F){</span></span>
<span class="line"><span style="color:#A6ACCD;">	\u8BED\u53E5...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#var i=0;while(i&lt;5){i++;console.log(i)}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>do...while\u5FAA\u73AF</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">- \u8BED\u6CD5\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">	do{</span></span>
<span class="line"><span style="color:#A6ACCD;">		\u8BED\u53E5...</span></span>
<span class="line"><span style="color:#A6ACCD;">	}while(\u6761\u4EF6\u8868\u8FBE\u5F0F)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5B9E\u9645\u4E0A\u8FD9\u4E24\u4E2A\u8BED\u53E5\u529F\u80FD\u7C7B\u4F3C\uFF0C\u4E0D\u540C\u7684\u662Fwhile\u662F\u5148\u5224\u65AD\u540E\u6267\u884C\uFF0C\u800Cdo...while\u4F1A\u5148\u6267\u884C\u540E\u5224\u65AD</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">do...while\u53EF\u4EE5\u4FDD\u8BC1\u5FAA\u73AF\u4F53\u81F3\u5C11\u6267\u884C\u4E00\u6B21\uFF0C\u800Cwhile\u4E0D\u80FD</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h2 id="for\u5FAA\u73AF" tabindex="-1">for\u5FAA\u73AF <a class="header-anchor" href="#for\u5FAA\u73AF" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">for(var i = 0 ; i &lt; 10 ; i++ ){ xxx }</span></span>
<span class="line"><span style="color:#A6ACCD;">for(var i = 0,sum=0 ; i &lt; 10 ; i++ ){ xxx }             #\u521D\u59CB\u5316\u4E24\u4E2A\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for\u5FAA\u73AF\u4E2D\u7684\u4E09\u4E2A\u90E8\u5206\u90FD\u53EF\u4EE5\u7701\u7565\uFF0C\u4E5F\u53EF\u4EE5\u5199\u5728\u5916\u90E8</span></span>
<span class="line"><span style="color:#A6ACCD;">    var i=0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(;i&lt;10;){</span></span>
<span class="line"><span style="color:#A6ACCD;">        alert(&quot;i++&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u5982\u679C\u5728for\u5FAA\u73AF\u4E2D\u4E0D\u5199\u4EFB\u4F55\u7684\u8868\u8FBE\u5F0F\uFF0C\u53EA\u5199\u4E24\u4E2A;\u6B64\u65F6\u5FAA\u73AF\u662F\u4E00\u4E2A\u6B7B\u5FAA\u73AF\u4F1A\u4E00\u76F4\u6267\u884C\u4E0B\u53BB\uFF0C\u614E\u7528     </span></span>
<span class="line"><span style="color:#A6ACCD;">        #for(;;){}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u7EC3\u4E60\u4E00\uFF1Afor\u5FAA\u73AF\u6C42\u53D61\u5230100\u6240\u6709\u6570\u5B57\u7684\u548C\uFF0Csum\u5B9A\u4E49\u5728\u4E86for\u5FAA\u73AF\u7684\u5916\u8FB9\uFF0C\u6700\u540E\u4F9D\u7136\u80FD\u53D6\u5230sum\u7684\u503C\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">    var sum=0;for(){...};console.log(sum)        #sum\u521D\u59CB\u5316\u5B9A\u4E49\u5728for\u7684\u5916\u4FA7</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(i=0,sum=0;i&lt;100;i++){...}    			 #sum\u521D\u59CB\u5316\u5B9A\u4E49\u5728for\u7684\u5185\u90E8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="break\u548Ccontinue" tabindex="-1">break\u548Ccontinue <a class="header-anchor" href="#break\u548Ccontinue" aria-hidden="true">#</a></h3><p>\u4E0D\u80FD\u5728if\u8BED\u53E5\u4E2D\u4F7F\u7528break\uFF0C\u53EA\u80FD\u5728for\u6216switch\u4E2D\u4F7F\u7528</p><p>break\u53EA\u5BF9\u79BB\u4ED6\u6700\u8FD1\u7684\u5FAA\u73AF\u6709\u5F71\u54CD\uFF0Cfor\u5FAA\u73AF\u5D4C\u5957\u7684\u65F6\u5019\uFF0C\u5185\u90E8\u7684break\u53EA\u80FD\u7EC8\u6B62\u5185\u5FAA\u73AF</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">label\uFF1A \uFF08\u76F8\u5F53\u4E8E\u5B9A\u4E49\u4E86\u4E00\u4E2A\u522B\u540D\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">	\u53EF\u4EE5\u4E3A\u5FAA\u73AF\u8BED\u53E5\u521B\u5EFA\u4E00\u4E2Alabel\uFF0C\u6765\u6807\u8BC6\u5F53\u524D\u7684\u5FAA\u73AF,</span></span>
<span class="line"><span style="color:#A6ACCD;">	\u4F7F\u7528break\u8BED\u53E5\u65F6\u53EF\u4EE5\u5728break\u540E\u8DDF\u7740\u4E00\u4E2Alabel\uFF0C\u8FD9\u6837break\u5C06\u4F1A\u7ED3\u675F\u6307\u5B9A\u7684\u5FAA\u73AF\uFF0C\u800C\u4E0D\u662F\u6700\u8FD1\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	outer:                        #label:\u5FAA\u73AF\u8BED\u53E5</span></span>
<span class="line"><span style="color:#A6ACCD;">	for(var i=0 ; i&lt;5 ; i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;@\u5916\u5C42\u5FAA\u73AF&quot;+i)</span></span>
<span class="line"><span style="color:#A6ACCD;">		for(var j=0 ; j&lt;5; j++){</span></span>
<span class="line"><span style="color:#A6ACCD;">			break outer;                               #\u4F7F\u7528label\uFF0C\u5FAA\u73AF\u5D4C\u5957\u65F6\u53EF\u4EE5\u76F4\u63A5\u7EC8\u6B62\u5916\u5C42\u5FAA\u73AF</span></span>
<span class="line"><span style="color:#A6ACCD;">			console.log(&quot;\u5185\u5C42\u5FAA\u73AF:&quot;+j);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>continue\u4E5F\u662F\u53EA\u5BF9\u79BB\u4ED6\u6700\u8FD1\u7684\u5FAA\u73AF\u6709\u5F71\u54CD</p>`,9),o=[e];function t(c,r,i,A,C,y){return a(),n("div",null,o)}const D=s(p,[["render",t]]);export{u as __pageData,D as default};
