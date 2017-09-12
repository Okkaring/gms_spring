package com.gms.web.proxy;

import java.util.*;

import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import lombok.*;

@Data @Component 
public class PageProxy{
	private int
		pageSize, blockSize, theNumberOfRows, pageNumber;

	public void execute(Model model,int[] arr, List<?>list) {
		model.addAttribute("pageNumber",arr[0]);
		model.addAttribute("theNumberOfPages",arr[1]);
		model.addAttribute("startPage",arr[2]);
		model.addAttribute("endPage",arr[3]);
		model.addAttribute("prevBlock",arr[4]);
		model.addAttribute("nextBlock",arr[5]);
		model.addAttribute("list",list);
	}
}
