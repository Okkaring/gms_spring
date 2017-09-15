package com.gms.web.auth;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.MemberService;

@Controller
@SessionAttributes("user")
@RequestMapping("/auth")
public class AuthController{
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired MemberService service;
	@Autowired MemberDTO bean;
	@Autowired CommandDTO cmd;
	
	@RequestMapping("/login_view")
	public String goLogin() {
		logger.info("*** AuthController goLogin 진입!");
		return "public:common/login.tiles";
	}
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(@RequestParam("id") String id, @RequestParam("pass") String pass, Model model) {
		logger.info("*** AuthController login 진입! id,pass :"+id+pass);
		cmd.setSearch(id);
		cmd.setAction(pass);
		Map<String,Object> map = service.login(cmd);
		
		if(map.get("message").equals("success")) {
			model.addAttribute("user", map.get("user"));
		}
		model.addAttribute("message",map.get("message"));
		return String.valueOf(map.get("page"));
	}
	@RequestMapping("/logout")
	public String logout() {
		logger.info("*** AuthController logout 진입!");
		return "public:common/login.tiles";
	}
}