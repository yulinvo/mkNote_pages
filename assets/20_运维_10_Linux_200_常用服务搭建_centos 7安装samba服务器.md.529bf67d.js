import{_ as s,c as a,o as n,b as l}from"./app.8608f89d.js";const y=JSON.parse('{"title":"vi /etc/ld.so.conf        \u6DFB\u52A0\u4E00\u884C\uFF1A/usr/local/samba-3.5.9/lib","description":"","frontmatter":{},"headers":[],"relativePath":"20_\u8FD0\u7EF4/10_Linux/200_\u5E38\u7528\u670D\u52A1\u642D\u5EFA/centos 7\u5B89\u88C5samba\u670D\u52A1\u5668.md"}'),p={name:"20_\u8FD0\u7EF4/10_Linux/200_\u5E38\u7528\u670D\u52A1\u642D\u5EFA/centos 7\u5B89\u88C5samba\u670D\u52A1\u5668.md"},e=l(`<div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">1\uFF0C\u89E3\u538B\u6E90\u7801\u5305\uFF0C\u8FDB\u5165\u76EE\u5F55\uFF1Asamba-3.5.9/source3</span></span>
<span class="line"><span style="color:#A6ACCD;">2\uFF0C./configure --prefix=/usr/local/samba-3.5.9   \u73AF\u5883\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u53EF\u80FD\u5728\u521A\u5F00\u59CB\u65F6\uFF0C\u8BE5\u76EE\u5F55\u4E0B\u6CA1\u6709configure\u6587\u4EF6\uFF0C\u6B64\u65F6\u53EF\u5148\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4# ./autogen-sh\uFF0C\u6B64\u65F6\u8981\u6C42\u7CFB\u7EDF\u5B89\u88C5\u4E86autoconf\u3001automake\u7B49\u5DE5\u5177</span></span>
<span class="line"><span style="color:#A6ACCD;">3\uFF0Cmake &amp;&amp; make install  \u7F16\u8BD1\u5B89\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">4\uFF0C\u914D\u7F6E\u52A8\u6001\u94FE\u63A5\u5E93\u8DEF\u5F84\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">     \u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u914D\u7F6E\u52A8\u6001\u94FE\u63A5\u5E93\u8DEF\u5F84\uFF0C\u56E0\u4E3A\u8FD0\u884Csamba\u7684\u8FDB\u884Csmbd\u548Cnmbd\u9700\u8981\u5230\u76EE\u5F55/usr/local/samba/lib\u4E0B\u7684\u52A8\u6001\u94FE\u63A5\u5E93\u6587\u4EF6\u3002\u4F46\u662F\u8BE5\u76EE\u5F55\u4E0D\u662F\u7CFB\u7EDF\u9ED8\u8BA4\u7684\u52A8\u6001\u94FE\u63A5\u5E93\u6587\u4EF6\u641C\u7D22\u8DEF\u5F84\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u4E8E\u662F\u6211\u4EEC\u9700\u8981\u5C06\u8BE5\u76EE\u5F55\u6DFB\u52A0\u5230\u6587\u4EF6ld.so.conf\u4E2D\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">             # vi /etc/ld.so.conf        \u6DFB\u52A0\u4E00\u884C\uFF1A/usr/local/samba-3.5.9/lib</span></span>
<span class="line"><span style="color:#A6ACCD;">             \u7136\u540E\u6267\u884C\u547D\u4EE4  # ldconfig                \u6765\u66F4\u65B0\u52A8\u6001\u94FE\u63A5\u5E93\u7F13\u51B2\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">5\uFF0C\u5728samba-3.5.9/lib\u4E0B\u521B\u5EFAsmb.conf\u6587\u4EF6;\u914D\u7F6E\u6587\u4EF6smb.conf\u7684\u9ED8\u8BA4\u8DEF\u5F84\u662F/usr/local/samba/lib/smb.conf, \u4F46\u662F3.5.9\u7248\u672C\u7684\u597D\u50CF\u6CA1\u6709</span></span>
<span class="line"><span style="color:#A6ACCD;">[global]</span></span>
<span class="line"><span style="color:#A6ACCD;">         workgroup = MYGROUP</span></span>
<span class="line"><span style="color:#A6ACCD;">         server string = Samba Server %v</span></span>
<span class="line"><span style="color:#A6ACCD;">         security = user</span></span>
<span class="line"><span style="color:#A6ACCD;">         log file = /var/log/samba/%m.log</span></span>
<span class="line"><span style="color:#A6ACCD;">         passdb backend = smbpasswd</span></span>
<span class="line"><span style="color:#A6ACCD;">         username map = /usr/local/samba3.5.9/lib/smbusers</span></span>
<span class="line"><span style="color:#A6ACCD;">         smb passwd file = /usr/local/samba3.5.9/private/smbpasswd</span></span>
<span class="line"><span style="color:#A6ACCD;">[root]</span></span>
<span class="line"><span style="color:#A6ACCD;">         path = /</span></span>
<span class="line"><span style="color:#A6ACCD;">         valid users = root</span></span>
<span class="line"><span style="color:#A6ACCD;">         writeable = yes</span></span>
<span class="line"><span style="color:#A6ACCD;">[public]</span></span>
<span class="line"><span style="color:#A6ACCD;">         path = /data</span></span>
<span class="line"><span style="color:#A6ACCD;">         guest ok = yes</span></span>
<span class="line"><span style="color:#A6ACCD;">         read only = yes</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6620\u5C04\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u521B\u5EFA\u6587\u4EF6\uFF1Asamba3.5.9/lib/smbusers</span></span>
<span class="line"><span style="color:#A6ACCD;">        # Unix_name = SMB_name1 SMB_name2 ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        root = administrator admin</span></span>
<span class="line"><span style="color:#A6ACCD;">        nobody = guest pcguest smbguest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">6\uFF0C\u542F\u52A8samba</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      ./testparm /usr/local/samba/lib/smb.conf                \u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u751F\u6548(\u8981\u5148\u6267\u884Cldconfig\uFF0C\u4E0D\u6267\u884C\u4F1A\u62A5\u9519\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      ./smbpasswd \u2013a root                \u4FEE\u6539root\u7528\u6237\u5BC6\u7801\uFF08\u542F\u52A8\u8FDB\u7A0B\u540E\u4FEE\u6539\u4E5F\u6709\u6548\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">                \u5411smb.conf\u6587\u4EF6\u4E2D\u6307\u5B9A\u7684/etc/samba/smbpasswd\u6587\u4EF6\u4E2D\u6DFB\u52A0root\u7528\u6237\u4EE5\u53CA\u5BC6\u7801\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">                \u5728\u4F7F\u7528smbpasswd\u65F6\u9ED8\u8BA4\u8BFB\u53D6\u7684\u5BC6\u7801\u6587\u4EF6\u65F6/usr/local/samba/private/smbpasswd\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7smbpasswd file\u6765\u6307\u5B9A\u7279\u5B9A\u7684\u5BC6\u7801\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                smbpasswd -a \u589E\u52A0\u7528\u6237\uFF08\u8981\u589E\u52A0\u7684\u7528\u6237\u5FC5\u987B\u4EE5\u662F\u7CFB\u7EDF\u7528\u6237\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">                smbpasswd -d \u51BB\u7ED3\u7528\u6237\uFF0C\u5C31\u662F\u8FD9\u4E2A\u7528\u6237\u4E0D\u80FD\u5728\u767B\u5F55\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">                smbpasswd -e \u6062\u590D\u7528\u6237\uFF0C\u89E3\u51BB\u7528\u6237\uFF0C\u8BA9\u51BB\u7ED3\u7684\u7528\u6237\u53EF\u4EE5\u5728\u4F7F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">                smbpasswd -n \u628A\u7528\u6237\u7684\u5BC6\u7801\u8BBE\u7F6E\u6210\u7A7A.</span></span>
<span class="line"><span style="color:#A6ACCD;">                     \u8981\u5728global\u4E2D\u5199\u5165 null passwords -true</span></span>
<span class="line"><span style="color:#A6ACCD;">                smbpasswd -x  \u5220\u9664\u7528\u6237</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        \u5173\u95ED\u9632\u706B\u5899\u540E\u542F\u52A8\u7A0B\u5E8F\uFF08\u6211\u5F53\u65F6\u628A/etc/samba\u6587\u4EF6\u5939\u4E0B\u6E05\u7A7A\u4E86\uFF0C\u5C31\u6CA1\u52A0-s\u548C\u540E\u9762\u7684\u53C2\u6570\uFF09\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">        # /usr/local/samba/sbin/smbd \u2013D \u2013s /etc/samba/smb.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">        # /usr/local/samba/sbin/nmbd \u2013D \u2013s /etc/samba/smb.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">        samba\u6709\u4E24\u4E2A\u4E3B\u8981\u7684\u8FDB\u7A0Bsmbd\u548Cnmbd\u3002smbd\u8FDB\u7A0B\u63D0\u4F9B\u4E86\u6587\u4EF6\u548C\u6253\u5370\u670D\u52A1\uFF0C\u800Cnmbd\u5219\u63D0\u4F9B\u4E86NetBIOS\u540D\u79F0\u670D\u52A1\u548C\u6D4F\u89C8\u652F\u6301\uFF0C\u5E2E\u52A9SMB\u5BA2\u6237\u5B9A\u4F4D\u670D\u52A1\u5668\uFF0C\u5904\u7406\u6240\u6709\u57FA\u4E8EUDP\u7684\u534F\u8BAE\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">7\uFF0C\u6D4B\u8BD5\u68C0\u67E5</span></span>
<span class="line"><span style="color:#A6ACCD;">./smbclient \u2013L //127.0.0.1</span></span>
<span class="line"><span style="color:#A6ACCD;">\u683C\u5F0F\u5982\u4E0B\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">[root@localhost bin]# ./smbclient \u2013L //127.0.0.1</span></span>
<span class="line"><span style="color:#A6ACCD;">Enter root\u2019s password:</span></span>
<span class="line"><span style="color:#A6ACCD;">Domain=[MYGROUP]  OS=[Unix] Server=[Samba 3.5.9]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">         Sharename                Type                  Comment</span></span>
<span class="line"><span style="color:#A6ACCD;">         ---------                -------               -------</span></span>
<span class="line"><span style="color:#A6ACCD;">         IPC$                     IPC                   IPC Service (Samba Server 3.5.9)</span></span>
<span class="line"><span style="color:#A6ACCD;">         public                   Disk</span></span>
<span class="line"><span style="color:#A6ACCD;">         root                     Disk</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Domain=[MYGROUP]  OS=[Unix] Server=[Samba 3.5.9]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">         Server                             Comment</span></span>
<span class="line"><span style="color:#A6ACCD;">         -----------                        -------</span></span>
<span class="line"><span style="color:#A6ACCD;">         LOCALHOST                          Samba Server 3.5.9</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">         Workgroup                          Master</span></span>
<span class="line"><span style="color:#A6ACCD;">         ------------                       -------</span></span>
<span class="line"><span style="color:#A6ACCD;">         MYGROUP                            LOCALHOST</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5F53\u7136\u4E5F\u53EF\u4EE5\u901A\u8FC7smbclient\u6765\u8BBF\u95EEsamba\u670D\u52A1\u5668\u63D0\u4F9B\u7684\u670D\u52A1\uFF0C\u5176\u547D\u4EE4\u683C\u5F0F\u5982\u4E0B\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"># ./smbclient \u201C//127.0.0.1/root\u201D \u2013U root</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u8D34\u4E0Asmb.conf\u548Csmbusers\u7684\u914D\u7F6E\u6587\u4EF6\uFF08\u548C\u4E0A\u9762\u7684\u914D\u7F6E\u6B65\u9AA4\u4E0D\u662F\u540C\u4E00\u4E2A\u670D\u52A1\u5668\u53D6\u4E0B\u7684\uFF0C\u91CC\u9762\u7684\u914D\u7F6E\u4F1A\u6709\u4E0D\u540C\uFF09\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">[shanhuifu@iZ233xdnwmfZ /usr/local/samba3.5.9/lib]$cat smb.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">[global]</span></span>
<span class="line"><span style="color:#A6ACCD;">         workgroup = WORKGROUP</span></span>
<span class="line"><span style="color:#A6ACCD;">         server string = Samba Server %v</span></span>
<span class="line"><span style="color:#A6ACCD;">         security = user</span></span>
<span class="line"><span style="color:#A6ACCD;">         log file = /var/log/samba/%m.log</span></span>
<span class="line"><span style="color:#A6ACCD;">         passdb backend = smbpasswd</span></span>
<span class="line"><span style="color:#A6ACCD;">         username map = /usr/local/samba3.5.9/lib/smbusers</span></span>
<span class="line"><span style="color:#A6ACCD;">         smb passwd file = /usr/local/samba3.5.9/private/smbpasswd</span></span>
<span class="line"><span style="color:#A6ACCD;">[wxpic]</span></span>
<span class="line"><span style="color:#A6ACCD;">         path = /web/weixinrobot/Source/public/7tiangongduyibenshu3.25</span></span>
<span class="line"><span style="color:#A6ACCD;">         valid users = root</span></span>
<span class="line"><span style="color:#A6ACCD;">         available = yes</span></span>
<span class="line"><span style="color:#A6ACCD;">         writeable = yes</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[shanhuifu@iZ233xdnwmfZ /usr/local/samba3.5.9/lib]$cat smbusers</span></span>
<span class="line"><span style="color:#A6ACCD;"># Unix_name = SMB_name1 SMB_name2 ...</span></span>
<span class="line"><span style="color:#A6ACCD;">root = administrator admin</span></span>
<span class="line"><span style="color:#A6ACCD;">nobody = guest pcguest smbguest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,1),o=[e];function c(r,C,A,t,i,m){return n(),a("div",null,o)}const D=s(p,[["render",c]]);export{y as __pageData,D as default};
