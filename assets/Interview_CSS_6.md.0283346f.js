import{_ as s,c as a,o as n,a as l}from"./app.ade653e8.js";const A=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8C08\u8C08\u4F60\u5BF9BFC\u7684\u7406\u89E3\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"#\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"#\u4E8C\u3001\u89E6\u53D1\u6761\u4EF6","slug":"\u4E8C\u3001\u89E6\u53D1\u6761\u4EF6","link":"#\u4E8C\u3001\u89E6\u53D1\u6761\u4EF6","children":[]},{"level":2,"title":"#\u4E09\u3001\u5E94\u7528\u573A\u666F","slug":"\u4E09\u3001\u5E94\u7528\u573A\u666F","link":"#\u4E09\u3001\u5E94\u7528\u573A\u666F","children":[{"level":3,"title":"#\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}]},{"level":2,"title":"#\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"Interview/CSS/6.md"}'),p={name:"Interview/CSS/6.md"},o=l(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8C08\u8C08\u4F60\u5BF9bfc\u7684\u7406\u89E3\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8C08\u8C08\u4F60\u5BF9BFC\u7684\u7406\u89E3\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8C08\u8C08\u4F60\u5BF9bfc\u7684\u7406\u89E3\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/c3d68290-9511-11eb-85f6-6fac77c0c9b3.png" alt="img"></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a href="https://vue3js.cn/interview/css/BFC.html#%E4%B8%80%E3%80%81%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">#</a>\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5728\u9875\u9762\u5E03\u5C40\u7684\u65F6\u5019\uFF0C\u7ECF\u5E38\u51FA\u73B0\u4EE5\u4E0B\u60C5\u51B5\uFF1A</p><ul><li>\u8FD9\u4E2A\u5143\u7D20\u9AD8\u5EA6\u600E\u4E48\u6CA1\u4E86\uFF1F</li><li>\u8FD9\u4E24\u680F\u5E03\u5C40\u600E\u4E48\u6CA1\u6CD5\u81EA\u9002\u5E94\uFF1F</li><li>\u8FD9\u4E24\u4E2A\u5143\u7D20\u7684\u95F4\u8DDD\u600E\u4E48\u6709\u70B9\u5947\u602A\u7684\u6837\u5B50\uFF1F</li><li>......</li></ul><p>\u539F\u56E0\u662F\u5143\u7D20\u4E4B\u95F4\u76F8\u4E92\u7684\u5F71\u54CD\uFF0C\u5BFC\u81F4\u4E86\u610F\u6599\u4E4B\u5916\u7684\u60C5\u51B5\uFF0C\u8FD9\u91CC\u5C31\u6D89\u53CA\u5230<code>BFC</code>\u6982\u5FF5</p><p><code>BFC</code>\uFF08Block Formatting Context\uFF09\uFF0C\u5373\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF0C\u5B83\u662F\u9875\u9762\u4E2D\u7684\u4E00\u5757\u6E32\u67D3\u533A\u57DF\uFF0C\u5E76\u4E14\u6709\u4E00\u5957\u5C5E\u4E8E\u81EA\u5DF1\u7684\u6E32\u67D3\u89C4\u5219\uFF1A</p><ul><li>\u5185\u90E8\u7684\u76D2\u5B50\u4F1A\u5728\u5782\u76F4\u65B9\u5411\u4E0A\u4E00\u4E2A\u63A5\u4E00\u4E2A\u7684\u653E\u7F6E</li><li>\u5BF9\u4E8E\u540C\u4E00\u4E2ABFC\u7684\u4FE9\u4E2A\u76F8\u90BB\u7684\u76D2\u5B50\u7684margin\u4F1A\u53D1\u751F\u91CD\u53E0\uFF0C\u4E0E\u65B9\u5411\u65E0\u5173\u3002</li><li>\u6BCF\u4E2A\u5143\u7D20\u7684\u5DE6\u5916\u8FB9\u8DDD\u4E0E\u5305\u542B\u5757\u7684\u5DE6\u8FB9\u754C\u76F8\u63A5\u89E6\uFF08\u4ECE\u5DE6\u5230\u53F3\uFF09\uFF0C\u5373\u4F7F\u6D6E\u52A8\u5143\u7D20\u4E5F\u662F\u5982\u6B64</li><li>BFC\u7684\u533A\u57DF\u4E0D\u4F1A\u4E0Efloat\u7684\u5143\u7D20\u533A\u57DF\u91CD\u53E0</li><li>\u8BA1\u7B97BFC\u7684\u9AD8\u5EA6\u65F6\uFF0C\u6D6E\u52A8\u5B50\u5143\u7D20\u4E5F\u53C2\u4E0E\u8BA1\u7B97</li><li>BFC\u5C31\u662F\u9875\u9762\u4E0A\u7684\u4E00\u4E2A\u9694\u79BB\u7684\u72EC\u7ACB\u5BB9\u5668\uFF0C\u5BB9\u5668\u91CC\u9762\u7684\u5B50\u5143\u7D20\u4E0D\u4F1A\u5F71\u54CD\u5230\u5916\u9762\u7684\u5143\u7D20\uFF0C\u53CD\u4E4B\u4EA6\u7136</li></ul><p><code>BFC</code>\u76EE\u7684\u662F\u5F62\u6210\u4E00\u4E2A\u76F8\u5BF9\u4E8E\u5916\u754C\u5B8C\u5168\u72EC\u7ACB\u7684\u7A7A\u95F4\uFF0C\u8BA9\u5185\u90E8\u7684\u5B50\u5143\u7D20\u4E0D\u4F1A\u5F71\u54CD\u5230\u5916\u90E8\u7684\u5143\u7D20</p><h2 id="\u4E8C\u3001\u89E6\u53D1\u6761\u4EF6" tabindex="-1"><a href="https://vue3js.cn/interview/css/BFC.html#%E4%BA%8C%E3%80%81%E8%A7%A6%E5%8F%91%E6%9D%A1%E4%BB%B6" target="_blank" rel="noreferrer">#</a>\u4E8C\u3001\u89E6\u53D1\u6761\u4EF6 <a class="header-anchor" href="#\u4E8C\u3001\u89E6\u53D1\u6761\u4EF6" aria-hidden="true">#</a></h2><p>\u89E6\u53D1<code>BFC</code>\u7684\u6761\u4EF6\u5305\u542B\u4E0D\u9650\u4E8E\uFF1A</p><ul><li>\u6839\u5143\u7D20\uFF0C\u5373HTML\u5143\u7D20</li><li>\u6D6E\u52A8\u5143\u7D20\uFF1Afloat\u503C\u4E3Aleft\u3001right</li><li>overflow\u503C\u4E0D\u4E3A visible\uFF0C\u4E3A auto\u3001scroll\u3001hidden</li><li>display\u7684\u503C\u4E3Ainline-block\u3001inltable-cell\u3001table-caption\u3001table\u3001inline-table\u3001flex\u3001inline-flex\u3001grid\u3001inline-grid</li><li>position\u7684\u503C\u4E3Aabsolute\u6216fixed</li></ul><h2 id="\u4E09\u3001\u5E94\u7528\u573A\u666F" tabindex="-1"><a href="https://vue3js.cn/interview/css/BFC.html#%E4%B8%89%E3%80%81%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF" target="_blank" rel="noreferrer">#</a>\u4E09\u3001\u5E94\u7528\u573A\u666F <a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h2><p>\u5229\u7528<code>BFC</code>\u7684\u7279\u6027\uFF0C\u6211\u4EEC\u5C06<code>BFC</code>\u5E94\u7528\u5728\u4EE5\u4E0B\u573A\u666F\uFF1A</p><h4 id="\u9632\u6B62margin\u91CD\u53E0\uFF08\u584C\u9677\uFF09" tabindex="-1"><a href="https://vue3js.cn/interview/css/BFC.html#%E9%98%B2%E6%AD%A2margin%E9%87%8D%E5%8F%A0-%E5%A1%8C%E9%99%B7" target="_blank" rel="noreferrer">#</a>\u9632\u6B62margin\u91CD\u53E0\uFF08\u584C\u9677\uFF09 <a class="header-anchor" href="#\u9632\u6B62margin\u91CD\u53E0\uFF08\u584C\u9677\uFF09" aria-hidden="true">#</a></h4><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f55</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fcc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Haha</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hehe</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u9875\u9762\u663E\u793A\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/d0ce3650-9511-11eb-85f6-6fac77c0c9b3.png" alt="img"></p><p>\u4E24\u4E2A<code>p</code>\u5143\u7D20\u4E4B\u95F4\u7684\u8DDD\u79BB\u4E3A<code>100px</code>\uFF0C\u53D1\u751F\u4E86<code>margin</code>\u91CD\u53E0\uFF08\u584C\u9677\uFF09\uFF0C\u4EE5\u6700\u5927\u7684\u4E3A\u51C6\uFF0C\u5982\u679C\u7B2C\u4E00\u4E2AP\u7684<code>margin</code>\u4E3A80\u7684\u8BDD\uFF0C\u4E24\u4E2AP\u4E4B\u95F4\u7684\u8DDD\u79BB\u8FD8\u662F100\uFF0C\u4EE5\u6700\u5927\u7684\u4E3A\u51C6\u3002</p><p>\u524D\u9762\u8BB2\u5230\uFF0C\u540C\u4E00\u4E2A<code>BFC</code>\u7684\u4FE9\u4E2A\u76F8\u90BB\u7684\u76D2\u5B50\u7684<code>margin</code>\u4F1A\u53D1\u751F\u91CD\u53E0</p><p>\u53EF\u4EE5\u5728<code>p</code>\u5916\u9762\u5305\u88F9\u4E00\u5C42\u5BB9\u5668\uFF0C\u5E76\u89E6\u53D1\u8FD9\u4E2A\u5BB9\u5668\u751F\u6210\u4E00\u4E2A<code>BFC</code>\uFF0C\u90A3\u4E48\u4E24\u4E2A<code>p</code>\u5C31\u4E0D\u5C5E\u4E8E\u540C\u4E00\u4E2A<code>BFC</code>\uFF0C\u5219\u4E0D\u4F1A\u51FA\u73B0<code>margin</code>\u91CD\u53E0</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">wrap</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">// \u65B0\u7684BFC</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f55</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fcc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Haha</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wrap</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hehe</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u65F6\u5019\uFF0C\u8FB9\u8DDD\u5219\u4E0D\u4F1A\u91CD\u53E0\uFF1A</p><p><img src="https://static.vue-js.com/dec44740-9511-11eb-85f6-6fac77c0c9b3.png" alt="img"></p><h4 id="\u6E05\u9664\u5185\u90E8\u6D6E\u52A8" tabindex="-1"><a href="https://vue3js.cn/interview/css/BFC.html#%E6%B8%85%E9%99%A4%E5%86%85%E9%83%A8%E6%B5%AE%E5%8A%A8" target="_blank" rel="noreferrer">#</a>\u6E05\u9664\u5185\u90E8\u6D6E\u52A8 <a class="header-anchor" href="#\u6E05\u9664\u5185\u90E8\u6D6E\u52A8" aria-hidden="true">#</a></h4><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">par</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fcc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">child</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f66</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">par</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">child</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">child</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u9875\u9762\u663E\u793A\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/ec5d4410-9511-11eb-85f6-6fac77c0c9b3.png" alt="img"></p><p>\u800C<code>BFC</code>\u5728\u8BA1\u7B97\u9AD8\u5EA6\u65F6\uFF0C\u6D6E\u52A8\u5143\u7D20\u4E5F\u4F1A\u53C2\u4E0E\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u89E6\u53D1<code>.par</code>\u5143\u7D20\u751F\u6210<code>BFC</code>\uFF0C\u5219\u5185\u90E8\u6D6E\u52A8\u5143\u7D20\u8BA1\u7B97\u9AD8\u5EA6\u65F6\u5019\u4E5F\u4F1A\u8BA1\u7B97</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">par</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5B9E\u73B0\u6548\u679C\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/f6487b20-9511-11eb-ab90-d9ae814b240d.png" alt="img"></p><h4 id="\u81EA\u9002\u5E94\u591A\u680F\u5E03\u5C40" tabindex="-1"><a href="https://vue3js.cn/interview/css/BFC.html#%E8%87%AA%E9%80%82%E5%BA%94%E5%A4%9A%E6%A0%8F%E5%B8%83%E5%B1%80" target="_blank" rel="noreferrer">#</a>\u81EA\u9002\u5E94\u591A\u680F\u5E03\u5C40 <a class="header-anchor" href="#\u81EA\u9002\u5E94\u591A\u680F\u5E03\u5C40" aria-hidden="true">#</a></h4><p>\u8FD9\u91CC\u4E3E\u4E2A\u4E24\u680F\u7684\u5E03\u5C40</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">aside</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">150px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f66</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">main</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fcc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aside</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u6548\u679C\u56FE\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/ffb95210-9511-11eb-ab90-d9ae814b240d.png" alt="img"></p><p>\u524D\u9762\u8BB2\u5230\uFF0C\u6BCF\u4E2A\u5143\u7D20\u7684\u5DE6\u5916\u8FB9\u8DDD\u4E0E\u5305\u542B\u5757\u7684\u5DE6\u8FB9\u754C\u76F8\u63A5\u89E6</p><p>\u56E0\u6B64\uFF0C\u867D\u7136<code>.aslide</code>\u4E3A\u6D6E\u52A8\u5143\u7D20\uFF0C\u4F46\u662F<code>main</code>\u7684\u5DE6\u8FB9\u4F9D\u7136\u4F1A\u4E0E\u5305\u542B\u5757\u7684\u5DE6\u8FB9\u76F8\u63A5\u89E6</p><p>\u800C<code>BFC</code>\u7684\u533A\u57DF\u4E0D\u4F1A\u4E0E\u6D6E\u52A8\u76D2\u5B50\u91CD\u53E0</p><p>\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u89E6\u53D1<code>main</code>\u751F\u6210<code>BFC</code>\uFF0C\u4EE5\u6B64\u9002\u5E94\u4E24\u680F\u5E03\u5C40</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">main</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u65F6\u5019\uFF0C\u65B0\u7684<code>BFC</code>\u4E0D\u4F1A\u4E0E\u6D6E\u52A8\u7684<code>.aside</code>\u5143\u7D20\u91CD\u53E0\u3002\u56E0\u6B64\u4F1A\u6839\u636E\u5305\u542B\u5757\u7684\u5BBD\u5EA6\uFF0C\u548C<code>.aside</code>\u7684\u5BBD\u5EA6\uFF0C\u81EA\u52A8\u53D8\u7A84</p><p>\u6548\u679C\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/0a5f2690-9512-11eb-ab90-d9ae814b240d.png" alt="img"></p><h3 id="\u5C0F\u7ED3" tabindex="-1"><a href="https://vue3js.cn/interview/css/BFC.html#%E5%B0%8F%E7%BB%93" target="_blank" rel="noreferrer">#</a>\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u770B\u5230\u4E0A\u9762\u51E0\u4E2A\u6848\u4F8B\uFF0C\u90FD\u4F53\u73B0\u4E86<code>BFC</code>\u5B9E\u9645\u5C31\u662F\u9875\u9762\u4E00\u4E2A\u72EC\u7ACB\u7684\u5BB9\u5668\uFF0C\u91CC\u9762\u7684\u5B50\u5143\u7D20\u4E0D\u5F71\u54CD\u5916\u9762\u7684\u5143\u7D20</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a href="https://vue3js.cn/interview/css/BFC.html#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE" target="_blank" rel="noreferrer">#</a>\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context</a></li><li><a href="https://github.com/zuopf769/notebook/blob/master/fe/BFC%E5%8E%9F%E7%90%86%E5%89%96%E6%9E%90/README.md" target="_blank" rel="noreferrer">https://github.com/zuopf769/notebook/blob/master/fe/BFC\u539F\u7406\u5256\u6790/README.md</a></li></ul>`,49),e=[o];function t(c,r,D,F,y,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
