import { useEffect } from "react"
import axios from 'axios'

function Home() {
    async function main() {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(data)
        }
    useEffect(() => {
        main();
    }, [])
    return <h1>Home</h1>
}

export default Home