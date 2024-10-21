var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});
exports.con = con;

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});
exports.con = con;

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});
exports.con = con;

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});
exports.con = con;

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});
exports.con = con;

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});
exports.con = con;

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});
exports.con = con;

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

var mysql = require('mysql');

var con = mysql. createConnection({
  host: "localhost",
  user : "yourusername",
  password :"yourpassword",
  database:"mydb"
});
exports.con = con;

con.connect(function(err){
  if (err) throw err;
  var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  con.query (sql, function (er, result ){
    if (err) throw err;
    console.log ("Nunmber of records deleted: " + result.afectedRows);
  });
});


var mysql = require ('mysql');

var con = mysql.createConnection({
  host :" localhost",
  user :"yourusername",
  password:"yourpassword",
  database : "mydb"
});
exports.con = con;

con.connect (function(err){
  if(err)throw err
  var sql = " DROP TABLE customers";
  con.query (sql , function( err , result ){
    if (err) throw err;
    console.log ("table deleted");
  });
});

var mysql = require ('mysql')

var con = mysql.createConnection({
  host : "localhost",
  user : " yourusername",
  password:"yourpassword",
  database:"mydb"
});
exports.con = con;
con.connect(function(err){
  if (err) throw err
  var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});

var mysql = require ('mysql')

var con = mysql.createConnection({
  host:'localhoot',
  user: 'yourusername',
  password:'yourpassword',
  database :'mydb'
});
exports.con = con;

con.connect(function(err){
  if (err) throw err ;
  var sql = "SEELECT * FROM customers LIMIT5  5";
  con.query(sql , function (err , result){
    if (err) throw err;
    console.log ( sesult);
  });
});


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});
exports.con = con;

