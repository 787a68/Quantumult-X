/*
[general]
geo_location_checker = http://ip-api.com/json/?lang=zh-CN&fields=33242943, https://raw.githubusercontent.com/787a68/Quantumult-X/Scripts/GeoIP.js
*/

const body = JSON.parse($response.body);
const ip = body.query;
const sub = Object.entries(body).map(([key, value]) => key + " : " + value).join("\n");
const description = `
---------------------------------------

${sub}

---------------------------------------
`;

$done({
  title: "桃花源",
  subtitle: "复行数十步，豁然开朗。",
  ip,
  description,
});
