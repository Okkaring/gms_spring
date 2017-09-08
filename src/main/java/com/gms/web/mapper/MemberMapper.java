package com.gms.web.mapper;

import java.util.*;

import org.springframework.stereotype.Repository;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;
@Repository
public interface MemberMapper {
		public String insert(Map<?,?> map);			
		public List<?> selectAll(CommandDTO cmd);					
		public String countMembers(CommandDTO cmd);							
		public StudentDTO selectById(CommandDTO cmd);	
		public List<?> selectByName(CommandDTO cmd); 
		public String update(MemberDTO bean);
		public String delete(CommandDTO cmd);
		public MemberDTO login(CommandDTO cmd);	

}