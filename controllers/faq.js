/**
*Load module dependecies
*/
const debug    = require('debug');
const moment   = require('moment');
const mongoose = require('mongoose');
const _        = require('lodash');//lodash can also do the same.check?
const q        = require('q');

const FaqDal   = require('../dal/faq');
const utils    = require('../lib/utils');


var customError = {
    status : 500,
    type : "FARE_ERROR",
    message:""
}

//create global faq object and attach any required fields to it
//then export the object to expose its feature from other source Profile

var FaqControllerModule = (function (FaqDal) {
  'use strict';
  //private members
  var _validateUserFaqInput = (req, res,next)=>{
    req.checkBody('question','Description for your question is required').notEmpty();
      var errors = req.validationErrors();
      if(errors){
        showMsg(errors);
       return res.status(400).json(errors);
       }

  }

  var getFaqsAttributes=(req,method,faq)=>{
    if(!faq) return {};
    try{
      var url = req.protocol +'://'+ req.hostname+ req.originalUrl;
      var questionCreatedAt  = moment(faq.question.createdAt).format("DD-MMM-YYYY hh:mm A");
      var answerCreatedAt = moment(faq.answer.createdAt).format("DD-MMM-YYYY hh:mm A");
    // var user       = faq.userId;
       return  {
                 _id : faq._id,
                question : {
                  askedBy     : faq.question.askedBy,//user should be admin
                  description : faq.question.description,
                  dateAsked   : questionCreatedAt
                },
                answer     : {
                   answerdBy    : faq.answer.answerdBy,
                   description  : faq.answer.description,
                   dateAnswerd  : answerCreatedAt
                },
                request: {method,url}
              };
        } catch(err){
          console.log("Something went wrong",err)
        }

  }
/**
*1. CONTROLLER TO CREATE FARE DOCUMENT
*/
function createFaq (req, res, next){

        var body = req.body;
            body.question.askedBy = req.user._id;
            console.log(req.user._id)
            //also assign the user who answerd the question
            // if(body.answer.answerdBy)
            //  body.answer.answerdBy = req.user._id;

        //pick only the required attributes from the body
        //body = _.pick(req.body,["question","answer","answerdBy","askedBy"]);

          _validateUserFaqInput(req, res, next);
        //validate source and destination id
                   FaqDal.create(body)
                         .then((faq)=> {
                              if(!faq) return utils.handleResponse(res,404,faq);
                              utils.handleResponse(res,201,faq);
                         })
                         .catch((err)=>next(err));
                         //TODO:user catch(next)//a short form to propagate errors to error handling
                         //middleware
}

/**
*4. CONTROLLER TO GET ALL FARE DOCUMENTS
*/
function getAllFaqs(req, res, next){
    FaqDal.findAll({})
          .then(faqs=>{
              res.send(faqs);
          })
          .catch(err => { res.status(500).send(err);
          });
}
/**
*5. CONTROLLER TO GET FARE DOCUMENT BY ID
*/
function getFaqById(req, res, next){
      var faqId = req.params.id.trim();
      //chech if faq ObjectId is valid or not
      var validObjectId=mongoose.Types.ObjectId.isValid(faqId);

   if(validObjectId){
    FaqDal.findById(faqId)
           .then((faq)=>{
               if(!faq) return utils.handleResponse(res,404,faq);
               faq =getFaqsAttributes(req,"GET",faq);
               utils.handleResponse(res,200,faq);
           })
           .catch((err)=>next(err));
      }else{
        res.status(400).json({"error":"Invalid Object Id"});
      }
}
/**
*6. CONTROLLER TO SEARCH FARE DOCUMENT BY ???
*/
function searchFaqByDesc  (req, res, next){
   var desc = req.params.desc.trim().toLowerCase();
       FaqDal.searchByDesc(desc)
             .then((faqs)=>{
                  if(faqs===404)
                  return utils.handleResponse(res,404,faqs);
                  var response = {
                    faqCount:faqs.legnth,
                    faqs   : faqs.map((faq)=>{
                            return getFaqsAttributes(req,"GET",faq);
                    })
                  }
                  //return res.status(200).json(response});
                  utils.handleResponse(res,200,response);

                  utils.handleResponse(res,200,getFaqsAttributes(req,"GET",faqs));
             },(error)=>{
               next(error);
             })
}
/**
*7. CONTROLLER TO UPDATE FARE DOCUMENT INFO
*/
function updateFaq(req,res){
  var modifiedAt = new Date();
  req.body.modifiedAt=modifiedAt;
  var faqData= _.pick(req.body,["body","question","modifiedAt"]);
  console.log("faqData", faqData)
  var updates ={
    "question.description":req.body.question.description,
    modifiedAt:req.body.modifiedAt};

  var query         = {_id:req.params.id};
  var setUpdates    = {$set: updates };
  var updateOptions = {new: true};

  FaqDal.update(query,setUpdates,updateOptions)
         .then(updatedfaq => {
           //no content found
           if(!updatedfaq)
           //use 204 instead of 404 for update operation if the document to be updates
           //didn't exist
           return res.status(404).send({"Message": "No content found to update"});
           res.send(getFaqsAttributes(req,"PUT",updatedfaq));
         }, function(err){
           res.status(500).json(err);
         })
}

/**
*8. CONTROLLER TO DELETE/REMOVE FARE DOCUMENT
*/
function deleteFaq (req, res, next){
    var faqId = req.params.id;

    FaqDal.delete({_id: faqId}, function(err, faq){
        if(err){
            customError.type = 'DELETE_FARE_ERROR';
            customError.status=404;
            return handleError(res, err, customError);
        }
        res.json(faq || {});
        if(!faq)
        res.status(404).json({"message":"No faq found with id " +faqId});

    })
}
/**
*9. CONTROLLER TO GET FARE DOCUMENTS BY PAGINATION
*/
function getFaqByPagination(req, res, next){
    debug('GET FAQ COLLECTION BY PAGINATION');
    var query = req.query.query || {};//default query: find all
    var queryParams = req.query;

    FaqDal.paginate(query, queryParams)
              .then(function(docs){
                  if(docs)
                  return utils.handleResponse(res,200,docs)
                  utils.handleResponse(res,404,{});
              })
              .catch(error=>{
                  next(error);
              });
}

/**
*Return public API
*/
 return {
        create   : createFaq,
        findAll   : getAllFaqs,
        findById  : getFaqById,
        update   : updateFaq,
        delete   : deleteFaq,
        paginate : getFaqByPagination,
        searchByDesc:searchFaqByDesc
      };

}(FaqDal));
/**
*expose faq controllers
*/
module.exports=FaqControllerModule;
