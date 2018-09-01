const  {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        //return to prevent the rest of the function from excuting
        return   console.log("Unable to connect MongoDb server");
    }
    console.log("Connected to MongoDb server");


    /*********************************
     Find one and update
     http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#findOneAndUpdate
     *********************************/


    /*********************************
     *
     * Filter By Id
     *
     *********************************/

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5b8a7413e6c511256beb6f2a")

    }, {
        //https://docs.mongodb.com/manual/reference/operator/update/
        $set: {
           completed: true
        }
    },
        {
            returbOriginal: false

        }).then((result) => {
            console.log(result)
    })


    // db.close();

});

