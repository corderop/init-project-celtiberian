import React, { Suspense, useEffect } from 'react'
import { Provider } from 'react-redux'
import { Router, Scene, Stack } from 'react-native-router-flux'
import store from './src/redux/index'
import BooksContainer from './src/containers/books.container'
import BookContainer from './src/containers/book.container'
import EditBookContainer from './src/containers/editBook.container'
import addBookContainer from './src/containers/addBook.container'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import common_en from './src/translation/en.json'
import common_es from './src/translation/es.json'
import Loading from './src/components/loading/loading.component'

const App: React.FC = () => {
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
          <Router>
            <Stack key="root">
              <Scene key="main" component={BooksContainer} hideNavBar />
              <Scene key="book" component={BookContainer} hideNavBar />
              <Scene key="addBook" component={addBookContainer} hideNavBar />
              <Scene key="editBook" component={EditBookContainer} hideNavBar />
            </Stack>
          </Router>
        </I18nextProvider>
      </Provider>
    </Suspense>
  )
}

export default App
