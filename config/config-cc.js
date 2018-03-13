
module.exports = {
	PORT: process.env.PORT || 5000,
	AA_LRT_TICKETING_DB_URI : 'mongodb://127.0.0.1/AA_LRT_TICKETING_DB',
	MONGO_PRO     : process.env.MONGO_PRO || 'mongodb://127.0.0.1/AA_LRT_TICKETING_DB',
	JWT_SECRET    : process.env.JWT_SECRET,
	CRYPTO_SECRET : process.env.CRYPTO_SECRET,
	SESSION_SECRET: process.env.SESSION_SECRET,
	TOKEN_LENGTH  : process.env.TOKEN_LENGTH,
	SALT_WORK_FACTOR:process.env.SALT_WORK_FACTOR,
	CORS_OPTS :process.env.CORS_OPTS ,
	SESSION_OPTS :process.env.SESSION_OPTS,
	UNLESS_OPTS: process.env.UNLESS_OPTS
};
