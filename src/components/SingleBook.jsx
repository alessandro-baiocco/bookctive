import { Component } from "react";
import { Card, Container } from "react-bootstrap";

class SingleBook extends Component {
  state = { selected: true };
  render() {
    return (
      <Container className="d-flex justify-content-center">
        <Card
          style={{ backgroundColor: this.state.selected ? "blue" : "red" }}
          className="d-flex justify-content-center"
          onClick={() => {
            this.state.selected ? this.setState({ selected: false }) : this.setState({ selected: true });
          }}
        >
          <img src={this.props.image} className="card-img-top" alt={this.props.title} style={{ maxWidth: "50%" }} />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
          </div>
        </Card>
      </Container>
    );
  }
}

export default SingleBook;
