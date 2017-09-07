package com.gms.web.proxy;

import java.util.*;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;

import lombok.*;

@Component 
public class PageProxy extends Proxy{
	@Getter @Setter protected int
		pageSize, blockSize, theNumberOfRows, pageNumber;
	
	public PageProxy(HttpServletRequest request){
		super(request);
	}
	public void execute(int[] arr, List<?>list) {
		super.getRequest().setAttribute("pageNumber",arr[0]);
		super.getRequest().setAttribute("theNumberOfPages",arr[1]);
		super.getRequest().setAttribute("startPage",arr[2]);
		super.getRequest().setAttribute("endPage",arr[3]);
		super.getRequest().setAttribute("prevBlock",arr[4]);
		super.getRequest().setAttribute("nextBlock",arr[5]);
		super.getRequest().setAttribute("list",list);
	}
}
