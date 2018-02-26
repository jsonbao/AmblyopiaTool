第一步：安装SDK 

1、安装 ScanSoft_MeiLing_ChineseMandarinVoice.exe
   安装 speechsdk51.exe

2、设置语音引擎 
设置语音引擎.jpg



第二步：安装语音服务

1、打开WinService文件夹AmblyopiaService.exe.config文件
   修改 <add key="VoicePath" value="C:\VoiceServer\Web\Voices"/>     Voices文件夹路径  //这里VoiceServer文件夹是放在C盘根目录

2、设置Voice文件夹访问权限erveryone 修改权限  

3、双击 C:\VoiceServer\WinService\Install.bat 进行安装即可



第三步：部署站点

站点目录指向此文件夹即可  C:\VoiceServer\Web
.net 2.0环境， 执行权限纯脚本



第四步：测试安装是否成功：
http://localhost:18111/Default.aspx?callback=jsonp1364869548245&s=BE%E6%8E%A5%E5%96%80%E4%BB%80%E6%AE%8B%E5%8F%8B%98%E5%8B%87%E8%8E%B7%E5%BE%97%E4%B8%AD%E5%8D%8E%E6%85%88%E5%96%84%E5%A5%96%240%240%240%230&speed=0&domain=127.0.0.1

端口 18111改成 部署站点端口

结果类似这种代表成功：
jsonp1364869548245({"msg": "f/f569877089c547d81d63853806f66249.mp3", "success": "true" })

在C:\VoiceServer\Web\Voices 查找 f文件夹是否有f569877089c547d81d63853806f66249.mp3 大小不等于2代表成功。



备注：
1、测试成功后，把http://localhost:18111/Default.aspx 外网能访问的地址告诉我即可。

2、由于此产品测试版，没有定时清空Voices文件夹里文件，所以每隔一个月手动清理下。




//--------------------------------------------------插件部署--------------------------------------

步骤
以海南人民政府网站为例，官网地址：http://www.hi.gov.cn/code/html/


1、	将canyou文件夹放到 http://www.hi.gov.cn/站点指向的服务器目录下，
保证http://www.hi.gov.cn/canyou/能够被访问到即可。

2、	添加js，将
   <script type ="text/javascript" >
    function ShowDetail() {
        var url = "?url=" + document.location.href; window.scrollTo(0, 0);
        location_href('/canyou/default.html' + url);
    }
    function location_href(url) { location.href = url }
</script>
放在首页模板区间任意位置即可。一般网站头部和尾部都是模版区。建议放在网站每个页面的“</body>”之前

3、在首页位置添加链接，链接样式如下：
<a title="盲人朋友在线浏览按住shift+1键"  onmousedown="ShowDetail()">
信息无障碍通道</a>

，确保红色加粗的不变。可以使用任何html标签。确保该链接放在页面的易发现位置。

4、	修改canyou/default.html中cysrc="http://192.168.1.199:17116/"  为
   cysrc="http://www.hi.gov.cn/" 

测试

在浏览器中输入地址或通过单击原网站头部无障碍操作条中的链接即可完成对网站的信息无障碍化访问。



备注
修改js\CY-0.1.js完成，代码复制加密混淆后 覆盖CY-1.0.js，再测试




js 解密： http://www.3464.com/Tools/JSEncodeDecode/
解密美化  http://tool.lu/js/


加密
http://www.javascriptobfuscator.com/Javascript-Obfuscator.aspx
http://www.javascriptobfuscator.com/
http://javascript-obfuscator.com/

http://www.jsobfuscate.com/




