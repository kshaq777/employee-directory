import React from "react";

const UserContext = React.createContext({
  users: [],
  sortUsers: () => {}
});

export default UserContext;
