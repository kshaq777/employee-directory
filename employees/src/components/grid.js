import {React, useContext} from "react";
import "../public/styles.css";
import UserContext from "../util/UserContext";
import moment from "moment";

function Grid() {
    const {users, sortUsers} = useContext(UserContext);
  
    
  return (
    <table className="table table-striped table-dark">
        <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">Name <span><i name="name" onClick={sortUsers} className="fas fa-sort"></i></span></th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Tenure <span><i name="tenure" className="fas fa-sort"></i></span></th>
            <th scope="col">Birhday</th>
            </tr>
        </thead>
        <tbody>
            { users.map(user => (
                <tr key={user.login.uuid}>
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
