import React from "react";

const TBody = ({employees}) => {
    return (
        <tbody>
            {employees[0] !== undefined && employees[0] !== undefined ? (
                employees.map(({login, name, picture, phone, email, dob}) => {
                    return (
                        <tr key={login.uuid}>
                            <td className="align-middle" data-th="Image">
                                {<img alt="profileImg" src={picture.large} className="img-responsive"/> }
                            </td>
                            <td className="align-middle name-cell" data-th="Name" >
                                {name.first} {name.last}
                            </td>
                            <td className="align-middle" data-th="Phone">
                                {phone}
                            </td>
                            <td className="align-middle" data-th="Email">
                                <a href={"mailto:" + email}>
                                    {email}
                                </a>
                            </td>
                            <td className="align-middle" data-th="DOB">
                                {dob.date}
                            </td>
                        </tr>
                    )
                })
            ) :(
                <div>
                </div>
            )
        }
        </tbody>
    )
}

export default TBody;