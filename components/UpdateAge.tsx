"use client";

import { updateAge } from "@/actions/userActions";

export default function UpdateAge() {
    return <button
        className="bg-green-300 text-green-500"
        onClick={() => updateAge()}
    >Update</button>
}