(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{315:function(e,s,t){"use strict";t.r(s);var a=t(13),l=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("查看规则：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("列出 INPUT链 所有的规则：iptables -L INPUT --line-numbers\n")])])]),s("p",[e._v("修改默认规则：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("iptables -P FORWARD ACCEPT\n")])])]),s("p",[e._v("添加INPUT规则：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("iptables -I INPUT -s 194.42.0.0/8 -j DROP\niptables -A INPUT -p tcp --dport 8181 -s 124.115.0.0/24 -j ACCEPT\n")])])]),s("p",[e._v("删除：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("iptables -D INPUT --dport 80 -j DROP\niptables -D INPUT 1\n")])])]),s("p",[e._v("保存配置：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("fiewalld 的保存配置的方法没有找到\n\n一种不使用fiewalld，另外安装iptables的方法可以参考：http://blog.csdn.net/xx123698/article/details/53424829\n")])])]),s("p",[e._v("开机启动、停止：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("centos 7防火墙开机启用/停止：systemctl enable/disable firewalld.service\n        查看：systemctl list-unit-files |grep 'firewalld'\\\n\nsystemctl mask firewalld 是一个单独的状态:(Created symlink from /etc/systemd/system/firewalld.service to /dev/null)\n")])])])])}),[],!1,null,null,null);s.default=l.exports}}]);