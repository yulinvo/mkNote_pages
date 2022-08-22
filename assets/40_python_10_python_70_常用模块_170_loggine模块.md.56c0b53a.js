import{_ as s,c as n,o as a,b as l}from"./app.8608f89d.js";const D=JSON.parse(`{"title":"logger.debug('debug message')","description":"","frontmatter":{},"headers":[],"relativePath":"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/170_loggine\u6A21\u5757.md"}`),e={name:"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/170_loggine\u6A21\u5757.md"},p=l(`<p><strong>logging\u6A21\u5757(\u65E5\u5FD7\u6A21\u5757)</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">LOG_PATH=os.path.abspath(os.path.join(__file__,&#39;..&#39;))           #\u5728\u5F53\u524D\u6587\u4EF6\u4E2D\u62FC\u63A5\u8DEF\u5F84\uFF0C\u5728ipython\u4E2D\u6267\u884C__file__\u4F1A\u627E\u4E0D\u5230\u6587\u4EF6&gt;\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">logging.basicConfig(</span></span>
<span class="line"><span style="color:#A6ACCD;">	level=logging.INFO,</span></span>
<span class="line"><span style="color:#A6ACCD;">	format=&#39;%(asctime)s %(filename)s[line:%(lineno)d] %(levelname)s %(message)s&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">			#\u65F6\u95F4\u6233\u3001\u6587\u4EF6\u540D\u3001%(lineno)d\u65B9\u5F0F\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u683C\u5F0F\u5316\u3001\u65E5\u5FD7\u7EA7\u522B\u3001\u65E5\u5FD7\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">			#%(lineno)d  \u6BD4\u5982\u6253\u5370info\u4FE1\u606F\u7684\u4EE3\u7801\u5728test\u7684\u7B2C11\u884C\uFF0C\u6B64\u5904\u5C31\u4F1A\u663E\u793A test.py[line:11] INFO xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">	datefmt=&#39;%Y-%m-%d %H:%M:$S&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	filename=os.path.join(LOG_PATH,&#39;student.log&#39;),                  #\u65E5\u5FD7\u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">	filemode=&#39;a&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4EE3\u7801\u4E2D\u5B9A\u4E49\u65E5\u5FD7\u7EA7\u522B\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">	import loggine</span></span>
<span class="line"><span style="color:#A6ACCD;">	logger=loggine.getLogger(__name__)                  #\u5982\u679C\u662Fmain\u51FD\u6570\u5C31\u662Fmain\uFF0C\u5982\u679C\u4E0D\u662Fmain\u51FD\u6570\u5C31\u662F\u6A21\u5757\u7684\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">		#\u5BF9\u5E94\u4E86\u4E0A\u9762format\u7684filename\uFF0C\u6BD4\u5982\u5F53\u524D\u6587\u4EF6\u662Ftest.py\uFF0Cfilename\u5BF9\u5E94\u4F4D\u7F6E\u5C31\u662Ftest.py</span></span>
<span class="line"><span style="color:#A6ACCD;">		#\u4E5F\u53EF\u4EE5\u5199logger=loggine.getLogger(&#39;test&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">	logger.info(&#39;\u547D\u4EE4[%s]\u4E0D\u5B58\u5728&#39; %command)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u8FD8\u6709\u4E00\u79CD\u5E38\u7528\u65B9\u5F0F\uFF0C\u5C06INFO\u7684\u7EA7\u522B\u6253\u5230\u7EC8\u7AEF\u4E0A\uFF0C\u5927\u4E8EINFO\u7EA7\u522B\u7684\u5199\u5230\u6587\u4EF6\u91CC\uFF0C\u6559\u7A0B\u4E2D\u63D0\u4E86\u4E00\u4E0B\u4F46\u662F\u6CA1\u6709\u4ED4\u7EC6\u8BB2\u89E3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import logging</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#logging\u7684\u65E5\u5FD7\u53EF\u4EE5\u5206\u4E3Adebug\u3001info(\u6B63\u5E38)\u3001warning\u3001error\u3001critical(\u81F4\u547D)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E00\uFF1A\u76F4\u63A5\u8F93\u51FA\u5230\u5C4F\u5E55</span></span>
<span class="line"><span style="color:#A6ACCD;">logging.warning(&#39;nihao&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">logging.critical(&#39;Server id Down&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E8C\uFF1A\u628A\u65E5\u5FD7\u5199\u5165\u5230\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">logging.basicConfig(filename=&#39;example.log&#39;,level=logging.INFO,format=&#39;%(asctime)s %(message)s&#39;,datefmt=&#39;[%m/%d/%Y %I:%M:%S %p]&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">logging.debug(&#39;this message shoule go to the log file&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">logging.info(&#39;so should this&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">logging.warning(&#39;and this,too&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">logging.critical(&#39;and this,too&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E09\uFF1A\u540C\u65F6\u628A\u65E5\u5FD7\u6253\u5370\u5728\u5C4F\u5E55\u548C\u65E5\u5FD7\u6587\u4EF6\u91CC</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u751F\u6210logger\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">logger = logging.getLogger(&#39;TEST-LOG&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">logger.setLevel(logging.DEBUG)                              #\u5168\u5C40\u7684loglevel</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#\u751F\u6210\u8D1F\u8D23\u5C4F\u5E55\u8F93\u51FA\u7684 handle</span></span>
<span class="line"><span style="color:#A6ACCD;">ch = logging.StreamHandler()</span></span>
<span class="line"><span style="color:#A6ACCD;">ch.setLevel(logging.DEBUG)                                   #\u5C40\u90E8\u7684loglevel</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#\u751F\u6210\u6587\u4EF6\u8F93\u51FA\u7684handle</span></span>
<span class="line"><span style="color:#A6ACCD;">fh = logging.FileHandler(&#39;access.log&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">fh.setLevel(logging.WARNING)                                 #\u5C40\u90E8\u7684loglevel</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#\u521B\u5EFA\u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">formatter = logging.Formatter(&#39;%(asctime)s - %(name)s - %(levelname)s - %(message)s&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#\u5C06\u683C\u5F0F\u8D4B\u7ED9ch\u548Cfh</span></span>
<span class="line"><span style="color:#A6ACCD;">ch.setFormatter(formatter)</span></span>
<span class="line"><span style="color:#A6ACCD;">fh.setFormatter(formatter)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#\u5C06\u521B\u5EFA\u76842\u4E2Ahandle\u8D4B\u7ED9logger</span></span>
<span class="line"><span style="color:#A6ACCD;">logger.addHandler(ch)</span></span>
<span class="line"><span style="color:#A6ACCD;">logger.addHandler(fh)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">logger.debug(&#39;debug message&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">logger.info(&#39;info message&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">logger.warn(&#39;warn message&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">logger.error(&#39;error message&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">logger.critical(&#39;critical message&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),o=[p];function t(c,i,r,g,A,C){return a(),n("div",null,o)}const m=s(e,[["render",t]]);export{D as __pageData,m as default};
