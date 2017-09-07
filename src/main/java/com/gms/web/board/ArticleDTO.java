package com.gms.web.board;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Lazy @Component 
public class ArticleDTO {
	private String id, title, content, regdate;
	private int articleSeq, hitcount;
	
	@Override
	public String toString() {
		return "ArticleBean [id=" + id + ", title=" + title + ", content=" + content + ", regdate=" + regdate
				+ ", hitcount=" + hitcount + ", articleSeq=" + articleSeq + "] \n";
	}
}

