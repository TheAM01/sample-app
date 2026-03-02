import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const allSites = [
    {
        id: 1,
        title: "Next.js",
        url: "https://nextjs.com"
    },
    {
        id: 2,
        title: "TailwindCSS",
        author: "https://tailwindcss.com"
    }
]


export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q");

    const filteredSites = query
        ? allSites.filter((site) => site.title.toLowerCase().includes(query))
        : allSites

    return NextResponse.json(filteredSites);
}


// /api/sites?q=tail


// .js .jsx
// .ts .tsx