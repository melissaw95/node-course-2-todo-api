const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5c3623e18d2106d3f1615bae'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5c3623e18d2106d3f1615bae').then((todo) => {
  console.log(todo);
});
