import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";

const NavBar = ({onSearch}) => {

    return (
        <nav>
            <Link to='/'>LOGOUT</Link>
            <Link to="/home">Home</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="about">About</Link>
            <SearchBar onSearch={onSearch} />
        </nav>
    )
};

export default NavBar;