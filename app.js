const express = require ('express')
const qpp = express()
const port = 8080

app.get('/',(req, res) => res.send ('Helo world'))

app.listen(port, ()=> console.log(` Example app listening at http://localhost:${port}`))
const someModule = require('some-module');

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
var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.write('File uploaded');
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);

const myLocalModule = require('./path/to/myLocalModule');

