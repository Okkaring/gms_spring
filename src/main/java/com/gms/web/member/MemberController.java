package com.gms.web.member;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.command.CommandDTO;
import com.gms.web.proxy.PageProxy;


@Controller
@RequestMapping("/member")
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired MemberService service;
	@Autowired CommandDTO cmd;
	@Autowired PageProxy pxy;
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
		if(pxy.getPageNumber() <= pxy.getBlockSize()
				/ pxy.getPageNumber() + 1) {
			if(pxy.getPageNumber()==1) {
				cmd.setStartRow("1");
				cmd.setEndRow(String.valueOf(pxy.getPageSize()));
			}
		}else {
			cmd.setStartRow(String.valueOf((pxy.getPageNumber()-1)*pxy.getPageSize() +1));
			cmd.setEndRow(String.valueOf(pxy.getPageNumber() * pxy.getBlockSize()));
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
	@RequestMapping("/delete")
	public String memberDelete() {
		logger.info("*** /member/delete 진입!");
		return "auth:member/member_delete.tiles";
	}
}
