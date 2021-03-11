function SearchForm({alphabetizeFirst, alphabetizeLast, search, handleInputChange}) {
  // console.log("props in search form", props);
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search Contacts By Name or Country</label>
        <input
          onChange={handleInputChange}
          aria-label="Search"
          value={search}
          name="search"
          type="search"
          className="form-control width"
          placeholder="search vdex"
        />
        {/* Container for buttons */}
        <div className="d-flex row mt-4">
          {/* Sort alphabetically by first name */}
          <div className="d-flex flex-column col-sm">
            <label>Sort by First Name</label>
            <button onClick={alphabetizeFirst} className="btn btn-primary mt-3">
              A - Z
            </button>
          </div>
          {/* Sort alphabetically by last name */}
          <div className="d-flex flex-column col-sm">
            <label>Sort by Last Name</label>
            <button onClick={alphabetizeLast} className="btn btn-primary mt-3">
              A - Z
            </button>
          </div>

        </div>
      </div>
    </form>
  );
}

export default SearchForm;