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
	var $navbar, $container, img, js, algo, temp, ctx;
	var init = ()=>{
		$navbar = $('#navbar');
		$container = $('#container');
		ctx = $$('x');
		img = $$('i');
		js = $$('j');
		algo = js + '/algo.js';
		temp = js + '/template.js';
		onCreate();
		};
	var onCreate = ()=>{
		$.getScript(temp, ()=>{
			/*----------------------------------------Loading-------------------------------------------*/
			compUI.div('content').css({'width':'100%','text-align':'center'}).appendTo($container);
			$content=$('#content');
			compUI.image('loading',img+'/loading.gif').css({'width':'30%','margin':'0 auto','text-align':'center','margin-top':'100px'}).appendTo($content);
			
			/*---------------------------------index Btn UI & Event-------------------------------------*/
			compUI.h1('hBtn').attr('display','inline').appendTo($content);
			$hBtn=$('#hBtn');
			$('#loading').after(compUI.h1('hBtn'));
			/*Btn1*/
			compUI.span('bbsBtn').html('알고리즘').addClass('label label-default').css({'margin-left':'10px'}).appendTo($hBtn).click(()=>{
			    meta.navbar.init();
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result_box').before(compUI.input('result_btn','button'));
				$('#result_btn').val('결과~~보기');
				$('h1').html('등차수열의 합');
			
				$('#result_btn').click(() => {
					$.getScript(algo,(x1,x2)=>{
						$('#result_box').text(
								'결과: '+ series.arithmetic(
										$('#start').val(),
										$('#end').val()
								));
							});
						});
					});
			/*Btn2*/
			compUI.span('bbsBtn2').html('회원관리').addClass('label label-info').css({'margin-left':'10px'}).appendTo($hBtn).click(()=>{
					//alert('회원관리 가기 ');
					//meta.auth.init();
				});
			/*Btn3*/
			compUI.span('bbsBtn3').html('게시판관리').addClass('label label-success').css({'margin-left':'10px'}).appendTo($hBtn).click(()=>{
				alert('게시판 가기 ');
				meta.board.list();
			});
		});
	};
	return {init:init};
})();
meta.board=(()=>{
	var $container, js, temp, ctx, $content, $navbar;
	var init =()=>{
		$container = $('#container');
		ctx = $$('x');
		js = $$('j');
		temp = js + '/template.js';
		$navbar =$('#navbar');
	};
	var list=x=>{
		init();
		/*-----------------------------------BoardPage UI & Event--------------------------------*/
		$.getJSON(ctx+'/list/articles',data=>{
			$navbar.append(introUI.navbar());
			$container.html(bbsUI.search());
			$('#total').html('총 게시글 수: '+data.total.count);
            var tr='';
            $.each(data.list,(i,j)=>{
            	tr += '<tr style="height:10px; text-align: center;">'
            		   +'<td>'+j.articleSeq+'</td>'
            		   +'<td><a onclick="meta.board.detail('+j.articleSeq+')">'+j.title+'</a></td>'
            		   +'<td>'+j.content+'</td>'
		               +'<td>'+j.id+'</td>'
		               +'<td>'+j.regdate+'</td>'
		               +'<td>'+j.hitcount+'</td>'
		            +'</tr>';
		            }); 		
            console.log('tr : '+tr);
            $container.append(bbsUI.tbl());
            $('#tbody').append(tr);
            $container.append(bbsUI.pagination());
			$('#write-btn').click(e=>{
				meta.board.write(e);
				});
			});
	};
	var detail=x=>{
		init();
		alert('선택한 시퀀스:' + x);
		$.getJSON(ctx+'/get/articles/'+x, data=>{
			var pass="";
			alert('data 값: '+data.test);
			$.getScript(temp, ()=>{
				$container.empty();
				compUI.div('content').appendTo($container);
				$content = $('#content');
				$content.html(bbsUI.detail());
				$('legend').text('게시글 보기');
				
				$('#fname').val(data.detail.title).attr('readonly','true');
				$('#lname').val(data.detail.id).attr('readonly','true');
				$('#rname').val(data.detail.regdate).attr('readonly','true');
				$('#message').text(data.detail.content).attr('readonly','true');
				
				alert('아이디가 보이니:  ' + data.detail.id);
				
				
				$('#l-Btn').text('수 정 하 기').click(e=>{
					e.preventDefault();
					$('legend').text('게시글 수정화기');
					$('#fname').attr('placeholder',data.detail.title).removeAttr('readonly');
					$('#lname').attr('placeholder',data.detail.id).attr('readonly','true');
					$('#rname').attr('placeholder',data.detail.regdate).attr('readonly','true');
					$('#message').text(data.detail.content).removeAttr('readonly');
					
					$('#l-Btn').text('수 정 확인ㄱㄱ!').click(e=>{
						var _seq= data.detail.articleSeq;
						var _title=$('#fname').val();
						var _writer=$('#lname').val();
						var _message=$('#message').val();
						e.preventDefault();
						$.ajax({
							url : ctx + '/put/articles',
							method : 'post', //@RequestBody 를 썼을땐, post로 써주는 것이 바람직.
							dataType:'json',
							data : JSON.stringify({
								'articleSeq':_seq,
								'title':_title,
								'id':_writer,
								'content':_message
							}),
							contentType : 'application/json',
							success : d=>{
								alert('ajax 통신 성공: '+d.seq);
								alert('ajax에서 넘어온 아이디: '+d.id);
								alert('ajax에서 넘어온 제목: '+d.title);
								alert('ajax에서 넘어온 메세지: '+d.content);
								detail(d.seq);
							},
							error : (x,s,m)=>{
								alert('글 수정시 에러 발생'+m);
							}
						});
					});
					$('#r-Btn').text('취소').attr('id','reset-btn').attr('type','reset').removeAttr('data-toggle').removeAttr('data-target');
				});
				$('#r-Btn').attr('data-toggle','modal')
				.attr('data-target','#modal')
				.addClass('btn btn-primary')
				.html('삭 제')
				.click(e=>{
					e.preventDefault();
					var _seq = data.detail.articleSeq;
					//var _pass = ;
					var _writer = $('#lname').val();
					
					$('#passConfirm').click(e=>{
						e.preventDefault();
						alert('넘어온 정보들 :'+_seq+','+$('#user-pass').val()+','+_writer);
					$.ajax({
						url : ctx + '/delete/articles',
						method : 'post',
						dataType:'json',
						data : JSON.stringify({
							id : _writer,
							articleSeq : _seq,
							regdate : $('#user-pass').val()
							}),
						contentType : 'application/json',
						success : d=>{
							if(d.msg==="success"){
								alert("글삭제 성공");
								list();
							}else{
								alert("글삭제 실패! 비밀번호가 다릅니다.");
							}
						},
						error : (x,s,m)=>{
							alert('글 사아아아아악4제시 에러 발생'+m);
						}
					});
				});
				});
			});
		});
	};
	var update=x=>{
		alert('수정클릭');
		$.getJSON(ctx+'/get/articles/'+x, data=>{
			$.getScript(temp, ()=>{
				$container.empty();
				compUI.div('content').appendTo($container);
				$content = $('#content');
				$content.html(bbsUI.detail());
				$('legend').html('게시글 수정 페이지');
				
				$('#l-Btn').html('수 정 ㄱㄱ!').click(()=>{
					$.getJSON(ctx+'/list/articles',data=>{
						$navbar.append(introUI.navbar());
						$container.html(bbsUI.search());
						$('#total').html('총 게시글 수: '+data.total.count);
			            var tr='';
			            $.each(data.list,(i,j)=>{
			            	tr += '<tr style="height:10px; text-align: center;">'
			            		   +'<td>'+j.articleSeq+'</td>'
			            		   +'<td><a onclick="meta.board.detail('+j.articleSeq+')">'+j.title+'</a></td>'
			            		   +'<td>'+j.content+'</td>'
					               +'<td>'+j.id+'</td>'
					               +'<td>'+j.regdate+'</td>'
					               +'<td>'+j.hitcount+'</td>'
					            +'</tr>';
					            });
			            console.log('tr : '+tr);
			            $container.append(bbsUI.tbl());
			            $('#tbody').append(tr);
			            $container.append(bbsUI.pagination());
						$('#write-btn').click(e=>{
							meta.board.write(e);
							});
						});
					});
				});
			});
	};
	var deleteArticle=x=>{
		init();
		alert('삭제 클릭');		
	};
	var write=()=>{
		init();
		$.getScript(temp, ()=>{
			$container.empty();
			compUI.div('content').appendTo($container);
			$content = $('#content');
			$content.html(bbsUI.detail());
		});
	};
	return {init : init, list : list, detail : detail, update : update, write: write, deleteArticle:deleteArticle};
})();
/*meta.auth=(()=>{
	var $wrapper, img, js, temp;
	var init = ()=>{
		onCreate();
		$wrapper = $('#wrapper');
		img = $$('i');
		js = $$('j');
		temp = js + '/template.js';
		};
	var onCreate = ()=>{
		$.getScript(temp,i=>{
			$wrapper.append(introUI.login(img));
			$('#login_input').after(meta.comp.input(
					{type :'button', id : 'login_button', value : '로그인'}));
			$('#login_pass').after(meta.comp.input({type:'button', id:'cancel_btn', value:'취소'}));
		});
	};
	return{init:init};
})();*/
meta.navbar = (()=>{
	var algo, js, temp, $container;
	var init = ()=>{
		js = $$('j');
		$container=$('#container');
		algo = js + '/algo.js';
		temp = js + '/template.js';
		onCreate();
		};
	var onCreate = ()=>{
		$.getScript(temp, ()=>{
			var $u1 = $("#navbar_ul_stu");
			var $u2 = $("#navbar_ul_grade");
			var $u3 = $("#navbar_ul_board");
			
			$u1.addClass("dropdown-menu");
			$u2.addClass("dropdown-menu");
			$u3.addClass("dropdown-menu");
			
			$('#navbar').html(introUI.navbar());
/*			$container.html(algoUI.series());
			$('#start_txt').after(compUI.input('start','text'));
			$('#start').attr('placeholder','시작값');
			$('#end_txt').after(compUI.input('end','text'));
			$('#end').attr('placeholder','끝값');
			$('#result_box').before(compUI.input('result_btn','button'));
			$('#result_btn').val('결과~~보기');
			$('h1').html('등차수열의 합');
			
			$('#result_btn').click(() => {
				$.getScript(algo,(x1,x2)=>{
					$('#result_box').text(
							'결과: '+ series.arithmetic(
									$('#start').val(),
									$('#end').val()
									));
					});
				});*/
			$('.dropdown-menu a').eq(0).on('click',function(){
				//app.controller.moveTo('member','member_add');
			});
			$('.dropdown-menu a').eq(1).on('click',function(){
				//app.member.list('1');
			});
			$('.dropdown-menu a').eq(2).on('click',function(){
				//app.controller.detailStudent(prompt('조회ID'));
			});
			$('.dropdown-menu a').eq(3).on('click',function(){
				//app.controller.moveTo('member','member_delete');
			});
			$('.dropdown-menu a').eq(4).on('click',function(){
				//app.controller.moveTo('grade','grade_add');
			});
			$('.dropdown-menu a').eq(5).on('click',function(){
				//app.controller.moveTo('grade','grade_list');
			});
			$('.dropdown-menu a').eq(6).on('click',function(){
				//app.controller.moveTo('grade','grade_detail');
			});
			$('.dropdown-menu a').eq(7).on('click',function(){
				//app.controller.moveTo('grade','grade_delete');
			});
			$('.dropdown-menu a').eq(8).on('click',function(){
				//app.controller.moveTo('board','board_write');
			});
			$('.dropdown-menu a').eq(9).on('click',function(){
				//app.controller.moveTo('board','board_list');
			});
			$('.dropdown-menu a').eq(10).on('click',function(){
				//app.controller.moveTo('board','board_detail');
			});
			$('.dropdown-menu a').eq(11).on('click',function(){
				//app.controller.moveTo('board','board_delete');
			});
			$('#arithBtn').click(() => {
				alert('등차수열 클릭');
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result_box').before(compUI.input('result_btn','button'));
				$('#result_btn').val('결과~~보기');
				$('h1').html('[등차수열]의 합');
				
				$('#result_btn').click(() => {
					$.getScript(algo,(x1,x2)=>{
						$('#result_box').text('결과: '+ series.arithmetic($('#start').val(),$('#end').val()));
					});
				});
			});
			$('#switchBtn').click(() => {
				alert('스위치수열 클릭');
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result_box').before(compUI.input('result_btn','button'));
				$('#result_btn').val('결과~~보기');
				$('h1').html('[스위치수열]의 합');
				$('#result_btn').click(()=>{
					$.getScript(algo,()=>{
						$('#result_box').text('결과: ' + series.switchSeries());
					});
				});
			});
			$('#diffrenceBtn').click(()=>{
				alert('계차수열 클릭');
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').val('1').attr('readonly','true');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','수열의 끝 항 입력 : ');
				$('#result_box').before(compUI.input('result_btn','button'));
				$('#result_btn').val('결과~~보기');
				$('h1').html('[계차수열]의 합');
				$('#result_btn').click(()=>{
					$.getScript(algo,(x)=>{
						$('#result_box').text('결과: ' + series.diffrenceSeries($('#end').val()));
					});
				});
			});
			$('#facBtn').click(()=>{
				alert('팩토리얼 클릭');
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').val('1').attr('readonly','true');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').val('10').attr('readonly','true');
				$('#result_box').before(compUI.input('result_btn','button'));
				$('#result_btn').val('결과~~보기');
				$('h1').html('[팩토리얼]의 합');
				$('#result_btn').click(()=>{
					$.getScript(algo,()=>{
						$('#result_box').text('결과: ' + series.factorial());
					});
				});
			});
			$('#fiboBtn').click(()=>{
				alert('피보나치 클릭');
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','수열의 첫 항 입력 : ');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').val('20').attr('readonly','true');
				$('#result_box').before(compUI.input('result_btn','button'));
				$('#result_btn').val('결과~~보기');
				$('h1').html('[피보나치]의 합');
				$('#result_btn').click(()=>{
					$.getScript(algo,(x)=>{
						$('#result_box').text('결과: ' + series.fibonacci($('#start_box').val()));
					});
				});
			});
			$('#selBtn').click(()=>{
				alert('선택정렬 클릭');
				$container.empty();
				$container.html(algoUI.sort());
				$('#input_txt').after(compUI.input('input_val','text'));
				$('#input_val').attr('placeholder','양의 정수 입력');
				$('#input_box').before(compUI.input('input_btn','button'));
				$('#input_btn').val('입력한 숫자 확인!');
				$('h1').html('[선택정렬]');
				var sortList = new Array(5);
				var i=0;
				$('#input_btn').click((x)=>{
					sortList[i] = $('#input_val').val();
					i++;
					if(i==5){
						$('#input_val').remove();
						$('#input_btn').remove();
						$('#input_txt').html('<h3>입력한 숫자: '+sortList);
						$('#result_box').before(compUI.input('result_btn','button'));
						$('#result_btn').val('결과를 확인!');
						$('#result_btn').click(()=>{
							console.log('선택 정렬');
							alert('결과결과');
							$.getScript(algo,x=>{
								$('#result_box').html('<h3>결 과: ' + sort.selection(sortList));
							});
						});
					}
				});
			});
			$('#bubbleBtn').click(()=>{
				alert('버블정렬 클릭');
				$container.html(algoUI.sort());
				$('#input_txt').after(compUI.input('input_val','text'));
				$('#input_val').attr('placeholder','양의 정수 입력');
				$('#input_box').before(compUI.input('input_btn','button'));
				$('#input_btn').val('입력한 숫자 확인!');
				$('h1').html('[버블정렬]');
				var sortList = new Array(5);
				var i=0;
				$('#input_btn').click((x)=>{
					sortList[i] = $('#input_val').val();
					i++;
					if(i==5){
						$('#input_val').remove();
						$('#input_btn').remove();
						$('#input_txt').html('<h3>입력한 숫자: '+sortList);
						$('#result_box').before(compUI.input('result_btn','button'));
						$('#result_btn').val('결과를 확인!');
						$('#result_btn').click(()=>{
							console.log('버블 정렬');
							alert('결과결과');
							$.getScript(algo,x=>{
								$('#result_box').html('<h3>결 과: ' + sort.bubble(sortList));
							});
						});
					}
				});
			});
			$('#insertBtn').click(()=>{
				alert('삽입정렬 클릭');
			});
			$('#rankBtn').click(()=>{
				alert('석차정렬 클릭');
			});
			$('#binSearchBtn').click(()=>{
				alert('이분검색정렬 클릭 준비중');
				$container.html('<h1>&nbsp;&nbsp;준비중<h1/>');
			});
			$('#mergeBtn').click(()=>{
				alert('병합정렬 클릭 준비중');
				$container.html('<h1>&nbsp;&nbsp;준비중<h1/>');
			});
			$('#stackBtn').click(()=>{
				alert('스택정렬 클릭 준비중');
				$container.html('<h1>&nbsp;&nbsp;준비중<h1/>');
			});
		});
	};
	return {
	init : init
	};
})();
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
