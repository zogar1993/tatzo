import postgres from 'postgres'

const sql = postgres(process.env.POSTGRES_CONNECTION_STRING as string, {
	ssl: "require",
	connect_timeout: 10
})

export default sql
