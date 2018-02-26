/**
*Load third party module dependecies
*/
const debug    = require('debug');
const moment   = require('moment');
const mongoose = require('mongoose');
const _        = require('lodash');//lodash can also do the same.check?
const q        = require('q');
/**
*Load lcoal module dependecies
*/
const FaqDal   = require('../dal/faq');
const utils    = require('../lib/utils');
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
/**
*Handle faq responses
**/
  function handleFaqResponse(res,method, doc){
    if(!doc || doc===404) return utils.handleResponse(res,404,doc);
     if(method==="POST") return utils.handleResponse(res,201,doc);
     return utils.handleResponse(res,200,doc);
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
                         .then((faq)=>handleFaqResponse(res,req.method,faq))
                         .catch((err)=>next(err));
                         //TODO:user catch(next)//a short form to propagate errors to error handling
                         //middleware
}

/**
*4. CONTROLLER TO GET ALL FARE DOCUMENTS
*/
function getAllFaqs(req, res, next){
    FaqDal.findAll({})
          .then(faqs=>handleFaqResponse(res,req.method,
            {"toal number of questions":faqs.length,faqs}))
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
           .then((faq)=>handleFaqResponse(res,req.method,faq))
           .catch((error)=>next(error));
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
                            return getFaqsAttributes(req,req.method,faq);
                    })
                  }
                  utils.handleResponse(res,200,response);
             })
              .catch(error=>next(error));
}
/**
*7. CONTROLLER TO UPDATE FARE DOCUMENT INFO
*/
function updateFaq(req,res,next){
  var modifiedAt = new Date();
  req.body.modifiedAt=modifiedAt;
  var faqData= _.pick(req.body,["body","question","modifiedAt"]);

  var updates ={
    "question.description":req.body.question.description,
    modifiedAt:req.body.modifiedAt};

  var query         = {_id:req.params.id};
  var setUpdates    = {$set: updates };
  var updateOptions = {new: true};
  var method =req.method;
FaqDal.update(query,setUpdates,updateOptions)
       .then(updatedfaq =>handleFaqResponse(res,method,
         getFaqsAttributes(req,method,updatedfaq)))
       .catch(error=>next(error));
}

/**
*8. CONTROLLER TO DELETE/REMOVE FARE DOCUMENT
*/
 function deleteFaqById(req,res,next){
  var query= {_id:req.params.id};
  var method=req.method;
   FaqDal.delete(query)
         .then(faq =>handleFaqResponse(res,method,faq))
         .catch(error=>next(error));
}
/**
*9. CONTROLLER TO GET FARE DOCUMENTS BY PAGINATION
*/
function getFaqByPagination(req, res, next){
    debug('GET FAQ COLLECTION BY PAGINATION');
    var query = req.query.query || {};//default query: find all
    var queryParams = req.query;
    var method = req.method;

    FaqDal.paginate(query, queryParams)
              .then(docs=>handleFaqResponse(res,method,docs))
              .catch(error=>next(error));
}

/**
*Return public API
*/
 return {
        create   : createFaq,
        findAll   : getAllFaqs,
        findById  : getFaqById,
        update   : updateFaq,
        delete   : deleteFaqById,
        paginate : getFaqByPagination,
        searchByDesc:searchFaqByDesc
      };

}(FaqDal));
/**
*expose faq controllers
*/
module.exports=FaqControllerModule;
