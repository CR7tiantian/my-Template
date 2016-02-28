<!DOCTYPE html>
<html>
<head>
	<title>template</title>
	<meta charset="UTF-8">
</head>
<body>
<script type="tetx/template" id="template">
	 <div><%item%></div>
</script>
<div id="test"></div>
<script type="text/javascript">
	(function() {
		var myTpl = function(str,date) {
			var element = document.getElementById(str);
			function template(tpl,data) {
				var reg = /<%([^%>]+)?%>/g;
				var newtpl = tpl.replace(reg,data.name);
				return newtpl;
			}
			return template(element.innerHTML,data);
		}
		var data = {name:"i am DOM"};
		var test = document.getElementById("test");
		test.innerHTML = myTpl("template",data);

	})()
</script>
</body>
</html>
