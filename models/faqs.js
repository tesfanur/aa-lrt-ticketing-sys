var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
/**
*frequently asked questions and answers schema
*/
var FaqSchema = new Schema({
  question : {
    userId : {type: ObjectId,
              required: true,
              ref:'User'},
    body   : {type: String,
             required: true},
             datePosted   : {type: Date,
                            default: Date.now},
             dateModified : {type: Date,
               default: Date.now}
           },

    answer : {
      answerdBy : {type: ObjectId,
                required: true,
                ref:'User'},
      body   : {type: String,
               required: true},
               datePosted   : {type: Date,
                              default: Date.now},
               dateModified : {type: Date,
                 default: Date.now}
             },
});



//export user model
module.exports = mongoose.model('FAQs', FaqSchema);
