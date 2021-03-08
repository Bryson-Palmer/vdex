import "./style.css";

function SearchForm(props) {
  console.log("props.search", props.search);
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="contact">Search Contacts</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="contact"
          list="contacts"
          type="text"
          className="form-control"
          placeholder="Name"
          id="contact"
        />
        <datalist id="contacts">
          {props.contacts.map(contact => (
            <option value={contact.name.first + " " + contact.name.last} key={contact} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;