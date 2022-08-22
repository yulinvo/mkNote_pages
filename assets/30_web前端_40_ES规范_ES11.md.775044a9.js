import{_ as s,c as n,o as a,b as l}from"./app.8608f89d.js";const i=JSON.parse('{"title":"String.prototype.matchAll","description":"","frontmatter":{},"headers":[{"level":2,"title":"String.prototype.matchAll","slug":"string-prototype-matchall"},{"level":2,"title":"\u7C7B\u7684\u79C1\u6709\u5C5E\u6027","slug":"\u7C7B\u7684\u79C1\u6709\u5C5E\u6027"},{"level":2,"title":"Promise.allSettled","slug":"promise-allsettled"},{"level":2,"title":"\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26","slug":"\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26"},{"level":2,"title":"\u52A8\u6001 import \u5BFC\u5165","slug":"\u52A8\u6001-import-\u5BFC\u5165"},{"level":2,"title":"BigInt","slug":"bigint"},{"level":2,"title":"globalThis \u5BF9\u8C61","slug":"globalthis-\u5BF9\u8C61"}],"relativePath":"30_web\u524D\u7AEF/40_ES\u89C4\u8303/ES11.md"}'),p={name:"30_web\u524D\u7AEF/40_ES\u89C4\u8303/ES11.md"},o=l(`<h2 id="string-prototype-matchall" tabindex="-1">String.prototype.matchAll <a class="header-anchor" href="#string-prototype-matchall" aria-hidden="true">#</a></h2><p>matchAll\u65B9\u6CD5\u7528\u6765\u5F97\u5230\u6B63\u5219\u6279\u91CF\u5339\u914D\u7684\u7ED3\u679C</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">        &lt;li&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;a&gt;\u8096\u751F\u514B\u7684\u6551\u8D4E&lt;/a&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;p&gt;\u4E0A\u6620\u65E5\u671F: 1994-09-10&lt;/p&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">        &lt;/li&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">        &lt;li&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;a&gt;\u963F\u7518\u6B63\u4F20&lt;/a&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;p&gt;\u4E0A\u6620\u65E5\u671F: 1994-07-06&lt;/p&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">        &lt;/li&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;/ul&gt;</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//\u58F0\u660E\u6B63\u5219</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> reg </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">&lt;li&gt;.</span><span style="color:#89DDFF;">*?</span><span style="color:#C3E88D;">&lt;a&gt;</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">*?)</span><span style="color:#C3E88D;">&lt;</span><span style="color:#A6ACCD;">\\/</span><span style="color:#C3E88D;">a&gt;.</span><span style="color:#89DDFF;">*?</span><span style="color:#C3E88D;">&lt;p&gt;</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">*?)</span><span style="color:#C3E88D;">&lt;</span><span style="color:#A6ACCD;">\\/</span><span style="color:#C3E88D;">p&gt;</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">sg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//\u8C03\u7528\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">matchAll</span><span style="color:#A6ACCD;">(reg)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// for(let v of result){</span></span>
<span class="line"><span style="color:#676E95;">//     console.log(v);</span></span>
<span class="line"><span style="color:#676E95;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">result]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7C7B\u7684\u79C1\u6709\u5C5E\u6027" tabindex="-1">\u7C7B\u7684\u79C1\u6709\u5C5E\u6027 <a class="header-anchor" href="#\u7C7B\u7684\u79C1\u6709\u5C5E\u6027" aria-hidden="true">#</a></h2><p>\u4F7F\u7528#age\u8FD9\u79CD\u65B9\u5F0F\u5B9A\u4E49\u7C7B\u7684\u79C1\u6709\u5C5E\u6027\uFF0C\u79C1\u6709\u5C5E\u6027\u53EA\u80FD\u5728\u7C7B\u7684\u5185\u90E8\u4F7F\u7528\uFF0C\u4E0D\u80FD\u5728\u5916\u90E8\u8C03\u7528</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//\u516C\u6709\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//\u79C1\u6709\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">#age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">#weight</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//\u6784\u9020\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">weight</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">#age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">#weight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">weight</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">intro</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">#age</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">#weight</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//\u5B9E\u4F8B\u5316</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> girl </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6653\u7EA2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">45kg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(girl</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// console.log(girl.#age);</span></span>
<span class="line"><span style="color:#676E95;">// console.log(girl.#weight);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">girl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">intro</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="promise-allsettled" tabindex="-1">Promise.allSettled <a class="header-anchor" href="#promise-allsettled" aria-hidden="true">#</a></h2><p>Promise.allSettled\u63A5\u6536\u4E00\u4E2Apromise\u7684\u6570\u7EC4\uFF0C\u8FD4\u56DE\u7684\u4E5F\u662F\u4E00\u4E2Apromise\u7684\u5BF9\u8C61\uFF0C\u4E0D\u8FC7\u8FD4\u56DE\u7684\u7ED3\u679C\u6C38\u8FDC\u662F\u4E00\u4E2A\u6210\u529F\u7684\u72B6\u6001\uFF0C\u6210\u529F\u7684\u503C\u662F\u6BCF\u4E00\u4E2Apromise\u7684\u72B6\u6001\u548C\u7ED3\u679C</p><blockquote><p>\u8DDFPromise.allSettled\u5F88\u50CF\u7684\u662FPromise.all\u65B9\u6CD5\uFF0C\u533A\u522B\u662FallSettled\u6C38\u8FDC\u6210\u529F\uFF0Call\u65B9\u6CD5\u662F\u5168\u90E8\u6210\u529F\u624D\u6210\u529F\uFF0C\u53EA\u6709\u6709\u4EFB\u4F55\u4E00\u4E2A\u5931\u8D25\u5219all\u7684\u72B6\u6001\u5C31\u4E3A\u5931\u8D25</p><p>\u53E6\u5916all\u7684\u7ED3\u679C\uFF1A\u90FD\u6210\u529F\u4E86\u662F\u6240\u6709\u6210\u529F\u503C\u7684\u3010\u6570\u7EC4\u3011\uFF0C\u6709\u5931\u8D25\u7684\u8BDD\u5219\u8FD4\u56DE\u5931\u8D25\u7684\u7ED3\u679C\uFF08\u975E\u6570\u7EC4\uFF0C\u5FFD\u7565\u6389\u6210\u529F\u7684\u503C\uFF09</p></blockquote><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">//\u58F0\u660E\u4E24\u4E2Apromise\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> p1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5546\u54C1\u6570\u636E - 1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> p2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5546\u54C1\u6570\u636E - 2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// reject(&#39;\u51FA\u9519\u5566!&#39;);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//\u8C03\u7528 allsettled \u65B9\u6CD5</span></span>
<span class="line"><span style="color:#676E95;">// const res = Promise.allSettled([p1, p2]);     //res\u72B6\u6001\u59CB\u7EC8\u6210\u529F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">all</span><span style="color:#A6ACCD;">([p1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> p2])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;">//\u5F53\u6709\u5931\u8D25\u7684\u65F6\u5019res\u7684\u7ED3\u679C\u5C31\u4E0D\u662F\u6570\u7EC4\u4E86\uFF0C\u800C\u662F\u5341\u5931\u8D25\u7684</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(res)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26" tabindex="-1">\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26 <a class="header-anchor" href="#\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26" aria-hidden="true">#</a></h2><blockquote><p>\u7B26\u53F7\u4E3A ?.</p></blockquote><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// const dbHost = config &amp;&amp; config.db &amp;&amp; confg.db.host;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dbHost</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">     \xA0\xA0\xA0\xA0</span><span style="color:#676E95;">//\u7701\u53BB\u4E00\u6B65\u6B65\u7684\u5224\u65AD\u4E86</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">dbHost</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">db</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">192.168.1.100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">cache</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">192.168.1.200</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u52A8\u6001-import-\u5BFC\u5165" tabindex="-1">\u52A8\u6001 import \u5BFC\u5165 <a class="header-anchor" href="#\u52A8\u6001-import-\u5BFC\u5165" aria-hidden="true">#</a></h2><blockquote><p>\u9759\u6001\u5BFC\u5165\uFF1Aimport * as m1 ...</p><p>\u52A8\u6001\u5BFC\u5165\uFF1A\u4F7F\u7528import()\u51FD\u6570\uFF0Cimport()\u51FD\u6570\u7684\u8FD4\u56DE\u7ED3\u679C\u662F\u4E00\u4E2Apromise\u5BF9\u8C61\uFF0C\u7ED3\u679C\u4E2D\u7684\u6570\u636E\u7C7B\u4F3C\u4E8E\u901A\u7528\u7684\u5BFC\u5165\u65B9\u5F0Fimport * as m1 ...\u4E2D\u7684m1</p></blockquote><p>index.html</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0\xA0\xA0\xA0</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u70B9\u51FB</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">\xA0\xA0\xA0\xA0</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./js/app.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>app.js\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0//\u52A8\u6001\u5F15\u5165</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// import * as m1 from &quot;./hello.js&quot;;            //\u9759\u6001\u5F15\u5165</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> btn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">btn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">btn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./hello.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">module</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">        </span><span style="color:#676E95;">//\u52A8\u6001\u5F15\u5165</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">module.</span><span style="color:#82AAFF;">hello</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>hello.js</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hello</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="bigint" tabindex="-1">BigInt <a class="header-anchor" href="#bigint" aria-hidden="true">#</a></h2><p>\u8868\u793A\u65B9\u6CD5\uFF1A\u5728\u666E\u901A\u6570\u5B57\u7684\u57FA\u7840\u4E0A\u52A0\u4E00\u4E2An\uFF0C\u5982100n</p><p>bigint\u7C7B\u578B\u7684\u4E0D\u80FD\u548C\u666E\u901A\u7C7B\u578B\u7684\u6570\u5B57\u76F4\u63A5\u8FD0\u7B97\uFF0C\u5982bigint(100) + 1\u4F1A\u62A5\u9519</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">//\u76F4\u63A5\u5B9A\u4E49\u5927\u6574\u5F62</span></span>
<span class="line"><span style="color:#676E95;">// let n = 521n;</span></span>
<span class="line"><span style="color:#676E95;">// console.log(n, typeof(n));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//\u4F7F\u7528\u51FD\u6570\u5C06\u666E\u901A\u6570\u5B57\u8F6C\u6362\u4E3A\u5927\u6574\u5F62</span></span>
<span class="line"><span style="color:#676E95;">// let n = 123;</span></span>
<span class="line"><span style="color:#676E95;">// console.log(BigInt(n));</span></span>
<span class="line"><span style="color:#676E95;">// console.log(BigInt(1.2));        //\u4E0D\u80FD\u5BF9\u6D6E\u70B9\u6570\u8FDB\u884CBigInt\u8FD0\u7B97</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//\u5927\u6570\u503C\u8FD0\u7B97</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> max </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Number</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MAX_SAFE_INTEGER</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(max)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(max </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(max </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">            \xA0\xA0\xA0\xA0</span><span style="color:#676E95;">//\u8FD9\u6837\u52A0\u4E0B\u53BB\u4F1A\u6709\u95EE\u9898</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">BigInt</span><span style="color:#A6ACCD;">(max))</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">BigInt</span><span style="color:#A6ACCD;">(max) </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BigInt</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">BigInt</span><span style="color:#A6ACCD;">(max) </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BigInt</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span></code></pre></div><h2 id="globalthis-\u5BF9\u8C61" tabindex="-1">globalThis \u5BF9\u8C61 <a class="header-anchor" href="#globalthis-\u5BF9\u8C61" aria-hidden="true">#</a></h2><blockquote><p>\u5168\u5C40this\uFF0C\u59CB\u7EC8\u6307\u5411\u5168\u5C40\u5BF9\u8C61window\uFF1Bnodejs\u4E2D\u59CB\u7EC8\u6307\u5411global</p></blockquote><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(globalThis);</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,28),e=[o];function t(c,r,D,y,F,A){return a(),n("div",null,e)}const g=s(p,[["render",t]]);export{i as __pageData,g as default};
