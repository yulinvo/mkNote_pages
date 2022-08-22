import{_ as s,c as n,o as a,b as l}from"./app.8608f89d.js";const d=JSON.parse('{"title":"\u5B89\u88C5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"router-link","slug":"router-link"},{"level":2,"title":"\u58F0\u660E\u5F0F\u5BFC\u822A","slug":"\u58F0\u660E\u5F0F\u5BFC\u822A"}],"relativePath":"30_web\u524D\u7AEF/60_vue2/80_vue-router\u8DEF\u7531.md"}'),p={name:"30_web\u524D\u7AEF/60_vue2/80_vue-router\u8DEF\u7531.md"},e=l(`<h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p>cnpm install --save vue-router@3.5.3 \uFF08\u9ED8\u8BA4\u5B89\u88C5\u6700\u65B0\u7248\u672C\u7684vue-router\u662F\u652F\u6301vue3\uFF0C\u5728vue2\u9879\u76EE\u4E2D\u4F7F\u7528\u4F1A\u62A5\u9519\uFF09</p><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><ol><li><p>router/index.js</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import Vue from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import VueRouter from &#39;vue-router&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.use(VueRouter)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import Home from &#39;@/pages/Home&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Login from &#39;@/pages/Login&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const router = new VueRouter({</span></span>
<span class="line"><span style="color:#A6ACCD;">    routes: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            path: &#39;/home&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            component:Home,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            path: &#39;/login&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            component: Login,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            path: &#39;/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            redirect:&#39;/home&#39;				#\u91CD\u5B9A\u5411</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default router;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>main.js</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import router from &#39;@/router&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">  render: h =&gt; h(App),</span></span>
<span class="line"><span style="color:#A6ACCD;">  router,								#\u6CE8\u518C</span></span>
<span class="line"><span style="color:#A6ACCD;">}).$mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ol><h2 id="router-link" tabindex="-1">router-link <a class="header-anchor" href="#router-link" aria-hidden="true">#</a></h2><ul><li><p>router-link\u80FD\u6B63\u5E38\u4F7F\u7528a\u6807\u7B7E\u7684class\u5C5E\u6027\uFF08class=&quot;register&quot;\u539F\u672C\u662F\u5B9A\u4E49\u5728a\u6807\u7B7E\u4E2D\u7684\u5C5E\u6027\uFF09</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;router-link to=&quot;/register&quot; class=&quot;register&quot;&gt;\u514D\u8D39\u6CE8\u518C&lt;/router-link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>router-link\u80FD\u50CFa\u6807\u7B7E\u4E00\u6837\u91CC\u9762\u5305\u88F9img\u56FE\u7247</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;router-link class=&quot;logo&quot; title=&quot;\u5C1A\u54C1\u6C47&quot; to=&quot;/home&quot;  target=&quot;_blank&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;img src=&quot;./images/logo.png&quot; alt=&quot;&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/router-link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#title\u5C5E\u6027\u5F53\u9F20\u6807\u60AC\u505C\u5728&lt;router-link&gt;\u4E0A\u65F6\u4F1A\u6709\u63D0\u793A\u6587\u5B57&quot;\u5C1A\u54C1\u6C47&quot;\uFF0C\u4E5F\u80FD\u4F7F\u7528a\u6807\u7B7E\u7684class=\u201Clogo\u201D\u5C5E\u6027\uFF0C\u4E5F\u80FD\u6B63\u5E38\u4F7F\u7528a\u6807\u7B7E\u7684target=&quot;_blank&quot;\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h2 id="\u58F0\u660E\u5F0F\u5BFC\u822A" tabindex="-1">\u58F0\u660E\u5F0F\u5BFC\u822A <a class="header-anchor" href="#\u58F0\u660E\u5F0F\u5BFC\u822A" aria-hidden="true">#</a></h2><p><strong>\u4E0D\u4F20\u9012\u53C2\u6570</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;button class=&quot;sui-btn btn-xlarge btn-danger&quot; type=&quot;button&quot; @click=&quot;goSearch&quot;&gt;\u641C\u7D22&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">methods:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    goSearch(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    	----------------#\u76F4\u63A5\u4F20\u53C2\u5199\u6CD5-----------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">    	this.$router.push(&#39;/search&#39;)					</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span></span>
<span class="line"><span style="color:#A6ACCD;">    	----------------#\u5BF9\u8C61\u5199\u6CD5-----------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">    	this.$router.push({path:&quot;/search&quot;})</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>\u4F20\u9012\u53C2\u6570</strong></p><p><strong>\u65B0\u9875\u9762\u4E2D\u6253\u5F00</strong></p>`,11),t=[e];function o(r,c,i,u,A,C){return a(),n("div",null,t)}const g=s(p,[["render",o]]);export{d as __pageData,g as default};
