<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div id="container" >
	<div class="row">
		<div class="col-sm-4">
			<h3>학생관리</h3>
				<ul id="main_ul_stu">
					<li><a>STUDENT ADD</a></li>
					<li><a>STUDENT LIST</a></li>
					<li><a>STUDENT DETAIL</a></li>
					<li><a>STUDENT DELETE</a></li>
				</ul>
		</div>
		<div class="col-sm-4">
			<h3>성적관리</h3>
				<ul id="main_ul_grade">
					<li><a>GRADE ADD</a></li>
					<li><a>GRADE LIST</a></li>
					<li><a>GRADE DETAIL</a></li>
					<li><a>GRADE DELETE</a></li>
				</ul>
		</div>
		<div class="col-sm-4">
			<h3>게시판관리</h3>
				<ul id="main_ul_board">
					<li><a>BOARD WRITE</a></li>
					<li><a>BOARD LIST</a></li>
					<li><a>BOARD DETAIL</a></li>
					<li><a>BOARD DELETE</a></li>
				</ul>
		</div>
	</div>
</div>
<jsp:include page="../common/footer.jsp"/>
</html>

<script>
	app.main.init();
	app.grade.init();
	app.board.init();
</script>