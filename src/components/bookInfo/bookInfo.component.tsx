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
  testID?: string
}

const BookInfo: React.FC<Props> = (props) => {
  const { title, author, description, deleteBook, editBook, style, testID } =
    props
  const { t } = useTranslation('common')

  return (
    <View style={[style]} testID={testID}>
      <View style={styles.titleWrap}>
        <Text style={styles.title} testID={`${testID}.title`}>
          {title}
        </Text>
        <Text style={styles.author} testID={`${testID}.author`}>
          {author}
        </Text>
      </View>
      <Text style={styles.description} testID={`${testID}.description`}>
        {description}
      </Text>

      <ButtonWrap
        testID={`${testID}.buttonWrap`}
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
