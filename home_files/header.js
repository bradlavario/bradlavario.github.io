if (top.location == location) {
document.writeln("\
<style>\
body { margin: 0 0 ; padding: 0; } \
div#reocities_bar { position: relative; top: 0px; left: 0px; background: #111; margin:0 auto; width:100%; height:150px;  } \
div#reocities_bar h1 { position:absolute; top:0px; left:0px; margin: 0px; padding: 0px; background:url(/static/images/logo.gif) no-repeat; width:320px; height:150px; } \
div#reocities_bar h1 a { text-decoration: none; text-indent:-999999px; display:block; height:100%; width:100%; cursor:pointer;    } \
div#reocities_bar ul { margin-top:106px; float:right; height:40px; margin-right:20px;} \
div#reocities_bar ul li { list-style: none; float:left; margin-left:10px; } \
div#reocities_bar ul li a { text-decoration: none; padding:4px 8px; letter-spacing:-1px; text-transform:uppercase; font-weight:bold; font-size:14px; color:#fff; float:left; font-family:'Helvetica Neue',Arial,Helvetica,sans-serif; -moz-border-radius:4px; -webkit-border-radius:4px; } \
div#reocities_bar ul li a:hover, div#reocities_bar ul li a.active { background:#fff; color:#333; } </style>	\
    <div id=\"reocities_bar\" style='clear: both;'> \
        <h1><a href=\"http://www.reocities.com\">Reocities</a></h1> \
        <ul id=\"nav\"> \
	    <li>\
<form name='tag' method='POST' action='/php/tag.php'>\
    <input type='hidden' name='url'>\
    <input type='text' size=20 name='tags'>\
    <input type='submit' value='tag this page!'>\
</form>\
<script type='text/javascript'>\
url = document.location.href;\
if (url.indexOf('?') > 0) {\
	q = url.substring(url.indexOf('?')+1);\
	if (q.substring(0,4) == 'msg=') {\
		alert(unescape(q.substring(4)));\
	}\
}\
document.tag.url.value=document.location.href;\
</script>\
            </li>\
            <li><a target='_top' href=\"/\">Home</a></li> \
            <li><a target='_top' href=\"/neighborhoods/\">Neighborhoods</a></li> \
            <li><a target='_top' href=\"/newhome/makingof.html\">Making Of</a></li> \
        </ul> \
    <div style='clear: both;'></div> \
<div id='banner_div' style='width: 728px; height: 90px; overflow:hidden; position:absolute; right:20px; top:4px; background: #FFF; text-align: right;'>\
</div>\
</div>\
<div style='position:fixed; bottom:0px; width:100%; height:60px; background-color:#000;'>\
</div>\
<script type=\"text/javascript\">\
var gaJsHost = ((\"https:\" == document.location.protocol) ? \"https://ssl.\" : \"http://www.\");\
document.write(unescape(\"%3Cscript src='\" + gaJsHost + \"google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E\"));\
</script>\
<script type=\"text/javascript\">\
try {\
var pageTracker = _gat._getTracker(\"UA-6749498-3\");\
pageTracker._trackPageview();\
} catch(err) {}</script>\
");
}
