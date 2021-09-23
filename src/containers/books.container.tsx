import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { getBooks } from '../redux/actions/books'
import BooksComponent from '../components/books/books.component'
import { Books } from '../redux/types'

interface Props extends PropsFromRedux {
  books: Books
  getBooks: () => void
}

const BooksContainer: React.FC<Props> = (props) => {
  const { books, getBooks } = props

  useEffect(() => {
    getBooks()
  }, [])

  return <BooksComponent books={books} />
}

const mapStateToProps = (state) => ({
  books: state.books
})

const connector = connect(mapStateToProps, { getBooks })
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(BooksContainer)
