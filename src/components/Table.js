import React from "react";
import TBody from "./TBody";

const Table = ({employees,headings, sort}) => {
    console.log(employees);
    return (
        <div>
            <table id="employeeTable" className="table table-hover table-condensed table-striped">
                <thead>
                    <tr>
                        {headings.map(({name,width}, index)=>{
                            return (
                                <th key={index} className="col" style={{width}} onClick= {() => {
                                    sort(name.toLowerCase());
                                }}>
                                    {name}
                                    <span className="point"></span> 
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <TBody employees={employees} />
                    
            </table>
        </div>
    );
}

export default Table