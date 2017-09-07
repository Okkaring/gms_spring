<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!-- HEADER -->
<!doctype html>
<html lang="ko">
<head>
	<meta charset="UTF-8" />
	<title>member_head</title>
	<link rel="stylesheet" href="${css}member.css" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>	
<div id="wrapper">

<!-- TITLE -->
<header>
<h1 id="title"><a href="<%=request.getContextPath() %>/index.jsp">WRONG PASSWORD</a></h1>
<hr id="title_line">
</header>
</div>


<!-- CONTENT -->
<div id="container">
	<a href="${ctx}/WEB_INF/common/main.jsp"> 메인 이동 </a>
	<form id="Login_box" action="${ctx}/common.do" method="get">
		<img src="${ctx}/resources/img/mainimg.jpg"/><br /><br />
		<span id="login_id">ID</span><input type="text" name="id" value="bomb" placeholder="※ID는 숫자 포함 8자 이내"/><br>
		<span id="login_pass">Password</span><input type="password" name="pw" value="1" /><br /><br />
		<input type="submit" value="LOGIN" />
		<input type="reset" value="CANCEL" />
		<input type="hidden" name="action" value="login" />
		<input type="hidden" name="page" value="main" />
	</form>
	</div>

<!-- FOOTER -->
<footer>
	<div>
	  <p>Posted by: LEE JUYEON</p>
	  <p>Contact information: <a href="mailto:okkaring@gmail.com">okkaring@gmail.com</a></p>
	  <a href="util/jdbc_test.jsp">DB 연결 테스트</a>
	  <a href="util/update_email.jsp">email update</a>

	</div>
</footer>
</body>
</html>