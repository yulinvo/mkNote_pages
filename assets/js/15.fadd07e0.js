(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{287:function(t,n,e){"use strict";e.r(n);var s=e(13),a=Object(s.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h3",{attrs:{id:"vscode技巧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vscode技巧"}},[this._v("#")]),this._v(" VSCode技巧")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('-  编辑aa.py文件时，直接打开两个终端：python终端、ipython终端，然后在ipython中load aa.py后，就可以实时调试了！！！！\n-  django中也可以使用上述方法，app01/views.py文件中\n\tclass C1(View)\t\t\t\t\t#继承APIView测试结果也一样，都是没有定义get/post方法！\n\t\tpass\n\tload app01/views.py，然后c=getattr(C1,\'get\') && c??就可以看到源码了...!!!!\n\t此时就可以看到【View类中的get、post方法在源码里面没有写，必须是要用户自己定义】\n\n-\tpython manage.py shell进入ipython界面，然后from app01.models import User\n\n\n-  print自动添加括号():\n\tsetting--\x3e搜索“Add Brackets”--\x3e扩展中选择python对应的"Auto Complete: Add Brackets"，选中即可，对应的键值为：\t\t"python.autoComplete.addBrackets": true, 然后重启vscode(测试时不重启无法生效)\n\n\n-  debug失效问题\n   代码处打了断点，但是断点是空心的无法生效，此时将鼠标放到空心的断点处(或者放到左侧栏Debug的空心断点处)提示\n\tBreakpoint in file excluded by filters. \n\tNote: may be excluded because of "justMyCode" option (default == true). Try setting "justMyCode": false \tin the debug configuration (e.g., launch.json).\n\t\n\t处理方法：在配置文件launch.json中添加一个"justMyCode": false的配置：\n        {\n            "configurations": [\n                {\n                    "name": "Python: Django",\n                    "type": "python",\n                    "request": "launch",\n                    "program": "${workspaceFolder}\\\\manage.py",\n                    "args": [\n                        "runserver"\n                    ],\n                    "django": true,\n                    "justMyCode": false\t\t\t\t\t\t\t#添加此配置\n                }\n            ]\n        }\n\n\n- 选择代码格式化工具\n\t方式一：文档右键--"使用...格式化文档" -- 配置默认格式化工具\n\t方式二：ctrl+shift+p -- format -- "使用...格式化文档" -- 配置默认格式化工具\n\n')])])])])}),[],!1,null,null,null);n.default=a.exports}}]);