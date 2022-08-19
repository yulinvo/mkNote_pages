(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{394:function(n,e,t){"use strict";t.r(e);var u=t(13),p=Object(u.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[e("strong",[n._v("queue队列")])]),n._v(" "),e("blockquote",[e("p",[n._v("下面两个都是线程安全的")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("双向队列：\nimport collections\n\nd=collections.deque()\nd.append('xx')      #往右边添加\nd.appendleft('xx')      #往左边添加\nd.clear()          #清空队列\nd.copy()        #  在2.x里面好像不支持\nd.count('xx')          #统计队列中某个元素出现了多少次\nd.extend(['a','b','c'])              #一次放入多个元素，从右边扩展\nd.extendleft(['a','b','c'])\nd.index('xx',2,10)          # 在2.x里面好像不支持，默认是从左取值？\nd.insert()                  #插入元素，在2.x里面好像不支持\nd.pop()\nd.popleft()\nd.remove()\nd.reverse()                #反转\nd.rotate(1)                  #旋转，相当于首尾连接\n\n\n\n\n\n单项队列(先进先出FIFO)     (栈是弹夹先进后出)：\nimport  Queue\nq = Queue.Queue()\nq.qsize()          #队列的个数\nq.join()            #阻塞的\nq.empty()          #和clear类似\nq.full()            #是否全满\nq.put('123')        #插入数据\nq.put('123')\nq.get()              #获取数据，不用加参数，因为先进先出，只能按照顺序拿\n")])])]),e("p",[n._v("queue队列：")]),n._v(" "),e("p",[n._v("队列和列表的区别：队列拿走一个数据就消失一个数据，但列表拿走一个数据列表中不会删除")]),n._v(" "),e("p",[n._v("队列的数据放到内存中")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("#coding:utf-8\nimport Queue\n\nQueue.Queue # 先入先出     FIFO：first in first out\nQueue.LifoQueue # 先入后出 last in first out的简写\nQueue.PriorityQueue # 存储数据时可以设置优先级的队列\n\nq = Queue.Queue() #默认不限制maxsize，可以设置maxsize = 3\nq.put('d1')\nq.put('d2')\nprint q.qsize() # 当前队列中还有几个数据\nprint q.get() # 先入先出，不能指定,默认block=True,timeout=\nprint q.get()\n# print q.get() # 这里数据取完后，会卡住\n# print q.get_nowait() #这里数据取完后，不会卡住，但会抛出异常q.empty()\n\n#——-----------------------------------------------------------------------------------------\nq =Queue.LifoQueue()\nq.put(1)\nq.put(2)\nq.put(3)\nprint q.get()\nprint q.get()\nprint q.get()\n#——-----------------------------------------------------------------------------------------\nq = Queue.PriorityQueue()\nq.put(20,'alex') # 前面的20是优先级，优先级越低越优先，按照前面的字母排序，如果有-1，则在20前面\nq.put(2,'tom')\nq.put(10,'jim')\nprint q.get()\nprint q.get()\nprint q.get()\n")])])])])}),[],!1,null,null,null);e.default=p.exports}}]);