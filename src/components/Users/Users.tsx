import {useEffect, useState} from "react";
import {Stack} from "@mui/material";

export function Users () {

    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true)
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                console.log("Fetched users:", data);
                setUsers(data);
                setIsLoading(false)
            } catch (error) {
                setError("faild to load");
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
                <li key={index}>{user}</li>
            ))}
        </ul>
    </Stack>

}