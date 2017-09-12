package com.gms.web.member;

import java.util.*;

import org.springframework.stereotype.Component;

import com.gms.web.command.CommandDTO;

@Component 
public interface MemberService {
	public String addMember(Map<?,?> map);			
	public List<?> list(CommandDTO cmd);					
	public String count();							
	public StudentDTO findById(CommandDTO cmd);	
	public List<?> findByName(CommandDTO cmd); 
	public String modify(MemberDTO bean);
	public String remove(CommandDTO cmd);		
	public Map<String, Object> login(CommandDTO cmd);
	
}
