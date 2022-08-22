import{_ as s,c as n,o as a,b as l}from"./app.8608f89d.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"20_\u8FD0\u7EF4/10_Linux/200_\u5E38\u7528\u670D\u52A1\u642D\u5EFA/vsftpd\u642D\u5EFA.md"}'),p={name:"20_\u8FD0\u7EF4/10_Linux/200_\u5E38\u7528\u670D\u52A1\u642D\u5EFA/vsftpd\u642D\u5EFA.md"},e=l(`<div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> yum install vsftpd*</span></span>
<span class="line"><span style="color:#A6ACCD;"> yum install pam*</span></span>
<span class="line"><span style="color:#A6ACCD;"> yum install db4*</span></span>
<span class="line"><span style="color:#A6ACCD;"> useradd virftp -s /sbin/nologin                #\u8FD9\u4E2A\u4E0D\u80FD\u52A0-M</span></span>
<span class="line"><span style="color:#A6ACCD;"> useradd overlord -s /sbin/nologin              #\u8FD9\u4E2A\u597D\u50CF\u6CA1\u4EC0\u4E48\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[root@new3 /etc/vsftpd]#ll</span></span>
<span class="line"><span style="color:#A6ACCD;">total 32</span></span>
<span class="line"><span style="color:#A6ACCD;">-rw------- 1 root root   125 Nov  6  2016 ftpusers</span></span>
<span class="line"><span style="color:#A6ACCD;">-rw------- 1 root root   361 Nov  6  2016 user_list</span></span>
<span class="line"><span style="color:#A6ACCD;">-rw------- 1 root root   462 May  4 15:12 vsftpd.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">-rwxr--r-- 1 root root   338 Nov  6  2016 vsftpd_conf_migrate.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">-rw-r--r-- 1 root root    38 May  2 13:14 vsftpd_login</span></span>
<span class="line"><span style="color:#A6ACCD;">-rw-r--r-- 1 root root 12288 May  2 13:18 vsftpd_login.db</span></span>
<span class="line"><span style="color:#A6ACCD;">drwxr-xr-x 2 root root  4096 May  4 15:09 vsftpd_user_conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[root@new3 /etc/vsftpd]#cat vsftpd.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">anonymous_enable=NO</span></span>
<span class="line"><span style="color:#A6ACCD;">local_enable=YES</span></span>
<span class="line"><span style="color:#A6ACCD;">write_enable=YES</span></span>
<span class="line"><span style="color:#A6ACCD;">local_umask=022</span></span>
<span class="line"><span style="color:#A6ACCD;">anon_upload_enable=NO</span></span>
<span class="line"><span style="color:#A6ACCD;">anon_mkdir_write_enable=NO</span></span>
<span class="line"><span style="color:#A6ACCD;">dirmessage_enable=YES</span></span>
<span class="line"><span style="color:#A6ACCD;">xferlog_enable=YES</span></span>
<span class="line"><span style="color:#A6ACCD;">connect_from_port_20=YES</span></span>
<span class="line"><span style="color:#A6ACCD;">xferlog_std_format=YES</span></span>
<span class="line"><span style="color:#A6ACCD;">chroot_local_user=YES</span></span>
<span class="line"><span style="color:#A6ACCD;">guest_enable=YES</span></span>
<span class="line"><span style="color:#A6ACCD;">guest_username=virftp</span></span>
<span class="line"><span style="color:#A6ACCD;">virtual_use_local_privs=YES</span></span>
<span class="line"><span style="color:#A6ACCD;">user_config_dir=/etc/vsftpd/vsftpd_user_conf</span></span>
<span class="line"><span style="color:#A6ACCD;">listen=YES</span></span>
<span class="line"><span style="color:#A6ACCD;">pam_service_name=vsftpd</span></span>
<span class="line"><span style="color:#A6ACCD;">userlist_enable=YES</span></span>
<span class="line"><span style="color:#A6ACCD;">tcp_wrappers=YES</span></span>
<span class="line"><span style="color:#A6ACCD;">allow_writeable_chroot=YES</span></span>
<span class="line"><span style="color:#A6ACCD;">pasv_promiscuous=YES</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[root@new3 /etc/vsftpd]#cat vsftpd_login</span></span>
<span class="line"><span style="color:#A6ACCD;">administrator</span></span>
<span class="line"><span style="color:#A6ACCD;">zwwl2017</span></span>
<span class="line"><span style="color:#A6ACCD;">admin</span></span>
<span class="line"><span style="color:#A6ACCD;">zwwl2017</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>db_load -T -t hash -f /etc/vsftpd/vsftpd_login /etc/vsftpd/vsftpd_login.db</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[root@new3 /etc/vsftpd]#cat /etc/pam.d/vsftpd</span></span>
<span class="line"><span style="color:#A6ACCD;">#%PAM-1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">auth    sufficient      /lib64/security/pam_userdb.so     db=/etc/vsftpd/vsftpd_login</span></span>
<span class="line"><span style="color:#A6ACCD;">account sufficient      /lib64/security/pam_userdb.so     db=/etc/vsftpd/vsftpd_login</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">session    optional     pam_keyinit.so    force revoke</span></span>
<span class="line"><span style="color:#A6ACCD;">auth       required    pam_listfile.so item=user sense=deny file=/etc/vsftpd/ftpusers onerr=succeed</span></span>
<span class="line"><span style="color:#A6ACCD;">auth       required    pam_shells.so</span></span>
<span class="line"><span style="color:#A6ACCD;">auth       include    password-auth</span></span>
<span class="line"><span style="color:#A6ACCD;">account    include    password-auth</span></span>
<span class="line"><span style="color:#A6ACCD;">session    required     pam_loginuid.so</span></span>
<span class="line"><span style="color:#A6ACCD;">session    include    password-auth</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[root@new3 /etc/vsftpd/vsftpd_user_conf]#cat administrator</span></span>
<span class="line"><span style="color:#A6ACCD;">local_root=/web/weixinrobot3_1/Source/public/7tiangongduyibenshu3.25</span></span>
<span class="line"><span style="color:#A6ACCD;">anonymous_enable=NO</span></span>
<span class="line"><span style="color:#A6ACCD;">write_enable=YES</span></span>
<span class="line"><span style="color:#A6ACCD;">local_umask=000</span></span>
<span class="line"><span style="color:#A6ACCD;">anon_upload_enable=NO</span></span>
<span class="line"><span style="color:#A6ACCD;">anon_mkdir_write_enable=NO</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7),o=[e];function t(c,r,i,A,C,d){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{y as __pageData,u as default};
