import React from "react"

const SearchBar = ({ search }) => {
    return (
        <div className="search">
            <form className="form-inline">
                <input 
                className="form-control" 
                type="search" 
                placeholder="search" 
                onChange={event => search(event)}/>
            </form>
        </div>
    );
}

export default SearchBar;