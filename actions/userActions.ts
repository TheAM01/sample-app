"use server";

import clientPromise from "@/lib/mongodb";

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