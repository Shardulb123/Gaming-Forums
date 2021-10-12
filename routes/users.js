// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;


let mongoose =  require('mongoose');

mongoose.connect('mongodb+srv://Sharduldbbackend:Backend75db@mytasker.xohcp.mongodb.net/GamingForum?retryWrites=true&w=majority')
.then(function(err){
  console.log('Database Connected')
})
.catch(function(err){
  console.log(e)
})

let UserSchema = mongoose.Schema({
  GameName : String,
  review : String
})


module.exports = mongoose.model('users', UserSchema)


