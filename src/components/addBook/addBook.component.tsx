import React from 'react'
import { View } from 'react-native'
import styles from './style'
import Navbar from '../navbar/navbar.component'
import Form from '../form/form.component'
import { Actions } from 'react-native-router-flux'
import { useTranslation } from 'react-i18next'
import { ObjectField } from '../form/form.types'

interface Props {
  createBook: (book: ObjectField) => void
  cancelBookCreation: () => void
}

const AddBook: React.FC<Props> = (props) => {
  const { createBook, cancelBookCreation } = props
  const { t } = useTranslation('common')

  return (
    <View testID={'addBook'}>
      <Navbar
        testID={'addBook.navbar'}
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
      <Form
        testID={'addBook.form'}
        style={styles.form}
        fields={[
          { key: 'title', title: t('bookAttributes.title'), defaultValue: '' },
          {
            key: 'author',
            title: t('bookAttributes.author'),
            defaultValue: ''
          },
          {
            key: 'description',
            title: t('bookAttributes.description'),
            defaultValue: ''
          }
        ]}
        submitTitle={t('buttonsText.submit')}
        onSubmit={createBook}
        cancelTitle={t('buttonsText.cancel')}
        onCancel={cancelBookCreation}
      />
    </View>
  )
}

export default AddBook
