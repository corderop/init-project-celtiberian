import axios from 'axios'

class BooksService {
  constructor() {
    this.PATH = 'http://192.168.0.102:3000/'
  }

  async getAllBooks() {
    try {
      const res = await axios({
        method: 'get',
        url: this.PATH + 'book'
      })

      return res.data
    } catch (err) {
      console.log(err)
      return {}
    }
  }

  async addBook(title, author, description) {
    try {
      const res = await axios({
        method: 'post',
        url: this.PATH + 'book',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          title: title,
          author: author,
          description: description
        }
      })

      const { id } = res.data

      return id
    } catch (err) {
      console.log(err)
      return -1
    }
  }

  async updateBook(id, title, author, description) {
    try {
      await axios({
        method: 'put',
        url: this.PATH + `book/${id}`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          title: title,
          author: author,
          description: description
        }
      })

      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }

  async deleteBook(id) {
    try {
      await axios({
        method: 'delete',
        url: this.PATH + `book/${id}`
      })

      return true
    } catch (err) {
      console.log(err)
      return false
    }
  }
}

export default new BooksService()
