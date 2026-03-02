import { Metadata  } from "next";

type UserPageProps = {
	params: Promise<{ username: string; }>
}



export const generateMetadata = async ({ params }: UserPageProps): Promise<Metadata> => {
	const id = (await params).username;

	return {
		title: `Info for ${id}`,
		description: "Information for products"
	}
}


export default async function UserPage(
	{ params, searchParams }:
	{
		params: Promise<{ username: string; }>,
		searchParams: Promise<{ lang?: "en" | "fr" | 'ar' | "es" }>
	}
) {
	
	const { username } = await params;
	const { lang = "en" } = await searchParams;

	const users = [
		{
			username: "johndoe",
			fullName: "Jonathan Doe"
		},
		{
			username: "yusuf",
			fullName: "M. Yusuf"
		}
	]
	const currentUser = users.find(u => u.username === username);

	return (
		<div className="bg-background text-foreground font-mono flex-col md:flex-col">
			{currentUser
				? <>Hello, {currentUser?.fullName}! Welcome to our page! You are using language: {lang}</>
				: <>No user found with username: &quot;{username}&quot;</>
			}
		</div>
	);
}


// https://www.google.com/search?q=html%2Fbasics
// /users?page=3&items=200
// 1000

// 10: 100