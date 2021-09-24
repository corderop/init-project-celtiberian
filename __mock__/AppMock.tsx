import React, { Suspense, useEffect } from 'react'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import common_en from '../src/translation/en.json'
import common_es from '../src/translation/es.json'
import Loading from '../src/components/loading/loading.component'
import { Store } from 'redux'
import { State, Action } from '../src/redux/types'

interface Props {
  store: Store<State, Action>
  Component: React.FC
  componentProps: {
    [key: string]: unknown
  }
}

const App: React.FC<Props> = (props) => {
  const { store, Component, componentProps } = props

  useEffect(() => {
    selectedLanguage()
  }, [])

  const selectedLanguage = () => {
    i18next.init({
      lng: 'es',
      resources: {
        en: {
          common: common_en
        },
        es: {
          common: common_es
        }
      }
    })
  }

  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <Component {...componentProps} />
        </I18nextProvider>
      </Provider>
    </Suspense>
  )
}

export default App
