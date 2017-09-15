<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<div id="container">
<div class="col-lg-6" style = "width: 500px; margin=0 auto;">
	<div class="input-group">
	<input id="search" name="search" type="text" class="form-control" placeholder="Search for...">
		<span class="input-group-btn">
			<button class="btn btn-default" id=search_btn onclick="app.controller.searchStudent()" type="submit">SEARCH!</button>
		</span>
	</div><!-- /input-group -->
</div><!-- /.col-lg-6 -->
<h1>회원 수 : ${count}</h1>
<div style = "height: 40px;"></div>
<table id="member_list_tab">
	<tr>
		<th> N° </th>
		<th> ID </th>
		<th> 생년월일 </th>
		<th> 이름 </th>
		<th> PHONE </th>
		<th> @EMAIL </th>
		<th> 수강과목 </th>
		<th> 등록일 </th>
		<th> 수정/삭제 </th>
	</tr>
	<c:forEach var = "i" items = "${list}" >
		<tr>
		<td><fmt:formatNumber value="${i.num}" pattern="." /></td>
		<td> ${i.id} </td>
		<td> ${i.ssn} </td>
		<td> <a onclick="app.controller.detailStudent('${i.id}')">${i.name}</a></td>
		<td> ${i.phone} </td>
		<td> ${i.email} </td>
		<td> ${i.title}  </td>
		<td> ${i.regdate} </td>
		<td>
		<a onclick = "updateStudent('${i.id}')">수정</a>
		/
		<a onclick = "app.controller.deleteStudent('${i.id}')">삭제 </a>
		</td>
	</tr>
	</c:forEach>
	

</table>
	<nav aria-label="Page navigation" style="width:500;margin:0 auto;">
	  <ul class="pagination">
	  <c:if test="${prevBlock gt 0}">
	   <li><a onclick="app.member.list('1')"><span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span></a></li>
	   
	    <li>
	      <a aria-label="Previous" onclick="app.member.list('${startPage - 1}')">
	        <span aria-hidden="true">&laquo;</span>
	      </a>
	    </li>
	    </c:if>
	    <c:forEach varStatus="i" begin="${startPage}" end="${endPage}" step="1">
			<c:choose>
				<c:when test="${i.index eq pageNumber}">
		    		<li class="active"><a href="#">${i.index}</a></li>
				</c:when>
				<c:otherwise >
					<li><a href="#" onclick="app.member.list('${i.index}')">${i.index}</a></li>
				</c:otherwise>
			</c:choose>
	    </c:forEach>
	    <c:if test="${nextBlock le theNumberOfPages }">
		    <li>
		      <a aria-label="Next" onclick="app.member.list('${endPage + 1}')">
		        <span aria-hidden="true">&raquo;</span>
		      </a>
		    </li>
		    <li><a onclick="app.member.list('${theNumberOfPages}')"><span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span></a></li>
	    </c:if>
	  </ul>
	</nav>
</div>