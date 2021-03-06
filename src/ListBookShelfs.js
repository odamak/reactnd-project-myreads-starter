import React from 'react'

function ListBookShelfs (props) {
        //console.log('Props', this.props)
        return(
            <div>
            { props.bookshelfs.map((bookshelf) => (

            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookshelf.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {bookshelf.Books.map((book) => (

                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.url})` }}></div>
                                <div className="book-shelf-changer">
                                  <select>
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>
                              <div className="book-title">{book.title}</div>
                              <div className="book-authors">{book.author}</div>
                            </div>

                        ))}

                    </ol>
                </div>
            </div>

            ))}
            </div>
            )

}

export default ListBookShelfs;