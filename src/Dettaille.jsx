import axios from "axios"
import { useState } from "react"

export const Dettaille = () =>{

    const [users,setUsers] = useState([])
    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{(setUsers(res.data))})
    return(
        <>
        
        <table className="table">
            
            <tr>
                    <th>id</th>
                    <th>username</th>
                    <th>email</th>
                    <th>phone</th>
                </tr>
                {users.map(e=> <tr>
                    <td>{e.id}</td>
                    <td>{e.username}</td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                </tr>)}
            
        </table>
        </>
    )
}