// //configuration variables
// var env = process.env.NODE_ENV || 'development';
//
// if (env === 'development') {
//   process.env.PORT = 5000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
// } else if (env === 'test') {
//   process.env.PORT = 5000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
// }

module.exports = {
	// HTTP PORT
	PORT: process.env.PORT || 5000,
	// LOCAL DB CONNECTION URI
	AA_LRT_TICKETING_DB_URI : 'mongodb://127.0.0.1/AA_LRT_TICKETING_DB',
	//MONGO_PRO: process.env.MONGO_PRO || "mongodb://root:root@ds125048.mlab.com:25048/aa-lrt-online-ticketing-sys-db",
	MONGO_PRO     : process.env.MONGO_PRO || 'mongodb://127.0.0.1/AA_LRT_TICKETING_DB',
	JWT_SECRET    : "VJFKHGEHQPT4T7034T3475T3G4YTQ93YG",
	CRYPTO_SECRET : "VJFK9TUYRHJIOFIJJHGEHQPT4T7034T3475T3G4YTQ93YG",
	SESSION_SECRET: "44395VT4T*ERW9LV34T1T340MR343H1C",
	TOKEN_LENGTH  : 22,
	SALT_WORK_FACTOR:10,

	CORS_OPTS :{
	  "origin": "*",
	  "methods": "GET,HEAD,PUT,POST,DELETE",
		"allowedHeaders": "Origin,X-Requested-With,Content-Type,Accept,Authorization"
	},

	SESSION_OPTS :{secret:"44395VT4T*ERW9LV34T1T340MR343H1C",//use salt from bcrypt
		resave:false,
		saveUninitialized:true},

	UNLESS_OPTS:{
		// path: ['/users/signup', '/users/login','/faqs','/']
		path: ['/users/signup', '/users/login','/']
	}
};
