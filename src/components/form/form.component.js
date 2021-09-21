import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import styles from './style'
import Input from '../input/input.component'
import ButtonWrap from '../buttonWrap/buttonWrap.component'
import PropTypes from 'prop-types'

const Form = (props) => {
  const { fields, cancelTitle, submitTitle, onCancel, onSubmit, style } = props
  const [values, setValues] = useState({})

  useEffect(() => {
    const nextState = {}

    fields.forEach((f) => (nextState[f.key] = f.defaultValue || undefined))

    setValues(nextState)
  }, [fields])

  const changeValue = (val, field) => {
    setValues((lastValue) => ({
      ...lastValue,
      [field]: val
    }))
  }

  const submitForm = () => {
    for (const val of Object.values(values)) {
      if (val && val.trim() === '') {
        return false
      }
    }

    return onSubmit(values)
  }

  return (
    <View style={[style, styles.button]}>
      {fields.map((f) => (
        <Input
          style={styles.input}
          key={f.key}
          title={f.title}
          defaultValue={f.defaultValue}
          onChangeText={(val) => changeValue(val, f.key)}
        />
      ))}
      <ButtonWrap
        style={styles.buttons}
        buttons={[
          { key: 0, color: '#F47174', text: cancelTitle, onPress: onCancel },
          { key: 1, color: '#93CAED', text: submitTitle, onPress: submitForm }
        ]}
      />
    </View>
  )
}

Form.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.exact({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      defaultValue: PropTypes.string
    })
  ),
  cancelTitle: PropTypes.string.isRequired,
  submitTitle: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  style: PropTypes.object
}

export default Form
