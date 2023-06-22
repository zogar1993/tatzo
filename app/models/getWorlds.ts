import sql from "~/models/sql"

export default async function getWorlds(): Promise<Array<World>> {
	const worlds = await sql`
      select id, title
      from worlds
	`
	return worlds as unknown as Array<World>
}

type World = {
	id: number,
	title: string
}