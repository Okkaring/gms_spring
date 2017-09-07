package com.gms.web.member;

import java.util.*;

import org.springframework.stereotype.Service;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;

@Service
public class MemberServiceImpl implements MemberService{
	public static MemberServiceImpl getInstance() {return new MemberServiceImpl();}
	private MemberServiceImpl(){}
	@SuppressWarnings("unchecked")
	@Override
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
		return null;
	}
	@Override
	public String countMembers(CommandDTO cmd) {
		return null;
	}
	
	@Override
	public StudentDTO findById(CommandDTO cmd) {
		return null;
	}

	@Override
	public List<?> findByName(CommandDTO cmd) {
		System.out.println("*** MemberSerImpl findByName : " + cmd.getSearch());
		return null;
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
	public Map<String, Object> login(MemberDTO bean) {
		Map<String, Object> map = new HashMap<>();
		CommandDTO cmd = new CommandDTO();
		cmd.setSearch(bean.getId());
		MemberDTO m = null;
		String page = (m != null)?(bean.getPw().equals(m.getPw())) ? "main":"login_fail" : "member_join";
		map.put("page",page);
		map.put("user",m);
		return map;
	}
}
