(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{293:function(e,n,a){"use strict";a.r(n);var t=a(13),s=Object(t.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("elinks "),n("a",{attrs:{href:"http://172.16.10.1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://172.16.10.1"),n("OutboundLink")],1),e._v("  纯文本交互式打开连接  #elinks和curl")]),e._v(" "),n("p",[e._v("​\t\t-dump  显示完网页后就退出，不在显示交互式模式")]),e._v(" "),n("p",[e._v("​\t\t-source  显示网页的源代码")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("./configure \\\n--prefix=/usr/local/apache \\\n--enable-so \\\n--enable-ssl \\\n--enable-cgi \\\n--enable-cgid   \\\n--enable-rewrite \\\n--with-zlib \\\n--with-pcre \\\n--with-apr=/usr/local/apr \\\n--with-apr-util=/usr/local/apr-util \\\n--enable-modules=most \\\n--enable-mods-shared=most \\\n--enable-mpms-shared=all    \n(--with-mpm=event )        #默认就是event，这一句不用指定\n\n#--with-apr=/usr/local/apr --with-apr-util=/usr/local/apr-util 可以使用 --with-included-apr 代替\n--sysconfdir    指定的是配置文件的安装路径\n--enable-so    支持动态共享模块\n--enable-mods-shared    ：是否启用共享模块\nmpm：prefork、worker、event（后两种需要php编译成zts格式）\n        httpd v2.4可以支持3种格式切换，且v2.4的默认支持的是event格式的（性能最好），之前的版本rpm安装默认是prefork模式的\n        --enable-mpms-shared=，    可以指定使用三个中的哪些，或者是all\n        --with-mpm=      指定使用三个中的哪个作为默认值，默认就是event；\n                                        如果没有--enable-mpms-shared只有--with-mpm=这句，表示只安装event\n\n--enable-modules=most  会安装一个2.4才有的模块，mod_proxy_fcgi ，这个模块如果之前版本要使用，需要额外编译\n")])])]),n("p",[e._v("mpm:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("prefork：（一个请求用一个进程响应）预先生成进程\nworker:（一个请求用一个线程响应）基于线程来工作；一个进程相应多个用户请求，但是一个进程下使用多个线程相应用户请求\nevent:（一个进程处理多个请求）基于事件的驱动，一个进程处理多个用户请求，不是基于线程而是一个进程直接处理多个请求\n")])])]),n("p",[e._v("apr：不同的平台需要不同的httpd版本，一个折中的方法是通过apr实现不同系统平台的移植，类似与java的虚拟机")]),e._v(" "),n("p",[e._v("rpm包安装后文件通常存在的位置：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("二进制程序：/bin,/sbin,/usr/bin,/usr/sbin\n库文件：/lib,/usr/lib\n配置文件：/etc\n帮助文档：/usr/share/{doc,man}\n")])])]),n("p",[e._v("includes 头文件")]),e._v(" "),n("p",[e._v("httpd的启动脚本：rpm安装的有这个启动脚本，照着那个修改下（推荐使用这种，不推荐使用下面这种）；")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("或者直接将/usr/local/bin/apachectl 复制到/etc/init.d/httpd，里面加上一行# chkconfig:35 85 15 和 #description两行\n不加#chkconfig这一行无法加入到chkconfig list中，而且需要chkconfig httpd on（这个新加入的默认都是off，不知道什么原因？？？）\n")])])]),n("p",[e._v("apache安装完后目录：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("build：编译的时候一个目录，不用管它\ncgi-bin：执行cgi程序的存放位置\nicons：提供的一些图标\ninclude：头文件，如果对apache进行二次开发的话会用到这个目录\nerror：错误信息，不是错误日志\nlogs：日志文件（PID文件也在此目录下，通常pid文件在/var/run下）\nman：帮助文件\nmanual：手册，官方手册\nmodules：模块目录\n")])])]),n("p",[e._v("httpd.conf：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('PidFile    \'/var/run/httpd.pid\'            定义pid文件的存放位置，httpd中没有定义\n\n可以监听多个端口，还可以监听指定IP+端口：\n    Listen 80\n    Listen 8080\n    Listen 192.168.100.1:8080\n\nServerAdmin you@example.com:    站点管理员，如访问网页异常时，显示请联系管理员xxx，serveradmin就是这个功能\n\nLoadModule    模块名称    模块位置        (模块的相对位置是相对于 ServerRoot "/usr/local/apache"    而言的)\n\nDocumentRoot "/usr/local/apache/htdocs"    #文档根目录\n\n<Directory "/usr/local/apache/htdocs">\n    Options Indexes FollowSymLinks    #被访问时的访问属性\n               indexs：允许索引目录：\n                FollowSymLinks：允许符号连接，就是可以访问软连接指向的源文件，生成环境中不建议开启\n                includes：允许执行服务器端包含ssi格式的网页文件，也是不安全的\n                SymLinksifOwnerMatch：允许执行符号链接，但是属组要跟执行http的进程的用户的属组匹配\n                ExecCGI：是否允许执行cgi脚本；这一项有时候会有用\n                MultiViews：多视图，是内容协商的一种机制，能根据客户端来源的语言和文字来判定应该显示哪一种网页给你\n                        （如不同国家的客户端访问主页时显示的不一样）；这样很消耗资源，如果不是国际化网站不建议开启\n                ALL：支持所有\n                None：都不启用，默认是这项\n    AllowOverride None        #\n                authconfig：基于配置文件认证\n                        AuthType Basic\n                        AuthName "Restricted Files"\n                        AuthUserFile /usr/local/apache/passwd/passwords\n                        AuthGroupFile /usr/local/apache/passwd/htgroup        \n                        \t#要先创建密码文件，文件内容    myusers : hadoop tom\n                        Require user marion                #只支持marion用户\n                        Require user valid-user            \n                        \t#只要出现在apache/passwd/passwords文件中的用户都可以访问\n                        Require group myusers\n                  \n                order：基于主机的访问控制功能，ip、网络地址或主机定义访问控制机制\n                Order allow,deny\n                allow from xx    如：allow from 192.168.10.3    192.168.100.10    中间使用空格隔开就行\n                deny from xx\n\n    Require all granted\n</Directory>\n\n<IfModule mod_userdir.c>\n        UserDir disable    #是否允许在个人的家目录中简历网站，如果允许，个人页面http://192.168.10.1/~tom访问\n        UserDir public_html    #用户家目录下的public_html文件夹下的文件（可以定义为其他）当做用户的个人网站访问\n</IfModule>\n\nTypesConfig conf/mime.types            #多功能互联网邮件扩展，让http能够传输多媒体文档，传输非二进制格式文件，\n\t\t\t指定哪个文件（mime.types）定义了可以传输的文件类型\n\n\n<IfModule dir_module>\n    DirectoryIndex index.html          # 如果DocumentRoot中没有index.html，则会将Document中的文件在web列出，可以下载，是不是要index？\n</IfModule>\n\n')])])]),n("p",[e._v("apachectl  -t：检测配置文件是否有错误，没有则OK")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[root@vm-2 /usr/local/apache/conf]#apachectl -t\nAH00558: httpd: Could not reliably determine the server's fully qualified domain name, using fe80::fedd:b7a0:405a:2cc. Set the 'ServerName' directive globally to suppress this message\n\n解决方法：\n添加一行即可：ServerName localhost:80\n")])])]),n("p",[e._v("httpd -t：也是语法测试")]),e._v(" "),n("p",[e._v("httpd -l：")]),e._v(" "),n("p",[e._v("httpd -M：列出模块")]),e._v(" "),n("p",[e._v("a=${b-\"xx\"}     如果b有值则将值赋予a，如果没有值则将'xx'赋予a")]),e._v(" "),n("p",[e._v("最后的一部分换模块（event--\x3eprefork）")]),e._v(" "),n("p",[e._v("访问控制：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("2.4之前是这种格式：\n    Order allow,deny\n    allow from all\n2.4是这种：\n    Require user username\n    Require user groupname\n    Require ip    ipaddr\n        Require ip  172.16.0.0/255.255.0.0 = 172.16.0.0/16 = 172.16         #允许这个段的ip访问\n        qureire not ip xx        #不允许这个段的ip访问\n    Require host hostname\n        Require host www.mageedu.com\n                      .magedu.com\n        Require all granted                #允许所有主机访问（不对IP生效么？）\n        Require all denied                    #拒绝所有主机访问（对IP生效么？）\n")])])]),n("p",[e._v("apache + php环境下需要修改的内容：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("php编译完成后，在httpd.conf会自动添加一项：LoadModule php7_module        modules/libphp7.so\n\n手工添加：\n1，httpd.conf中添加一项：\n        AddType application/x-httpd-php .php\n        AddType application/x-httpd-php-source .phps            #配置支持php源码\n2，\n    <IfModule dir_module>\n        DirectoryIndex index.php index.html                #此处修改添加一项index.php主页\n    </IfModule>\n")])])]),n("p",[e._v("配置虚拟主机：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('1，httpd.conf中注释中心主机    #DocumentRoot "/usr/local/apache/htdocs" （默认是开启的）\n2，打开    Include conf/extra/httpd-vhosts.conf\n\nvi httpd-vhosts.conf :\n    1,    # Required modules: mod_log_config    ，\n                确保httpd.conf中启用了（默认就是启用的）LoadModule log_config_module modules/mod_log_config.so\n    \n\n')])])]),n("p",[e._v("压力测试：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("-c：并发数\n-n：请求的个数（通常大于-c的个数）\n-r：忽略\nab -r -c 10 -n 100 http://www.a.org/index.html\n    请求php文件是观察xchache加速的效果\n\nnetstat -an ：压力测试的请求要过一会才消失，time_wait状态会持续一段时间\n")])])]),n("p",[e._v("ulimit -n 10000：linux中默认每个中段不能打开超过1024个文件，就是1024个socket，通过ulimit修改打开的文件个数")]),e._v(" "),n("p",[e._v("openssl rand -base64 10 ：生成随机数")]),e._v(" "),n("p",[e._v("vmstat 1：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("观察bi（磁盘文件读到内存），bo（内存写入到磁盘），in：中断次数，cs：上下文切换\n    r：运行队列的长度   b：阻塞队列长度（等待从磁盘读获取数据）\n")])])]),n("p",[e._v("top：top中的load average队列长度")]),e._v(" "),n("p",[e._v("遇见问题总结：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("问题：You don't have permission to access /index.html on this server.\n\n原因：\n开始以为是因为权限的配置问题，将 Require all denied改为 Require all granted之后问题依然存在\n<Directory />\n    AllowOverride none\n    Require all denied\n</Directory>\n\n\n可能存在的原因，这边遇见的问题是第二种原因造成的：\n            原因1：index.html是用root用户建的文件，apache权限不够。\n            解决方法：更改文件权限；chmod 755 index.html\n    原因2：是Apache  的配置文件httpd-vhosts.conf里，打开了扩展配置\n            # Virtual hosts\n           Include conf/extra/httpd-vhosts.conf\n            前面的#去掉了，就 引入了扩展配置，而扩展配置 文件里又没配好相应 的权限“Allow from all”，所以提示此错误\n\n")])])]),n("p",[e._v("apache的查看帮助信息：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("httpd.conf中打开：Include conf/extra/httpd-manual.conf\n输入：http://192.168.86.101/manual/  即可查看帮助信息\n\n[root@vm-2 /usr/local/apache/conf]#httpd -t\nAH00526: Syntax error on line 36 of /usr/local/apache/conf/extra/httpd-manual.conf:\nInvalid command 'LanguagePriority', perhaps misspelled or defined by a module not included in the server configuration\n解决方法：\n    httpd.conf中打开LoadModule negotiation_module modules/mod_negotiation.so\n\n另外：httpd-manual.conf中第36行将语言优先次序改下好像有用\n        LanguagePriority  zh-cn  en  fr  ko ja tr es de  pt-br da ru\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);