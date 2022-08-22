import{_ as s,c as n,o as a,b as p}from"./app.8608f89d.js";const u=JSON.parse(`{"title":"--with-pcre='xxx'       \u5982\u679C\u52A0\u8DEF\u5F84\u53EF\u80FD\u6709\u95EE\u9898","description":"","frontmatter":{},"headers":[],"relativePath":"20_\u8FD0\u7EF4/10_Linux/150_\u73AF\u5883\u642D\u5EFA/nginx-\u5370\u8C61\u7B14\u8BB0.md"}`),l={name:"20_\u8FD0\u7EF4/10_Linux/150_\u73AF\u5883\u642D\u5EFA/nginx-\u5370\u8C61\u7B14\u8BB0.md"},o=p(`<p><a href="http://nginx.org/" target="_blank" rel="noreferrer">http://nginx.org/</a></p><p>nginx\u4E0D\u652F\u6301\u6A21\u5757\u5316\u7684\u65B9\u5F0F\uFF08apache\u652F\u6301\uFF09\uFF0C\u8981\u7ED3\u5408php\u53EA\u80FD\u662Ffastcgi\u7684\u65B9\u5F0F</p><p>php-fpm : 127.0.0.1\uFF1A9000</p><p>[root@vmware ~]#netstat -lnp |grep &#39;:80**&gt;<strong>&#39; #\u725F\u5B9A\u8BCD\u5C3E\uFF0C\u8FD9\u6837\u5C31\u8FC7\u6EE4\u6389\u4E868080\u7AEF\u53E3\uFF0C\u4E5F\u53EF\u4EE5 &#39;:80</strong>\\b**&#39;</p><p>netstat -ant |awk &#39;/:80&gt;/{S[$NF]++}END{for (A in S) {print A,S[A]}}&#39; #\u7EDF\u8BA180\u7AEF\u53E3\u8FDE\u63A5 \u5404\u79CD\u72B6\u6001\u7684\u4E2A\u6570</p><p>\u200B $NF\u662F\u6700\u540E\u4E00\u4E2A\u5B57\u6BB5\u7684\u540D\u79F0\u5F53\u6210\u4E0B\u8868\uFF0C\u6B64\u5904\u5C31\u662F\u72B6\u6001\uFF1Bawk &#39;{S[$NF]++}END{for (A in S) {print A,S[A]}}&#39; \u53D6\u51FA\u6240\u6709\u7AEF\u53E3\u8FDE\u63A5\u72B6\u6001\uFF0C\u4E0D\u53EA80\u7AEF\u53E3</p><p>yum groupinfo &#39;Devel ...&#39; #\u67E5\u770B\u7EC4\u91CC\u9762\u7684\u5305\u90FD\u6709\u54EA\u4E9B</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">./configure --prefix=/usr/local/nginx_1.13  --with-pcre</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7528\u6237\u5BF9web\u9875\u9762\u7684\u8BF7\u6C42\u76F4\u63A5\u5230nginx\u4E0A\uFF0C\u53EA\u662F\u5982\u679C\u662Fphp\u9875\u9762\u7684\u7684\u8BF7\u6C42\u5219\u8F6C\u7ED9php\uFF0C\u901A\u8FC7fast-cgi\u534F\u8BAE\u8F6C\u7ED9php\uFF0Cfast-cgi\u534F\u8BAE\u4E5F\u9700\u8981\u76D1\u542C\u5728\u67D0\u4E2A\u5957\u63A5\u5B57\u4E0A\uFF1Bphp\u54CD\u5E94\u5B8C\u540E\u518D\u7ED9nginx\uFF0C\u7531nginx\u6784\u5EFAhttp(\u56E0\u4E3A\u8BF7\u6C42\u8005\u65E0\u6CD5\u7406\u89E3fastcgi\u534F\u8BAE)\u62A5\u6587\u8FD4\u56DE\u7ED9\u8BF7\u6C42\u8005</p><p>\u540C\u6B65\u6A21\u578B\uFF1Anginx\u6536\u5230php\u8FD4\u56DE\u7684fastcgi\u534F\u8BAE\u62A5\u6587\u76F4\u63A5\u8F6C\u53D1\u7ED9\u8BF7\u6C42\u8005\uFF0Cnginx\u53EA\u662F\u4E00\u4E2A\u900F\u660E\u8F6C\u53D1\u7684\u529F\u80FD</p><p>\u5F02\u6B65\u6A21\u578B+\u672C\u5730\u7F13\u5B58\uFF1A</p><p>\u200B \u5F02\u6B65\uFF1Anginx\u6536\u5230php\u8FD4\u56DE\u7684fastcgi\u534F\u8BAE\u62A5\u6587\uFF0C\u7136\u540E\u5C01\u88C5\u4E3Ahttp\u62A5\u6587\u8FD4\u56DE\u7ED9\u8BF7\u6C42\u8005</p><p>\u200B \u672C\u5730\u7F13\u5B58\uFF1Anginx\u6536\u5230php\u8FD4\u56DE\u7684fastcgi\u534F\u8BAE\u62A5\u6587\u5148\u7F13\u5B58\u4E00\u4EFD\uFF0C\u5176\u4ED6\u8BF7\u6C42\u8005\u8BF7\u6C42\u5185\u5BB9\u5982\u679C\u7F13\u5B58\u6709\uFF08\u6CA1\u8FC7\u671F\uFF09\u5219\u76F4\u63A5\u4ECE\u8FD9\u91CC\u9762\u53D6\uFF0C\u4E0D\u7528\u4EA4\u7531php\u5904\u7406\u4E86\uFF0C\u4E5F\u53EF\u5C06\u5E38\u89C1\u7684\u8BF7\u6C42\uFF0C\u5982php\u4E3B\u9875\u653E\u5230\u8FD9\u91CC</p><p>nginx\u7EF4\u63011w\u4E2A\u975E\u6D3B\u52A8\u8FDE\u63A5\uFF0C\u4EC5\u9700\u89812.5M\u5185\u5B58</p><p>\u5F53\u8FDE\u63A5\u6570\u5F88\u591Amysql\u538B\u529B\u5927\u65F6\uFF0C\u505A\u4E00\u4E2A\u8BFB\u5199\u5206\u79BB\uFF08\u5373\u4E3B\u4ECE\u670D\u52A1\u5668\uFF09\uFF0C\u4E00\u53F0\u4E13\u95E8\u505A\u8BFB\u3001\u4E00\u53F0\u4E13\u95E8\u5199\uFF1B\u5982\u679C\u8FD8\u4E0D\u591F\uFF0C\u5728\u52A0\u4ECE\u670D\u52A1\u5668</p><p>\u200B \u8FD8\u9700\u8981\u52A0memcache\uFF0C\u5BF9\u901F\u5EA6\u63D0\u5347\u975E\u5E38\u975E\u5E38\u660E\u663E\uFF08memcache\u547D\u4E2D\u7387\u8981\u9AD8\uFF0C40%\u5C31\u5DEE\u4E0D\u591A\u5427\uFF09</p><p>\u200B memcache\u8FD8\u53EF\u4EE5\u7F13\u5B58\u4F1A\u8BDD</p><p>nginx\u7F13\u5B58---&gt;xcache(php\u7F16\u8BD1\u7ED3\u679C\u7F13\u5B58)---&gt;memcache\uFF08mysql\u67E5\u8BE2\u7ED3\u679C\u7F13\u5B58\uFF09</p><p>\u4EE3\u7406\uFF1A\u6240\u8C13\u4EE3\u7406\uFF0C\u5C31\u662F\u5B83\u5E2E\u4F60\u627E \u4F60\u9700\u8981\u7684\u4E1C\u897F</p><p>\u6B63\u5411\u4EE3\u7406\uFF1A\u5728\u5BA2\u6237\u7AEF\u524D\u7AEF\uFF0C\u5982\u4E0A\u7F51\u4EE3\u7406\uFF0C\u7C7B\u4F3C\u4E0E\u603B\u7BA1</p><p>\u53CD\u5411\u4EE3\u7406\uFF1A\u5728\u670D\u52A1\u5668\u524D\u7AEF\uFF0C\u5982\u670D\u52A1\u5668\u4E0D\u8BA9\u76F4\u63A5\u8BBF\u95EE\uFF0C\u524D\u7AEF\u52A0\u4E00\u4E2A\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u7C7B\u4F3C\u4E0E\u79D8\u4E66</p><p>\u200B nginx\u7684\u53CD\u5411\u4EE3\u7406\u5E38\u88AB\u7528\u6765\u4EE3\u7406\u7684\u670D\u52A1\uFF1Aweb\u3001mail\uFF08\u5F88\u5C11\u88AB\u4EBA\u63D0\u5230\uFF09</p><p>fastcgi_pass\uFF1A\u6B63\u5411\u4EE3\u7406</p><p>proxy_pass\uFF1A\u53CD\u5411\u4EE3\u7406\uFF08rewrite\u5F88\u5173\u952E\uFF09</p><p>\u6E90\u7801\u5B89\u88C5\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/usr/local/src/nginx-1.10.3]#./configure --help |less          #\u67E5\u770B\u5E2E\u52A9\u4FE1\u606F\uFF0C --with\u7684\u4E00\u822C\u662F\u6CA1\u6709\u542F\u7528\u7684\uFF0C--without\u4E00\u822C\u662F\u9ED8\u8BA4\u542F\u7528\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">./configure --prefix=/usr/local/nginx-1.10 --with-pcre \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --with-http_ssl_module \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --with-http_flv_module \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --with-http_stub_status_module \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --with-http_gzip_static_module \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --http-client-body-temp-path=/var/tmp/nginx/client/ \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --http-proxy-temp-path=/var/tmp/nginx/proxy/ \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --http-fastcgi-temp-path=/var/tmp/nginx/fcgi/ \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --http-uwsgi-temp-path=/var/tmp/nginx/uwsgi \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --http-scgi-temp-path=/var/tmp/nginx/scgi \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --with-pcre    \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --with-file-aio    \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --with-http_image_filter_module    \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --with-http_v2_module    \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --with-ipv6    \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --with-http_realip_module    </span></span>
<span class="line"><span style="color:#A6ACCD;">    ##    --with-pcre=&#39;xxx&#39;       \u5982\u679C\u52A0\u8DEF\u5F84\u53EF\u80FD\u6709\u95EE\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">make &amp;&amp; make install </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u9700\u8981\u5B89\u88C5\u7684\u5305\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install -y gd-devel :</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u5426\u5219\u62A5\u9519\uFF1A    ./configure: error: the HTTP image filter module requires the GD library</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u542F\u52A8\uFF1A/usr/local/nginx-1.10/sbin]#./nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">\u68C0\u6D4B\u914D\u7F6E\u6587\u4EF6\uFF1A    /usr/local/nginx-1.10/sbin]#./nginx -t</span></span>
<span class="line"><span style="color:#A6ACCD;">\u91CD\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF1A    /usr/local/nginx-1.10/sbin]#./nginx -s reload</span></span>
<span class="line"><span style="color:#A6ACCD;">\u505C\u6B62nginx\uFF1A    /usr/local/nginx-1.10/sbin]#./nginx -s stop</span></span>
<span class="line"><span style="color:#A6ACCD;">\u67E5\u770B\u7248\u672C\u53CA\u7F16\u8BD1\u53C2\u6570\uFF1A/usr/local/nginx-1.10/sbin]#./nginx -V</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u542F\u52A8\u65F6\u62A5\u9519\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    nginx: [emerg] mkdir() &quot;/var/tmp/nginx/client/&quot; failed (2: No such file or directory)</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u89E3\u51B3\u65B9\u6CD5\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u521B\u5EFA\u76EE\u5F55\uFF1Amkdir -p /var/tmp/nginx/client</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>nginx\u7684\u542F\u52A8\u811A\u672C\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">cat /etc/init.d/nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#! /bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"># chkconfig: 35 85 15  </span></span>
<span class="line"><span style="color:#A6ACCD;"># description: Nginx is an HTTP(S) server, HTTP(S) reverse</span></span>
<span class="line"><span style="color:#A6ACCD;">set -e</span></span>
<span class="line"><span style="color:#A6ACCD;">DESC=&quot;nginx daemon&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">NAME=nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">DAEMON=/usr/local/nginx-1.10/sbin/$NAME</span></span>
<span class="line"><span style="color:#A6ACCD;">SCRIPTNAME=/etc/init.d/$NAME</span></span>
<span class="line"><span style="color:#A6ACCD;">test -x $DAEMON || exit 0</span></span>
<span class="line"><span style="color:#A6ACCD;">d_start(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    $DAEMON || echo -n &quot; already running&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">d_stop() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    $DAEMON -s quit || echo -n &quot; not running&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">d_reload() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    $DAEMON -s reload || echo -n &quot; counld not reload&quot; &amp;&amp; echo &amp;&amp;exit</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">case &quot;$1&quot; in</span></span>
<span class="line"><span style="color:#A6ACCD;">start)</span></span>
<span class="line"><span style="color:#A6ACCD;">    echo -n &quot;Starting $DESC:$NAME&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    d_start</span></span>
<span class="line"><span style="color:#A6ACCD;">    echo &quot;.&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">;;</span></span>
<span class="line"><span style="color:#A6ACCD;">stop)</span></span>
<span class="line"><span style="color:#A6ACCD;">    echo -n &quot;Stopping $DESC:$NAME&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    d_stop</span></span>
<span class="line"><span style="color:#A6ACCD;">    echo &quot;.&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">;;</span></span>
<span class="line"><span style="color:#A6ACCD;">reload)</span></span>
<span class="line"><span style="color:#A6ACCD;">    echo -n &quot;Reloading $DESC configuration...&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    d_reload</span></span>
<span class="line"><span style="color:#A6ACCD;">    echo &quot;reloaded.&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">;;</span></span>
<span class="line"><span style="color:#A6ACCD;">restart)</span></span>
<span class="line"><span style="color:#A6ACCD;">    echo -n &quot;Restarting $DESC: $NAME&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    d_stop</span></span>
<span class="line"><span style="color:#A6ACCD;">    sleep 2</span></span>
<span class="line"><span style="color:#A6ACCD;">    d_start</span></span>
<span class="line"><span style="color:#A6ACCD;">    echo &quot;.&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">;;</span></span>
<span class="line"><span style="color:#A6ACCD;">*)</span></span>
<span class="line"><span style="color:#A6ACCD;">    echo &quot;Usage: $SCRIPTNAME {start|stop|restart|reload}&quot; &gt;&amp;2</span></span>
<span class="line"><span style="color:#A6ACCD;">    exit 3</span></span>
<span class="line"><span style="color:#A6ACCD;">;;</span></span>
<span class="line"><span style="color:#A6ACCD;">esac</span></span>
<span class="line"><span style="color:#A6ACCD;">exit 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u652F\u6301http referer\u9A8C\u8BC1\uFF08\u53CD\u76D7\u94FE\uFF09\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">referer\uFF1A\u8BBF\u95EE\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A1\uFF0C\u76F4\u63A5\u8F93\u5165url\u5730\u5740     2\uFF0C\u901A\u8FC7\u70B9\u51FB\u8BBF\u95EE\uFF0Creferer\u5C31\u662F\u8FD9\u79CD</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u652F\u6301flv\u6D41\u548Cmp4\u6D41\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8FB9\u4E0B\u8F7D\u8FB9\u64AD</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FDB\u7A0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">master\u8FDB\u7A0B\uFF1A\u542F\u52A8worker\u8FDB\u7A0B\uFF08\u4EE5\u666E\u901A\u7528\u6237\u542F\u52A8\uFF0C\u66F4\u5B89\u5168\uFF09\uFF1B\u76D1\u63A7worker\u8FDB\u7A0B\uFF1B\u8D1F\u8D23\u88C5\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF08\u914D\u7F6E\u6587\u4EF6\u751F\u6548\u540E \u8001worker\u8FD8\u662F\u8001</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5F53\u8FDE\u63A5\u5904\u7406\u5B8C\u540E\uFF0Cworker \u88ABkill\u6389\uFF0C\u65B0\u542F\u52A8\u7684worker\u4F7F\u7528\u65B0\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u4E5F\u662F\u70ED\u90E8\u7F72\u7684\u539F\u56E0\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">worker\u8FDB\u7A0B\uFF1A\u5DE5\u4F5C\u7684\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u914D\u7F6E\u6587\u4EF6\u7ED3\u6784\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u6838\u5FC3\u6BB5\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">user\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">group:</span></span>
<span class="line"><span style="color:#A6ACCD;">worker:    \u5171\u542F\u52A8\u51E0\u4E2Aworker\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">http\u6BB5\uFF08web\u670D\u52A1\u5668\u751F\u6548\u7684\uFF09\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    server {                    #\u865A\u62DF\u4E3B\u673A</span></span>
<span class="line"><span style="color:#A6ACCD;">        location {                         #location\u672A\u5FC5\u90FD\u5C5E\u4E8Eserver</span></span>
<span class="line"><span style="color:#A6ACCD;">                    ....</span></span>
<span class="line"><span style="color:#A6ACCD;">                  }</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mail\u6BB5\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">mail {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">worker_processes   x\uFF1B       # \u542F\u52A8\u7684work\u7EBF\u7A0B\u6570\uFF0C\u542F\u52A8\u51E0\u4E2A\u901A\u5E38\u548Ccpu\u4E2A\u6570\u76F8\u5173\uFF0Ccpu\u4E2A\u6570\u76841-2\u500D\u4E4B\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#error_log                    #\u9519\u8BEF\u65E5\u5FD7\uFF0C\u9519\u8BEF\u65E5\u5FD7\u5B9A\u4E49\u5728\u4E3B\u6BB5\u4E2D\uFF0C\u56E0\u4E3A\u65E0\u8BBA\u662Fhttp\u670D\u52A1\u8FD8\u662Fmail\u670D\u52A1\u90FD\u4F1A\u4EA7\u751F\u9519\u8BEF\u65E5\u5FD7\uFF0Caccess_log\u5B9A\u4E49\u5728\u666E</span></span>
<span class="line"><span style="color:#A6ACCD;">                                        \u901A\u6BB5\u4E2D\uFF0C\u5373http\u6BB5\u6216\u8005\u662Fmail\u6BB5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">events {                                #\u5B9A\u4E49\u4E8B\u4EF6\u9A71\u52A8\u4E2D\u6BCF\u4E00\u4E2Awork\u6240\u80FD\u652F\u6301\u7684\u8FDE\u63A5\u6570\uFF0C\u4E0D\u662F\u8D8A\u5927\u8D8A\u597D\uFF0C\u8981\u7ECF\u8FC7\u6D4B\u8BD5\u7ED9\u51FA\u5408\u7406\u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker_connections  1024;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    include       mime.types;            #\u6307\u5B9A\u5305\u542B\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_type  application/octet-stream;            #\u6307\u5B9A\u9ED8\u8BA4\u652F\u6301\u7684\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">  #log_format                            #\u5B9A\u4E49\u65E5\u5FD7\u683C\u5F0F\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">  #access_log  logs/access.log  main;                #\u8BBF\u95EE\u65E5\u5FD7\uFF0C\u540E\u9762\u7684main\u548Cnotice\u3001info\u7C7B\u4F3C</span></span>
<span class="line"><span style="color:#A6ACCD;">  sendfile        on;                                    #sendfile\u7684\u529F\u80FD\uFF0C\u4E4B\u524D\u89E3\u91CA\u8FC7</span></span>
<span class="line"><span style="color:#A6ACCD;">    #tcp_nopush     on;                                #\u4E0D\u505A\u63A8\u9001\uFF0C\u89E3\u51B3\u7F51\u7EDC\u62E5\u585E\u7684\u4E00\u79CD\u7B97\u6CD5\uFF0C\u8FD8\u6709\u4E00\u4E2Atcp_nodelay</span></span>
<span class="line"><span style="color:#A6ACCD;">  keepalive_timeout  65;                            #\u4F7F\u7528\u957F\u8FDE\u63A5\u5E76\u6307\u5B9A\u8D85\u65F6\u65F6\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">    #gzip  on;                                                #\u76F8\u5E94\u7ED9\u7528\u6237\u7684\u5185\u5BB9 \u5148\u538B\u7F29\u5728\u53D1\u9001\uFF0C\u53EF\u4EE5\u8282\u7EA6\u8D37\u6B3E</span></span>
<span class="line"><span style="color:#A6ACCD;">  server {                                                     #\u6BCF\u4E00\u4E2Aserver\u5B9A\u4E49\u4E00\u4E2A\u865A\u62DF\u4E3B\u673A</span></span>
<span class="line"><span style="color:#A6ACCD;">            listen       80;</span></span>
<span class="line"><span style="color:#A6ACCD;">            server_name  localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;">            location / {            #\u5F53\u8BBF\u95EE&#39;/&#39;\u8DEF\u5F84\u65F6\uFF0C\u5B9A\u4E49\u7F51\u9875\u9875\u9762\u6240\u5728\u7684\u4F4D\u7F6E\uFF0C\u5982location  /document {. . .}</span></span>
<span class="line"><span style="color:#A6ACCD;">                root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">                index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            #error_page  404              /404.html;         </span></span>
<span class="line"><span style="color:#A6ACCD;">              #404\u9519\u8BEF\u9875\u9762\uFF0C\u9ED8\u8BA4\u5728\u6839\u4E0B\u7684404.html\uFF0C\u4E5F\u53EF\u4EE5\u50CF50.htnl\u5B9A\u4E49\u4E00\u4E2Alocation\u4F4D\u7F6E\uFF0C\u6839&#39;/&#39;\u7684\u4F4D\u7F6E\u5728\u4E0A\u9762\u7684location\u5B9A\u4E49\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">             error_page   500 502 503 504  /50x.html;    </span></span>
<span class="line"><span style="color:#A6ACCD;">             	#\u5F53\u8FD4\u56DE\u7684\u9519\u8BEF\u7801\u662F500 502 503 504\u65F6\uFF0C\u8BFB\u53D6\u6839\u4E0B\u768450x.html\u6587\u4EF6\uFF08\u8FD4\u56DE\u7684\u4E00\u4E2A\u9519\u8BEF\u6587\u4EF6\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">             location = /50x.html {            #\u5982\u679C\u8BBF\u95EE\u7684\u5C31\u662F50x.html\uFF0C\u5230html\u4E0B\u53BB\u627E\uFF08\u4E0B\u4E00\u884C\u7684root html\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">                    root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">            location ~ \\.php$ {			#location ~ \\.(gif|jpg|jpeg|txt)$ {...}    \u5339\u914D\u8FD9\u56DB\u79CD\u683C\u5F0F\u7ED3\u5C3E\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">        #    root           html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        #    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#A6ACCD;">        #    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#A6ACCD;">        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#A6ACCD;">        #    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#A6ACCD;">        #}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">location\u683C\u5F0F\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    location [ = | ~ | ~* | ^~ ] uri {...}</span></span>
<span class="line"><span style="color:#A6ACCD;">    location { } @name {...}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">location  uri { } :      #\uFF5B\uFF5D\u5B9A\u4E49\u7684\u5C5E\u6027\u5BF9uri\u8D77\u59CB\u8DEF\u5F84\u53CA\u5B50\u8DEF\u5F84\u4E0B\u7684\u6240\u6709\u5BF9\u8C61\u90FD\u751F\u6548</span></span>
<span class="line"><span style="color:#A6ACCD;">location  = uri { } :  #\uFF5B\uFF5D\u5B9A\u4E49\u7684\u5C5E\u6027\u53EA\u5BF9\u5F53\u524D\u8DEF\u5F84\u751F\u6548\uFF1B\u5982\u679Curi\u662F\u4E00\u4E2A\u76EE\u5F55\u5219\u53EA\u5BF9\u76EE\u5F55\u8BBF\u95EE\u751F\u6548\uFF0C\u5BF9\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u4E0D\u751F\u6548</span></span>
<span class="line"><span style="color:#A6ACCD;">location  ~ uri { } :    #\u6A21\u5F0F\u5339\u914D\uFF0C\u6B64\u5904\u7684uri\u53EF\u4EE5\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u533A\u5206\u5B57\u7B26\u5927\u5C0F\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">location  ~* uri { } :    #\u6A21\u5F0F\u5339\u914D\uFF0C\u540C~\uFF0C\u552F\u4E00\u7684\u533A\u522B\u662F\u4E0D\u533A\u5206\u5B57\u7B26\u5927\u5C0F\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">location  ^~ uri { } :     #\u4E0D\u4F7F\u7528\uFF08\u7981\u7528\uFF09\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u9010\u5B57\u7B26\u5339\u914D</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5982\u679C\u88AB\u591A\u4E2A\u5339\u914D\u5230\uFF0C\u751F\u6548\u987A\u5E8F\uFF08\u4F18\u5148\u7EA7\uFF09\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">        =\u6700\u9AD8 &gt; ^~\u6B21\u4E4B  &gt; ~\uFF08~*\uFF09\u6B21\u4E4B &gt;\u6CA1\u6709\u4EFB\u4F55\u7B26\u53F7\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">      /document/document\u65F6         location  /document { } :\u6BD4 location  / { } :\u66F4\u7CBE\u786E\uFF0C\u5148\u6BD4\u914D\u5230\u8FD9\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">web\u4E0B\u7684bbs\u76EE\u5F55\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">        location    /bbs/{                    #\u4E0D\u662F/bbs\uFF0C\u540E\u9762\u6709\u4E00\u4E2A&#39;/&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            root /web;                    #\u4E0D\u662F/web/bbs</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u57FA\u4E8Eip\u8FDB\u884C\u8BBF\u95EE\u63A7\u5236(\u9ED8\u8BA4\u4E3Aallow all\uFF0C\u963B\u6B62\u4E00\u4E2Aip\u8BBF\u95EE\u7684\u65F6\u5019\uFF0C\u5199\u4E00\u4E2Adeny ip\u5C31\u884C\uFF0C\u4E0D\u7528\u5199allow all)\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">            location / {                                                #\u5F53\u8BBF\u95EE&#39;/&#39;\u8DEF\u5F84\u65F6\uFF0C\u5B9A\u4E49\u7F51\u9875\u9875\u9762\u6240\u5728\u7684\u4F4D\u7F6E\uFF0C\u5982location  /document {. . .}</span></span>
<span class="line"><span style="color:#A6ACCD;">                root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">                index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">                deny 192.168.1.1;</span></span>
<span class="line"><span style="color:#A6ACCD;">                allow 192.168.1.0/24;</span></span>
<span class="line"><span style="color:#A6ACCD;">                deny all;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span></span>
<span class="line"><span style="color:#A6ACCD;">\u57FA\u4E8E\u7528\u6237\u8FDB\u884C\u8BBF\u95EE\u63A7\u5236\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">            location / {       		 #\u5F53\u8BBF\u95EE&#39;/&#39;\u8DEF\u5F84\u65F6\uFF0C\u5B9A\u4E49\u7F51\u9875\u9875\u9762\u6240\u5728\u7684\u4F4D\u7F6E\uFF0C\u5982location  /document {. . .}</span></span>
<span class="line"><span style="color:#A6ACCD;">                root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">                index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">                auth_basic &#39;Restricted Area...&#39;;                #\u8FD9\u4E2A\u662F\u63D0\u793A\u5B57\u7B26\uFF0C\u53EF\u4EE5\u5199\u5176\u4ED6\u4EFB\u610F\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">                auth_basic_user_file /usr/local/nginx-1.10/conf/.users;            </span></span>
<span class="line"><span style="color:#A6ACCD;">                		#\u7528\u6237\u5E10\u53F7\u9A8C\u8BC1\u6587\u4EF6\uFF0C\u9700\u8981\u4F7F\u7528httpd\u7684htpasswd\u521B\u5EFA</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">        chkconfig --list httpd </span></span>
<span class="line"><span style="color:#A6ACCD;">        \u4F7F\u7528appache\u7684htpasswd\u5DE5\u5177\u521B\u5EFA2\u4E2A\u8D26\u6237\uFF0Ctom\u3001jerry\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">            htpasswd -c -m /usr/local/nginx-1.10/conf/.users  tom	#\u56DE\u8F66\u540E\u8F93\u5165\u5E10\u53F7tom\u7684\u5BC6\u7801\uFF08-c\u662F\u521B\u5EFA\u6587\u4EF6\u7684\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">            htpasswd  -m /usr/local/nginx-1.10/conf/.users  jerry	#\u56DE\u8F66\u540E\u8F93\u5165jerry\u7684\u5BC6\u7801(\u7B2C\u4E8C\u6B21\u4E0D\u80FD\u4F7F\u7528-c\u9009\u9879)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">autoindex\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">          server {                                             </span></span>
<span class="line"><span style="color:#A6ACCD;">            location / {                                       </span></span>
<span class="line"><span style="color:#A6ACCD;">                root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">                index   xx.html;                #\u5C06\u4E3B\u9875\u4FEE\u6539\u4E3A\u4E0D\u5B58\u5728\u7684\u9875\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">                autoindex on;                    #\u5F53\u4E3B\u9875\u4E0D\u5B58\u5728\u65F6\uFF0C\u4F1A\u5C06\u4E3B\u9875\u6240\u6709\u7684\u6587\u4EF6\u5217\u51FA\u6765\uFF0C\u7C7B\u4F3C\u4E0Eftp\u7684\u6837\u5B50\uFF0C\u8FD8\u53EF\u4EE5\u4E0B\u8F7D</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span></span>
<span class="line"><span style="color:#A6ACCD;">stub_status :                                    #\u76F4\u63A5\u4F7F\u7528http://192.168.86.100/status\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#A6ACCD;">           location /status {                    </span></span>
<span class="line"><span style="color:#A6ACCD;">           		#\u6CE8\u610F\u6B64\u5904status\u540E\u9762\u6CA1\u6709\u659C\u7EBF\uFF0C\u548Cbbs\u4E0D\u540C\uFF0C\u662F\u4E0D\u662F\u540E\u9762\u52A0&#39;/&#39;\u4EE3\u8868\u666E\u901A\u76EE\u5F55\uFF0C\u4E0D\u52A0\u662Fngxin\u7684\u5185\u7F6E\u51FD\u6570\uFF1F\uFF1F\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">				\u8FD8\u6709\u4E00\u79CD\u8BF4\u6CD5\uFF0C\u505Aproxy_pass\u53CD\u5411\u4EE3\u7406\u65F6\uFF0C\u5982\u679C\u6B64\u5904\u540E\u9762\u6709\u659C\u7EBF\uFF0C\u540E\u9762http://xxx/bbs/\u6700\u540E\u4E5F\u8981\u6709\u659C\u7EBF</span></span>
<span class="line"><span style="color:#A6ACCD;">            stub_status on;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ssl:</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u8981\u5148\u521B\u5EFA\u8BC1\u4E66\u3001\u79C1\u94A5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u53CD\u5411\u4EE3\u7406\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">1\uFF0Clocation url\uFF5B\uFF5D\uFF0C\u91CC\u9762\u7684proxy_pass\u53EF\u4EE5\u6709\u5176\u4ED6\uFF0C\u5982http://192.168.1.1/from</span></span>
<span class="line"><span style="color:#A6ACCD;">2, location ~*  ^/forum \uFF5B\uFF5D\uFF0C\u91CC\u9762\u7684proxy_pass\u53EA\u80FD\u6709ip\u6216\u57DF\u540D\uFF0C\u5982http://192.168.1.1;   \u4F1A\u5C06\u8DEF\u5F84\u539F\u5C01\u4E0D\u52A8\u7684\u6620\u5C04\u5230\u65B0\u7684\u4E0A\u53BB</span></span>
<span class="line"><span style="color:#A6ACCD;">          \u540E\u7AEF\u7684\u670D\u52A1\u5668\u8981\u548C\u524D\u7AEF\u7684\u670D\u52A1\u5668 \u91CC\u9762\u7684\u6587\u4EF6\u7ED3\u6784\uFF08\u5982\u76EE\u5F55\u540D\u79F0\uFF09\u4E00\u81F4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u91CD\u5B9A\u5411\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u4E34\u65F6\u91CD\u5B9A\u5411\uFF1A302</span></span>
<span class="line"><span style="color:#A6ACCD;">last\uFF1A\u672C\u6B21\u91CD\u5199\u7ED3\u675F\u4E86\uFF0C\u91CD\u542F\u4E0B\u4E00\u8F6E\u68C0\u67E5        #\u901A\u5E38\u4F7F\u7528\u7684\u90FD\u662Flast</span></span>
<span class="line"><span style="color:#A6ACCD;">       \u5982rewrite &#39;^/bbs/(.*)&#39;     http://1.1.1.1/forum,\u91CD\u5199\u540E\u8FD8\u8981\u68C0\u67E5/forum </span></span>
<span class="line"><span style="color:#A6ACCD;">break\uFF1A\u672C\u6B21\u91CD\u5199\u7ED3\u675F\u4E86\uFF0C\u4E0D\u518D\u91CD\u542F\u4E0B\u4E00\u8F6E\u68C0\u67E5\uFF0C\u76F4\u63A5\u6267\u884C\u540E\u7EED\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">redirect\uFF1A\u4E34\u65F6\u91CD\u5B9A\u5411</span></span>
<span class="line"><span style="color:#A6ACCD;">permanent\uFF1A\u6C38\u4E45\u91CD\u5B9A\u5411</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,42),e=[o];function c(t,i,A,C,r,y){return a(),n("div",null,e)}const g=s(l,[["render",c]]);export{u as __pageData,g as default};
