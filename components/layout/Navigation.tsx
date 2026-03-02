import Link from "next/link"

export default function Navigation() {
    return (
        <div className="w-full flex justify-center border-b">
            <div className="flex flex-1 justify-between w-full lg:max-w-7xl p-4">

                <div className="text-3xl font-mono">MYNEXTAPP</div>

                <div className="flex gap-3">
                    <Link href={"/"} className="text-foreground hover:underline p-2 duration-200">Home</Link>
                    <Link href={"/profile"} className="text-foreground hover:underline p-2 duration-200">Profile</Link>
                    <Link href={"/login"} className="text-foreground hover:underline p-2 duration-200">Login</Link>
                    <Link href={"/example"} className="text-foreground hover:underline p-2 duration-200">Example</Link>
                    <Link href={"/user/johndoe"} className="text-foreground hover:underline p-2 duration-200">John Doe</Link>
                </div>
            </div>
        </div>
    )
}