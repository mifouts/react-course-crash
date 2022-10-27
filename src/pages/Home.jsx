import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/user.jsx"
import { Link } from "react-router-dom";




function Home() {
    const [users, setUsers] = useState([]);
    async function fetchUsers() {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(data);
        }

    useEffect(() => {
        setTimeout(() => {
            fetchUsers();
        }, 500)
    }, []);


    function renderUsers(){
        return users.map((user) => (
            <Link to={`/users/${user.id}`}>
            <User
            key={user.id} 
            id={user.id} 
            name={user.name} 
            email={user.email} 
            username={user.username} 
            />
            </Link>
        )) 
    }

    return (
        <div>
    {users.length ? renderUsers() : <h1>Loading...</h1>}

    return
     
    </div>
    );
}

export default Home;