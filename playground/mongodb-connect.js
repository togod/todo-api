// // how to insert data to mongo db server
// const  MongoClient = require('mongodb').MongoClient;
//
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if(err){
//         //return to prevent the rest of the function from excuting
//      return   console.log("Unable to connect MongoDb server");
//     }
//     console.log("Connected to MongoDb server");
//
//     // db.collection('Todos').insertOne({
//     //   text: "Working class hero is something to do",
//     //   completed: false
//     //
//     // }, (err, result) => {
//     //
//     // if(err){
//     //
//     //     return   console.log("Unable to connect MongoDb server" , err);
//     // }
//     //     console.log(JSON.stringify(result.ops , undefined, 2));
//     //
//     //        //ops attribute is going to store all of document that were inserted
//     //        // undefined for the filter function , and 2 for the  indentation
//     //
//     // });
//     // we done with insert, you havw targil below
//
//     //Insert new doc into Users (name, age, location)
//     // db.collection('Users').insertOne({
//     //     nama: "Togod Omer",
//     //     age: 32,
//     //     location: "Sudan Darzagawa"
//     // }, (err, result) => {
//     //     if(err){
//     //         return   console.log("Unable to connect MongoDb server" , err);
//     //     }
//     //                   console.log(JSON.stringify(result.ops, undefined, 2));
//     //
//     // });
//
//
//     /*
//      _id object
//      */
//     // db.collection('Users').insertOne({
//     //     _id: 123,
//     //     nama: "Togod Omer",
//     //     age: 32,
//     //     location: "Sudan Darzagawa"
//     // }, (err, result) => {
//     //     if(err){
//     //         return   console.log("Unable to connect MongoDb server" , err);
//     //     }
//     //     console.log(JSON.stringify(result.ops, undefined, 2));
//     //
//     // });
//
//     /***********************************************
//      time stamp available only when you use obect id
//      we should delet _d from the code
//      ***********************************************/
//
//     // db.collection('Users').insertOne({
//     //     nama: "Togod Omer",
//     //     age: 32,
//     //     location: "Sudan Darzagawa"
//     // }, (err, result) => {
//     //     if(err){
//     //         return   console.log("Unable to connect MongoDb server" , err);
//     //     }
//     //     // result.ops is array of all the document that was inserted
//     //     //we want to access the first element on the array
//     //     // and we want to access the id property
//     //     //console.log(result.ops[0]._id);
//     //     //run you script and see
//     //     // we can call a method in _id property
//     //
//     //     console.log(result.ops[0]._id.getTimestamp());
//     //     //run you script and see
//
//
//
//     });
//
//
//
//
//
//
//     db.close();
//     //client.close();
// });



const  {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        //return to prevent the rest of the function from excuting
        return   console.log("Unable to connect MongoDb server");
    }
    console.log("Connected to MongoDb server");

   db.close();

 });

//run upove code









