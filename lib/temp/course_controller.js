var courseDal = require('../dal/course');


function createCourse(req, res,next){
  courseDal.createCourse({"name": "CS56100"})
            .then(function(doc){
              console.log(doc);
            })
            .catch(e => {console.log(e);});
}
function findAllCourses(){
  courseDal.findAllCourses()
           .then((courses => {
             if(courses) return console.log(courses);
             console.log("No courses found!");
           }))
           .catch(error => {
             console.log(error);
           });
}

var courseController={};
courseController.createCourse=createCourse;

module.exports= courseController;
