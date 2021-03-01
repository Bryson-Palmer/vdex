import React from "react";
import Header from "./components/Header";
import Body from "./components/Body"
import testContacts from "./testDataContacts.json";

class App extends React.Component {

  state ={
   users: testContacts
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Body users={this.state.users} />
      </div>
    );
  }
  
}

export default App;
