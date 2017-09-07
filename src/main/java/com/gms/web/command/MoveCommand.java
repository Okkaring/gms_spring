package com.gms.web.command;


public class MoveCommand extends CommandDTO{
	public MoveCommand(String dir,String action, String page){
		setDir(dir);
		setAction(action);
		setPage(page);
		process();
	}
}
