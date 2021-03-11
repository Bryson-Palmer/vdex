import Header from "../Header";
import Container from "../Container";
import "./style.css";

function Wrapper() {
    return (
        <div className="wrapper">
            <Header />
            <Container style={{ minHeight: "80%" }}>
            </Container>
        </div>
    )
}

export default Wrapper;