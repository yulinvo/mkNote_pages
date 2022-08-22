import{_ as s,c as n,o as a,b as p}from"./app.8608f89d.js";const d=JSON.parse('{"title":"SSHClient","description":"","frontmatter":{},"headers":[{"level":2,"title":"SSHClient","slug":"sshclient"}],"relativePath":"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/190_paramiko\u6A21\u5757.md"}'),l={name:"40_python/10_python/70_\u5E38\u7528\u6A21\u5757/190_paramiko\u6A21\u5757.md"},e=p(`<p>pip2.exe install paramiko</p><p>import paramiko</p><h2 id="sshclient" tabindex="-1">SSHClient <a class="header-anchor" href="#sshclient" aria-hidden="true">#</a></h2><p><strong>\u57FA\u4E8E\u7528\u6237\u540D\u3001\u5BC6\u7801\u8FDE\u63A5\uFF1A</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import  paramiko</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u521B\u5EFAssh\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh = paramiko.SSHClient()</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u5141\u8BB8\u8FDE\u63A5\u4E0D\u518Dknow_hosts\u6587\u4EF6\u4E2D\u7684\u4E3B\u673A                #\u5C06\u8981ssh\u8FDE\u63A5\u7684\u8BBE\u5907ip\u5730\u5740\u6DFB\u52A0\u5230\u672C\u5730\u7684know_host\u6587\u4EF6\u4E2D\uFF08\u6DFB\u52A0\u7684\u662F\u5BF9\u7AEF\u7684\u5730\u5740\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u8FDE\u63A5\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh.connect(hostname=&#39;c1.salt.com&#39;,port=22,username=&#39;alex&#39;,password=&#39;123&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u6267\u884C\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">stdin,stdout,stderr = ssh.exec_command(&#39;df&#39;)                    #stdin\u6B64\u5904\u662F\u201Cdf\u201D</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u83B7\u53D6\u547D\u4EE4\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">result = stdout.read()                    #\u8FD9\u4E2A\u7ED3\u679C\u597D\u50CF\u662Fbite\u683C\u5F0F\u7684\uFF0C\u8981\u6B63\u5E38\u8F93\u51FA\u597D\u50CF\u8FD8\u9700\u8981decode\u4E00\u4E0B print result.decode()</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u5173\u95ED\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh.close()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u57FA\u4E8E\u5BC6\u94A5\u7684ssh\u8FDE\u63A5\uFF1A</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import paramiko</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">private_key = paramiko.RSAKey.from_private_key_file(&#39;/home/auto/.ssh/id_rsa&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u521B\u5EFAssh\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh = paramiko.SSHClient()</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u5141\u8BB8\u8FDE\u63A5\u4E0D\u518Dknow_hosts\u6587\u4EF6\u4E2D\u7684\u4E3B\u673A</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u8FDE\u63A5\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh.connect(hostname=&#39;c1.salt.com&#39;,port=22,username=&#39;alex&#39;,pkey=private_key)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">stdin,stdout,stderr = ssh.exec_command(&#39;df&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">result = stdout.read()</span></span>
<span class="line"><span style="color:#A6ACCD;">print result.decode()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">stdin,stdout,stderr = ssh.exec_command(&#39;ifconfig&#39;)                        #\u8FD9\u91CC\u6267\u884C2\u6761\u547D\u4EE4\u597D\u50CF\u6709\u95EE\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">result = stdout.read()</span></span>
<span class="line"><span style="color:#A6ACCD;">print result.decode()</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh.close()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u57FA\u4E8E\u7528\u6237\u540D\u3001\u5BC6\u7801\u4E0A\u4F20\u3001\u4E0B\u8F7D\uFF1A</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import paramiko</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">transport = paramiko.Transport((&#39;hostname&#39;,22))</span></span>
<span class="line"><span style="color:#A6ACCD;">transport.connect(username=&#39;alex&#39;,password=&#39;123&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sftp = paramiko.SFTPClient.from_transport(transport)</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u5C06localtion.py\u4E0A\u4F20\u81F3\u670D\u52A1\u5668 /tmp/test.py</span></span>
<span class="line"><span style="color:#A6ACCD;">sftp.put(&#39;/tmp/localtion.py&#39;,&#39;/tmp/test.py&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u5C06 remove_path \u4E0B\u8F7D\u5230\u672C\u5730local_path</span></span>
<span class="line"><span style="color:#A6ACCD;">sftp.get(&#39;remove_path&#39;,&#39;local_path&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">transport.close()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u57FA\u4E8E\u5BC6\u94A5\u7684sftp\u4E0A\u4F20\u4E0B\u8F7D\uFF08\u811A\u672C\u91CC\u9762\u4E0D\u80FD\u51FA\u73B0\u7528\u6237\u540D\u3001\u5BC6\u7801\uFF0C\u5C31\u91C7\u7528\u5BC6\u94A5\u8FDE\u63A5\uFF09</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import paramiko</span></span>
<span class="line"><span style="color:#A6ACCD;">private_key = paramiko.RSAKey.from_private_key_file(&#39;/home/auto/.ssh/id_rsa&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">transport = paramiko.Transport((&#39;hostname&#39;,22))</span></span>
<span class="line"><span style="color:#A6ACCD;">transport.connect(username=&#39;alex&#39;,pkey=private_key)</span></span>
<span class="line"><span style="color:#A6ACCD;">sftp = paramiko.SFTPClient.from_transport(transport)</span></span>
<span class="line"><span style="color:#A6ACCD;">sftp.put(&#39;/tmp/localtion.py&#39;,&#39;/tmp/test.py&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">sftp.get(&#39;remove_path&#39;,&#39;local_path&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">transport.close()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,11),o=[e];function t(c,r,i,A,C,y){return a(),n("div",null,o)}const m=s(l,[["render",t]]);export{d as __pageData,m as default};
