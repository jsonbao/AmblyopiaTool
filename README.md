# 网站信息无障碍辅助工具条

### 以海南人民政府网站为例，官网地址：http://www.hi.gov.cn/code/html/
```
1、将canyou文件夹放到 http://www.hi.gov.cn/站点指向的服务器目录下，
保证http://www.hi.gov.cn/canyou/能够被访问到即可。

2、添加js，将
     <script type="text/javascript">
         function ShowDetail() {
             if (window.top.document.getElementById("canyou_toolbar_div")) {
                 return false;
             }
            var url = "?url=" + document.location.href; window.scrollTo(0, 0);
            location_href('canyou/default.html' + url);
        }
        function location_href(url) { location.href = url }
    </script>

  放在首页模板区间任意位置即可。一般网站头部和尾部都是模版区。建议放在网站每个页面的“</body>”之前

3、在首页位置添加链接，链接样式如下：
<a title="盲人朋友在线浏览按住shift+1键"  onmousedown="ShowDetail()">信息无障碍通道</a>。
确保红色加粗的不变。可以使用任何html标签。确保该链接放在页面的易发现位置。

4、修改canyou/default.html中cysrc="http://wza.canyou168.com/"  为   cysrc="http://www.hi.gov.cn/" 

5、部署的域名发过来，进行授权。

```
### 测试

在浏览器中输入地址或通过单击原网站头部无障碍操作条中的链接即可完成对网站的信息无障碍化访问。

## 成功案例
```
广东省网上办事大厅
http://www.gdbs.gov.cn/portal/index.do

深圳市福田区残疾人联合会
http://ftcl.szft.gov.cn/

深圳市罗湖区残疾人联合会
http://www.lhdpf.com/

海南省残疾人联合会 
http://www.hidpf.org.cn/

海南残疾人劳动就业服务中心
http://www.hicjrjy.org/


海南特殊教育信息网
http://www.hktjw.org/


陕西省环保厅
http://113.140.66.226:8111/
```

### 演示--两版演示
```
http://wza.canyou168.com/
http://wza.canyou168.com/pro
```
