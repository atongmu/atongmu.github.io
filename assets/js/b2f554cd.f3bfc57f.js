"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{10:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/2023/02/09/php-bing-image","metadata":{"permalink":"/blog/2023/02/09/php-bing-image","source":"@site/blog/2023-02-09-php-bing-image.md","title":"PHP \u83b7\u53d6\u6bcf\u65e5BING\u56fe \u5e76\u4e14\u7f13\u5b58URL\u94fe\u63a5\u5230\u672c\u5730JSON","description":"","date":"2023-02-09T17:00:32.000Z","formattedDate":"2023\u5e742\u67089\u65e5","tags":[{"label":"php","permalink":"/blog/tags/php"}],"readingTime":0.625,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"PHP \u83b7\u53d6\u6bcf\u65e5BING\u56fe \u5e76\u4e14\u7f13\u5b58URL\u94fe\u63a5\u5230\u672c\u5730JSON","date":"2023-02-09T17:00:32.000Z","tags":["php"],"published":true,"hideInList":false,"feature":null,"isTop":false},"nextItem":{"title":"nvm \u5b89\u88c5\u4f7f\u7528\u6559\u7a0b","permalink":"/blog/nvm-an-zhuang-shi-yong-jiao-cheng"}},"content":"```\\n<?php\\n/*\\n    * @author www.liumingye.cn\\n*/\\n$filename = \\"./cache.json\\";\\nif (file_exists($filename) === false) {\\n    file_put_contents($filename, \\"\\");\\n}\\n$handle = fopen($filename, \\"r\\");\\n$contents = fread($handle, filesize($filename));\\nfclose($handle);\\n$contents = json_decode($contents, true);\\n\\nif (filesize($filename) === 0) {\\n    // echo \\"\u83b7\u53d6\\\\r\\\\n\\";\\n    getBingImg();\\n} else {\\n    if ($contents[\'time\'] === date(\\"Ymd\\")) {\\n        // echo \\"\u7f13\u5b58\\\\r\\\\n\\";\\n        Header(\\"Location: \\".$contents[\'url\']);\\n    } else {\\n        // echo \\"\u8fc7\u671f\\\\r\\\\n\\";\\n        getBingImg();\\n    }\\n}\\nfunction getBingImg() {\\n    $str = file_get_contents(\'http://cn.bing.com/HPImageArchive.aspx?idx=0&n=1\');\\n    if (preg_match(\\"/<url>(.+?)<\\\\/url>/ies\\", $str, $matches)) {\\n        $imgurl = \'https://cn.bing.com\' . $matches[1];\\n    }\\n    if ($imgurl) {\\n        global $contents;\\n        if($contents[\'url\'] !== $imgurl){\\n            global $filename;\\n            $data = array(\\n                \\"time\\" => date(\\"Ymd\\") ,\\n                \\"url\\" => $imgurl\\n            );\\n            $data = json_encode($data);\\n            file_put_contents($filename, $data);\\n        }\\n        Header(\\"Location: \\".$imgurl);\\n        exit();\\n    } else {\\n        exit(\'error\');\\n    }\\n}\\n```"},{"id":"/nvm-an-zhuang-shi-yong-jiao-cheng","metadata":{"permalink":"/blog/nvm-an-zhuang-shi-yong-jiao-cheng","source":"@site/blog/nvm-an-zhuang-shi-yong-jiao-cheng.md","title":"nvm \u5b89\u88c5\u4f7f\u7528\u6559\u7a0b","description":"1.\u5b89\u88c5 nvm:","date":"2022-11-15T14:40:22.000Z","formattedDate":"2022\u5e7411\u670815\u65e5","tags":[{"label":"\u5e38\u7528\u5de5\u5177","permalink":"/blog/tags/\u5e38\u7528\u5de5\u5177"}],"readingTime":1.65,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"nvm \u5b89\u88c5\u4f7f\u7528\u6559\u7a0b","date":"2022-11-15T14:40:22.000Z","tags":["\u5e38\u7528\u5de5\u5177"],"published":true,"hideInList":false,"feature":null,"isTop":false},"prevItem":{"title":"PHP \u83b7\u53d6\u6bcf\u65e5BING\u56fe \u5e76\u4e14\u7f13\u5b58URL\u94fe\u63a5\u5230\u672c\u5730JSON","permalink":"/blog/2023/02/09/php-bing-image"},"nextItem":{"title":"Markdown\u8bed\u6cd5","permalink":"/blog/markdown-yu-fa"}},"content":"## 1.\u5b89\u88c5 nvm:\\n[\u4e0b\u8f7dnvm\u538b\u7f29\u5305\u5730\u5740](https://github.com/coreybutler/nvm-windows/releases)\\n\\n## 2.\u914d\u7f6e\u5b89\u88c5\u76ee\u5f55\u4e0b\u4fee\u6539settings.txt\uff0c\u914d\u7f6e\u5b89\u88c5\u76ee\u5f55\u4e0b\u521b\u5efanodejs\u76ee\u5f55\u3002\\n```\\nroot: e:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\nvm\\npath: e:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\nvm\\\\nodejs  ##node \u76ee\u5f55\\narch: 64\\nproxy: none\\nnode_mirror: https://npm.taobao.org/mirrors/node/\\nnpm_mirror: https://npm.taobao.org/mirrors/npm/\\n```\\n\\n## 3.\u547d\u4ee4\\n```\\nnvm\u547d\u4ee4\u884c\u64cd\u4f5c\u547d\u4ee4\\n1,nvm nvm list \u662f\u67e5\u627e\u672c\u7535\u8111\u4e0a\u6240\u6709\u7684node\u7248\u672c\\n \\n- nvm list \u67e5\u770b\u5df2\u7ecf\u5b89\u88c5\u7684\u7248\u672c\\n- nvm list installed \u67e5\u770b\u5df2\u7ecf\u5b89\u88c5\u7684\u7248\u672c\\n- nvm list available \u67e5\u770b\u7f51\u7edc\u53ef\u4ee5\u5b89\u88c5\u7684\u7248\u672c\\n \\n2,nvm install \u5b89\u88c5\u6700\u65b0\u7248\u672cnvm\\n \\n3,nvm use <version> ## \u5207\u6362\u4f7f\u7528\u6307\u5b9a\u7684\u7248\u672cnode\\n \\n4,nvm ls \u5217\u51fa\u6240\u6709\u7248\u672c\\n \\n5,nvm current\u663e\u793a\u5f53\u524d\u7248\u672c\\n \\n6,nvm alias <name> <version> ## \u7ed9\u4e0d\u540c\u7684\u7248\u672c\u53f7\u6dfb\u52a0\u522b\u540d\\n \\n7,nvm unalias <name> ## \u5220\u9664\u5df2\u5b9a\u4e49\u7684\u522b\u540d\\n \\n8,nvm reinstall-packages <version> ## \u5728\u5f53\u524d\u7248\u672cnode\u73af\u5883\u4e0b\uff0c\u91cd\u65b0\u5168\u5c40\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u53f7\u7684npm\u5305\\n \\n9,nvm on \u6253\u5f00nodejs\u63a7\u5236\\n \\n10,nvm off \u5173\u95ednodejs\u63a7\u5236\\n \\n11,nvm proxy \u67e5\u770b\u8bbe\u7f6e\u4e0e\u4ee3\u7406\\n \\n12,nvm node_mirror [url] \u8bbe\u7f6e\u6216\u8005\u67e5\u770bsetting.txt\u4e2d\u7684node_mirror\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\u7684\u9ed8\u8ba4\u662f https://nodejs.org/dist/\\n\u3000\u3000nvm npm_mirror [url] \u8bbe\u7f6e\u6216\u8005\u67e5\u770bsetting.txt\u4e2d\u7684npm_mirror,\u5982\u679c\u4e0d\u8bbe\u7f6e\u7684\u8bdd\u9ed8\u8ba4\u7684\u662f\uff1a https://github.com/npm/npm/archive/.\\n \\n13,nvm uninstall <version> \u5378\u8f7d\u5236\u5b9a\u7684\u7248\u672c\\n \\n14,nvm use [version] [arch] \u5207\u6362\u5236\u5b9a\u7684node\u7248\u672c\u548c\u4f4d\u6570\\n \\n15,nvm root [path] \u8bbe\u7f6e\u548c\u67e5\u770broot\u8def\u5f84\\n \\n16,nvm version \u67e5\u770b\u5f53\u524d\u7684\u7248\u672c\\n```"},{"id":"/markdown-yu-fa","metadata":{"permalink":"/blog/markdown-yu-fa","source":"@site/blog/markdown-yu-fa.md","title":"Markdown\u8bed\u6cd5","description":"\u6807\u9898\uff08atx \u6837\u5f0f\uff09","date":"2022-11-02T12:29:39.000Z","formattedDate":"2022\u5e7411\u67082\u65e5","tags":[{"label":"\u65e5\u5e38\u5de5\u5177","permalink":"/blog/tags/\u65e5\u5e38\u5de5\u5177"}],"readingTime":1.48,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Markdown\u8bed\u6cd5","date":"2022-11-02T12:29:39.000Z","tags":["\u65e5\u5e38\u5de5\u5177"],"published":true,"hideInList":false,"feature":null,"isTop":false},"prevItem":{"title":"nvm \u5b89\u88c5\u4f7f\u7528\u6559\u7a0b","permalink":"/blog/nvm-an-zhuang-shi-yong-jiao-cheng"},"nextItem":{"title":"JS\u6bd4\u8f83\u4e24\u4e2a\u7248\u672c\u53f7\u7684\u5927\u5c0f","permalink":"/blog/2022/11/01/js-version"}},"content":"### \u6807\u9898\uff08atx \u6837\u5f0f\uff09\\n```\\n# h1\\n## h2\\n### h3\\n#### h4\\n##### h5\\n###### h6\\n```\\n\\n### \u6807\u9898\uff08settext \u6837\u5f0f\uff09\\n```\\nHeader 1\\n========\\nHeader 2\\n--------\\n```\\n### \u5757\u5f15\u7528\\n```\\n> This is\\n> a blockquote\\n>\\n> > Nested\\n> > Blockquote\\n-------\\n```\\n\\n### \u65e0\u5e8f\u5217\u8868\\n```\\n* Item 1\\n* Item 2\\n    * item 3a\\n    * item 3b\\n```\\n\\n\u6216\u8005\\n```\\n- Item 1\\n- Item 2\\n----------\\n```\\n\\n\u6216\u8005\\n```\\n+ Item 1\\n+ Item 2\\n```\\n\u6216\u8005\\n```\\n- [ ] Checkbox off\\n- [x] Checkbox on\\n```\\n\\n### \u6709\u5e8f\u5217\u8868\\n```\\n1. Item 1\\n2. Item 2\\n    a. item 3a\\n    b. item 3b\\n```\\n\\n### \u94fe\u63a5\\n```\\n[link](http://google.com)\\n[link][google]\\n[google]: http://google.com.\\n<http://google.com>\\n```\\n\\n### \u91cd\u70b9\\n```\\n~*italic*\\n_italic_\\n\\n**bold**\\n__bold__\\n\\n`inline code`\\n~~struck out~~\\n```\\n\\n\\n### \u8868\\n\\n```\\n| Left column | Center column | Right column |\\n|:------------|:-------------:|-------------:|\\n| Cell 1      | Centered      | $1600        |\\n| Cell 2      | Cell 3        | $12          |\\n```\\n\u7b80\u7ea6\u98ce\u683c\\n\\n```\\nLeft column | Center column | Right column \\n:---:|:---:|:---:\\nCell 1 | Centered | $1600 \\nCell 2 | Cell 3 | $12 \\n```\\n\\n\u56fe\u7247\\n```\\n![GitHub Logo](/images/logo.png)\\n![Alt Text](url)\\n```\\n\\n\u5e26\u94fe\u63a5\u7684\u56fe\u7247\\n```\\n[![GitHub Logo](/images/logo.png)](https://github.com/)\\n\\n[![Alt Text](image_url)](link_url)\\n```\\n\u53c2\u8003\u6b3e\u5f0f\\n```\\n![alt text][/images/logo.png]\\n\\n[logo]: /images/logo.png \\"Logo Title\\"\\n```\\n\\n### \u53cd\u659c\u6760\u8f6c\u4e49\\n\\n| \u4eba\u7269 |\u9003\u8131 | \u63cf\u8ff0 |\\n|:-----|:---------:|-------------:|\\n| \\\\      |      \\\\\\\\      |    \u53cd\u659c\u6760        |\\n|   \\\\`      |      \\\\`      |    \u53cd\u5f15\u53f7    |\\n| *      |      \\\\*      |    \u661f\u53f7        |\\n| _      |      \\\\_      |    \u4e0b\u5212\u7ebf        |\\n| {}      |     \\\\{}      |    \u5927\u62ec\u53f7        |\\n| []      |     \\\\[]     |    \u65b9\u62ec\u53f7        |\\n| ()      |     \\\\()     |    \u62ec\u5f27        |\\n| #      |     \\\\#      |    \u4e95\u53f7        |\\n| +      |     \\\\+      |    \u52a0\u53f7        |\\n| \u2014\u2014    |     \\\\-      |    \u51cf\u53f7\uff08\u8fde\u5b57\u7b26\uff09 |\\n| .      |     \\\\.      |    \u70b9        |\\n| \uff01   |     \\\\!      |    \u611f\u53f9\u53f7        |\\n\\n\\n### \u5220\u9664\u7ebf\u3001\u4e0b\u5212\u7ebf\u3001\u811a\u6ce8\\n```\\n~~\u5220\u9664\u7ebf~~\\n<u>\u5e26\u4e0b\u5212\u7ebf\u6587\u672c</u>\\n[^\u8981\u6ce8\u660e\u7684\u6587\u672c]\\n```\\n\\n## [\u66f4\u591a\u8bed\u6cd5](https://www.cnblogs.com/miki-peng/p/12502985.html)"},{"id":"/2022/11/01/js-version","metadata":{"permalink":"/blog/2022/11/01/js-version","source":"@site/blog/2022-11-01-js-version.md","title":"JS\u6bd4\u8f83\u4e24\u4e2a\u7248\u672c\u53f7\u7684\u5927\u5c0f","description":"","date":"2022-11-01T17:00:32.000Z","formattedDate":"2022\u5e7411\u67081\u65e5","tags":[{"label":"js","permalink":"/blog/tags/js"}],"readingTime":0.71,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"JS\u6bd4\u8f83\u4e24\u4e2a\u7248\u672c\u53f7\u7684\u5927\u5c0f","date":"2022-11-01T17:00:32.000Z","tags":["js"],"published":true,"hideInList":false,"feature":null,"isTop":false},"prevItem":{"title":"Markdown\u8bed\u6cd5","permalink":"/blog/markdown-yu-fa"},"nextItem":{"title":"nginx\u9759\u6001\u9879\u76ee\u670d\u52a1\u5668\u90e8\u7f72","permalink":"/blog/nginx-jing-tai-xiang-mu-fu-wu-qi-bu-shu"}},"content":"```\\n**\\n * \u6bd4\u8f83\u4e24\u4e2a\u7248\u672c\u53f7\u7684\u5927\u5c0f\\n * @param {string} v1\\n * @param {string} v2\\n * @returns {0|1|-1} 0\u8868\u793av1 = v2\uff0c1\u8868\u793av1 > v2\uff0c-1\u8868\u793av1 < v2\\n *\\n * compareVersion(\'1.1.0\', \'1.1.0\');      // => 0\\n * compareVersion(\'1.20.0\', \'1.2.20\');    // => 1\\n * compareVersion(\'v2.0.30\', \'v1.9.10\');  // => 1\\n * compareVersion(\'v1.1.40\', \'v1.2.0\');   // => -1\\n */\\nfunction compareVersion(v1, v2) {\\n  let cpResult;\\n  let i = 0;\\n  const arr1 = v1.replace(/[^0-9.]/, \'\').split(\'.\');\\n  const arr2 = v2.replace(/[^0-9.]/, \'\').split(\'.\');\\n  while (true) {\\n    const s1 = arr1[i];\\n    const s2 = arr2[i++];\\n    if (s1 === undefined || s2 === undefined) {\\n      cpResult = arr1.length - arr2.length;\\n      break;\\n    }\\n    if (s1 === s2) continue;\\n    cpResult = s1 - s2;\\n    break;\\n  }\\n  // eslint-disable-next-line\\n  return cpResult > 0 ? 1 : cpResult === 0 ? 0 : -1;\\n}\\n```"},{"id":"/nginx-jing-tai-xiang-mu-fu-wu-qi-bu-shu","metadata":{"permalink":"/blog/nginx-jing-tai-xiang-mu-fu-wu-qi-bu-shu","source":"@site/blog/nginx-jing-tai-xiang-mu-fu-wu-qi-bu-shu.md","title":"nginx\u9759\u6001\u9879\u76ee\u670d\u52a1\u5668\u90e8\u7f72","description":"","date":"2022-11-01T15:16:22.000Z","formattedDate":"2022\u5e7411\u67081\u65e5","tags":[{"label":"nginx","permalink":"/blog/tags/nginx"}],"readingTime":0.17,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"nginx\u9759\u6001\u9879\u76ee\u670d\u52a1\u5668\u90e8\u7f72","date":"2022-11-01T15:16:22.000Z","tags":["nginx"],"published":true,"hideInList":false,"feature":null,"isTop":false},"prevItem":{"title":"JS\u6bd4\u8f83\u4e24\u4e2a\u7248\u672c\u53f7\u7684\u5927\u5c0f","permalink":"/blog/2022/11/01/js-version"},"nextItem":{"title":"\u5de7\u7528Github","permalink":"/blog/2019/05/29/qiao-yong-github"}},"content":"```\\nlocation ^~/api/ {\\n      add_header \'Access-Control-Allow-Origin\' \'*\';\\n      rewrite ^/api/(.*)$ /manage/$1 break;\\n      proxy_pass http://dpoints.codingfly.site/;\\n      proxy_set_header X-Real-IP $remote_addr;\\n      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\\n    }\\n    location ^~/static/ {\\n      add_header \'Access-Control-Allow-Origin\' \'*\';\\n      rewrite ^/static/(.*)$ /static/$1 break;\\n      proxy_pass http://dpoints.codingfly.site/;\\n    }\\n ```"},{"id":"/2019/05/29/qiao-yong-github","metadata":{"permalink":"/blog/2019/05/29/qiao-yong-github","source":"@site/blog/2019-05-29-qiao-yong-github.md","title":"\u5de7\u7528Github","description":"\u5feb\u6377\u952e","date":"2022-11-01T13:37:56.000Z","formattedDate":"2022\u5e7411\u67081\u65e5","tags":[{"label":"github","permalink":"/blog/tags/github"}],"readingTime":0.44,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"\u5de7\u7528Github","date":"2022-11-01T13:37:56.000Z","tags":["github"],"published":true,"hideInList":false,"feature":null,"isTop":false},"prevItem":{"title":"nginx\u9759\u6001\u9879\u76ee\u670d\u52a1\u5668\u90e8\u7f72","permalink":"/blog/nginx-jing-tai-xiang-mu-fu-wu-qi-bu-shu"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"## \u5feb\u6377\u952e\\n1. \u641c\u7d22 <kbd> S </kbd> \u952e [\u9ad8\u7ea7\u641c\u7d22](https://github.com/search/advanced)\\n2. \u67e5\u770b\u6587\u4ef6 <kbd>T</kbd> \u952e\\n3. \u8df3\u8f6c\u67d0\u4e00\u884c <kbd>L</kbd> \u952e\\n4. \u67e5\u770b\u6539\u52a8\u8bb0\u5f55<kbd>B</kbd> \u952e\\n5. \u3010ctrl + K\u3011 \u547d\u4ee4\u9762\u677f\\n6. \u7f51\u9875\u7248 Vs Code \u4ed3\u5e93\u8be6\u60c5\u9875\u6309\u4e0b\u3010 \u3002\u3011\u952e\\n7. \u7f51\u9875\u8c03\u8bd5 \u3010gitpod.io/#/\u3011\\n\\n### \u56fe\u5e8a\\npicGo\u8f6f\u4ef6\\n\u514d\u8d39cdn\u52a0\u901f\u8bbf\u95ee https://cdn.jsdelivr.net/gh/username/\u4ed3\u5e93\u540d\u79f0@\u5206\u652f/"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"\u6b22\u8fce\u9884\u89c8","date":"2021-08-26T00:00:00.000Z","formattedDate":"2021\u5e748\u670826\u65e5","tags":[],"readingTime":0.1,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"welcome","title":"Welcome"},"prevItem":{"title":"\u5de7\u7528Github","permalink":"/blog/2019/05/29/qiao-yong-github"}},"content":":::success\\n\\n\u6b22\u8fce\u9884\u89c8\\n\\n:::\\n\\n\\n\u8054\u7cfb\u65b9\u5f0f\uff1a\\n- \u90ae\u7bb1\uff1a715636539@163.com\\n- \u7535\u8bdd\uff1a18561869729\uff08\u5fae\u4fe1\u540c\u53f7\uff09"}]}')}}]);