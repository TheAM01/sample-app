import { createUser } from "@/actions/userActions";

export default function UsersPage() {
    return (
        <div className="max-w-md mx-auto mt-10 space-y-6">
            <h1 className="text-2xl font-bold">Create User</h1>

            <form action={createUser} className="space-y-4 bg-gray-900 p-6 border border-gray-800">
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 bg-gray-800 border border-gray-700 outline-none"
                    required
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 bg-gray-800 border border-gray-700 outline-none"
                    required
                />

                <input
                    name="age"
                    type="number"
                    placeholder="Age"
                    className="w-full p-2 bg-gray-800 border border-gray-700 outline-none"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-gray-800 cursor-pointer hover:bg-gray-700 text-white p-2 duration-200"
                >
                    Create User
                </button>
            </form>
        </div>
    );
}