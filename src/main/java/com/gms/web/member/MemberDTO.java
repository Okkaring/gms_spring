package com.gms.web.member;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Lazy @Component
public class MemberDTO{
		private String id, pw, ssn, name,phone, email, major, profile,regdate;
}