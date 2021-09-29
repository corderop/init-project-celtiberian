import { by, device, expect, element } from 'detox'
import booksService from '../src/services/books.service'

describe('Edit book info works properly', () => {
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

  test('Edit and cancel buttons are visible and pressable', async () => {
    await expect(
      element(by.id('bookComponent.bookInfo.buttonWrap.1'))
    ).toBeVisible()
    await element(by.id('bookComponent.bookInfo.buttonWrap.1')).tap()
  })

  test('Form fields and buttons visible', async () => {
    // Check the form is correct
    await expect(
      element(by.id('editBook.form.input.title.label'))
    ).toBeVisible()
    await expect(
      element(by.id('editBook.form.input.title.input'))
    ).toBeVisible()

    await expect(
      element(by.id('editBook.form.input.author.label'))
    ).toBeVisible()
    await expect(
      element(by.id('editBook.form.input.author.input'))
    ).toBeVisible()

    await expect(
      element(by.id('editBook.form.input.description.label'))
    ).toBeVisible()
    await expect(
      element(by.id('editBook.form.input.description.input'))
    ).toBeVisible()

    await expect(element(by.id('editBook.form.buttonWrap.0'))).toBeVisible()
    await expect(element(by.id('editBook.form.buttonWrap.1'))).toBeVisible()
  })

  test('Edit the book', async () => {
    await element(by.id('editBook.form.input.title.input')).clearText()
    await element(by.id('editBook.form.input.title.input')).typeText(
      'Title test'
    )

    await element(by.id('editBook.form.input.author.input')).clearText()
    await element(by.id('editBook.form.input.author.input')).typeText(
      'Author test'
    )

    await element(by.id('editBook.form.input.description.input')).clearText()
    await element(by.id('editBook.form.input.description.input')).typeText(
      'Description test'
    )

    await element(by.id('editBook.form.buttonWrap.1')).tap()
    await expect(element(by.text('Title test'))).toBeVisible()
  })

  test('Pressing on cancel does not edit the book info', async () => {
    // Go again to edit screen
    await element(by.id('bookComponent.bookInfo.buttonWrap.1')).tap()

    await element(by.id('editBook.form.input.title.input')).clearText()
    await element(by.id('editBook.form.input.title.input')).typeText(
      'Title test 2'
    )

    await element(by.id('editBook.form.input.author.input')).clearText()
    await element(by.id('editBook.form.input.author.input')).typeText(
      'Author test 2'
    )

    await element(by.id('editBook.form.input.description.input')).clearText()
    await element(by.id('editBook.form.input.description.input')).typeText(
      'Description test 2'
    )

    await element(by.id('editBook.form.buttonWrap.0')).tap()
    await expect(element(by.text('Title test 2'))).toNotExist()
    await expect(element(by.text('Title test'))).toBeVisible()
  })
})
