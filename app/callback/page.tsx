"use client";

import { useCallback, memo, FC, useState } from "react";

interface User {
    id: number;
    name: string;
}

interface UserButtonProps {
    user: User;
    onMessage: (id: number) => void;
}

// eslint-disable-next-line react/display-name
const UserButton: FC<UserButtonProps> = memo(({ user, onMessage }) => {
    console.log("rendering user.name", user.name);

    return (
        <button
            onClick={() => onMessage(user.id)}
        >
            Send Message to {user.name}
        </button>
    )
});


const UserList: FC = () => {
    const [users] = useState<User[]>([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
    ]);

    const [count, setCount] = useState(0);

    const sendMessage = useCallback((id: number) => {
        console.log("Message sent to", id);
    }, []);
    // const sendMessage = (id: number) => {
    //     console.log("Message sent to", id);
    // }

    return (
        <div>
            <h2>Users</h2>
            <button onClick={() => setCount(count + 1)}>Re-render Parent ({count})</button>

            <div>
                {users.map((user) => (
                    <UserButton key={user.id} user={user} onMessage={sendMessage} />
                ))}
            </div>
        </div>
    );
}

export default UserList;