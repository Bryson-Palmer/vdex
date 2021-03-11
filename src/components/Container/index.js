import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
// import Card from "../Card";

class Container extends Component {

  state = {
    contacts: [],
    search: "",
  }

  // When this component mounts, search random user for 36 contacts
  componentDidMount() {
    this.getContacts(36);
  }

  getContacts = query => {
    API.getContacts(query)
      .then(res => this.setState({ contacts: res.data.results }))
      .catch(err => console.log("Whoops! There was a problem getting contacts", err));
  };

  handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("value", value)
    this.setState({
      [name]: value
    })

    const filteredContacts = this.state.contacts.filter(contact => {
      return (
        contact.name.first.toLowerCase().includes(value.toLowerCase()) || 
        contact.name.last.toLowerCase().includes(value.toLowerCase()) ||
        contact.location.country.toLowerCase().includes(value.toLowerCase())
      );
    });

    this.setState({
      contacts: 
        filteredContacts
    })
  };

  alphabetizeFirst = e => {
    e.preventDefault();
    const newContacts = this.state.contacts;
    const alphabetized = newContacts.sort( (a, b) => {
      if (a.name.first < b.name.first) { return -1}
      if (a.name.first > b.name.first) { return 1}
      return 0;
    });
    console.log("alphabetized", alphabetized)

    this.setState({
      contacts:
        alphabetized
    });
  }

  alphabetizeLast = e => {
    e.preventDefault();
    const newContacts = this.state.contacts;
    const alphabetized = newContacts.sort( (a, b) => {
      if (a.name.last < b.name.last) { return -1}
      if (a.name.last > b.name.last) { return 1}
      return 0;
    });
    console.log("alphabetized", alphabetized)

    this.setState({
      contacts:
        alphabetized
    });
  }

  render() {
    return (
      <div className="container">
        <SearchForm
          handleInputChange={this.handleInputChange}
          alphabetizeFirst={this.alphabetizeFirst}
          alphabetizeLast={this.alphabetizeLast}
          search={this.state.search}
          contacts={this.state.contacts}
        />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {this.state.contacts.length > 0
            ? this.state.contacts.map(contact => {
              return <SearchResults contact={contact} key={contact.login.uuid}/>;
            })
            : "Sorry, No Results With That Name"}
        </div>
      </div>
    );
  }
}

export default Container;