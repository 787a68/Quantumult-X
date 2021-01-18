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

  //校验国家、地区、城市是否相同
  var location =
    body.country == body.regionName //比较国家与地区
      ? body.regionName == body.city //国家=地区，比较地区与城市
        ? city //国家=地区=城市，只显示城市
        : city + region //国家=地区!=城市，显示城市+地区
      : body.country == body.city //国家!=地区，比较国家与城市
        ? region + city //国家!=地区，但国家=城市，显示地区+城市
        : body.city == body.regionName //国家!=地区，国家!=城市，比较城市与地区
          ? city + country //国家!=地区，国家!=城市，但城市=地区，显示城市+国家
          : city + region + country; //都不相同全显示

  var org =
    body.isp == body.org //校验组织（公司）与运营商
      ? "ORG: " + body.org //相同只显示组织
      : "ISP: " + body.isp + "\n\n" + "ORG: " + body.org; //不相同全显示

  var description = (
    "\n" + 
    location +
    "TimeZone: " + body.timezone + "\n\n" +
    "IP: " + body.query + "\n\n" +
    org + "\n\n" +
    "BGP: " + body.as
  )
    .replace(/\n\w+?:\s(?:\n|$)/g, "") //去除没有内容的行
    .replace(/\n$/, ""); //去除最后的换行符号（如果有）

  $done({ title, subtitle, ip, description });
} else $done();
