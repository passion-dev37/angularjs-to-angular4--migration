var globalSettings = {}
globalSettings.configList = [];
var setGlobalConfig = function() {
// if(window.localStorage.getItem("tokenKey") !== null) && typeof window.localStorage.getItem("tokenKey") !== 'undefined')
  globalSettings.configList['tokenKey'] = (window.localStorage.getItem("tokenKey") !== null)?window.localStorage.getItem("tokenKey"):undefined; //  replace with token from authentication ajax call
  globalSettings.configList['userId'] = (window.localStorage.getItem("userId") !== null)?window.localStorage.getItem("userId"):undefined; //  replace with X-UserId from authentication ajax call
  globalSettings.configList['tokenType'] =  (window.localStorage.getItem("tokenType") !== null)?window.localStorage.getItem("tokenType"):undefined; //  replace with type from authentication ajax call default=Bearer
  globalSettings.configList['facebookAppId'] = '936047059768219'; // Facebook Application ID
  globalSettings.configList['GoogleAnalyticsId'] = 'UA-61202681-2'; // Google analytics ID
  globalSettings.configList['apiEndpoint'] = 'http://10.168.1.7:8001'; // Api Endpoint
  globalSettings.configList['authUrl.login'] = 'http://10.168.1.7:8001/heimdall/login'; // heimdall authentication gateway url
  globalSettings.configList['authUrl.logout'] = 'http://10.168.1.7:8001/heimdall/logout'; // heimdall authentication gateway url
  globalSettings.configList['mediaEndpoint'] = 'http://10.168.1.10/unsafe/fit-in'; // media root utl
  globalSettings.configList['defaultImage'] = 'images/default.png'; // default image type
  globalSettings.configList['paypalEndpoint'] = 'https://www.sandbox.paypal.com/cgi-bin/webscr'; // paypal endpoint url
}
globalSettings.get = function (key) {
  if (key in this.configList)
    return this.configList[key];
  else return undefined;
};
globalSettings.set = function (key,value) {
  if (key in this.configList)
    this.configList[key] = value;
};
//console.log(globalSettings);
setGlobalConfig();
