---
title: 'Markdown语法'
date: 2022-11-02 12:29:39
tags: [日常工具]
published: true
hideInList: false
feature: 
isTop: false
---
### 标题（atx 样式）
```
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

### 标题（settext 样式）
```
Header 1
========
Header 2
--------
```
### 块引用
```
> This is
> a blockquote
>
> > Nested
> > Blockquote
-------
```

### 无序列表
```
* Item 1
* Item 2
    * item 3a
    * item 3b
```

或者
```
- Item 1
- Item 2
----------
```

或者
```
+ Item 1
+ Item 2
```
或者
```
- [ ] Checkbox off
- [x] Checkbox on
```

### 有序列表
```
1. Item 1
2. Item 2
    a. item 3a
    b. item 3b
```

### 链接
```
[link](http://google.com)
[link][google]
[google]: http://google.com.
<http://google.com>
```

### 重点
```
~*italic*
_italic_

**bold**
__bold__

`inline code`
~~struck out~~
```


### 表

```
| Left column | Center column | Right column |
|:------------|:-------------:|-------------:|
| Cell 1      | Centered      | $1600        |
| Cell 2      | Cell 3        | $12          |
```
简约风格

```
Left column | Center column | Right column 
:---:|:---:|:---:
Cell 1 | Centered | $1600 
Cell 2 | Cell 3 | $12 
```

图片
```
![GitHub Logo](/images/logo.png)
![Alt Text](url)
```

带链接的图片
```
[![GitHub Logo](/images/logo.png)](https://github.com/)

[![Alt Text](image_url)](link_url)
```
参考款式
```
![alt text][/images/logo.png]

[logo]: /images/logo.png "Logo Title"
```

### 反斜杠转义

| 人物 |逃脱 | 描述 |
|:-----|:---------:|-------------:|
| \      |      \\      |    反斜杠        |
|   \`      |      \`      |    反引号    |
| *      |      \*      |    星号        |
| _      |      \_      |    下划线        |
| {}      |     \{}      |    大括号        |
| []      |     \[]     |    方括号        |
| ()      |     \()     |    括弧        |
| #      |     \#      |    井号        |
| +      |     \+      |    加号        |
| ——    |     \-      |    减号（连字符） |
| .      |     \.      |    点        |
| ！   |     \!      |    感叹号        |


### 删除线、下划线、脚注
```
~~删除线~~
<u>带下划线文本</u>
[^要注明的文本]
```

## [更多语法](https://www.cnblogs.com/miki-peng/p/12502985.html)