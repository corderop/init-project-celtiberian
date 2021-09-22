import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './src/translation/en'
import es from './src/translation/es'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es }
  }
})

i18n.changeLanguage('es')
