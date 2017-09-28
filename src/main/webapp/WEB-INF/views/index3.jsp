<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	<title>index</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="${path.js}/meta.js"></script>
	<link rel="shortcut icon" href="${path.img}/air-fabicon.png">
	<style type="text/css">
	body {
    font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.43;
    color: #484848;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "나눔 고딕","Nanum Gothic","맑은 고딕","Malgun Gothic","Apple Gothic","돋움",Dotum,"Helvetica Neue",Helvetica,Arial,sans-serif !important;
	}
	
	.main-nav-header{z-index: 5 !important;}
	.main-nav-box{background-color: transparent !important;
				    border-bottom: none !important;
				    position: absolute !important;
				    top: 0px !important;
				    left: 0px !important;
				    right: 0px !important;}
	.main-nav-table{display: table !important;width: 100% !important;}
	.main-nav-logobox{display: table-cell !important;vertical-align: middle !important;}
	.main-nav-logobox2{display: table-cell !important;
					    height: 64px !important;
					    position: relative !important;
					    text-align: center !important;
					    text-decoration: none !important;
					    -webkit-transition: 0.25s color !important;
					    -moz-transition: 0.25s color !important;
					    transition: 0.25s color !important;
					    padding-left: 24px !important;
					    padding-right: 24px !important;
					    vertical-align: middle !important;
					    white-space: nowrap !important;}
	.main-nav-logobox3{color: #FF5A5F !important;
					    display: inline-block !important;
					    vertical-align: middle !important;
					    font-size: 34px !important;
					    -webkit-transition: 0.25s color !important;
					    -moz-transition: 0.25s color !important;
					    transition: 0.25s color !important;}
	.main-nav-blank{display: table-cell !important; width: 100% !important; vertical-align: middle !important;}
	.main-nav-menubox{display: table-cell !important;vertical-align: middle !important;}
	.main-nav-menubox2{display: block !important;}
	.main-nav-menunav{display: block;}
	.main-nav-ul{display: table !important;
			    list-style: none !important;
			    padding: 0px !important;
			    margin: 0px !important;
			    height: 64px !important;}
	.main-nav-li{display: table-cell !important;}
	.main-nav-element{position: relative !important;}
	.main-nav-btn{-webkit-appearance: none !important;
				    -moz-appearance: none !important;
				    appearance: none !important;
				    background: transparent !important;
				    border: none !important;
				    color: inherit !important;
				    display: inline-block !important;
				    height: 64px !important;
				    line-height: 64px !important;
				    text-decoration: none !important;
				    margin: 0px !important;
				    position: relative !important;
				    padding: 0 16px !important;
				    white-space: nowrap !important;}
	.main-nav-btn-out{height: 100% !important;
				    vertical-align: middle !important;
				    -moz-box-sizing: border-box !important;
				    box-sizing: border-box !important;
				    border-bottom: none !important;}
	.main-nav-btn-in{display: inline-block !important;
				    padding: 8px 0 !important;
				    vertical-align: middle !important;
				    line-height: 1 !important;
				    border-bottom: 2px solid transparent !important;}
	.main-nav-a{-webkit-appearance: none !important;
			    -moz-appearance: none !important;
			    appearance: none !important;
			    background: transparent !important;
			    border: none !important;
			    color: inherit !important;
			    display: inline-block !important;
			    height: 64px !important;
			    line-height: 64px !important;
			    text-decoration: none !important;
			    margin: 0px !important;
			    position: relative !important;
			    padding: 0 16px !important;
			    white-space: nowrap !important;}
	.main-nav-a-out{height: 100% !important;
			    vertical-align: middle !important;
			    -moz-box-sizing: border-box !important;
			    box-sizing: border-box !important;
			    border-bottom: none !important;}
	.main-nav-a-in{display: inline-block !important;
			    padding: 8px 0 !important;
			    vertical-align: middle !important;
			    line-height: 1 !important;
			    border-bottom: 2px solid transparent !important;}
			    
	.main-box{position: relative !important;}
	.main-box2{position: relative !important;
			    display: block !important;
			    height: 80vh !important;}
	.main-box3{display: table !important;
			    position: relative !important;
			    height: 100% !important;
			    width: 100% !important;}
	.main-box4{display: table-cell !important;vertical-align: middle !important;}
	.main-box5{ padding-top: 24px !important;
			    background-color: transparent;
			    margin: 0 auto !important;
			    position: relative !important;
			    padding-left: 80px !important;
			    padding-right: 80px !important;
			    max-width: 1080px !important;
			    box-sizing: border-box;}
	.main-box6{margin-top: 40px;}
	.main-box7{width: 60% !important;margin-top: 64px !important;}
	.main-box-h1{margin-top: 0;
				font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
			    font-size: 48px !important;
			    line-height: 56px !important;
			    letter-spacing: -0.8px !important;
			    padding-top: 8px !important;
			    padding-bottom: 8px !important;
			    color: #484848 !important;
			    font-weight: 300 !important;
			    margin-bottom: 15px;
			    text-rendering: optimizelegibility;
			    margin: 0.67em 0;
			    margin-top: 0;
			    margin-right: 0px;
			    margin-bottom: 15px;
			    margin-left: 0px;}
	.main-box-title{font-weight: 700 !important;color: #FF5A5F !important;}
	.main-search-box{background-color: transparent;
			    margin: 0 auto !important;
			    position: relative !important;
			    padding-left: 80px !important;
			    padding-right: 80px !important;
			    max-width: 1080px !important;
			    box-sizing: border-box;}
	.main-search-box2{display: block !important;
			    padding-top: 32px !important;
			    padding-bottom: 8px !important;
			    box-sizing: border-box;}
	.main-search-box3{box-sizing: border-box;}
	.main-search-box4{display: block !important;}
	.main-search-box5{font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
			    font-size: 19px !important;
			    line-height: 24px !important;
			    /* letter-spacing: undefined !important; */
			    padding-top: 0px !important;
			    padding-bottom: 0px !important;
			    color: #484848 !important;
			    border-radius: 4px !important;
			    border: 1px solid #DBDBDB !important;
			    box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.08) !important;
			    padding: 0px !important;
			    display: table !important;
			    table-layout: fixed !important;
			    height: 70px !important;
			    width: 100% !important;
			    position: relative !important;}
	.main-search-box6{width: 100%;
				display: table-cell !important;
			    vertical-align: middle !important;
			    position: relative !important;
			    -webkit-transition: width 0.3s !important;
			    -moz-transition: width 0.3s !important;
			    transition: width 0.3s !important;}
    .main-search-box6-1{width: 0%;
    			z-index: 2;
				display: table-cell !important;
			    vertical-align: middle !important;
			    position: relative !important;
			    -webkit-transition: width 0.3s !important;
			    -moz-transition: width 0.3s !important;
			    transition: width 0.3s !important;}
	.main-search-box7{margin-top: -3px !important;margin-left: 5px !important;}
	.main-search-box8{position: relative !important;z-index: 1 !important;}
	.main-search-box9{position: relative !important;}
	.main-search-box10{display: block !important;width: 100% !important;}
	.main-search-box11{position: absolute !important;
			    display: block !important;
			    border: 0px !important;
			    margin: -1px !important;
			    padding: 0px !important;
			    height: 1px !important;
			    width: 1px !important;
			    clip: rect(0, 0, 0, 0) !important;
			    overflow: hidden !important;
			    line-height: normal;}
	.main-search-box12{font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
			    font-size: 19px !important;
			    line-height: 24px !important;
			    letter-spacing: undefined !important;
			    padding-top: undefined !important;
			    padding-bottom: undefined !important;
			    color: #484848 !important;
			    border-width: 1px !important;
			 /*    border-style: solid !important; */
			    border-color: #ffffff !important;
			    border-radius: 2px !important;
			    background-color: #ffffff !important;
			    margin-bottom: 0px !important;
			    position: relative !important;
			    z-index: 0 !important;
			    margin-top: 0px !important;
			    margin-left: 0px !important;
			    margin-right: 0px !important;
			    display: block !important;
			    width: 100% !important;}
	.main-search-box13{overflow: hidden !important;position: relative !important;}
	.main-search-box14{font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
			    font-size: 19px !important;
			    line-height: 24px !important;
			    letter-spacing: undefined !important;
			    padding-top: undefined !important;
			    padding-bottom: undefined !important;
			    color: #484848 !important;
			    font-weight: normal !important;
			    background-color: transparent !important;
			    border: 0px !important;
			    padding: 11px !important;
			    padding-right: 20px !important;
			    width: 100% !important;
			    text-overflow: ellipsis !important;}
	.main-search-btn{font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
			    font-size: 19px !important;
			    line-height: 15px !important;
			    letter-spacing: undefined !important;
			    padding-top: 0px !important;
			    padding-bottom: 0px !important;
			    color: #ffffff !important;
			    padding-left: 18px !important;
			    padding-right: 18px !important;
			    border-radius: 4px !important;
			    border: 0px !important;
			    background: #FF5A5F !important;
			    margin: 12px !important;
			    margin-left: 16px !important;
			    height: 48px !important;
			    text-align: center !important;
			    display: inline-block !important;
			    float: right !important;
			    white-space: nowrap !important;}
	

	
	</style>
</head>
<body>
	<header role="banner" class="main-nav-header">
	<div class="main-nav-box">
		<div class="main-nav-table">
			<!-- logo -->
			<div class="main-nav-logobox">
				<div class="main-nav-logobox2">
					<div class="main-nav-logobox3">
						<svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="display: block;fill: currentColor;height: 1em;width: 1em;">
							<path d="M499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path>
						</svg>
					</div>
				</div>
			</div>
			<!-- blank -->
			<div class="main-nav-blank"></div>
			<!-- menu -->
			<div class="main-nav-menubox">
				<div class="main-nav-menubox2">
					<nav class="main-nav-menunav">
						<ul class="main-nav-ul" >
							
							<li class="main-nav-li">
								<div class="main-nav-element">
									<button class="main-nav-btn">
										<div class="main-nav-btn-out">
											<div class="main-nav-btn-in">
												<span>호스팅 하기</span>
											</div>
										</div>
									</button>
								</div>
							</li>
							
							<li class="main-nav-li">
								<div class="main-nav-element">
									<button class="main-nav-btn">
										<div class="main-nav-btn-out">
											<div class="main-nav-btn-in">
												<span>도움말</span>
											</div>
										</div>
									</button>
								</div>
							</li>
							
							<li class="main-nav-li">
								<div class="main-nav-element">
									<a href="" class="main-nav-a">
										<div class="main-nav-a-out">
											<div class="main-nav-a-in">
												<span>회원가입</span>
											</div>
										</div>
									</a>
								</div>
							</li>
							
							<li class="main-nav-li">
								<div class="main-nav-element">
									<a href="" class="main-nav-a">
										<div class="main-nav-out">
											<div class="main-nav-a-in">
												<span>로그인</span>
											</div>
										</div>
									</a>
								</div>
							</li>
							
 							<li class="main-nav-li">
								<div class="main-nav-element">
									<a href="" class="main-nav-a">
										<div class="main-nav-out">
											<div class="main-nav-a-in">
												<span>관리자</span>
											</div>
										</div>
									</a>
								</div>
							</li> 
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
	</header>
	<main id="site-content" tabindex="-1" class="main-box">
		<div class="main-box2">
			<div class="main-box3">
				<div class="main-box4">
					<div>
						<div class="main-box5">
							<div class="main-box6">
								<div class="main-box7">
									<h1 class="main-box-h1">
										<span class="main-box-title">에어비앤비</span>
										<div>
										독특한 숙소를 예약하고, <br />현지인처럼 살아보세요.
										</div>
									</h1>
								</div>
							</div>
						</div>
					</div>
			<!-- searchbar -->
					<div class="main-search-box">
						<div class="main-search-box2">
							<div class="main-search-box3">
								<div>
									<div class="main-search-box4">
										<div class="main-search-box5">
											<div class="main-search-box6">
												<div class="main-search-box7">
													<div class="main-search-box8">
														<div class="main-search-box9">
															<div class="main-search-box10">
																<label class="main-search-box11" for="GeocompleteController-via-SearchBarLarge-via-HeroController"></label>
																<div class="main-search-box12">
																	<div class="main-search-box13">
																		<input type="text" class="main-search-box14" placeholder="'바르셀로나'에 가보는 건 어떠세요?" />
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<!-- btn -->
											<div class="main-search-box6-1">
												<button type="submit" class="main-search-btn">
													<span>검색</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>					
				</div>
			</div>
		</div>
	</main>
</body>
<div id="content"></div>
<script>

</script>
</html>