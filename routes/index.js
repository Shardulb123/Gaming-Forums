var express = require('express');
var router = express.Router();
var UserModel = require('./users');
var data;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/post', function(req, res, next){
  res.render('post')
});

router.post('/submit', function(req, res){
  UserModel.create({
    GameName: req.body.gamename,
    review : req.body.review
  })
  .then(function(a){
    res.render('index')
  });
});


router.get('/reviews', function(req, res, next){
  UserModel.find()
  .then(function(data){
    res.render('reviews', {data});
  })
});

router.get('/update/:id', function(req, res){
  UserModel.findOne({id: req.params.id})
  .then(function(game){
    res.render('update', {game})
  })
});

router.post('/update/:id', function(req, res){
  let updated = {
    GameName : req.body.gamename,
    review : req.body.review
  }
  UserModel.findOneAndUpdate({_id:req.params.id}, {'$set': updated }, {require:true})
  .then(function(updatedData){
    res.redirect('/reviews')
  })
});

router.get('/delete/:id', function(req, res){
  UserModel.findOneAndDelete({_id: req.params.id})
  .then(function(a){
    res.redirect('/reviews')
  })
});


module.exports = router;

