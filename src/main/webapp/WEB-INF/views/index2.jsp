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
</head>
<body>
<div class="page-header">
	<h1 style="display:inline">게시판</h1>
	<a style="font-size:large;">목록가기</a>		
</div>
<div class="container">
	<div class="row">
		<div class="col-md-12">
			<div class="well well-sm">
				<form class="form-horizontal" method="post">
					<fieldset>
						<legend class="text-center header">게시글 쓰기</legend>
						<div class="form-group">
							<span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
							<div class="col-md-12">
								<input id="fname" name="title" type="text" placeholder="제 목" class="form-control" />
							</div>
						</div>
						<div class="form-group">
							<span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
							<div class="col-md-12">
								<input id="lname" name="writer" type="text" placeholder="글쓴이" class="form-control" />
							</div>
						</div>
						
						<div class="form-group">
							<span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
							<div class="col-md-12">
								<textarea class="form-control" id="message" name="message" rows="15"></textarea>
							</div>
						</div>
						<div class="form-group">
							<div class="col-md-12 text-center">
								<button type="submit" style="width:200px" class="btn btn-primary btn-lg">확 인</button>
								<button type="reset" style="width:200px" class="btn btn-dabger btn-lg">취 소</button>
							</div>
						</div>	
					</fieldset>
				</form>
			</div>
		</div>
	</div>
</div>
</body>

<script>
meta.common.init('${path.ctx}');
</script>
</html>