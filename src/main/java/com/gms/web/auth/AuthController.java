package com.gms.web.auth;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/auth")
public class AuthController{
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping("/login_view")
	public String goLogin() {
		logger.info("*** AuthController goLogin 진입!");
		return "public:common/login.tiles";
	}
	@RequestMapping("/login")
	public String login() {
		logger.info("*** AuthController login 진입!");
		return "auth:common/main.tiles";
	}
	@RequestMapping("/logout")
	public String logout() {
		logger.info("*** AuthController logout 진입!");
		return "public:common/login.tiles";
	}
}