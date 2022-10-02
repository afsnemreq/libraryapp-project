import React from "react";

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
                <img src="https://media.istockphoto.com/vectors/letter-m-with-heart-icon-vector-id860109836?k=20&m=860109836&s=170667a&w=0&h=PvAX09y7G89aWaj_0974CoeH6JJS395ooHla8ivPH7g=" width="60" height="60" className="d-inline-block align-top" style={{borderRadius: "50px"}} alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;