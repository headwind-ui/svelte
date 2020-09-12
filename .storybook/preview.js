import '../src/styles/style.css'
import i18n from '../src/utils/i18n'
import en from '../src/locales/en'
import es from '../src/locales/es'
i18n.add('en', en, true)
i18n.add('es', es)
i18n.locale = 'es'
