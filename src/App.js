import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as BooksAPI from './BooksAPI.js';
import './App.css'
import BookList from './components/BookList.js';
import SearchPage from './components/SearchPage.js';

class BooksApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      newBooks: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      });
    });
  }
  handleShelfChange = (updatedBook, shelf) => {
    BooksAPI.update(updatedBook, shelf).then((response => {
      updatedBook.shelf = shelf;
      this.setState((prevState) => ({
        books: prevState.books.filter((book) => book.id !== updatedBook.id).concat(updatedBook)
      }))
    }))
  }
  searchBooks = (query) => {
    this.setState({ query });
    if (query) {
      BooksAPI.search(query.trim(), 20).then((books => {
        if (books.length > 0 ) {
          this.setState({ newBooks: books })
        }
        else {
          this.setState({ newBooks: [] })
        }
      }))
    }else this.setState({ newBooks: [] })
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => (
              <BookList
                booksOnShelf={this.state.books}
                handleShelfChange={this.handleShelfChange}/>
            )}
          />
          <Route
            path="/search" render={() => (
              <SearchPage
                searchBooks={this.searchBooks}
                booksOnShelf={this.state.books}
                newBooks={this.state.newBooks}
                addNewBook={this.handleShelfChange}
                />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
