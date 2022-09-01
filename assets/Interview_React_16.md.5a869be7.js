import{_ as s,c as n,o as a,a as l}from"./app.ade653e8.js";const A=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5BF9React Hooks\u7684\u7406\u89E3\uFF1F\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"[#](https://vue3js.cn/interview/React/React Hooks.html#\u4E00\u3001\u662F\u4EC0\u4E48)\u4E00\u3001\u662F\u4EC0\u4E48","slug":"https-vue3js-cn-interview-react-react-hooks-html-\u4E00\u3001\u662F\u4EC0\u4E48-\u4E00\u3001\u662F\u4EC0\u4E48","link":"#https-vue3js-cn-interview-react-react-hooks-html-\u4E00\u3001\u662F\u4EC0\u4E48-\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"[#](https://vue3js.cn/interview/React/React Hooks.html#\u4E8C\u3001\u6709\u54EA\u4E9B)\u4E8C\u3001\u6709\u54EA\u4E9B","slug":"https-vue3js-cn-interview-react-react-hooks-html-\u4E8C\u3001\u6709\u54EA\u4E9B-\u4E8C\u3001\u6709\u54EA\u4E9B","link":"#https-vue3js-cn-interview-react-react-hooks-html-\u4E8C\u3001\u6709\u54EA\u4E9B-\u4E8C\u3001\u6709\u54EA\u4E9B","children":[{"level":3,"title":"[#](https://vue3js.cn/interview/React/React Hooks.html#usestate)useState","slug":"https-vue3js-cn-interview-react-react-hooks-html-usestate-usestate","link":"#https-vue3js-cn-interview-react-react-hooks-html-usestate-usestate","children":[]},{"level":3,"title":"[#](https://vue3js.cn/interview/React/React Hooks.html#useeffect)useEffect","slug":"https-vue3js-cn-interview-react-react-hooks-html-useeffect-useeffect","link":"#https-vue3js-cn-interview-react-react-hooks-html-useeffect-useeffect","children":[]},{"level":3,"title":"[#](https://vue3js.cn/interview/React/React Hooks.html#\u5176\u5B83-hooks)\u5176\u5B83 hooks","slug":"https-vue3js-cn-interview-react-react-hooks-html-\u5176\u5B83-hooks-\u5176\u5B83-hooks","link":"#https-vue3js-cn-interview-react-react-hooks-html-\u5176\u5B83-hooks-\u5176\u5B83-hooks","children":[]}]},{"level":2,"title":"[#](https://vue3js.cn/interview/React/React Hooks.html#\u4E09\u3001\u89E3\u51B3\u4EC0\u4E48)\u4E09\u3001\u89E3\u51B3\u4EC0\u4E48","slug":"https-vue3js-cn-interview-react-react-hooks-html-\u4E09\u3001\u89E3\u51B3\u4EC0\u4E48-\u4E09\u3001\u89E3\u51B3\u4EC0\u4E48","link":"#https-vue3js-cn-interview-react-react-hooks-html-\u4E09\u3001\u89E3\u51B3\u4EC0\u4E48-\u4E09\u3001\u89E3\u51B3\u4EC0\u4E48","children":[]}],"relativePath":"Interview/React/16.md"}'),o={name:"Interview/React/16.md"},p=l(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5BF9react-hooks\u7684\u7406\u89E3\uFF1F\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5BF9React Hooks\u7684\u7406\u89E3\uFF1F\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5BF9react-hooks\u7684\u7406\u89E3\uFF1F\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/8d357c50-e12e-11eb-85f6-6fac77c0c9b3.png" alt="img"></p><h2 id="https-vue3js-cn-interview-react-react-hooks-html-\u4E00\u3001\u662F\u4EC0\u4E48-\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1">[#](<a href="https://vue3js.cn/interview/React/React" target="_blank" rel="noreferrer">https://vue3js.cn/interview/React/React</a> Hooks.html#\u4E00\u3001\u662F\u4EC0\u4E48)\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#https-vue3js-cn-interview-react-react-hooks-html-\u4E00\u3001\u662F\u4EC0\u4E48-\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p><code>Hook</code> \u662F React 16.8 \u7684\u65B0\u589E\u7279\u6027\u3002\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u4E0D\u7F16\u5199 <code>class</code> \u7684\u60C5\u51B5\u4E0B\u4F7F\u7528 <code>state</code> \u4EE5\u53CA\u5176\u4ED6\u7684 <code>React</code> \u7279\u6027</p><p>\u81F3\u4E8E\u4E3A\u4EC0\u4E48\u5F15\u5165<code>hook</code>\uFF0C\u5B98\u65B9\u7ED9\u51FA\u7684\u52A8\u673A\u662F\u89E3\u51B3\u957F\u65F6\u95F4\u4F7F\u7528\u548C\u7EF4\u62A4<code>react</code>\u8FC7\u7A0B\u4E2D\u5E38\u9047\u5230\u7684\u95EE\u9898\uFF0C\u4F8B\u5982\uFF1A</p><ul><li>\u96BE\u4EE5\u91CD\u7528\u548C\u5171\u4EAB\u7EC4\u4EF6\u4E2D\u7684\u4E0E\u72B6\u6001\u76F8\u5173\u7684\u903B\u8F91</li><li>\u903B\u8F91\u590D\u6742\u7684\u7EC4\u4EF6\u96BE\u4EE5\u5F00\u53D1\u4E0E\u7EF4\u62A4\uFF0C\u5F53\u6211\u4EEC\u7684\u7EC4\u4EF6\u9700\u8981\u5904\u7406\u591A\u4E2A\u4E92\u4E0D\u76F8\u5173\u7684 local state \u65F6\uFF0C\u6BCF\u4E2A\u751F\u547D\u5468\u671F\u51FD\u6570\u4E2D\u53EF\u80FD\u4F1A\u5305\u542B\u7740\u5404\u79CD\u4E92\u4E0D\u76F8\u5173\u7684\u903B\u8F91\u5728\u91CC\u9762</li><li>\u7C7B\u7EC4\u4EF6\u4E2D\u7684this\u589E\u52A0\u5B66\u4E60\u6210\u672C\uFF0C\u7C7B\u7EC4\u4EF6\u5728\u57FA\u4E8E\u73B0\u6709\u5DE5\u5177\u7684\u4F18\u5316\u4E0A\u5B58\u5728\u4E9B\u8BB8\u95EE\u9898</li><li>\u7531\u4E8E\u4E1A\u52A1\u53D8\u52A8\uFF0C\u51FD\u6570\u7EC4\u4EF6\u4E0D\u5F97\u4E0D\u6539\u4E3A\u7C7B\u7EC4\u4EF6\u7B49\u7B49</li></ul><p>\u5728\u4EE5\u524D\uFF0C\u51FD\u6570\u7EC4\u4EF6\u4E5F\u88AB\u79F0\u4E3A\u65E0\u72B6\u6001\u7684\u7EC4\u4EF6\uFF0C\u53EA\u8D1F\u8D23\u6E32\u67D3\u7684\u4E00\u4E9B\u5DE5\u4F5C</p><p>\u56E0\u6B64\uFF0C\u73B0\u5728\u7684\u51FD\u6570\u7EC4\u4EF6\u4E5F\u53EF\u4EE5\u662F\u6709\u72B6\u6001\u7684\u7EC4\u4EF6\uFF0C\u5185\u90E8\u4E5F\u53EF\u4EE5\u7EF4\u62A4\u81EA\u8EAB\u7684\u72B6\u6001\u4EE5\u53CA\u505A\u4E00\u4E9B\u903B\u8F91\u65B9\u9762\u7684\u5904\u7406</p><h2 id="https-vue3js-cn-interview-react-react-hooks-html-\u4E8C\u3001\u6709\u54EA\u4E9B-\u4E8C\u3001\u6709\u54EA\u4E9B" tabindex="-1">[#](<a href="https://vue3js.cn/interview/React/React" target="_blank" rel="noreferrer">https://vue3js.cn/interview/React/React</a> Hooks.html#\u4E8C\u3001\u6709\u54EA\u4E9B)\u4E8C\u3001\u6709\u54EA\u4E9B <a class="header-anchor" href="#https-vue3js-cn-interview-react-react-hooks-html-\u4E8C\u3001\u6709\u54EA\u4E9B-\u4E8C\u3001\u6709\u54EA\u4E9B" aria-hidden="true">#</a></h2><p>\u4E0A\u9762\u8BB2\u5230\uFF0C<code>Hooks</code>\u8BA9\u6211\u4EEC\u7684\u51FD\u6570\u7EC4\u4EF6\u62E5\u6709\u4E86\u7C7B\u7EC4\u4EF6\u7684\u7279\u6027\uFF0C\u4F8B\u5982\u7EC4\u4EF6\u5185\u7684\u72B6\u6001\u3001\u751F\u547D\u5468\u671F</p><p>\u6700\u5E38\u89C1\u7684<code>hooks</code>\u6709\u5982\u4E0B\uFF1A</p><ul><li>useState</li><li>useEffect</li><li>\u5176\u4ED6</li></ul><h3 id="https-vue3js-cn-interview-react-react-hooks-html-usestate-usestate" tabindex="-1">[#](<a href="https://vue3js.cn/interview/React/React" target="_blank" rel="noreferrer">https://vue3js.cn/interview/React/React</a> Hooks.html#usestate)useState <a class="header-anchor" href="#https-vue3js-cn-interview-react-react-hooks-html-usestate-usestate" aria-hidden="true">#</a></h3><p>\u9996\u5148\u7ED9\u51FA\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Example</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u58F0\u660E\u4E00\u4E2A\u53EB &quot;count&quot; \u7684 state \u53D8\u91CF</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setCount</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">You clicked </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> times</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setCount</span><span style="color:#A6ACCD;">(count </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Click me</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15</p><p>\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u901A\u8FC7<code>useState</code>\u5B9E\u73B0\u51FD\u6570\u5185\u90E8\u7EF4\u62A4<code>state</code>\uFF0C\u53C2\u6570\u4E3A<code>state</code>\u9ED8\u8BA4\u7684\u503C\uFF0C\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u503C\u4E3A\u5F53\u524D\u7684<code>state</code>\uFF0C\u7B2C\u4E8C\u4E2A\u503C\u4E3A\u66F4\u65B0<code>state</code>\u7684\u51FD\u6570</p><p>\u8BE5\u51FD\u6570\u7EC4\u4EF6\u7B49\u4EF7\u4E8E\u7684\u7C7B\u7EC4\u4EF6\u5982\u4E0B\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Example</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">You clicked </span><span style="color:#89DDFF;">{this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> times</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          Click me</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4ECE\u4E0A\u8FF0\u4E24\u79CD\u4EE3\u7801\u5206\u6790\uFF0C\u53EF\u4EE5\u770B\u51FA\u4E24\u8005\u533A\u522B\uFF1A</p><ul><li>state\u58F0\u660E\u65B9\u5F0F\uFF1A\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u901A\u8FC7 useState \u76F4\u63A5\u83B7\u53D6\uFF0C\u7C7B\u7EC4\u4EF6\u901A\u8FC7constructor \u6784\u9020\u51FD\u6570\u4E2D\u8BBE\u7F6E</li><li>state\u8BFB\u53D6\u65B9\u5F0F\uFF1A\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u76F4\u63A5\u4F7F\u7528\u53D8\u91CF\uFF0C\u7C7B\u7EC4\u4EF6\u901A\u8FC7<code>this.state.count</code>\u7684\u65B9\u5F0F\u83B7\u53D6</li><li>state\u66F4\u65B0\u65B9\u5F0F\uFF1A\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u901A\u8FC7 setCount \u66F4\u65B0\uFF0C\u7C7B\u7EC4\u4EF6\u901A\u8FC7this.setState()</li></ul><p>\u603B\u7684\u6765\u8BB2\uFF0CuseState \u4F7F\u7528\u8D77\u6765\u66F4\u4E3A\u7B80\u6D01\uFF0C\u51CF\u5C11\u4E86<code>this</code>\u6307\u5411\u4E0D\u660E\u786E\u7684\u60C5\u51B5</p><h3 id="https-vue3js-cn-interview-react-react-hooks-html-useeffect-useeffect" tabindex="-1">[#](<a href="https://vue3js.cn/interview/React/React" target="_blank" rel="noreferrer">https://vue3js.cn/interview/React/React</a> Hooks.html#useeffect)useEffect <a class="header-anchor" href="#https-vue3js-cn-interview-react-react-hooks-html-useeffect-useeffect" aria-hidden="true">#</a></h3><p><code>useEffect</code>\u53EF\u4EE5\u8BA9\u6211\u4EEC\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u8FDB\u884C\u4E00\u4E9B\u5E26\u6709\u526F\u4F5C\u7528\u7684\u64CD\u4F5C</p><p>\u540C\u6837\u7ED9\u51FA\u4E00\u4E2A\u8BA1\u65F6\u5668\u793A\u4F8B\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Example</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">componentDidMount</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">title</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">You clicked </span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> times</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">componentDidUpdate</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">title</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">You clicked </span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> times</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">You clicked </span><span style="color:#89DDFF;">{this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> times</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          Click me</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u89C1\uFF0C\u7EC4\u4EF6\u5728\u52A0\u8F7D\u548C\u66F4\u65B0\u9636\u6BB5\u90FD\u6267\u884C\u540C\u6837\u64CD\u4F5C</p><p>\u800C\u5982\u679C\u4F7F\u7528<code>useEffect</code>\u540E\uFF0C\u5219\u80FD\u591F\u5C06\u76F8\u540C\u7684\u903B\u8F91\u62BD\u79BB\u51FA\u6765\uFF0C\u8FD9\u662F\u7C7B\u7EC4\u4EF6\u4E0D\u5177\u5907\u7684\u65B9\u6CD5</p><p>\u5BF9\u5E94\u7684<code>useEffect</code>\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-jsx"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useState</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useEffect</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Example</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setCount</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">useEffect</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">title</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">You clicked </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> times</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">You clicked </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> times</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setCount</span><span style="color:#A6ACCD;">(count </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Click me</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>useEffect</code>\u7B2C\u4E00\u4E2A\u53C2\u6570\u63A5\u53D7\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>useEffect</code>\u4F1A\u5728\u7B2C\u4E00\u6B21\u6E32\u67D3\u548C\u66F4\u65B0\u4E4B\u540E\u90FD\u4F1A\u6267\u884C\uFF0C\u76F8\u5F53\u4E8E\u5728<code>componentDidMount</code>\u548C<code>componentDidUpdate</code>\u4E24\u4E2A\u751F\u547D\u5468\u671F\u51FD\u6570\u4E2D\u6267\u884C\u56DE\u8C03</p><p>\u5982\u679C\u67D0\u4E9B\u7279\u5B9A\u503C\u5728\u4E24\u6B21\u91CD\u6E32\u67D3\u4E4B\u95F4\u6CA1\u6709\u53D1\u751F\u53D8\u5316\uFF0C\u4F60\u53EF\u4EE5\u8DF3\u8FC7\u5BF9 effect \u7684\u8C03\u7528\uFF0C\u8FD9\u65F6\u5019\u53EA\u9700\u8981\u4F20\u5165\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#82AAFF;">useEffect</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">title</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">You clicked </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> times</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> [count])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u4EC5\u5728 count \u66F4\u6539\u65F6\u66F4\u65B0</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u4F20\u5165\u7B2C\u4E8C\u4E2A\u53C2\u6570\u540E\uFF0C\u5982\u679C <code>count</code> \u7684\u503C\u662F <code>5</code>\uFF0C\u800C\u4E14\u6211\u4EEC\u7684\u7EC4\u4EF6\u91CD\u6E32\u67D3\u7684\u65F6\u5019 <code>count</code> \u8FD8\u662F\u7B49\u4E8E <code>5</code>\uFF0CReact \u5C06\u5BF9\u524D\u4E00\u6B21\u6E32\u67D3\u7684 <code>[5]</code> \u548C\u540E\u4E00\u6B21\u6E32\u67D3\u7684 <code>[5]</code> \u8FDB\u884C\u6BD4\u8F83\uFF0C\u5982\u679C\u662F\u76F8\u7B49\u5219\u8DF3\u8FC7<code>effects</code>\u6267\u884C</p><p>\u56DE\u8C03\u51FD\u6570\u4E2D\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u6E05\u9664\u51FD\u6570\uFF0C\u8FD9\u662F<code>effect</code>\u53EF\u9009\u7684\u6E05\u9664\u673A\u5236\uFF0C\u76F8\u5F53\u4E8E\u7C7B\u7EC4\u4EF6\u4E2D<code>componentwillUnmount</code>\u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u53EF\u505A\u4E00\u4E9B\u6E05\u9664\u526F\u4F5C\u7528\u7684\u64CD\u4F5C\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-jsx"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#82AAFF;">useEffect</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">handleStatusChange</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">status</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">setIsOnline</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">status</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isOnline</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ChatAPI</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">subscribeToFriendStatus</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">friend</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">handleStatusChange</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">ChatAPI</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unsubscribeFromFriendStatus</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">friend</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">handleStatusChange</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u6240\u4EE5\uFF0C <code>useEffect</code>\u76F8\u5F53\u4E8E<code>componentDidMount</code>\uFF0C<code>componentDidUpdate</code> \u548C <code>componentWillUnmount</code> \u8FD9\u4E09\u4E2A\u751F\u547D\u5468\u671F\u51FD\u6570\u7684\u7EC4\u5408</p><h3 id="https-vue3js-cn-interview-react-react-hooks-html-\u5176\u5B83-hooks-\u5176\u5B83-hooks" tabindex="-1">[#](<a href="https://vue3js.cn/interview/React/React" target="_blank" rel="noreferrer">https://vue3js.cn/interview/React/React</a> Hooks.html#\u5176\u5B83-hooks)\u5176\u5B83 hooks <a class="header-anchor" href="#https-vue3js-cn-interview-react-react-hooks-html-\u5176\u5B83-hooks-\u5176\u5B83-hooks" aria-hidden="true">#</a></h3><p>\u5728\u7EC4\u4EF6\u901A\u4FE1\u8FC7\u7A0B\u4E2D\u53EF\u4EE5\u4F7F\u7528<code>useContext</code>\uFF0C<code>refs</code>\u5B66\u4E60\u4E2D\u6211\u4EEC\u4E5F\u7528\u5230\u4E86<code>useRef</code>\u83B7\u53D6<code>DOM</code>\u7ED3\u6784......</p><p>\u8FD8\u6709\u5F88\u591A\u989D\u5916\u7684<code>hooks</code>\uFF0C\u5982\uFF1A</p><ul><li>useReducer</li><li>useCallback</li><li>useMemo</li><li>useRef</li></ul><h2 id="https-vue3js-cn-interview-react-react-hooks-html-\u4E09\u3001\u89E3\u51B3\u4EC0\u4E48-\u4E09\u3001\u89E3\u51B3\u4EC0\u4E48" tabindex="-1">[#](<a href="https://vue3js.cn/interview/React/React" target="_blank" rel="noreferrer">https://vue3js.cn/interview/React/React</a> Hooks.html#\u4E09\u3001\u89E3\u51B3\u4EC0\u4E48)\u4E09\u3001\u89E3\u51B3\u4EC0\u4E48 <a class="header-anchor" href="#https-vue3js-cn-interview-react-react-hooks-html-\u4E09\u3001\u89E3\u51B3\u4EC0\u4E48-\u4E09\u3001\u89E3\u51B3\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u5BF9\u4E0A\u9762\u7684\u521D\u6B65\u8BA4\u8BC6\uFF0C\u53EF\u4EE5\u770B\u5230<code>hooks</code>\u80FD\u591F\u66F4\u5BB9\u6613\u89E3\u51B3\u72B6\u6001\u76F8\u5173\u7684\u91CD\u7528\u7684\u95EE\u9898\uFF1A</p><ul><li>\u6BCF\u8C03\u7528useHook\u4E00\u6B21\u90FD\u4F1A\u751F\u6210\u4E00\u4EFD\u72EC\u7ACB\u7684\u72B6\u6001</li><li>\u901A\u8FC7\u81EA\u5B9A\u4E49hook\u80FD\u591F\u66F4\u597D\u7684\u5C01\u88C5\u6211\u4EEC\u7684\u529F\u80FD</li></ul><p>\u7F16\u5199<code>hooks</code>\u4E3A\u51FD\u6570\u5F0F\u7F16\u7A0B\uFF0C\u6BCF\u4E2A\u529F\u80FD\u90FD\u5305\u88F9\u5728\u51FD\u6570\u4E2D\uFF0C\u6574\u4F53\u98CE\u683C\u66F4\u6E05\u723D\uFF0C\u66F4\u4F18\u96C5</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">hooks\`\u7684\u51FA\u73B0\uFF0C\u4F7F\u51FD\u6570\u7EC4\u4EF6\u7684\u529F\u80FD\u5F97\u5230\u4E86\u6269\u5145\uFF0C\u62E5\u6709\u4E86\u7C7B\u7EC4\u4EF6\u76F8\u4F3C\u7684\u529F\u80FD\uFF0C\u5728\u6211\u4EEC\u65E5\u5E38\u4F7F\u7528\u4E2D\uFF0C\u4F7F\u7528\`hooks\`\u80FD\u591F\u89E3\u51B3\u5927\u591A\u6570\u95EE\u9898\uFF0C\u5E76\u4E14\u8FD8\u62E5\u6709\u4EE3\u7801\u590D\u7528\u673A\u5236\uFF0C\u56E0\u6B64\u4F18\u5148\u8003\u8651\`hooks</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,46),e=[p];function t(c,r,F,D,y,C){return a(),n("div",null,e)}const u=s(o,[["render",t]]);export{A as __pageData,u as default};
