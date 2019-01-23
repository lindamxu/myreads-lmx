import React, { Component } from 'react';

class SearchItem extends Component {

  addBookToShelf = (event) => {
    alert(this.props.title + ' has been added to your bookcase.');
    this.props.addNewBook(this.props.book, event.target.value);
  }
  render() {
    const { title, author, description, imageLink } = this.props;
    return (
      <li className="search-item">
        <div className="search-item-container">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + imageLink + ")" }}></div>
          <div className="search-item-contents">
            <div className="search-item-header">
              <h2 className="search-book-title">{title}</h2>
              <div className="add-search-item">
                  <button type="button">
                    <select defaultValue="none" onChange={this.addBookToShelf}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </button>
              </div>
            </div>
            <h3 className="search-book-author">Primary Author: {author}</h3>
            <div className="search-book-description">{description}</div>
          </div>
        </div>
      </li>
    );
  }
}
export default SearchItem;
