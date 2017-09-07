package com.gms.web.util;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;

import com.gms.web.command.CommandDTO;
import com.gms.web.complex.CommandFactory;
@Component 
public class Separator {
	public static CommandDTO cmd = new CommandDTO();
	
	public static void init(HttpServletRequest request){
		String servletPath = request.getServletPath();
		System.out.println("*** Seperator / init() /servletPath : " + servletPath );
		
		cmd = CommandFactory.createCommand( servletPath.substring(1,servletPath.indexOf(".")),
											request.getParameter("action"),
											request.getParameter("page"),
											request.getParameter("pageNumber"),
											request.getParameter("column"),
											request.getParameter("search"));
	}
}
