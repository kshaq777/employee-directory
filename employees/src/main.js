import React, { useEffect, useState } from "react";
import API from "./util/API";
import UserContext from "./util/UserContext";
import Search from "./components/search";
import Grid from "./components/grid";

function Main () {
    const [users, setUsers] = useState([]);
    const [newUsers, setNewUsers] = useState([]);
    
    useEffect(() => {
        loadUsers();
       
      }, []);

      useEffect(() => {
          tempArr();
      }, [newUsers])



   function loadUsers() {
      
        API.getUsers()
            .then(res => {
            let sorted = res.sort((a,b) => {

                if (a.name.first < b.name.first) {
                    return -1
                }
                if (a.name.first > b.name.first) {
                    return 1
                }
                return 0;
            });
            setUsers(sorted);
            // console.log(users)
            })
            .catch(err => console.log(err))
        }
    
          

    function sortUsers(e) {
        let newSort = [];
        if (e.target.getAttribute("name") === "name") {
            newSort = users.sort((a,b) => {

                if (a.name.first > b.name.first) {
                    return -1
                }
                if (a.name.first < b.name.first) {
                    return 1
                }
                return 0;
            });
            console.log("X", newSort)
            tempArr(newSort)
            
        }
    }

    function tempArr(arr) {
        setNewUsers(arr);
    }



    return (
        <UserContext.Provider value={{users, sortUsers}}>
            <Search />
            <Grid />
        </UserContext.Provider>
    );
}

export default Main;

