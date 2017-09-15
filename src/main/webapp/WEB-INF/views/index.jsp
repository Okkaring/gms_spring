<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>index</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<link rel="stylesheet" href="${path.css}/meta.css" />
	<script src="${path.js}/meta.js"></script>
</head>
<body>
<div id="wrapper">
	<h1>"Hello Ajax@" 한글 테스트 ${serverTime}</h1>
	</div>
</body>

<script>
meta.common.init('${path.ctx}');
</script>
</html>