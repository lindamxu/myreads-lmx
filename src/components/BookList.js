import React, { Component } from 'react';
import Shelf from './Shelf.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class BookList extends Component {
  state = {
    query: '',
    newBooks: []
  }

  static propTypes = {
    booksOnShelf: PropTypes.array.isRequired,
    handleShelfChange: PropTypes.func.isRequired
  }
  render() {
    const { booksOnShelf, handleShelfChange } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf
            key="currently"
            shelftitle="Currently Reading"
            books={booksOnShelf.filter(book => book.shelf === "currentlyReading")}
            handleShelfChange={handleShelfChange}
            />
          <Shelf
            key="wantToRead"
            shelftitle="Want to Read"
            books={booksOnShelf.filter(book => book.shelf === "wantToRead")}
            handleShelfChange={handleShelfChange}
            />
          <Shelf
            key="read"
            shelftitle="Read"
            books={booksOnShelf.filter(book => book.shelf === "read")}
            handleShelfChange={handleShelfChange}
            />
        </div>
        <div className="open-search">
          <Link to="search" params={{ newBooks: this.state.newBooks }}>
            <button type="button" />
          </Link>
        </div>
      </div>

    );
  }

}
export default BookList;
