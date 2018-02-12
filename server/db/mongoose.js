var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI)
.then(function () {
      console.log('DB CONNECTION ESTABLISHED SUCCESSFULLY!\n');
}).catch(function (err) {
    console.log("DB CONNECTION FAILED.\nPEASE CHECK YOUR MONGODB SERVER RUNNING STATUS!\n");
    console.log("ACTUAL ERROR: "+ err.message);
});

module.exports = {mongoose};
