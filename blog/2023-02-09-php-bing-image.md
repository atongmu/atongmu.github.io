---
title: 'PHP 获取每日BING图 并且缓存URL链接到本地JSON'
date: 2023-02-09 17:00:32
tags: [php]
published: true
hideInList: false
feature: 
isTop: false
---

```
<?php
/*
    * @author www.liumingye.cn
*/
$filename = "./cache.json";
if (file_exists($filename) === false) {
    file_put_contents($filename, "");
}
$handle = fopen($filename, "r");
$contents = fread($handle, filesize($filename));
fclose($handle);
$contents = json_decode($contents, true);

if (filesize($filename) === 0) {
    // echo "获取\r\n";
    getBingImg();
} else {
    if ($contents['time'] === date("Ymd")) {
        // echo "缓存\r\n";
        Header("Location: ".$contents['url']);
    } else {
        // echo "过期\r\n";
        getBingImg();
    }
}
function getBingImg() {
    $str = file_get_contents('http://cn.bing.com/HPImageArchive.aspx?idx=0&n=1');
    if (preg_match("/<url>(.+?)<\/url>/ies", $str, $matches)) {
        $imgurl = 'https://cn.bing.com' . $matches[1];
    }
    if ($imgurl) {
        global $contents;
        if($contents['url'] !== $imgurl){
            global $filename;
            $data = array(
                "time" => date("Ymd") ,
                "url" => $imgurl
            );
            $data = json_encode($data);
            file_put_contents($filename, $data);
        }
        Header("Location: ".$imgurl);
        exit();
    } else {
        exit('error');
    }
}
```
