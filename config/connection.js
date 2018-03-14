const config = require('./config');
const mongooseOpts = {
	useMongoClient: true,
	connectTimeoutMS: 5000
};
//var mongooseOpts ={ useMongoClient: true}

//create db connection using NODEJS NATIVE promises
exports.toMongoDB = (mongoose) => {

	mongoose.Promise = global.Promise; //overide deprecated promise function

	mongoose.connect(config.MONGO_PRO, mongooseOpts)
		.then(() => {
			console.log('DB CONNECTION ESTABLISHED SUCCESSFULLY!\n');
		}).catch((err) => {
			console.log("DB CONNECTION FAILED.\nPEASE CHECK YOUR MONGODB SERVER RUNNING STATUS!\n");
			console.log("ACTUAL ERROR: " + err.message);
		})

}