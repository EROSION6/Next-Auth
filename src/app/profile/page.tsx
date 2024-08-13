import { getServerSession } from 'next-auth'

export default async function Profile() {
	const session = await getServerSession()
	return (
		<div>
			<h1>{session?.user?.name}, Welcome!</h1>
			{session?.user?.image && <img src={session?.user?.image} alt='' />}
		</div>
	)
}
