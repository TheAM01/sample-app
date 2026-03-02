import { NextRequest, NextResponse } from "next/server";

let allPosts = [
    {
        id: 1,
        title: "Why Next.js is a powerful framework",
        author: "John Doe"
    },
    {
        id: 2,
        someRandomProperty: "Some Random Value",
        title: "Why Tailwind makes development more efficient",
        author: "John Doe"
    },
]


export async function GET() {
    return NextResponse.json(allPosts);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    console.log(body);

    const newPost = {
        id: allPosts.length + 1,
        title: body.title,
        author: body.author,
    }

    allPosts.push(newPost);

    return NextResponse.json(newPost, { status: 201 });
}

export async function PUT(request: NextRequest) {

    try {
        const body = await request.json();

        const index = allPosts.findIndex((u) => u.id === body.id);

        if (index === -1) {
            return NextResponse.json(
                { message: "Post not found" },
                { status: 404 }
            );
        }

        allPosts[index] = {
            ...allPosts[index],
            author: body.author,
            title: body.title
        }

        return NextResponse.json(allPosts[index]);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "There was an error" });
    }
    
}

export async function DELETE(request: NextRequest) {
    const body = await request.json();

    allPosts = allPosts.filter(p => p.id !== body.id);

    return NextResponse.json({ message: "Post deleted successfully!" })
}