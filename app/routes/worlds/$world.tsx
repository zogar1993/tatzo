import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import getNarrativeBlockTypesForWorldId from "~/models/getNarrativeBlockTypes"
import getWorlds from "~/models/getWorlds"

export const loader = async ({params}: {params: {world: number}}) => {
	const narrative_block_types = await getNarrativeBlockTypesForWorldId(params.world)
	return json({narrative_block_types})
}

export default function Index() {
	const {narrative_block_types} = useLoaderData<typeof loader>()
	return (
		<>
			{narrative_block_types.map(type => <span>{type.title}</span>)}
		</>
	)
}
