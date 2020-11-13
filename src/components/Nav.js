import React from "react";
import SearchBar from "./Searchbar";


const Nav = ({search}) => {
    return (
        <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
                <SearchBar search={search}/>
            </Nav.Item>
        </Nav>
    )
}

export default Nav;