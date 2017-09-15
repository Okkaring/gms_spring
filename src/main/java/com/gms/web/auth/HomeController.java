package com.gms.web.auth;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.complex.PathFactory;


@Controller
@SessionAttributes("path")
public class HomeController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping(value = "/")
	public String home(Model model) {
		logger.info("Welcome home! The client locale is {}.");
		model.addAttribute("serverTime", new SimpleDateFormat("yyyy년 MM월 dd일 E요일 HH:mm:ss").format(new Date()));
		model.addAttribute("path",PathFactory.create());
		return "public:common/home.tiles";
	}
}
