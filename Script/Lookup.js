/*
节点IP信息查询

[general]
geo_location_checker=http://ip-api.com/json/, https://raw.githubusercontent.com/787a68/Quantumult-X/main/Script/Lookup.js

geo_location_checker=http://ip-api.com/json/?lang=zh-CN, https://raw.githubusercontent.com/787a68/Quantumult-X/main/Script/Lookup.js

*/

var body = JSON.parse($response.body);
var title = "桃花源"; //12.5个字符
var subtitle = "复行数十步，豁然开朗"; //20个字符

if (body.status == "success") {
  var ip = body.query;
  var city = "City: " + body.city + "\n\n";
  var region = "Region: " + body.regionName + "\n\n";
  var country = "Country: " + body.country + "\n\n";

  var location =
    body.country == body.regionName
      ? body.regionName == body.city
        ? city
        : city + region
      : body.country == body.city
        ? region + city
        : body.city == body.regionName
          ? city + country
          : city + region + country;

  var org =
    body.isp == body.org
      ? "ORG: " + body.org
      : "ISP: " + body.isp + "\n\n" + "ORG: " + body.org;

  var description = (
    "\n" +
    location +
    "TimeZone: " + body.timezone + "\n\n" +
    "IP: " + body.query + "\n\n" +
    org + "\n\n" +
    "BGP: " + body.as)
    .replace(/\n\w+?:\s(?:\n|$)/g, "")
    .replace(/\n$/, "");

  $done({ title, subtitle, ip, description });
} else $done();
