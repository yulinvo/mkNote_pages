import{_ as s,c as a,o as n,b as l}from"./app.8608f89d.js";const u=JSON.parse('{"title":"backup_clear.sh","description":"","frontmatter":{},"headers":[{"level":2,"title":"backup_clear.sh","slug":"backup-clear-sh"},{"level":2,"title":"monitortopcpu.sh","slug":"monitor-top-cpu-sh"},{"level":2,"title":"monitorweixinxiangshidu.sh","slug":"monitor-weixin-xiangshidu-sh"},{"level":2,"title":"monitor_zwbi.sh","slug":"monitor-zwbi-sh"},{"level":2,"title":"monitor_seaslog.sh","slug":"monitor-seaslog-sh"},{"level":2,"title":"monitor_ifstat.sh","slug":"monitor-ifstat-sh"},{"level":2,"title":"monitor_disk.sh","slug":"monitor-disk-sh"},{"level":2,"title":"monitorcpumemory.sh","slug":"monitor-cpu-memory-sh"},{"level":2,"title":"monitor_back.sh","slug":"monitor-back-sh"}],"relativePath":"20_\u8FD0\u7EF4/10_Linux/1000_shell/01_shell\u811A\u672C\u7EC3\u4E60.md"}'),p={name:"20_\u8FD0\u7EF4/10_Linux/1000_shell/01_shell\u811A\u672C\u7EC3\u4E60.md"},e=l(`<h2 id="backup-clear-sh" tabindex="-1">backup_clear.sh <a class="header-anchor" href="#backup-clear-sh" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">yy_21=\`date -d &#39;-20 days&#39; +%Y\`</span></span>
<span class="line"><span style="color:#A6ACCD;">mm_21=\`date -d &#39;-20 days&#39; +%m\`</span></span>
<span class="line"><span style="color:#A6ACCD;">dd_21=\`date -d &#39;-20 days&#39; +%d\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">date_21=$yy_21$mm_21$dd_21</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#rm -f $yy&quot;_&quot;$mm&quot;_&quot;$dd&quot;_&quot;*.sql.zip</span></span>
<span class="line"><span style="color:#A6ACCD;">#ls -l  $yy&quot;_&quot;$mm&quot;_&quot;$dd&quot;_&quot;*.sql.zip</span></span>
<span class="line"><span style="color:#A6ACCD;">#echo  -e  &quot;$yy&quot;_&quot;$mm&quot;_&quot;$dd&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">#echo  -e  $yy&quot;_&quot;$mm&quot;_&quot;$dd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">find /backup/ -maxdepth 1 -name &#39;*.sql.zip&#39;| sed &#39;s/\\/backup\\///g&#39;   | awk -F&#39;_&#39; &#39;{print $1$2$3}&#39; | while read line ;do  [  $line -lt $date_21 ] &amp;&amp; echo $line &gt;&gt;/home/shanhuifu/monitor/back_remove.txt ;done</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">while read line ; do year=\`echo $line | cut -c &#39;1-4&#39;\`;mouth=\`echo $line|cut -c 5-6\`;day=\`echo $line|cut -c 7-8\`;rm -f /backup/$year&quot;_&quot;$mouth&quot;_&quot;$day*.sql.zip;done&lt;/home/shanhuifu/monitor/back_remove.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;/home/shanhuifu/monitor/back_remove.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="monitor-top-cpu-sh" tabindex="-1">monitor_top_cpu.sh <a class="header-anchor" href="#monitor-top-cpu-sh" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">while :</span></span>
<span class="line"><span style="color:#A6ACCD;">do</span></span>
<span class="line"><span style="color:#A6ACCD;">ss=\`top -n 1 | grep -v &#39;mysqld&#39;|sed -n &#39;7,$p&#39; | awk &#39;$10&gt;100{print &quot;CPU:&quot;$10,&quot;COMMAND:&quot;$13,&quot;\\t&quot;}&#39;\`</span></span>
<span class="line"><span style="color:#A6ACCD;">ss_num=\`echo $ss|grep &#39;CPU&#39;|wc -l\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[ $ss_num -ge 1 ] &amp;&amp; echo $ss|mail -s &quot;\u6709\u8FDB\u7A0B\u5360\u7528CPU\u8D85\u8FC7100%&quot; 729100483@qq.com</span></span>
<span class="line"><span style="color:#A6ACCD;">ss_num=0</span></span>
<span class="line"><span style="color:#A6ACCD;">sleep 10</span></span>
<span class="line"><span style="color:#A6ACCD;">done</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="monitor-weixin-xiangshidu-sh" tabindex="-1">monitor_weixin_xiangshidu.sh <a class="header-anchor" href="#monitor-weixin-xiangshidu-sh" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">last_sync_val=\`mysql -u&#39;zwbi_dev&#39; -p&#39;zwbi&amp;Un9pl0&#39; -e &#39;use zwbi_dev;SELECT max(last_sync_similiarity_timestamp) from weixin;&#39;\`</span></span>
<span class="line"><span style="color:#A6ACCD;">time_sync=\`echo $last_sync_val|awk &#39;{print $2}&#39;\`</span></span>
<span class="line"><span style="color:#A6ACCD;">time_now=\`date +%s\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">aa=$[((time_now)-$time_sync)/3600]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[ $aa -gt 5 ] &amp;&amp; echo &#39;\u5468\u65E5\u7684\u76F8\u8BC6\u5EA6\u68C0\u67E5\uFF08\u7C89\u4E1D\u540C\u6B65\uFF09\u6CA1\u6709\u6210\u529F&#39;|mail -s &#39;\u5468\u516D\u7684\u76F8\u8BC6\u5EA6\u68C0\u67E5\uFF08\u7C89\u4E1D\u540C\u6B65\uFF09\u6CA1\u6709\u6210\u529F&#39; 729100483@qq.com 329571457@qq.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="monitor-zwbi-sh" tabindex="-1">monitor_zwbi.sh <a class="header-anchor" href="#monitor-zwbi-sh" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">time1=\`date +%s\`</span></span>
<span class="line"><span style="color:#A6ACCD;">time2=$[$time1+10]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">while :</span></span>
<span class="line"><span style="color:#A6ACCD;">do</span></span>
<span class="line"><span style="color:#A6ACCD;">sleep 10</span></span>
<span class="line"><span style="color:#A6ACCD;">#mysql_code=\`mysql -u&#39;zwbi_dev&#39; -p&#39;zwbi&amp;Un9pl0&#39; -e &#39;show databases&#39;\`</span></span>
<span class="line"><span style="color:#A6ACCD;">#mysql -u&#39;zwbi_dev&#39; -p&#39;zwbi&amp;Un9pl0&#39; -e &#39;show databases&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">#time2=\`date +%s\`</span></span>
<span class="line"><span style="color:#A6ACCD;">#time2=$[$time1+10]</span></span>
<span class="line"><span style="color:#A6ACCD;">interval=$[($time2-$time1)%600]</span></span>
<span class="line"><span style="color:#A6ACCD;">#interval=$[($time2-$time1)%60]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mysql -u&#39;zwbi_dev&#39; -p&#39;zwbi&amp;Un9pl0&#39; -e &#39;show databases&#39; &amp;&gt;/home/shanhuifu/monitor/monitor_mysql.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">value1=\`grep -c -e &#39;Database&#39; -e &#39;zwbi_dev&#39; -e &#39;information_schema&#39;  /home/shanhuifu/monitor/monitor_mysql.txt\`</span></span>
<span class="line"><span style="color:#A6ACCD;">[ $value1 -ne 3 ] &amp;&amp; [ $interval -eq 10 ] &amp;&amp; \`echo BI\u6570\u636E\u5E93\u65E0\u6CD5\u8FDE\u63A5|mail -s &#39;BI\u6570\u636E\u5E93\u65E0\u6CD5\u8FDE\u63A5&#39; 729100483@qq.com 329571457@qq.com\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">http_code=\`curl -I bi.wozhangwan.com/public/index | grep ^HTTP | egrep -o &#39;\\&lt;([0-9]{3})\\&gt;&#39;\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">#[ \${http_code} -ne 200 ] &amp;&amp; [ $interval -eq 10 ] &amp;&amp; \`echo BI\u4E3B\u9875\u65E0\u6CD5\u6253\u5F00|mail -s &#39;BI\u4E3B\u9875\u65E0\u6CD5\u6253\u5F00&#39; 729100483@qq.com 329571457@qq.com\`</span></span>
<span class="line"><span style="color:#A6ACCD;">[ \${http_code} -ne 200 ] &amp;&amp; service php-fpm restart &amp;&amp; [ $interval -eq 10 ] &amp;&amp; \`echo &quot;BI\u4E3B\u9875\u65E0\u6CD5\u6253\u5F00 $time2&quot; |mail -s &#39;BI\u4E3B\u9875\u65E0\u6CD5\u6253\u5F00&#39; 729100483@qq.com 329571457@qq.com\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">if [ \${http_code} -eq 200 ];then</span></span>
<span class="line"><span style="color:#A6ACCD;">    curl -v  -d &quot;phone=13222222222&amp;password=654321&quot; http://bi.wozhangwan.com/public/doLogin  &amp;&gt;/home/shanhuifu/monitor/monitor_login.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">    value2=\`grep -c &#39;&quot;status&quot;:true,&quot;message&quot;:&quot;OK&quot;&#39; /home/shanhuifu/monitor/monitor_login.txt\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    [ $value2 -ne 1 ] &amp;&amp; [ $interval -eq 10 ] &amp;&amp; \`echo BI\u4E3B\u9875\u53EF\u4EE5\u6253\u5F00\u4F46\u5E10\u53F7\u65E0\u6CD5\u767B\u5F55|mail -s &#39;BI\u4E3B\u9875\u53EF\u4EE5\u6253\u5F00\u4F46\u5E10\u53F7\u65E0\u6CD5\u767B\u5F55&#39; 729100483@qq.com 329571457@qq.com\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    rm -f /home/shanhuifu/monitor/monitor_login.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">fi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">rm -f /home/shanhuifu/monitor/monitor_mysql.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">time2=$[$time2+10]</span></span>
<span class="line"><span style="color:#A6ACCD;">[ $value1 -eq 3 ] &amp;&amp; [ \${http_code} -eq 200 ] &amp;&amp; [ $value2 -eq 1 ] &amp;&amp; time1=\`date +%s\` &amp;&amp; time2=$[$time1+10]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">done</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="monitor-seaslog-sh" tabindex="-1">monitor_seaslog.sh <a class="header-anchor" href="#monitor-seaslog-sh" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">size=\`du -hs /seaslog/default/|awk &#39;{print $1}&#39;\`</span></span>
<span class="line"><span style="color:#A6ACCD;">count_M=\`echo $size|grep -c M$\`</span></span>
<span class="line"><span style="color:#A6ACCD;">count_G=\`echo $size|grep -c G$\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">while [ $count_G -eq 1 ];</span></span>
<span class="line"><span style="color:#A6ACCD;">do</span></span>
<span class="line"><span style="color:#A6ACCD;">ls /seaslog/default/critical.2017* | sort -g  | head -5 | xargs rm -f</span></span>
<span class="line"><span style="color:#A6ACCD;">ls  /seaslog/default/info.2017*|sort -g | head -5|xargs rm -f</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">size=\`du -hs /seaslog/default/|awk &#39;{print $1}&#39;\`</span></span>
<span class="line"><span style="color:#A6ACCD;">count_G=\`echo $size|grep -c G$\`</span></span>
<span class="line"><span style="color:#A6ACCD;">sleep 10</span></span>
<span class="line"><span style="color:#A6ACCD;">done</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="monitor-ifstat-sh" tabindex="-1">monitor_ifstat.sh <a class="header-anchor" href="#monitor-ifstat-sh" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">while :</span></span>
<span class="line"><span style="color:#A6ACCD;">do</span></span>
<span class="line"><span style="color:#A6ACCD;">    i=0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    sum_rate=0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    while [ $i -lt  30 ];do</span></span>
<span class="line"><span style="color:#A6ACCD;">    /usr/local/ifstat/bin/ifstat -b -i eth1&gt;//home/shanhuifu/monitor/monitor_ifstat.txt &amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">    sleep 10</span></span>
<span class="line"><span style="color:#A6ACCD;">    ps -ef|grep &#39;[0-9] /usr/local/ifstat/bin/ifstat -b -i eth1&#39;|awk &#39;{print $2}&#39;|xargs kill</span></span>
<span class="line"><span style="color:#A6ACCD;">    #tail -1 1.txt |awk &#39;{print &quot;in:&quot;$1,&quot;out:&quot;$2,&quot;total:&quot;$1+$2}&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    rate=\`tail -1 /home/shanhuifu/monitor/monitor_ifstat.txt |awk &#39;{print $1+$2}&#39;|awk -F&#39;.&#39; &#39;{print $1}&#39;\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    sum_rate=$[$rate+$sum_rate];</span></span>
<span class="line"><span style="color:#A6ACCD;">    i=$[$i+1];</span></span>
<span class="line"><span style="color:#A6ACCD;">    done</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">avg_rate=$[$sum_rate/30];</span></span>
<span class="line"><span style="color:#A6ACCD;">[ $avg_rate -gt 3000 ] &amp;&amp;  echo &quot;\u5F53\u524D5\u5206\u949F\u5E73\u5747\u6D41\u91CF\u8F83\u5927,\u5E73\u5747\u6D41\u91CF\u503C\u4E3A:$avg_rate&quot;&quot;kbps&quot;|mail -s &#39;\u5F53\u524D5\u5206\u949F\u5E73\u5747\u6D41\u91CF\u8F83\u5927&#39; 729100483@qq.com</span></span>
<span class="line"><span style="color:#A6ACCD;">rm -f /home/shanhuifu/monitor/monitor_ifstat.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">sleep 300</span></span>
<span class="line"><span style="color:#A6ACCD;">done</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="monitor-disk-sh" tabindex="-1">monitor_disk.sh <a class="header-anchor" href="#monitor-disk-sh" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">time1=\`date +%s\`</span></span>
<span class="line"><span style="color:#A6ACCD;">time2=$[$time1+600]</span></span>
<span class="line"><span style="color:#A6ACCD;">while :</span></span>
<span class="line"><span style="color:#A6ACCD;">do</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">hh=\`date +%H\`</span></span>
<span class="line"><span style="color:#A6ACCD;">mm=\`date +%M\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">value=$[($time2-$time1)%18000]</span></span>
<span class="line"><span style="color:#A6ACCD;">df -h | grep -v &#39;tmpfs&#39; | grep -v &#39;/dev/vdb2&#39; |awk &#39;$5 &gt; 85 {print $0}&#39; &gt;/home/shanhuifu/monitor/monitor_disk.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">df -h | grep -v &#39;tmpfs&#39; | grep &#39;/dev/vdb2&#39; |awk &#39;$5 &gt; 85 {print $0}&#39; &gt;/home/shanhuifu/monitor/monitor_disk_b.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">num_disk=\`egrep -c &#39;/dev/vda1|/dev/vdb1&#39; /home/shanhuifu/monitor/monitor_disk.txt\`</span></span>
<span class="line"><span style="color:#A6ACCD;">num_disk_b=\`grep -c &#39;/dev/vdb2&#39; /home/shanhuifu/monitor/monitor_disk_b.txt\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[ $num_disk -eq 0 ] &amp;&amp; [ $num_disk_b -eq 0 ] || [ $num_disk_b -eq 1 -a $hh -eq 23 -a $mm -le 45 ] &amp;&amp;  time1=\`date +%s\` &amp;&amp; time2=$[$time1+600]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[ $num_disk -ge 1 ] &amp;&amp; time2=$[$time2+600]  &amp;&amp; [ $value -eq 600 ] &amp;&amp; \`mail -s &quot;\u670D\u52A1\u5668\u6709\u78C1\u76D8\u4F7F\u7528\u8D85\u8FC785%\u9608\u503C&quot;  729100483@qq.com 329571457@qq.com &lt;/home/shanhuifu/monitor/monitor_disk.txt\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#[ $num_disk_b -eq 1 ] &amp;&amp; [ $hh -lt 23 ] || [ $hh -eq 23 -a $mm -ge 55 ]  &amp;&amp; time2=$[$time2+600]  &amp;&amp; [ $value -eq 600 ] &amp;&amp; \`mail -s &quot;\u670D\u52A1\u5668backup\u76EE\u5F55\u4F7F\u7528\u8D85\u8FC785%\u9608\u503C,\u5269\u4F59\u7A7A\u95F4\u5DF2\u4E0D\u8DB315G&quot;  729100483@qq.com 329571457@qq.com &lt;/home/shanhuifu/monitor/monitor_disk_b.txt\`</span></span>
<span class="line"><span style="color:#A6ACCD;">#[ $hh -lt 23 ] || [ $hh -eq 23 -a $mm -ge 55 ] &amp;&amp; [ $num_disk_b -eq 1 ]  &amp;&amp; time2=$[$time2+600]  &amp;&amp; [ $value -eq 600 ] &amp;&amp; \`mail -s &quot;\u670D\u52A1\u5668backup\u76EE\u5F55\u4F7F\u7528\u8D85\u8FC785%\u9608\u503C,\u5269\u4F59\u7A7A\u95F4\u5DF2\u4E0D\u8DB315G&quot;  729100483@qq.com 329571457@qq.com &lt;/home/shanhuifu/monitor/monitor_disk_b.txt\`</span></span>
<span class="line"><span style="color:#A6ACCD;">[ $hh -lt 1 ] &amp;&amp; [ $num_disk_b -eq 1 ]  &amp;&amp; time2=$[$time2+600]  &amp;&amp; [ $value -eq 600 ] &amp;&amp; \`mail -s &quot;\u670D\u52A1\u5668backup\u76EE\u5F55\u4F7F\u7528\u8D85\u8FC785%\u9608\u503C,\u5269\u4F59\u7A7A\u95F4\u5DF2\u4E0D\u8DB315G&quot;  729100483@qq.com 329571457@qq.com &lt;/home/shanhuifu/monitor/monitor_disk_b.txt\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">rm -f /home/shanhuifu/monitor/monitor_disk.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">rm -f /home/shanhuifu/monitor/monitor_disk_b.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sleep 600</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">done</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="monitor-cpu-memory-sh" tabindex="-1">monitor_cpu_memory.sh <a class="header-anchor" href="#monitor-cpu-memory-sh" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">while :</span></span>
<span class="line"><span style="color:#A6ACCD;">do</span></span>
<span class="line"><span style="color:#A6ACCD;">cpu_utily=\`top | head -2 |grep -o &#39;load average:.*&#39; | awk -F&#39;,&#39; &#39;{print $2}&#39;\`</span></span>
<span class="line"><span style="color:#A6ACCD;">mem=\`free -m | grep &#39;buffers/cache&#39; | awk &#39;{print $4}&#39;\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[[ $cpu_utily &gt; 0.8 ]] &amp;&amp;  \`echo CPU\u4F7F\u7528\u7387\u8FC7\u9AD8|mail -s &#39;CPU\u4F7F\u7528\u7387\u8FC7\u9AD8&#39; 729100483@qq.com 329571457@qq.com\`</span></span>
<span class="line"><span style="color:#A6ACCD;">[[ $mem &lt; 1024 ]] &amp;&amp; \`echo  \u5185\u5B58\u4F7F\u7528\u8FC7\u9AD8|mail -s &#39;\u5185\u5B58\u4F7F\u7528\u8FC7\u9AD8&#39; 729100483@qq.com 329571457@qq.com\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">sleep 300</span></span>
<span class="line"><span style="color:#A6ACCD;">done</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="monitor-back-sh" tabindex="-1">monitor_back.sh <a class="header-anchor" href="#monitor-back-sh" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">file_yesterday=\`date -d &#39;-1 days&#39; +%F|tr &#39;-&#39; &#39;_&#39;\`</span></span>
<span class="line"><span style="color:#A6ACCD;">file_yesterday_count=\`ls /backup/$file_yesterday*|wc -l\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">if [ $file_yesterday_count -eq 0 ];then</span></span>
<span class="line"><span style="color:#A6ACCD;">     echo \u6700\u8FD1\u4E00\u6B21\u7684\u6570\u636E\u5E93\u5907\u4EFD\u6CA1\u6709\u6210\u529F,/backup\u76EE\u5F55\u4E0B\u6CA1\u6709\u627E\u5230\u76F8\u5173\u7684\u5907\u4EFD\u6587\u4EF6|mail -s &#39;\u6700\u8FD1\u4E00\u6B21\u7684\u6570\u636E\u5E93\u5907\u4EFD\u6CA1\u6709\u6210\u529F&#39; 729100483@qq.com 329571457@qq.com</span></span>
<span class="line"><span style="color:#A6ACCD;">fi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,18),o=[e];function t(i,c,r,m,C,A){return n(),a("div",null,o)}const y=s(p,[["render",t]]);export{u as __pageData,y as default};
