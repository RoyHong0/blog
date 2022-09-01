import{_ as s,c as n,o as a,a as l}from"./app.ade653e8.js";const C=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u4F5C\u7528\u57DF\u94FE\u7684\u7406\u89E3","description":"","frontmatter":{},"headers":[{"level":2,"title":"#\u4E00\u3001\u4F5C\u7528\u57DF","slug":"\u4E00\u3001\u4F5C\u7528\u57DF","link":"#\u4E00\u3001\u4F5C\u7528\u57DF","children":[{"level":3,"title":"#\u5168\u5C40\u4F5C\u7528\u57DF","slug":"\u5168\u5C40\u4F5C\u7528\u57DF","link":"#\u5168\u5C40\u4F5C\u7528\u57DF","children":[]},{"level":3,"title":"#\u51FD\u6570\u4F5C\u7528\u57DF","slug":"\u51FD\u6570\u4F5C\u7528\u57DF","link":"#\u51FD\u6570\u4F5C\u7528\u57DF","children":[]},{"level":3,"title":"#\u5757\u7EA7\u4F5C\u7528\u57DF","slug":"\u5757\u7EA7\u4F5C\u7528\u57DF","link":"#\u5757\u7EA7\u4F5C\u7528\u57DF","children":[]}]},{"level":2,"title":"#\u4E8C\u3001\u8BCD\u6CD5\u4F5C\u7528\u57DF","slug":"\u4E8C\u3001\u8BCD\u6CD5\u4F5C\u7528\u57DF","link":"#\u4E8C\u3001\u8BCD\u6CD5\u4F5C\u7528\u57DF","children":[]},{"level":2,"title":"#\u4E09\u3001\u4F5C\u7528\u57DF\u94FE","slug":"\u4E09\u3001\u4F5C\u7528\u57DF\u94FE","link":"#\u4E09\u3001\u4F5C\u7528\u57DF\u94FE","children":[]}],"relativePath":"Interview/JavaScript/8.md"}'),p={name:"Interview/JavaScript/8.md"},o=l(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u4F5C\u7528\u57DF\u94FE\u7684\u7406\u89E3" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u4F5C\u7528\u57DF\u94FE\u7684\u7406\u89E3 <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u4F5C\u7528\u57DF\u94FE\u7684\u7406\u89E3" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/16f614a0-718f-11eb-ab90-d9ae814b240d.png" alt="img"></p><h2 id="\u4E00\u3001\u4F5C\u7528\u57DF" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/scope.html#%E4%B8%80%E3%80%81%E4%BD%9C%E7%94%A8%E5%9F%9F" target="_blank" rel="noreferrer">#</a>\u4E00\u3001\u4F5C\u7528\u57DF <a class="header-anchor" href="#\u4E00\u3001\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h2><p>\u4F5C\u7528\u57DF\uFF0C\u5373\u53D8\u91CF\uFF08\u53D8\u91CF\u4F5C\u7528\u57DF\u53C8\u79F0\u4E0A\u4E0B\u6587\uFF09\u548C\u51FD\u6570\u751F\u6548\uFF08\u80FD\u88AB\u8BBF\u95EE\uFF09\u7684\u533A\u57DF\u6216\u96C6\u5408</p><p>\u6362\u53E5\u8BDD\u8BF4\uFF0C\u4F5C\u7528\u57DF\u51B3\u5B9A\u4E86\u4EE3\u7801\u533A\u5757\u4E2D\u53D8\u91CF\u548C\u5176\u4ED6\u8D44\u6E90\u7684\u53EF\u89C1\u6027</p><p>\u4E3E\u4E2A\u4F8B\u5B50</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">myFunction</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">inVariable</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u51FD\u6570\u5185\u90E8\u53D8\u91CF</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">myFunction</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">//\u8981\u5148\u6267\u884C\u8FD9\u4E2A\u51FD\u6570\uFF0C\u5426\u5219\u6839\u672C\u4E0D\u77E5\u9053\u91CC\u9762\u662F\u5565</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(inVariable)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Uncaught ReferenceError: inVariable is not defined</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u4F8B\u5B50\u4E2D\uFF0C\u51FD\u6570<code>myFunction</code>\u5185\u90E8\u521B\u5EFA\u4E00\u4E2A<code>inVariable</code>\u53D8\u91CF\uFF0C\u5F53\u6211\u4EEC\u5728\u5168\u5C40\u8BBF\u95EE\u8FD9\u4E2A\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u7CFB\u7EDF\u4F1A\u62A5\u9519</p><p>\u8FD9\u5C31\u8BF4\u660E\u6211\u4EEC\u5728\u5168\u5C40\u662F\u65E0\u6CD5\u83B7\u53D6\u5230\uFF08\u95ED\u5305\u9664\u5916\uFF09\u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CF</p><p>\u6211\u4EEC\u4E00\u822C\u5C06\u4F5C\u7528\u57DF\u5206\u6210\uFF1A</p><ul><li>\u5168\u5C40\u4F5C\u7528\u57DF</li><li>\u51FD\u6570\u4F5C\u7528\u57DF</li><li>\u5757\u7EA7\u4F5C\u7528\u57DF</li></ul><h3 id="\u5168\u5C40\u4F5C\u7528\u57DF" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/scope.html#%E5%85%A8%E5%B1%80%E4%BD%9C%E7%94%A8%E5%9F%9F" target="_blank" rel="noreferrer">#</a>\u5168\u5C40\u4F5C\u7528\u57DF <a class="header-anchor" href="#\u5168\u5C40\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h3><p>\u4EFB\u4F55\u4E0D\u5728\u51FD\u6570\u4E2D\u6216\u662F\u5927\u62EC\u53F7\u4E2D\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u90FD\u662F\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E0B\uFF0C\u5168\u5C40\u4F5C\u7528\u57DF\u4E0B\u58F0\u660E\u7684\u53D8\u91CF\u53EF\u4EE5\u5728\u7A0B\u5E8F\u7684\u4EFB\u610F\u4F4D\u7F6E\u8BBF\u95EE</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u5168\u5C40\u53D8\u91CF</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> greeting </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">greet</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">greeting</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// \u6253\u5370 &#39;Hello World!&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">greet</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u51FD\u6570\u4F5C\u7528\u57DF" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/scope.html#%E5%87%BD%E6%95%B0%E4%BD%9C%E7%94%A8%E5%9F%9F" target="_blank" rel="noreferrer">#</a>\u51FD\u6570\u4F5C\u7528\u57DF <a class="header-anchor" href="#\u51FD\u6570\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h3><p>\u51FD\u6570\u4F5C\u7528\u57DF\u4E5F\u53EB\u5C40\u90E8\u4F5C\u7528\u57DF\uFF0C\u5982\u679C\u4E00\u4E2A\u53D8\u91CF\u662F\u5728\u51FD\u6570\u5185\u90E8\u58F0\u660E\u7684\u5B83\u5C31\u5728\u4E00\u4E2A\u51FD\u6570\u4F5C\u7528\u57DF\u4E0B\u9762\u3002\u8FD9\u4E9B\u53D8\u91CF\u53EA\u80FD\u5728\u51FD\u6570\u5185\u90E8\u8BBF\u95EE\uFF0C\u4E0D\u80FD\u5728\u51FD\u6570\u4EE5\u5916\u53BB\u8BBF\u95EE</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">greet</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">greeting</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">greeting</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// \u6253\u5370 &#39;Hello World!&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">greet</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u62A5\u9519\uFF1A Uncaught ReferenceError: greeting is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(greeting)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u89C1\u4E0A\u8FF0\u4EE3\u7801\u4E2D\u5728\u51FD\u6570\u5185\u90E8\u58F0\u660E\u7684\u53D8\u91CF\u6216\u51FD\u6570\uFF0C\u5728\u51FD\u6570\u5916\u90E8\u662F\u65E0\u6CD5\u8BBF\u95EE\u7684\uFF0C\u8FD9\u8BF4\u660E\u5728\u51FD\u6570\u5185\u90E8\u5B9A\u4E49\u7684\u53D8\u91CF\u6216\u8005\u65B9\u6CD5\u53EA\u662F\u51FD\u6570\u4F5C\u7528\u57DF</p><h3 id="\u5757\u7EA7\u4F5C\u7528\u57DF" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/scope.html#%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F" target="_blank" rel="noreferrer">#</a>\u5757\u7EA7\u4F5C\u7528\u57DF <a class="header-anchor" href="#\u5757\u7EA7\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h3><p>ES6\u5F15\u5165\u4E86<code>let</code>\u548C<code>const</code>\u5173\u952E\u5B57,\u548C<code>var</code>\u5173\u952E\u5B57\u4E0D\u540C\uFF0C\u5728\u5927\u62EC\u53F7\u4E2D\u4F7F\u7528<code>let</code>\u548C<code>const</code>\u58F0\u660E\u7684\u53D8\u91CF\u5B58\u5728\u4E8E\u5757\u7EA7\u4F5C\u7528\u57DF\u4E2D\u3002\u5728\u5927\u62EC\u53F7\u4E4B\u5916\u4E0D\u80FD\u8BBF\u95EE\u8FD9\u4E9B\u53D8\u91CF</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5757\u7EA7\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">greeting</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lang</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">English</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">greeting</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// Prints &#39;Hello World!&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// \u53D8\u91CF &#39;English&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(lang)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u62A5\u9519\uFF1AUncaught ReferenceError: greeting is not defined</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(greeting)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E8C\u3001\u8BCD\u6CD5\u4F5C\u7528\u57DF" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/scope.html#%E4%BA%8C%E3%80%81%E8%AF%8D%E6%B3%95%E4%BD%9C%E7%94%A8%E5%9F%9F" target="_blank" rel="noreferrer">#</a>\u4E8C\u3001\u8BCD\u6CD5\u4F5C\u7528\u57DF <a class="header-anchor" href="#\u4E8C\u3001\u8BCD\u6CD5\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h2><p>\u8BCD\u6CD5\u4F5C\u7528\u57DF\uFF0C\u53C8\u53EB\u9759\u6001\u4F5C\u7528\u57DF\uFF0C\u53D8\u91CF\u88AB\u521B\u5EFA\u65F6\u5C31\u786E\u5B9A\u597D\u4E86\uFF0C\u800C\u975E\u6267\u884C\u9636\u6BB5\u786E\u5B9A\u7684\u3002\u4E5F\u5C31\u662F\u8BF4\u6211\u4EEC\u5199\u597D\u4EE3\u7801\u65F6\u5B83\u7684\u4F5C\u7528\u57DF\u5C31\u786E\u5B9A\u4E86\uFF0C<code>JavaScript</code> \u9075\u5FAA\u7684\u5C31\u662F\u8BCD\u6CD5\u4F5C\u7528\u57DF</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bar</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">foo</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">bar</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u4EE3\u7801\u6539\u53D8\u6210\u4E00\u5F20\u56FE</p><p><img src="https://static.vue-js.com/29fab3d0-718f-11eb-85f6-6fac77c0c9b3.png" alt="img"></p><p>\u7531\u4E8E<code>JavaScript</code>\u9075\u5FAA\u8BCD\u6CD5\u4F5C\u7528\u57DF\uFF0C\u76F8\u540C\u5C42\u7EA7\u7684 <code>foo</code> \u548C <code>bar</code> \u5C31\u6CA1\u6709\u529E\u6CD5\u8BBF\u95EE\u5230\u5F7C\u6B64\u5757\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\uFF0C\u6240\u4EE5\u8F93\u51FA2</p><h2 id="\u4E09\u3001\u4F5C\u7528\u57DF\u94FE" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/scope.html#%E4%B8%89%E3%80%81%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE" target="_blank" rel="noreferrer">#</a>\u4E09\u3001\u4F5C\u7528\u57DF\u94FE <a class="header-anchor" href="#\u4E09\u3001\u4F5C\u7528\u57DF\u94FE" aria-hidden="true">#</a></h2><p>\u5F53\u5728<code>Javascript</code>\u4E2D\u4F7F\u7528\u4E00\u4E2A\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u9996\u5148<code>Javascript</code>\u5F15\u64CE\u4F1A\u5C1D\u8BD5\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u4E0B\u53BB\u5BFB\u627E\u8BE5\u53D8\u91CF\uFF0C\u5982\u679C\u6CA1\u627E\u5230\uFF0C\u518D\u5230\u5B83\u7684\u4E0A\u5C42\u4F5C\u7528\u57DF\u5BFB\u627E\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u76F4\u5230\u627E\u5230\u8BE5\u53D8\u91CF\u6216\u662F\u5DF2\u7ECF\u5230\u4E86\u5168\u5C40\u4F5C\u7528\u57DF</p><p>\u5982\u679C\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u91CC\u4ECD\u7136\u627E\u4E0D\u5230\u8BE5\u53D8\u91CF\uFF0C\u5B83\u5C31\u4F1A\u5728\u5168\u5C40\u8303\u56F4\u5185\u9690\u5F0F\u58F0\u660E\u8BE5\u53D8\u91CF(\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B)\u6216\u662F\u76F4\u63A5\u62A5\u9519</p><p>\u8FD9\u91CC\u62FF\u300A\u4F60\u4E0D\u77E5\u9053\u7684Javascript(\u4E0A)\u300B\u4E2D\u7684\u4E00\u5F20\u56FE\u89E3\u91CA\uFF1A</p><p>\u628A\u4F5C\u7528\u57DF\u6BD4\u55BB\u6210\u4E00\u4E2A\u5EFA\u7B51\uFF0C\u8FD9\u4EFD\u5EFA\u7B51\u4EE3\u8868\u7A0B\u5E8F\u4E2D\u7684\u5D4C\u5957\u4F5C\u7528\u57DF\u94FE\uFF0C\u7B2C\u4E00\u5C42\u4EE3\u8868\u5F53\u524D\u7684\u6267\u884C\u4F5C\u7528\u57DF\uFF0C\u9876\u5C42\u4EE3\u8868\u5168\u5C40\u4F5C\u7528\u57DF</p><p><img src="https://static.vue-js.com/33f9c100-718f-11eb-85f6-6fac77c0c9b3.png" alt="img"></p><p>\u53D8\u91CF\u7684\u5F15\u7528\u4F1A\u987A\u7740\u5F53\u524D\u697C\u5C42\u8FDB\u884C\u67E5\u627E\uFF0C\u5982\u679C\u627E\u4E0D\u5230\uFF0C\u5219\u4F1A\u5F80\u4E0A\u4E00\u5C42\u627E\uFF0C\u4E00\u65E6\u5230\u8FBE\u9876\u5C42\uFF0C\u67E5\u627E\u7684\u8FC7\u7A0B\u90FD\u4F1A\u505C\u6B62</p><p>\u4E0B\u9762\u4EE3\u7801\u6F14\u793A\u4E0B\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> sex </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7537</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">person</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5F20\u4E09</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">student</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u5F20\u4E09</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">sex</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u7537 </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">student</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// Uncaught ReferenceError: age is not defined</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">person</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u4EE3\u7801\u4E3B\u8981\u4E3B\u8981\u505A\u4E86\u4EE5\u4E0B\u5DE5\u4F5C\uFF1A</p><ul><li><code>student</code>\u51FD\u6570\u5185\u90E8\u5C5E\u4E8E\u6700\u5185\u5C42\u4F5C\u7528\u57DF\uFF0C\u627E\u4E0D\u5230<code>name</code>\uFF0C\u5411\u4E0A\u4E00\u5C42\u4F5C\u7528\u57DF<code>person</code>\u51FD\u6570\u5185\u90E8\u627E\uFF0C\u627E\u5230\u4E86\u8F93\u51FA\u201C\u5F20\u4E09\u201D</li><li><code>student</code>\u5185\u90E8\u8F93\u51FA<code>sex</code>\u65F6\u627E\u4E0D\u5230\uFF0C\u5411\u4E0A\u4E00\u5C42\u4F5C\u7528\u57DF<code>person</code>\u51FD\u6570\u627E\uFF0C\u8FD8\u627E\u4E0D\u5230\u7EE7\u7EED\u5411\u4E0A\u4E00\u5C42\u627E\uFF0C\u5373\u5168\u5C40\u4F5C\u7528\u57DF\uFF0C\u627E\u5230\u4E86\u8F93\u51FA\u201C\u7537\u201D</li><li>\u5728<code>person</code>\u51FD\u6570\u5185\u90E8\u8F93\u51FA<code>age</code>\u65F6\u627E\u4E0D\u5230\uFF0C\u5411\u4E0A\u4E00\u5C42\u4F5C\u7528\u57DF\u627E\uFF0C\u5373\u5168\u5C40\u4F5C\u7528\u57DF\uFF0C\u8FD8\u662F\u627E\u4E0D\u5230\u5219\u62A5\u9519</li></ul>`,38),e=[o];function c(r,t,F,y,D,i){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{C as __pageData,d as default};
