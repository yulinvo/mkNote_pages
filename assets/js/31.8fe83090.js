(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{297:function(n,t,e){"use strict";e.r(t);var a=e(13),s=Object(a.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("http://nginx.org/")]),n._v(" "),t("p",[n._v("nginx不支持模块化的方式（apache支持），要结合php只能是fastcgi的方式")]),n._v(" "),t("p",[n._v("php-fpm : 127.0.0.1：9000")]),n._v(" "),t("p",[n._v("[root@vmware ~]#netstat -lnp |grep ':80**>"),t("strong",[n._v("'         #牟定词尾，这样就过滤掉了8080端口，也可以   ':80")]),n._v("\\b**'")]),n._v(" "),t("p",[n._v("netstat -ant |awk '/:80>/{S[$NF]++}END{for (A in S) {print A,S[A]}}'     #统计80端口连接 各种状态的个数")]),n._v(" "),t("p",[n._v("​       $NF是最后一个字段的名称当成下表，此处就是状态；awk '{S[$NF]++}END{for (A in S) {print A,S[A]}}'  取出所有端口连接状态，不只80端口")]),n._v(" "),t("p",[n._v("yum groupinfo 'Devel ...'      #查看组里面的包都有哪些")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("./configure --prefix=/usr/local/nginx_1.13  --with-pcre\n")])])]),t("p",[n._v("用户对web页面的请求直接到nginx上，只是如果是php页面的的请求则转给php，通过fast-cgi协议转给php，fast-cgi协议也需要监听在某个套接字上；php响应完后再给nginx，由nginx构建http(因为请求者无法理解fastcgi协议)报文返回给请求者")]),n._v(" "),t("p",[n._v("同步模型：nginx收到php返回的fastcgi协议报文直接转发给请求者，nginx只是一个透明转发的功能")]),n._v(" "),t("p",[n._v("异步模型+本地缓存：")]),n._v(" "),t("p",[n._v("​     \t异步：nginx收到php返回的fastcgi协议报文，然后封装为http报文返回给请求者")]),n._v(" "),t("p",[n._v("​     \t本地缓存：nginx收到php返回的fastcgi协议报文先缓存一份，其他请求者请求内容如果缓存有（没过期）则直接从这里面取，不用交由php处理了，也可将常见的请求，如php主页放到这里")]),n._v(" "),t("p",[n._v("nginx维持1w个非活动连接，仅需要2.5M内存")]),n._v(" "),t("p",[n._v("当连接数很多mysql压力大时，做一个读写分离（即主从服务器），一台专门做读、一台专门写；如果还不够，在加从服务器")]),n._v(" "),t("p",[n._v("​     还需要加memcache，对速度提升非常非常明显（memcache命中率要高，40%就差不多吧）")]),n._v(" "),t("p",[n._v("​     memcache还可以缓存会话")]),n._v(" "),t("p",[n._v("nginx缓存---\x3excache(php编译结果缓存)---\x3ememcache（mysql查询结果缓存）")]),n._v(" "),t("p",[n._v("代理：所谓代理，就是它帮你找 你需要的东西")]),n._v(" "),t("p",[n._v("正向代理：在客户端前端，如上网代理，类似与总管")]),n._v(" "),t("p",[n._v("反向代理：在服务器前端，如服务器不让直接访问，前端加一个反向代理服务器，类似与秘书")]),n._v(" "),t("p",[n._v("​     nginx的反向代理常被用来代理的服务：web、mail（很少被人提到）")]),n._v(" "),t("p",[n._v("fastcgi_pass：正向代理")]),n._v(" "),t("p",[n._v("proxy_pass：反向代理（rewrite很关键）")]),n._v(" "),t("p",[n._v("源码安装：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("/usr/local/src/nginx-1.10.3]#./configure --help |less          #查看帮助信息， --with的一般是没有启用的，--without一般是默认启用的\n\n./configure --prefix=/usr/local/nginx-1.10 --with-pcre \\\n  --with-http_ssl_module \\\n  --with-http_flv_module \\\n  --with-http_stub_status_module \\\n  --with-http_gzip_static_module \\\n  --http-client-body-temp-path=/var/tmp/nginx/client/ \\\n  --http-proxy-temp-path=/var/tmp/nginx/proxy/ \\\n  --http-fastcgi-temp-path=/var/tmp/nginx/fcgi/ \\\n  --http-uwsgi-temp-path=/var/tmp/nginx/uwsgi \\\n  --http-scgi-temp-path=/var/tmp/nginx/scgi \\\n  --with-pcre    \\\n  --with-file-aio    \\\n  --with-http_image_filter_module    \\\n  --with-http_v2_module    \\\n  --with-ipv6    \\\n  --with-http_realip_module    \n    ##    --with-pcre='xxx'       如果加路径可能有问题\n\nmake && make install \n\n需要安装的包：\nyum install -y gd-devel :\n    否则报错：    ./configure: error: the HTTP image filter module requires the GD library\n\n启动：/usr/local/nginx-1.10/sbin]#./nginx\n检测配置文件：    /usr/local/nginx-1.10/sbin]#./nginx -t\n重载配置文件：    /usr/local/nginx-1.10/sbin]#./nginx -s reload\n停止nginx：    /usr/local/nginx-1.10/sbin]#./nginx -s stop\n查看版本及编译参数：/usr/local/nginx-1.10/sbin]#./nginx -V\n\n启动时报错：\n    nginx: [emerg] mkdir() \"/var/tmp/nginx/client/\" failed (2: No such file or directory)\n    解决方法：\n        创建目录：mkdir -p /var/tmp/nginx/client\n\n")])])]),t("p",[n._v("nginx的启动脚本：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('cat /etc/init.d/nginx\n\n#! /bin/bash\n# chkconfig: 35 85 15  \n# description: Nginx is an HTTP(S) server, HTTP(S) reverse\nset -e\nDESC="nginx daemon"\nNAME=nginx\nDAEMON=/usr/local/nginx-1.10/sbin/$NAME\nSCRIPTNAME=/etc/init.d/$NAME\ntest -x $DAEMON || exit 0\nd_start(){\n    $DAEMON || echo -n " already running"\n}\nd_stop() {\n    $DAEMON -s quit || echo -n " not running"\n}\nd_reload() {\n    $DAEMON -s reload || echo -n " counld not reload" && echo &&exit\n}\ncase "$1" in\nstart)\n    echo -n "Starting $DESC:$NAME"\n    d_start\n    echo "."\n;;\nstop)\n    echo -n "Stopping $DESC:$NAME"\n    d_stop\n    echo "."\n;;\nreload)\n    echo -n "Reloading $DESC configuration..."\n    d_reload\n    echo "reloaded."\n;;\nrestart)\n    echo -n "Restarting $DESC: $NAME"\n    d_stop\n    sleep 2\n    d_start\n    echo "."\n;;\n*)\n    echo "Usage: $SCRIPTNAME {start|stop|restart|reload}" >&2\n    exit 3\n;;\nesac\nexit 0\n')])])]),t("p",[n._v("支持http referer验证（反盗链）：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("referer：访问有两种方式：1，直接输入url地址     2，通过点击访问，referer就是这种\n")])])]),t("p",[n._v("支持flv流和mp4流：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("边下载边播\n")])])]),t("p",[n._v("进程：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("master进程：启动worker进程（以普通用户启动，更安全）；监控worker进程；负责装载配置文件（配置文件生效后 老worker还是老\n    的配置文件，当连接处理完后，worker 被kill掉，新启动的worker使用新的配置文件，这也是热部署的原因）\nworker进程：工作的进程\n")])])]),t("p",[n._v("配置文件结构：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("核心段：\nuser：\ngroup:\nworker:    共启动几个worker进程\n\nhttp段（web服务器生效的）：\nhttp {\n    server {                    #虚拟主机\n        location {                         #location未必都属于server\n                    ....\n                  }\n           }\n    }\n\nmail段：\nmail {\n    \n    }\n")])])]),t("p",[n._v("配置文件详解：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("worker_processes   x；       # 启动的work线程数，启动几个通常和cpu个数相关，cpu个数的1-2倍之间\n\n#error_log                    #错误日志，错误日志定义在主段中，因为无论是http服务还是mail服务都会产生错误日志，access_log定义在普\n                                        通段中，即http段或者是mail段\n\nevents {                                #定义事件驱动中每一个work所能支持的连接数，不是越大越好，要经过测试给出合理的值\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;            #指定包含的文件\n    default_type  application/octet-stream;            #指定默认支持的类型\n  #log_format                            #定义日志格式的\n  #access_log  logs/access.log  main;                #访问日志，后面的main和notice、info类似\n  sendfile        on;                                    #sendfile的功能，之前解释过\n    #tcp_nopush     on;                                #不做推送，解决网络拥塞的一种算法，还有一个tcp_nodelay\n  keepalive_timeout  65;                            #使用长连接并指定超时时间\n    #gzip  on;                                                #相应给用户的内容 先压缩在发送，可以节约贷款\n  server {                                                     #每一个server定义一个虚拟主机\n            listen       80;\n            server_name  localhost;\n            location / {            #当访问'/'路径时，定义网页页面所在的位置，如location  /document {. . .}\n                root   html;\n                index  index.html index.htm;\n                    }\n\n            #error_page  404              /404.html;         \n              #404错误页面，默认在根下的404.html，也可以像50.htnl定义一个location位置，根'/'的位置在上面的location定义了\n\n             error_page   500 502 503 504  /50x.html;    \n             \t#当返回的错误码是500 502 503 504时，读取根下的50x.html文件（返回的一个错误文件）\n             location = /50x.html {            #如果访问的就是50x.html，到html下去找（下一行的root html）\n                    root   html;\n                    }\n        \n            location ~ \\.php$ {\t\t\t#location ~ \\.(gif|jpg|jpeg|txt)$ {...}    匹配这四种格式结尾的文件\n        #    root           html;\n        #    fastcgi_pass   127.0.0.1:9000;\n        #    fastcgi_index  index.php;\n        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;\n        #    include        fastcgi_params;\n        #}\n\n\n\n\n\n\n\nlocation格式：\n    location [ = | ~ | ~* | ^~ ] uri {...}\n    location { } @name {...}\n\nlocation  uri { } :      #｛｝定义的属性对uri起始路径及子路径下的所有对象都生效\nlocation  = uri { } :  #｛｝定义的属性只对当前路径生效；如果uri是一个目录则只对目录访问生效，对目录下的文件不生效\nlocation  ~ uri { } :    #模式匹配，此处的uri可以使用正则表达式，区分字符大小写\nlocation  ~* uri { } :    #模式匹配，同~，唯一的区别是不区分字符大小写\nlocation  ^~ uri { } :     #不使用（禁用）正则表达式，逐字符匹配\n如果被多个匹配到，生效顺序（优先级）：\n        =最高 > ^~次之  > ~（~*）次之 >没有任何符号的\n      /document/document时         location  /document { } :比 location  / { } :更精确，先比配到这个\n\n\nweb下的bbs目录：\n        location    /bbs/{                    #不是/bbs，后面有一个'/'\n            root /web;                    #不是/web/bbs\n            }\n\n基于ip进行访问控制(默认为allow all，阻止一个ip访问的时候，写一个deny ip就行，不用写allow all)：\n            location / {                                                #当访问'/'路径时，定义网页页面所在的位置，如location  /document {. . .}\n                root   html;\n                index  index.html index.htm;\n                deny 192.168.1.1;\n                allow 192.168.1.0/24;\n                deny all;\n                    }\n                    \n基于用户进行访问控制：\n            location / {       \t\t #当访问'/'路径时，定义网页页面所在的位置，如location  /document {. . .}\n                root   html;\n                index  index.html index.htm;\n                auth_basic 'Restricted Area...';                #这个是提示字符，可以写其他任意值\n                auth_basic_user_file /usr/local/nginx-1.10/conf/.users;            \n                \t\t#用户帐号验证文件，需要使用httpd的htpasswd创建\n                    }\n        chkconfig --list httpd \n        使用appache的htpasswd工具创建2个账户，tom、jerry：\n            htpasswd -c -m /usr/local/nginx-1.10/conf/.users  tom\t#回车后输入帐号tom的密码（-c是创建文件的）\n            htpasswd  -m /usr/local/nginx-1.10/conf/.users  jerry\t#回车后输入jerry的密码(第二次不能使用-c选项)\n\nautoindex：\n          server {                                             \n            location / {                                       \n                root   html;\n                index   xx.html;                #将主页修改为不存在的页面\n                autoindex on;                    #当主页不存在时，会将主页所有的文件列出来，类似与ftp的样子，还可以下载\n                    }\n                    \nstub_status :                                    #直接使用http://192.168.86.100/status访问\n           location /status {                    \n           \t\t#注意此处status后面没有斜线，和bbs不同，是不是后面加'/'代表普通目录，不加是ngxin的内置函数？？？\n\t\t\t\t还有一种说法，做proxy_pass反向代理时，如果此处后面有斜线，后面http://xxx/bbs/最后也要有斜线\n            stub_status on;\n            }\n\nssl:\n    要先创建证书、私钥\n")])])]),t("p",[n._v("反向代理：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("1，location url｛｝，里面的proxy_pass可以有其他，如http://192.168.1.1/from\n2, location ~*  ^/forum ｛｝，里面的proxy_pass只能有ip或域名，如http://192.168.1.1;   会将路径原封不动的映射到新的上去\n          后端的服务器要和前端的服务器 里面的文件结构（如目录名称）一致\n")])])]),t("p",[n._v("重定向：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("临时重定向：302\nlast：本次重写结束了，重启下一轮检查        #通常使用的都是last\n       如rewrite '^/bbs/(.*)'     http://1.1.1.1/forum,重写后还要检查/forum \nbreak：本次重写结束了，不再重启下一轮检查，直接执行后续操作\nredirect：临时重定向\npermanent：永久重定向\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);