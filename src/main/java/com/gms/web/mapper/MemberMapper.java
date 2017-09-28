package com.gms.web.mapper;

import java.util.*;

import org.springframework.stereotype.Repository;

import com.gms.web.command.Command;
import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;
@Repository
public interface MemberMapper {
	public int insert(MemberDTO member);			
	public List<?> selectAll(Command cmd);					
	public List<?> selectByName(Command cmd); 
	public StudentDTO selectById(Command cmd);	
	public String count();							
	public int update(MemberDTO bean);
	public int delete(Command cmd);
	public MemberDTO login(Command bean);	
}