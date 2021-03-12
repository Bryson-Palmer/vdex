import "./style.css";

function SearchResults({ contact }) {
    return (
        <div className="col">
            <div className="card .h-100 mb-5 myCard" key={contact.uuid}>
                <img src={contact.picture.large} className="card-img-top" alt={contact.name.first + " " + contact.name.last} />
                <div className="card-body">
                    <h5 className="card-title">{contact.name.first + " " + contact.name.last}</h5>
                    <p className="card-text">Email: {contact.email}</p>
                    <p className="card-text">Phone: {contact.phone}</p>
                    <p className="card-text">Cell: {contact.cell}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{contact.location.street.number + " " + contact.location.street.name}</small>
                    <br/>
                    <small className="text-muted">{contact.location.city + ", " + contact.location.state + " " + contact.location.postcode}</small>
                    <br/>
                    <small className="text-muted">{contact.location.country}</small>
                </div>
            </div>
        </div>
    );
}

export default SearchResults;