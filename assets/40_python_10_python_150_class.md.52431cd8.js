import{_ as s,c as n,o as a,b as l}from"./app.8608f89d.js";const _=JSON.parse('{"title":"\u5B9E\u4F8B\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9E\u4F8B\u5316","slug":"\u5B9E\u4F8B\u5316"},{"level":2,"title":"class\u548Cinstance\u53C2\u6570\u7684self","slug":"class\u548Cinstance\u53C2\u6570\u7684self"},{"level":2,"title":"\u7C7B\u53D8\u91CF","slug":"\u7C7B\u53D8\u91CF"},{"level":3,"title":"\u79C1\u6709\u53D8\u91CF","slug":"\u79C1\u6709\u53D8\u91CF"},{"level":2,"title":"\u7EE7\u627F","slug":"\u7EE7\u627F"},{"level":3,"title":"\u591A\u91CD\u7EE7\u627F","slug":"\u591A\u91CD\u7EE7\u627F"},{"level":3,"title":"super\u7EE7\u627F","slug":"super\u7EE7\u627F"},{"level":2,"title":"\u7C7B\u5C5E\u6027\u3001\u7C7B\u65B9\u6CD5","slug":"\u7C7B\u5C5E\u6027\u3001\u7C7B\u65B9\u6CD5"},{"level":3,"title":"\u7C7B\u5C5E\u6027","slug":"\u7C7B\u5C5E\u6027"},{"level":3,"title":"\u7C7B\u65B9\u6CD5","slug":"\u7C7B\u65B9\u6CD5"},{"level":3,"title":"\u7C7B\u5C5E\u6027\u3001\u7C7B\u65B9\u6CD5\u4E5F\u80FD\u88AB\u7EE7\u627F","slug":"\u7C7B\u5C5E\u6027\u3001\u7C7B\u65B9\u6CD5\u4E5F\u80FD\u88AB\u7EE7\u627F"},{"level":2,"title":"\u9759\u6001\u65B9\u6CD5","slug":"\u9759\u6001\u65B9\u6CD5"},{"level":2,"title":"property\u5C5E\u6027\u65B9\u6CD5","slug":"property\u5C5E\u6027\u65B9\u6CD5"},{"level":2,"title":"\u79C1\u6709\u5C5E\u6027\u3001\u79C1\u6709\u65B9\u6CD5","slug":"\u79C1\u6709\u5C5E\u6027\u3001\u79C1\u6709\u65B9\u6CD5"},{"level":2,"title":"MRO\u65B9\u6CD5\u641C\u7D22\u987A\u5E8F","slug":"mro\u65B9\u6CD5\u641C\u7D22\u987A\u5E8F"},{"level":2,"title":"\u65B0\u5F0F\u7C7B\u3001\u65E7\u5F0F\u7C7B","slug":"\u65B0\u5F0F\u7C7B\u3001\u65E7\u5F0F\u7C7B"},{"level":2,"title":"\u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F","slug":"\u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F"},{"level":3,"title":"__new__\u65B9\u6CD5","slug":"new-\u65B9\u6CD5"},{"level":3,"title":"\u5355\u5B9E\u4F8B\u8BBE\u8BA1\u6A21\u5F0F\u4EE3\u7801","slug":"\u5355\u5B9E\u4F8B\u8BBE\u8BA1\u6A21\u5F0F\u4EE3\u7801"},{"level":2,"title":"_doc_","slug":"doc"},{"level":2,"title":"_init \\\\ \\\\str\\t\\\\ \\\\del_","slug":"init-str-del"},{"level":2,"title":"_module_","slug":"module"},{"level":2,"title":"_class_","slug":"class"},{"level":2,"title":"_dict_","slug":"dict"},{"level":2,"title":"_getattr_","slug":"getattr"},{"level":2,"title":"_setattr_","slug":"setattr"},{"level":2,"title":"_add_\u3001__mul__\u3001__abs__","slug":"add-\u3001-mul-\u3001-abs"},{"level":2,"title":"_call_","slug":"call"},{"level":2,"title":"_getitem \\\\ \\\\setitem\\t\\\\ \\\\delitem_","slug":"getitem-setitem-delitem"},{"level":2,"title":"_mataclass_","slug":"mataclass"}],"relativePath":"40_python/10_python/150_class.md"}'),p={name:"40_python/10_python/150_class.md"},e=l(`<p><strong>class</strong></p><blockquote><p>\u9762\u5411\u5BF9\u8C61\u4E09\u4E2A\u8981\u7D20\uFF1A\u5C01\u88C5\u3001\u7EE7\u627F(\u4F18\u5148\u7EA7\u9AD8\u5230\u4F4E\uFF1A\u4ECE\u4E0B\u5230\u4E0A\u3001\u591A\u5C42\u7EE7\u627F\u65F6\u4ECE\u5DE6\u5230\u53F3)\u3001\u591A\u6001(\u5404\u4E2A\u5BF9\u8C61\u4E4B\u95F4\u53EF\u4EE5\u76F8\u4E92\u66FF\u4EE3)</p></blockquote><h2 id="\u5B9E\u4F8B\u5316" tabindex="-1">\u5B9E\u4F8B\u5316 <a class="header-anchor" href="#\u5B9E\u4F8B\u5316" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4E0D\u9700\u8981\u53C2\u6570\uFF0C\u53EF\u4EE5\u4E0D\u5199__init__\u51FD\u6570</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Dog:                #\u6CA1\u6709object\uFF0C\u6CA1\u6709__init__\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    def eat(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print &#39;[%s]............!&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">d = Dog()</span></span>
<span class="line"><span style="color:#A6ACCD;">d.eat()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Girl</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> name</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cook_food</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">aa</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cook_food---</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">---</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> aa</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">say</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;">  							</span><span style="color:#676E95;"># \u6B64\u5904\u6CA1\u6709self\uFF0C\u4E0D\u9700\u8981\u4F20\u9012self\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">say hi ...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">a1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Girl</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">						</span><span style="color:#676E95;">#\u521B\u5EFA\u5BF9\u8C61\uFF1B \uFF08=\u53EA\u662F\u63A5\u6536\u4E0B\uFF09!!!!!!!!!!</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">#\u521B\u5EFA\u5BF9\u8C61\u65F6\u9ED8\u8BA4\u8C03\u7528\u7684\u65B9\u6CD5\uFF0CGirl()\u65F6\u5C31\u6267\u884C\u4E86(\u65E0\u8BBA\u662F\u5426=\u63A5\u6536)\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">a1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cook_food</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nihao</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">					</span><span style="color:#676E95;">#\u6700\u5E38\u7528\u7684\u65B9\u6CD5\u8C03\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">Girl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cook_food</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">a1</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nihao</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">				</span><span style="color:#676E95;">#\u53E6\u4E00\u79CD\u5F62\u5F0F\u4E0A\u7684\u65B9\u6CD5\u8C03\u7528\uFF0C\u5C06\u5B9E\u4F8B\u5316a1\u4F20\u9012\u7ED9self\u53C2\u6570</span></span>
<span class="line"><span style="color:#82AAFF;">Girl</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">cook_food</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">a1</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nihao</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">			</span><span style="color:#676E95;">#\u8FD9\u79CDGirl()\u5B9E\u4F8B\u5316\u8C03\u7528\u4F1A\u62A5\u9519\uFF0C\u76F4\u63A5class\u7C7B\u8C03\u7528\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Girl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">say</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">								</span><span style="color:#676E95;">#\u6B64\u65F6\u4E0D\u9700\u8981\u4F20\u9012self\uFF0C\u56E0\u4E3Asay\u51FD\u6570\u5728\u5B9A\u4E49\u7684\u65F6\u5019\u6CA1\u6709\u8BBE\u7F6E\u53C2\u6570self \uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"></span></code></pre></div><h2 id="class\u548Cinstance\u53C2\u6570\u7684self" tabindex="-1">class\u548Cinstance\u53C2\u6570\u7684self <a class="header-anchor" href="#class\u548Cinstance\u53C2\u6570\u7684self" aria-hidden="true">#</a></h2><p>\u53C2\u8003\u3010\u57FA\u7840\u6570\u636E\u7C7B\u578B--&gt;int\u7C7B\u578B--&gt;add\u4E2D\u7684&quot;class\u7C7B\u548Cinstance\u53C2\u6570\u7684self&quot;\u3011</p><h2 id="\u7C7B\u53D8\u91CF" tabindex="-1">\u7C7B\u53D8\u91CF <a class="header-anchor" href="#\u7C7B\u53D8\u91CF" aria-hidden="true">#</a></h2><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Car</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    color </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">logo</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;">     self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">logo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> logo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">a1</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">Car</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">benz</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">a1</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">white</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">a1</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">price</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1111</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">                          </span><span style="color:#676E95;">#\u53EF\u4EE5\u52A8\u6001\u8D4B\u503C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Car</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">price</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">						</span><span style="color:#676E95;">#\u6DFB\u52A0\u7C7B\u53D8\u91CF\uFF0C\u4E4B\u540E\u7684\u5B9E\u4F8B\u5316\u51FA\u6765\u7684\u5B9E\u4F8B\u4E5F\u5B58\u5728\u8FD9\u4E2A\u53D8\u91CF\u4E86 \uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"></span></code></pre></div><h3 id="\u79C1\u6709\u53D8\u91CF" tabindex="-1"><strong>\u79C1\u6709\u53D8\u91CF</strong> <a class="header-anchor" href="#\u79C1\u6709\u53D8\u91CF" aria-hidden="true">#</a></h3><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">18</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    __name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">huyang</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">t1</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">T</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># __\u5F00\u5934\u7684\u662F\u79C1\u6709\u53D8\u91CF\uFF0C\u5916\u90E8\u65E0\u6CD5\u8C03\u7528; </span></span>
<span class="line"><span style="color:#676E95;"># \u901A\u8FC7dir(T)/dir(t1)\u67E5\u770B\u53D1\u73B0\u53D8\u91CF\u540D\u79F0\u88AB\u6539\u4E3A\u4E86&#39;_T__name&#39;\uFF0C\u4F7F\u7528T._T__name/t1._T__name\u4F9D\u7136\u53EF\u4EE5\u8C03\u7528	\uFF01\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7EE7\u627F" tabindex="-1">\u7EE7\u627F <a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a></h2><blockquote><p>\u7EE7\u627F\u7684\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E\u4F9D\u6B21\u4E3A\uFF1A\u4ECE\u4E0B\u5230\u4E0A\u3001\u591A\u5C42\u7EE7\u627F\u65F6\u4ECE\u5DE6\u5230\u53F3</p><p>\u53C2\u8003\u6587\u6863\uFF1A<a href="https://www.bilibili.com/video/BV1ex411x7Em?p=397&amp;spm_id_from=pageDriver" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1ex411x7Em?p=397&amp;spm_id_from=pageDriver</a></p></blockquote><h3 id="\u591A\u91CD\u7EE7\u627F" tabindex="-1"><strong>\u591A\u91CD\u7EE7\u627F</strong> <a class="header-anchor" href="#\u591A\u91CD\u7EE7\u627F" aria-hidden="true">#</a></h3><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">A</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">B</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">A</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">B</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">C</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;">				</span><span style="color:#676E95;">#\u8F93\u51FA\u2018A&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="super\u7EE7\u627F" tabindex="-1"><strong>super\u7EE7\u627F</strong> <a class="header-anchor" href="#super\u7EE7\u627F" aria-hidden="true">#</a></h3><blockquote><p>\u53C2\u8003\u6587\u6863\uFF1A</p><p>#super\u5728python\u4E2D\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u7C7B\uFF0Csuper()\u662F\u5728\u4F7F\u7528\u7C7B\u521B\u5EFA\u5BF9\u8C61\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</p><p>\u63A8\u8350\u4F7F\u7528super\u8FD9\u79CD\u65B9\u6CD5\uFF1A<a href="https://www.bilibili.com/video/BV1ex411x7Em?p=397&amp;spm_id_from=pageDriver" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1ex411x7Em?p=397&amp;spm_id_from=pageDriver</a></p><p>\u200B #super().\u7236\u7C7B\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u6CA1\u6709\u4F20\u9012self</p><p>\u65E9\u671F\u76842.x\u4E2D\u7684\u4E00\u79CD\u65B9\u6CD5\uFF1A <a href="https://www.bilibili.com/video/BV1ex411x7Em?p=398&amp;spm_id_from=pageDriver" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1ex411x7Em?p=398&amp;spm_id_from=pageDriver</a></p><p>\u200B #\u7236\u7C7B\u540D\u79F0.\u65B9\u6CD5(self) #\u8FD9\u79CD\u5728django\u6559\u7A0B\u7684objects\u7BA1\u7406\u5668\u91CD\u5199\u65F6\u597D\u50CF\u770B\u5230\u8FC7</p><p>\u200B #\u8FD9\u79CD\u8C03\u7528\u5B9E\u9645\u4E0A\u5C31\u662FPerson.say(xiaoming,&quot;\u4F60\u597D&quot;) \u5176\u4E2Dxiaoming\u662F\u5B9E\u4F8B\u5316\u7684\u5BF9\u8C61\uFF0C\u8FD9\u79CD\u5728\u4E0A\u9762\u7684\u7B14\u8BB0\u81EA\u5DF1\u8BB0\u5F55\u8FC7</p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Person:</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self,name) -&gt; None:</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.name = name</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class AA(Person):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self, name,age) -&gt; None:</span></span>
<span class="line"><span style="color:#A6ACCD;">    	print(&#39;super\u7EE7\u627F\u524D\u6253\u5370...&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        super().__init__(name)					#\u7EE7\u627F\uFF0C\u63A8\u8350\u4F7F\u7528\u8FD9\u79CD\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">        #Person.__init__(self,name)				#python2.x\u7248\u672C\u7684\u7EE7\u627F\uFF0C\u4E0D\u63A8\u8350</span></span>
<span class="line"><span style="color:#A6ACCD;">        	#\u800C\u4E14\u4E00\u65E6\u5199\u6210\u4E86\u5B50\u7C7B\u540DAA.__init__\u4F1A\u51FA\u73B0\u6B7B\u5FAA\u73AF\uFF0C\u53C2\u8003\u89C6\u9891\u8BFE\u4EF6\u4E2D\u6709\u8BB2\u5230</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.age = age</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&#39;super\u7EE7\u627F\u540E\u6253\u5370...&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class A(object):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def say(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&#39;A say hi ...&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        pass			#\u5982\u679C\u6B64\u5904\u6709return t,\u5728class C\u4E0B\u53EF\u4EE5\u6267\u884C result=super(C,self).say()\uFF0C\u5C06\u8FD4\u56DE\u7684\u503C\u53D6\u51FA\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">class B(object):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def say(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&#39;B say hi ...&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">class C(A,B):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def say(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        # super(C,self).say()			#\u56E0\u4E3AC\u7EE7\u627F\u4E86A\uFF0C\u6240\u4EE5super(C,self)\u5C31\u662FA\uFF0C\u5373C\u7684\u4E0A\u5C42\u65B9\u6CD5\u5C31\u662FA</span></span>
<span class="line"><span style="color:#A6ACCD;">        	#\u80FDsuper(B,self)\u4E48\uFF0C\u597D\u50CF\u4E0D\u884C\uFF0C\u90A3\u5199\u8FD9\u4E2AC\u7684\u610F\u4E49\u662F\u4EC0\u4E48\u5462\uFF1F\uFF1F\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">        super().say()				#ipython\u4E2D\u76F4\u63A5\u6267\u884Csuper?? \u91CC\u9762\u6709super\u7684\u5404\u79CD\u7528\u6CD5\uFF0C\u6700\u540E\u9762\u662Fclass\u4E2D\u7684\u7528\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">        #\u5982\u679C\u662Fsuper\u5199\u5728\u4E0B\u9762\u5C31\u5148\u8F93\u51FA&#39;C say hi&#39;\u548C&#39;A say hi&#39;	!!!!!!</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&#39;C say hi ....&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">C().say()			#\u8F93\u51FA&#39;A say hi ...&#39;\u548C&#39;C say hi ....&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7C7B\u5C5E\u6027\u3001\u7C7B\u65B9\u6CD5" tabindex="-1">\u7C7B\u5C5E\u6027\u3001\u7C7B\u65B9\u6CD5 <a class="header-anchor" href="#\u7C7B\u5C5E\u6027\u3001\u7C7B\u65B9\u6CD5" aria-hidden="true">#</a></h2><blockquote><p>\u4E0D\u7528\u5B9E\u4F8B\u5316\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528</p></blockquote><h3 id="\u7C7B\u5C5E\u6027" tabindex="-1"><strong>\u7C7B\u5C5E\u6027</strong> <a class="header-anchor" href="#\u7C7B\u5C5E\u6027" aria-hidden="true">#</a></h3><blockquote><p>\u7C7B\u5C5E\u6027\u662F\u8BB0\u5F55\u8DDF\u7C7B\u76F8\u5173\u7684\u7279\u5F81\u7684\uFF0C\u4E0D\u4F1A\u8BB0\u5F55\u5177\u4F53\u5BF9\u8C61\u7684\u7279\u5F81\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</p><p>\u53C2\u8003\u6587\u6863\uFF1A<a href="https://www.bilibili.com/video/BV1ex411x7Em?p=409&amp;spm_id_from=pageDriver" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1ex411x7Em?p=409&amp;spm_id_from=pageDriver</a></p></blockquote><p><strong>\u7C7B\u5C5E\u6027\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528\uFF01\uFF01\uFF01\uFF01 \u7C7B\u5C5E\u6027\u53EF\u4EE5\u88ABinstance\u7EE7\u627F\uFF0C\u4E5F\u53EF\u4EE5\u88ABclass\u7EE7\u627F</strong></p><ul><li><p>class\u7C7B\u76F4\u63A5\u8BFB\u53D6</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class A:</span></span>
<span class="line"><span style="color:#A6ACCD;">    count = 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">print(A.count)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>instance\u8BFB\u53D6</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u67E5\u770B\u7C7B\u521B\u5EFA\u4E86\u591A\u5C11\u4E2A\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">#coding:utf8</span></span>
<span class="line"><span style="color:#A6ACCD;">class A:</span></span>
<span class="line"><span style="color:#A6ACCD;">    count = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    name = None</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self) -&gt; None:</span></span>
<span class="line"><span style="color:#A6ACCD;">        # self.count += 1   		#\u8FD9\u6837\u5199\u662F\u5B9A\u4E49\u4E86\u5B9E\u4F8B\u53D8\u91CFcount\uFF0C\u503C\u4E3A1</span></span>
<span class="line"><span style="color:#A6ACCD;">        A.count += 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">a1 = A()  &amp;&amp; a2 = A()</span></span>
<span class="line"><span style="color:#A6ACCD;">A.name = &quot;jim&quot;  &amp;&amp; a1.name = &quot;lilei&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">print(A.count,a1.count)  	#\u7ED3\u679C\uFF1A2 2</span></span>
<span class="line"><span style="color:#A6ACCD;">print(A.name,t1.name)		#\u7ED3\u679C\uFF1Ajim lilei</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>class\u7EE7\u627F\u540E\u8BFB\u53D6</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class A:</span></span>
<span class="line"><span style="color:#A6ACCD;">    count = 100</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class B(A):  pass</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">print(B.count)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h3 id="\u7C7B\u65B9\u6CD5" tabindex="-1"><strong>\u7C7B\u65B9\u6CD5</strong> <a class="header-anchor" href="#\u7C7B\u65B9\u6CD5" aria-hidden="true">#</a></h3><blockquote><p>\u7C7B\u65B9\u6CD5\u540C\u7C7B\u5C5E\u6027\u4E00\u6837\u4E5F\u662F\u8DDF\u7C7B\u672C\u8EAB\u76F8\u5173\uFF0C\u8DDF\u5177\u4F53\u7684\u5BF9\u8C61\u65E0\u5173\uFF0C\u4F7F\u7528cls.xx\u8BBF\u95EE\u7C7B\u5C5E\u6027\u3001\u8BBF\u95EE\u5176\u4ED6\u7C7B\u65B9\u6CD5\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</p><p>\u53C2\u8003\u6587\u6863\uFF1A<a href="https://www.bilibili.com/video/BV1ex411x7Em?p=412&amp;spm_id_from=pageDriver" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1ex411x7Em?p=412&amp;spm_id_from=pageDriver</a></p></blockquote><p><strong>\u7C7B\u65B9\u6CD5\u53EA\u80FD\u8BBF\u95EE\u7C7B\u53D8\u91CF\uFF0C\u4E0D\u80FD\u8BBF\u95EE\u5B9E\u4F8B\u53D8\u91CF\uFF08<a href="http://xn--self-f96g.name" target="_blank" rel="noreferrer">\u5982self.name</a>,self.age\uFF09</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class A:</span></span>
<span class="line"><span style="color:#A6ACCD;">    count = 100</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    @classmethod</span></span>
<span class="line"><span style="color:#A6ACCD;">    def demo1(cls):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&#39;demo1----&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">    @classmethod</span></span>
<span class="line"><span style="color:#A6ACCD;">    def demo2(cls):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&#39;demo2----&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(cls.count)					#\u901A\u8FC7cls\u8C03\u7528\u7C7B\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">        cls.demo1()							#\u901A\u8FC7cls\u8C03\u7528\u7C7B\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(cls,cls())				    #&lt;class &#39;__main__.A&#39;&gt; &lt;__main__.A object at 0x000001CB9FA27F10&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        	#print(cls)\u548Cprint(A)\u7684\u7ED3\u679C\u662F\u4E00\u6837\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">            #cls()\u548Ca1=A()\u7136\u540Eprint(a1)\u7ED3\u679C\u662F\u7C7B\u4F3C\u7684\uFF0Ccls()\u5E94\u8BE5\u5C31\u662F\u5B9E\u4F8B\u5316\u5427\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">        return cls()						#\u4F1A\u628A\u8FD9\u4E2Aclass\u7C7B\u4F20\u9012\u8FC7\u53BB</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">A.demo2()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">a1 = A()</span></span>
<span class="line"><span style="color:#A6ACCD;">a1.demo2()					#\u5B9E\u4F8B\u5316\u540E\u4E5F\u80FD\u6B63\u5E38\u8C03\u7528\u51FD\u6570\uFF0C\u5BF9\u5E94\u4E86django\u4E2D\u7684View--as_view()--classonlymethod</span></span>
<span class="line"><span style="color:#A6ACCD;">	#\u5B9E\u4F8B\u4E5F\u80FD\u8C03\u7528\uFF0C\u662F\u8DDF\u7C7B\u53D8\u91CF\u4E00\u6837\uFF0C\u5B9E\u4F8B\u7EE7\u627F\u4E86\u7C7B\u7684\u65B9\u6CD5\u4E48\uFF0C\u4E0B\u9762\u7684\u9759\u6001\u65B9\u6CD5\u4E5F\u662F\u4E00\u6837\uFF0C\u7C7B\u8DDF\u5B9E\u4F8B\u90FD\u80FD\u8C03\u7528\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u7C7B\u65B9\u6CD5\u4F20\u9012\u53C2\u6570</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class A(object):</span></span>
<span class="line"><span style="color:#A6ACCD;">    n=100</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @classmethod  </span></span>
<span class="line"><span style="color:#A6ACCD;">    def eat(cls,food):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&quot;%s is eating %s&quot; % (cls.n, food))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">A.eat(&#39;xx&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u7C7B\u5C5E\u6027\u3001\u7C7B\u65B9\u6CD5\u4E5F\u80FD\u88AB\u7EE7\u627F" tabindex="-1"><strong>\u7C7B\u5C5E\u6027\u3001\u7C7B\u65B9\u6CD5\u4E5F\u80FD\u88AB\u7EE7\u627F</strong> <a class="header-anchor" href="#\u7C7B\u5C5E\u6027\u3001\u7C7B\u65B9\u6CD5\u4E5F\u80FD\u88AB\u7EE7\u627F" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class A:</span></span>
<span class="line"><span style="color:#A6ACCD;">    count = 100</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    @classmethod</span></span>
<span class="line"><span style="color:#A6ACCD;">    def demo1(cls):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&#39;hello...&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class B(A):</span></span>
<span class="line"><span style="color:#A6ACCD;">    pass</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    #@classmethod</span></span>
<span class="line"><span style="color:#A6ACCD;">    #def demo1(cls):					</span></span>
<span class="line"><span style="color:#A6ACCD;">    #    super().demo1()				#\u7C7B\u65B9\u6CD5\u4E5F\u80FD\u6B63\u5E38\u7684super\u7EE7\u627F</span></span>
<span class="line"><span style="color:#A6ACCD;">    #    print(&#39;hello2...&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">print(B.count)						#\u6B63\u5E38\u8C03\u7528\u7C7B\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">B.demo1()							#\u6B63\u5E38\u8C03\u7528\u7C7B\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u9759\u6001\u65B9\u6CD5" tabindex="-1">\u9759\u6001\u65B9\u6CD5 <a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5" aria-hidden="true">#</a></h2><blockquote><p>\u5B9E\u4F8B\u65B9\u6CD5\uFF1A\u8BBF\u95EE\u5B9E\u4F8B\u5C5E\u6027</p><p>\u7C7B\u65B9\u6CD5\uFF1A\u8BBF\u95EE\u7C7B\u5C5E\u6027</p><p>\u9759\u6001\u65B9\u6CD5\uFF1A\u65E2\u4E0D\u9700\u8981\u8BBF\u95EE\u5B9E\u4F8B\u5C5E\u6027\u4E5F\u4E0D\u9700\u8981\u8BBF\u95EE\u7C7B\u5C5E\u6027</p><p>\u53C2\u8003\u6587\u6863\uFF1A<a href="https://www.bilibili.com/video/BV1ex411x7Em?p=414&amp;spm_id_from=pageDriver" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1ex411x7Em?p=414&amp;spm_id_from=pageDriver</a> #01.46\u4F1A\u6709\u63D0\u793A\u5E94\u8BE5\u5B9A\u4E49\u4E3A\u9759\u6001\u65B9\u6CD5\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class A:</span></span>
<span class="line"><span style="color:#A6ACCD;">    @staticmethod</span></span>
<span class="line"><span style="color:#A6ACCD;">    def demo1():</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&#39;demo1----&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">A.demo1()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">a1 = A()</span></span>
<span class="line"><span style="color:#A6ACCD;">a1.demo1()			#\u65E2\u4E0D\u9700\u8981\u8BBF\u95EE\u7C7B\u5C5E\u6027\u3001\u4E5F\u4E0D\u9700\u8981\u8BBF\u95EE\u5B9E\u4F8B\u5C5E\u6027\uFF0C\u6240\u4EE5\u7C7B\u548C\u5B9E\u4F8B\u90FD\u53EF\u4EE5\u8C03\u7528\uFF08\u53CD\u6B63\u4E5F\u4E0D\u9700\u8981\u8BBF\u95EE\u53D8\u91CF\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B9E\u4F8B\u65B9\u6CD5\u3001\u7C7B\u65B9\u6CD5\u3001\u9759\u6001\u65B9\u6CD5\u7684 \u4F7F\u7528\u573A\u666F\uFF1A<a href="https://www.bilibili.com/video/BV1ex411x7Em?p=415&amp;spm_id_from=pageDriver" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1ex411x7Em?p=415&amp;spm_id_from=pageDriver</a></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Dog(object):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self,name):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.name = name</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @staticmethod</span></span>
<span class="line"><span style="color:#A6ACCD;">    def eat(self,food):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print &quot;%s is eating %s&quot;%(self.name,food)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">d = Dog(&#39;xx&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">d.eat(d,&#39;baozi&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="property\u5C5E\u6027\u65B9\u6CD5" tabindex="-1">property\u5C5E\u6027\u65B9\u6CD5 <a class="header-anchor" href="#property\u5C5E\u6027\u65B9\u6CD5" aria-hidden="true">#</a></h2><blockquote><p>\u7ED9\u4E00\u4E2A\u7C7B\u6DFB\u52A0\u4E00\u4E2A\u9700\u8981\u52A8\u6001\u6267\u884C\u624D\u80FD\u4EA7\u751F\u7684\u7ED3\u679C\u8FD9\u6837\u4E00\u4E2A\u5C5E\u6027\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</p><p>\u5C06\u4E00\u4E2A\u6CA1\u6709\u5173\u952E\u5B57\u7684\u65B9\u6CD5\uFF08self\u4E0D\u7B97\uFF09\u53D8\u6210\u4E00\u4E2A\u5C5E\u6027</p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Student:</span></span>
<span class="line"><span style="color:#A6ACCD;">	@property</span></span>
<span class="line"><span style="color:#A6ACCD;">    def columns(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">    	return  [self.name,self.sex,self.age,self.location,self.qq]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">stu=Student()</span></span>
<span class="line"><span style="color:#A6ACCD;">stu.columns                         #\u5B9E\u4F8B\u5316\u540E\u8C03\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>property\u5C5E\u6027\u65B9\u6CD5\u4F20\u53C2</strong> \u5B9E\u4F8B\u8C03\u7528\u5C5E\u6027\u65B9\u6CD5\u4E0D\u52A0\uFF08\uFF09\uFF0C\u6240\u4EE5\u8C03\u7528\u65F6\u4F20\u53C2\u6709\u70B9\u7279\u6B8A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Dog(object):</span></span>
<span class="line"><span style="color:#A6ACCD;">    n=100</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self,name):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.name = name</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.__food = None              #\u7528\u4E8E\u5B58\u50A8\u4F20\u9012\u7684food\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @property           #\u628A\u4E00\u4E2A\u65B9\u6CD5\u53D8\u6210\u9759\u6001\u5C5E\u6027\uFF0C\u5982\u679C\u9700\u8981\u4F20\u9012\u53C2\u6570\u5462\uFF0C\u5982 def eat(self,food):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def eat(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&quot;%s is eating %s&quot;%(self.name,self.__food))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @eat.setter</span></span>
<span class="line"><span style="color:#A6ACCD;">    def eat(self,food):                 #\u5199\u7684\u65B9\u6CD5\u540D\u8FD8\u5FC5\u987B\u662Feat</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&#39;set to food:&#39;,food)</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.__food = food</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @eat.deleter</span></span>
<span class="line"><span style="color:#A6ACCD;">    def eat(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        del self.__food</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&#39;\u5220\u5B8C\u4E86&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">d = Dog(&#39;xx&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">d.eat</span></span>
<span class="line"><span style="color:#A6ACCD;">d.eat = &#39;baozi&#39;         #\u7ED9\u5C5E\u6027\u8D4B\u503C&#39;baozi&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">d.eat</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">del d.eat</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#d.eat					#\u5728\u67E5\u770B\u5DF2\u7ECF\u6CA1\u6709\u8BE5\u5C5E\u6027\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u79C1\u6709\u5C5E\u6027\u3001\u79C1\u6709\u65B9\u6CD5" tabindex="-1">\u79C1\u6709\u5C5E\u6027\u3001\u79C1\u6709\u65B9\u6CD5 <a class="header-anchor" href="#\u79C1\u6709\u5C5E\u6027\u3001\u79C1\u6709\u65B9\u6CD5" aria-hidden="true">#</a></h2><blockquote><p>\u4EE5 __ \u5F00\u59CB\u5373\u53EF</p><p>\u79C1\u6709\u5C5E\u6027\u3001\u65B9\u6CD5\u53EA\u80FD\u5728class\u7C7B\u5185\u90E8\u8FDB\u884C\u8C03\u7528\uFF0C\u65E0\u6CD5\u5728\u7C7B\u7684\u5916\u90E8\u8C03\u7528\uFF08\u7EE7\u627F\u540E\u4E5F\u65E0\u6CD5\u8C03\u7528\uFF09</p><p>\u53C2\u8003\u6587\u6863\uFF1A<a href="https://www.bilibili.com/video/BV1ex411x7Em?p=389&amp;spm_id_from=pageDriver" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1ex411x7Em?p=389&amp;spm_id_from=pageDriver</a></p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Women:</span></span>
<span class="line"><span style="color:#A6ACCD;">    __a = 111									#\u7C7B \u79C1\u6709\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self,name) -&gt; None:</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.name = name</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.__age = 18</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    def __secret(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&quot;%s \u7684\u5E74\u9F84\u662F %d,\u7C7B\u53D8\u91CF\u662F %d&quot; %(self.name,self.__age,self.__a))     #\u5185\u90E8\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528\u79C1\u6709\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">xiaofang = Women(&quot;\u5C0F\u82B3&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">print(xiaofang._Women__age)						#\u5B9E\u4F8B \u5F3A\u5236\u8C03\u7528\u79C1\u6709\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">xiaofang._Women__secret()						#\u5B9E\u4F8B \u5F3A\u5236\u8C03\u7528\u79C1\u6709\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">print(xiaofang._Women__a)						#\u5B9E\u4F8B \u5F3A\u5236\u8C03\u7528\u7C7B\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">print(Women._Women__a)							#\u7C7B   \u5F3A\u5236\u8C03\u7528\u7C7B\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>\u7EE7\u627F\u65F6\u8C03\u7528\u79C1\u6709\u65B9\u6CD5</p><blockquote><p>\u7EE7\u627F\u540EB\u662F\u4E0D\u80FD\u76F4\u63A5\u8C03\u7528A\u4E2D\u7684\u79C1\u6709\u5C5E\u6027\u548C\u79C1\u6709\u65B9\u6CD5\u7684\uFF0C\u4F46\u662FB\u53EF\u4EE5\u8C03\u7528A\u7684\u516C\u6709\u65B9\u6CD5\uFF0C\u5982\u679C\u60F3\u5728B\u4E2D\u8C03\u7528A\u7684\u79C1\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8F6C\u6362\u4E00\u4E0B\uFF1A\u5728A\u4E2D\u5355\u72EC\u5B9A\u4E49\u4E00\u4E2A\u516C\u6709\u65B9\u6CD5\u6765\u8C03\u7528\u81EA\u5DF1\u7684\u79C1\u6709\u65B9\u6CD5\uFF0C\u7136\u540E\u5728B\u4E2D\u8C03\u7528\u6B64\u516C\u6709\u65B9\u6CD5</p><p>\u53C2\u8003\u89C6\u9891\uFF1A<a href="https://www.bilibili.com/video/BV1ex411x7Em?p=399&amp;spm_id_from=pageDriver" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1ex411x7Em?p=399&amp;spm_id_from=pageDriver</a> + \u4E0B\u4E00\u96C6#P400</p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class A:</span></span>
<span class="line"><span style="color:#A6ACCD;">    __a = 111</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self, name) -&gt; None:</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.name = name</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.__age = 18</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def __secret(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&quot;%s \u7684\u5E74\u9F84\u662F %d,\u7C7B\u53D8\u91CF\u662F %d&quot; % (self.name, self.__age, self.__a))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class B(A):</span></span>
<span class="line"><span style="color:#A6ACCD;">	pass</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">xiaoming = B(&#39;\u5C0F\u660E&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">print(xiaoming.__A)						#\u65E0\u6CD5\u8C03\u53D6 \u7C7B\u7684\u79C1\u6709\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">print(xiaoming.__age)					#\u65E0\u6CD5\u8C03\u53D6\u5B9E\u4F8B\u7684\u79C1\u6709\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">xiaoming.__secret()						#\u65E0\u6CD5\u8C03\u53D6\u5B9E\u4F8B\u7684\u79C1\u6709\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h2 id="mro\u65B9\u6CD5\u641C\u7D22\u987A\u5E8F" tabindex="-1">MRO\u65B9\u6CD5\u641C\u7D22\u987A\u5E8F <a class="header-anchor" href="#mro\u65B9\u6CD5\u641C\u7D22\u987A\u5E8F" aria-hidden="true">#</a></h2><blockquote><p>\u53C2\u8003\u89C6\u9891\uFF1A<a href="https://www.bilibili.com/video/BV1ex411x7Em?p=403" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1ex411x7Em?p=403</a></p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class A:	pass</span></span>
<span class="line"><span style="color:#A6ACCD;">class B:	pass</span></span>
<span class="line"><span style="color:#A6ACCD;">class C(A,B):	pass</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">print(C.__mro__)</span></span>
<span class="line"><span style="color:#A6ACCD;">	(&lt;class &#39;__main__.C&#39;&gt;, &lt;class &#39;__main__.A&#39;&gt;, &lt;class &#39;__main__.B&#39;&gt;, &lt;class &#39;object&#39;&gt;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u65B0\u5F0F\u7C7B\u3001\u65E7\u5F0F\u7C7B" tabindex="-1">\u65B0\u5F0F\u7C7B\u3001\u65E7\u5F0F\u7C7B <a class="header-anchor" href="#\u65B0\u5F0F\u7C7B\u3001\u65E7\u5F0F\u7C7B" aria-hidden="true">#</a></h2><blockquote><p>\u53C2\u8003\u89C6\u9891\uFF1A<a href="https://www.bilibili.com/video/BV1ex411x7Em?p=404&amp;spm_id_from=pageDriver" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1ex411x7Em?p=404&amp;spm_id_from=pageDriver</a></p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u5728python 2.x\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">	class A(object):	pass					#\u65B0\u5F0F\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">	class B: pass								#\u7ECF\u5178\u7C7B/\u65E7\u5F0F\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	dir(A)\u4E2D\u6709\u5F88\u591A\u7684\u65B9\u6CD5\uFF0Cdir(B)\u4E2D\u53EA\u6709\u4E24\u4E2A\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#\u5728python 3.x\u4E2D\uFF0C\u9ED8\u8BA4\u5C31\u662F\u4EE5object\u4E3A\u57FA\u7C7B\uFF0C\u6240\u4EE5\u5199\u4E0D\u5199\u90FD\u53EF\u4EE5\uFF0C\u90FD\u662F\u65B0\u5F0F\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F" tabindex="-1">\u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F <a class="header-anchor" href="#\u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F" aria-hidden="true">#</a></h2><blockquote><p><em>_new</em>_ \u5206\u914D\u5185\u5B58\u5730\u5740 #P419</p><p>\u200B #<em>_new</em>_\u65B9\u6CD5\u662F\u4E00\u4E2A\u9759\u6001\u65B9\u6CD5,super\u90A3\u91CC\u7684cls\u662F\u4F20\u9012\u7684\u5B9E\u4F8B\u65B9\u6CD5__new__\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570cls #P420 06.20</p><p><em>_init</em>_ \u5BF9\u8C61\u7684\u521D\u59CB\u5316</p><p>\u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F\uFF1A\u4E0D\u662F\u53EA\u80FD\u521B\u5EFA\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u7B2C\u4E8C\u4E2A\u65E0\u6CD5\u521B\u5EFA\u8FD4\u56DE\u5185\u5B58\u5730\u5740\u4E3ANone\uFF08\u81EA\u5DF1\u4E4B\u524D\u5C31\u662F\u8FD9\u6837\u7406\u89E3\u7684\uFF09\uFF0C\u800C\u662F\u521B\u5EFA\u591A\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u65F6\u8FD4\u56DE\u7684\u5185\u5B58\u5730\u5740\u662F\u76F8\u540C\u7684</p><p>\u53C2\u8003\u6587\u6863\uFF1A<a href="https://www.bilibili.com/video/BV1ex411x7Em?p=418&amp;spm_id_from=pageDriver" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1ex411x7Em?p=418&amp;spm_id_from=pageDriver</a></p></blockquote><h3 id="new-\u65B9\u6CD5" tabindex="-1"><strong>__new__\u65B9\u6CD5</strong> <a class="header-anchor" href="#new-\u65B9\u6CD5" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">__new__\u662F\u4E00\u4E2A\u9759\u6001\u65B9\u6CD5\uFF0C\u4E0D\u662F\u5B9E\u4F8B\u65B9\u6CD5\u6216\u8005\u7C7B\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6D4B\u8BD5\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">	Class A: pass</span></span>
<span class="line"><span style="color:#A6ACCD;">	ipython\u4E2D\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">		A.__new__?			\u8F93\u51FA\u7684\u662FSignature: A.__new__(*args, **kwargs)		#\u6CA1\u6709self\u6216cls</span></span>
<span class="line"><span style="color:#A6ACCD;">		A.__init__?			\u8F93\u51FA\u7684\u662FSignature: A.__init__(self, /, *args, **kwargs)</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		object.__new__		\u8F93\u51FA\u7684\u662F\uFF1A&lt;function object.__new__(*args, **kwargs)&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		object.__new__? 	\u8F93\u51FA\u7684\u662F\uFF1ASignature: object.__new__(*args, **kwargs)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	help(type):				#\u5728ipython\u4E2D\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">		 |  Static methods defined here:			#\u9759\u6001\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">         |</span></span>
<span class="line"><span style="color:#A6ACCD;">         |  __new__(*args, **kwargs)</span></span>
<span class="line"><span style="color:#A6ACCD;">         |      Create and return a new object.  See help(type) for accurate signature.</span></span>
<span class="line"><span style="color:#A6ACCD;">         |</span></span>
<span class="line"><span style="color:#A6ACCD;">         |  --------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class A:</span></span>
<span class="line"><span style="color:#A6ACCD;">	def __new__(cls,*args,**kwargs):			#\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u54EA\u4E2A\u7C7B\u8C03\u7528\u5C31\u4F20\u9012\u54EA\u4E2A\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">		print(cls)								#\u8F93\u51FA&lt;class &#39;__main__.A&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		super().__new__(cls,*args,**kwargs)		#\u8FD9\u4E2Acls\u662F\u9759\u6001\u65B9\u6CD5\u4F20\u9012\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u53C2\u8003\u89C6\u9891\uFF1Ahttps://www.bilibili.com/video/BV1ex411x7Em?p=420&amp;spm_id_from=pageDriver		\uFF01\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5355\u5B9E\u4F8B\u8BBE\u8BA1\u6A21\u5F0F\u4EE3\u7801" tabindex="-1"><strong>\u5355\u5B9E\u4F8B\u8BBE\u8BA1\u6A21\u5F0F\u4EE3\u7801</strong> <a class="header-anchor" href="#\u5355\u5B9E\u4F8B\u8BBE\u8BA1\u6A21\u5F0F\u4EE3\u7801" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u6B63\u786E\u7684\u4EE3\u7801\uFF0C\u591A\u6B21\u521B\u5EFA\u5B9E\u4F8B\u8FD4\u56DE\u7684\u90FD\u662F\u76F8\u540C\u7684\u5185\u5B58\u5730\u5740\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    class A:</span></span>
<span class="line"><span style="color:#A6ACCD;">        instance = None</span></span>
<span class="line"><span style="color:#A6ACCD;">        init_flag = False</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        def __init__(self) -&gt; None:				#init\u52A8\u4F5C\u53EA\u6267\u884C\u4E00\u6B21\uFF0C\u4E0D\u662F\u5FC5\u987B\u7684\uFF0C\u53EF\u4EE5\u4E0D\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">            if A.init_flag:</span></span>
<span class="line"><span style="color:#A6ACCD;">                return</span></span>
<span class="line"><span style="color:#A6ACCD;">            self.name = 10  					#\u6B63\u5E38\u7684\u521D\u59CB\u5316\u52A8\u4F5C...</span></span>
<span class="line"><span style="color:#A6ACCD;">            A.init_flag = True</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        def __new__(cls,*args,**kwargs):			#\u53EA\u5206\u914D\u4E00\u6B21\u5185\u5B58\u7A7A\u95F4\uFF0C\u8FD9\u4E2A\u662F\u5FC5\u987B\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">            if cls.instance is  None:</span></span>
<span class="line"><span style="color:#A6ACCD;">                cls.instance = super().__new__(cls, *args, **kwargs)   #new\u662F\u4E00\u4E2A\u9759\u6001\u65B9\u6CD5\uFF0C\u6240\u4EE5\u9700\u8981\u4F20\u9012\u4E00\u4E2A\u53C2\u6570cls</span></span>
<span class="line"><span style="color:#A6ACCD;">            return cls.instance						#\u6CE8\u610F\u8FD9\u4E2A\u7F16\u7801\u903B\u8F91\uFF0C\u591A\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u4E0D\u8981\u5199\u4E00\u5806if/else</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    a1 = A()</span></span>
<span class="line"><span style="color:#A6ACCD;">    a2 = A()            #\u5E94\u8BE5\u662F\u4F1A\u8986\u76D6a1\u7684\u521D\u59CB\u5316\uFF0C\u6CA1\u6709\u8BE6\u7EC6\u6D4B\u8BD5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    print(a1, a2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u9519\u8BEF\u7684\u4EE3\u7801\uFF0C\u591A\u6B21\u521B\u5EFA\u5B9E\u4F8B\u65F6\u8FD4\u56DE\u7684\u662FNone\uFF0C\u81EA\u5DF1\u4E4B\u524D\u5C31\u662F\u8FD9\u4E48\u5199\u7684\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    class A:</span></span>
<span class="line"><span style="color:#A6ACCD;">        count = 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        def __init__(self) -&gt; None:</span></span>
<span class="line"><span style="color:#A6ACCD;">            pass</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        def __new__(cls):</span></span>
<span class="line"><span style="color:#A6ACCD;">            if A.count == 0:</span></span>
<span class="line"><span style="color:#A6ACCD;">                A.count += 1</span></span>
<span class="line"><span style="color:#A6ACCD;">                return super().__new__(cls)</span></span>
<span class="line"><span style="color:#A6ACCD;">            else:</span></span>
<span class="line"><span style="color:#A6ACCD;">                return None								#\u6B64\u5904\u4E0D\u5E94\u8BE5\u8FD4\u56DENone</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    a1 = A()</span></span>
<span class="line"><span style="color:#A6ACCD;">    a2 = A()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    print(a1,a2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="doc" tabindex="-1"><em>_doc</em>_ <a class="header-anchor" href="#doc" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#__doc__\uFF1A\u8868\u793A\u7C7B\u7684\u63CF\u8FF0\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Dog(object):</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;&#39;&#39;xxxxxx&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self,name):  pass</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">print(Dog.__doc__)           \u8F93\u51FA\uFF1Axxxxxx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="init-str-del" tabindex="-1"><em>_init</em>_ \\ <em>_str</em>_ \\ <em>_del</em>_ <a class="header-anchor" href="#init-str-del" aria-hidden="true">#</a></h2><blockquote><p><em>_init</em>_ #person()\u65F6\u8C03\u7528\uFF0C\u53EA\u8981\u662F\u5B9E\u4F8B\u5316\u5C31\u4F1A\u8C03\u7528\uFF0C\u4E0D\u7BA1\u6709\u6CA1\u6709\u4F7F\u7528=\u63A5\u6536</p><p><em>_str</em>_ #\u6253\u5370person()\u65F6\u8C03\u7528\uFF1B p1 = Person() &amp;&amp; print( p1 )</p><p>\u200B #\u9700\u8981\u5B9A\u4E49return\u503C</p><p><em>_del</em>_ #\u5220\u9664del person()\u65F6\u8C03\u7528; p1 = Person() &amp;&amp; del p1\uFF1B\u5BF9\u5E94__init__\u5904\u4E8E\u751F\u547D\u5468\u671F\u7684\u4E24\u7AEF</p><p>\u56E0\u4E3A\u662F\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u4E09\u4E2A\u65B9\u6CD5\u90FD\u9700\u8981\u4F20\u5165self\u53C2\u6570</p><p>\u53C2\u8003\u89C6\u9891\uFF1A<a href="https://www.bilibili.com/video/BV1ex411x7Em?p=375&amp;spm_id_from=pageDriver" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1ex411x7Em?p=375&amp;spm_id_from=pageDriver</a></p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Food(object):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self, name, price) -&gt; None:		#None\u662F\u8FD4\u56DE\u503C\uFF0C\u6B64\u65F6\u6CA1\u6709\u8FD4\u56DE\u503C\u6240\u4EE5\u662FNone</span></span>
<span class="line"><span style="color:#A6ACCD;">        pass</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def __str__(self) -&gt; str:						#\u8FD4\u56DE\u503C\u662F\u5B57\u7B26\u4E32\u7C7B\u578B\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">        return &#39;__str__ ..return..&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    def __del__(self) -&gt; None:						#\u8FD4\u56DE\u503C\u4E3ANone</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&#39;__del__---------&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">food=Food(&#39;baicai&#39;,10)</span></span>
<span class="line"><span style="color:#A6ACCD;">-	str(food)					#\u76F8\u5F53\u4E8E\u8C03\u4E86food.__str__()</span></span>
<span class="line"><span style="color:#A6ACCD;">-	food.__str__()</span></span>
<span class="line"><span style="color:#A6ACCD;">-	print(food)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">del food</span></span>
<span class="line"><span style="color:#A6ACCD;">print(&#39;---&#39;*10)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="module" tabindex="-1"><em>_module</em>_ <a class="header-anchor" href="#module" aria-hidden="true">#</a></h2><p>\u8868\u793A\u5F53\u524D\u64CD\u4F5C\u7684\u5BF9\u8C61\u5728\u54EA\u4E2A\u6A21\u5757</p><h2 id="class" tabindex="-1"><em>_class</em>_ <a class="header-anchor" href="#class" aria-hidden="true">#</a></h2><p>\u8868\u793A\u5F53\u524D\u64CD\u4F5C\u7684\u5BF9\u8C61\u7684\u7C7B\u662F\u4EC0\u4E48</p><h2 id="dict" tabindex="-1"><em>_dict</em>_ <a class="header-anchor" href="#dict" aria-hidden="true">#</a></h2><p>\u67E5\u770B\u7C7B\u6216\u5BF9\u8C61\u4E2D\u7684\u6240\u6709\u6210\u5458\u6216\u65B9\u6CD5\uFF08\u8F93\u51FA\u7ED3\u679C\u662F\u4E00\u4E2A\u5B57\u5178\uFF09</p><h2 id="getattr" tabindex="-1"><em>_getattr</em>_ <a class="header-anchor" href="#getattr" aria-hidden="true">#</a></h2><blockquote><p>\u5F53\u5728class\u4E2D\u627E\u4E0D\u5230\u5BF9\u5E94\u7684\u65B9\u6CD5\u65F6\uFF0C\u4F1A\u53BB\u627E__getattr__</p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class T(object):</span></span>
<span class="line"><span style="color:#A6ACCD;">    name = &#39;tom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __getattr__(self,aaa):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(aaa, &#39;in getattr&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return &#39;test&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">t1=T()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">t1.age								#\u8F93\u51FA&#39;age in getattr&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">getattr(t1,&#39;age&#39;)					#\u8F93\u51FA&#39;age in getattr&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="setattr" tabindex="-1"><em>_setattr</em>_ <a class="header-anchor" href="#setattr" aria-hidden="true">#</a></h2><blockquote><p>\u4EE3\u7801\u5F85\u5546\u69B7\uFF01\uFF01\uFF01</p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class T(object):</span></span>
<span class="line"><span style="color:#A6ACCD;">    name = &#39;tom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    def __setattr__(self, name, value):</span></span>
<span class="line"><span style="color:#A6ACCD;">        # self.name = value +1 							#\u8FD9\u4E2A\u4E3A\u4EC0\u4E48\u4E0D\u884C\u5462\uFF1F\uFF1F\uFF1F\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">        return super().__setattr__(name, value)			</span></span>
<span class="line"><span style="color:#A6ACCD;">    		#return super().__setattr__(name, value+11)</span></span>
<span class="line"><span style="color:#A6ACCD;">			#\u6CE8\u610F\uFF1A\u6B64\u65F6return super().__setattr__(name, value)\u540E\u9762\u5C31\u6CA1\u6709self\u4E86 \uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">t1 = T()</span></span>
<span class="line"><span style="color:#A6ACCD;">setattr(t1,&#39;age&#39;,10)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="add-\u3001-mul-\u3001-abs" tabindex="-1"><em>_add</em>_\u3001__mul__\u3001__abs__ <a class="header-anchor" href="#add-\u3001-mul-\u3001-abs" aria-hidden="true">#</a></h2><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyInt</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">num</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> num</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__add__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">num</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">n</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__mul__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">num</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">n</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__str__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a\u7684\u503C\u662F: </span><span style="color:#F78C6C;">%d</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">num</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__abs__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">in abs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyInt</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;">#\u8C03\u7528__add__</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">*</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;">#\u8C03\u7528__mul__</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;"> a             </span><span style="color:#676E95;">#\u8C03\u7528__str__</span></span>
<span class="line"><span style="color:#82AAFF;">abs</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;">#abs\u662Fpython\u5185\u7F6E\u7684\u65B9\u6CD5; n=10,dir(n)\u5C31\u6709__abs__\u65B9\u6CD5\uFF0Cn.__abs__()\u6548\u679C\u540Cabs(n)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#\u8FD9\u4E9B\u52A0\u3001\u4E58\u3001str\u8FD0\u7B97\u5B9E\u9645\u662F\u8C03\u7528\u4E86python\u5185\u7F6E\u7684\u65B9\u6CD5\uFF0C\u5982n=10,dir(n)\u53EF\u4EE5\u770B\u5230n\u91CC\u9762\u6709\u65B9\u6CD5__add__\u3001__mul__\u8FD9\u4E9B\u65B9\u6CD5\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class MyInt(int):       #int\u3001str\u3001dict\u8FD9\u4E9B\u7C7B\u90FD\u662F\u53EF\u4EE5\u88AB\u7EE7\u627F\u7684\uFF0C\u5C31\u50CF\u7EE7\u627Fobject\u4E00\u6837!!!!!!!!!!!!!</span></span>
<span class="line"><span style="color:#A6ACCD;">	pass</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Student(object):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __abs__(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&#39;hahaha&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def __str__(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print(&#39;\u4F60\u4E0A\u5F53\u4E86&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return &#39;\u4F60\u4E0A\u5F53\u4E86&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">stu = Student()</span></span>
<span class="line"><span style="color:#A6ACCD;">abs(stu)</span></span>
<span class="line"><span style="color:#A6ACCD;">str(stu)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="call" tabindex="-1"><em>_call</em>_ <a class="header-anchor" href="#call" aria-hidden="true">#</a></h2><p>\u5B9E\u4F8B\u5BF9\u8C61\u52A0\uFF08\uFF09\u76F4\u63A5\u8C03\u7528</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Dog(object):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self,name):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __call__(self,*args,**kwargs):</span></span>
<span class="line"><span style="color:#A6ACCD;">       print &#39;call running&#39;,args,kwargs</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span></span>
<span class="line"><span style="color:#A6ACCD;">d = Dog(&#39;xx&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">d(1,2,3,name=&#39;xxx&#39;)      #\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u6CA1\u6709__call__\u51FD\u6570\uFF0Cd\u5B9E\u4F8B\u5316\u540E\u4E0D\u80FDd()</span></span>
<span class="line"><span style="color:#A6ACCD;">         #d()()    \u52A02\u4E2A\uFF08\uFF09\u6267\u884Ccall\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="getitem-setitem-delitem" tabindex="-1"><em>_getitem</em>_ \\ <em>_setitem</em>_ \\ <em>_delitem</em>_ <a class="header-anchor" href="#getitem-setitem-delitem" aria-hidden="true">#</a></h2><h2 id="mataclass" tabindex="-1"><em>_mataclass</em>_ <a class="header-anchor" href="#mataclass" aria-hidden="true">#</a></h2>`,86),o=[e];function t(c,r,i,A,C,y){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{_ as __pageData,d as default};
