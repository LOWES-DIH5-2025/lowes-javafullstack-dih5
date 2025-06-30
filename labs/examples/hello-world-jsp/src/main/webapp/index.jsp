<%@page import="java.time.LocalDateTime"%>

<html>
<body>
<h2>Hello World!</h2>
<h3>Current Time: <%= LocalDateTime.now() %> </h3>
<%
   int a = 10;
   int b = 20;
   // out.println("10 + 20 = " + (a + b));
%>

<%= a + b %>
</body>
</html>
