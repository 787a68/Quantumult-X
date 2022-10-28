/*
[general]
geo_location_checker = http://ip-api.com/json/?fields=33292095&lang=zh-CN, https://raw.githubusercontent.com/787a68/Quantumult-X/main/Scripts/ip-api.js
*/

var body = JSON.parse($response.body);
if ("success" == body.status) {
  var ip = body.query,
  sub = "";
  for (i in body)
    "" !== body[i] && "status" != i && (sub = sub + i + " : " + body[i] + "\n");
    var description =
      "---------------------------------------\n\n" 
      + sub +
      "\n---------------------------------------";
} else
  (ip = "8.8.8.8"),
  (description = "    林尽水源，便得一山，山有小口，仿佛若有光。便舍船，从口入。初极狭，才通人。复行数十步，豁然开朗。土地平旷，屋舍俨然，有良田、美池、桑竹之属。阡陌交通，鸡犬相闻。其中往来种作，男女衣着，悉如外人。黄发垂髫，并怡然自乐。");
$done({
  title: "桃花源",
  subtitle: "复行数十步，豁然开朗。",
  ip,
  description
});