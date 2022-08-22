import{_ as s,c as n,o as a,b as l}from"./app.8608f89d.js";const i=JSON.parse('{"title":"\u4F7F\u7528VuePress\u642D\u5EFA\u5728\u7EBF\u6587\u6863\u7F51\u7AD9","description":"","frontmatter":{},"headers":[{"level":2,"title":"0. \u5728\u7EBF\u6587\u6863","slug":"_0-\u5728\u7EBF\u6587\u6863"},{"level":2,"title":"1. \u642D\u5EFA\u57FA\u672C\u73AF\u5883","slug":"_1-\u642D\u5EFA\u57FA\u672C\u73AF\u5883"},{"level":2,"title":"2. \u914D\u7F6Ets\u6559\u7A0B\u6587\u6863","slug":"_2-\u914D\u7F6Ets\u6559\u7A0B\u6587\u6863"},{"level":2,"title":"3. \u53D1\u5E03\u5230gitpage","slug":"_3-\u53D1\u5E03\u5230gitpage"}],"relativePath":"30_web\u524D\u7AEF/70_Vue3_TS\u5FEB\u901F\u4E0A\u624B/07_\u4F7F\u7528VuePress\u642D\u5EFA\u5728\u7EBF\u6587\u6863\u7F51\u7AD9/\u5FEB\u901F\u642D\u5EFA\u5728\u7EBF\u6587\u6863.md"}'),p={name:"30_web\u524D\u7AEF/70_Vue3_TS\u5FEB\u901F\u4E0A\u624B/07_\u4F7F\u7528VuePress\u642D\u5EFA\u5728\u7EBF\u6587\u6863\u7F51\u7AD9/\u5FEB\u901F\u642D\u5EFA\u5728\u7EBF\u6587\u6863.md"},o=l(`<h1 id="\u4F7F\u7528vuepress\u642D\u5EFA\u5728\u7EBF\u6587\u6863\u7F51\u7AD9" tabindex="-1">\u4F7F\u7528VuePress\u642D\u5EFA\u5728\u7EBF\u6587\u6863\u7F51\u7AD9 <a class="header-anchor" href="#\u4F7F\u7528vuepress\u642D\u5EFA\u5728\u7EBF\u6587\u6863\u7F51\u7AD9" aria-hidden="true">#</a></h1><h2 id="_0-\u5728\u7EBF\u6587\u6863" tabindex="-1">0. \u5728\u7EBF\u6587\u6863 <a class="header-anchor" href="#_0-\u5728\u7EBF\u6587\u6863" aria-hidden="true">#</a></h2><p><a href="https://vuepress.vuejs.org/zh/" target="_blank" rel="noreferrer">VuePress\u5B98\u65B9\u5728\u7EBF\u6587\u6863</a></p><h2 id="_1-\u642D\u5EFA\u57FA\u672C\u73AF\u5883" tabindex="-1">1. \u642D\u5EFA\u57FA\u672C\u73AF\u5883 <a class="header-anchor" href="#_1-\u642D\u5EFA\u57FA\u672C\u73AF\u5883" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u5C06 VuePress \u4F5C\u4E3A\u4E00\u4E2A\u672C\u5730\u4F9D\u8D56\u5B89\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -D vuepress</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u65B0\u5EFA\u4E00\u4E2A docs \u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir docs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6: docs/README.md</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"># Hello VuePress!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> docs/README.md</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u542F\u52A8\u6587\u6863\u9879\u76EE</span></span>
<span class="line"><span style="color:#A6ACCD;">npx vuepress dev docs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6784\u5EFA\u9759\u6001\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">npx vuepress build docs</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">-- docs</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">-- .vuepress</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">-- config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">-- README.md</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-\u914D\u7F6Ets\u6559\u7A0B\u6587\u6863" tabindex="-1">2. \u914D\u7F6Ets\u6559\u7A0B\u6587\u6863 <a class="header-anchor" href="#_2-\u914D\u7F6Ets\u6559\u7A0B\u6587\u6863" aria-hidden="true">#</a></h2><ol><li>\u6574\u4F53\u7ED3\u6784</li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">|-- dist</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- dics</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- .vuepress</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- public</span></span>
<span class="line"><span style="color:#A6ACCD;">      |-- ts-logo.png</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- chapter1</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- 01_\u521D\u8BC6TS.md</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- 02_\u5B89\u88C5TS.md</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- 03_HelloWorld.md</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- chapter2</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- 1_type.md</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- 2_interface.md</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- 3_class.md</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- 4_function.md</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- 5_generic.md</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- 6_other.md</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- chapter3</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- 01_react.md</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- 02_vue.md</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- chapter4</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- package.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol><li>docs/.vuepress/config.js</li></ol><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u6CE8\u610F: base\u7684\u503C\u4E3Agithub\u4ED3\u5E93\u7684\u540D\u79F0</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">base</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/ts-study/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">/* \u57FA\u7840\u865A\u62DF\u8DEF\u5F84: */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">dest</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dist</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">/* \u6253\u5305\u6587\u4EF6\u57FA\u7840\u8DEF\u5F84, \u5728\u547D\u4EE4\u6240\u5728\u76EE\u5F55\u4E0B */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TypeScript \u5165\u95E8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u6807\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5B66\u4E60\u4F7F\u7528 TypeScript</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u6807\u9898\u4E0B\u7684\u63CF\u8FF0</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">themeConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u4E3B\u9898\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sidebar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [ </span><span style="color:#676E95;">// \u5DE6\u4FA7\u5BFC\u822A</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u521D\u8BC6 TypeScript</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u6807\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">collapsable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u4E0B\u7EA7\u5217\u8868\u4E0D\u53EF\u6298\u53E0</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [ </span><span style="color:#676E95;">// \u4E0B\u7EA7\u5217\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chapter1/01_\u521D\u8BC6TS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chapter1/02_\u5B89\u88C5TS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chapter1/03_HelloWorld</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TypeScript \u5E38\u7528\u8BED\u6CD5</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">collapsable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chapter2/1_type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chapter2/2_interface</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chapter2/3_class</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chapter2/4_function</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chapter2/5_generic</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>docs/README.md</li></ol><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#676E95;">#\u9996\u9875</span></span>
<span class="line"><span style="color:#A6ACCD;">home: </span><span style="color:#82AAFF;">true</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#676E95;"># \u56FE\u6807</span></span>
<span class="line"><span style="color:#A6ACCD;">heroImage: /ts-logo.png</span></span>
<span class="line"><span style="color:#676E95;"># \u6309\u94AE\u6587\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">actionText: \u5F00\u59CB\u5B66\u4E60 \u2192</span></span>
<span class="line"><span style="color:#676E95;"># \u6309\u94AE\u70B9\u51FB\u8DF3\u8F6C\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">actionLink: /chapter1/01_\u521D\u8BC6TS</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>package.json</li></ol><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">doc:dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vuepress dev docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">doc:build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vuepress build docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">doc:deploy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">gh-pages -d docs/dist</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="_3-\u53D1\u5E03\u5230gitpage" tabindex="-1">3. \u53D1\u5E03\u5230gitpage <a class="header-anchor" href="#_3-\u53D1\u5E03\u5230gitpage" aria-hidden="true">#</a></h2><ol><li><p>\u4F7F\u7528git\u7BA1\u7406\u5F53\u524D\u9879\u76EE</p></li><li><p>\u5C06\u6253\u5305\u7684\u9879\u76EE\u63A8\u9001\u5230gitpage</p></li></ol><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u4E0B\u8F7D\u5DE5\u5177\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add -D gh-pages</span></span>
<span class="line"><span style="color:#676E95;"># \u6267\u884C\u6253\u5305\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn doc:build</span></span>
<span class="line"><span style="color:#676E95;"># \u6267\u884C\u90E8\u7F72\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn doc:deploy</span></span>
<span class="line"></span></code></pre></div>`,17),e=[o];function c(t,r,D,y,C,A){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
