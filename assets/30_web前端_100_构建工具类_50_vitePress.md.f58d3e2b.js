import{_ as s,c as n,o as a,b as l}from"./app.8608f89d.js";const F=JSON.parse('{"title":"\u53C2\u8003\u6587\u6863","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53C2\u8003\u6587\u6863","slug":"\u53C2\u8003\u6587\u6863"},{"level":2,"title":"\u5FEB\u901F\u4E0A\u624B","slug":"\u5FEB\u901F\u4E0A\u624B"},{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":2,"title":"\u9759\u6001\u8D44\u6E90","slug":"\u9759\u6001\u8D44\u6E90"},{"level":2,"title":"\u4E3B\u9898","slug":"\u4E3B\u9898"},{"level":3,"title":"\u9876\u90E8\u5BFC\u822ANav","slug":"\u9876\u90E8\u5BFC\u822Anav"},{"level":3,"title":"\u4FA7\u8FB9\u680Fsidebar","slug":"\u4FA7\u8FB9\u680Fsidebar"}],"relativePath":"30_web\u524D\u7AEF/100_\u6784\u5EFA\u5DE5\u5177\u7C7B/50_vitePress.md"}'),p={name:"30_web\u524D\u7AEF/100_\u6784\u5EFA\u5DE5\u5177\u7C7B/50_vitePress.md"},o=l(`<h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1">\u53C2\u8003\u6587\u6863 <a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a></h2><p><a href="https://github.com/vuejs/vitepress" target="_blank" rel="noreferrer">GitHub\u5730\u5740 (vuejs/vitepress)</a></p><p><a href="https://vitepress.vuejs.org/" target="_blank" rel="noreferrer">VitePress\u5B98\u65B9\u6587\u6863</a></p><p><a href="https://vitejs.cn/vitepress/guide/getting-started.html" target="_blank" rel="noreferrer">VitePress\u4E2D\u6587\u7F51 (vitejs.cn)</a></p><h2 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1">\u5FEB\u901F\u4E0A\u624B <a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a></h2><ol><li><p>\u521B\u5EFA\u5E76\u8FDB\u5165\u4E00\u4E2A\u76EE\u5F55</p><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir vitepress-starter </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> vitepress-starter</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u521D\u59CB\u5316</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn init</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u672C\u5730\u5B89\u88C5 VitePress</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add --dev vitepress vue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u521B\u5EFA\u4F60\u7B2C\u4E00\u7BC7\u6587\u6863</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir docs &amp;&amp; echo &#39;# Hello VitePress&#39; &gt; docs/index.md</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u5728 <code>package.json</code>.\u6DFB\u52A0\u4E00\u4E9B<code>script</code></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;docs:dev&quot;: &quot;vitepress dev docs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;docs:build&quot;: &quot;vitepress build docs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;docs:serve&quot;: &quot;vitepress serve docs&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u5728\u672C\u5730\u670D\u52A1\u5668\u4E0A\u542F\u52A8\u6587\u6863\u7AD9\u70B9</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn docs:dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ol><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><p>docs\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A<code>.vitepress</code>\u7684\u76EE\u5F55\uFF0C\u5FC5\u8981\u7684\u914D\u7F6E\u6587\u4EF6\u662F<code>config.js</code>\uFF0C\u76EE\u5F55\u89E3\u6784\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 docs</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u251C\u2500 .vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  \u2514\u2500 config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500 index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500 package.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>config.js</code>\u5E94\u5F53\u5BFC\u51FA\u4E00\u4E2A JavaScript \u5BF9\u8C61\uFF1A \u3010\u6CE8\u610F\u6B64\u914D\u7F6E\u9879\uFF0C \u65B0\u7248\u914D\u7F6E\u624B\u518C\u4E0E\u65E7\u7248\u76F8\u6BD4\u6709\u66F4\u65B0\u3011</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: &#39;VitePress&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  description: &#39;Just playing around.&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  themeConfig: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  	Nav: [...],</span></span>
<span class="line"><span style="color:#A6ACCD;">  	</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u9759\u6001\u8D44\u6E90" tabindex="-1">\u9759\u6001\u8D44\u6E90 <a class="header-anchor" href="#\u9759\u6001\u8D44\u6E90" aria-hidden="true">#</a></h2><p>vitepress\u7684\u9759\u6001\u8D44\u6E90\u662F\u548C.vitepress\u540C\u76EE\u5F55\uFF0Cvuepress\u7684\u9759\u6001\u8D44\u6E90\u662F\u5728.vuepress/public\u76EE\u5F55\u4E0B\u7684</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 docs</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u251C\u2500 .vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  \u2514\u2500 config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u251C\u2500 public</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  \u2514\u2500 images					//\u8FD9\u4E00\u5C42\u4E0D\u662F\u5FC5\u987B\u7684\uFF0C\u6839\u636E\u9700\u8981\u81EA\u5DF1\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502    \u2514\u2500 my-logo.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500 index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500 package.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4E3B\u9898" tabindex="-1">\u4E3B\u9898 <a class="header-anchor" href="#\u4E3B\u9898" aria-hidden="true">#</a></h2><h3 id="\u9876\u90E8\u5BFC\u822Anav" tabindex="-1">\u9876\u90E8\u5BFC\u822ANav <a class="header-anchor" href="#\u9876\u90E8\u5BFC\u822Anav" aria-hidden="true">#</a></h3><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FFCB6B;">nav</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Guide</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/guide</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Dropdown Menu</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">					</span><span style="color:#676E95;">//\u672A\u4E0B\u62C9\u65F6\u5373\u663E\u793A\uFF0C\u800C\u4E0D\u662F\u4E0B\u62C9\u540E\u663E\u793A\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Item A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/item-1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Item B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/item-2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Item C</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/item-3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">									</span><span style="color:#676E95;">//\u524D\u540E\u4F1A\u6709\u4E00\u6761\u6A2A\u7EBF\uFF0C\u5F53\u7136\u5728\u6700\u540E\u7684\u8BDD\u53EA\u6709\u524D\u9762\u6709\u6A2A\u7EBF\u4E86</span></span>
<span class="line"><span style="color:#89DDFF;">            	</span><span style="color:#676E95;">// text: &#39;Section A Title&#39;,					// You may also omit the title.</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Section A Item A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Section B Item B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                ]</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">		]</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4FA7\u8FB9\u680Fsidebar" tabindex="-1">\u4FA7\u8FB9\u680Fsidebar <a class="header-anchor" href="#\u4FA7\u8FB9\u680Fsidebar" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sidebar: [</span></span>
<span class="line"><span style="color:#A6ACCD;">	{ text: &#39;test01&#39;, link: &#39;/20 web\u524D\u7AEF/06 ES\u89C4\u8303/aaa&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">	{ text: &#39;test02&#39;, link: &#39;/20 web\u524D\u7AEF/06 ES\u89C4\u8303/aaa.md&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u8FD9\u79CD\u5199\u6CD5\u597D\u50CF\u4E0D\u884C\uFF0C\u8FD9\u4E2Atest\u597D\u50CF\u662F\u5339\u914D\u5230\u4E86{text:&#39;&#39;,items:[{text:&#39;&#39;}]}\u7B2C\u4E00\u4E2Atext\uFF0C\u800C\u4E0D\u662F\u7B2C\u4E8C\u4E2Atext\uFF0C\u663E\u793A\u6548\u679C\u5B57\u4F53\u662F\u52A0\u7C97\u7684\uFF0C\u70B9\u51FB\u4E86\u4E5F\u4E0D\u4F1A\u8DF3\u8F6C\u3002 </span></span>
<span class="line"><span style="color:#A6ACCD;">\u8FD9\u4E2A\u8FD8\u8981\u5728\u6D4B\u8BD5\u4E0B\uFF0C\u4E0D\u4E00\u5B9A\u662F\u5BF9\u7684\uFF08vscode\u6709\u70B9\u5361\uFF0C\u52A0\u8F7D\u7684\u6BD4\u8F83\u7F13\u6162\uFF0C\u4E5F\u6709\u53EF\u80FD\u6CA1\u6709\u52A0\u8F7D\u51FA\u6765\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FFCB6B;">sidebar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Section Title A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">//\u5982\u679C\u914D\u7F6E\u4E86collapsed: true\u9ED8\u8BA4\u6298\u53E0\uFF0C\u5219\u5FC5\u987B\u914D\u7F6E\u6B64text\uFF0C\u5426\u5219\u5C31\u65E0\u6CD5\u6253\u5F00\u4E86\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">collapsible</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">				</span><span style="color:#676E95;">//\u53EF\u5728\u5C55\u5F00\u3001\u6298\u53E0\u72B6\u6001\u4E2D\u8FDB\u884C\u5207\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">collapsed</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">				</span><span style="color:#676E95;">//\u914D\u7F6E\u9ED8\u8BA4\u662F\u6298\u53E0\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Item A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/item-a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Item B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/item-b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Introduction</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/guide/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">//\u5982\u679C\u8DEF\u5F84\u6307\u5411\u76EE\u5F55\uFF0C\u9ED8\u8BA4\u52A0\u8F7Dindex.md\u6587\u4EF6\uFF0C\u800C\u4E0D\u662FReadme.md</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Section Title B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Item C</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/item-c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Item D</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/item-d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><h4 id="\u591A\u4FA7\u8FB9\u680F" tabindex="-1">\u591A\u4FA7\u8FB9\u680F <a class="header-anchor" href="#\u591A\u4FA7\u8FB9\u680F" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 guide/</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u251C\u2500 index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u251C\u2500 one.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500 two.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500 config/</span></span>
<span class="line"><span style="color:#A6ACCD;">   \u251C\u2500 index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">   \u251C\u2500 three.md</span></span>
<span class="line"><span style="color:#A6ACCD;">   \u2514\u2500 four.md</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sidebar: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;/guide/&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &#39;Guide&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            items: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                { text: &#39;Index&#39;, link: &#39;/guide/&#39; }, 		// /guide/index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">                { text: &#39;One&#39;, link: &#39;/guide/one&#39; }, 		// /guide/one.md</span></span>
<span class="line"><span style="color:#A6ACCD;">                { text: &#39;Two&#39;, link: &#39;/guide/two&#39; } 		// /guide/two.md</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;/config/&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            text: &#39;Config&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            items: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                { text: &#39;Index&#39;, link: &#39;/config/&#39; }, 			// /config/index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">                { text: &#39;Three&#39;, link: &#39;/config/three&#39; }, 		// /config/three.md</span></span>
<span class="line"><span style="color:#A6ACCD;">                { text: &#39;Four&#39;, link: &#39;/config/four&#39; } 			// /config/four.md</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,23),e=[o];function t(c,r,D,C,y,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
