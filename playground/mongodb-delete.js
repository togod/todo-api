const  {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        //return to prevent the rest of the function from excuting
        return   console.log("Unable to connect MongoDb server");
    }
    console.log("Connected to MongoDb server");

    /*********************************
     *        Delete Many
     *********************************/

    // create many todos in mongorob and let us delete them

      // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
      //     console.log(result);
      //
      // });




    /*********************************
     *        Delete one
     *********************************/

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //         console.log(result);
    //
    //    });




    /*********************************
     *      Find one and   Delete
     *********************************/

    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
            console.log(result);

      });



    // db.close();

});

