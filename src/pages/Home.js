import React from "react";
import Header from "../components/Header";
import ListBooks from "../components/ListBooks";

const Home = (props) => {
    return (
        <div className="App">
            <Header />
            <ListBooks />
        </div>
    );
}

export default Home;