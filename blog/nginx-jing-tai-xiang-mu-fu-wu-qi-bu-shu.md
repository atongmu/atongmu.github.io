---
title: 'nginx静态项目服务器部署'
date: 2022-11-01 15:16:22
tags: [nginx]
published: true
hideInList: false
feature: 
isTop: false
---

```
location ^~/api/ {
      add_header 'Access-Control-Allow-Origin' '*';
      rewrite ^/api/(.*)$ /manage/$1 break;
      proxy_pass http://dpoints.codingfly.site/;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    location ^~/static/ {
      add_header 'Access-Control-Allow-Origin' '*';
      rewrite ^/static/(.*)$ /static/$1 break;
      proxy_pass http://dpoints.codingfly.site/;
    }
 ```