import{_ as s,c as n,o as a,b as p}from"./app.8608f89d.js";const u=JSON.parse('{"title":"print q.get() # \u8FD9\u91CC\u6570\u636E\u53D6\u5B8C\u540E\uFF0C\u4F1A\u5361\u4F4F","description":"","frontmatter":{},"headers":[],"relativePath":"40_python/10_python/190_\u961F\u5217.md"}'),l={name:"40_python/10_python/190_\u961F\u5217.md"},e=p(`<p><strong>queue\u961F\u5217</strong></p><blockquote><p>\u4E0B\u9762\u4E24\u4E2A\u90FD\u662F\u7EBF\u7A0B\u5B89\u5168\u7684</p></blockquote><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u53CC\u5411\u961F\u5217\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">import collections</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">d=collections.deque()</span></span>
<span class="line"><span style="color:#A6ACCD;">d.append(&#39;xx&#39;)      #\u5F80\u53F3\u8FB9\u6DFB\u52A0</span></span>
<span class="line"><span style="color:#A6ACCD;">d.appendleft(&#39;xx&#39;)      #\u5F80\u5DE6\u8FB9\u6DFB\u52A0</span></span>
<span class="line"><span style="color:#A6ACCD;">d.clear()          #\u6E05\u7A7A\u961F\u5217</span></span>
<span class="line"><span style="color:#A6ACCD;">d.copy()        #  \u57282.x\u91CC\u9762\u597D\u50CF\u4E0D\u652F\u6301</span></span>
<span class="line"><span style="color:#A6ACCD;">d.count(&#39;xx&#39;)          #\u7EDF\u8BA1\u961F\u5217\u4E2D\u67D0\u4E2A\u5143\u7D20\u51FA\u73B0\u4E86\u591A\u5C11\u6B21</span></span>
<span class="line"><span style="color:#A6ACCD;">d.extend([&#39;a&#39;,&#39;b&#39;,&#39;c&#39;])              #\u4E00\u6B21\u653E\u5165\u591A\u4E2A\u5143\u7D20\uFF0C\u4ECE\u53F3\u8FB9\u6269\u5C55</span></span>
<span class="line"><span style="color:#A6ACCD;">d.extendleft([&#39;a&#39;,&#39;b&#39;,&#39;c&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">d.index(&#39;xx&#39;,2,10)          # \u57282.x\u91CC\u9762\u597D\u50CF\u4E0D\u652F\u6301\uFF0C\u9ED8\u8BA4\u662F\u4ECE\u5DE6\u53D6\u503C\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">d.insert()                  #\u63D2\u5165\u5143\u7D20\uFF0C\u57282.x\u91CC\u9762\u597D\u50CF\u4E0D\u652F\u6301</span></span>
<span class="line"><span style="color:#A6ACCD;">d.pop()</span></span>
<span class="line"><span style="color:#A6ACCD;">d.popleft()</span></span>
<span class="line"><span style="color:#A6ACCD;">d.remove()</span></span>
<span class="line"><span style="color:#A6ACCD;">d.reverse()                #\u53CD\u8F6C</span></span>
<span class="line"><span style="color:#A6ACCD;">d.rotate(1)                  #\u65CB\u8F6C\uFF0C\u76F8\u5F53\u4E8E\u9996\u5C3E\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5355\u9879\u961F\u5217(\u5148\u8FDB\u5148\u51FAFIFO)     (\u6808\u662F\u5F39\u5939\u5148\u8FDB\u540E\u51FA)\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">import  Queue</span></span>
<span class="line"><span style="color:#A6ACCD;">q = Queue.Queue()</span></span>
<span class="line"><span style="color:#A6ACCD;">q.qsize()          #\u961F\u5217\u7684\u4E2A\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">q.join()            #\u963B\u585E\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">q.empty()          #\u548Cclear\u7C7B\u4F3C</span></span>
<span class="line"><span style="color:#A6ACCD;">q.full()            #\u662F\u5426\u5168\u6EE1</span></span>
<span class="line"><span style="color:#A6ACCD;">q.put(&#39;123&#39;)        #\u63D2\u5165\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">q.put(&#39;123&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">q.get()              #\u83B7\u53D6\u6570\u636E\uFF0C\u4E0D\u7528\u52A0\u53C2\u6570\uFF0C\u56E0\u4E3A\u5148\u8FDB\u5148\u51FA\uFF0C\u53EA\u80FD\u6309\u7167\u987A\u5E8F\u62FF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>queue\u961F\u5217\uFF1A</p><p>\u961F\u5217\u548C\u5217\u8868\u7684\u533A\u522B\uFF1A\u961F\u5217\u62FF\u8D70\u4E00\u4E2A\u6570\u636E\u5C31\u6D88\u5931\u4E00\u4E2A\u6570\u636E\uFF0C\u4F46\u5217\u8868\u62FF\u8D70\u4E00\u4E2A\u6570\u636E\u5217\u8868\u4E2D\u4E0D\u4F1A\u5220\u9664</p><p>\u961F\u5217\u7684\u6570\u636E\u653E\u5230\u5185\u5B58\u4E2D</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#coding:utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;">import Queue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Queue.Queue # \u5148\u5165\u5148\u51FA     FIFO\uFF1Afirst in first out</span></span>
<span class="line"><span style="color:#A6ACCD;">Queue.LifoQueue # \u5148\u5165\u540E\u51FA last in first out\u7684\u7B80\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">Queue.PriorityQueue # \u5B58\u50A8\u6570\u636E\u65F6\u53EF\u4EE5\u8BBE\u7F6E\u4F18\u5148\u7EA7\u7684\u961F\u5217</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">q = Queue.Queue() #\u9ED8\u8BA4\u4E0D\u9650\u5236maxsize\uFF0C\u53EF\u4EE5\u8BBE\u7F6Emaxsize = 3</span></span>
<span class="line"><span style="color:#A6ACCD;">q.put(&#39;d1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">q.put(&#39;d2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">print q.qsize() # \u5F53\u524D\u961F\u5217\u4E2D\u8FD8\u6709\u51E0\u4E2A\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">print q.get() # \u5148\u5165\u5148\u51FA\uFF0C\u4E0D\u80FD\u6307\u5B9A,\u9ED8\u8BA4block=True,timeout=</span></span>
<span class="line"><span style="color:#A6ACCD;">print q.get()</span></span>
<span class="line"><span style="color:#A6ACCD;"># print q.get() # \u8FD9\u91CC\u6570\u636E\u53D6\u5B8C\u540E\uFF0C\u4F1A\u5361\u4F4F</span></span>
<span class="line"><span style="color:#A6ACCD;"># print q.get_nowait() #\u8FD9\u91CC\u6570\u636E\u53D6\u5B8C\u540E\uFF0C\u4E0D\u4F1A\u5361\u4F4F\uFF0C\u4F46\u4F1A\u629B\u51FA\u5F02\u5E38q.empty()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#\u2014\u2014-----------------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">q =Queue.LifoQueue()</span></span>
<span class="line"><span style="color:#A6ACCD;">q.put(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">q.put(2)</span></span>
<span class="line"><span style="color:#A6ACCD;">q.put(3)</span></span>
<span class="line"><span style="color:#A6ACCD;">print q.get()</span></span>
<span class="line"><span style="color:#A6ACCD;">print q.get()</span></span>
<span class="line"><span style="color:#A6ACCD;">print q.get()</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u2014\u2014-----------------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">q = Queue.PriorityQueue()</span></span>
<span class="line"><span style="color:#A6ACCD;">q.put(20,&#39;alex&#39;) # \u524D\u9762\u768420\u662F\u4F18\u5148\u7EA7\uFF0C\u4F18\u5148\u7EA7\u8D8A\u4F4E\u8D8A\u4F18\u5148\uFF0C\u6309\u7167\u524D\u9762\u7684\u5B57\u6BCD\u6392\u5E8F\uFF0C\u5982\u679C\u6709-1\uFF0C\u5219\u572820\u524D\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">q.put(2,&#39;tom&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">q.put(10,&#39;jim&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">print q.get()</span></span>
<span class="line"><span style="color:#A6ACCD;">print q.get()</span></span>
<span class="line"><span style="color:#A6ACCD;">print q.get()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7),o=[e];function c(t,A,C,i,r,y){return a(),n("div",null,o)}const d=s(l,[["render",c]]);export{u as __pageData,d as default};
