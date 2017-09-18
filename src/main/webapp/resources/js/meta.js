var meta=meta || {};
meta.common=(function(){
	var init=function(x){
		onCreate();
		meta.session.init(x);
		//alert('session 후 : '+$$('x'));
		meta.index.init();
	};
	var onCreate=function(){
		setContentView();
		};
	var setContentView=function(){};
	return {init : init};
})();
meta.index = (function(){
	var $wrapper,$navbar,$container,ctx,img,js,css;
	var init = function(){
		onCreate();
		//meta.ui.init();
		};
   var onCreate=function(){
	   setContentView();
	   $('#btn').on('click',function(){
		   //alert('버튼 클릭');
		   $('#container').empty();
		   //meta.auth.init();
		   meta.ui.navbar();
		   meta.navbar.init();
		   meta.ui.arithmetic();
	   });
	   };
   var setContentView=function(){
		  $container=$('#container');
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
meta.algo={
	arithmetic : function(s,e){
		var start=s*1,end=e*1,sum=0;
		for(var i=start;i<=end;i++){
			sum+=i;
		};
		return sum;
	},
	switchSeries : function(s,e){
		var i=s*1,j=0,sw=0,e=e*1;
		do {
		i=i+1;
		if(sw==0) {
			j=j+i;
			sw=1;
		}else {
			j=j-i;
			sw=0;
		}
		}while(i<e);
		return j;
	},
	geoSeries : function(s,e){
	}
};
meta.auth=(function(){
	var $wrapper,ctx,img,js,css;
	var init=function(){
		onCreate();
		};
	var onCreate=function(){
		setContentView();
		};
	var setContentView=function(){
		$wrapper=$('#wrapper');
		img=$$('i');
		loginView();
		};
	var loginView=function(){
		var ui=	'<div id="wrapper">'
				+	'<div id="login_box">'
				+		'<img src="'+img+'/mainimg.jpg"/><br /><br /><br />'
				+		'<span id="login_id">아이디:	</span>'
				+		'<input id="login_input" type="text" placeholder="※ID는 숫자 포함 8자 이내"/><br>'
				+		'<span >패스워드:	</span>'
				+		'<input id="login_pass" type="password"/> <br />'
				+	'</div>'
				+'</d0iv>';
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
				
			}
		));
		};
	var joinView=function(){};
	return{init:init};
})();
meta.navbar=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
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
	    $('#arithBtn').on('click',function(){
	    	alert('등차수열 클릭');
		    $('#container').empty();
		    meta.ui.arithmetic();
		    $('#result_btn').on('click',function(){
			    $('#result_box').text('결과: '+ meta.algo.arithmetic(
					   					$('#start_box').val(),
					   					$('#end_box').val()
					   					));
		   });
	   });
	   $('#switchBtn').on('click',function(){
		   alert('스위치수열 클릭');
		   $('#container').empty();
		  meta.ui.switchSeries();
		  $('#result_btn').on('click',function(){
			  $('#result_box').text('결과: '+meta.algo.switchSeries(
					  					$('#start_box').val(),
					  					$('#end_box').val()
					  					));
		  });
	   });
	   $('#geoBtn').on('click',function(){
		   alert('등비수열 클릭');
		   $('#container').empty();
		  meta.ui.geoSeries();
		  $('#result_btn').on('click',function(){
			  $('#result_box').text('결과: '+meta.algo.geoSeries(
					  					$('#start_box').val(),
					  					$('#end_box').val()
					  					));
		  });
	   });
	};
	var setContentView=function(){
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
meta.ui=(function(){
	var $wrapper,ctx,img,js,css;
	var init=function(){
		  $wrapper=$('#wrapper');
		  ctx=$$('x');
		  img=$$('i');
	};
	var navbar = function(){
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
				    +'<li><a id="geoBtn">등비 수열</a></li>'
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
	
	var arithmetic=function(){
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
	var switchSeries = function(){
		var content = '<div id="content">'
				+'<h1>시작값부터 끝값까지 [스위치 수열]의 합</h1>'
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
	var geoSeries = function(){
		var content = '<div id="content">'
				+'<h1>시작값부터 끝값까지 [등비 수열]의 합</h1>'
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
		switchSeries : switchSeries,
		geoSeries : geoSeries,
		navbar : navbar
		};
})();
meta.comp={
		input:(json) => {
			return $('<input/>',json);
		}
};
	

meta.session=
	{
	 init : function(x){
			sessionStorage.setItem('x',x);
			sessionStorage.setItem('j',x + '/resources/js');
			sessionStorage.setItem('i',x + '/resources/img');
			sessionStorage.setItem('c',x + '/resources/css');
	 	},
	getPath : function(x){
			return sessionStorage.getItem(x);
		}
	};
var $$ = function(x){return meta.session.getPath(x);};

