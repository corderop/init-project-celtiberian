import React, { useEffect, useState } from 'react'
import { View, ViewStyle } from 'react-native'
import styles from './style'
import Input from '../input/input.component'
import ButtonWrap from '../buttonWrap/buttonWrap.component'
import { InputType } from '../input/input.type'
import { ObjectField } from './form.types'

interface FormInputType extends InputType {
  key: string
}

interface Props {
  fields: Array<FormInputType>
  cancelTitle: string
  submitTitle: string
  onCancel: () => void
  onSubmit: (values: ObjectField) => void
  style?: ViewStyle
}

const Form: React.FC<Props> = (props) => {
  const { fields, cancelTitle, submitTitle, onCancel, onSubmit, style } = props
  const [values, setValues] = useState<ObjectField>({})

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
    <View style={[style]}>
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

export default Form
