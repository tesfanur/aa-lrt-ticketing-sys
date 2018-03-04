/**
 *Load module dependecies
 */
const _ = require('lodash');
const q = require('q');
const debug = require('debug')('api:faq-dal');
const moment = require('moment');
/**
 *Load custom module dependecies
 */
const FaqModel = require('../models/faq');
const logMsg = require('../lib/utils').showMsg;

const FaqDal = (function(FaqModel) {
  'use strict';
  /**
   *1. Create Faq DATA ACCESS LAYER
   *TODO: check if similar questions are already created
   */
  function createFaq(data) {
    debug('CREATING A NEW FARE');

    var defferd = q.defer();
    //save faq info
    let faq = new FaqModel(data);
    faq.save()
      .then(faqData => {
        defferd.resolve(faqData);
      })
      .catch(err => {
        defferd.reject(err);
      });
    return defferd.promise;

  }
  /**
   *2. DATA ACCESS LAYER to gelt all Faq documents
   */
  function getAllFaqs(query) {
    debug('GETTING ALL FARE COLLECTION');
    var defferd = q.defer();
    FaqModel.find(query)
      .sort({
        createdAt: -1
      })
      .exec()
      .then(faqs => {
        if (faqs) return defferd.resolve(faqs);
        defferd.resolve("No faqs document available");
      })
      .catch((err) => {
        defferd.reject(err)
      });
    return defferd.promise;

  }
  /**
   *3. DATA ACCESS LAYER to searcj Faq document by Description
   */
  function searchFaqByDescription(desc) {
    var filterdFaqs = [];
    return new Promise((resolve, reject) => {
      // FaqModel.findOne({"question.description":desc})
      FaqModel.find({})
        .populate("question.askedBy")
        .populate("answer.answerdBy")
        .exec()
        .then(function(result) {
          //if not faq found return 404
          if (result === 404) return resolve(404);
          filterdFaqs = _.filter(result, faq => {
            return faq.question
              .description
              .toLowerCase()
              .indexOf(desc) > -1;
          })
          if (filterdFaqs.length === 0) return resolve(404);
          resolve(filterdFaqs);
        }, function(err) {
          reject(err)
        })
    });
  }

  /**
   *4. DATA ACCESS LAYER to Get Faq document by Id
   */
  function getFaqById(id) {
    debug('GETTING FAQ', id)

    return new Promise((resolve, reject) => {
      FaqModel.findById(id)
        .populate("userId")
        .exec()
        .then((result) => {
          return resolve(result);
        }, (err) => {
          reject(err);
        });
    })
  }
  /**
   *5. DATA ACCESS LAYER to update Faq document info
   */
  function updateFaq(query, update, opts) {
    debug('updating a faq', query);

    return new Promise((resolve, reject) => {
      FaqModel.findOneAndUpdate(query, update, opts)
        .exec()
        .then((result) => {
          resolve(result);
        }, (err) => {
          reject(err)
        });
    });

  }
  /**
   *6. DATA ACCESS LAYER to remove Faq document
   */
  function deleteFaq(query) {
    debug('DELETING FAQ');
    return new Promise((resolve, reject) => {
      FaqModel.findOneAndRemove(query)
        .then((result) => {
          resolve(result)
        }, err => {
          reject(err);
        });
    })
  }

  /**
   *7. DATA ACCESS LAYER to Get faq documents by pagination
   */
  function getFaqByPagination(query, queryParams) {
    debug('FETCHING A COLLECTION OF FAQS');
    var defferd = q.defer();
    var opts = {
      sort: queryParams.sort || {},
      page: queryParams.page || 1,
      limit: queryParams.per_page || 10
    };
    FaqModel.paginate(query, opts)
      .then((faqs) => {
        if (!faqs)
          return defferd.reject("Faq not found");

        var response = {
          page: faqs.page,
          total_docs: faqs.total,
          total_pages: faqs.pages,
          per_page: faqs.limit,
          docs: faqs.docs
        };
        return defferd.resolve(response);
      })
      .catch(err => {
        defferd.reject(err);
      });
    return defferd.promise;
  }

  /**
   *11.return FaqModel public APIs
   */
  return {
    create: createFaq,
    findAll: getAllFaqs,
    findById: getFaqById,
    update: updateFaq,
    delete: deleteFaq,
    paginate: getFaqByPagination,
    searchByDesc: searchFaqByDescription
  };

}(FaqModel));

module.exports = FaqDal;