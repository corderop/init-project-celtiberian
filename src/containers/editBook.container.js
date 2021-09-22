import React from 'react'
import { connect } from 'react-redux'
import { updateBook } from '../actions/books'
import { Actions } from 'react-native-router-flux'
import EditBook from '../components/editBook/editBook.component'

const EditBookContainer = (props) => {
  const { id, books, updateBook } = props

  const cancelEdit = () => {
    Actions.pop()
  }

  const submitEdit = (book) => {
    updateBook(id, book.title, book.description, book.author)
    Actions.pop()
  }

  return (
    <EditBook
      book={books[id]}
      cancelAction={cancelEdit}
      editBook={submitEdit}
    />
  )
}

const mapStateToProps = (state) => ({
  books: state.books
})

export default connect(mapStateToProps, { updateBook })(EditBookContainer)
