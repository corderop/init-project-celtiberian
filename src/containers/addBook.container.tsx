import React from 'react'
import { Actions } from 'react-native-router-flux'
import { connect, ConnectedProps } from 'react-redux'
import { createBook } from '../redux/actions/books'
import AddBook from '../components/addBook/addBook.component'

interface Props extends PropsFromRedux {
  createBook: (title: string, author: string, description: string) => void
}

const AddBookContainer: React.FC<Props> = (props) => {
  const { createBook } = props

  const cancelBookCreation = () => {
    Actions.jump('main')
  }

  const submitBookCreation = (book) => {
    createBook(book.title, book.author, book.description)
    Actions.jump('main')
  }

  return (
    <AddBook
      createBook={submitBookCreation}
      cancelBookCreation={cancelBookCreation}
    />
  )
}

const connector = connect(null, { createBook })
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(AddBookContainer)
