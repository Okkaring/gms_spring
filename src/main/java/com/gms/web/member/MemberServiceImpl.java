package com.gms.web.member;

import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.mapper.MemberMapper;

@Service
public class MemberServiceImpl implements MemberService{
	private static final Logger logger = LoggerFactory.getLogger(MemberServiceImpl.class);
	@Autowired MemberMapper mapper;
	@Autowired MemberDTO bean;
	@Autowired CommandDTO cmd;
	@Override
	@SuppressWarnings("unchecked")
	public String addMember(Map<?,?> map) {
		System.out.println("member service 진입");
		MemberDTO m = (MemberDTO)map.get("member");
		System.out.println("넘어온 회원의 이름: "+ m.toString());
		List<MajorDTO> list =(List<MajorDTO>)map.get("major");
		System.out.println("넘어온 수강과목:"+list);
		return null;
	}
	@Override
	public List<?> list(CommandDTO cmd) {
		return mapper.selectAll(cmd);
	}
	@Override
	public String count() {
		logger.info("count is {}", "entered");
		String count= mapper.count();
		logger.info("count is {}", count);
		return count;
	}
	
	@Override
	public StudentDTO findById(CommandDTO cmd) {
		return null;
	}

	@Override
	public List<?> findByName(CommandDTO cmd) {
		logger.info("*** MemberSerImpl findByName getSearch? : "+ cmd.getSearch());
		return mapper.selectByName(cmd);
	}

	@Override
	public String modify(MemberDTO bean) {
		return null;
	}

	@Override
	public String remove(CommandDTO cmd) {
		return	null;
	}
	@Override
	public Map<String, Object> login(CommandDTO cmd) {
		Map<String, Object> map = new HashMap<>();
		bean = mapper.login(cmd);
		String page, message="";
		if(bean==null) {
			logger.info("ID가 존재하지 않습니다.");
			page="auth:member/member_add.tiles";
			message="ID가 존재하지 않습니다.";
		}else {
			if(cmd.getAction().equals(bean.getPw())) {
				logger.info("로그인 성공");
				page = "auth:common/main.tiles";
				message="login success";
			}else {
				logger.info("로그인 실패: password 오류");
				page = "auth:common/home.tiles";
				message="login fail";
			}
		}
		//logger.info("디비에다녀온 값: "+bean.getId());
		
		map.put("message", message);
		map.put("page",page);
		map.put("user",bean);
		return map;
	}
}
