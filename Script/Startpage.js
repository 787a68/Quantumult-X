/*
Startpage主题使用自动深色模式（保存cookie一次即可）

[rewrite_local]
^https?+:\/\/www\.startpage\.com\/do\/settings$ url script-response-header https://raw.githubusercontent.com/787a68/Quantumult-X/main/Script/Startpage.js

[mitm]
hostname = www.startpage.com

*/

var header = $response.headers;

cookie = header["Set-Cookie"].replace(/%2Fdefault/, "");

header["Set-Cookie"] = cookie;

$done({ headers: header });
