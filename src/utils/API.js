import axios from "axios";
const BASEURL = "https://randomuser.me/api/";
 
const API = {
  getContacts: function(numOfContacts) {

    return axios.get(BASEURL + `?results=${numOfContacts}`);
  }
};

export default API;