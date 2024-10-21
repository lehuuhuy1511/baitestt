//var http = require('http');

//http.createServer(function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.end('Hello World!');
//}).listen(8080);

//var http = require('http');
//http.createServer(function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/html'});
  //res.end('Hello World!');
//}).listen(8080);



//var http = require('http');
//var dt = require('./myfirstmodule');

//http.createServer(function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/html'});
  //res.write("The date and time are currently: " + dt.myDateTime());
  //res.end();
//}).listen(8080);



//var http = require('http');
//var formidable = require('formidable');

//http.createServer(function (req, res) {
  //if (req.url == '/fileupload') {
    //var form = new formidable.IncomingForm();
    //form.parse(req, function (err, fields, files) {
      //res.write('File uploaded');
      //res.end();
    //});
  //} else {
    //{res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    //res.write('<input type="file" name="filetoupload"><br>');
    //res.write('<input type="submit">');
    //res.write('</form>');
    //return res.end();
  //}
//}).listen(8080);
//var http = require('http');
//var formidable = require('formidable');

//http.createServer(function (req, res) {
  //if (req.url == '/fileupload') {
    //var form = new formidable.IncomingForm();
    //form.parse(req, function (err, fields, files) {
      //res.write('File uploaded');
      //res.end();
    //});
  //} else {
    //res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    //res.write('<input type="file" name="filetoupload"><br>');
    //res.write('<input type="submit">');
    //res.write('</form>');
    //return res.end();
  //}
//}).listen(8080);
//var nodemailer = require ('nodemailer');
//var transporter = nodemailer.createTransport({
  //  service :'gmail',
  //  auth:{
    //    user: ' youremail@gmail.com',
    //    pass: 'yoyrpassword'
    //}
//})
  

var mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhoost",
  user:"yourusername",
  password: "yourqassword",
});

con.connect(function(err){
  if (err) throw err;
  console.log("conneected!");
  con.query ("CREATE DATABASE mysql", function (err,result){
    if (err) throw err ; 
    console.log (" Database created"); 
  })
});



var mysql = require('mýql');
var con = mysql.createCommection({
  host: "localhost",
  user :"yourusername",
  password:" yourpassword"
});
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

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
