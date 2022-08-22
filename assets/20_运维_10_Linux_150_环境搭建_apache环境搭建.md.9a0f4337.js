import{_ as s,c as n,o as a,b as p}from"./app.8608f89d.js";const D=JSON.parse('{"title":"Virtual hosts","description":"","frontmatter":{},"headers":[],"relativePath":"20_\u8FD0\u7EF4/10_Linux/150_\u73AF\u5883\u642D\u5EFA/apache\u73AF\u5883\u642D\u5EFA.md"}'),l={name:"20_\u8FD0\u7EF4/10_Linux/150_\u73AF\u5883\u642D\u5EFA/apache\u73AF\u5883\u642D\u5EFA.md"},e=p(`<p>elinks <a href="http://172.16.10.1/" target="_blank" rel="noreferrer">http://172.16.10.1</a> \u7EAF\u6587\u672C\u4EA4\u4E92\u5F0F\u6253\u5F00\u8FDE\u63A5 #elinks\u548Ccurl</p><p>\u200B -dump \u663E\u793A\u5B8C\u7F51\u9875\u540E\u5C31\u9000\u51FA\uFF0C\u4E0D\u5728\u663E\u793A\u4EA4\u4E92\u5F0F\u6A21\u5F0F</p><p>\u200B -source \u663E\u793A\u7F51\u9875\u7684\u6E90\u4EE3\u7801</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">./configure \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--prefix=/usr/local/apache \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--enable-so \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--enable-ssl \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--enable-cgi \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--enable-cgid   \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--enable-rewrite \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--with-zlib \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--with-pcre \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--with-apr=/usr/local/apr \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--with-apr-util=/usr/local/apr-util \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--enable-modules=most \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--enable-mods-shared=most \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--enable-mpms-shared=all    </span></span>
<span class="line"><span style="color:#A6ACCD;">(--with-mpm=event )        #\u9ED8\u8BA4\u5C31\u662Fevent\uFF0C\u8FD9\u4E00\u53E5\u4E0D\u7528\u6307\u5B9A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#--with-apr=/usr/local/apr --with-apr-util=/usr/local/apr-util \u53EF\u4EE5\u4F7F\u7528 --with-included-apr \u4EE3\u66FF</span></span>
<span class="line"><span style="color:#A6ACCD;">--sysconfdir    \u6307\u5B9A\u7684\u662F\u914D\u7F6E\u6587\u4EF6\u7684\u5B89\u88C5\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">--enable-so    \u652F\u6301\u52A8\u6001\u5171\u4EAB\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">--enable-mods-shared    \uFF1A\u662F\u5426\u542F\u7528\u5171\u4EAB\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">mpm\uFF1Aprefork\u3001worker\u3001event\uFF08\u540E\u4E24\u79CD\u9700\u8981php\u7F16\u8BD1\u6210zts\u683C\u5F0F\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">        httpd v2.4\u53EF\u4EE5\u652F\u63013\u79CD\u683C\u5F0F\u5207\u6362\uFF0C\u4E14v2.4\u7684\u9ED8\u8BA4\u652F\u6301\u7684\u662Fevent\u683C\u5F0F\u7684\uFF08\u6027\u80FD\u6700\u597D\uFF09\uFF0C\u4E4B\u524D\u7684\u7248\u672Crpm\u5B89\u88C5\u9ED8\u8BA4\u662Fprefork\u6A21\u5F0F\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">        --enable-mpms-shared=\uFF0C    \u53EF\u4EE5\u6307\u5B9A\u4F7F\u7528\u4E09\u4E2A\u4E2D\u7684\u54EA\u4E9B\uFF0C\u6216\u8005\u662Fall</span></span>
<span class="line"><span style="color:#A6ACCD;">        --with-mpm=      \u6307\u5B9A\u4F7F\u7528\u4E09\u4E2A\u4E2D\u7684\u54EA\u4E2A\u4F5C\u4E3A\u9ED8\u8BA4\u503C\uFF0C\u9ED8\u8BA4\u5C31\u662Fevent\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        \u5982\u679C\u6CA1\u6709--enable-mpms-shared\u53EA\u6709--with-mpm=\u8FD9\u53E5\uFF0C\u8868\u793A\u53EA\u5B89\u88C5event</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">--enable-modules=most  \u4F1A\u5B89\u88C5\u4E00\u4E2A2.4\u624D\u6709\u7684\u6A21\u5757\uFF0Cmod_proxy_fcgi \uFF0C\u8FD9\u4E2A\u6A21\u5757\u5982\u679C\u4E4B\u524D\u7248\u672C\u8981\u4F7F\u7528\uFF0C\u9700\u8981\u989D\u5916\u7F16\u8BD1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>mpm:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">prefork\uFF1A\uFF08\u4E00\u4E2A\u8BF7\u6C42\u7528\u4E00\u4E2A\u8FDB\u7A0B\u54CD\u5E94\uFF09\u9884\u5148\u751F\u6210\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">worker:\uFF08\u4E00\u4E2A\u8BF7\u6C42\u7528\u4E00\u4E2A\u7EBF\u7A0B\u54CD\u5E94\uFF09\u57FA\u4E8E\u7EBF\u7A0B\u6765\u5DE5\u4F5C\uFF1B\u4E00\u4E2A\u8FDB\u7A0B\u76F8\u5E94\u591A\u4E2A\u7528\u6237\u8BF7\u6C42\uFF0C\u4F46\u662F\u4E00\u4E2A\u8FDB\u7A0B\u4E0B\u4F7F\u7528\u591A\u4E2A\u7EBF\u7A0B\u76F8\u5E94\u7528\u6237\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;">event:\uFF08\u4E00\u4E2A\u8FDB\u7A0B\u5904\u7406\u591A\u4E2A\u8BF7\u6C42\uFF09\u57FA\u4E8E\u4E8B\u4EF6\u7684\u9A71\u52A8\uFF0C\u4E00\u4E2A\u8FDB\u7A0B\u5904\u7406\u591A\u4E2A\u7528\u6237\u8BF7\u6C42\uFF0C\u4E0D\u662F\u57FA\u4E8E\u7EBF\u7A0B\u800C\u662F\u4E00\u4E2A\u8FDB\u7A0B\u76F4\u63A5\u5904\u7406\u591A\u4E2A\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>apr\uFF1A\u4E0D\u540C\u7684\u5E73\u53F0\u9700\u8981\u4E0D\u540C\u7684httpd\u7248\u672C\uFF0C\u4E00\u4E2A\u6298\u4E2D\u7684\u65B9\u6CD5\u662F\u901A\u8FC7apr\u5B9E\u73B0\u4E0D\u540C\u7CFB\u7EDF\u5E73\u53F0\u7684\u79FB\u690D\uFF0C\u7C7B\u4F3C\u4E0Ejava\u7684\u865A\u62DF\u673A</p><p>rpm\u5305\u5B89\u88C5\u540E\u6587\u4EF6\u901A\u5E38\u5B58\u5728\u7684\u4F4D\u7F6E\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u4E8C\u8FDB\u5236\u7A0B\u5E8F\uFF1A/bin,/sbin,/usr/bin,/usr/sbin</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5E93\u6587\u4EF6\uFF1A/lib,/usr/lib</span></span>
<span class="line"><span style="color:#A6ACCD;">\u914D\u7F6E\u6587\u4EF6\uFF1A/etc</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5E2E\u52A9\u6587\u6863\uFF1A/usr/share/{doc,man}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>includes \u5934\u6587\u4EF6</p><p>httpd\u7684\u542F\u52A8\u811A\u672C\uFF1Arpm\u5B89\u88C5\u7684\u6709\u8FD9\u4E2A\u542F\u52A8\u811A\u672C\uFF0C\u7167\u7740\u90A3\u4E2A\u4FEE\u6539\u4E0B\uFF08\u63A8\u8350\u4F7F\u7528\u8FD9\u79CD\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528\u4E0B\u9762\u8FD9\u79CD\uFF09\uFF1B</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u6216\u8005\u76F4\u63A5\u5C06/usr/local/bin/apachectl \u590D\u5236\u5230/etc/init.d/httpd\uFF0C\u91CC\u9762\u52A0\u4E0A\u4E00\u884C# chkconfig:35 85 15 \u548C #description\u4E24\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E0D\u52A0#chkconfig\u8FD9\u4E00\u884C\u65E0\u6CD5\u52A0\u5165\u5230chkconfig list\u4E2D\uFF0C\u800C\u4E14\u9700\u8981chkconfig httpd on\uFF08\u8FD9\u4E2A\u65B0\u52A0\u5165\u7684\u9ED8\u8BA4\u90FD\u662Foff\uFF0C\u4E0D\u77E5\u9053\u4EC0\u4E48\u539F\u56E0\uFF1F\uFF1F\uFF1F\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>apache\u5B89\u88C5\u5B8C\u540E\u76EE\u5F55\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">build\uFF1A\u7F16\u8BD1\u7684\u65F6\u5019\u4E00\u4E2A\u76EE\u5F55\uFF0C\u4E0D\u7528\u7BA1\u5B83</span></span>
<span class="line"><span style="color:#A6ACCD;">cgi-bin\uFF1A\u6267\u884Ccgi\u7A0B\u5E8F\u7684\u5B58\u653E\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">icons\uFF1A\u63D0\u4F9B\u7684\u4E00\u4E9B\u56FE\u6807</span></span>
<span class="line"><span style="color:#A6ACCD;">include\uFF1A\u5934\u6587\u4EF6\uFF0C\u5982\u679C\u5BF9apache\u8FDB\u884C\u4E8C\u6B21\u5F00\u53D1\u7684\u8BDD\u4F1A\u7528\u5230\u8FD9\u4E2A\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">error\uFF1A\u9519\u8BEF\u4FE1\u606F\uFF0C\u4E0D\u662F\u9519\u8BEF\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;">logs\uFF1A\u65E5\u5FD7\u6587\u4EF6\uFF08PID\u6587\u4EF6\u4E5F\u5728\u6B64\u76EE\u5F55\u4E0B\uFF0C\u901A\u5E38pid\u6587\u4EF6\u5728/var/run\u4E0B\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">man\uFF1A\u5E2E\u52A9\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">manual\uFF1A\u624B\u518C\uFF0C\u5B98\u65B9\u624B\u518C</span></span>
<span class="line"><span style="color:#A6ACCD;">modules\uFF1A\u6A21\u5757\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>httpd.conf\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">PidFile    &#39;/var/run/httpd.pid&#39;            \u5B9A\u4E49pid\u6587\u4EF6\u7684\u5B58\u653E\u4F4D\u7F6E\uFF0Chttpd\u4E2D\u6CA1\u6709\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u53EF\u4EE5\u76D1\u542C\u591A\u4E2A\u7AEF\u53E3\uFF0C\u8FD8\u53EF\u4EE5\u76D1\u542C\u6307\u5B9AIP+\u7AEF\u53E3\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    Listen 80</span></span>
<span class="line"><span style="color:#A6ACCD;">    Listen 8080</span></span>
<span class="line"><span style="color:#A6ACCD;">    Listen 192.168.100.1:8080</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ServerAdmin you@example.com:    \u7AD9\u70B9\u7BA1\u7406\u5458\uFF0C\u5982\u8BBF\u95EE\u7F51\u9875\u5F02\u5E38\u65F6\uFF0C\u663E\u793A\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458xxx\uFF0Cserveradmin\u5C31\u662F\u8FD9\u4E2A\u529F\u80FD</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">LoadModule    \u6A21\u5757\u540D\u79F0    \u6A21\u5757\u4F4D\u7F6E        (\u6A21\u5757\u7684\u76F8\u5BF9\u4F4D\u7F6E\u662F\u76F8\u5BF9\u4E8E ServerRoot &quot;/usr/local/apache&quot;    \u800C\u8A00\u7684)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">DocumentRoot &quot;/usr/local/apache/htdocs&quot;    #\u6587\u6863\u6839\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;Directory &quot;/usr/local/apache/htdocs&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Options Indexes FollowSymLinks    #\u88AB\u8BBF\u95EE\u65F6\u7684\u8BBF\u95EE\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">               indexs\uFF1A\u5141\u8BB8\u7D22\u5F15\u76EE\u5F55\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">                FollowSymLinks\uFF1A\u5141\u8BB8\u7B26\u53F7\u8FDE\u63A5\uFF0C\u5C31\u662F\u53EF\u4EE5\u8BBF\u95EE\u8F6F\u8FDE\u63A5\u6307\u5411\u7684\u6E90\u6587\u4EF6\uFF0C\u751F\u6210\u73AF\u5883\u4E2D\u4E0D\u5EFA\u8BAE\u5F00\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;">                includes\uFF1A\u5141\u8BB8\u6267\u884C\u670D\u52A1\u5668\u7AEF\u5305\u542Bssi\u683C\u5F0F\u7684\u7F51\u9875\u6587\u4EF6\uFF0C\u4E5F\u662F\u4E0D\u5B89\u5168\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">                SymLinksifOwnerMatch\uFF1A\u5141\u8BB8\u6267\u884C\u7B26\u53F7\u94FE\u63A5\uFF0C\u4F46\u662F\u5C5E\u7EC4\u8981\u8DDF\u6267\u884Chttp\u7684\u8FDB\u7A0B\u7684\u7528\u6237\u7684\u5C5E\u7EC4\u5339\u914D</span></span>
<span class="line"><span style="color:#A6ACCD;">                ExecCGI\uFF1A\u662F\u5426\u5141\u8BB8\u6267\u884Ccgi\u811A\u672C\uFF1B\u8FD9\u4E00\u9879\u6709\u65F6\u5019\u4F1A\u6709\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">                MultiViews\uFF1A\u591A\u89C6\u56FE\uFF0C\u662F\u5185\u5BB9\u534F\u5546\u7684\u4E00\u79CD\u673A\u5236\uFF0C\u80FD\u6839\u636E\u5BA2\u6237\u7AEF\u6765\u6E90\u7684\u8BED\u8A00\u548C\u6587\u5B57\u6765\u5224\u5B9A\u5E94\u8BE5\u663E\u793A\u54EA\u4E00\u79CD\u7F51\u9875\u7ED9\u4F60</span></span>
<span class="line"><span style="color:#A6ACCD;">                        \uFF08\u5982\u4E0D\u540C\u56FD\u5BB6\u7684\u5BA2\u6237\u7AEF\u8BBF\u95EE\u4E3B\u9875\u65F6\u663E\u793A\u7684\u4E0D\u4E00\u6837\uFF09\uFF1B\u8FD9\u6837\u5F88\u6D88\u8017\u8D44\u6E90\uFF0C\u5982\u679C\u4E0D\u662F\u56FD\u9645\u5316\u7F51\u7AD9\u4E0D\u5EFA\u8BAE\u5F00\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;">                ALL\uFF1A\u652F\u6301\u6240\u6709</span></span>
<span class="line"><span style="color:#A6ACCD;">                None\uFF1A\u90FD\u4E0D\u542F\u7528\uFF0C\u9ED8\u8BA4\u662F\u8FD9\u9879</span></span>
<span class="line"><span style="color:#A6ACCD;">    AllowOverride None        #</span></span>
<span class="line"><span style="color:#A6ACCD;">                authconfig\uFF1A\u57FA\u4E8E\u914D\u7F6E\u6587\u4EF6\u8BA4\u8BC1</span></span>
<span class="line"><span style="color:#A6ACCD;">                        AuthType Basic</span></span>
<span class="line"><span style="color:#A6ACCD;">                        AuthName &quot;Restricted Files&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        AuthUserFile /usr/local/apache/passwd/passwords</span></span>
<span class="line"><span style="color:#A6ACCD;">                        AuthGroupFile /usr/local/apache/passwd/htgroup        </span></span>
<span class="line"><span style="color:#A6ACCD;">                        	#\u8981\u5148\u521B\u5EFA\u5BC6\u7801\u6587\u4EF6\uFF0C\u6587\u4EF6\u5185\u5BB9    myusers : hadoop tom</span></span>
<span class="line"><span style="color:#A6ACCD;">                        Require user marion                #\u53EA\u652F\u6301marion\u7528\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;">                        Require user valid-user            </span></span>
<span class="line"><span style="color:#A6ACCD;">                        	#\u53EA\u8981\u51FA\u73B0\u5728apache/passwd/passwords\u6587\u4EF6\u4E2D\u7684\u7528\u6237\u90FD\u53EF\u4EE5\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#A6ACCD;">                        Require group myusers</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span></span>
<span class="line"><span style="color:#A6ACCD;">                order\uFF1A\u57FA\u4E8E\u4E3B\u673A\u7684\u8BBF\u95EE\u63A7\u5236\u529F\u80FD\uFF0Cip\u3001\u7F51\u7EDC\u5730\u5740\u6216\u4E3B\u673A\u5B9A\u4E49\u8BBF\u95EE\u63A7\u5236\u673A\u5236</span></span>
<span class="line"><span style="color:#A6ACCD;">                Order allow,deny</span></span>
<span class="line"><span style="color:#A6ACCD;">                allow from xx    \u5982\uFF1Aallow from 192.168.10.3    192.168.100.10    \u4E2D\u95F4\u4F7F\u7528\u7A7A\u683C\u9694\u5F00\u5C31\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">                deny from xx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    Require all granted</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/Directory&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;IfModule mod_userdir.c&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        UserDir disable    #\u662F\u5426\u5141\u8BB8\u5728\u4E2A\u4EBA\u7684\u5BB6\u76EE\u5F55\u4E2D\u7B80\u5386\u7F51\u7AD9\uFF0C\u5982\u679C\u5141\u8BB8\uFF0C\u4E2A\u4EBA\u9875\u9762http://192.168.10.1/~tom\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#A6ACCD;">        UserDir public_html    #\u7528\u6237\u5BB6\u76EE\u5F55\u4E0B\u7684public_html\u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6\uFF08\u53EF\u4EE5\u5B9A\u4E49\u4E3A\u5176\u4ED6\uFF09\u5F53\u505A\u7528\u6237\u7684\u4E2A\u4EBA\u7F51\u7AD9\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/IfModule&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">TypesConfig conf/mime.types            #\u591A\u529F\u80FD\u4E92\u8054\u7F51\u90AE\u4EF6\u6269\u5C55\uFF0C\u8BA9http\u80FD\u591F\u4F20\u8F93\u591A\u5A92\u4F53\u6587\u6863\uFF0C\u4F20\u8F93\u975E\u4E8C\u8FDB\u5236\u683C\u5F0F\u6587\u4EF6\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">			\u6307\u5B9A\u54EA\u4E2A\u6587\u4EF6\uFF08mime.types\uFF09\u5B9A\u4E49\u4E86\u53EF\u4EE5\u4F20\u8F93\u7684\u6587\u4EF6\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;IfModule dir_module&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    DirectoryIndex index.html          # \u5982\u679CDocumentRoot\u4E2D\u6CA1\u6709index.html\uFF0C\u5219\u4F1A\u5C06Document\u4E2D\u7684\u6587\u4EF6\u5728web\u5217\u51FA\uFF0C\u53EF\u4EE5\u4E0B\u8F7D\uFF0C\u662F\u4E0D\u662F\u8981index\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/IfModule&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>apachectl -t\uFF1A\u68C0\u6D4B\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u6709\u9519\u8BEF\uFF0C\u6CA1\u6709\u5219OK</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[root@vm-2 /usr/local/apache/conf]#apachectl -t</span></span>
<span class="line"><span style="color:#A6ACCD;">AH00558: httpd: Could not reliably determine the server&#39;s fully qualified domain name, using fe80::fedd:b7a0:405a:2cc. Set the &#39;ServerName&#39; directive globally to suppress this message</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u51B3\u65B9\u6CD5\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6DFB\u52A0\u4E00\u884C\u5373\u53EF\uFF1AServerName localhost:80</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>httpd -t\uFF1A\u4E5F\u662F\u8BED\u6CD5\u6D4B\u8BD5</p><p>httpd -l\uFF1A</p><p>httpd -M\uFF1A\u5217\u51FA\u6A21\u5757</p><p>a=\${b-&quot;xx&quot;} \u5982\u679Cb\u6709\u503C\u5219\u5C06\u503C\u8D4B\u4E88a\uFF0C\u5982\u679C\u6CA1\u6709\u503C\u5219\u5C06&#39;xx&#39;\u8D4B\u4E88a</p><p>\u6700\u540E\u7684\u4E00\u90E8\u5206\u6362\u6A21\u5757\uFF08event--&gt;prefork\uFF09</p><p>\u8BBF\u95EE\u63A7\u5236\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">2.4\u4E4B\u524D\u662F\u8FD9\u79CD\u683C\u5F0F\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    Order allow,deny</span></span>
<span class="line"><span style="color:#A6ACCD;">    allow from all</span></span>
<span class="line"><span style="color:#A6ACCD;">2.4\u662F\u8FD9\u79CD\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    Require user username</span></span>
<span class="line"><span style="color:#A6ACCD;">    Require user groupname</span></span>
<span class="line"><span style="color:#A6ACCD;">    Require ip    ipaddr</span></span>
<span class="line"><span style="color:#A6ACCD;">        Require ip  172.16.0.0/255.255.0.0 = 172.16.0.0/16 = 172.16         #\u5141\u8BB8\u8FD9\u4E2A\u6BB5\u7684ip\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#A6ACCD;">        qureire not ip xx        #\u4E0D\u5141\u8BB8\u8FD9\u4E2A\u6BB5\u7684ip\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#A6ACCD;">    Require host hostname</span></span>
<span class="line"><span style="color:#A6ACCD;">        Require host www.mageedu.com</span></span>
<span class="line"><span style="color:#A6ACCD;">                      .magedu.com</span></span>
<span class="line"><span style="color:#A6ACCD;">        Require all granted                #\u5141\u8BB8\u6240\u6709\u4E3B\u673A\u8BBF\u95EE\uFF08\u4E0D\u5BF9IP\u751F\u6548\u4E48\uFF1F\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">        Require all denied                    #\u62D2\u7EDD\u6240\u6709\u4E3B\u673A\u8BBF\u95EE\uFF08\u5BF9IP\u751F\u6548\u4E48\uFF1F\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>apache + php\u73AF\u5883\u4E0B\u9700\u8981\u4FEE\u6539\u7684\u5185\u5BB9\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">php\u7F16\u8BD1\u5B8C\u6210\u540E\uFF0C\u5728httpd.conf\u4F1A\u81EA\u52A8\u6DFB\u52A0\u4E00\u9879\uFF1ALoadModule php7_module        modules/libphp7.so</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u624B\u5DE5\u6DFB\u52A0\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">1\uFF0Chttpd.conf\u4E2D\u6DFB\u52A0\u4E00\u9879\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">        AddType application/x-httpd-php .php</span></span>
<span class="line"><span style="color:#A6ACCD;">        AddType application/x-httpd-php-source .phps            #\u914D\u7F6E\u652F\u6301php\u6E90\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">2\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;IfModule dir_module&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        DirectoryIndex index.php index.html                #\u6B64\u5904\u4FEE\u6539\u6DFB\u52A0\u4E00\u9879index.php\u4E3B\u9875</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/IfModule&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u914D\u7F6E\u865A\u62DF\u4E3B\u673A\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">1\uFF0Chttpd.conf\u4E2D\u6CE8\u91CA\u4E2D\u5FC3\u4E3B\u673A    #DocumentRoot &quot;/usr/local/apache/htdocs&quot; \uFF08\u9ED8\u8BA4\u662F\u5F00\u542F\u7684\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">2\uFF0C\u6253\u5F00    Include conf/extra/httpd-vhosts.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">vi httpd-vhosts.conf :</span></span>
<span class="line"><span style="color:#A6ACCD;">    1,    # Required modules: mod_log_config    \uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">                \u786E\u4FDDhttpd.conf\u4E2D\u542F\u7528\u4E86\uFF08\u9ED8\u8BA4\u5C31\u662F\u542F\u7528\u7684\uFF09LoadModule log_config_module modules/mod_log_config.so</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u538B\u529B\u6D4B\u8BD5\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">-c\uFF1A\u5E76\u53D1\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">-n\uFF1A\u8BF7\u6C42\u7684\u4E2A\u6570\uFF08\u901A\u5E38\u5927\u4E8E-c\u7684\u4E2A\u6570\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">-r\uFF1A\u5FFD\u7565</span></span>
<span class="line"><span style="color:#A6ACCD;">ab -r -c 10 -n 100 http://www.a.org/index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u8BF7\u6C42php\u6587\u4EF6\u662F\u89C2\u5BDFxchache\u52A0\u901F\u7684\u6548\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -an \uFF1A\u538B\u529B\u6D4B\u8BD5\u7684\u8BF7\u6C42\u8981\u8FC7\u4E00\u4F1A\u624D\u6D88\u5931\uFF0Ctime_wait\u72B6\u6001\u4F1A\u6301\u7EED\u4E00\u6BB5\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>ulimit -n 10000\uFF1Alinux\u4E2D\u9ED8\u8BA4\u6BCF\u4E2A\u4E2D\u6BB5\u4E0D\u80FD\u6253\u5F00\u8D85\u8FC71024\u4E2A\u6587\u4EF6\uFF0C\u5C31\u662F1024\u4E2Asocket\uFF0C\u901A\u8FC7ulimit\u4FEE\u6539\u6253\u5F00\u7684\u6587\u4EF6\u4E2A\u6570</p><p>openssl rand -base64 10 \uFF1A\u751F\u6210\u968F\u673A\u6570</p><p>vmstat 1\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u89C2\u5BDFbi\uFF08\u78C1\u76D8\u6587\u4EF6\u8BFB\u5230\u5185\u5B58\uFF09\uFF0Cbo\uFF08\u5185\u5B58\u5199\u5165\u5230\u78C1\u76D8\uFF09\uFF0Cin\uFF1A\u4E2D\u65AD\u6B21\u6570\uFF0Ccs\uFF1A\u4E0A\u4E0B\u6587\u5207\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;">    r\uFF1A\u8FD0\u884C\u961F\u5217\u7684\u957F\u5EA6   b\uFF1A\u963B\u585E\u961F\u5217\u957F\u5EA6\uFF08\u7B49\u5F85\u4ECE\u78C1\u76D8\u8BFB\u83B7\u53D6\u6570\u636E\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>top\uFF1Atop\u4E2D\u7684load average\u961F\u5217\u957F\u5EA6</p><p>\u9047\u89C1\u95EE\u9898\u603B\u7ED3\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u95EE\u9898\uFF1AYou don&#39;t have permission to access /index.html on this server.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u539F\u56E0\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5F00\u59CB\u4EE5\u4E3A\u662F\u56E0\u4E3A\u6743\u9650\u7684\u914D\u7F6E\u95EE\u9898\uFF0C\u5C06 Require all denied\u6539\u4E3A Require all granted\u4E4B\u540E\u95EE\u9898\u4F9D\u7136\u5B58\u5728</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;Directory /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    AllowOverride none</span></span>
<span class="line"><span style="color:#A6ACCD;">    Require all denied</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/Directory&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u53EF\u80FD\u5B58\u5728\u7684\u539F\u56E0\uFF0C\u8FD9\u8FB9\u9047\u89C1\u7684\u95EE\u9898\u662F\u7B2C\u4E8C\u79CD\u539F\u56E0\u9020\u6210\u7684\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">            \u539F\u56E01\uFF1Aindex.html\u662F\u7528root\u7528\u6237\u5EFA\u7684\u6587\u4EF6\uFF0Capache\u6743\u9650\u4E0D\u591F\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">            \u89E3\u51B3\u65B9\u6CD5\uFF1A\u66F4\u6539\u6587\u4EF6\u6743\u9650\uFF1Bchmod 755 index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u539F\u56E02\uFF1A\u662FApache  \u7684\u914D\u7F6E\u6587\u4EF6httpd-vhosts.conf\u91CC\uFF0C\u6253\u5F00\u4E86\u6269\u5C55\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">            # Virtual hosts</span></span>
<span class="line"><span style="color:#A6ACCD;">           Include conf/extra/httpd-vhosts.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">            \u524D\u9762\u7684#\u53BB\u6389\u4E86\uFF0C\u5C31 \u5F15\u5165\u4E86\u6269\u5C55\u914D\u7F6E\uFF0C\u800C\u6269\u5C55\u914D\u7F6E \u6587\u4EF6\u91CC\u53C8\u6CA1\u914D\u597D\u76F8\u5E94 \u7684\u6743\u9650\u201CAllow from all\u201D\uFF0C\u6240\u4EE5\u63D0\u793A\u6B64\u9519\u8BEF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>apache\u7684\u67E5\u770B\u5E2E\u52A9\u4FE1\u606F\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">httpd.conf\u4E2D\u6253\u5F00\uFF1AInclude conf/extra/httpd-manual.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1Ahttp://192.168.86.101/manual/  \u5373\u53EF\u67E5\u770B\u5E2E\u52A9\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[root@vm-2 /usr/local/apache/conf]#httpd -t</span></span>
<span class="line"><span style="color:#A6ACCD;">AH00526: Syntax error on line 36 of /usr/local/apache/conf/extra/httpd-manual.conf:</span></span>
<span class="line"><span style="color:#A6ACCD;">Invalid command &#39;LanguagePriority&#39;, perhaps misspelled or defined by a module not included in the server configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u51B3\u65B9\u6CD5\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    httpd.conf\u4E2D\u6253\u5F00LoadModule negotiation_module modules/mod_negotiation.so</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u53E6\u5916\uFF1Ahttpd-manual.conf\u4E2D\u7B2C36\u884C\u5C06\u8BED\u8A00\u4F18\u5148\u6B21\u5E8F\u6539\u4E0B\u597D\u50CF\u6709\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">        LanguagePriority  zh-cn  en  fr  ko ja tr es de  pt-br da ru</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,40),o=[e];function c(t,r,i,A,C,y){return a(),n("div",null,o)}const u=s(l,[["render",c]]);export{D as __pageData,u as default};
