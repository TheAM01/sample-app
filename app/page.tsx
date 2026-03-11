// import { Counter } from "@/components/ui/Counter";
import { deleteUser } from "@/actions/userActions";
import UpdateAge from "@/components/UpdateAge";
import clientPromise from "@/lib/mongodb";

async function getUsers() {
	const client = await clientPromise;
	const db = client.db("store");

	const users = await db
		.collection("users")
		.find({ })
		.sort({ createdAt: -1 })
		.toArray();
	console.log(users)
	return users;
}

export default async function HomePage() {
	const users = await getUsers();

	return (
		<div className="max-w-2xl mx-auto mt-10 space-y-6">
			<h1>Users</h1>

			{users.length === 0 && (
				<p className="text-sm text-red-500">No users found!</p>
			)}

			<UpdateAge/>

			<ul className="space-y-4">
				{users.map(user => (
					<li key={user._id.toString()} className="border p-4 rounded">
						<p className="font-bold text-xl">{user.name}</p>
						<p>{user.email}</p>
						<p>Age: {user.age}</p>
						<form action={deleteUser}>
							<input type="hidden"
								name={"id"}
								value={user._id.toString()}
							/>
							<button
								type="submit"
								className="hover:bg-red-300 cursor-pointer text-red-500"
							>Delete</button>
						</form>
						
					</li>
				))}
			</ul>
		</div>
	);

}



