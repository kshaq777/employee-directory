import React from "react";

const UserContext = React.createContext({
  users: [],
  order: "",
  search: "",
  searchUsers: () => {},
  sortUsers: () => {}
});

export default UserContext;
