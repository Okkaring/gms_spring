package com.gms.web.member;

import java.util.*;

import org.springframework.stereotype.Component;

import com.gms.web.command.CommandDTO;

@Component 
public interface MemberService {
	public int addMember(Map<?,?> map);			
	public List<?> list(CommandDTO cmd);					
	public String count();							
	public StudentDTO findById(CommandDTO cmd);	
	public List<?> findByName(CommandDTO cmd); 
	public int modify(MemberDTO bean);
	public int remove(CommandDTO cmd);		
	public Map<String, Object> login(CommandDTO cmd);
	
}
