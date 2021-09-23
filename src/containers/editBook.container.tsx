import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { updateBook } from '../redux/actions/books'
import { Actions } from 'react-native-router-flux'
import EditBook from '../components/editBook/editBook.component'
import { Books } from '../redux/types'

interface Props extends PropsFromRedux {
  id: number
  books: Books
  updateBook: (
    id: number,
    title: string,
    description: string,
    author: string
  ) => void
}

const EditBookContainer: React.FC<Props> = (props) => {
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

const connector = connect(mapStateToProps, { updateBook })
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(EditBookContainer)
