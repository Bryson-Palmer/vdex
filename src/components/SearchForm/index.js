import "./style.css";

function SearchForm({alphabetizeFirst, alphabetizeLast, search, handleInputChange}) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search Vdex Contacts</label>
        <input
          onChange={handleInputChange}
          aria-label="Search"
          value={search}
          name="search"
          type="search"
          className="form-control width"
          placeholder="By Name or Country"
        />
        {/* Container for buttons */}
        <div className="d-flex row mt-4">
          {/* Sort alphabetically by first name */}
          <div className="d-flex flex-column col-sm">
            <button onClick={alphabetizeFirst} className="btn btn-primary mt-3">
            Sort by First Name
            </button>
          </div>
          {/* Sort alphabetically by last name */}
          <div className="d-flex flex-column col-sm">
            <button onClick={alphabetizeLast} className="btn btn-primary mt-3">
            Sort by Last Name
            </button>
          </div>

        </div>
      </div>
    </form>
  );
}

export default SearchForm;