import React from "react";
import SearchBar from "./Searchbar";


const Nav = ({search}) => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="navbar-collapse row" id="navbarNav">
                <SearchBar search={search}/>
            </div>
        </nav>
    )
}

export default Nav;