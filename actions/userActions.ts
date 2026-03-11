"use server";

import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import { revalidatePath } from "next/cache";

export async function createUser(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const age = Number(formData.get("age"));

    if (!name || !email || !age) {
        throw new Error("All fields are required.");
    }

    const client = await clientPromise;
    const db = client.db("store");

    await db.collection("users").insertOne({
        name,
        email,
        age,
        createdAt: new Date(),
    });

}


export async function deleteUser(formData: FormData) {
    const id = formData.get('id') as string;

    const client = await clientPromise;
    const db = client.db("store");

    await db.collection("users").deleteOne({ _id: new ObjectId(id) });
    revalidatePath("/");
}


export async function updateAge() {
	const client = await clientPromise;
	const db = client.db("store");

	await db
		.collection("users")
		.updateOne(
			{ name: "jonathan doe" },
			{ $inc: { age: 1 } }
		)

    revalidatePath('/')
}