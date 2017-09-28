package com.gms.web.member;

import java.util.*;

import org.springframework.stereotype.Component;

import com.gms.web.command.Command;
import com.gms.web.command.CommandDTO;

@Component 
public interface MemberService {
	public int addMember(Map<?,?> map);			
	public List<?> list(Command cmd);					
	public String count();							
	public StudentDTO findById(Command cmd);	
	public List<?> findByName(Command cmd); 
	public int modify(MemberDTO bean);
	public int remove(Command cmd);		
	public Map<String, Object> login(Command cmd);

	
}
