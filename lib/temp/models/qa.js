/**
*Load third party modules
**/
var mongoose= require('mongoose');
//assign variable to mongoose schema isntance
var Schema = mongoose.Schema;
var sortAnswers = function(a,b){
  return a.updatedAt - b.updatedAt;

}

var AnswerSchema = new Schema({
      text: String,
      votes: {type: Number, default:0},
      //all docs should have createdAt & updatedAt attributes
      createdAt: {type: Date, default: Date.now},
      updatedAt: {type: Date, default: Date.now}

});

var QuestionSchema = new Schema({
  text: String,
  answers : [AnswerSchemal],//embeded doc

 //all docs should have createdAt & updatedAt attributes
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
  });
QuestionSchema.pre("save", function(next){
  this.answers.sort(sortAnswers);
  next();
})

var QuestionModel = mongoose.model("Question", QuestionSchema) ;
module.exports= QuestionModel;
