import sql from "~/models/sql"

export default async function getWorlds() {
	const users = await sql`
		select id, title
		from worlds
	`
	return users
}