import axios from 'axios'
import { Books } from '../redux/types'

class BooksService {
  private PATH: string

  constructor() {
    this.PATH = 'http://192.168.0.112:3000/'
  }

  async getAllBooks(): Promise<Books> {
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

  async addBook(
    title: string,
    author: string,
    description: string
  ): Promise<number> {
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

  async updateBook(
    id: number,
    title: string,
    author: string,
    description: string
  ): Promise<boolean> {
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

  async deleteBook(id: number): Promise<boolean> {
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
