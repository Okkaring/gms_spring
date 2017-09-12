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
	
	@RequestMapping("/delete")
	public String gradeDelete() {
		logger.info("***grade delete 진입!");
		return "auth:grade/grade_delete.tiles";
	}
	
}
