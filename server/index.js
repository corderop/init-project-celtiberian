const express = require('express')
const app = express()

let lastId = 2

let books = {
  1: {
    id: 1,
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    description: 'A magician kid'
  },
  2: {
    id: 2,
    title: 'The Pillars of the Earth',
    author: 'Ken Follet',
    description: 'A really big book'
  }
}

app.use(express.json())

app.get('/book', (req, res) => {
  try {
    return res.send(books)
  } catch (err) {
    console.log(err)
    return res.sendStatus(400)
  }
})

app.post('/book', (req, res) => {
  try {
    books[`${lastId + 1}`] = {
      id: lastId + 1,
      title: req.body.title,
      author: req.body.author,
      description: req.body.description
    }
    lastId++
    return res.status(200).send({ id: lastId })
  } catch (err) {
    return res.sendStatus(400)
  }
})

app.put('/book/:id', (req, res) => {
  try {
    if (books[`${req.params.id}`]) {
      books[`${req.params.id}`] = {
        id: `${req.params.id}`,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
      }
      return res.status(200).send({ id: lastId })
    } else {
      return res.sendStatus(400)
    }
  } catch (err) {
    return res.sendStatus(400)
  }
})

app.delete('/book/:id', (req, res) => {
  try {
    delete books[`${req.params.id}`]

    return res.sendStatus(200)
  } catch (err) {
    return res.sendStatus(400)
  }
})

app.post('/reset', (req, res) => {
  try {
    books = {
      1: {
        id: 1,
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        description: 'A magician kid'
      },
      2: {
        id: 2,
        title: 'The Pillars of the Earth',
        author: 'Ken Follet',
        description: 'A really big book'
      }
    }

    return res.sendStatus(200)
  } catch (err) {
    return res.sendStatus(400)
  }
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
