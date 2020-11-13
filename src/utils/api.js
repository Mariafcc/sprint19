import axios from "axios"

const Employees = {
    Employee: function () {
        return axios.get("https://randomuser.me/api/?results=200&nat=us")
    }
}

export default Employees;