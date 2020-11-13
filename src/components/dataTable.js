import React, { Component } from "react"
import API from "../utils/api"
import SearchBar from "./Searchbar"
import Table from "./Table"

class DataTable extends Component {
    state = {
        employees: [{}],
        filteredEmployees: [{}],
        order: "descend"
    }

    search = (event) => {
        const inputValue = event.target.value;
        const filteredList = this.state.employees.filter(employee => {
            let values = Object.values(employee).join("").toLowerCase();
            return values.indexOf(inputValue.toLowerCase()) !== -1;
        })
        this.setState({
            filteredEmployees: filteredList
        })
    }

    sort = () => {
        if (this.state.order = "descend"){
            this.setState({
                order: "ascend"
            })
        }
        else {this.setState({
            order: "descend"
        })}
    }


    componentDidMount(){
        API.employees()
        .then(res => {
            this.setState({
                employees: res.data.results,
                filteredEmployees: res.data.results
            })
        })
    }

    render(){
        return(
            <div>
                < SearchBar search={this.search}/>
                < div className="table">
                    < Table employees={this.state.filteredEmployees} />
                </div>
            </div>
        )
    }
}
