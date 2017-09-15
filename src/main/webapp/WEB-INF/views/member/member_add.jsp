<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<div style="text-align: center;width: 100%; height: 150px;">
	<h4 style="font-size: 20px;color:red;">${message}</h4></div>
<div id="container">
<img src="${path.img}/mainimg.jpg"/><br />

	<form id="join_form" name="join_form">
		<fieldset>
		<legend id="legend_set">ADD ARTICLE</legend><br />
		
	 	<span id="add_id">ID:</span>
	 	<input id="id" name="id" type="text" placeholder="아이디">
	 	<br>
	  	
	 	<span id="add_pass">Password:</span>
		<input id="pw" name="pw" value="1" type="password" placeholder="비밀번호"><br>
		 
	 	<span id="add_bday">Birth day:</span>
	 	<input id="birthday" name="birthday" type="text" value="2000-05-05"><br>
	 	 
	 	<input type="radio" name="gender" value="male" checked/> Male
	 	<input type="radio" name="gender" value="female" checked/> Female<br />
	 	
	 	<span id="add_email">E-MAIL:</span>
		<input type="email" name="email" value="leegd@test.com" /><input type="submit"><br />
		
		<span id="add_phone">Phone Number:</span>
	 	<input name="phone" type="text" value="010-4410-7879"><br><br/>
		 
	 	<span id="add_name">Name:</span>
	 	<input name="name" type="text" value="이길동" placeholder="이름"><br><br/>
	 	
	 	<h2>MAJOR</h2>
	 	<select name="title">
	 		<option value="computer" selected>컴퓨터공학과</option>
	 		<option value="economics">경제학</option>
	 		<option value="tourism">관광학</option>
	 		<option value="art">순수미술</option>
	 	</select><br />
	 	
	 	<h2>SUBJECT</h2>
	 	 <input type="checkbox" name="subject" value="java" checked/> java <br />
	 	 <input type="checkbox" name="subject" value="C" checked/> C <br />
	 	 <input type="checkbox" name="subject" value="html" checked/> html <br />
	 	 <input type="checkbox" name="subject" value="CSS"/> CSS <br />
	 	 <input type="checkbox" name="subject" value="JavaScript"/> JavaScript <br />
	 	 <input type="checkbox" name="subject" value="sql"/> sql <br />
	 	 <input type="checkbox" name="subject" value="pathon"/> pathon <br /><br />
	 	 
	 	<input id="join_yes-btn" type="submit" value="admit">
	 	<input type="hidden" name="action" value="join" />
	 	<input type="hidden" name="page" value="main" />
	 	<input id="join_no-btn" type="reset" value="cancle">
		</fieldset>
	</form> 
</div>
<script>
app.member.init();
</script>