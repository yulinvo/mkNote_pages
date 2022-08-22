import{_ as s,c as n,o as a,b as p}from"./app.8608f89d.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"40_python/10_python/180_Socket\u7F16\u7A0B.md"}'),l={name:"40_python/10_python/180_Socket\u7F16\u7A0B.md"},e=p(`<p><strong>Socket\u7F16\u7A0B\uFF1A</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u4E3B\u8981\u529F\u80FD\uFF1A\u53D1\u3001\u6536\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E00\u4E2A\u7B80\u5355\u7684\u7528\u4F8B\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u5BA2\u6237\u7AEF</span></span>
<span class="line"><span style="color:#A6ACCD;">import  socket</span></span>
<span class="line"><span style="color:#A6ACCD;">client = socket.socket()                         #\u58F0\u660Esocket\u7C7B\u578B\uFF0C\u540C\u65F6\u751F\u6210socket\u8FDE\u63A5\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">client.connect((&#39;localhost&#39;,6969))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">client.send(b&#39;hello world&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">data=client.recv(1024)</span></span>
<span class="line"><span style="color:#A6ACCD;">print &quot;recv:&quot;,data</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">client.close()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#\u670D\u52A1\u5668\u7AEF</span></span>
<span class="line"><span style="color:#A6ACCD;">import socket</span></span>
<span class="line"><span style="color:#A6ACCD;">server = socket.socket()</span></span>
<span class="line"><span style="color:#A6ACCD;">server.bind((&#39;localhost&#39;,6969))            #\u7ED1\u5B9A\u76D1\u542C\u7684\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">server.listen()                                #\u76D1\u542C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">conn,addr = server.accept()                            #\u7B49\u6570\u636E\u8FDE\u63A5\u8FDB\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">data = conn.recv(1024)</span></span>
<span class="line"><span style="color:#A6ACCD;">print &#39;recv:&#39;,data</span></span>
<span class="line"><span style="color:#A6ACCD;">conn.send(data.upper())</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">server.close()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>socketserver \uFF1A</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">socket\u65E0\u6CD5\u505A\u5E76\u53D1\u5904\u7406\uFF0C\u6240\u4EE5\u5F15\u5165\u4E86socketserver\uFF0CSocketServer\u5B9E\u9645\u662F\u5BF9socket\u7684\u518D\u5C01\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),o=[e];function c(t,r,A,C,i,y){return a(),n("div",null,o)}const d=s(l,[["render",c]]);export{D as __pageData,d as default};
