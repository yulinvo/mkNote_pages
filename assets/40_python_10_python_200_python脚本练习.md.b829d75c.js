import{_ as s,c as n,o as a,b as l}from"./app.8608f89d.js";const D=JSON.parse('{"title":"\u53D1\u9001\u90AE\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53D1\u9001\u90AE\u4EF6","slug":"\u53D1\u9001\u90AE\u4EF6"},{"level":2,"title":"get \u8FDB\u7A0Bid","slug":"get-\u8FDB\u7A0Bid"},{"level":2,"title":"\u8BA1\u7B9750\u4E2A\u5B50\u7EBF\u7A0B\u5168\u90E8\u6267\u884C\u5B8C\u9700\u8981\u7684\u65F6\u95F4","slug":"\u8BA1\u7B9750\u4E2A\u5B50\u7EBF\u7A0B\u5168\u90E8\u6267\u884C\u5B8C\u9700\u8981\u7684\u65F6\u95F4"},{"level":2,"title":"\u7EA2\u7EFF\u706F\u6A21\u62DF","slug":"\u7EA2\u7EFF\u706F\u6A21\u62DF"},{"level":2,"title":"sockserver","slug":"sockserver"},{"level":2,"title":"socket \u7F16\u7A0B","slug":"socket-\u7F16\u7A0B"},{"level":2,"title":"\u6A21\u62DF\u8FDB\u5EA6\u6761","slug":"\u6A21\u62DF\u8FDB\u5EA6\u6761"},{"level":2,"title":"\u751F\u62104\u4F4D\u5305\u542B\u5B57\u6BCD\u7684\u52A8\u6001\u9A8C\u8BC1\u7801","slug":"\u751F\u62104\u4F4D\u5305\u542B\u5B57\u6BCD\u7684\u52A8\u6001\u9A8C\u8BC1\u7801"},{"level":2,"title":"\u5192\u6CE1\u6392\u5E8F\u6CD5","slug":"\u5192\u6CE1\u6392\u5E8F\u6CD5"},{"level":2,"title":"\u5217\u8868\u65CB\u8F6C90\u5EA6","slug":"\u5217\u8868\u65CB\u8F6C90\u5EA6"},{"level":2,"title":"yield\u7EC3\u4E60","slug":"yield\u7EC3\u4E60"},{"level":2,"title":"\u4F7F\u7528yield\u5B9E\u73B0\u5355\u7EBF\u7A0B\u4E2D\u7684\u5F02\u6B65\u5E76\u53D1\u6548\u679C","slug":"\u4F7F\u7528yield\u5B9E\u73B0\u5355\u7EBF\u7A0B\u4E2D\u7684\u5F02\u6B65\u5E76\u53D1\u6548\u679C"},{"level":2,"title":"str\u7684format\u65B9\u6CD5\uFF08args,*kwargs\uFF09","slug":"str\u7684format\u65B9\u6CD5\uFF08-args-kwargs\uFF09"},{"level":2,"title":"\u6DF1\u62F7\u8D1D\u4E0E\u6D45\u62F7\u8D1D","slug":"\u6DF1\u62F7\u8D1D\u4E0E\u6D45\u62F7\u8D1D"},{"level":2,"title":"\u5BFB\u627E\u5DEE\u5F02","slug":"\u5BFB\u627E\u5DEE\u5F02"},{"level":2,"title":"\u83F2\u6CE2\u90A3\u5207\u6570\u5217","slug":"\u83F2\u6CE2\u90A3\u5207\u6570\u5217"},{"level":2,"title":"dict\u5B57\u5178\u7EC3\u4E60","slug":"dict\u5B57\u5178\u7EC3\u4E60"},{"level":2,"title":"\u7F16\u5199\u767B\u5F55\u63A5\u53E3","slug":"\u7F16\u5199\u767B\u5F55\u63A5\u53E3"}],"relativePath":"40_python/10_python/200_python\u811A\u672C\u7EC3\u4E60.md"}'),p={name:"40_python/10_python/200_python\u811A\u672C\u7EC3\u4E60.md"},e=l(`<h2 id="\u53D1\u9001\u90AE\u4EF6" tabindex="-1">\u53D1\u9001\u90AE\u4EF6 <a class="header-anchor" href="#\u53D1\u9001\u90AE\u4EF6" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#coding:utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;">import  smtplib</span></span>
<span class="line"><span style="color:#A6ACCD;">from  email.mime.text import  MIMEText</span></span>
<span class="line"><span style="color:#A6ACCD;">from email.utils import formataddr</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">def mail():</span></span>
<span class="line"><span style="color:#A6ACCD;">    ret=True</span></span>
<span class="line"><span style="color:#A6ACCD;">    try:</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg=MIMEText(&#39;\u90AE\u4EF6\u5185\u5BB9&#39;,&#39;plain&#39;,&#39;utf-8&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg[&#39;From&#39;] = formataddr([&#39;\u90AE\u7BB1\u6807\u8BC6&#39;,&#39;zhangwanit@163.com&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg[&#39;To&#39;] = formataddr([&#39;\u96E8\u6797&#39;,&#39;729100483@qq.com&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg[&#39;Subject&#39;] = &#39;\u90AE\u4EF6\u4E3B\u9898&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        server = smtplib.SMTP(&#39;smtp.163.com&#39;,25)</span></span>
<span class="line"><span style="color:#A6ACCD;">        server.login(&#39;zhangwanit@163.com&#39;,&#39;zhangwanit163&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        server.sendmail(&#39;zhangwanit@163.com&#39;,[&#39;729100483@qq.com&#39;,&#39;zhangwanit@163.com&#39;],msg.as_string())</span></span>
<span class="line"><span style="color:#A6ACCD;">        server.quit()</span></span>
<span class="line"><span style="color:#A6ACCD;">    except Exception:</span></span>
<span class="line"><span style="color:#A6ACCD;">        ret=False</span></span>
<span class="line"><span style="color:#A6ACCD;">    return ret</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ret=mail()</span></span>
<span class="line"><span style="color:#A6ACCD;">if ret:</span></span>
<span class="line"><span style="color:#A6ACCD;">    print &#39;\u53D1\u9001\u6210\u529F&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">else:</span></span>
<span class="line"><span style="color:#A6ACCD;">    print &#39;\u53D1\u9001\u5931\u8D25&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">******************************************************************************************************************************************************</span></span>
<span class="line"><span style="color:#A6ACCD;">******************************************************************************************************************************************************</span></span>
<span class="line"><span style="color:#A6ACCD;">******************************************************************************************************************************************************</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#coding:utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;">import  smtplib</span></span>
<span class="line"><span style="color:#A6ACCD;">from  email.mime.text import  MIMEText</span></span>
<span class="line"><span style="color:#A6ACCD;">from email.utils import formataddr</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">def mail(user1,user2,mailtext):               #\u5F62\u53C2</span></span>
<span class="line"><span style="color:#A6ACCD;">    ret=True</span></span>
<span class="line"><span style="color:#A6ACCD;">    try:</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg=MIMEText(mailtext,&#39;plain&#39;,&#39;utf-8&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg[&#39;From&#39;] = formataddr([&#39;\u90AE\u7BB1\u6807\u8BC6&#39;,&#39;zhangwanit@163.com&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg[&#39;To&#39;] = formataddr([&#39;\u96E8\u6797&#39;,&#39;729100483@qq.com&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg[&#39;Subject&#39;] = &#39;\u90AE\u4EF6\u4E3B\u9898&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        server = smtplib.SMTP(&#39;smtp.163.com&#39;,25)</span></span>
<span class="line"><span style="color:#A6ACCD;">        server.login(&#39;zhangwanit@163.com&#39;,&#39;zhangwanit163&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        server.sendmail(&#39;zhangwanit@163.com&#39;,[user1,user2],msg.as_string())               #\u6B64\u5904\u867D\u7136\u6709\u4E24\u4E2A\u63A5\u53D7\u8005\uFF0C\u4F46\u662F\u662F\u5355\u72EC\u53D1\u7684\uFF0C\u5728\u6536\u4EF6\u4EBA\u91CC\u5F7C\u6B64\u770B\u4E0D\u5230</span></span>
<span class="line"><span style="color:#A6ACCD;">        server.quit()</span></span>
<span class="line"><span style="color:#A6ACCD;">    except Exception:</span></span>
<span class="line"><span style="color:#A6ACCD;">        ret=False</span></span>
<span class="line"><span style="color:#A6ACCD;">    return ret</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ret=mail(&#39;729100483@qq.com&#39;,&#39;shanhuifu1222@163.com&#39;,&#39;\u8FD9\u662F\u90AE\u4EF6\u6B63\u6587&#39;)          #\u5B9E\u53C2</span></span>
<span class="line"><span style="color:#A6ACCD;">if ret:</span></span>
<span class="line"><span style="color:#A6ACCD;">    print &#39;\u53D1\u9001\u6210\u529F&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">else:</span></span>
<span class="line"><span style="color:#A6ACCD;">    print &#39;\u53D1\u9001\u5931\u8D25&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="get-\u8FDB\u7A0Bid" tabindex="-1">get \u8FDB\u7A0Bid <a class="header-anchor" href="#get-\u8FDB\u7A0Bid" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">__author__ = &quot;Alex Li&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">from multiprocessing import Process</span></span>
<span class="line"><span style="color:#A6ACCD;">import os</span></span>
<span class="line"><span style="color:#A6ACCD;">def info(title):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(title)</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&#39;module name:&#39;, __name__)</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&#39;parent process:&#39;, os.getppid())</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&#39;process id:&#39;, os.getpid())</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&quot;\\n\\n&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">def f(name):</span></span>
<span class="line"><span style="color:#A6ACCD;">    info(&#39;\\033[31;1mcalled from child process function f\\033[0m&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&#39;hello&#39;, name)</span></span>
<span class="line"><span style="color:#A6ACCD;">if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">    info(&#39;\\033[32;1mmain process line\\033[0m&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    p = Process(target=f, args=(&#39;bob&#39;,))</span></span>
<span class="line"><span style="color:#A6ACCD;">    p.start()</span></span>
<span class="line"><span style="color:#A6ACCD;">    # p.join()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u8BA1\u7B9750\u4E2A\u5B50\u7EBF\u7A0B\u5168\u90E8\u6267\u884C\u5B8C\u9700\u8981\u7684\u65F6\u95F4" tabindex="-1">\u8BA1\u7B9750\u4E2A\u5B50\u7EBF\u7A0B\u5168\u90E8\u6267\u884C\u5B8C\u9700\u8981\u7684\u65F6\u95F4 <a class="header-anchor" href="#\u8BA1\u7B9750\u4E2A\u5B50\u7EBF\u7A0B\u5168\u90E8\u6267\u884C\u5B8C\u9700\u8981\u7684\u65F6\u95F4" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#coding:utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;">import threading,time</span></span>
<span class="line"><span style="color:#A6ACCD;">def run(n):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print &#39;task&#39;,n</span></span>
<span class="line"><span style="color:#A6ACCD;">    time.sleep(2)</span></span>
<span class="line"><span style="color:#A6ACCD;">    print &#39;task_done&#39;,n</span></span>
<span class="line"><span style="color:#A6ACCD;">start_time = time.time()</span></span>
<span class="line"><span style="color:#A6ACCD;">t_obj= []</span></span>
<span class="line"><span style="color:#A6ACCD;">for i in  range(50):</span></span>
<span class="line"><span style="color:#A6ACCD;">    t = threading.Thread(target=run,args=(&#39;t-%s&#39; %i,))</span></span>
<span class="line"><span style="color:#A6ACCD;">  t.setDaemon(True) #\u5C06\u5F53\u524D\u7EBF\u7A0B\u8BBE\u7F6E\u4E3A\u5B88\u62A4\u7EBF\u7A0B\uFF0C\u4E00\u5B9A\u8981\u5728start\u4E4B\u524D\u8BBE\u7F6E    \u5B88\u62A4\u7EBF\u7A0B\u7684\u610F\u601D\u662F\u5F53\u4E3B\u7EBF\u7A0B\u7ED3\u675F\u540E\uFF0C\u5B50\u7EBF\u7A0B\u4E5F\u5F3A\u5236\u7ED3\u675F\u4E86\uFF0C\u6548\u679C\u662F\u52A0\u4E0A\u8FD9\u53E5\u540Efun\u51FD\u6570\u91CC\u7684print &#39;task_done&#39;,\u4E0D\u4F1A\u6267\u884C\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">    t.start()                   #\u5B50\u7EBF\u7A0B\u6267\u884C\u5B8Crun\u51FD\u6570\u540E\u5C31\u9000\u51FA\u4E86\uFF0C\u4E0D\u4F1A\u4E00\u76F4\u6302\u7740</span></span>
<span class="line"><span style="color:#A6ACCD;">#t.join()               #\u6B64\u65F6t\u662F\u6700\u540E\u7684i\u4E3A49\u7684\u65F6\u5019\u7684t\uFF0C\u4E3A\u4EC0\u4E48t\u80FD\u4ECEfor\u5FAA\u73AF\u4F20\u9012\u51FA\u6765\u5462\uFF1F\uFF1F\uFF1F  \u539F\u56E0\uFF1A\u51FD\u6570\u6267\u884C\u5B8C\u53D8\u91CF\u5C31\u91CA\u653E\u4E86\uFF0C\u4F46\u6B64\u5904\u662F\u5FAA\u73AF\u4E0D\u662F\u51FD\u6570\uFF0C\u6267\u884C\u5B8C\u540E\u53D8\u91CF\u4E0D\u4F1A\u91CA\u653E</span></span>
<span class="line"><span style="color:#A6ACCD;">    t_obj.append(t)</span></span>
<span class="line"><span style="color:#A6ACCD;">print &#39;t_onj:&#39; ,t_obj</span></span>
<span class="line"><span style="color:#A6ACCD;">for t in t_obj:</span></span>
<span class="line"><span style="color:#A6ACCD;">    t.join()             #\u5B50\u7EBF\u7A0B\u6CA1\u6709\u6267\u884C\u5B8C\u4E4B\u524D\uFF0C\u4E3B\u7EBF\u7A0B\u4F1A\u5361\u4F4F\uFF1B\u5728\u6B64\u5904\u7684\u610F\u601D\u662F50\u4E2A\u5B50\u7EBF\u7A0B\u5168\u90E8\u6267\u884C\u5B8C\u540E\uFF0C\u624D\u6267\u884C\u4E3B\u7EBF\u7A0B\u540E\u9762\u7684\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">print &#39;cost:&#39;,time.time() - start_time ,threading.current_thread(),threading.active_count()         #\u8FD9\u91CC\u4E0D\u4F1A\u5F97\u5230\u6240\u6709\u5B50\u8FDB\u7A0B\u6267\u884C\u5B8C\u51FD\u6570run\u540E\u4E00\u5171\u7528\u4E86\u591A\u5C11\u65F6\u95F4\uFF0C\u5F97\u5230\u7684\u662F\u542F\u52A8\u5B8C\u6240\u6709\u5B50\u7EBF\u7A0B\u7528\u7684\u65F6\u95F4\uFF0C\u7EBF\u7A0B\u548C\u5B50\u7EBF\u7A0B\u4E4B\u95F4\u662F\u72EC\u7ACB\u7684\uFF0Cthreading.current_thread()\u4E3A\u5F53\u524D\u8FDB\u7A0B\u6240\u5728\u4F4D\u7F6E\uFF08\u4E3B\u7EBF\u7A0B\u4F1A\u63D0\u793A_MainThread(MainThread\uFF09\uFF0Cthreading.active_count()\u662F\u7EDF\u8BA1\u5F53\u524D\u6D3B\u8DC3\u7684\u8FDB\u7A0B\u4E2A\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7EA2\u7EFF\u706F\u6A21\u62DF" tabindex="-1">\u7EA2\u7EFF\u706F\u6A21\u62DF <a class="header-anchor" href="#\u7EA2\u7EFF\u706F\u6A21\u62DF" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#coding:utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;">import  threading,time</span></span>
<span class="line"><span style="color:#A6ACCD;">event = threading.Event()</span></span>
<span class="line"><span style="color:#A6ACCD;">def lighter():</span></span>
<span class="line"><span style="color:#A6ACCD;">    count = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    event.set()         #\u5148\u8BBE\u7F6E\u7EFF\u706F</span></span>
<span class="line"><span style="color:#A6ACCD;">    while True:</span></span>
<span class="line"><span style="color:#A6ACCD;">        if count &gt; 5 and count &lt; 10:        #\u6539\u4E3A\u7EA2\u706F</span></span>
<span class="line"><span style="color:#A6ACCD;">            event.clear()                    #\u628A\u6807\u5FD7\u4F4D\u6E05\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">            print &#39;\\033[41;1m red light is on...\\033[0m&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        elif count &gt; 10:</span></span>
<span class="line"><span style="color:#A6ACCD;">            event.set()                      #\u53D8\u7EFF\u706F</span></span>
<span class="line"><span style="color:#A6ACCD;">            count = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">        else:</span></span>
<span class="line"><span style="color:#A6ACCD;">            print &#39;\\033[42;1m green light is on...\\033[0m&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        time.sleep(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">        count += 1</span></span>
<span class="line"><span style="color:#A6ACCD;">def car(name):</span></span>
<span class="line"><span style="color:#A6ACCD;">    while True:</span></span>
<span class="line"><span style="color:#A6ACCD;">        if event.is_set():          #\u4EE3\u8868\u7EFF\u706F\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">            print &#39;[%s] running...&#39;%name</span></span>
<span class="line"><span style="color:#A6ACCD;">            time.sleep(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">        else:</span></span>
<span class="line"><span style="color:#A6ACCD;">            print &#39;[%s] sees red light ,waiting...&#39;% name</span></span>
<span class="line"><span style="color:#A6ACCD;">            event.wait()</span></span>
<span class="line"><span style="color:#A6ACCD;">            print &#39;\\033[34;1m [%s] green light is on,start going... \\033[0m&#39;% name</span></span>
<span class="line"><span style="color:#A6ACCD;">light = threading.Thread(target=lighter,)</span></span>
<span class="line"><span style="color:#A6ACCD;">light.start()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">car1 = threading.Thread(target=car,args=(&#39;Tesla&#39;),)</span></span>
<span class="line"><span style="color:#A6ACCD;">car1.start()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="sockserver" tabindex="-1">sockserver <a class="header-anchor" href="#sockserver" aria-hidden="true">#</a></h2><p><strong>server\u7AEF</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#coding:utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;">import SocketServer,socket</span></span>
<span class="line"><span style="color:#A6ACCD;">class MyTCPHandle(SocketServer.BaseRequestHandler):</span></span>
<span class="line"><span style="color:#A6ACCD;">    def handle(self):                       #\u8DDF\u5BA2\u6237\u7AEF\u6240\u6709\u7684\u4EA4\u4E92\u8FC7\u7A0B\u90FD\u662Fhandle\u51FD\u6570\u5904\u7406\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">        while True:</span></span>
<span class="line"><span style="color:#A6ACCD;">            try:</span></span>
<span class="line"><span style="color:#A6ACCD;">                self.data = self.request.recv(1024).strip()       # self.request\uFF1A\u5BA2\u6237\u7AEF\u6BCF\u4E00\u4E2A\u8BF7\u6C42\u8FC7\u6765\u90FD\u4F1AMyTCPHandle\u5B9E\u4F8B\u5316; \u5BA2\u6237\u7AEF\u4E0D\u4F20\u9012\u6570\u636E recv\u5C31\u5728\u8FD9\u7B49\u7740\uFF0C\u7B49\u5F85\u65F6\u9ED8\u8BA4\u662F\u963B\u585E\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">                print &#39;{} wrote:&#39;.format(self.client_address[0])            # self.client_address[0] \u5BA2\u6237\u7AEF\u7684ip\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">                print self.data</span></span>
<span class="line"><span style="color:#A6ACCD;">                if not self.data:                   #\u5BA2\u6237\u7AEF\u4E0D\u662F\u4E0D\u4F20\u4E86\uFF0C\u4E0D\u4F20\u4E86\u4F1A\u963B\u585E\u5728self.request.recv(1024).strip\uFF0C\u6CA1\u6709\u963B\u585E\u53C8\u6536\u5230\u7684\u6570\u636E\u662F\u7A7A \u8868\u793A\u65AD\u5F00\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">                    print &#39;\u5BA2\u6237\u7AEF\u5DF2\u65AD\u5F00&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    break                           # break\u8FD9\u4E2A\u5B9E\u4F8B\u5C31\u88AB\u91CA\u653E\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">                self.request.sendall(str(self.data.upper()))   # sendall\u91CD\u590D\u8C03\u7528send\uFF0C\u6B64\u5904\u4E5F\u53EF\u4EE5\u4F7F\u7528send</span></span>
<span class="line"><span style="color:#A6ACCD;">            except Exception as e:</span></span>
<span class="line"><span style="color:#A6ACCD;">                print &#39;err:&#39;,e</span></span>
<span class="line"><span style="color:#A6ACCD;">                break</span></span>
<span class="line"><span style="color:#A6ACCD;">if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">    HOST,PORT = &#39;localhost&#39;,9999</span></span>
<span class="line"><span style="color:#A6ACCD;">    server = SocketServer.TCPServer((HOST,PORT),MyTCPHandle)</span></span>
<span class="line"><span style="color:#A6ACCD;">    # server = SocketServer.ThreadingTCPServer((HOST,PORT),MyTCPHandle)                #\u591A\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">    # server = SocketServer.ForkingTCPServer((HOST,PORT),MyTCPHandle)             #\u591A\u8FDB\u7A0B\uFF08winodws\u4E0A\u6709\u70B9\u95EE\u9898\uFF0Clinux\u4E0A\u6CA1\u95EE\u9898\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">    server.serve_forever()                         # \u8FD9\u4E2A\u53EF\u4EE5\u540C\u65F6\u5904\u7406\u591A\u4E2A\u8BF7\u6C42\uFF0C\u591A\u7EBF\u7A0B\uFF1F\uFF1F\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>client\u7AEF</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#coding:utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;">import socket</span></span>
<span class="line"><span style="color:#A6ACCD;">client = socket.socket(socket.AF_INET,socket.SOCK_STREAM)</span></span>
<span class="line"><span style="color:#A6ACCD;">client.connect((&#39;localhost&#39;,9999))</span></span>
<span class="line"><span style="color:#A6ACCD;">while True:</span></span>
<span class="line"><span style="color:#A6ACCD;">    cmd = raw_input(&#39;&gt;&gt;&gt;:&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    if len(cmd) == 0: continue</span></span>
<span class="line"><span style="color:#A6ACCD;">    client.send(str(cmd))</span></span>
<span class="line"><span style="color:#A6ACCD;">    data = client.recv(1024)</span></span>
<span class="line"><span style="color:#A6ACCD;">    print data</span></span>
<span class="line"><span style="color:#A6ACCD;">client.close()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="socket-\u7F16\u7A0B" tabindex="-1">socket \u7F16\u7A0B <a class="header-anchor" href="#socket-\u7F16\u7A0B" aria-hidden="true">#</a></h2><p><strong>server \u7AEF</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#coding:utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;">import socket,os</span></span>
<span class="line"><span style="color:#A6ACCD;">server = socket.socket()</span></span>
<span class="line"><span style="color:#A6ACCD;">server.bind((&#39;localhost&#39;,9999))</span></span>
<span class="line"><span style="color:#A6ACCD;">server.listen(5)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">while True:</span></span>
<span class="line"><span style="color:#A6ACCD;">conn,addr = server.accept()</span></span>
<span class="line"><span style="color:#A6ACCD;">print &#39;New Conn :&#39;,addr</span></span>
<span class="line"><span style="color:#A6ACCD;">while True:</span></span>
<span class="line"><span style="color:#A6ACCD;">print &#39;\u7B49\u5F85\u65B0\u6307\u4EE4&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">data = conn.recv(1024)</span></span>
<span class="line"><span style="color:#A6ACCD;">if not data:</span></span>
<span class="line"><span style="color:#A6ACCD;">print &#39;\u5BA2\u6237\u7AEF\u5DF2\u65AD\u5F00&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">break</span></span>
<span class="line"><span style="color:#A6ACCD;">print &#39;\u6267\u884C\u6307\u4EE4\uFF1A&#39;,data</span></span>
<span class="line"><span style="color:#A6ACCD;">cmd_res = os.popen(data.decode()).read()</span></span>
<span class="line"><span style="color:#A6ACCD;">print &#39;before send :&#39;,len(cmd_res)</span></span>
<span class="line"><span style="color:#A6ACCD;">if len(cmd_res) == 0:</span></span>
<span class="line"><span style="color:#A6ACCD;">cmd_res = &#39;cmd has no output...&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">conn.send( str(len(cmd_res.encode())).encode(&#39;utf-8&#39;) )</span></span>
<span class="line"><span style="color:#A6ACCD;">#time.sleep(0.5)                #\u9632\u6B62\u7C98\u5305\uFF0C\u4E0A\u4E0B\u76842\u4E2Asend\u56E0\u4E3A\u662F\u7ACB\u5373\u6267\u884C\uFF0C\uFF08\u7F13\u5B58\u533A\u6CA1\u6EE1\u7684\u65F6\u5019\uFF09\u4F1A\u88AB\u5F53\u6210\u4E00\u4E2A\u5305\u53D1\u9001\u8FC7\u53BB</span></span>
<span class="line"><span style="color:#A6ACCD;">client_ack = conn.recv(1024)                  #\u9632\u6B62\u7C98\u5305\u7684\u89E3\u51B3\u65B9\u6CD5\uFF0C\u7B49\u5F85\u5BA2\u6237\u7AEF\u786E\u8BA4</span></span>
<span class="line"><span style="color:#A6ACCD;">conn.send(cmd_res.encode(&#39;utf-8&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">print &#39;send done&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">server.close()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>client \u7AEF</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#coding:utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;">import socket</span></span>
<span class="line"><span style="color:#A6ACCD;">client = socket.socket()</span></span>
<span class="line"><span style="color:#A6ACCD;">client.connect((&#39;localhost&#39;,9999))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">while True:</span></span>
<span class="line"><span style="color:#A6ACCD;">cmd = raw_input(&#39;&gt;&gt;&gt;:&#39;).strip()</span></span>
<span class="line"><span style="color:#A6ACCD;">if len(cmd) == 0:continue</span></span>
<span class="line"><span style="color:#A6ACCD;">client.send(cmd.encode(&#39;utf-8&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">cmd_res_size = client.recv(1024)</span></span>
<span class="line"><span style="color:#A6ACCD;">print &#39;\u547D\u4EE4\u7ED3\u679C\u5927\u5C0F\uFF1A&#39;,cmd_res_size</span></span>
<span class="line"><span style="color:#A6ACCD;">client.send(&#39;\u51C6\u5907\u597D\u63A5\u6536\u6570\u636E&#39;.encode(&#39;utf-8&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">received_size = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">received_data = b&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">while received_size &lt; int(cmd_res_size.decode()):</span></span>
<span class="line"><span style="color:#A6ACCD;">data = client.recv(1024)</span></span>
<span class="line"><span style="color:#A6ACCD;">received_size += len(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">received_data += data</span></span>
<span class="line"><span style="color:#A6ACCD;">else:</span></span>
<span class="line"><span style="color:#A6ACCD;">print &#39;cmd res received done ...&#39;,received_size</span></span>
<span class="line"><span style="color:#A6ACCD;">print received_data.decode()</span></span>
<span class="line"><span style="color:#A6ACCD;">client.close()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6A21\u62DF\u8FDB\u5EA6\u6761" tabindex="-1">\u6A21\u62DF\u8FDB\u5EA6\u6761 <a class="header-anchor" href="#\u6A21\u62DF\u8FDB\u5EA6\u6761" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import  sys</span></span>
<span class="line"><span style="color:#A6ACCD;">import time</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for i in range(10):</span></span>
<span class="line"><span style="color:#A6ACCD;">    sys.stdout.write(&#39;#&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    sys.stdout.flush()              #\u65B0\u7248\u672C\u7684\u597D\u50CF\u4E0D\u7528\u8FD9\u6761\u547D\u4EE4\u4E5F\u53EF\u4EE5\uFF0C\u8001\u7248\u672C\u7684\u597D\u50CF\u662F\u5168\u90E8\u5199\u5230\u5185\u5B58\u540E\u5728\u4E00\u6B21\u884C\u8F93\u51FA\u5230\u524D\u7AEF</span></span>
<span class="line"><span style="color:#A6ACCD;">    time.sleep(0.5)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u751F\u62104\u4F4D\u5305\u542B\u5B57\u6BCD\u7684\u52A8\u6001\u9A8C\u8BC1\u7801" tabindex="-1">\u751F\u62104\u4F4D\u5305\u542B\u5B57\u6BCD\u7684\u52A8\u6001\u9A8C\u8BC1\u7801 <a class="header-anchor" href="#\u751F\u62104\u4F4D\u5305\u542B\u5B57\u6BCD\u7684\u52A8\u6001\u9A8C\u8BC1\u7801" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import  random</span></span>
<span class="line"><span style="color:#A6ACCD;">checkcode=&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">for i in range(4):</span></span>
<span class="line"><span style="color:#A6ACCD;">    current=random.randrange(0,4)</span></span>
<span class="line"><span style="color:#A6ACCD;">    if current != i:</span></span>
<span class="line"><span style="color:#A6ACCD;">        temp=chr(random.randint(65,90))</span></span>
<span class="line"><span style="color:#A6ACCD;">    else:</span></span>
<span class="line"><span style="color:#A6ACCD;">        temp=random.randint(0,9)</span></span>
<span class="line"><span style="color:#A6ACCD;">    checkcode += str(temp)</span></span>
<span class="line"><span style="color:#A6ACCD;">print checkcode</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5192\u6CE1\u6392\u5E8F\u6CD5" tabindex="-1">\u5192\u6CE1\u6392\u5E8F\u6CD5 <a class="header-anchor" href="#\u5192\u6CE1\u6392\u5E8F\u6CD5" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">data=[10,4,33,21,54,3,8,11,5,22,2,1,17,13,6]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">i=0</span></span>
<span class="line"><span style="color:#A6ACCD;">tmp=&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">while i &lt; len(data)-1:</span></span>
<span class="line"><span style="color:#A6ACCD;">    j=i+1</span></span>
<span class="line"><span style="color:#A6ACCD;">    while  j&lt;len(data):</span></span>
<span class="line"><span style="color:#A6ACCD;">        if data[i] &gt;data[j]:</span></span>
<span class="line"><span style="color:#A6ACCD;">            tmp=data[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">            data[i]=data[j]</span></span>
<span class="line"><span style="color:#A6ACCD;">            data[j]=tmp</span></span>
<span class="line"><span style="color:#A6ACCD;">        j += 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    i += 1</span></span>
<span class="line"><span style="color:#A6ACCD;">print data</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5217\u8868\u65CB\u8F6C90\u5EA6" tabindex="-1">\u5217\u8868\u65CB\u8F6C90\u5EA6 <a class="header-anchor" href="#\u5217\u8868\u65CB\u8F6C90\u5EA6" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">a= [[i for i in range(4)] for j in range(4)]</span></span>
<span class="line"><span style="color:#A6ACCD;">print len(a)</span></span>
<span class="line"><span style="color:#A6ACCD;">for i in range(len(a)):</span></span>
<span class="line"><span style="color:#A6ACCD;">    b=[a[i][i] for row in range(4)]</span></span>
<span class="line"><span style="color:#A6ACCD;">    print b</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="yield\u7EC3\u4E60" tabindex="-1">yield\u7EC3\u4E60 <a class="header-anchor" href="#yield\u7EC3\u4E60" aria-hidden="true">#</a></h2><p>\u7B80\u5355\u7684\u6A21\u62DFATM\u8FC7\u7A0B\uFF08\u6BCF\u6B21\u56FA\u5B9A\u53D6\u51FA100\u5143\uFF09</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">def cash_money(amount):</span></span>
<span class="line"><span style="color:#A6ACCD;">    while amount &gt; 0:</span></span>
<span class="line"><span style="color:#A6ACCD;">        amount -= 100</span></span>
<span class="line"><span style="color:#A6ACCD;">        yield 100               #\u6267\u884C\u5230yield\u7A0B\u5E8F\u5C31\u4E2D\u65AD\u6267\u884C\u4E86\uFF0C100\u662F\u6267\u884Catm.next()\u65F6\u8FD4\u56DE100,\u63A5\u6536\u503C\u901A\u8FC7\u522B\u4EBA\u7684send\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">        print &#39;\u53C8\u6765\u53D6\u94B1\u4E86\uFF01&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">atm=cash_money(500)     #atm\u662F\u4E00\u4E2A\u751F\u6210\u5668\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">print type(atm)          #\u8F93\u51FA\u7ED3\u679C\uFF1A&lt;type &#39;generator&#39;&gt; ,\u800Ctype(cash_money)\u53EA\u662F\u4E00\u4E2A\u666E\u901A\u51FD\u6570&lt;type &#39;function&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">print atm.next()         #\u5B9E\u9645\u73AF\u5883\u4E2D\u597D\u50CF\u4E0D\u592A\u5E38\u7528print next\u8FD9\u79CD\u5427\uFF0C\u611F\u89C9\u6CA1\u4EC0\u4E48\u7528\uFF1A1\uFF0C\u9700\u8981\u4E0A\u9762yield\u8FD4\u56DE  2\uFF0C\u8FD4\u56DE\u56FA\u5B9A\u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">print atm.next()</span></span>
<span class="line"><span style="color:#A6ACCD;">print atm.next()</span></span>
<span class="line"><span style="color:#A6ACCD;">print &#39;\u51FA\u53BB\u770B\u7535\u5F71\uFF01&#39;     #\u5B9E\u73B0\u5F02\u6B65,\u4FDD\u5B58\u51FD\u6570\u6267\u884C\u8FC7\u7A0B\u4E2D\u7684\u4E2D\u65AD\u72B6\u6001,\u968F\u4FBF\u8DF3\u51FA\u3001\u8DF3\u5165\u4E0A\u9762\u7684while\u5FAA\u73AF</span></span>
<span class="line"><span style="color:#A6ACCD;">print atm.next()</span></span>
<span class="line"><span style="color:#A6ACCD;">print atm.next()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u624B\u5DE5\u6307\u5B9A\u6BCF\u6B21\u53D6\u51FA\u591A\u5C11</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#coding:utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;">import  time</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">def cash_money(amount):</span></span>
<span class="line"><span style="color:#A6ACCD;">    zonghe=0</span></span>
<span class="line"><span style="color:#A6ACCD;">    while amount-zonghe &gt; 0:</span></span>
<span class="line"><span style="color:#A6ACCD;">        duoshao = yield</span></span>
<span class="line"><span style="color:#A6ACCD;">        # amount -= 100</span></span>
<span class="line"><span style="color:#A6ACCD;">        zonghe += duoshao</span></span>
<span class="line"><span style="color:#A6ACCD;">        print &#39;quchu %s yuan ,shengyu %s&#39;% (duoshao,amount-zonghe)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">atm=cash_money(1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">atm.next()</span></span>
<span class="line"><span style="color:#A6ACCD;"># atm.next()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">atm.send(100)</span></span>
<span class="line"><span style="color:#A6ACCD;">atm.send(200)</span></span>
<span class="line"><span style="color:#A6ACCD;">atm.send(300)</span></span>
<span class="line"><span style="color:#A6ACCD;">atm.send(50)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4F7F\u7528yield\u5B9E\u73B0\u5355\u7EBF\u7A0B\u4E2D\u7684\u5F02\u6B65\u5E76\u53D1\u6548\u679C" tabindex="-1">\u4F7F\u7528yield\u5B9E\u73B0\u5355\u7EBF\u7A0B\u4E2D\u7684\u5F02\u6B65\u5E76\u53D1\u6548\u679C <a class="header-anchor" href="#\u4F7F\u7528yield\u5B9E\u73B0\u5355\u7EBF\u7A0B\u4E2D\u7684\u5F02\u6B65\u5E76\u53D1\u6548\u679C" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#coding:utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;">import  time</span></span>
<span class="line"><span style="color:#A6ACCD;">def consumer(name):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print &#39;%s \u51C6\u5907\u5403\u5305\u5B50\u4E86!&#39; %name</span></span>
<span class="line"><span style="color:#A6ACCD;">    while True:                    #\u4E3A\u4EC0\u4E48\u9700\u8981\u4E00\u4E2A\u6B7B\u5FAA\u73AF\uFF1F\uFF1F\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">        baozi = yield 100          #\u5B9E\u9645\u6CA1\u6709100\uFF0C\u4F46\u662F\u52A0\u4E0A100 \u5982\u679C\u4E0D\u6267\u884Cprint c1.next()\u6216\u662Fc2.next()\u770B\u4E0D\u51FA\u533A\u522B\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;">        print &#39;\u5305\u5B50\u3010%s\u3011\u6765\u4E86\uFF0C\u88AB\u3010%s\u3011\u5403\u4E86\uFF01&#39;%(baozi,name)     #\u4E0D\u52A0()\u63D0\u793ATypeError: not enough arguments for format string</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">def produce(name):</span></span>
<span class="line"><span style="color:#A6ACCD;">    c1=consumer(&#39;A&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    c2=consumer(&#39;B&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    c1.next()</span></span>
<span class="line"><span style="color:#A6ACCD;">    c2.next()</span></span>
<span class="line"><span style="color:#A6ACCD;">    c1.next()</span></span>
<span class="line"><span style="color:#A6ACCD;">    c2.next()</span></span>
<span class="line"><span style="color:#A6ACCD;">    print &quot;\u8001\u5B50\u5F00\u59CB\u51C6\u5907\u505A\u5305\u5B50\u4E86\uFF01&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    for i in range(3):</span></span>
<span class="line"><span style="color:#A6ACCD;">        time.sleep(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">        print &quot;\u505A\u4E862\u4E2A\u5305\u5B50\uFF01&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        c1.send(i)               #\u4E0D\u5149\u662Fnext()\u53EF\u4EE5\u4E2D\u65AD\uFF0Csend()\u4E5F\u53EF\u4EE5\u4E2D\u65AD</span></span>
<span class="line"><span style="color:#A6ACCD;">        c2.send(i)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">produce(&#39;alex &#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="str\u7684format\u65B9\u6CD5\uFF08-args-kwargs\uFF09" tabindex="-1">str\u7684format\u65B9\u6CD5\uFF08*args,**kwargs\uFF09 <a class="header-anchor" href="#str\u7684format\u65B9\u6CD5\uFF08-args-kwargs\uFF09" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">name=&#39;{0} is {1} years old!&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">xx=[&#39;tom&#39;,19]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">print name.format(xx)     #\u4F1A\u63D0\u793A\u9519\u8BEFIndexError: tuple index out of range\uFF0C\u539F\u56E0\u662F[&#39;tom&#39;,19]\u4F5C\u4E3Atuple\u7684\u4E00\u4E2A\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">print name.format(*xx)     #</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">name=&#39;{0} is {1} years old!&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">xx=[&#39;tom&#39;,19]</span></span>
<span class="line"><span style="color:#A6ACCD;">#print name.format(&#39;tom&#39;,19)          #\u6309\u7167\u987A\u5E8F\u8D4B\u503C\u7ED9{0}\uFF0C{1}</span></span>
<span class="line"><span style="color:#A6ACCD;">print name.format(*xx)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">name=&#39;{name} is {age} old!&#39;          #\u4F20\u9012\u5B57\u5178\u7684\u65F6\u5019\uFF0C\u6B64\u5904\u4E0D\u80FD\u4F7F\u75280\u30011\uFF0C\u8981\u4F7F\u7528key</span></span>
<span class="line"><span style="color:#A6ACCD;">d={&#39;name&#39;:&#39;jim&#39;,&#39;age&#39;:19}</span></span>
<span class="line"><span style="color:#A6ACCD;">print name.format(**d)</span></span>
<span class="line"><span style="color:#A6ACCD;"># print name.format(name=&#39;jim&#39;,age=&#39;19&#39;)      #\u8FD9\u4E2A\u6709\u70B9\u7C7B\u4F3C\u6307\u5B9A\u53C2\u6570\u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6DF1\u62F7\u8D1D\u4E0E\u6D45\u62F7\u8D1D" tabindex="-1">\u6DF1\u62F7\u8D1D\u4E0E\u6D45\u62F7\u8D1D <a class="header-anchor" href="#\u6DF1\u62F7\u8D1D\u4E0E\u6D45\u62F7\u8D1D" aria-hidden="true">#</a></h2><p>\u73B0\u6709dic\u6A21\u677F\u5982\u4E0B\uFF08\u91CC\u9762\u6709\u5F88\u591A\u6570\u636E\uFF0C\u6B64\u5904\u53EA\u5217\u51FA3\u6761\uFF09\uFF0C\u67095K\u53F0\u8BBE\u5907\u4F7F\u7528\u6B64\u6A21\u677F</p><p>\u9700\u6C42\uFF1A\u73B0\u6709\u4E00\u6279\u65B0\u8BBE\u5907\uFF0Ccpu\u7684\u76D1\u63A7\u9879\u4E3A50\uFF0C\u56E0\u76D1\u63A7\u9879\u592A\u591A\uFF0C\u9700\u8981\u76F4\u63A5copy\u539F\u6765\u6A21\u677F\uFF0C\u6E90\u6A21\u677F\u4E0D\u80FD\u6539\u53D8</p><p>dic={</p><p>&#39;cpu&#39;:[80,],</p><p>&#39;mem&#39;:[80,],</p><p>&#39;disk&#39;:[80,]</p><p>}</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import copy</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">dic={</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;cpu&#39;:[80,],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;mem&#39;:[80,],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;disk&#39;:[80,]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">print &quot;before&quot;,dic</span></span>
<span class="line"><span style="color:#A6ACCD;"># dic_new=copy.copy(dic)          #\u6D45\u62F7\u8D1D\u540E\u4FEE\u6539dic_new\u6E90\u6A21\u677F\u4E5F\u53D8\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">dic_new=copy.deepcopy(dic)          #\u6DF1\u62F7\u8D1D\u540E\u4FEE\u6539dic_new\u6E90\u6A21\u677F\u4E0D\u53D8</span></span>
<span class="line"><span style="color:#A6ACCD;">dic_new[&#39;cpu&#39;][0]=50</span></span>
<span class="line"><span style="color:#A6ACCD;">print dic</span></span>
<span class="line"><span style="color:#A6ACCD;">print dic_new</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5BFB\u627E\u5DEE\u5F02" tabindex="-1">\u5BFB\u627E\u5DEE\u5F02 <a class="header-anchor" href="#\u5BFB\u627E\u5DEE\u5F02" aria-hidden="true">#</a></h2><p>\u6570\u636E\u5E93\u4E2D\u539F\u6709\uFF1A old_dict={ &#39;#1&#39;:{&#39;hostname&#39;:&#39;c1&#39;,&#39;cpu_count&#39;:2,&#39;mem_capicity&#39;:80}, &#39;#2&#39;:{&#39;hostname&#39;:&#39;c1&#39;,&#39;cpu_count&#39;:2,&#39;mem_capicity&#39;:80}, &#39;#3&#39;:{&#39;hostname&#39;:&#39;c1&#39;,&#39;cpu_count&#39;:2,&#39;mem_capicity&#39;:80} } new_dict={ &#39;#1&#39;:{&#39;hostname&#39;:&#39;c1&#39;,&#39;cpu_count&#39;:2,&#39;mem_capicity&#39;:800}, &#39;#3&#39;:{&#39;hostname&#39;:&#39;c1&#39;,&#39;cpu_count&#39;:2,&#39;mem_capicity&#39;:80}, &#39;#4&#39;:{&#39;hostname&#39;:&#39;c1&#39;,&#39;cpu_count&#39;:2,&#39;mem_capicity&#39;:80} }</p><p>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u4FEE\u6539old_dict\u4E2D\u7684\u503C\uFF0C\u4F7F\u5176\u548C\u6700\u65B0\u7684\u4FDD\u6301\u4E00\u81F4\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">old_dict={</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;#1&#39;:{&#39;hostname&#39;:&#39;c1&#39;,&#39;cpu_count&#39;:2,&#39;mem_capicity&#39;:80},</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;#2&#39;:{&#39;hostname&#39;:&#39;c1&#39;,&#39;cpu_count&#39;:2,&#39;mem_capicity&#39;:80},</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;#3&#39;:{&#39;hostname&#39;:&#39;c1&#39;,&#39;cpu_count&#39;:2,&#39;mem_capicity&#39;:80}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">new_dict={</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;#1&#39;:{&#39;hostname&#39;:&#39;c1&#39;,&#39;cpu_count&#39;:2,&#39;mem_capicity&#39;:800},</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;#3&#39;:{&#39;hostname&#39;:&#39;c1&#39;,&#39;cpu_count&#39;:2,&#39;mem_capicity&#39;:80},</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;#4&#39;:{&#39;hostname&#39;:&#39;c1&#39;,&#39;cpu_count&#39;:2,&#39;mem_capicity&#39;:80}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">old_keys= set(old_dict.keys())</span></span>
<span class="line"><span style="color:#A6ACCD;">new_keys=set(new_dict.keys())</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">update_set=old_keys.intersection(new_keys)</span></span>
<span class="line"><span style="color:#A6ACCD;">delete_set=old_keys.symmetric_difference(update_set)</span></span>
<span class="line"><span style="color:#A6ACCD;">add_set=new_keys.symmetric_difference(update_set)</span></span>
<span class="line"><span style="color:#A6ACCD;">for i in update_set:</span></span>
<span class="line"><span style="color:#A6ACCD;">    old_dict[i]=new_dict[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">for i in delete_set:</span></span>
<span class="line"><span style="color:#A6ACCD;">    old_dict.pop(i)</span></span>
<span class="line"><span style="color:#A6ACCD;">for i in add_set:</span></span>
<span class="line"><span style="color:#A6ACCD;">    old_dict[i]=new_dict[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">print old_dict</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5982\u679C\u8981\u505A\u7CBE\u7EC6\u7684\u5224\u65AD\uFF0C\u5927\u81F4\u601D\u8DEF\u5982\u4E0B\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">print old_dict[&#39;#1&#39;].keys()</span></span>
<span class="line"><span style="color:#A6ACCD;">old_dict[&#39;#1&#39;][&#39;mem_capicity&#39;] == new_dict[&#39;#1&#39;][&#39;mem_capicity&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u83F2\u6CE2\u90A3\u5207\u6570\u5217" tabindex="-1">\u83F2\u6CE2\u90A3\u5207\u6570\u5217 <a class="header-anchor" href="#\u83F2\u6CE2\u90A3\u5207\u6570\u5217" aria-hidden="true">#</a></h2><p>\u83F2\u6CE2\u90A3\u5207\u6570\u5217\uFF1A</p><p>0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025 121393</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#coding:utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">def func(arg1,arg2):</span></span>
<span class="line"><span style="color:#A6ACCD;">    if arg1==0:</span></span>
<span class="line"><span style="color:#A6ACCD;">        print  arg1,arg2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    arg3=arg1+arg2</span></span>
<span class="line"><span style="color:#A6ACCD;">    print  arg3,</span></span>
<span class="line"><span style="color:#A6ACCD;">    if arg3 &lt;= 100000:     #\u4E0D\u52A0\u4F1A\u62A5\u9519\uFF0C\u8D85\u51FA\u9012\u5F52\u7684\u8303\u56F4</span></span>
<span class="line"><span style="color:#A6ACCD;">        func(arg2,arg3)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">func(0,1)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="dict\u5B57\u5178\u7EC3\u4E60" tabindex="-1">dict\u5B57\u5178\u7EC3\u4E60 <a class="header-anchor" href="#dict\u5B57\u5178\u7EC3\u4E60" aria-hidden="true">#</a></h2><p>\u9700\u6C42\uFF1A\u5C06[11,22,33,44,55,66,77,99,90] \u5143\u7D20\u5927\u4E8E66\u7684\u653E\u5230\u5B57\u5178\u7684k2\u4E2D\uFF0C\u5C0F\u4E8E66\u7684\u653E\u5230\u5B57\u5178\u7684k1\u4E2D</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u65B9\u6CD5\u4E00\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">dic={}</span></span>
<span class="line"><span style="color:#A6ACCD;">list=[11,22,33,44,55,66,77,99,90]</span></span>
<span class="line"><span style="color:#A6ACCD;">list1=[]</span></span>
<span class="line"><span style="color:#A6ACCD;">list2=[]</span></span>
<span class="line"><span style="color:#A6ACCD;">for i in list:</span></span>
<span class="line"><span style="color:#A6ACCD;">    if i &lt;=66:</span></span>
<span class="line"><span style="color:#A6ACCD;">        list1.append(i)</span></span>
<span class="line"><span style="color:#A6ACCD;">    else:</span></span>
<span class="line"><span style="color:#A6ACCD;">        list2.append(i)</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u66F4\u65B0\u5217\u8868\u7684\u65B9\u6CD5\u4E00</span></span>
<span class="line"><span style="color:#A6ACCD;"># dic.update({&#39;k1&#39;:list1})</span></span>
<span class="line"><span style="color:#A6ACCD;"># dic.update({&#39;k2&#39;:list2})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#\u66F4\u65B0\u5217\u8868\u7684\u65B9\u6CD5\u4E8C</span></span>
<span class="line"><span style="color:#A6ACCD;"># dic.setdefault(&#39;k1&#39;,list1)</span></span>
<span class="line"><span style="color:#A6ACCD;"># dic.setdefault(&#39;k2&#39;,list2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#\u66F4\u65B0\u5217\u8868\u7684\u65B9\u6CD5\u4E09L</span></span>
<span class="line"><span style="color:#A6ACCD;"># dic[&#39;k1&#39;]=list1</span></span>
<span class="line"><span style="color:#A6ACCD;"># dic[&#39;k2&#39;]=list2</span></span>
<span class="line"><span style="color:#A6ACCD;">print dic</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u65B9\u6CD5\u4E8C\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">dic={}</span></span>
<span class="line"><span style="color:#A6ACCD;">list=[11,22,33,44,55,66,77,99,90]</span></span>
<span class="line"><span style="color:#A6ACCD;">for i in list:</span></span>
<span class="line"><span style="color:#A6ACCD;">    if i &lt;= 66:</span></span>
<span class="line"><span style="color:#A6ACCD;">        if &#39;k1&#39; in dic.keys():</span></span>
<span class="line"><span style="color:#A6ACCD;">            dic[&#39;k1&#39;].append(i)</span></span>
<span class="line"><span style="color:#A6ACCD;">        else:</span></span>
<span class="line"><span style="color:#A6ACCD;">            dic[&#39;k1&#39;]=[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">    else:</span></span>
<span class="line"><span style="color:#A6ACCD;">        if &#39;k2&#39; in dic.keys():</span></span>
<span class="line"><span style="color:#A6ACCD;">            dic[&#39;k2&#39;].append(i)</span></span>
<span class="line"><span style="color:#A6ACCD;">        else:</span></span>
<span class="line"><span style="color:#A6ACCD;">            dic[&#39;k2&#39;]=[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">print dic</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7F16\u5199\u767B\u5F55\u63A5\u53E3" tabindex="-1">\u7F16\u5199\u767B\u5F55\u63A5\u53E3 <a class="header-anchor" href="#\u7F16\u5199\u767B\u5F55\u63A5\u53E3" aria-hidden="true">#</a></h2><p>\u7F16\u5199\u767B\u5F55\u63A5\u53E3:</p><ul><li>\u8F93\u5165\u7528\u6237\u540D\u3001\u5BC6\u7801</li><li>\u8BA4\u8BC1\u6210\u529F\u540E\u663E\u793A\u6B22\u8FCE\u4FE1\u606F</li><li>\u8F93\u9519\u4E09\u6B21\u540E\u9501\u5B9A</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#coding:utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">retry_count=0</span></span>
<span class="line"><span style="color:#A6ACCD;">retry_limit=3</span></span>
<span class="line"><span style="color:#A6ACCD;">retry_dict={}</span></span>
<span class="line"><span style="color:#A6ACCD;">while True:</span></span>
<span class="line"><span style="color:#A6ACCD;">    username=raw_input(&#39;pls input your account&gt;&gt;&gt;&#39;).strip()</span></span>
<span class="line"><span style="color:#A6ACCD;">    if len(username)==0:</span></span>
<span class="line"><span style="color:#A6ACCD;">        print &#39;username should not be empty\uFF01&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        continue</span></span>
<span class="line"><span style="color:#A6ACCD;">    password=raw_input(&#39;password&gt;&gt;&gt;&#39;).strip()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    account_flag = False</span></span>
<span class="line"><span style="color:#A6ACCD;">    with open(&#39;account_lock&#39;,&#39;r&#39;) as f:</span></span>
<span class="line"><span style="color:#A6ACCD;">        for line in  f.readlines():</span></span>
<span class="line"><span style="color:#A6ACCD;">            if username == line.strip():</span></span>
<span class="line"><span style="color:#A6ACCD;">                print &#39;Your account has been locked!&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                account_flag=True</span></span>
<span class="line"><span style="color:#A6ACCD;">                break      #\u6B64\u5904\u5982\u679C\u4F7F\u7528exit\u5462\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">    if account_flag:</span></span>
<span class="line"><span style="color:#A6ACCD;">        break</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    account={}</span></span>
<span class="line"><span style="color:#A6ACCD;">    with open(&#39;accounts&#39;) as f:</span></span>
<span class="line"><span style="color:#A6ACCD;">        for line in  f.readlines():</span></span>
<span class="line"><span style="color:#A6ACCD;">            user,passwd=line.strip().split()</span></span>
<span class="line"><span style="color:#A6ACCD;">            account[user]=passwd</span></span>
<span class="line"><span style="color:#A6ACCD;">    if username in account.keys():</span></span>
<span class="line"><span style="color:#A6ACCD;">        if password == account[username]:</span></span>
<span class="line"><span style="color:#A6ACCD;">            print &#39;login success!&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            print &#39;Welcome  %s Login To The Computer!&#39;% username</span></span>
<span class="line"><span style="color:#A6ACCD;">            break</span></span>
<span class="line"><span style="color:#A6ACCD;">    else:</span></span>
<span class="line"><span style="color:#A6ACCD;">        retry_dict[username] = retry_count</span></span>
<span class="line"><span style="color:#A6ACCD;">        if retry_count &lt; retry_limit and retry_dict[username] &lt; 3 :</span></span>
<span class="line"><span style="color:#A6ACCD;">            print &#39;username or password is wrong!&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            print &quot;retry_count=&quot;,retry_count</span></span>
<span class="line"><span style="color:#A6ACCD;">            retry_count += 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        else:</span></span>
<span class="line"><span style="color:#A6ACCD;">            print &#39;too mach times,quit now!&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            break</span></span>
<span class="line"><span style="color:#A6ACCD;">        if  retry_dict[username] &gt;= 2:</span></span>
<span class="line"><span style="color:#A6ACCD;">            with open(&#39;account_lock&#39;,&#39;a&#39;) as f:</span></span>
<span class="line"><span style="color:#A6ACCD;">                f.write(username)</span></span>
<span class="line"><span style="color:#A6ACCD;">                f.write(&#39;\\n&#39;)          #\u53EF\u4EE5\u5408\u5E76\u4E3Af.write(username+&#39;\\n&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                print &#39;Your account has been locked!&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                break</span></span>
<span class="line"><span style="color:#A6ACCD;">    print retry_dict</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,59),c=[e];function o(t,i,r,C,A,y){return a(),n("div",null,c)}const u=s(p,[["render",o]]);export{D as __pageData,u as default};
