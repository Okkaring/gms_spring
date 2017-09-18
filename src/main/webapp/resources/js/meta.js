var meta=meta || {};
meta.common=(function(){
	var init=function(x){
		onCreate();
		meta.session.init(x);
		alert('session 후 : '+$$('x'));
		meta.index.init();
	};
	var onCreate=function(){setContentView();};
	var setContentView=function(){};
	return {init : init};
})();
meta.index = (function(){
	var $wrapper,ctx,img;
	var init = function(){onCreate();};
	   var onCreate=function(){
		   setContentView();
		   $('#btn').on('click',function(){
			   alert('버튼 클릭');
			   $wrapper.empty();
			   //meta.auth.init();
			   meta.algo.arithmetic();
		   });
	   };
	   var setContentView=function(){
		  $wrapper=$('#wrapper');
		  ctx=$$('x');
		  img=$$('i');
	      var $image = $('<img/>',
	         {
	            id:'loading',
	            src:img+'/loading.gif'
	         }
	      );
	      $wrapper.append($image);
	     
	      var $btn = $('<input/>',
	    		  {
	    	  		id :'btn',
	    	  		type : 'button',
	    	  		value :'버튼3'
	      		});
	      $wrapper.append($btn);
	   };
	   return {init:init};
	})();
meta.algo={
	arithmetic : function(){
	var start,end;
	$wrapper=$('#wrapper');
	var ui = '<div id="wrapper">'
		+'<h1>시작값부터 끝값까지 등차수열의 합</h1>'
		+'<span id="start_txt">시작값: &nbsp;&nbsp;</span>'
		+'<br/><span id="end_txt">끝   값:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'
		;
	
	$wrapper.append(ui);
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
				placeholder : '끝값'
			}
		));
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
		img=$$('i');
		$wrapper=$('#wrapper');
		loginView();
		};
	var loginView=function(){
		var ui=
			'<div id="wrapper">'
				+'<div id="login_box">'
					+'<img src="'+img+'/mainimg.jpg"/><br /><br /><br />'
					+'<span id="login_id">아이디:	</span>'
					+'<input id="login_input" type="text" placeholder="※ID는 숫자 포함 8자 이내"/><br>'
					+'<span >패스워드:	</span>'
					+'<input id="login_pass" type="password"/> <br />'
				+'</div>'
			+'</div>';
		$wrapper.append(ui);
		$('#login_input').after(meta.comp.input(
			{
				type:'button',
				id: 'login_button',
				value : '로그인'
			}
		));
		$('#login_pass').after(meta.comp.input(
			{
				type:'button',
				id: 'cancel_btn',
				value : '취소'
				
			}
		));
		};
	var joinView=function(){};
	return{init:init};
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

