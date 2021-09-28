import React from 'react'
import { View } from 'react-native'
import styles from './style'
import Navbar from '../navbar/navbar.component'
import Form from '../form/form.component'
import { Actions } from 'react-native-router-flux'
import { useTranslation } from 'react-i18next'
import { Book } from '../../redux/types'
import { ObjectField } from '../form/form.types'

interface Props {
  book: Book
  cancelAction: () => void
  editBook: (book: ObjectField) => void
}

const EditBook: React.FC<Props> = (props) => {
  const { book, cancelAction, editBook } = props
  const { t } = useTranslation('common')

  return (
    <View testID={'editBook'}>
      <Navbar
        pages={[
          {
            key: 0,
            text: t('mainPage.tutorials'),
            action: () => Actions.jump('main')
          },
          {
            key: 1,
            text: t('mainPage.add'),
            action: () => Actions.jump('addBook')
          }
        ]}
      />
      {book && (
        <Form
          testID={'editBook.form'}
          style={styles.form}
          fields={[
            {
              key: 'title',
              title: t('bookAttributes.title'),
              defaultValue: book.title
            },
            {
              key: 'author',
              title: t('bookAttributes.author'),
              defaultValue: book.author
            },
            {
              key: 'description',
              title: t('bookAttributes.description'),
              defaultValue: book.description
            }
          ]}
          submitTitle={t('buttonsText.submit')}
          onSubmit={editBook}
          cancelTitle={t('buttonsText.cancel')}
          onCancel={cancelAction}
        />
      )}
    </View>
  )
}

export default EditBook
