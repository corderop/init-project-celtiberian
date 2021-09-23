import React from 'react'
import { Text, View, ViewStyle } from 'react-native'
import styles from './style'
import ButtonWrap from '../buttonWrap/buttonWrap.component'
import { useTranslation } from 'react-i18next'

interface Props {
  title: string
  author: string
  description: string
  deleteBook: () => void
  editBook: () => void
  style?: ViewStyle
}

const BookInfo: React.FC<Props> = (props) => {
  const { title, author, description, deleteBook, editBook, style } = props
  const { t } = useTranslation('common')

  return (
    <View style={[style]}>
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

export default BookInfo
