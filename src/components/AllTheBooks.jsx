import { Component } from "react";
import libri from "./books/scifi.json";
import { Container, ListGroup, Row, Card, Offcanvas } from "react-bootstrap";

class AllTheBooks extends Component {
  state = {
    selectedBook: null,
  };
  render() {
    return (
      <>
        <Container>
          {this.state.selectedBook ? (
            <Container>
              <h3>{this.state.selectedBook[0]}</h3>
              <p>{this.state.selectedBook[1]}</p>
            </Container>
          ) : (
            <></>
          )}
          <Row className="g-2">
            {libri.map((libro, index) => (
              <Card
                key={`book-${index}`}
                className="col-4"
                onClick={() => this.setState({ selectedBook: [libro.title, libro.price] })}
              >
                <img src={libro.img} className="card-img-top" alt={libro.title} />
                <div className="card-body">
                  <h5 className="card-title">{libro.title}</h5>
                </div>
                <ListGroup className="list-group list-group-flush">
                  <li className="list-group-item">{libro.category}</li>
                  <li className="list-group-item">{libro.price}</li>
                  <li className="list-group-item">{index}</li>
                </ListGroup>
              </Card>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default AllTheBooks;
