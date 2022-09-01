import{_ as s,c as a,o as n,a as p}from"./app.ade653e8.js";const C=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4 Javascript \u6570\u5B57\u7CBE\u5EA6\u4E22\u5931\u7684\u95EE\u9898\uFF0C\u5982\u4F55\u89E3\u51B3\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"#\u4E00\u3001\u573A\u666F\u590D\u73B0","slug":"\u4E00\u3001\u573A\u666F\u590D\u73B0","link":"#\u4E00\u3001\u573A\u666F\u590D\u73B0","children":[]},{"level":2,"title":"#\u4E8C\u3001\u6D6E\u70B9\u6570","slug":"\u4E8C\u3001\u6D6E\u70B9\u6570","link":"#\u4E8C\u3001\u6D6E\u70B9\u6570","children":[]},{"level":2,"title":"#\u4E8C\u3001\u95EE\u9898\u5206\u6790","slug":"\u4E8C\u3001\u95EE\u9898\u5206\u6790","link":"#\u4E8C\u3001\u95EE\u9898\u5206\u6790","children":[{"level":3,"title":"#\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","link":"#\u5C0F\u7ED3","children":[]}]},{"level":2,"title":"#\u4E09\u3001\u89E3\u51B3\u65B9\u6848","slug":"\u4E09\u3001\u89E3\u51B3\u65B9\u6848","link":"#\u4E09\u3001\u89E3\u51B3\u65B9\u6848","children":[]},{"level":2,"title":"#\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"Interview/JavaScript/28.md"}'),l={name:"Interview/JavaScript/28.md"},o=p(`<ul><li></li></ul><h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4-javascript-\u6570\u5B57\u7CBE\u5EA6\u4E22\u5931\u7684\u95EE\u9898\uFF0C\u5982\u4F55\u89E3\u51B3\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4 Javascript \u6570\u5B57\u7CBE\u5EA6\u4E22\u5931\u7684\u95EE\u9898\uFF0C\u5982\u4F55\u89E3\u51B3\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4-javascript-\u6570\u5B57\u7CBE\u5EA6\u4E22\u5931\u7684\u95EE\u9898\uFF0C\u5982\u4F55\u89E3\u51B3\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/09646a10-86f4-11eb-85f6-6fac77c0c9b3.png" alt="img"></p><h2 id="\u4E00\u3001\u573A\u666F\u590D\u73B0" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/loss_accuracy.html#%E4%B8%80%E3%80%81%E5%9C%BA%E6%99%AF%E5%A4%8D%E7%8E%B0" target="_blank" rel="noreferrer">#</a>\u4E00\u3001\u573A\u666F\u590D\u73B0 <a class="header-anchor" href="#\u4E00\u3001\u573A\u666F\u590D\u73B0" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u7ECF\u5178\u7684\u9762\u8BD5\u9898</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#F78C6C;">0.1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.3</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// false</span></span>
<span class="line"></span></code></pre></div><p>\u4E3A\u4EC0\u4E48\u662F<code>false</code>\u5462?</p><p>\u5148\u770B\u4E0B\u9762\u8FD9\u4E2A\u6BD4\u55BB</p><p>\u6BD4\u5982\u4E00\u4E2A\u6570 1\xF73=0.33333333......</p><p>3\u4F1A\u4E00\u76F4\u65E0\u9650\u5FAA\u73AF\uFF0C\u6570\u5B66\u53EF\u4EE5\u8868\u793A\uFF0C\u4F46\u662F\u8BA1\u7B97\u673A\u8981\u5B58\u50A8\uFF0C\u65B9\u4FBF\u4E0B\u6B21\u53D6\u51FA\u6765\u518D\u4F7F\u7528\uFF0C\u4F460.333333...... \u8FD9\u4E2A\u6570\u65E0\u9650\u5FAA\u73AF\uFF0C\u518D\u5927\u7684\u5185\u5B58\u5B83\u4E5F\u5B58\u4E0D\u4E0B\uFF0C\u6240\u4EE5\u4E0D\u80FD\u5B58\u50A8\u4E00\u4E2A\u76F8\u5BF9\u4E8E\u6570\u5B66\u6765\u8BF4\u7684\u503C\uFF0C\u53EA\u80FD\u5B58\u50A8\u4E00\u4E2A\u8FD1\u4F3C\u503C\uFF0C\u5F53\u8BA1\u7B97\u673A\u5B58\u50A8\u540E\u518D\u53D6\u51FA\u65F6\u5C31\u4F1A\u51FA\u73B0\u7CBE\u5EA6\u4E22\u5931\u95EE\u9898</p><h2 id="\u4E8C\u3001\u6D6E\u70B9\u6570" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/loss_accuracy.html#%E4%BA%8C%E3%80%81%E6%B5%AE%E7%82%B9%E6%95%B0" target="_blank" rel="noreferrer">#</a>\u4E8C\u3001\u6D6E\u70B9\u6570 <a class="header-anchor" href="#\u4E8C\u3001\u6D6E\u70B9\u6570" aria-hidden="true">#</a></h2><p>\u201C\u6D6E\u70B9\u6570\u201D\u662F\u4E00\u79CD\u8868\u793A\u6570\u5B57\u7684\u6807\u51C6\uFF0C\u6574\u6570\u4E5F\u53EF\u4EE5\u7528\u6D6E\u70B9\u6570\u7684\u683C\u5F0F\u6765\u5B58\u50A8</p><p>\u6211\u4EEC\u4E5F\u53EF\u4EE5\u7406\u89E3\u6210\uFF0C\u6D6E\u70B9\u6570\u5C31\u662F\u5C0F\u6570</p><p>\u5728<code>JavaScript</code>\u4E2D\uFF0C\u73B0\u5728\u4E3B\u6D41\u7684\u6570\u503C\u7C7B\u578B\u662F<code>Number</code>\uFF0C\u800C<code>Number</code>\u91C7\u7528\u7684\u662F<code>IEEE754</code>\u89C4\u8303\u4E2D64\u4F4D\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u6570\u7F16\u7801</p><p>\u8FD9\u6837\u7684\u5B58\u50A8\u7ED3\u6784\u4F18\u70B9\u662F\u53EF\u4EE5\u5F52\u4E00\u5316\u5904\u7406\u6574\u6570\u548C\u5C0F\u6570\uFF0C\u8282\u7701\u5B58\u50A8\u7A7A\u95F4</p><p>\u5BF9\u4E8E\u4E00\u4E2A\u6574\u6570\uFF0C\u53EF\u4EE5\u5F88\u8F7B\u6613\u8F6C\u5316\u6210\u5341\u8FDB\u5236\u6216\u8005\u4E8C\u8FDB\u5236\u3002\u4F46\u662F\u5BF9\u4E8E\u4E00\u4E2A\u6D6E\u70B9\u6570\u6765\u8BF4\uFF0C\u56E0\u4E3A\u5C0F\u6570\u70B9\u7684\u5B58\u5728\uFF0C\u5C0F\u6570\u70B9\u7684\u4F4D\u7F6E\u4E0D\u662F\u56FA\u5B9A\u7684\u3002\u89E3\u51B3\u601D\u8DEF\u5C31\u662F\u4F7F\u7528\u79D1\u5B66\u8BA1\u6570\u6CD5\uFF0C\u8FD9\u6837\u5C0F\u6570\u70B9\u4F4D\u7F6E\u5C31\u56FA\u5B9A\u4E86</p><p>\u800C\u8BA1\u7B97\u673A\u53EA\u80FD\u7528\u4E8C\u8FDB\u5236\uFF080\u62161\uFF09\u8868\u793A\uFF0C\u4E8C\u8FDB\u5236\u8F6C\u6362\u4E3A\u79D1\u5B66\u8BB0\u6570\u6CD5\u7684\u516C\u5F0F\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/1b4b1620-86f4-11eb-ab90-d9ae814b240d.png" alt="img"></p><p>\u5176\u4E2D\uFF0C<code>a</code>\u7684\u503C\u4E3A0\u6216\u80051\uFF0Ce\u4E3A\u5C0F\u6570\u70B9\u79FB\u52A8\u7684\u4F4D\u7F6E</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><p>27.0\u8F6C\u5316\u6210\u4E8C\u8FDB\u5236\u4E3A11011.0 \uFF0C\u79D1\u5B66\u8BA1\u6570\u6CD5\u8868\u793A\u4E3A\uFF1A</p><p><img src="https://static.vue-js.com/37007090-86f4-11eb-ab90-d9ae814b240d.png" alt="img"></p><p>\u524D\u9762\u8BB2\u5230\uFF0C<code>javaScript</code>\u5B58\u50A8\u65B9\u5F0F\u662F\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u6570\uFF0C\u5176\u957F\u5EA6\u4E3A8\u4E2A\u5B57\u8282\uFF0C\u537364\u4F4D\u6BD4\u7279</p><p>64\u4F4D\u6BD4\u7279\u53C8\u53EF\u5206\u4E3A\u4E09\u4E2A\u90E8\u5206\uFF1A</p><ul><li>\u7B26\u53F7\u4F4DS\uFF1A\u7B2C 1 \u4F4D\u662F\u6B63\u8D1F\u6570\u7B26\u53F7\u4F4D\uFF08sign\uFF09\uFF0C0\u4EE3\u8868\u6B63\u6570\uFF0C1\u4EE3\u8868\u8D1F\u6570</li><li>\u6307\u6570\u4F4DE\uFF1A\u4E2D\u95F4\u7684 11 \u4F4D\u5B58\u50A8\u6307\u6570\uFF08exponent\uFF09\uFF0C\u7528\u6765\u8868\u793A\u6B21\u65B9\u6570\uFF0C\u53EF\u4EE5\u4E3A\u6B63\u8D1F\u6570\u3002\u5728\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u6570\u4E2D\uFF0C\u6307\u6570\u7684\u56FA\u5B9A\u504F\u79FB\u91CF\u4E3A1023</li><li>\u5C3E\u6570\u4F4DM\uFF1A\u6700\u540E\u7684 52 \u4F4D\u662F\u5C3E\u6570\uFF08mantissa\uFF09\uFF0C\u8D85\u51FA\u7684\u90E8\u5206\u81EA\u52A8\u8FDB\u4E00\u820D\u96F6</li></ul><p>\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/430d0100-86f4-11eb-85f6-6fac77c0c9b3.png" alt="img"></p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><p>27.5 \u8F6C\u6362\u4E3A\u4E8C\u8FDB\u523611011.1</p><p>11011.1\u8F6C\u6362\u4E3A\u79D1\u5B66\u8BB0\u6570\u6CD5 <img src="https://www.zhihu.com/equation?tex=1.10111%2A2%5E4" alt="[\u516C\u5F0F]"></p><p>\u7B26\u53F7\u4F4D\u4E3A1(\u6B63\u6570)\uFF0C\u6307\u6570\u4F4D\u4E3A4+\uFF0C1023+4\uFF0C\u53731027</p><p>\u56E0\u4E3A\u5B83\u662F\u5341\u8FDB\u5236\u7684\u9700\u8981\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\uFF0C\u5373 <code>10000000011</code>\uFF0C\u5C0F\u6570\u90E8\u5206\u4E3A<code>10111</code>\uFF0C\u8865\u591F52\u4F4D\u5373\uFF1A 1011 1000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000\`</p><p>\u6240\u4EE527.5\u5B58\u50A8\u4E3A\u8BA1\u7B97\u673A\u7684\u4E8C\u8FDB\u5236\u6807\u51C6\u5F62\u5F0F\uFF08\u7B26\u53F7\u4F4D+\u6307\u6570\u4F4D+\u5C0F\u6570\u90E8\u5206 (\u9636\u6570)\uFF09\uFF0C\u65E2\u4E0B\u9762\u6240\u793A</p><p>0+10000000011+011 1000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000\`</p><h2 id="\u4E8C\u3001\u95EE\u9898\u5206\u6790" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/loss_accuracy.html#%E4%BA%8C%E3%80%81%E9%97%AE%E9%A2%98%E5%88%86%E6%9E%90" target="_blank" rel="noreferrer">#</a>\u4E8C\u3001\u95EE\u9898\u5206\u6790 <a class="header-anchor" href="#\u4E8C\u3001\u95EE\u9898\u5206\u6790" aria-hidden="true">#</a></h2><p>\u518D\u56DE\u5230\u95EE\u9898\u4E0A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#F78C6C;">0.1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.3</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// false</span></span>
<span class="line"></span></code></pre></div><p>\u901A\u8FC7\u4E0A\u9762\u7684\u5B66\u4E60\uFF0C\u6211\u4EEC\u77E5\u9053\uFF0C\u5728<code>javascript</code>\u8BED\u8A00\u4E2D\uFF0C0.1 \u548C 0.2 \u90FD\u8F6C\u5316\u6210\u4E8C\u8FDB\u5236\u540E\u518D\u8FDB\u884C\u8FD0\u7B97</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// 0.1 \u548C 0.2 \u90FD\u8F6C\u5316\u6210\u4E8C\u8FDB\u5236\u540E\u518D\u8FDB\u884C\u8FD0\u7B97</span></span>
<span class="line"><span style="color:#F78C6C;">0.00011001100110011001100110011001100110011001100110011010</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#F78C6C;">0.0011001100110011001100110011001100110011001100110011010</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#F78C6C;">0.0100110011001100110011001100110011001100110011001100111</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u8F6C\u6210\u5341\u8FDB\u5236\u6B63\u597D\u662F 0.30000000000000004</span></span>
<span class="line"></span></code></pre></div><p>\u6240\u4EE5\u8F93\u51FA<code>false</code></p><p>\u518D\u6765\u4E00\u4E2A\u95EE\u9898\uFF0C\u90A3\u4E48\u4E3A\u4EC0\u4E48<code>x=0.1</code>\u5F97\u5230<code>0.1</code>\uFF1F</p><p>\u4E3B\u8981\u662F\u5B58\u50A8\u4E8C\u8FDB\u5236\u65F6\u5C0F\u6570\u70B9\u7684\u504F\u79FB\u91CF\u6700\u5927\u4E3A52\u4F4D\uFF0C\u6700\u591A\u53EF\u4EE5\u8868\u8FBE\u7684\u4F4D\u6570\u662F<code>2^53=9007199254740992</code>\uFF0C\u5BF9\u5E94\u79D1\u5B66\u8BA1\u6570\u5C3E\u6570\u662F <code>9.007199254740992</code>\uFF0C\u8FD9\u4E5F\u662F JS \u6700\u591A\u80FD\u8868\u793A\u7684\u7CBE\u5EA6</p><p>\u5B83\u7684\u957F\u5EA6\u662F 16\uFF0C\u6240\u4EE5\u53EF\u4EE5\u4F7F\u7528 <code>toPrecision(16)</code> \u6765\u505A\u7CBE\u5EA6\u8FD0\u7B97\uFF0C\u8D85\u8FC7\u7684\u7CBE\u5EA6\u4F1A\u81EA\u52A8\u505A\u51D1\u6574\u5904\u7406</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#F78C6C;">.10000000000000000555</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toPrecision</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// \u8FD4\u56DE 0.1000000000000000\uFF0C\u53BB\u6389\u672B\u5C3E\u7684\u96F6\u540E\u6B63\u597D\u4E3A 0.1</span></span>
<span class="line"></span></code></pre></div><p>\u4F46\u770B\u5230\u7684 <code>0.1</code> \u5B9E\u9645\u4E0A\u5E76\u4E0D\u662F <code>0.1</code>\u3002\u4E0D\u4FE1\u4F60\u53EF\u7528\u66F4\u9AD8\u7684\u7CBE\u5EA6\u8BD5\u8BD5\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toPrecision</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">21</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.100000000000000005551</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u6574\u6570\u5927\u4E8E <code>9007199254740992</code> \u4F1A\u51FA\u73B0\u4EC0\u4E48\u60C5\u51B5\u5462\uFF1F</p><p>\u7531\u4E8E\u6307\u6570\u4F4D\u6700\u5927\u503C\u662F1023\uFF0C\u6240\u4EE5\u6700\u5927\u53EF\u4EE5\u8868\u793A\u7684\u6574\u6570\u662F <code>2^1024 - 1</code>\uFF0C\u8FD9\u5C31\u662F\u80FD\u8868\u793A\u7684\u6700\u5927\u6574\u6570\u3002\u4F46\u4F60\u5E76\u4E0D\u80FD\u8FD9\u6837\u8BA1\u7B97\u8FD9\u4E2A\u6570\u5B57\uFF0C\u56E0\u4E3A\u4ECE <code>2^1024</code> \u5F00\u59CB\u5C31\u53D8\u6210\u4E86 <code>Infinity</code></p><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt; Math.pow(2, 1023)</span></span>
<span class="line"><span style="color:#A6ACCD;">8.98846567431158e+307</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; Math.pow(2, 1024)</span></span>
<span class="line"><span style="color:#A6ACCD;">Infinity</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u90A3\u4E48\u5BF9\u4E8E <code>(2^53, 2^63)</code> \u4E4B\u95F4\u7684\u6570\u4F1A\u51FA\u73B0\u4EC0\u4E48\u60C5\u51B5\u5462\uFF1F</p><ul><li><code>(2^53, 2^54)</code> \u4E4B\u95F4\u7684\u6570\u4F1A\u4E24\u4E2A\u9009\u4E00\u4E2A\uFF0C\u53EA\u80FD\u7CBE\u786E\u8868\u793A\u5076\u6570</li><li><code>(2^54, 2^55)</code> \u4E4B\u95F4\u7684\u6570\u4F1A\u56DB\u4E2A\u9009\u4E00\u4E2A\uFF0C\u53EA\u80FD\u7CBE\u786E\u8868\u793A4\u4E2A\u500D\u6570</li><li>... \u4F9D\u6B21\u8DF3\u8FC7\u66F4\u591A2\u7684\u500D\u6570</li></ul><p>\u8981\u60F3\u89E3\u51B3\u5927\u6570\u7684\u95EE\u9898\u4F60\u53EF\u4EE5\u5F15\u7528\u7B2C\u4E09\u65B9\u5E93 <code>bignumber.js</code>\uFF0C\u539F\u7406\u662F\u628A\u6240\u6709\u6570\u5B57\u5F53\u4F5C\u5B57\u7B26\u4E32\uFF0C\u91CD\u65B0\u5B9E\u73B0\u4E86\u8BA1\u7B97\u903B\u8F91\uFF0C\u7F3A\u70B9\u662F\u6027\u80FD\u6BD4\u539F\u751F\u5DEE\u5F88\u591A</p><h3 id="\u5C0F\u7ED3" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/loss_accuracy.html#%E5%B0%8F%E7%BB%93" target="_blank" rel="noreferrer">#</a>\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h3><p>\u8BA1\u7B97\u673A\u5B58\u50A8\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u6570\u9700\u8981\u5148\u628A\u5341\u8FDB\u5236\u6570\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u7684\u79D1\u5B66\u8BB0\u6570\u6CD5\u7684\u5F62\u5F0F\uFF0C\u7136\u540E\u8BA1\u7B97\u673A\u4EE5\u81EA\u5DF1\u7684\u89C4\u5219{\u7B26\u53F7\u4F4D+(\u6307\u6570\u4F4D+\u6307\u6570\u504F\u79FB\u91CF\u7684\u4E8C\u8FDB\u5236)+\u5C0F\u6570\u90E8\u5206}\u5B58\u50A8\u4E8C\u8FDB\u5236\u7684\u79D1\u5B66\u8BB0\u6570\u6CD5</p><p>\u56E0\u4E3A\u5B58\u50A8\u65F6\u6709\u4F4D\u6570\u9650\u5236\uFF0864\u4F4D\uFF09\uFF0C\u5E76\u4E14\u67D0\u4E9B\u5341\u8FDB\u5236\u7684\u6D6E\u70B9\u6570\u5728\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u6570\u65F6\u4F1A\u51FA\u73B0\u65E0\u9650\u5FAA\u73AF\uFF0C\u4F1A\u9020\u6210\u4E8C\u8FDB\u5236\u7684\u820D\u5165\u64CD\u4F5C(0\u820D1\u5165)\uFF0C\u5F53\u518D\u8F6C\u6362\u4E3A\u5341\u8FDB\u5236\u65F6\u5C31\u9020\u6210\u4E86\u8BA1\u7B97\u8BEF\u5DEE</p><h2 id="\u4E09\u3001\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/loss_accuracy.html#%E4%B8%89%E3%80%81%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88" target="_blank" rel="noreferrer">#</a>\u4E09\u3001\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#\u4E09\u3001\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a></h2><p>\u7406\u8BBA\u4E0A\u7528\u6709\u9650\u7684\u7A7A\u95F4\u6765\u5B58\u50A8\u65E0\u9650\u7684\u5C0F\u6570\u662F\u4E0D\u53EF\u80FD\u4FDD\u8BC1\u7CBE\u786E\u7684\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u5904\u7406\u4E00\u4E0B\u5F97\u5230\u6211\u4EEC\u671F\u671B\u7684\u7ED3\u679C</p><p>\u5F53\u4F60\u62FF\u5230 <code>1.4000000000000001</code> \u8FD9\u6837\u7684\u6570\u636E\u8981\u5C55\u793A\u65F6\uFF0C\u5EFA\u8BAE\u4F7F\u7528 <code>toPrecision</code> \u51D1\u6574\u5E76 <code>parseFloat</code> \u8F6C\u6210\u6570\u5B57\u540E\u518D\u663E\u793A\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">parseFloat(1.4000000000000001.toPrecision(12)) === 1.4  // True</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5C01\u88C5\u6210\u65B9\u6CD5\u5C31\u662F\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">strip</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">precision</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;">parseFloat</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toPrecision</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">precision</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5BF9\u4E8E\u8FD0\u7B97\u7C7B\u64CD\u4F5C\uFF0C\u5982 <code>+-*/</code>\uFF0C\u5C31\u4E0D\u80FD\u4F7F\u7528 <code>toPrecision</code> \u4E86\u3002\u6B63\u786E\u7684\u505A\u6CD5\u662F\u628A\u5C0F\u6570\u8F6C\u6210\u6574\u6570\u540E\u518D\u8FD0\u7B97\u3002\u4EE5\u52A0\u6CD5\u4E3A\u4F8B\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * \u7CBE\u786E\u52A0\u6CD5</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">num2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num1Digits</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">num1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num2Digits</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">num2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">baseNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pow</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">num1Digits</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num2Digits</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">num1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">baseNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">baseNum</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">baseNum</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6700\u540E\u8FD8\u53EF\u4EE5\u4F7F\u7528\u7B2C\u4E09\u65B9\u5E93\uFF0C\u5982<code>Math.js</code>\u3001<code>BigDecimal.js</code></p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/loss_accuracy.html#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE" target="_blank" rel="noreferrer">#</a>\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><ul><li><a href="https://zhuanlan.zhihu.com/p/100353781" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/100353781</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt</a></li></ul>`,66),e=[o];function c(t,r,i,y,F,D){return n(),a("div",null,e)}const A=s(l,[["render",c]]);export{C as __pageData,A as default};
