import sql from "~/models/sql"

export default async function getNarrativeBlockTypesForWorldId(id: number): Promise<Array<NarrativeBlockType>> {
	const entries = await sql`
      select id, title, parent_id
      from narrative_block_types
      where world_id = ${id}
	` as unknown as Array<NarrativeBlockTypeEntry>

	return createDomainModels(entries)
}

type NarrativeBlockTypeEntry = {
	id: number,
	title: string,
	parent_id: number
}

type NarrativeBlockType = {
	id: number,
	title: string
}

function createDomainModels(entries: Array<NarrativeBlockTypeEntry>): Array<NarrativeBlockType> {
	const results: Array<NarrativeBlockType> = []

	const first = entries.find(entry => entry.parent_id === null)
	if (!first) throw Error(`No first narrative block found`)
	results.push(first)

	while (true) {
		const next = entries.find(entry => entry.parent_id === results[results.length - 1].id)
		if (!next) break
		results.push(next)
	}

	if (entries.length !== results.length) throw Error(`Some entries do not have a valid parent`)

	return results
}