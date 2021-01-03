/*
节点IP信息查询

[general]
geo_location_checker=http://ip-api.com/json/?fields=4255259, https://raw.githubusercontent.com/787a68/Quantumult-X/main/Script/Lookup.js

*/

var body = JSON.parse($response.body);
var title = "桃花源";
var subtitle = "复行数十步，豁然开朗。";
var ip = "武陵";
var description =
  "土地平旷，屋舍俨然，有良田、美池、桑竹之属。阡陌交通，鸡犬相闻。其中往来种作，男女衣着，悉如外人。黄发垂髫，并怡然自乐。";

if (body.status == "success") {
  title = body.countryCode + " " + body.city;
  subtitle = body.org;
  ip = body.query;
  description =
    body.country + "\n" + 
    body.regionName + "\n" +
    body.query + "\n" +
    body.isp + "\n" +
    body.as + "\n" +
    body.asname;
} else if (body.status == "fail") {
  title = body.message;
  ip = body.query;
  subtitle = ip;
  description = body.message;
}
$done({ title, subtitle, ip, description });
