import React from "react";
import SearchBar from "./Searchbar";


const Nav = () => {
    return (
        <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
                <SearchBar />
            </Nav.Item>
        </Nav>
    )
}

export default Nav;