import{_ as e,c as t,o as a,a as r}from"./app.ade653e8.js";const u=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u4E3A\u4EC0\u4E48\u8BF4HTTPS\u6BD4HTTP\u5B89\u5168? HTTPS\u662F\u5982\u4F55\u4FDD\u8BC1\u5B89\u5168\u7684\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"#\u4E00\u3001\u5B89\u5168\u7279\u6027","slug":"\u4E00\u3001\u5B89\u5168\u7279\u6027","link":"#\u4E00\u3001\u5B89\u5168\u7279\u6027","children":[]},{"level":2,"title":"#\u4E8C\u3001\u5982\u4F55\u505A","slug":"\u4E8C\u3001\u5982\u4F55\u505A","link":"#\u4E8C\u3001\u5982\u4F55\u505A","children":[{"level":3,"title":"#\u5BF9\u79F0\u52A0\u5BC6","slug":"\u5BF9\u79F0\u52A0\u5BC6","link":"#\u5BF9\u79F0\u52A0\u5BC6","children":[]},{"level":3,"title":"#\u975E\u5BF9\u79F0\u52A0\u5BC6","slug":"\u975E\u5BF9\u79F0\u52A0\u5BC6","link":"#\u975E\u5BF9\u79F0\u52A0\u5BC6","children":[]},{"level":3,"title":"#\u6DF7\u5408\u52A0\u5BC6","slug":"\u6DF7\u5408\u52A0\u5BC6","link":"#\u6DF7\u5408\u52A0\u5BC6","children":[]},{"level":3,"title":"#\u6458\u8981\u7B97\u6CD5","slug":"\u6458\u8981\u7B97\u6CD5","link":"#\u6458\u8981\u7B97\u6CD5","children":[]},{"level":3,"title":"#\u6570\u5B57\u7B7E\u540D","slug":"\u6570\u5B57\u7B7E\u540D","link":"#\u6570\u5B57\u7B7E\u540D","children":[]},{"level":3,"title":"#CA\u9A8C\u8BC1\u673A\u6784","slug":"ca\u9A8C\u8BC1\u673A\u6784","link":"#ca\u9A8C\u8BC1\u673A\u6784","children":[]}]},{"level":2,"title":"#\u4E09\u3001\u603B\u7ED3","slug":"\u4E09\u3001\u603B\u7ED3","link":"#\u4E09\u3001\u603B\u7ED3","children":[]}],"relativePath":"Interview/HTTP/2.md"}'),i={name:"Interview/HTTP/2.md"},l=r('<h1 id="\u9762\u8BD5\u5B98\uFF1A\u4E3A\u4EC0\u4E48\u8BF4https\u6BD4http\u5B89\u5168-https\u662F\u5982\u4F55\u4FDD\u8BC1\u5B89\u5168\u7684\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u4E3A\u4EC0\u4E48\u8BF4HTTPS\u6BD4HTTP\u5B89\u5168? HTTPS\u662F\u5982\u4F55\u4FDD\u8BC1\u5B89\u5168\u7684\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u4E3A\u4EC0\u4E48\u8BF4https\u6BD4http\u5B89\u5168-https\u662F\u5982\u4F55\u4FDD\u8BC1\u5B89\u5168\u7684\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/b5512250-b2ff-11eb-ab90-d9ae814b240d.png" alt="img"></p><h2 id="\u4E00\u3001\u5B89\u5168\u7279\u6027" tabindex="-1"><a href="https://vue3js.cn/interview/http/HTTPS.html#%E4%B8%80%E3%80%81%E5%AE%89%E5%85%A8%E7%89%B9%E6%80%A7" target="_blank" rel="noreferrer">#</a>\u4E00\u3001\u5B89\u5168\u7279\u6027 <a class="header-anchor" href="#\u4E00\u3001\u5B89\u5168\u7279\u6027" aria-hidden="true">#</a></h2><p>\u5728\u4E0A\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230<code>HTTP</code>\u5728\u901A\u4FE1\u8FC7\u7A0B\u4E2D\uFF0C\u5B58\u5728\u4EE5\u4E0B\u95EE\u9898\uFF1A</p><ul><li>\u901A\u4FE1\u4F7F\u7528\u660E\u6587\uFF08\u4E0D\u52A0\u5BC6\uFF09\uFF0C\u5185\u5BB9\u53EF\u80FD\u88AB\u7A83\u542C</li><li>\u4E0D\u9A8C\u8BC1\u901A\u4FE1\u65B9\u7684\u8EAB\u4EFD\uFF0C\u56E0\u6B64\u6709\u53EF\u80FD\u906D\u9047\u4F2A\u88C5</li></ul><p>\u800C<code>HTTPS</code>\u7684\u51FA\u73B0\u6B63\u662F\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898\uFF0C<code>HTTPS</code>\u662F\u5EFA\u7ACB\u5728<code>SSL</code>\u4E4B\u4E0A\uFF0C\u5176\u5B89\u5168\u6027\u7531<code>SSL</code>\u6765\u4FDD\u8BC1</p><p>\u5728\u91C7\u7528<code>SSL</code>\u540E\uFF0C<code>HTTP</code>\u5C31\u62E5\u6709\u4E86<code>HTTPS</code>\u7684\u52A0\u5BC6\u3001\u8BC1\u4E66\u548C\u5B8C\u6574\u6027\u4FDD\u62A4\u8FD9\u4E9B\u529F\u80FD</p><blockquote><p>SSL(Secure Sockets Layer \u5B89\u5168\u5957\u63A5\u5B57\u534F\u8BAE),\u53CA\u5176\u7EE7\u4EFB\u8005\u4F20\u8F93\u5C42\u5B89\u5168\uFF08Transport Layer Security\uFF0CTLS\uFF09\u662F\u4E3A\u7F51\u7EDC\u901A\u4FE1\u63D0\u4F9B\u5B89\u5168\u53CA\u6570\u636E\u5B8C\u6574\u6027\u7684\u4E00\u79CD\u5B89\u5168\u534F\u8BAE</p></blockquote><p><img src="https://static.vue-js.com/cb559400-b2ff-11eb-85f6-6fac77c0c9b3.png" alt="img"></p><h2 id="\u4E8C\u3001\u5982\u4F55\u505A" tabindex="-1"><a href="https://vue3js.cn/interview/http/HTTPS.html#%E4%BA%8C%E3%80%81%E5%A6%82%E4%BD%95%E5%81%9A" target="_blank" rel="noreferrer">#</a>\u4E8C\u3001\u5982\u4F55\u505A <a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u505A" aria-hidden="true">#</a></h2><p><code>SSL</code>\u7684\u5B9E\u73B0\u8FD9\u4E9B\u529F\u80FD\u4E3B\u8981\u4F9D\u8D56\u4E8E\u4E09\u79CD\u624B\u6BB5\uFF1A</p><ul><li>\u5BF9\u79F0\u52A0\u5BC6\uFF1A\u91C7\u7528\u534F\u5546\u7684\u5BC6\u94A5\u5BF9\u6570\u636E\u52A0\u5BC6</li><li>\u975E\u5BF9\u79F0\u52A0\u5BC6\uFF1A\u5B9E\u73B0\u8EAB\u4EFD\u8BA4\u8BC1\u548C\u5BC6\u94A5\u534F\u5546</li><li>\u6458\u8981\u7B97\u6CD5\uFF1A\u9A8C\u8BC1\u4FE1\u606F\u7684\u5B8C\u6574\u6027</li><li>\u6570\u5B57\u7B7E\u540D\uFF1A\u8EAB\u4EFD\u9A8C\u8BC1</li></ul><h3 id="\u5BF9\u79F0\u52A0\u5BC6" tabindex="-1"><a href="https://vue3js.cn/interview/http/HTTPS.html#%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86" target="_blank" rel="noreferrer">#</a>\u5BF9\u79F0\u52A0\u5BC6 <a class="header-anchor" href="#\u5BF9\u79F0\u52A0\u5BC6" aria-hidden="true">#</a></h3><p>\u5BF9\u79F0\u52A0\u5BC6\u6307\u7684\u662F\u52A0\u5BC6\u548C\u89E3\u5BC6\u4F7F\u7528\u7684\u79D8\u94A5\u90FD\u662F\u540C\u4E00\u4E2A\uFF0C\u662F\u5BF9\u79F0\u7684\u3002\u53EA\u8981\u4FDD\u8BC1\u4E86\u5BC6\u94A5\u7684\u5B89\u5168\uFF0C\u90A3\u6574\u4E2A\u901A\u4FE1\u8FC7\u7A0B\u5C31\u53EF\u4EE5\u8BF4\u5177\u6709\u4E86\u673A\u5BC6\u6027</p><p><img src="https://static.vue-js.com/e3f040f0-b2ff-11eb-ab90-d9ae814b240d.png" alt="img"></p><h3 id="\u975E\u5BF9\u79F0\u52A0\u5BC6" tabindex="-1"><a href="https://vue3js.cn/interview/http/HTTPS.html#%E9%9D%9E%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86" target="_blank" rel="noreferrer">#</a>\u975E\u5BF9\u79F0\u52A0\u5BC6 <a class="header-anchor" href="#\u975E\u5BF9\u79F0\u52A0\u5BC6" aria-hidden="true">#</a></h3><p>\u975E\u5BF9\u79F0\u52A0\u5BC6\uFF0C\u5B58\u5728\u4E24\u4E2A\u79D8\u94A5\uFF0C\u4E00\u4E2A\u53EB\u516C\u94A5\uFF0C\u4E00\u4E2A\u53EB\u79C1\u94A5\u3002\u4E24\u4E2A\u79D8\u94A5\u662F\u4E0D\u540C\u7684\uFF0C\u516C\u94A5\u53EF\u4EE5\u516C\u5F00\u7ED9\u4EFB\u4F55\u4EBA\u4F7F\u7528\uFF0C\u79C1\u94A5\u5219\u9700\u8981\u4FDD\u5BC6</p><p>\u516C\u94A5\u548C\u79C1\u94A5\u90FD\u53EF\u4EE5\u7528\u6765\u52A0\u5BC6\u89E3\u5BC6\uFF0C\u4F46\u516C\u94A5\u52A0\u5BC6\u540E\u53EA\u80FD\u7528\u79C1\u94A5\u89E3 \u5BC6\uFF0C\u53CD\u8FC7\u6765\uFF0C\u79C1\u94A5\u52A0\u5BC6\u540E\u4E5F\u53EA\u80FD\u7528\u516C\u94A5\u89E3\u5BC6</p><p><img src="https://static.vue-js.com/d9603e60-b2ff-11eb-ab90-d9ae814b240d.png" alt="img"></p><h3 id="\u6DF7\u5408\u52A0\u5BC6" tabindex="-1"><a href="https://vue3js.cn/interview/http/HTTPS.html#%E6%B7%B7%E5%90%88%E5%8A%A0%E5%AF%86" target="_blank" rel="noreferrer">#</a>\u6DF7\u5408\u52A0\u5BC6 <a class="header-anchor" href="#\u6DF7\u5408\u52A0\u5BC6" aria-hidden="true">#</a></h3><p>\u5728<code>HTTPS</code>\u901A\u4FE1\u8FC7\u7A0B\u4E2D\uFF0C\u91C7\u7528\u7684\u662F\u5BF9\u79F0\u52A0\u5BC6+\u975E\u5BF9\u79F0\u52A0\u5BC6\uFF0C\u4E5F\u5C31\u662F\u6DF7\u5408\u52A0\u5BC6</p><p>\u5728\u5BF9\u79F0\u52A0\u5BC6\u4E2D\u8BB2\u5230\uFF0C\u5982\u679C\u80FD\u591F\u4FDD\u8BC1\u4E86\u5BC6\u94A5\u7684\u5B89\u5168\uFF0C\u90A3\u6574\u4E2A\u901A\u4FE1\u8FC7\u7A0B\u5C31\u53EF\u4EE5\u8BF4\u5177\u6709\u4E86\u673A\u5BC6\u6027</p><p>\u800C<code>HTTPS</code>\u91C7\u7528\u975E\u5BF9\u79F0\u52A0\u5BC6\u89E3\u51B3\u79D8\u94A5\u4EA4\u6362\u7684\u95EE\u9898</p><p>\u5177\u4F53\u505A\u6CD5\u662F\u53D1\u9001\u5BC6\u6587\u7684\u4E00\u65B9\u4F7F\u7528\u5BF9\u65B9\u7684\u516C\u94A5\u8FDB\u884C\u52A0\u5BC6\u5904\u7406\u201C\u5BF9\u79F0\u7684\u5BC6\u94A5\u201D\uFF0C\u7136\u540E\u5BF9\u65B9\u7528\u81EA\u5DF1\u7684\u79C1\u94A5\u89E3\u5BC6\u62FF\u5230\u201C\u5BF9\u79F0\u7684\u5BC6\u94A5\u201D</p><p><img src="https://static.vue-js.com/f375f290-b2ff-11eb-85f6-6fac77c0c9b3.png" alt="img"></p><p>\u8FD9\u6837\u53EF\u4EE5\u786E\u4FDD\u4EA4\u6362\u7684\u5BC6\u94A5\u662F\u5B89\u5168\u7684\u524D\u63D0\u4E0B\uFF0C\u4F7F\u7528\u5BF9\u79F0\u52A0\u5BC6\u65B9\u5F0F\u8FDB\u884C\u901A\u4FE1</p><h4 id="\u4E3E\u4E2A\u4F8B\u5B50\uFF1A" tabindex="-1"><a href="https://vue3js.cn/interview/http/HTTPS.html#%E4%B8%BE%E4%B8%AA%E4%BE%8B%E5%AD%90" target="_blank" rel="noreferrer">#</a>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A <a class="header-anchor" href="#\u4E3E\u4E2A\u4F8B\u5B50\uFF1A" aria-hidden="true">#</a></h4><p>\u7F51\u7AD9\u79D8\u5BC6\u4FDD\u7BA1\u79C1\u94A5\uFF0C\u5728\u7F51\u4E0A\u4EFB\u610F\u5206\u53D1\u516C\u94A5\uFF0C\u4F60\u60F3\u8981\u767B\u5F55\u7F51\u7AD9\u53EA\u8981\u7528\u516C\u94A5\u52A0\u5BC6\u5C31\u884C\u4E86\uFF0C\u5BC6\u6587\u53EA\u80FD\u7531\u79C1\u94A5\u6301\u6709\u8005\u624D\u80FD\u89E3\u5BC6\u3002\u800C\u9ED1\u5BA2\u56E0\u4E3A\u6CA1\u6709\u79C1\u94A5\uFF0C\u6240\u4EE5\u5C31\u65E0\u6CD5\u7834\u89E3\u5BC6\u6587</p><p>\u4E0A\u8FF0\u7684\u65B9\u6CD5\u89E3\u51B3\u4E86\u6570\u636E\u52A0\u5BC6\uFF0C\u5728\u7F51\u7EDC\u4F20\u8F93\u8FC7\u7A0B\u4E2D\uFF0C\u6570\u636E\u6709\u53EF\u80FD\u88AB\u7BE1\u6539\uFF0C\u5E76\u4E14\u9ED1\u5BA2\u53EF\u4EE5\u4F2A\u9020\u8EAB\u4EFD\u53D1\u5E03\u516C\u94A5\uFF0C\u5982\u679C\u4F60\u83B7\u53D6\u5230\u5047\u7684\u516C\u94A5\uFF0C\u90A3\u4E48\u6DF7\u5408\u52A0\u5BC6\u4E5F\u5E76\u65E0\u591A\u5927\u7528\u5904\uFF0C\u4F60\u7684\u6570\u636E\u6254\u88AB\u9ED1\u5BA2\u89E3\u51B3</p><p>\u56E0\u6B64\uFF0C\u5728\u4E0A\u8FF0\u52A0\u5BC6\u7684\u57FA\u7840\u4E0A\u4ECD\u9700\u52A0\u4E0A\u5B8C\u6574\u6027\u3001\u8EAB\u4EFD\u9A8C\u8BC1\u7684\u7279\u6027\uFF0C\u6765\u5B9E\u73B0\u771F\u6B63\u7684\u5B89\u5168\uFF0C\u5B9E\u73B0\u8FD9\u4E00\u529F\u80FD\u5219\u662F\u6458\u8981\u7B97\u6CD5</p><h3 id="\u6458\u8981\u7B97\u6CD5" tabindex="-1"><a href="https://vue3js.cn/interview/http/HTTPS.html#%E6%91%98%E8%A6%81%E7%AE%97%E6%B3%95" target="_blank" rel="noreferrer">#</a>\u6458\u8981\u7B97\u6CD5 <a class="header-anchor" href="#\u6458\u8981\u7B97\u6CD5" aria-hidden="true">#</a></h3><p>\u5B9E\u73B0\u5B8C\u6574\u6027\u7684\u624B\u6BB5\u4E3B\u8981\u662F\u6458\u8981\u7B97\u6CD5\uFF0C\u4E5F\u5C31\u662F\u5E38\u8BF4\u7684\u6563\u5217\u51FD\u6570\u3001\u54C8\u5E0C\u51FD\u6570</p><p>\u53EF\u4EE5\u7406\u89E3\u6210\u4E00\u79CD\u7279\u6B8A\u7684\u538B\u7F29\u7B97\u6CD5\uFF0C\u5B83\u80FD\u591F\u628A\u4EFB\u610F\u957F\u5EA6\u7684\u6570\u636E\u201C\u538B\u7F29\u201D\u6210\u56FA\u5B9A\u957F\u5EA6\u3001\u800C\u4E14\u72EC\u4E00\u65E0\u4E8C\u7684\u201C\u6458\u8981\u201D\u5B57\u7B26\u4E32\uFF0C\u5C31\u597D\u50CF\u662F\u7ED9\u8FD9\u6BB5\u6570\u636E\u751F\u6210\u4E86\u4E00\u4E2A\u6570\u5B57\u201C\u6307\u7EB9\u201D</p><p><img src="https://static.vue-js.com/12798da0-b300-11eb-85f6-6fac77c0c9b3.png" alt="img"></p><p>\u6458\u8981\u7B97\u6CD5\u4FDD\u8BC1\u4E86\u201C\u6570\u5B57\u6458\u8981\u201D\u548C\u539F\u6587\u662F\u5B8C\u5168\u7B49\u4EF7\u7684\u3002\u6240\u4EE5\uFF0C\u6211\u4EEC\u53EA\u8981\u5728\u539F\u6587\u540E\u9644\u4E0A\u5B83\u7684\u6458\u8981\uFF0C\u5C31\u80FD\u591F\u4FDD\u8BC1\u6570\u636E\u7684\u5B8C\u6574\u6027</p><p>\u6BD4\u5982\uFF0C\u4F60\u53D1\u4E86\u6761\u6D88\u606F\uFF1A\u201C\u8F6C\u8D26 1000 \u5143\u201D\uFF0C\u7136\u540E\u518D\u52A0\u4E0A\u4E00\u4E2A SHA-2 \u7684\u6458\u8981\u3002\u7F51\u7AD9\u6536\u5230\u540E\u4E5F\u8BA1\u7B97\u4E00\u4E0B\u6D88\u606F\u7684\u6458\u8981\uFF0C\u628A\u8FD9\u4E24\u4EFD\u201C\u6307\u7EB9\u201D\u505A\u4E2A\u5BF9\u6BD4\uFF0C\u5982\u679C\u4E00\u81F4\uFF0C\u5C31\u8BF4\u660E\u6D88\u606F\u662F\u5B8C\u6574\u53EF\u4FE1\u7684\uFF0C\u6CA1\u6709\u88AB\u4FEE\u6539</p><p><img src="https://static.vue-js.com/023790e0-b300-11eb-ab90-d9ae814b240d.png" alt="img"></p><h3 id="\u6570\u5B57\u7B7E\u540D" tabindex="-1"><a href="https://vue3js.cn/interview/http/HTTPS.html#%E6%95%B0%E5%AD%97%E7%AD%BE%E5%90%8D" target="_blank" rel="noreferrer">#</a>\u6570\u5B57\u7B7E\u540D <a class="header-anchor" href="#\u6570\u5B57\u7B7E\u540D" aria-hidden="true">#</a></h3><p>\u6570\u5B57\u7B7E\u540D\u80FD\u786E\u5B9A\u6D88\u606F\u786E\u5B9E\u662F\u7531\u53D1\u9001\u65B9\u7B7E\u540D\u5E76\u53D1\u51FA\u6765\u7684\uFF0C\u56E0\u4E3A\u522B\u4EBA\u5047\u5192\u4E0D\u4E86\u53D1\u9001\u65B9\u7684\u7B7E\u540D</p><p>\u539F\u7406\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u7528\u79C1\u94A5\u52A0\u5BC6\uFF0C\u516C\u94A5\u89E3\u5BC6</p><p>\u7B7E\u540D\u548C\u516C\u94A5\u4E00\u6837\u5B8C\u5168\u516C\u5F00\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u83B7\u53D6\u3002\u4F46\u8FD9\u4E2A\u7B7E\u540D\u53EA\u6709\u7528\u79C1\u94A5\u5BF9\u5E94\u7684\u516C\u94A5\u624D\u80FD\u89E3\u5F00\uFF0C\u62FF\u5230\u6458\u8981\u540E\uFF0C\u518D\u6BD4\u5BF9\u539F\u6587\u9A8C\u8BC1\u5B8C\u6574\u6027\uFF0C\u5C31\u53EF\u4EE5\u50CF\u7B7E\u7F72\u6587\u4EF6\u4E00\u6837\u8BC1\u660E\u6D88\u606F\u786E\u5B9E\u662F\u4F60\u53D1\u7684</p><p><img src="https://static.vue-js.com/21aa6880-b300-11eb-85f6-6fac77c0c9b3.png" alt="img"></p><p>\u548C\u6D88\u606F\u672C\u8EAB\u4E00\u6837\uFF0C\u56E0\u4E3A\u8C01\u90FD\u53EF\u4EE5\u53D1\u5E03\u516C\u94A5\uFF0C\u6211\u4EEC\u8FD8\u7F3A\u5C11\u9632\u6B62\u9ED1\u5BA2\u4F2A\u9020\u516C\u94A5\u7684\u624B\u6BB5\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u600E\u4E48\u5224\u65AD\u8FD9\u4E2A\u516C\u94A5\u5C31\u662F\u4F60\u7684\u516C\u94A5</p><p>\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u4E00\u4E2A\u7B2C\u4E09\u65B9\uFF0C\u5C31\u662F\u8BC1\u4E66\u9A8C\u8BC1\u673A\u6784</p><h3 id="ca\u9A8C\u8BC1\u673A\u6784" tabindex="-1"><a href="https://vue3js.cn/interview/http/HTTPS.html#ca%E9%AA%8C%E8%AF%81%E6%9C%BA%E6%9E%84" target="_blank" rel="noreferrer">#</a>CA\u9A8C\u8BC1\u673A\u6784 <a class="header-anchor" href="#ca\u9A8C\u8BC1\u673A\u6784" aria-hidden="true">#</a></h3><p>\u6570\u5B57\u8BC1\u4E66\u8BA4\u8BC1\u673A\u6784\u5904\u4E8E\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u53CC\u65B9\u90FD\u53EF\u4FE1\u8D56\u7684\u7B2C\u4E09\u65B9\u673A\u6784\u7684\u7ACB\u573A</p><p>CA \u5BF9\u516C\u94A5\u7684\u7B7E\u540D\u8BA4\u8BC1\u8981\u6C42\u5305\u62EC\u5E8F\u5217\u53F7\u3001\u7528\u9014\u3001\u9881\u53D1\u8005\u3001\u6709\u6548\u65F6\u95F4\u7B49\u7B49\uFF0C\u628A\u8FD9\u4E9B\u6253\u6210\u4E00\u4E2A\u5305\u518D\u7B7E\u540D\uFF0C\u5B8C\u6574\u5730\u8BC1\u660E\u516C\u94A5\u5173\u8054\u7684\u5404\u79CD\u4FE1\u606F\uFF0C\u5F62\u6210\u201C\u6570\u5B57\u8BC1\u4E66\u201D</p><p>\u6D41\u7A0B\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://static.vue-js.com/395648a0-b300-11eb-85f6-6fac77c0c9b3.png" alt="img"></p><ul><li>\u670D\u52A1\u5668\u7684\u8FD0\u8425\u4EBA\u5458\u5411\u6570\u5B57\u8BC1\u4E66\u8BA4\u8BC1\u673A\u6784\u63D0\u51FA\u516C\u5F00\u5BC6\u94A5\u7684\u7533\u8BF7</li><li>\u6570\u5B57\u8BC1\u4E66\u8BA4\u8BC1\u673A\u6784\u5728\u5224\u660E\u63D0\u51FA\u7533\u8BF7\u8005\u7684\u8EAB\u4EFD\u4E4B\u540E\uFF0C\u4F1A\u5BF9\u5DF2\u7533\u8BF7\u7684\u516C\u5F00\u5BC6\u94A5\u505A\u6570\u5B57\u7B7E\u540D</li><li>\u7136\u540E\u5206\u914D\u8FD9\u4E2A\u5DF2\u7B7E\u540D\u7684\u516C\u5F00\u5BC6\u94A5\uFF0C\u5E76\u5C06\u8BE5\u516C\u5F00\u5BC6\u94A5\u653E\u5165\u516C\u94A5\u8BC1\u4E66\u540E\u7ED1\u5B9A\u5728\u4E00\u8D77</li><li>\u670D\u52A1\u5668\u4F1A\u5C06\u8FD9\u4EFD\u7531\u6570\u5B57\u8BC1\u4E66\u8BA4\u8BC1\u673A\u6784\u9881\u53D1\u7684\u6570\u5B57\u8BC1\u4E66\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u4EE5\u8FDB\u884C\u975E\u5BF9\u79F0\u52A0\u5BC6\u65B9\u5F0F\u901A\u4FE1</li></ul><p>\u63A5\u5230\u8BC1\u4E66\u7684\u5BA2\u6237\u7AEF\u53EF\u4F7F\u7528\u6570\u5B57\u8BC1\u4E66\u8BA4\u8BC1\u673A\u6784\u7684\u516C\u5F00\u5BC6\u94A5\uFF0C\u5BF9\u90A3\u5F20\u8BC1\u4E66\u4E0A\u7684\u6570\u5B57\u7B7E\u540D\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u4E00\u65E6\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u5219\u8BC1\u660E\uFF1A</p><ul><li>\u8BA4\u8BC1\u670D\u52A1\u5668\u7684\u516C\u5F00\u5BC6\u94A5\u7684\u662F\u771F\u5B9E\u6709\u6548\u7684\u6570\u5B57\u8BC1\u4E66\u8BA4\u8BC1\u673A\u6784</li><li>\u670D\u52A1\u5668\u7684\u516C\u5F00\u5BC6\u94A5\u662F\u503C\u5F97\u4FE1\u8D56\u7684</li></ul><h2 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1"><a href="https://vue3js.cn/interview/http/HTTPS.html#%E4%B8%89%E3%80%81%E6%80%BB%E7%BB%93" target="_blank" rel="noreferrer">#</a>\u4E09\u3001\u603B\u7ED3 <a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>HTTPS</code>\u4E0E<code>HTTP</code>\u867D\u7136\u53EA\u5DEE\u4E00\u4E2A<code>SSL</code>\uFF0C\u4F46\u662F\u901A\u4FE1\u5B89\u5168\u5F97\u5230\u4E86\u5927\u5927\u7684\u4FDD\u969C\uFF0C\u901A\u4FE1\u7684\u56DB\u5927\u7279\u6027\u90FD\u4EE5\u89E3\u51B3\uFF0C\u89E3\u51B3\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><ul><li>\u673A\u5BC6\u6027\uFF1A\u6DF7\u5408\u7B97\u6CD5</li><li>\u5B8C\u6574\u6027\uFF1A\u6458\u8981\u7B97\u6CD5</li><li>\u8EAB\u4EFD\u8BA4\u8BC1\uFF1A\u6570\u5B57\u7B7E\u540D</li><li>\u4E0D\u53EF\u5426\u5B9A\uFF1A\u6570\u5B57\u7B7E\u540D</li></ul><p>\u540C\u65F6\u5F15\u5165\u7B2C\u4E09\u65B9\u8BC1\u4E66\u673A\u6784\uFF0C\u786E\u4FDD\u516C\u5F00\u79D8\u94A5\u7684\u5B89\u5168\u6027</p>',56),c=[l];function p(h,n,d,s,o,f){return a(),t("div",null,c)}const b=e(i,[["render",p]]);export{u as __pageData,b as default};
