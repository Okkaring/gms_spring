--*********************************
--2017/08/02
--[1] MEMBER_TAB
--[2] SUBJECT_TAB
--[3] MAJOR_TAB
--[4] PROF_TAB
--[5] STUDENT_TAB
--[6] GRADE_TAB
--[7] BOARD_TAB
--*********************************
SHOW TABLES;
--*********************************
--[1] MEMBER_TAB
--2017/08/02
--회원관리 테이블
--member_id,name,pw,ssn,regdate,
--phone,email,major_id,profile
--*********************************
CREATE TABLE
	Member
(
	member_id VARCHAR(10), 
	pw VARCHAR(10), 
	ssn VARCHAR(15),
	name VARCHAR(20),
	regdate DATETIME DEFAULT CURRENT_TIMESTAMP,
	phone VARCHAR(20),
	email VARCHAR(20),
	profile VARCHAR(20),
	PRIMARY KEY(member_id)
);
--DROP TABLE Member;
INSERT INTO 
	Member
(
	member_id,name,
	pw,ssn,regdate,
	phone,email,profile
)
VALUES(
	'ko','고승경',
	'1','700215-1821305',NOW(),
	'010-1234-5678','ko@test.com','ko.jpg'
);

--SELECT COUNT(*) AS count FROM Member;
--SELECT * FROM Member;
	
--UPDATE Member SET profile='ko.jpg' WHERE member_id='ko';

--*********************************
--[2] SUBJECT_TAB
--2017/08/02
--과목관리 테이블
--subj_id,title, major_id
--*********************************
CREATE TABLE
	Subject
(
	subj_id VARCHAR(10),
	title VARCHAR(10),
	PRIMARY KEY(subj_id)
);

--*********************************
--[3] MAJOR_TAB
--2017/08/02
--전공관리 테이블
--major_id, title
--*********************************
CREATE TABLE 
	major
(
   major_id VARCHAR(10),
   title VARCHAR(10),
   subj_id VARCHAR(10),
   member_id VARCHAR(10),
   PRIMARY KEY(major_id)
);
--DROP TABLE Major;
--SELECT * FROM Major;
--INSERT INTO Major VALUES('major_id', 'title', 'subj_id','member_id');

--*********************************
--[4] PROF_TAB
--2017/08/02
--교수관리 테이블
--member_id,salary
--*********************************
CREATE TABLE 
	Prof
(
	member_id VARCHAR(10),
	salary VARCHAR(10),
	PRIMARY KEY(member_id)
);
--DROP TABLE Prof;
--INSERT INTO PROF(MEMBER_ID,SALARY) VALUES('gogh','1000');

--*********************************
--[6] GRADE_TAB
--2017/08/02
--성적관리 테이블
--grade_seq, score, exam_date, subj_id, member_id
--*********************************
CREATE TABLE
	Grade
(
	grade_seq INT NOT NULL AUTO_INCREMENT,
	score VARCHAR(3),
	exam_date VARCHAR(12),
	subj_id VARCHAR(10),
	member_id VARCHAR(10),
	PRIMARY KEY(grade_seq)
);


--*********************************
--[7] BOARD_TAB
--2017/08/02
--게시물관리 테이블
--article_seq, id, title, content, hitcount, regdate
--*********************************
CREATE TABLE
	Board
(
	article_seq INT NOT NULL AUTO_INCREMENT,
	id VARCHAR(10),
	title VARCHAR(20),
	content VARCHAR(100),
	hitcount INT,
	regdate	DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(article_seq)
);
DROP TABLE Board;
SELECT * FROM Board;
INSERT INTO
	Board
(
	id, title, 
	content,hitcount, regdate
)
VALUES 
(
	'kim', '김길동',
	'고동을 청춘의 무엇을 창공에 그들은 그리하였는가?', 0,NOW()
);


