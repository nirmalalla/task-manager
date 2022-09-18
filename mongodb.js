//CRUD: Create Read Update Delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.objectID;

const {MongoClient, ObjectID} = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error){
        return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // db.collection("users").deleteMany({
    //     age: 18
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    db.collection("users").deleteOne({
        name: "Vikram"
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
});