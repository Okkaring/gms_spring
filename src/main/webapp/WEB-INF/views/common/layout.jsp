<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8" />
   <title>Document</title>
</head>
<body>
   <header>
      <div id="header">
         <tiles:insertAttribute name="header" />
      </div>
   </header>
   <section>
      <article id="content">
         <tiles:insertAttribute name="content" />
      </article>
   </section>
   <footer>
      <div id="footer">
         <tiles:insertAttribute name="footer" />
      </div>
   </footer>
</body>
</html>