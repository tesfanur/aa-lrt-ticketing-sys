var mongoose = require('mongoose');
var courseModel = require('../models/course');
var q = require('q');

//cerate course dal object
var courseDal={};
courseDal.createCourse=createCourse;
courseDal.findAllCourses=findAllCourses;
courseDal.findCourseById=findCourseById;
courseDal.enrollStudentIncourse=enrollStudentIncourse;
//expose the public api
module.exports =courseDal;
/**
*1. create course dal
*/
function createCourse(course){
  var deffered = q.deffered();
 courseModel.create(course, function(error, doc){
   if(error) return deffered.abort(error);
   deffered.resolve(doc);
 });
  return deffered.Promise;
}
/**
*2. final all course dal
*/
function findAllCourses(req, res,next){
  var deffered = q.deffered();
 courseModel.find({}, function(err, docs){
    if (err) return deffered.abort(err);
    deffered.resolve(docs);
 });
 return deffered.Promise;
}
/**
*3 find course by id dal
*/
function findCourseById(courseId){
  var deffered = q.deffered();
 courseModel.findById(courseId, function(err, doc){
    if (err) return deffered.abort("Error occurred while fetching courses");
    deffered.resolve(doc);
 });
 return deffered.Promise;
}

/**
*4. enroll student in course dal
*/
function enrollStudentIncourse(courseId, studentId){
  var deffered = q.deffered();
 findCourseById(courseId)
           .then(function(course){
             course.students.push(studentId);
             course.save(function(error, data){
               if(error) return deffered.abort(error);
               deffered.resolve(data);
             });
           })
 return deffered.Promise;
}
