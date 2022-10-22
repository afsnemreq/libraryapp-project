import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="https://media.istockphoto.com/vectors/letter-m-with-heart-icon-vector-id860109836?k=20&m=860109836&s=170667a&w=0&h=PvAX09y7G89aWaj_0974CoeH6JJS395ooHla8ivPH7g=" width="60" height="60" className="d-inline-block align-top" style={{ borderRadius: "50px" }} alt="" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Kitaplar
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categories">
                                Kategoriler
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>



    );
}

export default Header;