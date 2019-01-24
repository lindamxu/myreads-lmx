import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js';

class Shelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    handleShelfChange: PropTypes.func.isRequired
  };

  render () {
    const { books, handleShelfChange } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelftitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book,i) =>
              <Book
                key={book.id}
                book={book}
                shelf={book.shelf}
                title={book.title}
                author={book.authors}
                imageLink = {book.imageLinks.thumbnail}
                handleShelfChange={handleShelfChange}
                id={book.id}
                />
            )}
          </ol>
        </div>
      </div>
    );
  }

}
export default Shelf;
