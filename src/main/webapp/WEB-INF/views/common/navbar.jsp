<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script src="${path.js}/app.js"></script>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">BOMBABYCHU</a>
    </div>
    
    <ul class="nav navbar-nav">
      <li class="active"><a id = "navbar"><span class="glyphicon glyphicon-home"></span>&nbsp;Main</a></li>  
        
      <li class="dropdown">
      	<a href="#" class="dropdown-toggle"
      	data-toggle="dropdown" role="button"
      	aria-haspopup="true"
      	aria-expanded="false">회원 관리<span class="caret"></span></a>
      	
      	<ul id="navbar_ul_stu">
      		<li><a>학생 추가</a></li>
      		<li><a>학생 목록</a></li>
      		<li><a>학생 조회</a></li>
      		<li><a>학생 삭제</a></li>
      	</ul>
      	</li>
      	
        <li class="dropdown">
      	<a href="#" class="dropdown-toggle"
      	data-toggle="dropdown" role="button"
      	aria-haspopup="true"
      	aria-expanded="false">성적 관리<span class="caret"></span></a>
      	
      	<ul id="navbar_ul_grade">
      		<li><a>성적 추가</a></li>
      		<li><a>성적 목록</a></li>
      		<li><a>성적 조회</a></li>
      		<li><a>성적 삭제</a></li>
      	</ul>
      	</li>
      	
      <li class="dropdown">
      	<a href="#" class="dropdown-toggle"
      	data-toggle="dropdown" role="button"
      	aria-haspopup="true"
      	aria-expanded="false">게시판 관리<span class="caret"></span></a>
      	
      	<ul id="navbar_ul_board">
      		<li><a>게시판 추가</a></li>
      		<li><a>게시판 목록</a></li>
      		<li><a>게시판 조회</a></li>
      		<li><a>게시판 삭제</a></li>
      	</ul>
      	</li>
    </ul>
    <span class="navbar_st">${sessionScope.user.name} &nbsp; <a id="logout">로그아웃</a></span>
  </div>
</nav>
<script>
app.navbar.init();
</script>