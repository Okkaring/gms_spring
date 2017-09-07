package com.gms.web.member;

import java.util.*;

import org.springframework.stereotype.Repository;

import com.gms.web.command.CommandDTO;
@Repository
public interface MemberDAO {
		public String insert(Map<?,?> map);			
		public List<?> selectAll(CommandDTO cmd);					
		public String countMembers(CommandDTO cmd);							
		public StudentDTO selectById(CommandDTO cmd);	
		public List<?> selectByName(CommandDTO cmd); 
		public String update(MemberDTO bean);
		public String delete(CommandDTO cmd);
		public MemberDTO login(CommandDTO cmd);	

}