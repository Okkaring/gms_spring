var introUI = {
	login : i=>{
		return '<div id="container">'
				+	'<div id="login_box">'
				+		'<img src="'+i+'/mainimg.jpg"/><br /><br /><br />'
				+		'<span id="login_id"> 아이디:	</span>'
				+		'<input id="login_input" type="text" placeholder="※ID는 숫자 포함 8자 이내"/><br>'
				+		'<span id="login_pass"> 패스워드:	</span>'
				+		'<input type="password"/> <br />'
				+	'</div>'
				+'</div>'
				;
	},
	navbar : ()=>{
		return '<nav class="navbar navbar-inverse">'
				+'<div class="container-fluid">'
				+'<div class="navbar-header">'
				+'<a class="navbar-brand" href="#">BOMBABYCHU</a>'  
				+'</div>'
				    
				+'<ul class="nav navbar-nav" class="dropdown-menu">'
				+'<li class="active"><a id = "navbar"><span class="glyphicon glyphicon-home"></span>&nbsp;Main</a></li>'  
				        
/*				+'<li class="dropdown">'  
				+'<a href="#" class="dropdown-toggle"'  	
				+'data-toggle="dropdown" role="button"'  	
				+'aria-haspopup="true"'  	
				+'aria-expanded="false">회원 관리<span class="caret"></span></a>'
				      	
				+'<ul id="navbar_ul_stu" class="dropdown-menu">'	
				+'<li><a>학생 추가</a></li>'
				+'<li><a>학생 목록</a></li>'
				+'<li><a>학생 조회</a></li>'
				+'<li><a>학생 삭제</a></li>'
				+'</ul>'
				+'</li>'
				      	
				+'<li class="dropdown">'
				+'<a href="#" class="dropdown-toggle"'
				+'data-toggle="dropdown" role="button"'
				+'aria-haspopup="true"'
				+'aria-expanded="false">성적 관리<span class="caret"></span></a>'
				      	
				+'<ul id="navbar_ul_grade" class="dropdown-menu">'	
				+'<li><a>성적 추가</a></li>'
				+'<li><a>성적 목록</a></li>'
				+'<li><a>성적 조회</a></li>'
				+'<li><a>성적 삭제</a></li>'
				+'</ul>'	
				+'</li>'	
				      	
				+'<li class="dropdown">'
				+'<a href="#" class="dropdown-toggle"'
				+'data-toggle="dropdown" role="button"'
				+'aria-haspopup="true"'
				+'aria-expanded="false">게시판 관리<span class="caret"></span></a>'
				      	
				+'<ul id="navbar_ul_board" class="dropdown-menu">'
				+'<li><a>게시판 추가</a></li>'
				+'<li><a>게시판 목록</a></li>'
				+'<li><a>게시판 조회</a></li>'
				+'<li><a>게시판 삭제</a></li>'
				+'</ul>'
				+'</li>'
*/	
				+'<li class="dropdown">'
				+'<a href="#" class="dropdown-toggle"'
				+'data-toggle="dropdown" role="button"'
				+'aria-haspopup="true"'
				+'aria-expanded="false">수 열<span class="caret"></span></a>'
				      	
				+'<ul id="navbar_ul_board" class="dropdown-menu">'
				+'<li><a id="arithBtn">등차수열</a></li>'
				+'<li><a id="switchBtn">스위치수열</a></li>'
				+'<li><a id="diffrenceBtn">계차수열</a></li>'
				+'<li><a id="facBtn">팩토리얼</a></li>'
				+'<li><a id="fiboBtn">피보나치</a></li>'
				+'</ul>'
				+'</li>'
				
				+'<li class="dropdown">'
				+'<a href="#" class="dropdown-toggle"'
				+'data-toggle="dropdown" role="button"'
				+'aria-haspopup="true"'
				+'aria-expanded="false">배 열<span class="caret"></span></a>'
				      	
				+'<ul id="navbar_ul_board" class="dropdown-menu">'
				+'<li><a id="selBtn">선택정렬</a></li>'
				+'<li><a id="bubbleBtn">버블정렬</a></li>'
				+'<li><a id="insertBtn">삽입정렬</a></li>'
				+'<li><a id="rankBtn">석차구하기</a></li>'
				+'<li><a id="binSearchBtn">이분검색</a></li>'
				+'<li><a id="mergeBtn">병합</a></li>'
				+'<li><a id="stackBtn">스택</a></li>'
				+'</ul>'
				+'</li>'
				
				+'<li class="dropdown">'
				+'<a href="#" class="dropdown-toggle"'
				+'data-toggle="dropdown" role="button"'
				+'aria-haspopup="true"'
				+'aria-expanded="false">행 열<span class="caret"></span></a>'
				      	
				+'<ul id="navbar_ul_board" class="dropdown-menu">'
				+'<li><a id="selBtn">기본 5행 5열</a></li>'
				+'<li><a id="bubbleBtn">직각삼각형</a></li>'
				+'<li><a id="insertBtn">지그재그(ㄹ)</a></li>'
				+'<li><a id="rankBtn">다이아몬드</a></li>'
				+'<li><a id="binSearchBtn">모래시계</a></li>'
				+'<li><a id="mergeBtn">오른쪽 빈삼각형</a></li>'
				+'<li><a id="stackBtn">이등변삼각형</a></li>'
				+'<li><a id="stackBtn">90도 회전</a></li>'
				+'<li><a id="stackBtn">달팽이</a></li>'
				+'<li><a id="stackBtn">대각선채우기</a></li>'
				+'<li><a id="stackBtn">마방진</a></li>'
				+'<li><a id="stackBtn">행렬변환</a></li>'
				+'</ul>'
				+'</li>'
				
				+'</ul>'
				+'<span class="navbar_st"> ${user.name} &nbsp;'
				+'<a id="logout">로그아웃</a></span>'
				+'</div>'
				+'</nav>'
				;
	}
};
var compUI={
	div : (x)=>{return $('<div/>',{id:x});},
	image : (x,y)=>{return $('<img/>',{id:x, src:y});},
	input : (x,y)=>{return $('<input/>',{id:x, type:y});},
	h1 : x=>{return $('<h1/>',{id:x});},
	span : x=>{return $('<span/>',{id:x});}
};
var algoUI = {
		series : ()=>{
			return '<div id="content" style="width: 400px; margin:0 auto;margin-top: 100px;">'
				+'<h1>시작값부터 끝값까지 [등차 수열]의 합</h1>'
				+'<span id="start_txt">시작값: &nbsp;&nbsp;</span>'
				+'<br/><span id="end_txt">끝   값:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'
				+'<div id="result_box"></div>';
		},
		sort : ()=>{
			return '<div id="content" style="width: 400px; margin:0 auto; margin-top: 100px;" >'
			+'<h1>[title]</h1>'
			+'<span id="input_txt">숫자를 입력: &nbsp;&nbsp;</span>'
			+'<div id="input_box"></div>'
			+'<br/>'
			+'<div id="result_box"></div>';
		}
};
