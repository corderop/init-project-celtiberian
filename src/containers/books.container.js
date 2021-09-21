import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getBooks } from '../actions/books'
import Books from '../components/books/books.component'
import PropTypes from 'prop-types'

const BooksContainer = (props) => {
  const { books, getBooks } = props

  useEffect(() => {
    getBooks()
  }, [])

  return <Books books={books} />
}

const mapStateToProps = (state) => ({
  books: state.books
})

BooksContainer.propTypes = {
  books: PropTypes.object.isRequired,
  getBooks: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { getBooks })(BooksContainer)
