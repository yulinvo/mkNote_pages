import{_ as s,c as n,o as a,b as p}from"./app.8608f89d.js";const F=JSON.parse('{"title":"Error\u548CException","description":"","frontmatter":{},"headers":[{"level":2,"title":"Error\u548CException","slug":"error\u548Cexception"},{"level":2,"title":"\u5F02\u5E38\u7684\u4F20\u9012\u6027","slug":"\u5F02\u5E38\u7684\u4F20\u9012\u6027"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u5F02\u5E38","slug":"\u81EA\u5B9A\u4E49\u5F02\u5E38"}],"relativePath":"40_python/10_python/160_\u5F02\u5E38\u5904\u7406.md"}'),l={name:"40_python/10_python/160_\u5F02\u5E38\u5904\u7406.md"},e=p(`<p><strong>\u5F02\u5E38\u5904\u7406</strong></p><blockquote><p>\u53C2\u8003\u6587\u6863\uFF1A<a href="https://www.bilibili.com/video/BV1ex411x7Em?p=425&amp;spm_id_from=pageDriver" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1ex411x7Em?p=425&amp;spm_id_from=pageDriver</a></p></blockquote><h2 id="error\u548Cexception" tabindex="-1">Error\u548CException <a class="header-anchor" href="#error\u548Cexception" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u5F02\u5E38\u8303\u56F4\u7684\u6811\u72B6\u7ED3\u6784\u56FE\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    Error\u7684\u4E00\u822C\u662F\u9519\u8BEF\uFF0C\u7CFB\u7EDF\u5DF2\u7ECF\u660E\u786E\u77E5\u9053\u662F\u9519\u8BEF\u800C\u4E0D\u662F\u5F02\u5E38\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">    exception\u7684\u4E00\u822C\u662F\u5F02\u5E38\uFF0C\u7CFB\u7EDF\u4E0D\u77E5\u9053\u662F\u4EC0\u4E48\u95EE\u9898\uFF0C\u6CA1\u6709\u51FA\u73B0\u9884\u671F\u7684\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">names = [&#39;a&#39;,&#39;b&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">data = {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">try:                        #try\u91CC\u9762\u7684\u8BED\u53E5\u53EA\u8981\u6709\u62A5\u9519\u5C31\u4E0D\u4F1A\u5F80\u4E0B\u6267\u884C\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">    names[2]</span></span>
<span class="line"><span style="color:#A6ACCD;">    data[&#39;name&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">except IndexError as e:             #except\u4F1A\u6839\u636E\u62A5\u9519\u4FE1\u606F\u9010\u6761\u67E5\u627E\uFF0C\u76F4\u5230\u627E\u5230\u5339\u914D\u7684\u9519\u8BEF\u7C7B\u578B\uFF1B\u53E6\u5916except IndexError\uFF1Aprint&#39;xxx&#39;\u4E5F\u884C\uFF0C\u53EA\u662F\u8FD9\u6837\u5C31\u5199\u6B7B\u4E86\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">    print &#39;IndexError:&#39;,e</span></span>
<span class="line"><span style="color:#A6ACCD;">except KeyError as e:               # except \u91CC\u7684\u8BED\u53E5\u5E38\u6709\u4E00\u4E2Abreak</span></span>
<span class="line"><span style="color:#A6ACCD;">    print &#39;KeyError&#39;,e</span></span>
<span class="line"><span style="color:#A6ACCD;">except  Exception as e:</span></span>
<span class="line"><span style="color:#A6ACCD;">    print &quot;\u672A\u77E5\u9519\u8BEF&quot;,e</span></span>
<span class="line"><span style="color:#A6ACCD;">else:                               #\u5F53\u6CA1\u6709\u4EFB\u4F55\u9519\u8BEF\u7684\u65F6\u5019(try\u91CC\u9762\u7684\u90FD\u6B63\u5E38)\uFF0C\u8FD9\u884C\u8FD9\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">    print &#39;\u4E00\u5207\u6B63\u5E38&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">finally:</span></span>
<span class="line"><span style="color:#A6ACCD;">    print &#39;\u4E0D\u7BA1\u6709\u6CA1\u6709\u9519\u8BEF\uFF0C\u90FD\u6267\u884C\uFF01&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">print &#39;xxxx&#39;                        # \u540E\u9762\u7684\u8BED\u53E5\u4F9D\u7136\u80FD\u591F\u6B63\u5E38\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">try:</span></span>
<span class="line"><span style="color:#A6ACCD;">    num = int(input(&quot;\u8BF7\u8F93\u5165\u4E00\u4E2A\u6574\u6570: &quot;))</span></span>
<span class="line"><span style="color:#A6ACCD;">    result = 8/num</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(result)</span></span>
<span class="line"><span style="color:#A6ACCD;">except ValueError:</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&quot;\u8BF7\u8F93\u5165\u4E00\u4E2A\u6574\u6570\uFF0C\u800C\u4E0D\u662F\u5B57\u6BCD&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">except ZeroDivisionError as e:					#\u5177\u4F53\u7684\u5F02\u5E38\u4E0A\u4E5F\u80FD\u4F7F\u7528as e\u8FD9\u79CD\u5199\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">	print(e,type(e),dir(e))						#\u67E5\u770B\u5F02\u5E38\u4E2D\u90FD\u6709\u54EA\u4E9B\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&#39;\u6570\u5B570\u4E0D\u80FD\u4F5C\u4E3A\u5206\u6BCD&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">except Exception as e:							#\u6355\u83B7\u672A\u77E5\u5F02\u5E38</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(e)</span></span>
<span class="line"><span style="color:#A6ACCD;">else:</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&quot;\u6CA1\u6709\u51FA\u73B0\u5F02\u5E38\uFF0C\u7A0B\u5E8F\u6B63\u5E38\u6267\u884C\uFF1B&#39;---\u6CA1\u6709\u5F02\u5E38\u624D\u4F1A\u6267\u884C\u7684\u4EE3\u7801---&#39;&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">finally:</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&quot;\u65E0\u8BBA\u662F\u5426\u51FA\u73B0\u5F02\u5E38\uFF0C\u90FD\u4F1A\u6267\u884C\u7684\u4EE3\u7801&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">----------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">except (ValueError, ZeroDivisionError):					#\u540C\u65F6\u6355\u83B7\u4E24\u4E2A\u5F02\u5E38</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&quot;\u8F93\u5165\u6570\u5B57\u7C7B\u578B\u4E0D\u5408\u6CD5&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">except:  		#\u548Cexcept Exception as e\u76F8\u6BD4\uFF0C\u8FD9\u79CD\u5199\u6CD5\u4E0D\u80FD\u6355\u83B7\u5177\u4F53\u7684\u5F02\u5E38\u4FE1\u606F\uFF0C\u53EA\u80FD\u8F93\u51FA\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u5F02\u5E38\u4FE1\u606F\uFF0C\u5C31\u662F\u4E0B\u9762\u8FD9\u53E5</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&quot;\u8BF7\u8F93\u5165\u4E00\u4E2A\u6574\u6570\uFF0C\u800C\u4E0D\u662F\u5B57\u6BCD&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u793A\u4F8B\uFF1A<strong>\u5F53\u524D\u6587\u4EF6\u4E0D\u5B58\u5728\u65F6\u4E5F\u4E0D\u4F1A\u505C\u6B62\u6267\u884C\uFF08Exception\u4E2D\u6CA1\u6709\u5B9A\u4E49\u52A8\u4F5C\uFF09\uFF0C\u53EA\u662F\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728try\u4E2D\u6B64\u8BED\u53E5\u540E\u7684\u4EE3\u7801\u4E0D\u4F1A\u6267\u884C\uFF01\uFF01\uFF01\uFF01</strong></p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> os</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">json</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">re</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">chdir</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">D://Viedo/QTDownloadRadio/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">D://Viedo/QTDownloadRadio/download.dat</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">r</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> line </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> f</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> re</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">search</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u897F\u6E38\u8BB0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> line</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">try</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        linedict </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> json</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loads</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">line</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rename</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">linedict</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">uniqueId</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]),</span><span style="color:#82AAFF;"> linedict</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">programName</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">        	</span><span style="color:#676E95;">#\u5373\u4F7FQTDownloadRadio\u6587\u4EF6\u5939\u4E0B\u6CA1\u6709\u6B64\u6587\u4EF6\uFF0C\u4F9D\u7136\u4F1A\u7EE7\u7EED\u6267\u884C\uFF1B\u53EA\u662F\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728try\u4E2D\u6B64\u8BED\u53E5\u540E\u7684\u4EE3\u7801\u4E0D\u4F1A\u6267\u884C\uFF01\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">except</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Exception</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;">#\u56E0\u4E3A\u5F02\u5E38\u4E2D\u6CA1\u6709\u5B9A\u4E49\u52A8\u4F5C\uFF0C\u76F4\u63A5pass\u4E86\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">pass</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5F02\u5E38\u7684\u4F20\u9012\u6027" tabindex="-1">\u5F02\u5E38\u7684\u4F20\u9012\u6027 <a class="header-anchor" href="#\u5F02\u5E38\u7684\u4F20\u9012\u6027" aria-hidden="true">#</a></h2><blockquote><p>\u53C2\u8003\u6587\u6863\uFF1A<a href="https://www.bilibili.com/video/BV1ex411x7Em?p=429&amp;spm_id_from=pageDriver" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1ex411x7Em?p=429&amp;spm_id_from=pageDriver</a></p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u5728\u4E3B\u7A0B\u5E8F\u4E2D\u53BB\u6355\u83B7\u5F02\u5E38\uFF0C\u5C31\u4E0D\u7528\u6BCF\u4E2A\u51FD\u6570\u90FD\u505A\u5F02\u5E38\u5904\u7406\u4E86		</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u5F88\u91CD\u8981\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u81EA\u5B9A\u4E49\u5F02\u5E38" tabindex="-1">\u81EA\u5B9A\u4E49\u5F02\u5E38 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5F02\u5E38" aria-hidden="true">#</a></h2><blockquote><p>\u53C2\u8003\u6587\u6863\uFF1A<a href="https://www.bilibili.com/video/BV1ex411x7Em?p=431&amp;spm_id_from=pageDriver" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1ex411x7Em?p=431&amp;spm_id_from=pageDriver</a></p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">def input_password():</span></span>
<span class="line"><span style="color:#A6ACCD;">    pwd = input(&quot;\u8BF7\u8F93\u5165\u5BC6\u7801:&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if len(pwd) &gt;=8 :</span></span>
<span class="line"><span style="color:#A6ACCD;">        return pwd</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&quot;\u4E3B\u52A8\u629B\u51FA\u5F02\u5E38&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    ex = Exception(&quot;\u5BC6\u7801\u957F\u5EA6\u4E0D\u591F&quot;) 						#\u5B9A\u4E49\u4E00\u4E2A\u5F02\u5E38\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">    # ex = Exception(&quot;\u5BC6\u7801\u957F\u5EA6\u4E0D\u591F&quot;,&quot;\u4F60\u597D&quot;)  			   #Exception\u63A5\u6536\u7684\u662F\u4E00\u4E2A*args\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    raise ex									#\u629B\u51FA\u5F02\u5E38\u5B9E\u4F8B\uFF0C\u5F02\u5E38\u7684\u53C2\u6570\u662F\u56FA\u5B9A\u7684\uFF0C\u4E0B\u9762\u7684\u4F8B\u5B50\u4E2D\u5F02\u5E38\u7684\u53C2\u6570\u662F\u4F20\u9012\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">try:</span></span>
<span class="line"><span style="color:#A6ACCD;">    input_password()</span></span>
<span class="line"><span style="color:#A6ACCD;">except Exception as e:</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(e)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">----------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">class StoreError(Exception): </span></span>
<span class="line"><span style="color:#A6ACCD;">    pass</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">try:</span></span>
<span class="line"><span style="color:#A6ACCD;">    pass</span></span>
<span class="line"><span style="color:#A6ACCD;">except Exception as e: </span></span>
<span class="line"><span style="color:#A6ACCD;">    raise StoreError(e)			#\u629B\u51FA\u5F02\u5E38\u5B9E\u4F8B\uFF0C\u5C06e\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9StoreError(\u56E0\u4E3AException\u63A5\u6536\u7684\u662F\u4E00\u4E2A*args\u53C2\u6570)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u81EA\u5B9A\u4E49\u5F02\u5E38\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class MyExcepution(Exception):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self,msg):</span></span>
<span class="line"><span style="color:#A6ACCD;">        self.msg = msg</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def __str__(self):          #\u8FD9\u53E5\u4E5F\u53EF\u4EE5\u4E0D\u5199\uFF0C\u9ED8\u8BA4\u662F\u8FD9\u79CD\u683C\u5F0F\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">        return  self.msg</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">try:</span></span>
<span class="line"><span style="color:#A6ACCD;">    raise  MyExcepution(&#39;\u5F02\u5E38 xx&#39;)        #\u89E6\u53D1\u5F02\u5E38    def pause(self):  raise Exception(&quot;Not Implemented&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">except MyExcepution as e:</span></span>
<span class="line"><span style="color:#A6ACCD;">    print e</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,16),o=[e];function t(c,r,i,A,D,C){return a(),n("div",null,o)}const d=s(l,[["render",t]]);export{F as __pageData,d as default};
