export const dynamic = "force-static";
export const revalidate = 10;

export async function GET() {
    return Response.json({ time: new Date().toLocaleTimeString() })
}

fetch("https://api.com/api/categories", {
    method: "GET",
    headers: {
        'Content-Type': "application/json"
    },
    next: { revalidate: 10 }
})