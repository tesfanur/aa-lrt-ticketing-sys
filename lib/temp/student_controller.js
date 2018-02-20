var studentDal = require('../dal/student');

/**
*1 create student controller
*/
function createStudent(req, res,next){
  studentDal.createStudent({"username": "Alice"})
            .then((student => {
              if(student) return console.log(student);
              console.log("No students found!");
            }))
            .catch(error => {
              console.log(error);
            });
}
/**
*2. find all students controller
*/
function findAllStudents(){
  studentDal.findAllStudents()
           .then((students => {
             if(students) return console.log(students);
             console.log("No students found!");
           }))
           .catch(error => {
             console.log(error);
           });
}
/**
*3. enroll student course controller
*/
function enrollStudentCourse(){
  studentDal.enrollStudent("studentId","courseId")
            .then(function(data){
              console.log(data);})
            .catch(error => {
              console.log(error);
            })
}

var studentController={};
studentController.createStudent=createStudent;
studentController.findAllStudents=findAllStudents;
studentController.enrollStudentCourse=enrollStudentCourse;

module.exports= studentController;
