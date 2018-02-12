var mongoose = require('mongoose');
var studentModel = require('../models/student');
var q = require('q');

//create student dal obejct
var studentDal={};
//attach all dal apis to student object
studentDal.createStudent=createStudent;
studentDal.enrollStudent=enrollStudent;
studentDal.findAllStudents=findAllStudents;
studentDal.findStudentById=findStudentById;
//export the student obejct
module.exports =studentDal;

/**
*1. create student dal
*/
function createStudent(student){
    var deffered = q.deffered();
 studentModel.create(student, function(error, student){
   if(error) return  deffered.abort(error);
   deffered.resolve(student);
 });

 return deffered.Promise;
}
/**
*2. find all students dal
*/
function findAllStudents(req, res,next){
  var deffered = q.deffered();
 studentModel.find({}, function(err, docs){
    if (err) return deffered.abort(err);
    deffered.resolve(docs);
 });
 return deffered.Promise;
}
/**
*3. find student by id dal
*/
function findStudentById(studentId){
  var deffered = q.deffered();
 studentModel.find(studentId, function(err, doc){
    if (err) return deffered.abort(err);
    deffered.resolve(doc);
 });
 return deffered.Promise;
}
/**
*4. enroll student's course dal
*/
function enrollStudentById(studentId,courseId){
  var deffered = q.deffered();
 studentModel.findStudentById(studentId)
            .then(function(student) {
              if(student){
              student.course=courseId;}
              student.save(function(error, data){
                if(error) return deffered.abort(error)
                deffered.resolve(data);
              });
            })
}
