var mongo = require('mongodb')
var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb ";

MongoClient.connect(url, function(err,db){
    if (err) throw err ;
    console.log ("Database created!");
    db.closse();
});


var MongoClient = require ('mongodb').MongoClient
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers",function(err,res){
        console.log("Collection created!");
        db.close
    });
});


var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = {name:"Company Inc",address: "Highway 37"};
    dbo.createCollection("customers").insertOne(myobj,function(err,res){
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});



var MongoClient = require ('mongodb').MongoClient
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err,db) {
    if (err) throw err ;
    var dbo = db.db ("mydb");
    dbo.createCollection("customers").findOne({},function(err,result){
        if(err) throw err;
        cpnsole.log (result.name);
        db.close();
    });
});


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: "Park Lane 38" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect (url, function(err,db){
    if (err) throw err;
    var dbo = db.db("mydb");
    var mysort = {name: 1};
    dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
     });
 });


 var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/";
 
 MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("mydb");
   var myquery = { address: 'Mountain 21' };
   dbo.collection("customers").deleteOne(myquery, function(err, obj) {
     if (err) throw err;
     console.log("1 document deleted");
     db.close();
   });
 });



 var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/";
 
 MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("mydb");
   dbo.collection("customers").drop(function(err, delOK) {
     if (err) throw err;
     if (delOK) console.log("Collection deleted");
     db.close();
   });
 });



 var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: "Valley 345" };
  var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find().limit(5).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});