import React from 'react'
import { Actions } from 'react-native-router-flux'
import { connect, ConnectedProps } from 'react-redux'
import { deleteBook } from '../redux/actions/books'
import Book from '../components/book/book.component'
import { Books } from '../redux/types'

interface Props extends PropsFromRedux {
  id: number
  books: Books
  deleteBook: (id: number) => void
}

const BookContainer: React.FC<Props> = (props) => {
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

const mapStateToProps = (state) => ({
  books: state.books
})

const connector = connect(mapStateToProps, { deleteBook })
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(BookContainer)
