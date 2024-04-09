import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imagen from "../imgs/escritura.jpg"

const API = "http://localhost:3005/api/authors/"

const UserCreate = () => {

    const [nom_autor, setName] = useState('')
    const [ape_autor, setLastName] = useState('')
    const [hijos_autor, setSons] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(API, {nom_autor: nom_autor, ape_autor: ape_autor,
                                hijos_autor: hijos_autor})
        alert("Author add!!")
        navigate('/')
    }

    const img_css = {
		height: "450px",
		width:"400px"
    }

    return (
        <div className="row">
            <div className="col-md-5">
                <img src={imagen} style={img_css} alt='img_author'></img>
            </div>
            <div className="col-md-7">
            <h3>CREATE AUTHOR</h3>
                <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Name</label>
                        <input
                            value={nom_autor}
                            onChange={ (e)=> setName(e.target.value)} 
                            type="text"
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>LastName</label>
                        <input
                            value={ape_autor}
                            onChange={ (e)=> setLastName(e.target.value)} 
                            type="text"
                            className='form-control'
                        />
                    </div> 
                    <div className='mb-3'>
                        <label className='form-label'>Sons</label>
                        <input
                            value={hijos_autor}
                            onChange={ (e)=> setSons(e.target.value)} 
                            type="text"
                            className='form-control'
                        />
                    </div>     
                    <button type='submit' className='btn btn-primary'><i className='bx bxs-save'></i></button>                  
                </form>
            </div>
        </div>
    )


}

export default UserCreate