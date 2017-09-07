<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<c:set var = "ctx" value="<%= application.getContextPath() %>"/>
<c:set var = "img" value="${ctx}/resources/img"/>
<c:set var = "css" value="${ctx}/resources/css"/>
<c:set var = "js" value="${ctx}/resources/js"/>

<!doctype html>
<html lang="ko">
<head>
	<meta charset="UTF-8" />
	<title>common_head</title>
	<link rel="stylesheet" href="${css}/member.css" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="${js}/app.js"></script>
</head>

<body>	
<div id="wrapper">
<%-- <!-- TITLE -->
<header>
 <jsp:include page="navbar.jsp"/> 

<div class="jumbotron text-center">
	<h2>GRADE MANAGEMENT SYSTEM</h2>
</div>
</header> --%>
</div>
</body>
</html>