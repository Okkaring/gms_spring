package com.gms.web.constant;

public class SQL {	
	public static final String MEMBER_INSERT = String.format("INSERT INTO %s(%s,%s,%s,%s,%s,%s,%s,%s) VALUES(?,?,?,?,?,?,?,NOW())",DB.TABLE_MEMBER,DB.MEMBER_ID,DB.MEMBER_PW,DB.MEMBER_SSN,DB.MEMBER_NAME,DB.MEMBER_PHONE,DB.MEMBER_EMAIL,DB.MEMBER_PRIFILE,DB.MEMBER_REGDATE);
	public static final String MEMBER_LIST=String.format("SELECT * FROM %s",DB.TABLE_MEMBER);
	public static final String MEMBER_FINDBYNAME=String.format("SELECT * FROM %s WHERE %s =?",DB.TABLE_MEMBER,DB.MEMBER_NAME);
	public static final String MEMBER_FINDBYID=String.format("SELECT * FROM %s WHERE %s=?", DB.TABLE_MEMBER,DB.MEMBER_ID);
	public static final String COUNT_MEMBERS=String.format("SELECT COUNT(*) AS %s FROM %s","count",DB.TABLE_MEMBER);
	
	
	public static final String MEMBER_UPDATE=String.format("UPDATE %s SET %s=? WHERE %s=?", DB.TABLE_MEMBER,DB.MEMBER_PW,DB.MEMBER_ID);
	public static final String MEMBER_DELETE=String.format("DELETE FROM %s WHERE %s=?", DB.TABLE_MEMBER,DB.MEMBER_ID);
	
	public static final String BOARD_WRITE =String.format("INSERT INTO %s(%s,%s,%s,%s,%s,%s) VALUES(article_seq.nextval,?,?,?,0,SYSDATE)",DB.TABLE_BOARD,DB.BOARD_ARTICLE_SEQ,DB.BOARD_ID,DB.TITLE,DB.BOARD_CONTENT,DB.BOARD_HITCOUNT,DB.BOARD_REGDATE);
	public static final String BOARD_LIST=String.format("SELECT * FROM %s", DB.TABLE_BOARD);
	public static final String COUNT_BOARDS= String.format("SELECT COUNT(*) AS %s FROM %s" ,"count", DB.TABLE_BOARD);
	public static final String BOARD_FINDBYID=String.format("SELECT * FROM %s WHERE %s=?",DB.TABLE_BOARD,DB.ID);
	public static final String BOARD_FINDBYSEQ =String.format("SELECT * FROM %s WHERE %s =?",DB.TABLE_BOARD,DB.BOARD_ARTICLE_SEQ);
	public static final String BOARD_UPDATE = String.format("UPDATE %s SET %s=?, %s=? WHERE %s=?",DB.TABLE_BOARD,DB.TITLE,DB.BOARD_CONTENT,DB.BOARD_ARTICLE_SEQ);
	public static final String BOARD_DELETE = String.format("DELETE FROM %s WHERE %s=?",DB.TABLE_BOARD,DB.BOARD_ARTICLE_SEQ);
	
	public static final String INSERT_MAJOR = String.format("INSERT INTO %s(%s,%s,%s,%s) VALUES(?,?,?,?)",DB.TABLE_MAJOR,DB.MAJOR_ID,DB.TITLE,DB.SUBJ_ID,DB.MEMBER_ID);
	
	public static final String STUDENT_LIST="select t.* from (select rownum rnum, s.* from student s)t where t.rnum between ? and ?";
   	//public static final String COUNT_STUDENT="SELECT COUNT(*)AS count FROM student";
	//public static final String COUNT_STUDENT="SELECT ? AS count FROM student";
	public static final String STUDENT_COUNT = "SELECT COUNT(*) as count FROM Student WHERE name like ? ";
	public static final String STUDENT_FINDBYID =String.format("SELECT * FROM %s WHERE id like ?", DB.TABLE_STUDENT);
   
	public static final String STUDENT_SEARCH="select t2.* from(select rownum seq, t.* from (select * from student where name like '%' ||?|| '%' order by num desc)t)t2 where t2.seq between 1 and 5";
  
}