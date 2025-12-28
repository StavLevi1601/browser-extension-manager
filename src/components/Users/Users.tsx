import {useEffect, useState} from "react";
import {Stack} from "@mui/material";
import type {User} from "../../types/User.type.ts";

function Users () {

    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true);
            setError(null);
            try {
                setIsLoading(true)
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                console.log("Fetched users:", data);
                setUsers(data);
                setIsLoading(false)
                setError(null);
            } catch (error) {
                setError(error instanceof Error ? error.message : "An unknown error occurred");
                setIsLoading(false)
                console.error("Error fetching users:", error);
            }
        }
        fetchUsers();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }

    return <Stack>
        <h1>Users</h1>
        <input placeholder="Search users..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <ul>
            {users.map((user,index) => (
                <li key={index}>{user.name}</li>
            ))}
        </ul>
    </Stack>

}

export default Users