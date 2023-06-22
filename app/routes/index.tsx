import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import getWorlds from "~/models/getWorlds"

export const loader = async () => {
	const worlds = await getWorlds()
	return json({worlds})
}

export default function Index() {
	const {worlds} = useLoaderData<typeof loader>()
	return (
		<>
			{worlds.map(world => <a href={`/worlds/${world.id}`}>{world.title}</a>)}
		</>
	)
}
