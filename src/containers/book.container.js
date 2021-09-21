import React from 'react'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { deleteBook } from '../actions/books'
import Book from '../components/book/book.component'
import PropTypes from 'prop-types'

const BookContainer = (props) => {
  const { id, books, deleteBook } = props

  const removeBook = () => {
    deleteBook(id)
    Actions.pop()
  }

  const editBook = () => {
    Actions.push('editBook', { id: id })
  }

  return <Book book={books[id]} deleteBook={removeBook} editBook={editBook} />
}

BookContainer.propTypes = {
  id: PropTypes.string,
  books: PropTypes.object,
  deleteBook: PropTypes.func
}

const mapStateToProps = (state) => ({
  books: state.books
})

export default connect(mapStateToProps, { deleteBook })(BookContainer)
