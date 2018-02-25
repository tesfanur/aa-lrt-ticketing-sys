const mongoose  = require('mongoose');
const paginator = require('mongoose-paginate');
const Schema    = mongoose.Schema;
const ObjectId  = Schema.Types.ObjectId;
/**
*frequently asked questions and answers schema
*/
var FaqSchema = new Schema({
  question : {
    askedBy : {type: ObjectId,
              required: true,
              ref:'User'},
    description: {type: String,
             required: true},
             createdAt   : {type: Date,
                            default: Date.now},
             modifiedAt : {type: Date,
               default: Date.now}
           },

    answer : {
      answerdBy :{type: ObjectId,
                ref:'User'},
      description : {type: String,
                default: "Not answerd yet"
                 },
               createdAt  : {type: Date,
                              default: Date.now},
               modifiedAt : {type: Date,
                 default: Date.now}
             },
});
//Add mongoose paginate
FaqSchema.plugin(paginator);

//export user model
module.exports = mongoose.model('FAQs', FaqSchema);
