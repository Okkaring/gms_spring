package com.gms.web.board;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.auth.HomeController;
import com.gms.web.command.Command;
import com.gms.web.command.ResultMap;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.member.MemberService;
import com.gms.web.member.StudentDTO;
import com.gms.web.service.IDeleteService;
import com.gms.web.service.IGetService;
import com.gms.web.service.IListService;
import com.gms.web.service.IPutService;

@RestController
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired BoardMapper boardMapper;
	@Autowired GradeMapper gradeMapper;
	@Autowired MemberMapper memberMapper;
	@Autowired Command cmd;
	@Autowired StudentDTO member;
	
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
			listService =(x)-> {
					return boardMapper.selectList(cmd);
			};
			countService =(x)->{
				return boardMapper.count(cmd);
			};
			//map.put("result", "success");
			map.put("total", (ResultMap) countService.execute(cmd));
			map.put("list", listService.execute(cmd));
			break;
		};
		return map;
	}
	@RequestMapping("/get/{cate}/{id}")
	public @ResponseBody Map<?,?> get(@PathVariable("cate") String cate , @PathVariable("id") String id ){
		logger.info("******board detail 진입!! id: {}",id);
		Map<String,Object> map = new HashMap<>();
		IGetService searchService=null;
		cmd.setColumn("article_seq");
		cmd.setSearch(id);
		searchService= (x)->{
			return boardMapper.selectOne(cmd);
		};
		map.put("test","들어옴");
		map.put("detail", searchService.execute(cmd));
		return map;
	}
	@RequestMapping(value="/put/articles",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Map<?,?> put(@RequestBody Article art){
		logger.info("******board put {}","진이이입");
		cmd.setDir(art.getArticleSeq());
		if(!art.getTitle().equals("")) {
			cmd.setAction(art.getTitle());
		}
		if(!art.getContent().equals("")) {
			cmd.setPage(art.getContent());
		}
		System.out.println("아티클시퀀스야::    "+cmd.getDir());
	    System.out.println("수정된 타이틀이야아아:: "+cmd.getAction());
	    System.out.println("수정된 컨텐츠야아아아::    "+cmd.getPage());
		
		Map<String,Object> map = new HashMap<>();
		IPutService updateService=null;
		
		updateService =(x)->{
			boardMapper.update(cmd);
		};
		updateService.execute(cmd);
		
		map.put("seq", art.getArticleSeq());
		map.put("title", art.getTitle());
		map.put("id", art.getId());
		map.put("content", art.getContent());
		return map;
	}
	@RequestMapping(value="/delete/articles",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Map<?,?> delete(@RequestBody Article art){
		Map<String,Object> map = new HashMap<>();
		cmd.setSearch(art.getId());
		IGetService memberService = (x)->{		
			return memberMapper.selectById(cmd);
		};
		member = (StudentDTO) memberService.execute(cmd);
		System.out.println("비번: "+ art.getRegdate());
		System.out.println("아뒤 ; "+ art.getId());
		System.out.println("시퀀스 : "+art.getArticleSeq());
		
		if(art.getRegdate().equals(member.getPw())) {
			cmd.setSearch(String.valueOf(art.getArticleSeq()));
			IDeleteService deleteService = (x)->{		
				boardMapper.delete(cmd);
			};
			deleteService.execute(cmd);
			map.put("msg", "success");
		}else{
			map.put("msg", "fail");
		};
		return map;
	}
}






