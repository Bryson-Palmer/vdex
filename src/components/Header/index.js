import "./style.css"

function Header() {

    return (
        <div className="jumbotron jumbotron-fluid jumboBox">
            <h1 className="display-4 title">Vdex</h1>
            <div className="container myContainer">
                <p className="lead myLead">Vdex <span>(virtural index)</span> is here to help you manage your professional contacts for easy access anywhere.</p>
            </div>
            <div className="vdex">
                <p>Vdex</p>
            </div>
        </div>
    )
}

export default Header;