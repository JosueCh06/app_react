import React from "react";
import { useState, useEffect } from "react";

const SearchComponent = () => {
      //setear los hooks useState
    const [ users, setUsers ] = useState([])
    const [ search, setSearch ] = useState("")
    // funcion para traer los datos de la API
    const URL = "https://jsonplaceholder.typicode.com/users"
    
    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setUsers(data)
    }

    useEffect(()=>{
        showData()
    },[])
    

    // metodo de filtrado - 1
    /*
    let results = []
    if(!search)
    {
        results = users
    }else{
        results = users.filter((dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
    }
    */

    // metodo de filtrado - 2
    const results = !search ? users : users.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))

    // funcion de busqueda
    const searcher = (e) => {
        setSearch(e.target.value)
        //console.log(e.target.value)
    }
    // renderizar la vista



    return(
        <div>
            <h1>React Search</h1>
            <br></br>
            <input value={search} onChange={searcher} type="text" placeholder="Search" className="form-control"/>
            <table className="table table-striped table-hover mt-5 shadow-lg">
                <thead>
                    <tr className="bg-curso text-white">
                        <th>NAME</th>
                        <th>USER NAME</th>
                    </tr>
                </thead>
                <tbody>
                    { results.map((user) =>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SearchComponent