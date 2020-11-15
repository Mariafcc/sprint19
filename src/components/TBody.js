import React from "react";

const TBody = ({employees}) => {
    // function dateFormatting(date){
    //     const arr = date.split("-");
    //     const year = arr[0];
    //     const month = arr[1];
    //     const dayArr = arr[2].split("T");
    //     const day = dayArr[0];
    //     const dateFormatting = [month, day, year].join("-");
    //     return dateFormatting;
    // }
    const bodyEmps = employees && employees.length > 1 ? employees : '';
    return (
        <tbody>
            {!bodyEmps ? '' :
            bodyEmps.map(({login, name, picture, phone, email, dob}) => (
                        <tr key={login.uuid}>
                            <td className="align-middle" data-th="Image">{<img alt="profileImg" src={picture.large} className="img-responsive"/> }</td>
                            <td className="align-middle name-cell" data-th="Name">{name.first} {name.last}</td>
                            <td className="align-middle" data-th="Phone">{phone}</td>
                            <td className="align-middle" data-th="Email"><a href={"mailto:" + email}>{email}</a></td>
                            <td className="align-middle" data-th="DOB">{dob.date}</td>
                        </tr>
                    
               )) }
        </tbody>
    )
}

export default TBody;