import { useEffect, useState } from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

const API = "http://localhost:3005/api/authors/"

const UserList = () => {

    const [users, setUsers] = useState([])

    const getUsers= async ()=>{
        const res = await axios.get(API)
        setUsers(res.data)
    }

    const deleteUser = async (id) => {
        await axios.delete(`${API}${id}`)
        alert("Author delete")
        getUsers()
    }
    
    useEffect(() => {
        getUsers()
    },[])

    return(
        <div className="container">
            <h1>Author List</h1>
            <div className="container my-3">
                <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className='bx bxs-plus-square'></i> Add Author</Link>
            </div>
                <table className="table">
                    <thead className='thead-light'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>LastName</th>
                            <th>Sons</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user)=>(
                            <tr key={user.cod_autor}>
                                <td>{user.cod_autor}</td>
                                <td>{user.nom_autor}</td>
                                <td>{user.ape_autor}</td>
                                <td>{user.hijos_autor}</td>
                                <td>
                                    <Link to={`/edit/${user.cod_autor}`} className='btn btn-info'><i className='bx bxs-edit-alt'></i></Link>
                                    <button onClick={ ()=>deleteUser(user.cod_autor) } className='btn btn-danger'><i className='bx bxs-trash'></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default UserList