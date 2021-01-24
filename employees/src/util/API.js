import axios from "axios";
  
const API = {
    getUsers: function() {
        return new Promise((resolve, reject) => {
          axios
            .get("https://randomuser.me/api/?results=100&nat=US&inc=gender,name,location,email,registered,dob,phone,cell,picture,nat")
            .then(res => {
              const users = res.data.results;
              resolve(users);
              })
              .catch(err => reject(err));
              
            })
            
        }
}
  
  export default API;