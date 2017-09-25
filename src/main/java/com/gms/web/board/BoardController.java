package com.gms.web.board;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.auth.HomeController;
import com.gms.web.command.Command;
import com.gms.web.command.ResultMap;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.service.IGetService;
import com.gms.web.service.IListService;

@RestController
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired BoardMapper boardMapper;
	@Autowired GradeMapper gradeMapper;
	@Autowired Command cmd;
	
	public @ResponseBody Map<?,?> post(){
		
		return null;
	}
	@RequestMapping("/list/{cate}")
	public @ResponseBody Map<?,?> list(@PathVariable String cate) {
		logger.info("******board List {}!!","진입");
		Map<String,Object> map = new HashMap<>();
		IListService listService=null;
		IGetService countService=null;
		switch(cate) {
		case "articles" :
			cmd=null;
			listService =(x)-> {
					return boardMapper.selectList(cmd);
			};
			countService =(x)->{
				return boardMapper.count(cmd);
			};
			ResultMap r=(ResultMap) countService.execute(cmd);
			map.put("result", "success");
			map.put("total", r);
			map.put("list", listService.execute(cmd));
			break;
			
		case "grade" : 
			cmd=null;
			listService =(x)-> {
					return gradeMapper.selectSome(cmd);
			};
			map.put("list", listService.execute(cmd));
			break;
		};
		return map;
	}
	@RequestMapping("/get/{cate}/{id}")
	public @ResponseBody Map<?,?> get(@PathVariable("cate") String cate , @PathVariable("id") String id ){
		logger.info("******board detail {}!!","진입");
		System.out.println("들어온 아이디 값: "+ id);
		Map<String,Object> map = new HashMap<>();
		/*IGetService detailService=null;
		switch(cate) {
		case "articles":
			cmd=null;
			detailService =(x)->{
				return boardMapper.selectList(cmd);
			};
			ResultMap r = (ResultMap) detailService.execute(cmd);
			map.put("detail", r );
			break;
		};*/
		return map;
	}
	public @ResponseBody Map<?,?> put(){
		
		return null;
	}
	public @ResponseBody Map<?,?> delete(){
		
		return null;
	}
}






