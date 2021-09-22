import React from 'react'
import { Text, View } from 'react-native'
import styles from './style'
import ButtonWrap from '../buttonWrap/buttonWrap.component'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const BookInfo = (props) => {
  const { title, author, description, deleteBook, editBook, style } = props
  const { t } = useTranslation('common')

  return (
    <View style={[style, styles.content]}>
      <View style={styles.titleWrap}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.author}> {author} </Text>
      </View>
      <Text style={styles.description}> {description} </Text>

      <ButtonWrap
        style={styles.buttons}
        buttons={[
          {
            key: 0,
            color: '#F47174',
            text: t('buttonsText.delete'),
            onPress: deleteBook
          },
          {
            key: 1,
            color: '#93CAED',
            text: t('buttonsText.edit'),
            onPress: editBook
          }
        ]}
      />
    </View>
  )
}

BookInfo.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  deleteBook: PropTypes.func.isRequired,
  editBook: PropTypes.func.isRequired,
  style: PropTypes.object
}

export default BookInfo
