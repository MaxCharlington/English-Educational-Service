const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'englishApp';
let db;

MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    db = client.db(dbName);
    client.close();
});

function GetLectures() {

};

function AddResult(result) {
    db.collection('results').insert(result);
};

module.export({});