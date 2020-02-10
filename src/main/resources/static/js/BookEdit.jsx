import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

class BookEdit extends Component {
  emptyItem = {
    title: "",
    author: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.id !== "new") {
      const group = await (
        await fetch("/api/books/" + this.props.match.params.id)
      ).json();
      this.setState({ item: group });
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = { ...this.state.item };
    item[name] = value;
    this.setState({ item });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { item } = this.state;
    const apiPre = item.id ? "/" + item.id : "";

    const newBook = {
      title: this.state.item.title,
      author: this.state.item.author
    };

    await fetch("/api/books" + apiPre, {
      method: item.id ? "PUT" : "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBook)
    });
    this.props.history.push("/");
  }

  render() {
    const { item } = this.state;
    const titlee = <h2>{item.id ? "Edit Book" : "Add Book"}</h2>;

    return (
      <div>
        <Container>
          {titlee}
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="name">Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                value={item.title || ""}
                onChange={this.handleChange}
                autoComplete="title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">Author</Label>
              <Input
                type="text"
                name="author"
                id="author"
                value={item.author || ""}
                onChange={this.handleChange}
                autoComplete="author"
              />
            </FormGroup>
            <FormGroup>
              <Button color="primary" type="submit">
                Save
              </Button>{" "}
              <Button color="secondary" tag={Link} to="/">
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(BookEdit);
