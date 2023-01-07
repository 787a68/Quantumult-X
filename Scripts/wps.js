/*
[rewrite_local]
^https?+:\/\/sg-account\.wps\.com:443\/api\/users\/url script-response-body https://raw.githubusercontent.com/787a68/Quantumult-X/main/Scripts/wps.js

[mitm]
hostname = sg-account.wps.com
*/


var body = {
  result: "ok",
  total_cost: 0,
  privilege: [
    { times: 0, expire_time: 1893427200, spid: "data_recover" },
    { times: 0, expire_time: 1893427200, spid: "ocr" },
    { times: 0, expire_time: 1893427200, spid: "pdf2doc" },
    { times: 0, expire_time: 1893427200, spid: "pdf_merge" },
    { times: 0, expire_time: 1893427200, spid: "pdf_sign" },
    { times: 0, expire_time: 1893427200, spid: "pdf_split" }
  ],
  userid: JSON.parse($response.body).userid,
  wealth: 0,
  level: 1,
  exp: 0,
  vip: {
    memberid: 40,
    expire_time: 1893427200,
    name: "超级会员",
    has_ad: 0,
    enabled: [
      { name: "稻壳会员", expire_time: 1893427200, memberid: 12 },
      { name: "超级会员", expire_time: 1893427200, memberid: 40 },
      { name: "WPS会员", expire_time: 1893427200, memberid: 20 }
    ]
  },
  total_buy: 0
};

$done({ body: JSON.stringify(body) });
