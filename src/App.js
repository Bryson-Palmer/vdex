import React, { Component } from "react";
// import testContacts from "../testDataContacts.json";
import API from "./utils/API";
import Header from "./components/Header";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Alert from "./components/Alert";
import SearchForm from "./components/SearchForm";
// import SearchResults from "./components/SearchResults";


class App extends Component {

  state = {
    contacts: [],
    search: "",
    results: [],
    error: ""
  }

  // When this component mounts, search random user
  componentDidMount() {
    API.getContacts(36)
    .then(res => {
      this.setState({ contacts: res.data.results })
      console.log("contacts", this.state.contacts);
    })
    .catch(err => console.log("Whoops! There was a problem getting contacts", err));
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }); 
  };

  // When the form is submitted, search randomuser.me for `this.state.searchQuantity`
  handleFormSubmit = e => {
    e.preventDefault();
        console.log("this.state.search", this.state.search);
        console.log("this.state.contacts", this.state.contacts); //All contacts
        console.log("this.state.results", this.state.results);
        console.log("this.state.error", this.state.error);
        this.setState({ search: this.value })
       
  };


  render() {
    return (
      <div className="container">
        <Wrapper>
          <Header />
          <Container style={{ minHeight: "80%" }}>
            <Alert
              type="danger"
              style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
            >
              {this.state.error}
            </Alert>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              contacts={this.state.contacts}
            />
            {/* <SearchResults results={this.state.results} /> */}
          </Container>
        </Wrapper>
          <div className="row row-cols-1 row-cols-md-3 g-4">
          {this.state.contacts.length > 0
          ? this.state.contacts.map( contact => {
            return  <Card contact={contact} />;
            }) 
          : ""}
        </div>
      </div>
    );
  }
}

export default App;