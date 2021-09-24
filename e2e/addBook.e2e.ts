import { by, device, expect, element } from 'detox'

describe('Adding books works properly', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  test('Has a Navbar with a two elements', async () => {
    // Check the navbar has two elements
    await expect(element(by.id('navbar'))).toBeVisible()
    await expect(element(by.id('navbar.pressable')).atIndex(1)).toBeVisible()
  })

  test('Navigate to screen', async () => {
    // Navigate to add book screen
    await element(by.id('navbar.pressable')).atIndex(1).tap()
    await expect(element(by.id('addBook'))).toBeVisible()
  })

  test('Form fields and buttons visible', async () => {
    // Check the form is correct
    await expect(element(by.id('testLabel.title'))).toBeVisible()
    await expect(element(by.id('testInput.title'))).toBeVisible()

    await expect(element(by.id('testLabel.author'))).toBeVisible()
    await expect(element(by.id('testInput.author'))).toBeVisible()

    await expect(element(by.id('testLabel.description'))).toBeVisible()
    await expect(element(by.id('testInput.description'))).toBeVisible()

    await expect(element(by.id('button.0'))).toBeVisible()
    await expect(element(by.id('button.1'))).toBeVisible()
  })

  test('Create the book properly', async () => {
    // Insert the values into the form and submit
    await element(by.id('testInput.title')).typeText('Test title')
    await element(by.id('testInput.author')).typeText('Test author')
    await element(by.id('testInput.description')).typeText('Test description')
    await element(by.id('button.1')).tap()

    // Check the book has been created
    await expect(element(by.id('booksComponent'))).toBeVisible() // It moves to book list
    await expect(element(by.text('Test title'))).toBeVisible() // The book list has the new book
  })

  test('Cancel button is working properly', async () => {
    // Go to add book
    await element(by.id('navbar.pressable')).atIndex(1).tap()
    await expect(element(by.id('addBook'))).toBeVisible()

    // Set input values but press cancel button
    await element(by.id('testInput.title')).typeText('Test title 2')
    await element(by.id('testInput.author')).typeText('Test author 2')
    await element(by.id('testInput.description')).typeText('Test description 2')
    await element(by.id('button.0')).tap() // Cancel button instead of submit

    // Check that the book hasn't been created
    await expect(element(by.id('booksComponent'))).toBeVisible() // It moves to book list
    await expect(element(by.text('Test title 2'))).toNotExist() // The book list doesn't has the new book
  })
})
