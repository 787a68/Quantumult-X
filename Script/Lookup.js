/*
节点IP信息查询

[general]
geo_location_checker=http://ip-api.com/json/, https://raw.githubusercontent.com/787a68/Quantumult-X/main/Script/Lookup.js
geo_location_checker=http://ip-api.com/json/?lang=zh-CN, https://raw.githubusercontent.com/787a68/Quantumult-X/main/Script/Lookup.js

*/

var body = JSON.parse($response.body);
var title = "桃花源";
var subtitle = "复行数十步，豁然开朗";

function check(info) {
  if (body.city == body.regionName || body.city == body.country) {
    var obj = info.replace(/City.+?\n\n/, "");
    return obj;
  } else {
    return (obj = info);
  }
}

function check2(obj) {
  if (body.regionName == body.country) {
    var obj2 = obj.replace(/Region.+?\n\n/, "");
    return obj2;
  } else {
    return (obj2 = obj);
  }
}

if (body.status == "success") {
  var ip = body.query;
  var info =
    "\nCountry: " + body.country + "\n\n" +
    "Region: " + body.regionName + "\n\n" +
    "City: " + body.city + "\n\n" +
    "Timezone: " + body.timezone + "\n\n" +
    "IP: " + body.query + "\n\n" +
    "Organization: " + body.org + "\n\n" +
    "ISP: " + body.isp + "\n\n" +
    "AS: " + body.as;
  var description = check2(check(info)).replace(/\n\w+?:\s\n/g, "");
  $done({ title, subtitle, ip, description });
} else {
  $done();
}
