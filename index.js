const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
//const session = require('express-session');

app.use(cookieParser());
//app.use(session({secret:"zzdxcbnm"}));

app.get('/cookie_test',function(req,res){
	res.cookie("username","vidhi vaghasiya");
	res.send('Cookie Sent....');
});

app.get('/cookie_check',function(req,res){
	res.send('Value:'+ req.cookies.username);
});

app.get('/cookie_clear',function(req,res){
	res.clearCookie('username')
	res.send('Value:' + req.cookies.username);
});

// app.get('/session_test',function(req,res){
// 	if(req.session.count){
// 		req.session.count++;
// 		res.send("Count:" + req.session.count);
// 	}
// 	else
// 	{
// 		req.session.count = 1;
// 		res.send("Welcome First Time" + req.session.count);
// 	}
// })

app.listen(3000);