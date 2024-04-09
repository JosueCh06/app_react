import {NavLink} from "react-router-dom"

const navbar = () => {
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
            <i className='bx bxs-home'></i>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link active" to="/Welcome">Home</NavLink>
                    <NavLink className="nav-item nav-link" to="/contact">Search</NavLink>
                    <NavLink className="nav-item nav-link" to="/form">Form Validator</NavLink>
                </div>
        </div>
    </nav>
    )
}

export default navbar