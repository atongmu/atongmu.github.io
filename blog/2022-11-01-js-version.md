---
title: 'JS比较两个版本号的大小'
date: 2022-11-01 17:00:32
tags: [js]
published: true
hideInList: false
feature: 
isTop: false
---

```
**
 * 比较两个版本号的大小
 * @param {string} v1
 * @param {string} v2
 * @returns {0|1|-1} 0表示v1 = v2，1表示v1 > v2，-1表示v1 < v2
 *
 * compareVersion('1.1.0', '1.1.0');      // => 0
 * compareVersion('1.20.0', '1.2.20');    // => 1
 * compareVersion('v2.0.30', 'v1.9.10');  // => 1
 * compareVersion('v1.1.40', 'v1.2.0');   // => -1
 */
function compareVersion(v1, v2) {
  let cpResult;
  let i = 0;
  const arr1 = v1.replace(/[^0-9.]/, '').split('.');
  const arr2 = v2.replace(/[^0-9.]/, '').split('.');
  while (true) {
    const s1 = arr1[i];
    const s2 = arr2[i++];
    if (s1 === undefined || s2 === undefined) {
      cpResult = arr1.length - arr2.length;
      break;
    }
    if (s1 === s2) continue;
    cpResult = s1 - s2;
    break;
  }
  // eslint-disable-next-line
  return cpResult > 0 ? 1 : cpResult === 0 ? 0 : -1;
}
```
