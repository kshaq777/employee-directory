import {React, useContext} from "react";
import "../public/styles.css";
import UserContext from "../util/UserContext";
import moment from "moment";

function Grid() {
    const {users, sortUsers, order, numOrder, search} = useContext(UserContext);

    let userArr = [...users];
    // console.log(userArr)
              
    if (search) {
        let c = users.map(x => JSON.stringify(x))
        userArr = c.filter(user => user.includes(search) === true).map(x => JSON.parse(x))
    }
    
    return (
        <table className="table table-striped table-dark">
            <thead>
                <tr> 
                <th scope="col"></th>
                <th scope="col">Name <span><i name="name.first" order={order} onClick={sortUsers} 
                    className={(order === "default") ? `fas fa-sort` : `fas fa-sort-${order}`  }></i></span></th>

                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Tenure <span><i name="registered.age" order={numOrder} onClick={sortUsers} 
                    className={(numOrder === "default") ? `fas fa-sort` : `fas fa-sort-${numOrder}`  }></i></span></th>
                <th scope="col">Birhday</th>
                </tr>
            </thead>
            <tbody>
                { userArr.map(user => (
                    <tr key={user.email}>
                        <td><img src={user.picture.thumbnail} alt={ user.name.first + user.name.last }></img></td>
                        <td>{ `${user.name.first} ${user.name.last}` }</td>
                        <td>{ user.email }</td>
                        <td>{ user.phone }</td>
                        <td>{ `${user.location.street.number} ${user.location.street.name} ${user.location.city}, ${user.location.state}`}</td>
                        <td>{ `${user.registered.age} Years` }</td>
                        <td>{ moment(user.dob.date).format('MMMM DD') }</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Grid;
