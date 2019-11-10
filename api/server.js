const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@cluster-rp8uo.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        console.error(err);
        return
    }
    const db = client.db('test');
    const collection = db.collection('authors');

    collection.find().toArray((err, items) => {
        console.log(items);
    })
});
