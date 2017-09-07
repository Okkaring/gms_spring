var app=app || {};
app.path=(function(){
	var init=function(ctx){
		//alert('ctx? : '+ ctx);
		app.session.init(ctx);
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		location.href=ctx()+"/auth/login_view";
	};
	var setContentView=function(){
	};
	var ctx=function(){
		return app.session.getPath('ctx');
	};
	var js=function(){
		return app.session.getPath('js');
	};
	var img=function(){
		return app.session.getPath('img');
	};
	var css=function(){
		return app.session.getPath('css');
	};
	
	return {
		init : init,
		ctx : ctx,
		js : js,
		img : img,
		css : css
	};
})();

app.session=(function(){
	var init=function(ctx){
		sessionStorage.setItem('ctx', ctx);
		sessionStorage.setItem('js', ctx + '/resources/js');
		sessionStorage.setItem('img', ctx + '/resources/img');
		sessionStorage.setItem('css', ctx + '/resources/css');
		//alert('app.session 진입 : '+ ctx);
};
	var getPath=function(x){
		return sessionStorage.getItem(x);
	};
	return {
		init : init,
		getPath : getPath
	};
})();

app.main=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('.list-group-item a').eq(0).on('click',function(){
			app.controller.moveTo('member','add');
		});
		$('.list-group-item a').eq(1).on('click',function(){
			app.controller.moveTo('member','list');
		});
		$('.list-group-item a').eq(2).on('click',function(){
			app.controller.detailStudent(prompt('조회ID'));
		});
		$('.list-group-item a').eq(3).on('click',function(){
			app.controller.moveTo('member','delete');
		});

	};
	var setContentView=function(){
		var $u1=$("#main_ul_stu");
		var $u2=$("#main_ul_grade");
		var $u3=$("#main_ul_board");
		
		$u1.addClass("list-group");
		$u2.addClass("list-group");
		$u3.addClass("list-group");
		
		$('.list-group').children().addClass("list-group-item");

	};
	return {
		init : init
	};
})();
app.grade=(function(){
	var init=function(){
		onCreate();
		};
	var onCreate=function(){
		setContentView();
		$('.list-group-item a').eq(4).on('click',function(){
			app.controller.moveTo('grade','add');
		});
		$('.list-group-item a').eq(5).on('click',function(){
			app.controller.moveTo('grade','list');
		});
		$('.list-group-item a').eq(6).on('click',function(){
			app.controller.moveTo('grade','detail');
		});
		$('.list-group-item a').eq(7).on('click',function(){
			app.controller.moveTo('grade','delete');
		});
		};
	var setContentView=function(){
		};
	return{
		init : init
		};
	})();

app.board=(function(){
	var init=function(){
		onCreate();
		};
	var onCreate=function(){
		setContentView();
		$('.list-group-item a').eq(8).on('click',function(){
			app.controller.moveTo('board','write');
		});
		$('.list-group-item a').eq(9).on('click',function(){
			app.controller.moveTo('board','list');
		});
		$('.list-group-item a').eq(10).on('click',function(){
			app.controller.moveTo('board','detail');
		});
		$('.list-group-item a').eq(11).on('click',function(){
			app.controller.moveTo('board','delete');
		});
		};
	var setContentView=function(){
		};
	return {
		init : init
		};
	})();


app.auth=(function(){
	var init= function(){
		$('#loginBtn').on('click',function(){
    	if($("#login_id").val()===""){
    		alert('ID를 입력해 주세요.');
    		return false;
    	}
    	if($("#login_pass").val()===""){
    		alert('pass를 입력해 주세요.');
    		return false;
    	}
    	$('#login_box').attr('action',app.path.ctx()+"/auth/login");
    	$('#login_box').attr('method','post');
    	return true;
		});
	};
	return {
		init : init
	};
})();

app.navbar=(function(){
	var init=function(){
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		$('#navbar').on('click',function(){
			//alert('main으로 가시겠습니까?');
			app.controller.moveTo('auth','login');
		});
		$('.dropdown-menu a').eq(0).on('click',function(){
			app.controller.moveTo('member','add');
		});
		$('.dropdown-menu a').eq(1).on('click',function(){
			app.controller.moveTo('member','list');
		});
		$('.dropdown-menu a').eq(2).on('click',function(){
			app.controller.detailStudent(prompt('조회ID'));
		});
		$('.dropdown-menu a').eq(3).on('click',function(){
			app.controller.moveTo('member','delete');
		});
		$('.dropdown-menu a').eq(4).on('click',function(){
			app.controller.moveTo('grade','add');
		});
		$('.dropdown-menu a').eq(5).on('click',function(){
			app.controller.moveTo('grade','list');
		});
		$('.dropdown-menu a').eq(6).on('click',function(){
			app.controller.moveTo('grade','detail');
		});
		$('.dropdown-menu a').eq(7).on('click',function(){
			app.controller.moveTo('grade','delete');
		});
		$('.dropdown-menu a').eq(8).on('click',function(){
			app.controller.moveTo('board','write');
		});
		$('.dropdown-menu a').eq(9).on('click',function(){
			app.controller.moveTo('board','list');
		});
		$('.dropdown-menu a').eq(10).on('click',function(){
			app.controller.moveTo('board','detail');
		});
		$('.dropdown-menu a').eq(11).on('click',function(){
			app.controller.moveTo('board','delete');
		});
		$logout.on('click',function(){
			app.controller.logout('auth','logout');
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

app.member=(function(){
		var init=function(){
			onCreate();
		};
		var onCreate=function(){
			setContentView();
			$('#updateBtn').on('click',function(){
				
			sessionStorage.setItem('id',$('#stu_id').val());
			sessionStorage.setItem('phone',$('#stu_phone').val());
			sessionStorage.setItem('email',$('#stu_email').val());
			
/*			alert('Value: ' +'\n'+
				$('#stu_id').val() +'\n'+
				$('#stu_phone').val()+'\n'+
				$('#stu_email').val()+'\n'+
				$('#stu_title').val());
*/			
			app.controller.moveTo('member','member_update');
			});
		};
		var setContentView=function(){
			alert('app.member: // memberDetail');
		};
		return {
			init : init
		};
})();

app.controller=(function(){
	var init=function(){
	};
	var moveTo=function(dir,page){
		//alert('moveTo: dir: '+ app.path.ctx()+'///page: /'+page);
		location.href=app.path.ctx()+'/'+dir+'/'+page;
	};
	var logout=function(ctx,page){
		alert("로그아웃");
		alert(app.ctx() +'////'+ctx);
		location.href=app.path.ctx()+"action=logout&page="+page;
	};
	var deleteTarget=function(ctx){
		prompt(ctx+"의 id");
	};
	var list=function(dir,page,pageNumber){
		location.href=app.path.ctx()+"/"+dir+"/"+page+"&pageNumber="+pageNumber;
	};
	var findByName=function(){
		var search = document.getElementById('search').value;
		if(search===""){
			alert('검색어를 입력하세요.');
			return false;
		}
		alert('잘 봐 이것은 mbr_list / function: / findByName: '+ search);
		location.href=app.ctx()+"/member.do?action=search&page=member_list&search="+search;
		return true;
	};
	var updateStudent=function(id,email){
		alert('수정할 id : ' +id);
		location.href=app.ctx()+"/member.do?action=update&page=member_update&id="+id+"&email="+email;
	};
	var deleteStudent=function (id){
		alert('삭제할 id : ' + id);
		location.href=app.ctx()+"/member/member_delete/member_list";
	};
	var detailStudent=function (id){
		alert('조회할 id : ' + id);
		location.href=app.path.ctx()+"/member/member_detail?id="+id;
	};
    var studentInfo=function (){
  	  var id='id',
  	      id_val='${requestScope.student.id}',
  	      name='name',
  	      name_val='${requestScope.student.name}',
  	      email='email',
  	      email_val='${requestScope.student.email}'
  	      ;
  	  sessionStorage.setItem(id,id_val);    
  	  sessionStorage.setItem(name,name_val);    
  	  sessionStorage.setItem(email,email_val);    
    };
   
	return{
	init : init,
	moveTo : moveTo,
	logout : logout,
	deleteTarget : deleteTarget,
	list : list,
	findByName : findByName,
	updateStudent : updateStudent,
	deleteStudent : deleteStudent,
	detailStudent : detailStudent,
	studentInfo : studentInfo
	};
})();

