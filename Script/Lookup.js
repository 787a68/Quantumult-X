/*
节点IP信息查询

[general]
geo_location_checker=http://ip-api.com/json/, https://raw.githubusercontent.com/787a68/Quantumult-X/main/Script/Lookup.js

geo_location_checker=http://ip-api.com/json/?lang=zh-CN, https://raw.githubusercontent.com/787a68/Quantumult-X/main/Script/Lookup.js

*/

var body = JSON.parse($response.body);
var title = "桃花源";//12.5个字符
var subtitle = "复行数十步，豁然开朗";//20个字符

if (body.status == "success") {
  var ip = body.query;
  var obj =
    "\nCountry: " + body.country + "\n\n" +
    "Region: " + body.regionName + "\n\n" +
    "City: " + body.city + "\n\n" +
    "TimeZone: " + body.timezone + "\n\n" +
    "IP: " + body.query + "\n\n" +
    "ISP: " + body.isp + "\n\n" +
    "ORG: " + body.org + "\n\n" +
    "BGP: " + body.as;
  var description = check3(obj).replace(/\n\w+?:\s\n/g, "");
  $done({ title, subtitle, ip, description });
} else {
  $done();
}

function check() {
  if (body.city == body.regionName || body.city == body.country) {
    return obj.replace(/City.+?\n\n/, "");
  } else {
    return obj;
  }
}

function check2() {
  if (body.regionName == body.country) {
    return check(obj).replace(/Region.+?\n\n/, "");
  } else {
    return check(obj);
  }
}

function check3() {
  if (body.isp == body.org) {
    return check2(obj).replace(/ISP.+?\n\n/, "");
  } else {
    return check2(obj);
  }
}
