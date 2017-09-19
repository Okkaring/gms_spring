var meta = meta || {};
meta.common = (()=>{
	var init = x=>{
		onCreate();
		meta.session.init(x);
		meta.index.init();
	};
	var onCreate = ()=>{
		setContentView();
		};
	var setContentView = ()=>{};
	return {init : init};
})();
meta.index = (()=>{
	var $wrapper, $navbar, $container, ctx, img, js, css, algo;
	var init = ()=>{
		onCreate();
		js=$$('j');
		algo=js+'/algo.js';
		};
	var onCreate = ()=>{
		setContentView();
		$('#btn').on('click',()=>{
			$('#container').empty();
		    //meta.auth.init();
		    meta.ui.navbar();
		    meta.navbar.init();
		    meta.ui.arithmetic();
	    $('#result_btn').click(()=>{
	    	$.getScript(algo,(x1,x2)=>{
	    		$('#result_box').text(
	    				'결과: '+ series.arithmetic(
	   					$('#start_box').val(),
	   					$('#end_box').val()
	   					));
	    		});
	    	});
	    });
};
   var setContentView = ()=>{
	   $container = $('#container');
	   img=$$('i');
	   var $image = $('<img/>',
			   {
		   id:'loading',
		   src:img+'/loading.gif'
		   }
	   );
	   $container.append($image);
	   var $btn=$('<input/>',
			   {
		   id :'btn',
		   type : 'button',
		   value :'버어튼'
			   });
	   $container.append($btn);
	   };
	return {init:init};
})();
meta.auth=(()=>{
	var $wrapper,ctx,img,js,css;
	var init = ()=>{
		onCreate();
		};
	var onCreate = ()=>{
		setContentView();
		};
	var setContentView = ()=>{
		$wrapper=$('#wrapper');
		img=$$('i');
		loginView();
		};
	var loginView = ()=>{
		var ui=	'<div id="wrapper">'
				+	'<div id="login_box">'
				+		'<img src="'+img+'/mainimg.jpg"/><br /><br /><br />'
				+		'<span id="login_id">아이디:	</span>'
				+		'<input id="login_input" type="text" placeholder="※ID는 숫자 포함 8자 이내"/><br>'
				+		'<span >패스워드:	</span>'
				+		'<input id="login_pass" type="password"/> <br />'
				+	'</div>'
				+'</div>';
		$wrapper.append(ui);
		$('#login_input').after(meta.comp.input(
				{
					type :'button',
					id : 'login_button',
					value : '로그인'
				}
				));
		$('#login_pass').after(meta.comp.input(
				{
					type : 'button',
					id : 'cancel_btn',
					value : '취소'
				}));
		};
	var joinView = () => {};
	return{init:init};
})();
meta.navbar = (()=>{
	var algo,js;
	var init = ()=>{
		onCreate();
		js = $$('j');
		algo = js+'/algo.js';
		};
	var onCreate = ()=>{
		setContentView();
		$('.dropdown-menu a').eq(0).on('click',function(){
			app.controller.moveTo('member','member_add');
		});
		$('.dropdown-menu a').eq(1).on('click',function(){
			app.member.list('1');
		});
		$('.dropdown-menu a').eq(2).on('click',function(){
			app.controller.detailStudent(prompt('조회ID'));
		});
		$('.dropdown-menu a').eq(3).on('click',function(){
			app.controller.moveTo('member','member_delete');
		});
		$('.dropdown-menu a').eq(4).on('click',function(){
			app.controller.moveTo('grade','grade_add');
		});
		$('.dropdown-menu a').eq(5).on('click',function(){
			app.controller.moveTo('grade','grade_list');
		});
		$('.dropdown-menu a').eq(6).on('click',function(){
			app.controller.moveTo('grade','grade_detail');
		});
		$('.dropdown-menu a').eq(7).on('click',function(){
			app.controller.moveTo('grade','grade_delete');
		});
		$('.dropdown-menu a').eq(8).on('click',function(){
			app.controller.moveTo('board','board_write');
		});
		$('.dropdown-menu a').eq(9).on('click',function(){
			app.controller.moveTo('board','board_list');
		});
		$('.dropdown-menu a').eq(10).on('click',function(){
			app.controller.moveTo('board','board_detail');
		});
		$('.dropdown-menu a').eq(11).on('click',function(){
			app.controller.moveTo('board','board_delete');
		});
		$('#arithBtn').click(() => {
			alert('등차수열 클릭');
			$('#container').empty();
			meta.ui.arithmetic();
			$('#result_btn').click(() => {
				$.getScript(algo,(x1,x2)=>{
					$('#result_box').text(
							'결과: '+ series.arithmetic(
									$('#start_box').val(),
									$('#end_box').val()
									));
					});
				});
			});
		$('#switchBtn').click(() => {
			alert('스위치수열 클릭');
			$('#container').empty();
			meta.ui.arithmetic();
			$('h1').html('1~100 합: [스위치 수열]');
			$('#start_box').val('1');
			$('#end_box').val('20');
			$('#start_box,#end_box').removeAttr('placeholder');
			$('#start_box, #end_box').attr('readonly', true);
			
			$('#result_btn').click(()=>{
				$.getScript(algo,()=>{
					$('#result_box').text(
							'결과: ' + series.switchSeries());
					});
				});
			});
		$('#diffrenceBtn').click(()=>{
			alert('계차수열 클릭');
			$('#container').empty();
			meta.ui.arithmetic();
			$('h1').html('1~10 합 :[계차수열]');
			$('#start_box').val('1').attr('readonly','true');
			$('#end_box').attr('placeholder','수열의 끝 항 입력 : ');
			$('#result_btn').click(()=>{
				$.getScript(algo,(x1)=>{
					$('#result_box').text(
							'결과: ' + series.diffrenceSeries(
									$('#end_box').val()
									));
					});
				});
			});
		$('#facBtn').click(()=>{
			alert('팩토리얼 클릭');
			$('#container').empty();
			meta.ui.arithmetic();
			$('h1').html('1~10 합 :[팩토리얼]');
			$('#start_box').val('1').attr('readonly','true');
			$('#end_box').val('10').attr('readonly','true');
			$('#result_btn').click(()=>{
				$.getScript(algo,()=>{
					$('#result_box').text('결과: ' +series.factorial());
					});
				});
				
			});
		$('#fiboBtn').click(()=>{
			alert('피보나치 클릭');
			$('#container').empty();
			meta.ui.arithmetic();
			$('h1').html('1~20 합 :[피보나치]');
			$('#start_box').attr('placeholder','수열의 첫 항 입력 : ');
			$('#end_box').val('20').attr('readonly','true');
			$('#result_btn').click(()=>{
				$.getScript(algo,(x1)=>{
					$('#result_box').text(
							'결과: ' + series.fibonacci(
									$('#start_box').val()
									));
					});
				});
			});
		};
	var setContentView = ()=>{
		var $u1 = $("#navbar_ul_stu");
		var $u2 = $("#navbar_ul_grade");
		var $u3 = $("#navbar_ul_board");
		var $logout = $("#logout");
		
		$u1.addClass("dropdown-menu");
		$u2.addClass("dropdown-menu");
		$u3.addClass("dropdown-menu");
		};
	return {
	init : init
	};
})();
meta.ui = (()=>{
	var $wrapper, ctx, img, js, css;
	var init = ()=>{
		$wrapper = $('#wrapper');
		ctx = $$('x');
		img = $$('i');
		};
	var navbar = ()=>{
		$('#navbar').html(
				'<nav class="navbar navbar-inverse">'
				+'<div class="container-fluid">'
				+'<div class="navbar-header">'
				+'<a class="navbar-brand" href="#">BOMBABYCHU</a>'  
				+'</div>'
				    
				+'<ul class="nav navbar-nav" class="dropdown-menu">'
				+'<li class="active"><a id = "navbar"><span class="glyphicon glyphicon-home"></span>&nbsp;Main</a></li>'  
				        
				+'<li class="dropdown">'  
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
				
				+'</ul>'
				+'<span class="navbar_st"> ${user.name} &nbsp; <a id="logout">로그아웃</a></span>'
				+'</div>'
				+'</nav>'
		);
	};
	var arithmetic = ()=>{
		var content = '<div id="content">'
				+'<h1>시작값부터 끝값까지 [등차 수열]의 합</h1>'
				+'<span id="start_txt">시작값: &nbsp;&nbsp;</span>'
				+'<br/><span id="end_txt">끝   값:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'
				+'<div id="result_box">'
				;
		$('#container').append(content);
		$('#start_txt').after(meta.comp.input(
				{
					type:'text',
					id: 'start_box',
					placeholder : '시작값'
				}
			));
		$('#end_txt').after(meta.comp.input(
				{
					type:'text',
					id: 'end_box',
					placeholder : '끝  값'
				}
			));
		$('#result_box').before(meta.comp.input(
				{
					type:'button',
					id: 'result_btn',
					value : '결과보기'
				}
			));
	};
	return {
		init : init,
		arithmetic : arithmetic,
		navbar : navbar
		};
})();
meta.comp={
		input:(json)=>{
			return $('<input/>',json);
			}
};
meta.session={
	 init : x => {
			sessionStorage.setItem('x',x);
			sessionStorage.setItem('j',x + '/resources/js');
			sessionStorage.setItem('i',x + '/resources/img');
			sessionStorage.setItem('c',x + '/resources/css');
	 	},
	getPath : x => {
			return sessionStorage.getItem(x);
		}
};
var $$ = x => {return meta.session.getPath(x);};
