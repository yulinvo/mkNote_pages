(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{426:function(t,n,e){"use strict";e.r(n);var a=e(13),p=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("strong",[t._v("用于序列化的两个模块：")])]),t._v(" "),n("p",[t._v("​\t"),n("strong",[t._v("json")]),t._v("：用于字符串和python数据类型间进行转换")]),t._v(" "),n("p",[t._v("​\t"),n("strong",[t._v("pickle")]),t._v("：用于python特有的类型和python数据类型间进行转换")]),t._v(" "),n("p",[t._v("pickle是python中独有的，两边都是python才行；")]),t._v(" "),n("p",[t._v("pickle支持的范围比较大：如类、程序、函数都支持序列化 ，游戏的存档也是使用pickle的序列化功能")]),t._v(" "),n("p",[n("strong",[t._v("pickle模块提供了4个功能：dumps、dump、loads、load")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("pickle.dumps\n\t-\tt={'name':'jim'};\tpickle.dumps(t)\n\t-\tstu=Student();\tstu_data=pickle.dumps(stu)\t\t\t#序列化class实例\n\npickle.loads\n\t-\tobj=pickle.loads(stu_data);\t\tprint(obj.name)\t\t\t#反序列化class实例\n\n\n###\na.py：定义类，带方法的。通过pickle序列化存储到本地\nb.py：读a存的文件，拿到对象，执行a的方法             #b中没有定义a中的相关方法也能执行，相当于将数据拷贝了一份\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("pickle的写法：\nf = open('tmp.txt','wb')\ndic={'name':'alex','age':'24'}\n# f.write(str(dic))                 #这种写法会报错\nf.write(pickle.dumps(dic))\n#pickle.dump(dic,f)                 #pickle的dump的写法，第一个object，第二个file，不用f.write了         ;dump了几次就可以读几次\n\n\n# f.write(123)          #正常情况下只能写入字符串\nf.close()\n\n\n\n\nf=open('tmp.txt','rb')\n# print pickle.loads(f.read())\na=pickle.loads(f.read())\n#a=pickle.load(f)                #load的写法，相当于先读出内容在loads合并为了一步load\nfor i,v in a.items():\n    print i,v\n")])])])])}),[],!1,null,null,null);n.default=p.exports}}]);