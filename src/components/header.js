import React from "react"
import "./styles/header.css"

const Header = () => {
    return (
        <div className="header">
            <jumbotron>
                <h1>Employee Directory</h1>
                <p>Click the name to sort alphabetically or use the search bar to narrow results</p>
            </jumbotron>
        </div>
    )
}

export default Header;