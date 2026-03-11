import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const client = await clientPromise;
const collection = client.db("store").collection("users");

export async function GET() {
    const users = await collection.find({}).toArray();
    return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
    const data = await req.json();

    const { name, age, email } = data;

    if (!name || !age || !email) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    await collection.insertOne({ name, email, age, createdAt: new Date() });

    return NextResponse.json({ success: true });
}


export async function PUT(req: NextRequest) {
    const data = await req.json();
    const { id, name, email, age } = data;

    if (!id || !name || !email || !age) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { name, email, age } }
    );

    return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
    const data = await req.json();
    const { id } = data;

    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    await collection.deleteOne({ _id: new ObjectId(id) });

    return NextResponse.json({ success: true });
}

