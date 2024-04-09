import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import imagen from "../imgs/escritura.jpg"

const API = "http://localhost:3005/api/authors/"

const UserEdit = () => {

    const [nom_autor, setName] = useState()
    const [ape_autor, setLastName] = useState()
    const [hijos_autor, setSons] = useState()
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(API+id, {
            nom_autor: nom_autor,
            ape_autor: ape_autor,
            hijos_autor: hijos_autor
        })
        navigate('/')
    }

    useEffect(()=>{
        getAuthorById()
        // eslint-disable-next-line
    },[id])

    const getAuthorById = async () => {
        const res = await axios.get(API+id)
        setName(res.data[0].nom_autor)
        setLastName(res.data[0].ape_autor)
        setSons(res.data[0].hijos_autor)
        
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
            <h3>EDIT AUTHOR</h3>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        name="nom_autor"
                        value={nom_autor || ''}
                        onChange={ (e)=> setName(e.target.value)}
                        type="text"
                        className="form-control"                        
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">LastName</label>
                    <input
                        name="ape_autor"
                        value={ape_autor || ''}
                        onChange={ (e)=> setLastName(e.target.value)}
                        type="text"
                        className="form-control"                        
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Sons</label>
                    <input
                        name="hijos_autor"
                        value={hijos_autor || ''}
                        onChange={ (e)=> setSons(e.target.value)}
                        type="text"
                        className="form-control"                        
                    />
                </div>         
                <button type="submit" className="btn btn-primary"><i className='bx bxs-save'></i></button>
            </form>
        </div>
    </div>
    )

}

export default UserEdit