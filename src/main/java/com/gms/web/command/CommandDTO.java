package com.gms.web.command;

import lombok.Data;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.constant.*;

@Data @Lazy @Component
public class CommandDTO implements Commandable{
	
	protected String action, pageNumber, view, dir, page, startRow, endRow, column, search;
	
	public void setPageNumber(String pageNumber) {
		this.pageNumber = (pageNumber==null)? "1" : pageNumber;
		System.out.println("*** Command/pageNumber : " + pageNumber);
	}
	public void setAction(String action) {
		this.action = (action==null)? "move" : action;
		System.out.println("*** Command/action : " + action);
	}

	@Override
	public void process() {
		this.view = (dir.equals("home"))? "/WEB-INF/view/common/home.jsp" : Path.VIEW + dir + Path.SEPARATOR + page + Extension.JSP;
		System.out.println("*** Command/process()/이동 페이지 : " + view);
		System.out.println("*** Command/page : " + page);
	}
	@Override
	public String toString() {
		return "Command [DEST ="+ dir + "/" + page + ".jsp" + ",ACTION=" + action + "]";
	}

}
