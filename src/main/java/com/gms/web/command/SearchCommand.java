package com.gms.web.command;

public class SearchCommand extends CommandDTO{
	public SearchCommand(String dir, String action, String page, String pageNumber, String column, String search) {
		setDir(dir);
		setAction(action);
		setPage(page);
		setPageNumber(pageNumber);
		setColumn(column);
		setSearch(search);
		process();
	}
}
