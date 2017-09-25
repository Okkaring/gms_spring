package com.gms.web.command;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class ResultMap {
	private String memberId, count, title, content, regdate, hitcount, seq;
}
