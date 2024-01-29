import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { addOne } from "./actions"

export const Acceuil =()=>{
    const data = useSelector(state=>state || [])
    const dispach = useDispatch()
    const [users,setUsers] = useState([])
    const [username,setusername] = useState('')
    const [filtres,setfiltres] = useState([])
    
    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{(setUsers(res.data))})
    useEffect(()=>setfiltres(users.filter(e=> e.username == username)),[username,users])
    const ajouter =(u)=>{
        const us = users.find(e=>u==e.username)
        const user = {username:us.username,email:us.email}
        dispach(addOne(user))
        
    } 
    return(
        <div>
            <select name="" id="" className="w-25" onClick={e=>setusername(e.target.value)}>
            <option value=""></option>
                <option value="Bret">Bret</option>
                <option value="Antonette">Antonette</option>
                <option value="Samantha">Samantha</option>
                <option value="Karianne">Karianne</option>
                <option value="Kamren">Kamren</option>
                <option value="Leopoldo_Corkery">Leopoldo_Corkery</option>
                <option value="Elwyn.Skiles">Elwyn.Skiles</option>
            </select>
            <h1>{username}</h1>
            <table className="table">
                <tr>
                    <th>id</th>
                    <th>username</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>action</th>
                </tr>
                {filtres.map(e=> <tr>
                    <td>{e.id}</td>
                    <td>{e.username}</td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                    <td><button type="button" className="btn btn-success" onClick={()=>ajouter(e.username)}>ajouter au pannier</button></td>
                </tr>)}
            </table>
            <div>
                {data.map(e=> <tr>
                    <td>{e.username}</td>
                    <td>{e.email}</td>
                    <td><button className="btn btn-warning">supprimer</button></td>
                </tr>)}
            </div>
        </div>
    )
}