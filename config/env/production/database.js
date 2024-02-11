module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'physmus-cms'),
			user: env('DATABASE_USERNAME', 'physmus'),
			password: env('DATABASE_PASSWORD', '9FGAewZbK9c9PhGw3TvA'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
