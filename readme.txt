��һ������װSDK 

1����װ ScanSoft_MeiLing_ChineseMandarinVoice.exe
   ��װ speechsdk51.exe

2�������������� 
������������.jpg



�ڶ�������װ��������

1����WinService�ļ���AmblyopiaService.exe.config�ļ�
   �޸� <add key="VoicePath" value="C:\VoiceServer\Web\Voices"/>     Voices�ļ���·��  //����VoiceServer�ļ����Ƿ���C�̸�Ŀ¼

2������Voice�ļ��з���Ȩ��erveryone �޸�Ȩ��  

3��˫�� C:\VoiceServer\WinService\Install.bat ���а�װ����



������������վ��

վ��Ŀ¼ָ����ļ��м���  C:\VoiceServer\Web
.net 2.0������ ִ��Ȩ�޴��ű�



���Ĳ������԰�װ�Ƿ�ɹ���
http://localhost:18111/Default.aspx?callback=jsonp1364869548245&s=BE%E6%8E%A5%E5%96%80%E4%BB%80%E6%AE%8B%E5%8F%8B%98%E5%8B%87%E8%8E%B7%E5%BE%97%E4%B8%AD%E5%8D%8E%E6%85%88%E5%96%84%E5%A5%96%240%240%240%230&speed=0&domain=127.0.0.1

�˿� 18111�ĳ� ����վ��˿�

����������ִ���ɹ���
jsonp1364869548245({"msg": "f/f569877089c547d81d63853806f66249.mp3", "success": "true" })

��C:\VoiceServer\Web\Voices ���� f�ļ����Ƿ���f569877089c547d81d63853806f66249.mp3 ��С������2����ɹ���



��ע��
1�����Գɹ��󣬰�http://localhost:18111/Default.aspx �����ܷ��ʵĵ�ַ�����Ҽ��ɡ�

2�����ڴ˲�Ʒ���԰棬û�ж�ʱ���Voices�ļ������ļ�������ÿ��һ�����ֶ������¡�




//--------------------------------------------------�������--------------------------------------

����
�Ժ�������������վΪ����������ַ��http://www.hi.gov.cn/code/html/


1��	��canyou�ļ��зŵ� http://www.hi.gov.cn/վ��ָ��ķ�����Ŀ¼�£�
��֤http://www.hi.gov.cn/canyou/�ܹ������ʵ����ɡ�

2��	���js����
   <script type ="text/javascript" >
    function ShowDetail() {
        var url = "?url=" + document.location.href; window.scrollTo(0, 0);
        location_href('/canyou/default.html' + url);
    }
    function location_href(url) { location.href = url }
</script>
������ҳģ����������λ�ü��ɡ�һ����վͷ����β������ģ���������������վÿ��ҳ��ġ�</body>��֮ǰ

3������ҳλ��������ӣ�������ʽ���£�
<a title="ä���������������סshift+1��"  onmousedown="ShowDetail()">
��Ϣ���ϰ�ͨ��</a>

��ȷ����ɫ�ӴֵĲ��䡣����ʹ���κ�html��ǩ��ȷ�������ӷ���ҳ����׷���λ�á�

4��	�޸�canyou/default.html��cysrc="http://192.168.1.199:17116/"  Ϊ
   cysrc="http://www.hi.gov.cn/" 

����

��������������ַ��ͨ������ԭ��վͷ�����ϰ��������е����Ӽ�����ɶ���վ����Ϣ���ϰ������ʡ�



��ע
�޸�js\CY-0.1.js��ɣ����븴�Ƽ��ܻ����� ����CY-1.0.js���ٲ���




js ���ܣ� http://www.3464.com/Tools/JSEncodeDecode/
��������  http://tool.lu/js/


����
http://www.javascriptobfuscator.com/Javascript-Obfuscator.aspx
http://www.javascriptobfuscator.com/
http://javascript-obfuscator.com/

http://www.jsobfuscate.com/




