import React, { useEffect, useState } from "react";
import API from "./util/API";
import UserContext from "./util/UserContext";
import Search from "./components/search";
import Grid from "./components/grid";

function Main () {
    const [users, setUsers] = useState([]);
    const [newUsers, setNewUsers] = useState([]);
    const [order, setOrder] = useState("default");
    const [numOrder, setNumOrder] = useState("default");
    const [search, setSearch] = useState("");

    
    useEffect(() => {
        loadUsers();
      }, []);

    useEffect(() => {
        newArr();
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
            })
            .catch(err => console.log(err))
        }
    

    function sortUsers(e) {
        console.log(order);
        let newSort = [];
        let col = e.target.getAttribute("name");
        let clickOrder = e.target.getAttribute("order");
        console.log(col);

        let current;
        if (!newUsers) {
            current = users;
        }
        else {
            current = newUsers;
        }

        console.log(current);

        if (col === "name.first") {
            if (clickOrder === "down" || clickOrder === "default") {
                newSort = current.sort((a,b) => {

                    if (`a.${col} > b.${col}`) {
                        return -1;                    
                    }
                    if (`a.${col} < b.${col}`) {
                        return 1;
                    }
                    return 0;
                });

                setOrder("up");

            }
            else {
                newSort = current.sort((a,b) => {

                    if (`a.${col} < b.${col}`) {
                        return -1;                    
                    }
                    if (`a.${col} > b.${col}`) {
                        return 1;
                    }
                    return 0;
                });

                setOrder("down");
            }
        }
        else {
            if (clickOrder === "down" || clickOrder === "default") {
                newSort = current.sort((a,b) => {
                    return b.registered.age - a.registered.age
                })

                setNumOrder("up");
            }

            else if (clickOrder === "up") {
                newSort = current.sort((a,b) => {
                    return a.registered.age - b.registered.age
                })

                setNumOrder("down");

            }
    
        }
            
        newArr(newSort)

    }

    function newArr(arr) {
        setNewUsers(arr);
    }

    function handleSearch(event) {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
         
        setSearch(value);
      };


    return (
        <UserContext.Provider value={{users, sortUsers, order, numOrder, search, handleSearch}}>
            <Search />
            <Grid />
        </UserContext.Provider>
    );
}

export default Main;

