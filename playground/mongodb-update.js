// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//findOneAndUpdate
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5c0adc7b7aaa4f95795aa404')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

//update name and increment age
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5c0a9141e10500eb222c6cd1')
}, {
  $set: {
    name: 'Melissa'
  },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  // db.close();
});
