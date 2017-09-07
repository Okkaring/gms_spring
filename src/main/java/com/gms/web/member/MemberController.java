package com.gms.web.member;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.auth.HomeController;

@Controller
@RequestMapping("/member")
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping("/add")
	public String memberAdd() {
		logger.info("*** /member/add 진입!");
		return "auth:member/member_add.tiles";
	}
	@RequestMapping("/list")
	public String memberList() {
		logger.info("*** /member/List 진입!");
		return "auth:member/member_list.tiles";
	}
	@RequestMapping("/detail")
	public String memberDetail() {
		logger.info("*** /member/detail 진입!");
		return "auth:member/member_detail.tiles";
	}
	@RequestMapping("/update")
	public String memberUpdate() {
		logger.info("*** /member/update 진입!");
		return "auth:member/member_update.tiles";
	}
	@RequestMapping("/delete")
	public String memberDelete() {
		logger.info("*** /member/delete 진입!");
		return "auth:member/member_delete.tiles";
	}
}
