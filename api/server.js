var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@cluster-rp8uo.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

var db;

MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        console.error(err);
        return
    }
    db = client.db('test');

    app.listen(3000, function () {
        console.log('listening on 3000');
    });
});

app.post('/users', function (req, res) {
    db.collection('authors').insertMany(req.body, (err, result) => {
        if (err) return console.log(err);

        db.collection('authors').find().toArray((err, items) => {
            console.log(items);
        })
    });
    res.end();
});
