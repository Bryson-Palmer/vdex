import { Component } from "react";
import API from "../utils/API";

class RandomUserContainer extends Component {

    state = {
        contacts: []
    };

    // When this component mounts, search random user
    componentDidMount() {
        this.getAllContacts();
    }

    getAllContacts = query => {
        API.getContacts(query) 
        .then(res => this.setState({ results: res.data }))
        .catch(err => console.log(err));
    };
}

export default RandomUserContainer;