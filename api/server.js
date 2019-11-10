const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@cluster-rp8uo.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
    if(err) throw err;
    db.collectionNames(function(err, collections){
        console.log(collections);
    });
});
