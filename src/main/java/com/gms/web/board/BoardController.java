package com.gms.web.board;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.auth.HomeController;

@Controller
@RequestMapping("/board")
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping("/write")
	public String boardWrite() {
		logger.info("board write 진입!!");
		return "board/board_write";
	}
	@RequestMapping("/list")
	public String boardList() {
		logger.info("board list 진입!!");
		return "board/board_list";
	}
	@RequestMapping("/detail")
	public String boardDetail() {
		logger.info("board detail 진입!!");
		return "board/board_detail";
	}
	@RequestMapping("/delete")
	public String boardDelete() {
		logger.info("board delete 진입!!");
		return "board/board_delete";
	}
}
