import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import "regenerator-runtime/runtime";
import { Link } from "react-router-dom";
import axios from "axios";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [], isLoading: true };
    this.remove = this.remove.bind(this);
    this.loadBooks = this.loadBooks.bind(this);
    this._isMounted = false;
    this.loadBooks();
  }

  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  async loadBooks() {
    const response = await axios.get("/api/books");
    const books = await response.data._embedded.books;
    if (this._isMounted) {
      this.setState({ books: books, isLoading: false });
    }
  }

  async remove(id) {
    const url = "/api/books/" + id;
    try {
      let response = await axios.delete(url);
    } catch (e) {}
    if (this._isMounted) {
      let updatedBooks = [...this.state.books].filter(i => i.id !== id);
      this.setState({ books: updatedBooks, isLoading: false });
    }
  }

  render() {
    const bookListTmp = this.state.books.map(book => {
      return (
        <tr key={book.id}>
          <td style={{ whiteSpace: "nowrap" }}>{book.title}</td>
          <td>{book.author}</td>
          <td>
            <ButtonGroup>
              <Button
                size="sm"
                color="primary"
                tag={Link}
                to={"/books/" + book.id}
              >
                Edit
              </Button>
              <Button
                size="sm"
                color="danger"
                onClick={() => this.remove(book.id)}
              >
                Delete
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });

    return (
      <>
        <Button color="success" tag={Link} to="/books/new">
          Add Book
        </Button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{bookListTmp}</tbody>
        </table>
      </>
    );
  }
}

export default BookList;
