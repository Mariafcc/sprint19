import React, { Component } from "react"
import API from "../utils/API"
import SearchBar from "./Searchbar"
import Table from "./Table"

export default class DataTable extends Component {
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

    headings = [
        {
            name:"Image",
            width:"10%"
        },
        {
            name:"Name",
            width:"20%"
        },
        {
            name: "Phone",
            width:"10%"
        },
        {
           name: "Email",
            width: "20%"
        },
        {
            name:"DOB",
            width: "10%"
        }
    ]
    sort = (heading) => {
        if (this.state.order === "descend"){
            this.setState({
                order: "ascend"
            })
        }
        else {this.setState({
            order: "descend"
        })}
        const compare = (a,b) => {
            if (this.state.order === "ascend"){
                if (a[heading] === undefined){
                    return 1
                } else if (b[heading] === undefined){
                    return -1
                } else if (heading === "name"){
                    return a[heading].first.localeCompare(b[heading].first)
                }else {
                    return a[heading] - b[heading]
                }
            }else {
                if (a[heading] === undefined){
                    return 1
                } else if (b[heading] === undefined){
                    return -1
                } else if (heading === "name"){
                    return b[heading].first.localeCompare(a[heading].first)
                }else {
                    return b[heading] - a[heading]
                }
            }
        }
        const sortedEmployee = this.state.filteredEmployees.sort(compare);
        this.setState({filteredEmployees:sortedEmployee});
    }


    componentDidMount(){
        API.Employee().then(res => {
            this.setState({
                employees: res.data.results,
                filteredEmployees: res.data.results
            });
        });
    }

    render(){
        return(
            <div>
                < SearchBar search={this.search}/>
                < div className="table">
                    < Table employees={this.state.filteredEmployees}
                    headings = {this.headings}
                    sort = {this.sort}
                    />
                </div>
            </div>
        )
    }
}
