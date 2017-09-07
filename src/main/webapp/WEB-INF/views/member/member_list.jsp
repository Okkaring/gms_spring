<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div id="container">

 <div class="col-lg-6" style = "width: 500px; margin=0 auto;">
    <div class="input-group">
   
      <input id="search" name="search" type="text" class="form-control" placeholder="Search for...">
      <span class="input-group-btn">
        <button class="btn btn-default" id=search_btn onclick="findByName()" type="button">SEARCH!</button>
      </span>
    </div><!-- /input-group -->
  </div><!-- /.col-lg-6 -->

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
	<c:forEach var = "i" items = "${requestScope.list}" >
		<tr>
		<td> ${i.num}</td>
		<td> ${i.id} </td>
		<td> ${i.ssn} </td>
		<td> <a onclick="detailStudent('${i.id}')">${i.name}</a></td>
		<td> ${i.phone} </td>
		<td> ${i.email} </td>
		<td> ${i.title}  </td>
		<td> ${i.regdate} </td>
		<td>
		<a onclick = "updateStudent('${i.id}')">수정</a>
		/
		<a onclick = "deleteStudent('${i.id}')">삭제 </a>
		</td>
	</tr>
	</c:forEach>
	

</table>
	<nav aria-label="Page navigation" style="width:500;margin:0 auto;">
	  <ul class="pagination">
	  <c:if test="${requestScope.prevBlock gt 0}">
	   <li><a onclick="list('member','member_list','1')"><span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span></a></li>
	   
	    <li>
	      <a aria-label="Previous" onclick="list('member','member_list','${requestScope.startPage - 1}')">
	        <span aria-hidden="true">&laquo;</span>
	      </a>
	    </li>
	    </c:if>
	    <c:forEach varStatus="i" begin="${requestScope.startPage }" end="${requestScope.endPage }" step="1">
			<c:choose>
				<c:when test="${i.index eq requestScope.pageNumber}">
		    		<li class="active"><a href="#">${i.index}</a></li>
				</c:when>
				<c:otherwise >
					<li><a href="#" onclick="list('member','member_list','${i.index}')">${i.index}</a></li>
				</c:otherwise>
			</c:choose>
	    </c:forEach>
	    <c:if test="${requestScope.nextBlock le requestScope.theNumberOfPages }">
		    <li>
		      <a aria-label="Next" onclick="list('member','member_list','${requestScope.endPage + 1}')">
		        <span aria-hidden="true">&raquo;</span>
		      </a>
		    </li>
		    <li><a onclick="list('member','member_list','${requestScope.theNumberOfPages}')"><span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span></a></li>
	    </c:if>
	  </ul>
	</nav>
</div>











