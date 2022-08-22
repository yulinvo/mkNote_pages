import{_ as s,c as n,o as a,b as l}from"./app.8608f89d.js";const F=JSON.parse('{"title":"\u88C5\u9970\u5668\u4E4B\u524D\u7684\u7B14\u8BB0","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u88C5\u9970\u5668\u4E4B\u524D\u7684\u7B14\u8BB0","slug":"\u88C5\u9970\u5668\u4E4B\u524D\u7684\u7B14\u8BB0"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"},{"level":2,"title":"\u88C5\u9970\u5668","slug":"\u88C5\u9970\u5668"},{"level":3,"title":"\u4E8C\u9636\u88C5\u9970\u5668","slug":"\u4E8C\u9636\u88C5\u9970\u5668"},{"level":3,"title":"\u4E09\u9636\u88C5\u9970\u5668","slug":"\u4E09\u9636\u88C5\u9970\u5668"},{"level":3,"title":"\u591A\u5C42\u88C5\u9970\u5668","slug":"\u591A\u5C42\u88C5\u9970\u5668"},{"level":2,"title":"\u601D\u8003","slug":"\u601D\u8003"},{"level":3,"title":"\u601D\u8003\u4E00","slug":"\u601D\u8003\u4E00"},{"level":3,"title":"\u601D\u8003\u4E8C","slug":"\u601D\u8003\u4E8C"}],"relativePath":"40_python/10_python/120_\u88C5\u9970\u5668.md"}'),p={name:"40_python/10_python/120_\u88C5\u9970\u5668.md"},e=l(`<h2 id="\u88C5\u9970\u5668\u4E4B\u524D\u7684\u7B14\u8BB0" tabindex="-1">\u88C5\u9970\u5668\u4E4B\u524D\u7684\u7B14\u8BB0 <a class="header-anchor" href="#\u88C5\u9970\u5668\u4E4B\u524D\u7684\u7B14\u8BB0" aria-hidden="true">#</a></h2><ul><li><p>\u4E0B\u9762\u4EE3\u7801\u9047\u89C1\u95EE\u9898\u7684\u603B\u7ED3\uFF08debug\u5F88\u597D\u7528\uFF1B\uFF09 \u3010\u6682\u65F6\u4E0D\u6D89\u53CA\u88C5\u9970\u5668\u3011</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># debug\u8C03\u8BD5a\u83B7\u53D6\u4E0D\u5230tv\u8FD4\u56DE\u7684\u7ED3\u679C\u7684\u95EE\u9898\uFF0CF11\u5355\u6B65\u8C03\u8BD5\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">def login(func):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&#39;passed user verification...&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    func()                      #a\u83B7\u53D6\u4E0D\u5230\u503C\u662F\u56E0\u4E3A\u6B64\u5904\u6CA1\u6709return</span></span>
<span class="line"><span style="color:#A6ACCD;">    	#\u6B64\u5904\u4E00\u5B9A\u8981return func\uFF0C\u4E0D\u7136\u5C31\u6539\u53D8\u51FD\u6570\u7684\u8C03\u7528\u65B9\u5F0F\u4E86\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">def tv():</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&#39;Welcome to Tv page !&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &quot;tv_123&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">tv = login(tv)				#login(tv)\u76F4\u63A5\u5C31\u6267\u884C\u4E86\uFF0C\u6539\u53D8\u4E86\u8C03\u7528\u65B9\u5F0F\uFF0C\u6240\u4EE5login\u4E2D\u4E00\u5B9A\u8981\u662Freturn func\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">print(tv)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u88C5\u9970\u5668\u76F8\u5173\u7684\u4E4B\u524D\u7684\u7B14\u8BB0 \uFF08\u9700\u6C42\uFF1A\u6267\u884Ctv\u51FD\u6570\u4E4B\u524D\u8981\u5148\u9A8C\u8BC1\uFF0C\u800C\u4E14\u4E0D\u80FD\u66F4\u6539tv\u51FD\u6570\uFF09</p><ol><li><p>login\u65E0\u6CD5\u63A5\u6536tv\u4E2D\u7684\u53C2\u6570\uFF0C\u65E0\u6CD5\u5BF9\u7528\u6237\u540D\u8FDB\u884C\u6821\u9A8C \uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">def login(func):    #\u5728\u6B64\u5904\u5224\u65ADusername ==&#39;xxx&#39;\u80FD\u5426\u901A\u8FC7\u8BA4\u8BC1\uFF0C\u4F46\u597D\u50CF\u65E0\u6CD5\u63A5\u6536username</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&#39;passed user verification...&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    func(name)				#\u4F1A\u62A5\u9519name\u672A\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">def tv(name):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&#39;Welcome %s to Tv page !&#39;% name)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &quot;tv_123&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">#tv = login(tv)			#\u6B64\u5904\u4E0D\u80FD\u4F20\u9012\u7528\u6237\u540Dlogin(tv(&#39;tom&#39;))\uFF0C\u56E0\u4E3A\u5728\u4E4B\u540E\u624D\u4F1A\u88AB\u7528\u6237\u8C03\u7528\uFF08\u4E0D\u80FD\u786E\u5B9A\u7528\u6237\u4F55\u65F6\u8C03\u7528\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">tv(&#39;tom&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u5B9A\u4E49\u4E00\u4E2Ainner\u51FD\u6570\u6765\u63A5\u6536\u7528\u6237\u540Dusername\u53C2\u6570</p></li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">def login(func):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def inner(name):</span></span>
<span class="line"><span style="color:#A6ACCD;">        if name == &quot;tom&quot;:</span></span>
<span class="line"><span style="color:#A6ACCD;">            print(&#39;passed user verification...&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        else: return</span></span>
<span class="line"><span style="color:#A6ACCD;">        func(name)				#\u5982\u679Ctv\u51FD\u6570\u6709\u8FD4\u56DE\u503C\uFF0C\u6B64\u5904\u8981return func(name)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return inner</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">def tv(name):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&#39;Welcome %s to Tv page !&#39;% name)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &quot;tv_123&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">tv = login(tv)</span></span>
<span class="line"><span style="color:#A6ACCD;">tv(&#39;tom1&#39;)   </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679Ctv\u4E2D\u4E0D\u4F20\u9012\u53C2\u6570\uFF0C\u611F\u89C9\u8FD9\u6837\u4E5F\u53EF\u4EE5\uFF0Creturn\u4E5F\u80FD\u6B63\u5E38\u8FD4\u56DE</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">def login(func):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&#39;hello world&#39;)			</span></span>
<span class="line"><span style="color:#A6ACCD;">    return func               #\u4E00\u5B9A\u4E0D\u80FD\u662Ffunc()\uFF0C\u56E0\u4E3A\u5728\u7528\u6237\u8C03\u7528\u4E4B\u524D\u51FD\u6570\u4E0D\u80FD\u6267\u884C\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">def tv(name):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&#39;Welcome [%s] to Tv page !&#39;% name)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &quot;tv_123&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">tv=login(tv)</span></span>
<span class="line"><span style="color:#A6ACCD;">print(tv(&#39;111&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li><p>\u88C5\u9970\u5668\u4F20\u9012\u53C2\u6570</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">def Before(request,kargs):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print &#39;Before&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">def After(request,kargs):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print &#39;After&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">def Filter(before_func,after_func):        #\u63A5\u6536\u7684func\uFF0C\u6B64\u4F8B\u5B50\u4E2D\u7684Before\u3001After</span></span>
<span class="line"><span style="color:#A6ACCD;">    def outer(main_func):                  #\u6B64\u5904main_func\u624D\u662F\u63A5\u6536\u7684\u7528\u6237\u4E1A\u52A1\u51FD\u6570\uFF0C\u6B64\u4F8B\u4E2D\u7684index</span></span>
<span class="line"><span style="color:#A6ACCD;">        def wrapper(request,kargs):</span></span>
<span class="line"><span style="color:#A6ACCD;">            before_result=before_func(request,kargs)</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (before_result != None):</span></span>
<span class="line"><span style="color:#A6ACCD;">                return  before_result</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">            main_result=main_func(request,kargs)</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (main_result != None):</span></span>
<span class="line"><span style="color:#A6ACCD;">                return  main_result</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span></span>
<span class="line"><span style="color:#A6ACCD;">            after_result=after_func(request,kargs)</span></span>
<span class="line"><span style="color:#A6ACCD;">            if(after_result != None):</span></span>
<span class="line"><span style="color:#A6ACCD;">                return after_result        #\u7591\u95EE\u540C\u4E0A\u9762return\uFF0C\u89E3\u91CA\u89C1\u4E0A\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">        return  wrapper</span></span>
<span class="line"><span style="color:#A6ACCD;">    return outer</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@Filter(Before,After)</span></span>
<span class="line"><span style="color:#A6ACCD;">def index(request,kargs):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print  &#39;Index&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># index(&#39;request&#39;,&#39;123&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">index(&#39;xxx&#39;,&#39;zzz&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ol><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><ol><li>login\u4E2D\u4E00\u5B9A\u8981return func\uFF0C\u4E0D\u7136\u5C31\u6539\u53D8\u4E86\u51FD\u6570\u7684\u8C03\u7528\u65B9\u5F0F\u4E86</li><li>\u5982\u679Ctv\u4E2D\u4E0D\u63A5\u53D7\u53C2\u6570\u7684\u8BDD\uFF0C\u5C31\u4E0D\u9700\u8981return warpper\u4E86\uFF0C\u76F4\u63A5return func\u5373\u53EF</li></ol></li></ul><h2 id="\u88C5\u9970\u5668" tabindex="-1">\u88C5\u9970\u5668 <a class="header-anchor" href="#\u88C5\u9970\u5668" aria-hidden="true">#</a></h2><blockquote><p>\u88C5\u9970\u5668\u201C@xxx\u201D\u8FD4\u56DE\u7684\u4E00\u5B9A\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u800C\u4E0D\u662F\u6267\u884C\u51FD\u6570\u540E\u7684\u8FD4\u56DE\u503C\uFF01\uFF01\uFF01\uFF01\uFF01</p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">def demo2(func):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&#39;------demo2------&#39;)						#\u8FD9\u53E5\u52A0\u8F7D\u5230\u5185\u5B58\u4E2D\u65F6\u5C31\u76F4\u63A5\u8FD0\u884C\u4E86\uFF0C\u4E0D\u9700\u8981\u4E0B\u9762\u7684print(demo1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    func(1,2,3,a=1,b=2)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 12120</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@demo2</span></span>
<span class="line"><span style="color:#A6ACCD;">def demo1(*args,**kwargs):							#demo1 = demo2(demo1)  !!!!!!!</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&#39;------demo1------&#39;,args,kwargs)			#\u8FD9\u53E5\u52A0\u8F7D\u5230\u5185\u5B58\u4E2D\u65F6\u5C31\u76F4\u63A5\u8FD0\u884C\u4E86\uFF0C\u4E0D\u9700\u8981\u4E0B\u9762\u7684print(demo1)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># print(demo1)				#\u6B64\u65F6demo1\u7684\u503C\u4E3A 12120</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4FEE\u6539\u7ECF\u8FC7\u88C5\u9970\u540E\u51FD\u6570\u7684__name__\u548C__doc__</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u51FD\u6570\u7ECF\u8FC7\u88C5\u9970\u5668\u88C5\u9970\u540E\uFF0C__name__\u548C__doc__\u53D8\u6210\u4E86warp\u7684\u4E86\uFF0C\u5982\u679C\u8FD8\u60F3\u8F93\u51FA\u539F\u51FD\u6570\u7684\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u53C2\u8003\u6587\u6863\uFF1A	https://www.bilibili.com/video/BV1Vv411x7hj?p=6&amp;spm_id_from=pageDriver</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import functools						#\u5F15\u5165functools</span></span>
<span class="line"><span style="color:#A6ACCD;">def cache_it(func):</span></span>
<span class="line"><span style="color:#A6ACCD;">    @functools.wraps(func)				#\u591A\u52A0\u4E86\u4E00\u5C42\u8FD9\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">    def warp(*args):</span></span>
<span class="line"><span style="color:#A6ACCD;">        return  func(*args)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return warp</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@cache_it</span></span>
<span class="line"><span style="color:#A6ACCD;">def exapmle():</span></span>
<span class="line"><span style="color:#A6ACCD;">   pass</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">print(example.__name__)</span></span>
<span class="line"><span style="color:#A6ACCD;">print(example.__doc__)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u4E8C\u9636\u88C5\u9970\u5668" tabindex="-1"><strong>\u4E8C\u9636\u88C5\u9970\u5668</strong> <a class="header-anchor" href="#\u4E8C\u9636\u88C5\u9970\u5668" aria-hidden="true">#</a></h3><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cache_it</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;">							</span><span style="color:#676E95;">#\u4F20\u9012\u7684\u65F6\u4E00\u4E2A\u51FD\u6570\uFF0C\u76F8\u5F53\u4E8E\u4F20\u9012\u7684\u53EA\u662F\u5185\u5B58\u5730\u5740\uFF0C\u4E0D\u662F\u51FD\u6570\u7684\u6267\u884C\u7ED3\u679C\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">11111</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">warp</span><span style="color:#89DDFF;">(*</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">22222</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">func</span><span style="color:#89DDFF;">(*</span><span style="color:#82AAFF;">args</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> warp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">cache_it</span><span style="color:#A6ACCD;">					</span><span style="color:#676E95;">#\u52A0\u4E0D\u52A0()\u8BD5\u4E0B</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">exapmle</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">example...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#load aa.py\u65F6\uFF0Cprint(&#39;11111&#39;)\u5C31\u5DF2\u7ECF\u6267\u884C\u4E86\uFF0C\u6267\u884Cexapmle()\u4E4B\u540E\u5C31\u662F\u6267\u884Cwarp()\u4E86\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">#\u51FD\u6570\u653E\u5230\u88C5\u9970\u5668\u4E2D\u5148\u6267\u884C\u4E0B\uFF01\uFF01\uFF01\uFF01\uFF01		exapmle = cache_it( exapmle )	\u5176\u4E2Dcache_it()\u51FD\u6570\u88AB\u6267\u884C\u4E86\uFF01\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4E09\u9636\u88C5\u9970\u5668" tabindex="-1"><strong>\u4E09\u9636\u88C5\u9970\u5668</strong> <a class="header-anchor" href="#\u4E09\u9636\u88C5\u9970\u5668" aria-hidden="true">#</a></h3><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">lru_cache_function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">max_size</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">expiration</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">60</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">11111</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cache_it</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">22222</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">warp</span><span style="color:#89DDFF;">(*</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3333</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">func</span><span style="color:#89DDFF;">(*</span><span style="color:#82AAFF;">args</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> warp</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> cache_it</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">lru_cache_function</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">       </span></span>
<span class="line"><span style="color:#676E95;">#\u8FD9\u79CD\u88C5\u9970\u5668\u5C31\u53EF\u4EE5\u4F20\u9012\u53C2\u6570\u4E86; \u597D\u50CF\u5FC5\u987B\u8981\u5230cache_it(func)\u8FD9\u4E00\u5C42\u3010func\u8FD9\u5C42\u3011,\u56E0\u4E3Aexapmle = cache_it( exapmle )\u9700\u8981\u6709\u4F20\u9012\u51FD\u6570\u7684\u4F4D\u7F6E\uFF01\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">exapmle</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">example...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="\u591A\u5C42\u88C5\u9970\u5668" tabindex="-1"><strong>\u591A\u5C42\u88C5\u9970\u5668</strong> <a class="header-anchor" href="#\u591A\u5C42\u88C5\u9970\u5668" aria-hidden="true">#</a></h3><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cache_it1</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1---11</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">warp</span><span style="color:#89DDFF;">(*</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1--22</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">func</span><span style="color:#89DDFF;">(*</span><span style="color:#82AAFF;">args</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> warp</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cache_it2</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2---111</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">warp</span><span style="color:#89DDFF;">(*</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2--222</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">func</span><span style="color:#89DDFF;">(*</span><span style="color:#82AAFF;">args</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> warp</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">cache_it1</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">cache_it2</span></span>
<span class="line"><span style="color:#676E95;">#\u4ECE\u4E0A\u5F80\u4E0B\u6267\u884C\uFF0Ccache_it1( cache_it2(func) )		#\u95ED\u5305</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">exapmle</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">example...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">exapmle</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#\u8F93\u51FA\u7ED3\u679C\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">--</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">111</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">--</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">11</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">--</span><span style="color:#F78C6C;">22</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">--</span><span style="color:#F78C6C;">222</span></span>
<span class="line"><span style="color:#A6ACCD;">    example...</span></span>
<span class="line"></span></code></pre></div><h2 id="\u601D\u8003" tabindex="-1">\u601D\u8003 <a class="header-anchor" href="#\u601D\u8003" aria-hidden="true">#</a></h2><h3 id="\u601D\u8003\u4E00" tabindex="-1">\u601D\u8003\u4E00 <a class="header-anchor" href="#\u601D\u8003\u4E00" aria-hidden="true">#</a></h3><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cache_it</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">11111</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">warp</span><span style="color:#89DDFF;">(*</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">22222</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">func</span><span style="color:#89DDFF;">(*</span><span style="color:#82AAFF;">args</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> warp</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">cache_it</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">lambda</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">						</span><span style="color:#676E95;">#cache_it(lambda x:x)\u6267\u884C\u7684\u7ED3\u679C\uFF0C\u7136\u540E\u5C06exapmle\u4F20\u9012\u5230\u8FD9\u4E2A\u7ED3\u679C\u4E2D\uFF01\uFF01\uFF01\uFF01!</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">exapmle</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">example...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#\u95EE\u9898\uFF1A1\uFF0C\u8F93\u51FA\u7684\u7ED3\u679C\u65F6\u4EC0\u4E48\uFF1F		2\uFF0C\u4E0D\u6539\u53D8@cache_it(lambda x:x)\u7684\u60C5\u51B5\u4E0B\uFF0Ccache_it()\u51FD\u6570\u5E94\u8BE5\u600E\u4E48\u4FEE\u6539\uFF1F</span></span>
<span class="line"></span></code></pre></div><h3 id="\u601D\u8003\u4E8C" tabindex="-1">\u601D\u8003\u4E8C <a class="header-anchor" href="#\u601D\u8003\u4E8C" aria-hidden="true">#</a></h3><p>\u4E8C\u9636\u88C5\u9970\u5668\u4F20\u9012\u53C2\u6570\uFF08\u662F\u5728cache_it\u8FD9\u91CC\u4F20\u9012\u53C2\u6570\uFF09</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,19),o=[e];function c(t,r,A,D,C,y){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{F as __pageData,u as default};
