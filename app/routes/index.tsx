import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import TextArea from "~/components/TextArea"
import {textarea} from "~/components/TextArea.css"
import getWorlds from "~/models/getWorlds"

export const loader = async () => {
	const worlds = await getWorlds()
	return json({worlds})
}

export default function Index() {
	const {worlds} = useLoaderData<typeof loader>()
	return (<>
		<div>{JSON.stringify(worlds)}</div>
		<TextArea className={textarea}></TextArea>
	</>)
}
