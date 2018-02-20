'use strict';
var express = require("express");
var router =express.Router();
/**
*Load all local moduels required for this program file
**/
var Question= require("../models/qa");

//try to use param http method in your capstone project
//so that you can make your code clean and readable and less code
router.param("qID", function(req, res,next,
Question.findById(id, function(err,doc) {
  if(err) next(err);// of error return  the error to the next middleware
 //if no doc exists return not found error the the next middleware
    if(!doc){
    err = new Error("Not Found");
    err.status=404;
    return next(err);
  }
  //assign objects to the request object so that you can get them
  //on the next middleware chains
  req.question= doc;
  return next() ;
});

router.param("aID", function(req, res , next, id){
   //param object has id method to use for mongoose schema
    req.answer=req.question.answers.id(id) ;
    if(!req.answer){
    err= new Error("Not found");
    err.status=404;
    return next(err);
    }
//if there is answer object continue to the next middleware
next();
}

// GET /questions
// Route for questions collection
router.get('/', function( req,res, next){
Question.find({})
        .sort({createdAt:-1})
        .exec(function(err, questions){
        //if error send it to the next middleware
        if(err) return next(err);
        //else if no errorr send back the question object to the user
        return res.json(questions);
});

function myMiddleware(req, res, next){
    if(req.params.dir.search(/^(up|down/)$/)===-1 ){
    var err = new Error("Not Found")
    err.status=404;
    next(err);
  } else{
    req.vote=req.params.dir;
    next();
}
// POST /questions/:qID/answers/ :aID vote up
// POST /questions/:qID/answers/ :aID vote down
// Vote on a specific answer
router. post ("/:qID/answers/:dir", myMiddleware,
function(req, res,next){
req.answer.vote(req.vote, function(err, question){
if(err)  return next(err);
res.json(question);});
});

module.exports=router;
