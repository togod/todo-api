/*********************************
 How to Fetching all Data
 *********************************/


// const  {MongoClient, ObjectID} = require('mongodb');
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if(err){
//         //return to prevent the rest of the function from excuting
//         return   console.log("Unable to connect MongoDb server");
//     }
//     console.log("Connected to MongoDb server");
//
//     db.collection('Todos').find().toArray().then((docs) => {
//
//         console.log("Todos");
//         console.log(JSON.stringify(docs, undefined, 2));
//
//
//
//     },(err) => {
//
//         console.log("Unable to fetch Todos", err)
//     });
//
//     // db.close();
//
// });


// /*********************************
//  How to Fetching Data based on certain values 'have completed status false'
//  *********************************/
//
//
// const  {MongoClient, ObjectID} = require('mongodb');
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if(err){
//         //return to prevent the rest of the function from excuting
//         return   console.log("Unable to connect MongoDb server");
//     }
//     console.log("Connected to MongoDb server");
//
//     db.collection('Todos').find({completed: false}).toArray().then((docs) => {
//
//         console.log("Todos");
//         console.log(JSON.stringify(docs, undefined, 2));
//
//
//
//     },(err) => {
//
//         console.log("Unable to fetch Todos", err)
//     });
//
//     // db.close();
//
// });





// /*********************************
//  How to Fetching Data by ID'
//  *********************************/
//
//
// const  {MongoClient, ObjectID} = require('mongodb');
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if(err){
//         //return to prevent the rest of the function from excuting
//         return   console.log("Unable to connect MongoDb server");
//     }
//     console.log("Connected to MongoDb server");
//
//     db.collection('Todos').find({
//
//         _id: new ObjectID('5b8a4578e3e51e0c85b51a12')
//         // copy id from terminal
//
//
//
//     }).toArray().then((docs) => {
//
//         console.log("Todos");
//         console.log(JSON.stringify(docs, undefined, 2));
//
//
//
//     },(err) => {
//
//         console.log("Unable to fetch Todos", err)
//     });
//
//     // db.close();
//
// });



/*********************************
 How to Fetching Data by ID anaothe id
 *********************************/


// const  {MongoClient, ObjectID} = require('mongodb');
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if(err){
//         //return to prevent the rest of the function from excuting
//         return   console.log("Unable to connect MongoDb server");
//     }
//     console.log("Connected to MongoDb server");
//
//     db.collection('Todos').find({
//
//         _id: new ObjectID('5b8a5a8be6c511256beb67f1')
//         // copy id from terminal
//
//
//
//     }).toArray().then((docs) => {
//
//         console.log("Todos");
//         console.log(JSON.stringify(docs, undefined, 2));
//
//
//
//     },(err) => {
//
//         console.log("Unable to fetch Todos", err)
//     });
//
//     // db.close();
//
// });


/*********************************
 * count up all of the Todos
 http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#count
 *********************************/



const  {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        //return to prevent the rest of the function from excuting
        return   console.log("Unable to connect MongoDb server");
    }

    // db.close();

});






