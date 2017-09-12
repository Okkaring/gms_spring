<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- HEADER -->
<!doctype html>
<html lang="ko">
<head>
	<meta charset="UTF-8" />
	<title>member_head</title>
	<link rel="stylesheet" href="${path.css}/member.css" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="${js}/app.js"></script>
</head>

<body>	
<!-- CONTENT -->
<div id="container">
	
	<form id="login_box" name="login_box" >
		<img src ="${path.img}/mainimg.jpg" alt=""><br />
		<span id="login_id_txt">ID</span><br>
		<input type="text" id="login_id" name="id" placeholder="※ID는 숫자 포함 8자 이내"/><br>
		<span id="login_pass_txt">Password</span><br>
		<input id="login_pass" type="password" name="pass" /><br /><br />
		<input id="loginBtn" type="submit" value="LOGIN"/>
<!-- 		<input type="hidden" name="action" value="login" />
		<input type="hidden" name="page" value="main" /> -->
		<input type="reset" value="CANCEL" />
	</form>
	<div style="text-align: center;width: 100%; height: 150px;">
	<h4 style="font-size: 20px;color:red;">${message}</h4></div>
<script>
app.auth.init();
</script>
</div>
</body>
</html>