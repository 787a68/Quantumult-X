/*
京东获取cookie并输出log
修改自https://github.com/NobyDa/Script/blob/master/JD-DailyBonus/JD_DailyBonus.js

[rewrite_local]
^https?+:\/\/api\.m\.jd\.com\/client\.action.+?functionId=signBean url script-request-header https://raw.githubusercontent.com/787a68/Quantumult-X/main/Script/JDCookie.js

[mitm]
hostname = api.m.jd.com

*/

try {
  var CV = $request.headers["Cookie"];
  if (CV.match(/pt_key=.+?;/) && CV.match(/pt_pin=.+?;/)) {
    var CookieValue = CV.match(/pt_key=.+?;/)[0] + CV.match(/pt_pin=.+?;/)[0];
    var CK1 = $prefs.valueForKey("CookieJD");
    var CK2 = $prefs.valueForKey("CookieJD2");
    var AccountOne = CK1 ? CK1.match(/pt_pin=.+?;/) ? CK1.match(/pt_pin=(.+?);/)[1] : null : null;
    var AccountTwo = CK2 ? CK2.match(/pt_pin=.+?;/) ? CK2.match(/pt_pin=(.+?);/)[1] : null : null;
    var UserName = CookieValue.match(/pt_pin=(.+?);/)[1];
    var DecodeName = decodeURIComponent(UserName);
    if (!AccountOne || UserName == AccountOne) {
      var CookieName = " [账号一] ";
      var CookieKey = "CookieJD";
    } else if (!AccountTwo || UserName == AccountTwo) {
      CookieName = " [账号二] ";
      CookieKey = "CookieJD2";
    } else {
      $notify("更新京东Cookie失败", "非历史写入账号 ‼️", '请开启脚本内"DeleteCookie"以清空Cookie ‼️');
      return;
    }
  } else {
    $notify("写入京东Cookie失败", "", "请查看脚本内说明, 登录网页获取 ‼️");
    return;
  }
  const RA = $prefs.valueForKey(CookieKey);
  if (RA == CookieValue) {
    console.log(`\n用户名: ${DecodeName}\n与历史京东${CookieName}Cookie相同, 跳过写入 ⚠️`);
  } else {
    const WT = $prefs.setValueForKey(CookieValue, CookieKey);
    $notify(`用户名: ${DecodeName}`, ``, `${RA?`更新`:`写入`}京东${CookieName}Cookie${WT?`成功 🎉`:`失败 ‼️`}`);
    console.log(CookieValue);
  }
} catch (eor) {
  $prefs.setValueForKey("", "CookieJD");
  $prefs.setValueForKey("", "CookieJD2");
  $notify("写入京东Cookie失败", "", "已尝试清空历史Cookie, 请重试 ⚠️");
  console.log(`\n写入京东Cookie出现错误 ‼️\n${JSON.stringify(eor)}\n\n${eor}\n\n${JSON.stringify($request.headers)}\n`);
} finally {
  $done();
}
