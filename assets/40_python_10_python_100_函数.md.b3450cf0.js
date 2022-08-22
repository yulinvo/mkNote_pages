import{_ as s,c as n,o as a,b as l}from"./app.8608f89d.js";const d=JSON.parse('{"title":"python\u5185\u7F6E\u51FD\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"python\u5185\u7F6E\u51FD\u6570","slug":"python\u5185\u7F6E\u51FD\u6570"},{"level":2,"title":"return\u8FD4\u56DE\u503C","slug":"return\u8FD4\u56DE\u503C"},{"level":2,"title":"\u51FD\u6570\u4F20\u53C2","slug":"\u51FD\u6570\u4F20\u53C2"},{"level":2,"title":"lambda\u533F\u540D\u51FD\u6570","slug":"lambda\u533F\u540D\u51FD\u6570"},{"level":2,"title":"\u9012\u5F52\u51FD\u6570","slug":"\u9012\u5F52\u51FD\u6570"}],"relativePath":"40_python/10_python/100_\u51FD\u6570.md"}'),p={name:"40_python/10_python/100_\u51FD\u6570.md"},e=l(`<h2 id="python\u5185\u7F6E\u51FD\u6570" tabindex="-1">python\u5185\u7F6E\u51FD\u6570 <a class="header-anchor" href="#python\u5185\u7F6E\u51FD\u6570" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">abs():\u53D6\u7EDD\u5BF9\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">all():\u4F20\u9012\u53C2\u6570\u4E2D\u6BCF\u4E00\u4E2A\u90FD\u662F\u771F\uFF0C\u7ED3\u679C\u624D\u4E3ATrue ;</span></span>
<span class="line"><span style="color:#A6ACCD;">	0\u3001none\u3001\u7A7A\u5B57\u7B26\u4E32\u3001\u7A7A\u5217\u8868\u3001\u7A7A\u5143\u7EC4\u3001\u7A7A\u5B57\u5178\u4E3A\u5047\uFF0Call([11,22,33,&#39;&#39;])\u4E3A\u5047\uFF0C\u53BB\u9664\u2018\u2019\u540E\u4E3A\u771F(\u2018 \u2019\u53EA\u6709\u4E00\u4E2A\u7A7A\u683C\u4E5F\u662F\u771F\u7684)\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">	all([])\u771F\uFF0Call([&#39;&#39;])\u5047\uFF0C\u5224\u65AD\u91CC\u9762\u7684\u5143\u7D20\uFF1F  \u53EF\u4EE5\u4F7F\u7528bool\u67E5\u770B\u771F\u5047\uFF1Abool(None)\u3001bool(\u2018\u2019)</span></span>
<span class="line"><span style="color:#A6ACCD;">any():\u53EA\u8981\u6709\u4E00\u4E2A\u4E3A\u771F\u7684\uFF0C\u8FD4\u56DE\u771F      </span></span>
<span class="line"><span style="color:#A6ACCD;">	any([&#39;&#39;,None,[],{},1]):\u6CA1\u67091\u5219\u4E3A\u5047\uFF0C\u7EA2\u8272\u90E8\u5206\u4F3C\u4E4E\u89E3\u91CA\u4E86all\u4E2Dall([])\u771F(\u8FD9\u91CC\u9762\u7684[]\u662F\u56FA\u5B9A\u7528\u6CD5)\uFF0Call([&#39;&#39;])\u5047\u7684\u95EE\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">assert :\u65AD\u8A00\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528if\u5224\u65AD    assert  type(&#39;aaa&#39;) is str ; print 123</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ascii():</span></span>
<span class="line"><span style="color:#A6ACCD;">bin():\u4E8C\u8FDB\u5236     bin\uFF0810\uFF09\uFF0C\u7ED3\u679C\u4E2D\u5F00\u59CB\u7684&#39;0b&#39;\u5C31\u8868\u793A\u662F\u4E8C\u8FDB\u5236</span></span>
<span class="line"><span style="color:#A6ACCD;">oct():\u516B\u8FDB\u5236     \u20180o\u2019\u8868\u793A\u516B\u8FDB\u5236</span></span>
<span class="line"><span style="color:#A6ACCD;">hex():16\u8FDB\u5236     &#39;0x&#39;\u8868\u793A16\u8FDB\u5236</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">bool():</span></span>
<span class="line"><span style="color:#A6ACCD;">callable():\u662F\u5426\u53EF\u6267\u884C,\u5982\u679C\u53EF\u6267\u884C\u4F1A\u6709__call__\u65B9\u6CD5     f=lambda x:x+1 ;callable(f)\u4E3ATrue \uFF0C\u51FD\u6570\u6709__call__\u65B9\u6CD5\uFF1Af.__call__(5)/     l=[]; callable(l)\u4E3AFalse</span></span>
<span class="line"><span style="color:#A6ACCD;">chr():\u5C06\u4E00\u4E2A\u6570\u5B57\u8F6C\u6362\u4E3Aascii\u7801\uFF0C\u901A\u5E38\u914D\u5408ord\u4F7F\u7528     chr(random.random(1,99))\u53EF\u4EE5\u52A8\u6001\u751F\u6210\u9A8C\u8BC1\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">ord():\u5C06\u4E00\u4E2Aascii\u8F6C\u6362\u4E3A\u6570\u5B57\uFF0C\u901A\u5E38\u914D\u5408chr\u4F7F\u7528     ord(&#39;a&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">compile():\u5C06\u4EE3\u7801\u7F16\u8BD1\u4E3A\u53EF\u6267\u884C\u7684\u6587\u4EF6     \u5982\uFF1Astr=&#39;&#39;&#39;def index():return &#39;Hello World!&#39; &#39;&#39;&#39;    \uFF1Bcompile(str,&#39;&lt;string&gt;&#39;,&#39;exec&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">delattr():\u53CD\u5C04\u7684\u65F6\u5019\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">divmod():\u5730\u677F\u9664     divmod(3,5)</span></span>
<span class="line"><span style="color:#A6ACCD;">enumerate():\u989D\u5916\u589E\u52A0\u4E00\u884C\u7F16\u53F7 \u5982\uFF1Aa=[&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]  for i,item in enumerate(a,5): print i,item,\u4E4B\u524D\u90FD\u662Ffor i in enumerate(a):print i     \u5176\u4E2D5\u662F\u5F00\u59CB\u7684\u7F16\u53F7\uFF0C\u4E0D\u662F\u6B65\u8FDB</span></span>
<span class="line"><span style="color:#A6ACCD;">eval()\uFF1A\u5BF9\u5B57\u7B26\u4E32(\u597D\u50CF\u53EA\u6709\u6570\u5B57)\u8FDB\u884C\u8FD0\u7B97     \u5982\uFF1Aeval(&quot;3*5&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">exec(\u6267\u884C\u4EE3\u7801)\uFF1A    \u5982exec( for\u5FAA\u73AF\u6216lambda\u8868\u8FBE\u5F0F)\uFF0C\u4F46\u662Fexec\u6CA1\u6709\u8FD4\u56DE\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">filter():\u8FC7\u6EE4 filter\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u51FD\u6570\uFF0Cfunc\uFF0C\u6CA1\u6709()   \u5982\uFF1Aprint filter(lambda x:x&gt;20,li)\uFF0C\u7ED3\u679C[22, 33]</span></span>
<span class="line"><span style="color:#A6ACCD;">map():\u6620\u5C04\uFF0Cmap\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u51FD\u6570\uFF0Cfunc\uFF0C\u6CA1\u6709()    \u5982\uFF1Ali=[11,22,33];print map(lambda x:x*2,li) ,\u7ED3\u679C[22, 44, 66]</span></span>
<span class="line"><span style="color:#A6ACCD;">float():</span></span>
<span class="line"><span style="color:#A6ACCD;">format():</span></span>
<span class="line"><span style="color:#A6ACCD;">     def normal_method(*args,**kwargs):</span></span>
<span class="line"><span style="color:#A6ACCD;">                print &quot;calling normal_method({0},{1})&quot;.format(args,kwargs)</span></span>
<span class="line"><span style="color:#A6ACCD;">        o.normal_method(1,2,x=3,y=4)</span></span>
<span class="line"><span style="color:#A6ACCD;">frozenset():\u4E0D\u80FD\u589E\u52A0\u4FEE\u6539\u7684set</span></span>
<span class="line"><span style="color:#A6ACCD;">getattr(): ?</span></span>
<span class="line"><span style="color:#A6ACCD;">globals():\u663E\u793A\u5F53\u524D\u6240\u6709\u5168\u5C40\u53D8\u91CF(\u53EA\u80FD\u663E\u793A\uFF0C\u4E0D\u80FD\u4FEE\u6539\u4E48\uFF1F)</span></span>
<span class="line"><span style="color:#A6ACCD;">locals():\u5C40\u90E8\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">hash():     \u5F53\u5B57\u5178\u7684key\u6216value\u5F88\u957F\u7684\u65F6\u5019\uFF0C\u7528hash\u8868\u793A\uFF0C\u573A\u666F\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">max():\u83B7\u53D6\u6700\u5927\u503C     max(11,22,33,44)</span></span>
<span class="line"><span style="color:#A6ACCD;">min():\u83B7\u53D6\u6700\u5C0F\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">pow():\u5E42</span></span>
<span class="line"><span style="color:#A6ACCD;">range():\u533A\u95F4   \u5982:print range(1,100,5)     \u9ED8\u8BA4\u8F93\u51FA\u7684\u7C7B\u578B\u597D\u50CF\u662Flist\uFF0C5\u662F\u6B65\u957F</span></span>
<span class="line"><span style="color:#A6ACCD;">reversed():\u53CD\u8F6C</span></span>
<span class="line"><span style="color:#A6ACCD;">round():\u56DB\u820D\u4E94\u5165     \u5982\uFF1Around(4.6)</span></span>
<span class="line"><span style="color:#A6ACCD;">slice():\u5207\u7247\uFF0C\u7C7B\u4F3C\u4E0Ea[1:3]</span></span>
<span class="line"><span style="color:#A6ACCD;">sorted():\u6392\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;">sum():\u6C42\u548C</span></span>
<span class="line"><span style="color:#A6ACCD;">super():\u901A\u8FC7\u5B50\u7C7B\u6267\u884C\u7236\u7C7B\u7684\u6784\u9020\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">vars():  dir()\u8FD4\u56DE\u7684\u662Fkey;vars()\u8FD4\u56DE\u7684\u662Fkey\u548Cvalue\uFF0C\u662F\u4E2A\u5B57\u5178     #dir()\u91CC\u9762\u662F\u7A7A\u7684\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">zip():\u76F8\u5E94\u7684\u5143\u7D20\u4F5C\u4E3A\u4E00\u7EC4\uFF0C\u5982\uFF1Ax=[1,2,3];y=[4,5,6];print zip(x,y);print zip(*zip(x,y))     \u6B64\u65F6\u5982\u679C\u6709\u4E2Az=[7,8,9],\u5219zip\u540E\u6BCF\u7EC4\u91CC\u67093\u4E2A\u5143\u7D20\uFF0C\u5982\u679Cz=[],\u5219\u6BCF\u7EC4\u4E3A0\u4E2A\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>def\u51FD\u6570</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">def say():      print &#39;hi&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">#say()                  #\u6267\u884C\u8FD9\u4E2A\u7684\u65F6\u5019\u5B9E\u9645\u662F\u6267\u884C\u4E86__call__\u7684\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#say.__call__()         #</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="return\u8FD4\u56DE\u503C" tabindex="-1">return\u8FD4\u56DE\u503C <a class="header-anchor" href="#return\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><ul><li><p>\u53EA\u8981\u78B0\u5230return\uFF0C\u5C31\u9000\u51FA\u6574\u4E2A\u51FD\u6570\uFF0C\u5373\u4F7F\u662F\u5B58\u5728while\u6B7B\u5FAA\u73AF</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">def cash_out():</span></span>
<span class="line"><span style="color:#A6ACCD;">    while True:          #\u5373\u4F7F\u6709while\u6B7B\u5FAA\u73AF\uFF0C\u4E5F\u662F\u53EA\u6267\u884C\u4E00\u6B21</span></span>
<span class="line"><span style="color:#A6ACCD;">        return 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h2 id="\u51FD\u6570\u4F20\u53C2" tabindex="-1">\u51FD\u6570\u4F20\u53C2 <a class="header-anchor" href="#\u51FD\u6570\u4F20\u53C2" aria-hidden="true">#</a></h2><ul><li><p>\u6307\u5B9A\u53C2\u6570\u540D\u79F0</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">def main(a1,a2):</span></span>
<span class="line"><span style="color:#A6ACCD;">	print a1,a2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">main(a2=1,a1=2)				#\u53EF\u4EE5\u98A0\u5012\u53C2\u6570\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u9ED8\u8BA4\u53C2\u6570\uFF08\u9ED8\u8BA4\u53C2\u6570\u5FC5\u987B\u8981\u653E\u5728\u6700\u540E\u9762\uFF0C\u5426\u5219\u4F1A\u62A5\u8BED\u6CD5\u9519\u8BEF\uFF09</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">def main(a1,a2,a3=&#39;abc&#39;):	#c\u5982\u679C\u4E0D\u4F20\u9012\u4F7F\u7528&#39;abc&#39;\uFF0C\u4F20\u9012\u5219\u4EE5\u4F20\u9012\u7684\u53C2\u6570\u4E3A\u51C6\uFF1B\u5982\u679C\u6B64\u5904b\u6709\u9ED8\u8BA4\u503C\u5219c\u5FC5\u987B\u8981\u6709\u9ED8\u8BA4\u503C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">	print a1,a2,a3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">main(1,2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">def main(a=10,b=20,c=30):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(a,b,c)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">main(1,2)						#1,2,30</span></span>
<span class="line"><span style="color:#A6ACCD;">main(a=2,b=1)					#2,1,30</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><p>\u200B</p><ul><li><p>\u52A8\u6001\u53C2\u6570\uFF08*\u653E\u5230\u524D\u9762\uFF0C**\u653E\u5230\u540E\u9762\uFF0C\u987A\u5E8F\u98A0\u5012\u4F1A\u62A5\u9519\uFF0C\u8BED\u6CD5\u89C4\u5B9A\u8FD9\u6837\uFF09</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">def main(*args,**kwargs):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print args,kwargs  	  #args\u4E3Atuple\u7C7B\u578B:(11, 22, 33)   kwargs\u4E3Adict\u7C7B\u578B\uFF1A{&#39;uu&#39;: 22, &#39;n1&#39;: 11, &#39;xx&#39;: 33} </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    for i in args:</span></span>
<span class="line"><span style="color:#A6ACCD;">        print i</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">main(11,22,33,n1=11,uu=22,xx=33)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>\u5F53\u4F20\u9012\u9884\u5148\u5B9A\u4E49\u7684list\u3001dict\u65F6</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">def main(*args,**kwargs):</span></span>
<span class="line"><span style="color:#A6ACCD;">	pass</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">a1=[11,22,33]</span></span>
<span class="line"><span style="color:#A6ACCD;">a2={&#39;n1&#39;:11,&#39;uu&#39;:22,&#39;xx&#39;:33}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">main(a1,a2)		#\u4F1A\u5C06a1\u548Ca2\u4F5C\u4E3A\u4E00\u4E2Atuple\u90FD\u4F20\u9012\u7ED9args\u4E86\uFF0Ckwargs\u91CC\u9762\u662F\u7A7A\u7684\uFF1B\u6B63\u786E\u7684\u65B9\u6CD5\u662F\uFF1Amain(*a1,**a2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul></li></ul><h2 id="lambda\u533F\u540D\u51FD\u6570" tabindex="-1">lambda\u533F\u540D\u51FD\u6570 <a class="header-anchor" href="#lambda\u533F\u540D\u51FD\u6570" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#lambda\u51FD\u6570\u5C06\u4EE3\u7801\u6267\u884C\u7684\u7ED3\u679C\u81EA\u52A8\u52A0\u4E86\u4E00\u4E2Areturn\u503C\uFF0C\u5C06\u6267\u884C\u7684\u7ED3\u679Creturn</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">func = lambda x:x*10</span></span>
<span class="line"><span style="color:#A6ACCD;">func(2)						#\u7ED3\u679C\u4E3A20</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u9012\u5F52\u51FD\u6570" tabindex="-1">\u9012\u5F52\u51FD\u6570 <a class="header-anchor" href="#\u9012\u5F52\u51FD\u6570" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u4E00\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    def func(a):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print a</span></span>
<span class="line"><span style="color:#A6ACCD;">        if a/2 &gt;1:</span></span>
<span class="line"><span style="color:#A6ACCD;">            res=func(a/2)</span></span>
<span class="line"><span style="color:#A6ACCD;">            print res      #\u6EE1\u8DB3(a/2&gt;1)\u6761\u4EF6\u65F6\u4E0D\u4F1A\u6267\u884C\u8FD9\u53E5\uFF1B\u6267\u884C\u591A\u5C11\u5C42\uFF0C\u6700\u540E\u5C31\u9000\u51FA\u591A\u5C11\u5C42\uFF0Cfunc\u5230res=func(a/2)\u4E4B\u95F4\u6CA1\u6709</span></span>
<span class="line"><span style="color:#A6ACCD;">                             return\uFF0C\u6240\u4EE5\u8FD4\u56DENone</span></span>
<span class="line"><span style="color:#A6ACCD;">            return res      #\u6EE1\u8DB3(a/2&gt;1)\u6761\u4EF6\u65F6\u4E0D\u4F1A\u6267\u884C\u8FD9\u53E5\uFF1B\u76F4\u5230\u6700\u540E\u8DF3\u51FA\u5FAA\u73AF\u624D\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">    func(100)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E8C\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    def func(a):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print a</span></span>
<span class="line"><span style="color:#A6ACCD;">        if a/2 &gt;1:</span></span>
<span class="line"><span style="color:#A6ACCD;">            return func(a/2)        #\u8FD9\u79CD\u52A0\u4E0A\u4E00\u4E2Areturn\u662F\u81EA\u7ED3\u675F\uFF0C\u5C31\u4E0D\u4F1A\u6709\u90A3\u4E48\u591A\u5C42\u7684None</span></span>
<span class="line"><span style="color:#A6ACCD;">    func(100)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E09:</span></span>
<span class="line"><span style="color:#A6ACCD;">    def calc(a):</span></span>
<span class="line"><span style="color:#A6ACCD;">        print a</span></span>
<span class="line"><span style="color:#A6ACCD;">        if a/2 &gt; 1:</span></span>
<span class="line"><span style="color:#A6ACCD;">            res = calc(a/2)</span></span>
<span class="line"><span style="color:#A6ACCD;">            print (&#39;res&#39;,res)</span></span>
<span class="line"><span style="color:#A6ACCD;">        print &quot;A&quot;,a</span></span>
<span class="line"><span style="color:#A6ACCD;">        return  a          #return\u662F\u8FD4\u56DE\u7ED9\u4E0A\u7EA7\u51FD\u6570\uFF0C\u8FD4\u56DE\u7ED9\u4E86res = calc(a/2) \u8FD9\u91CC</span></span>
<span class="line"><span style="color:#A6ACCD;">    calc(10)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    13-14\u96C6\u6CA1\u6709\u4ED4\u7EC6\u770B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,14),c=[e];function o(t,r,i,A,C,y){return a(),n("div",null,c)}const u=s(p,[["render",o]]);export{d as __pageData,u as default};
