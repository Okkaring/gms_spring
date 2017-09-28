<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	<title>index</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="${path.css}/meta.css" />
	<script src="${path.js}/meta.js"></script>
	
	<style type="text/css">
	.main-menu-box{background-color: transparent !important;
				    border-bottom: none !important;
				    position: absolute !important;
				    top: 0px !important;
				    left: 0px !important;
				    right: 0px !important;}
	.main-menu-table{display: table !important;width: 100% !important;}
	.logo-box{width:5%; height:64px; margin:0 auto; float:left;}
	.logo-outer{display: table;width: 100%;height: 100%;}
	.logo-inner{display: table-cell;vertical-align: middle;text-align: center;}
	.logo-center{position:relative; display:inline-block; padding:1em;}
	.main-menu-blank{display: table-cell !important;width: 70% !important;vertical-align: middle !important;}	
	.main-menu-navbox{display: table-cell !important;vertical-align: middle !important;text-align: right;}
	.main-menu-element{float:left; height:64px;line-height: 64px !important;padding: 0 16px !important;}
	.main-menu-btn{background: transparent !important;
					border-top-color: initial;
					border-top-style: none;
					border-top-width: initial;
					border-right-color: initial;
					border-right-style: none;
				    border-right-width: initial;
				    border-bottom-color: initial;
				    border-bottom-style: none;
				    border-bottom-width: initial;
				    border-left-color: initial;
				    border-left-style: none;
				    border-left-width: initial;
				    border-image-source: initial;
				    border-image-slice: initial;
				    border-image-width: initial;
				    border-image-outset: initial;
				    border-image-repeat: initial;}
	</style>
</head>
<body>
	<div class="main-menu-box">
		<div class="main-menu-table">
		<div id="logo-box" class="logo-box">
			<div class="logo-outer">
				<div class="logo-inner">
					<div class="logo-center">
						<img src= "${path.img}/logo-nav-color.png" style="width:34px;"/>
					</div>
				</div>
			</div>
		</div>
		<div class="main-menu-blank"></div>
			<div class="main-menu-navbox">
				<div class="main-menu-element">
					<button class="main-menu-btn"><span>호스팅 하기</span></button>
				</div>
				<div class="main-menu-element">
					<button class="main-menu-btn"><span>도움말</span></button>
				</div>
				<div class="main-menu-element"><a href="">회원가입</a></div>
				<div class="main-menu-element"><a href="">로그인</a></div>
			</div>
		</div>
	</div>
</body>
<div id="content"></div>
<script>

</script>
</html>