import{_ as s,c as n,o as a,b as l}from"./app.8608f89d.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"20_\u8FD0\u7EF4/10_Linux/150_\u73AF\u5883\u642D\u5EFA/php\u73AF\u5883\u642D\u5EFA.md"}'),p={name:"20_\u8FD0\u7EF4/10_Linux/150_\u73AF\u5883\u642D\u5EFA/php\u73AF\u5883\u642D\u5EFA.md"},e=l(`<p>1\uFF0C\u89E3\u538B\u540E\u8FDB\u5165/root/src/php/php-7.1.6</p><p>2\uFF0C\u4F7F\u7528apache\u7F16\u8BD1\u9009\u9879\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">./configure --prefix=/usr/local/php --with-mysql=/usr/local/mysql --with-openssl --with-mysqli=/usr/local/mysql/bin/mysql_config --enable-mbstring --with-freetype-dir --with-jpeg-dir --with-png-dir --with-zlib --with-libxml-dir=/usr --enable-xml  --enable-sockets --with-apxs2=/usr/local/apache/bin/apxs --with-mcrypt  --with-config-file-path=/etc --with-config-file-scan-dir=/etc/php.d --with-bz2  --enable-maintainer-zts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">apache \u5982\u679C\u4F7F\u7528prefork\uFF0C\u4E0D\u9700\u8981\u4F7F\u7528--enable-maintainer-zts\uFF1B\u4F7F\u7528event\u548Cworker\u9700\u8981\u4F7F\u7528--enable-maintainer-zts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u7F16\u8BD1\u793A\u4F8B\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">./configure --prefix=/usr/local/php_httpd_7.1 --with-pdo-mysql=mysqlnd --with-openssl --with-mysqli=mysqlnd --enable-mbstring --with-freetype-dir --with-jpeg-dir --with-png-dir --with-zlib --with-libxml-dir=  --enable-xml  --enable-sockets --with-apxs2=/usr/local/apache/bin/apxs --with-mcrypt   --with-bz2  --enable-maintainer-zts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4F7F\u7528nginx\u7F16\u8BD1\u9009\u9879\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">./configure --prefix=/usr/local/php_nginx_7.1 --with-curl --with-bz2  --with-zlib --with-mhash --with-pcre-regex  --with-mysqli=mysqlnd --with-mysql=mysqlnd --with-gd --with-jpeg-dir --with-png-dir --with-openssl --with-pdo-mysql --with-libxml-dir --with-freetype-dir --with-iconv --enable-opcache --enable-bcmath --enable-ftp --enable-shmop --enable-fpm --enable-sockets --enable-sysvsem --enable-sysvshm --enable-pcntl --enable-mbregex  --enable-calendar --enable-zip --enable-mbstring --enable-pdo --with-gettext</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#php7.1\u4E2D--with-mysql\u6539\u4E3A\u4E86  --with-pdo-mysql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7F3A\u5931\u7684\u5305\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">configure: error: xml2-config not found. Please check your libxml2 installation</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u51B3\u65B9\u6CD5\uFF1A     yum install -y  libxml2-devel</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">configure: error: Cannot find OpenSSL&#39;s &lt;evp.h&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u51B3\u65B9\u6CD5\uFF1A     yum install -y openssl-devel</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">configure: error: Please reinstall the BZip2 distribution</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u51B3\u65B9\u6CD5\uFF1A     yum install -y bzip2-devel</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">configure: error: Please reinstall the libcurl distribution - easy.h should be in &lt;curl-dir&gt;/include/curl/</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u51B3\u65B9\u6CD5\uFF1A     yum install -y libcurl-devel</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">configure: error: jpeglib.h not found</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u51B3\u65B9\u6CD5\uFF1A     yum install -y libjpeg-turbo-devel</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">configure: error: png.h not found</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u51B3\u65B9\u6CD5\uFF1A     yum install -y libpng-devel</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">configure: error: freetype-config not found</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u51B3\u65B9\u6CD5\uFF1A     yum install -y freetype-devel</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6700\u540E\u6709\u63D0\u793A\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">configure: WARNING: unrecognized options: --with-mysql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">collect2: error: ld returned 1 exit status</span></span>
<span class="line"><span style="color:#A6ACCD;">\u53EF\u80FD\u539F\u56E0\uFF1A\u4F7F\u7528\u7F16\u8BD1\u8FC7nginx\u7248\u672C\u7684php\u6587\u4EF6\u5939\uFF0C\u518D\u6B21\u7F16\u8BD1apache\u7248\u672C\u7684php\uFF0C./configure\u6CA1\u6709\u95EE\u9898\uFF0C\u5728make &amp;&amp; make install\u65F6\u51FA\u73B0\u8FD9\u4E2A\u9519\u8BEF</span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u51B3\u65B9\u6CD5\uFF1A\u5C06php\u7684\u6E90\u7801\u5305\u91CD\u65B0\u52A0\u538B\uFF0C\u5728\u65B0\u89E3\u538B\u7684\u5B89\u88C5\u5305\u4E2D\u7F16\u8BD1\u5373\u53EF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6269\u5C55\u7F16\u8BD1\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u793A\u4F8B\uFF1A \u89E3\u51B3./configure \u65F6\u63D0\u793A\u201Cconfigure: error: mcrypt.h not found. Please reinstall libmcrypt.\u201D</span></span>
<span class="line"><span style="color:#A6ACCD;">wget ftp://mcrypt.hellug.gr/pub/crypto/mcrypt/attic/libmcrypt/libmcrypt-2.5.7.tar.gz</span></span>
<span class="line"><span style="color:#A6ACCD;">tar -zxvf libmcrypt-2.5.7.tar.gz   </span></span>
<span class="line"><span style="color:#A6ACCD;">cd libmcrypt-2.5.7  </span></span>
<span class="line"><span style="color:#A6ACCD;">./configure --prefix=/usr/local/libmcrypt  </span></span>
<span class="line"><span style="color:#A6ACCD;">make &amp;&amp; make install  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u518D\u56DE\u5230PHP-5.5.13\u89E3\u538B\u7F29\u7684ext\u76EE\u5F55\u7684mcrypt\u91CC\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">phpize  </span></span>
<span class="line"><span style="color:#A6ACCD;">./configure --with-php-config=/usr/local/php5/bin/php-config  --with-libmcrypt=/usr/lib/libmcrypt      #\u5728mcrypt\u7684\u89E3\u538B\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">make  </span></span>
<span class="line"><span style="color:#A6ACCD;">make test  </span></span>
<span class="line"><span style="color:#A6ACCD;">make install  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">vim /etc/php.ini    </span></span>
<span class="line"><span style="color:#A6ACCD;">#\u52A0\u5165extension=mcrypt.so  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9644\uFF1A114.55.61.117\u7684php\u7684\u7F16\u8BD1\u53C2\u6570\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Configure Command =&gt;  &#39;./configure&#39;  &#39;--prefix=/usr/local/php56&#39; &#39;--with-config-file-path=/usr/local/php56/etc&#39; &#39;--with-config-file-scan-dir=/usr/local/php56/etc/php.d&#39; &#39;--with-fpm-user=www&#39; &#39;--with-fpm-group=www&#39; &#39;--enable-fpm&#39; &#39;--enable-opcache&#39; &#39;--disable-fileinfo&#39; &#39;--with-mysql=mysqlnd&#39; &#39;--with-mysqli=mysqlnd&#39; &#39;--with-pdo-mysql=mysqlnd&#39; &#39;--with-iconv-dir=/usr/local&#39; &#39;--with-freetype-dir&#39; &#39;--with-jpeg-dir&#39; &#39;--with-png-dir&#39; &#39;--with-zlib&#39; &#39;--with-libxml-dir=/usr&#39; &#39;--enable-xml&#39; &#39;--disable-rpath&#39; &#39;--enable-bcmath&#39; &#39;--enable-shmop&#39; &#39;--enable-exif&#39; &#39;--enable-sysvsem&#39; &#39;--with-curl&#39; &#39;--enable-mbregex&#39; &#39;--enable-inline-optimization&#39; &#39;--enable-mbstring&#39; &#39;--with-mcrypt&#39; &#39;--with-gd&#39; &#39;--enable-gd-native-ttf&#39; &#39;--with-openssl&#39; &#39;--with-mhash&#39; &#39;--enable-pcntl&#39; &#39;--enable-sockets&#39; &#39;--with-xmlrpc&#39; &#39;--enable-ftp&#39; &#39;--enable-intl&#39; &#39;--with-xsl&#39; &#39;--with-gettext&#39; &#39;--enable-zip&#39; &#39;--enable-soap&#39; &#39;--disable-ipv6&#39; &#39;--disable-debug&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,11),i=[e];function t(c,o,r,C,y,A){return a(),n("div",null,i)}const b=s(p,[["render",t]]);export{m as __pageData,b as default};
