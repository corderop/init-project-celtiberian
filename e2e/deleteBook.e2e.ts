import { by, device, expect, element } from 'detox'
import booksService from '../src/services/books.service'

describe('Delete book properly', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  afterAll(async () => {
    await booksService.resetServer()
  })

  test('It has a list of books', async () => {
    // Check the navbar has two elements
    await expect(element(by.id('booksComponent.bookList'))).toBeVisible()
    await expect(element(by.id('booksComponent.bookList.1'))).toBeVisible()
    await expect(element(by.id('booksComponent.bookList.2'))).toBeVisible()
  })

  test('Navigate to the book info', async () => {
    await element(by.id('booksComponent.bookList.1')).tap()
    await expect(element(by.id('bookComponent'))).toBeVisible()
  })

  test('Delete button visible', async () => {
    await expect(
      element(by.id('bookComponent.bookInfo.buttonWrap.0'))
    ).toBeVisible()
  })

  test('Delete the book, navigates to book list and the book disappear', async () => {
    await element(by.id('bookComponent.bookInfo.buttonWrap.0')).tap()
    await expect(element(by.id('booksComponent.bookList.1'))).toNotExist()
  })
})
