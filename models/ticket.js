var mongoose = require('mongoose');
var paginator = require('mongoose-paginate');

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var TicketSchema = new Schema({
    type    :{type:String,
              enum : ['for child','for adult','for handicaped'],
              default: 'for adult',
              required : true},

    passengerId : {type: ObjectId,
                   required: true,
                   ref:'User'},

    from    : {type: ObjectId,
                   required: true,
                   ref:'Station'},

    to      : {type: ObjectId,
                   required: true,
                   ref:'Station'},
    price   : {type: Number,
               required: true},
    route   : {type: String,
              required: true},

    status :{type:String,
              enum : ['unused','used','cancelled'],
              default: 'unused',
              required : true},

    //are the following fields required or already included by the above fields
    createdAt  :{type:Date, default:Date.now},
    modifiedAt :{type:Date, default:Date.now}

});

//Add mongoose paginate
TicketSchema.plugin(paginator);

//export user model
module.exports = mongoose.model('Ticket', TicketSchema);
