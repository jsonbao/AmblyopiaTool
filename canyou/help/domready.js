function onDOMContentLoaded(onready, config) {
    var userAgent = navigator.userAgent.toLowerCase(); var Browser = { version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1], ie: (/msie/.test(userAgent)) && (!/opera/.test(userAgent)), webkit: userAgent.indexOf("chrome") > -1, ff: userAgent.indexOf("firefox") > -1 }; this.conf = { enableMozDOMReady: true }; if (config) for (var p in config) this.conf[p] = config[p]; var isReady = false; function doReady() { if (isReady) return; isReady = true; onready(); } if (Browser.ie) {
        if (document.documentElement.doScroll && typeof window.frameElement === "undefined") {
            (function () { if (isReady) return; try { document.documentElement.doScroll("left"); } catch (error) { setTimeout(arguments.callee, 0); return; } doReady(); })();
        } else { document.write('<script type="text/javascript" id="contentloadtag" defer="defer" src="javascript:void(0)"><\/script>'); document.getElementById("contentloadtag").onreadystatechange = function () { if (this.readyState == "complete" && document.frames.length == 0) doReady(); } } window.attachEvent('onload', doReady);
    } else if (Browser.webkit && Browser.version < 525) {
        (function () { if (isReady) return; if (/loaded|complete/.test(document.readyState)) { doReady(); } else { setTimeout(arguments.callee, 0); } })(); window.addEventListener('load', doReady, false);
    } else { if (!Browser.ff || Browser.version != 2 || this.conf.enableMozDOMReady) document.addEventListener("DOMContentLoaded", function () { document.removeEventListener("DOMContentLoaded", arguments.callee, false); doReady(); }, false); window.addEventListener('load', doReady, false); }
} onDOMContentLoaded(function () { try { if (parent && parent.CY) parent.CY.page.SystemLoadedCompleteTask(); } catch (e) { } }); function location_href(node) { var href = node.firstChild.getAttribute('href'); location.href = href; } function changeOverStyle(node) { node.style.backgroundColor = "#F6C90A"; }
function changeOutStyle(node) {
    node.style.backgroundColor = "";
}