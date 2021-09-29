import { by, device, expect, element } from 'detox'
import booksService from '../src/services/books.service'

describe('Adding books works properly', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  afterAll(async () => {
    await booksService.resetServer()
  })

  test('Has a Navbar with a two elements', async () => {
    // Check the navbar has two elements
    await expect(element(by.id('booksComponent.navbar'))).toBeVisible()
    await expect(element(by.id('booksComponent.navbar.1'))).toBeVisible()
  })

  test('Navigate to screen', async () => {
    // Navigate to add book screen
    await element(by.id('booksComponent.navbar.1')).tap()
    await expect(element(by.id('addBook'))).toBeVisible()
  })

  test('Form fields and buttons visible', async () => {
    // Check the form is correct
    await expect(element(by.id('addBook.form.input.title.label'))).toBeVisible()
    await expect(element(by.id('addBook.form.input.title.input'))).toBeVisible()

    await expect(
      element(by.id('addBook.form.input.author.label'))
    ).toBeVisible()
    await expect(
      element(by.id('addBook.form.input.author.input'))
    ).toBeVisible()

    await expect(
      element(by.id('addBook.form.input.description.label'))
    ).toBeVisible()
    await expect(
      element(by.id('addBook.form.input.description.input'))
    ).toBeVisible()

    await expect(element(by.id('addBook.form.buttonWrap.0'))).toBeVisible()
    await expect(element(by.id('addBook.form.buttonWrap.1'))).toBeVisible()
  })

  test('Create the book properly', async () => {
    // Insert the values into the form and submit
    await element(by.id('addBook.form.input.title.input')).typeText(
      'Test title'
    )
    await element(by.id('addBook.form.input.author.input')).typeText(
      'Test author'
    )
    await element(by.id('addBook.form.input.description.input')).typeText(
      'Test description'
    )
    await element(by.id('addBook.form.buttonWrap.1')).tap()

    // Check the book has been created
    await expect(element(by.id('booksComponent'))).toBeVisible() // It moves to book list
    await expect(element(by.text('Test title'))).toBeVisible() // The book list has the new book
  })

  test('Cancel button is working properly', async () => {
    // Go to add book
    await element(by.id('booksComponent.navbar.1')).tap()
    await expect(element(by.id('addBook'))).toBeVisible()

    // Set input values but press cancel button
    await element(by.id('addBook.form.input.title.input')).typeText(
      'Test title 2'
    )
    await element(by.id('addBook.form.input.author.input')).typeText(
      'Test author 2'
    )
    await element(by.id('addBook.form.input.description.input')).typeText(
      'Test description 2'
    )
    await element(by.id('addBook.form.buttonWrap.0')).tap()

    // Check that the book hasn't been created
    await expect(element(by.id('booksComponent'))).toBeVisible() // It moves to book list
    await expect(element(by.text('Test title 2'))).toNotExist() // The book list doesn't has the new book
  })
})
