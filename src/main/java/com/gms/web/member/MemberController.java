package com.gms.web.member;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.proxy.PageProxy;


@Controller
@SessionAttributes("student")
@RequestMapping({"/member","/student"})
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired MemberService service;
	@Autowired CommandDTO cmd;
	@Autowired PageProxy pxy;
	@Autowired MemberDTO bean;
	@Autowired MajorDTO major;
	
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public String addStudent(@ModelAttribute MemberDTO bean, @RequestParam("subject") List<String> list) {
		logger.info("***member_add_student 진입");
		logger.info("id: {}", bean.getId());
		logger.info("pw: {}", bean.getPw());
		logger.info("name: {}", bean.getName());
		logger.info("subject : {}",list);
		Map<String,Object> paramMap = new HashMap<>();
		paramMap.put("bean",bean);
		List<MajorDTO> paramList= new ArrayList<>();
		MajorDTO mj=null;
		for(String m:list) {
			mj= new MajorDTO();
			mj.setTitle(m);
			mj.setSubjId(m);
			mj.setId(bean.getId());
			paramList.add(mj);
		}
		logger.info("랜덤숫자는 ? : "+ mj.getMajorId());
		paramMap.put("list", paramList);
		service.addMember(paramMap);
		return "redirect:/member/list/1";
	}
	@RequestMapping("/list/{pageNumber}")
	@SuppressWarnings("unchecked")
	public String memberList(Model model,@PathVariable int pageNumber) {
		logger.info("*** @Ctrl/member/list 진입!");
		pxy.setPageSize(5);
		pxy.setBlockSize(5);
		pxy.setPageNumber(pageNumber);
		int count = Integer.parseInt(service.count());
		pxy.setTheNumberOfRows(count);
		int[] result = new int[6];
		int theNumberOfPages = 0, startPage=0,endPage=0;
		theNumberOfPages = (pxy.getTheNumberOfRows() % pxy.getPageSize()) == 0? pxy.getTheNumberOfRows()/pxy.getPageSize():pxy.getTheNumberOfRows()/pxy.getBlockSize()+1;
		startPage = pxy.getPageNumber() - ((pxy.getPageNumber() - 1)%(pxy.getBlockSize()));
		endPage = (startPage + pxy.getBlockSize() -1 <= theNumberOfPages) ? startPage + pxy.getBlockSize() -1 : theNumberOfPages;
		result[0] = pxy.getPageNumber();
		result[1] = theNumberOfPages;
		result[2] = startPage;
		result[3] = endPage;
		result[4] = (startPage - (theNumberOfPages/pxy.getBlockSize())>0)?1:0;
		result[5] = startPage + pxy.getBlockSize();

		if(pxy.getPageNumber() <= pxy.getTheNumberOfRows()/ pxy.getPageSize() + 1) {
			if(pxy.getPageNumber()==1) {
				cmd.setStartRow("1");
				cmd.setEndRow(String.valueOf(pxy.getPageSize()));
			}else {
				cmd.setStartRow(String.valueOf((pxy.getPageNumber()-1)*pxy.getPageSize() +1));
				cmd.setEndRow(String.valueOf(pxy.getPageNumber() * pxy.getPageSize()));
			}
		}
		
		List<StudentDTO> list = (List<StudentDTO>) service.list(cmd);
		pxy.execute(model, result, list);
		logger.info("리스트 결과 : "+list);
		model.addAttribute("count",service.count());
		model.addAttribute("list",list);
		return "auth:member/member_list.tiles";
	}
	@SuppressWarnings("unchecked")
	@RequestMapping("/search/{search}")
	public String findByName(@PathVariable String search,Model model) {
		logger.info("***cmd/서치값은 ?"+cmd);
		cmd.setSearch(search);
		List<StudentDTO> list = (List<StudentDTO>) service.findByName(cmd);
		model.addAttribute("list",list);
		model.addAttribute("pageNumber","1");
		return "auth:member/member_list.tiles";
	}
	@RequestMapping("/delete/{id}")
	public String memberDelete(@PathVariable String id,Model model) {
		logger.info("*** /member/delete 진입!"+id);
		cmd.setSearch(id);
		service.remove(cmd);
		model.addAttribute("id",id);
		return "redirect:/member/list/1";
	}
	@RequestMapping("/detail/{id}")
	public String memeberDetail (@PathVariable String id, Model model) {
		logger.info("*** /member/detail 진입 ! " +id);
		cmd.setSearch(id);
		model.addAttribute("student",service.findById(cmd));
		return "auth:member/member_detail.tiles";
	}
	@RequestMapping("/update")
	public String memberUpdate(@ModelAttribute MemberDTO stu) {
		logger.info("***/member/update진입!" + stu.getId());
		service.modify(stu);
		return "redirect:/member/detail/"+stu.getId();
	}
}
