"use server";

import { redirect } from "next/navigation";

export async function login(formData: FormData) {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    // checkLogin()
    if (username === "johndoe" && password === "12345678") {
        
        return redirect("/profile")
    }
    return redirect('/login');
}
