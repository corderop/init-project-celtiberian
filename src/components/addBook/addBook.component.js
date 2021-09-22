import React from 'react'
import { View } from 'react-native'
import styles from './style'
import Navbar from '../navbar/navbar.component'
import Form from '../form/form.component'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const AddBook = (props) => {
  const { createBook, cancelBookCreation } = props
  const { t } = useTranslation('common')

  return (
    <View>
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
      <Form
        style={styles.form}
        fields={[
          { key: 'title', title: t('bookAttributes.title') },
          { key: 'author', title: t('bookAttributes.author') },
          { key: 'description', title: t('bookAttributes.description') }
        ]}
        submitTitle={t('buttonsText.submit')}
        onSubmit={createBook}
        cancelTitle={t('buttonsText.cancel')}
        onCancel={cancelBookCreation}
      />
    </View>
  )
}

AddBook.propTypes = {
  createBook: PropTypes.func.isRequired,
  cancelBookCreation: PropTypes.func.isRequired
}

export default AddBook
