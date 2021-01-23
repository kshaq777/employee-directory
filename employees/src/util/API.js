import axios from "axios";
  
const API = {
    // searchRandom: function(query) {
    //   return axios.get(BASEURL + "s/image/random")
    // },
    getUsers: function() {
        return new Promise((resolve, reject) => {
          axios
            .get("https://randomuser.me/api/?results=100&nat=US")
            .then(res => {
              const users = res.data.results;
              resolve(users);
              })
              .catch(err => reject(err));
              
            })
            
        }
}
  
  export default API;