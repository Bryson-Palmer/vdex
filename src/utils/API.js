import axios from "axios";

const BASEURL = "https://randomuser.me/api/";
 
const API = {
  getContacts: function( number ) {
    return axios.get(BASEURL + `?results=${number}`);
  },

};

export default API;