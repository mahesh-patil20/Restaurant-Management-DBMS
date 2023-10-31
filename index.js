console.log("Hello Akash and Nikita");
var con = require('./connection');
var express= require('express');
var app= express();
var bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended :true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/landingpage.html');
    // res.sendFile(__dirname+'/landingstyle.css');
});

app.post('/signUp',function(req,res){
    var email=req.body.email;
    var password=req.body.password;

    con.connect(function(error){
        con.query("USE formdata;");
        if(error) throw error;
        var sql="INSERT INTO logindetails(email,password) VALUES(?, ?)";
        con.query(sql,[email,password],function(error,result){
            if(error) throw error;
            res.send("Login Successful"+result.insertId);
        });
    });
});

app.listen(4000);