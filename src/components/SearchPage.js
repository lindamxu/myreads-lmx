import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchItem from './SearchItem.js';

class SearchPage extends Component {

  getBooks = (event) => {
    const query = event.target.value;
    this.setState({ query });
    this.props.searchBooks(query);
  }

  render() {
    const { newBooks, addNewBook } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search"/>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.getBooks}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {newBooks.map((book,i) => {
              if (!(book.hasOwnProperty('authors'))) {
                return <SearchItem
                  key={i}
                  book={book}
                  title={book.title}
                  author={'None Found'}
                  description={book.description}
                  addNewBook={addNewBook}
                  />
              }
              else {
                return <SearchItem
                  book={book}
                  key={i}
                  title={book.title}
                  imageLink={book.imageLinks.thumbnail}
                  author={book.authors[0]}
                  description={book.description}
                  addNewBook={addNewBook}
                  />
              }
            }
            )}

          </ol>
        </div>
      </div>
    );
  }
}
export default SearchPage;
