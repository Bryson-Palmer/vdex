import Card from "./Card"

function Body(props) {

    return (
        <div className="card">
            <Card users={props}/>
        </div>
    )

}

export default Body;