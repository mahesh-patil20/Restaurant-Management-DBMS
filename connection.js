var mysql=require('mysql');

var con=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"Mahesh@202003",
        database:"formdata"
    }
);

module.exports=con;