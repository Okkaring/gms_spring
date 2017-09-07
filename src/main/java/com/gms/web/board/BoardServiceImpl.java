package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class BoardServiceImpl implements BoardService{
	public static BoardServiceImpl getInstance() {
		return new BoardServiceImpl();
		}
	
	private BoardServiceImpl() {}

	@Override
	public String write(ArticleDTO bean) {
		return null;
	}

	@Override
	public List<ArticleDTO> list() {
		return null;
	}
	
	@Override
	public String count() {
		return null;
	}
	
	@Override
	public List<ArticleDTO> findByid(String id) {
		return null;
	}

	@Override
	public ArticleDTO findBySeq(String seq) {
		return null;
	}

	@Override
	public String modify(ArticleDTO bean) {
		return null;
	}

	@Override
	public String remove(String seq) {
		return null;
	}

}
