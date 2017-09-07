package com.gms.web.grade;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.auth.HomeController;

@Controller
@RequestMapping("/grade")
public class GradeController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping("/add")
	public String gradeAdd() {
		logger.info("***grade add 진입!");
		
		return "grade/grade_add";
	}
	@RequestMapping("/list")
	public String gradeList() {
		logger.info("***grade list 진입!");
		
		return "grade/grade_list";
	}
	@RequestMapping("/detail")
	public String gradeDetail() {
		logger.info("***grade detail 진입!");
		
		return "grade/grade_detail";
	}
	@RequestMapping("/delete")
	public String gradeDelete() {
		logger.info("***grade delete 진입!");
		return "grade/grade_delete";
	}
	
}
