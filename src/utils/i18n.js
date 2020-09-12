/**
 * Translate Module
 */
class i18n {
  constructor() {
    this._locales = {}
    this._fallback = null
    this._defaultLocale = null
  }
  /**
   * add a locale and its values to module
   * @param {string} locale locale code
   * @param {object} values translations
   * @param {boolean} fallback set this locale as default
   */
  add(locale, values, fallback = false) {
    this._locales[locale] = Object.assign({}, this._locales[locale], values)
    if (fallback) this._fallback = locale
  }
  /**
   * set default locale to translate
   */
  set locale(locale) {
    this._defaultLocale = locale
  }
  /**
   * get default locale to translate
   */
  get locale() {
    return this._defaultLocale
  }
  /**
   * format text with input values
   * @param {string} text text to format
   * @param {Array|object} formatValues values to apply
   * @example formatValues as Array
   * // return '12 of 20'
   * applyFormatting('%[0] of %[1]',[12,20])
   * @example formatValues as Object
   * // return 'Hello Mr James, welcome!'
   * applyFormatting('Hello %[personalTitle] %[name], welcome!',{personalTitle:'Mr',name:'James'})
   */
  applyFormatting(text, formatValues) {
    Object.entries(formatValues).forEach(([index, value]) => {
      regex = new RegExp('%[' + index + ']', 'g')
      text = text.replace(regex, value)
    })
    return text
  }
  /**
   * format text with numbers
   * @param {string} text text to format
   * @param {number} num number to apply
   */
  applyNumbers(text, num) {
    text = text.replace('-%n', String(-num))
    text = text.replace('%n', String(num))
    return text
  }
  /**
   * Args of translate function
   * @typedef {Object} translateArgs
   * @property {number} [value] number to format and evaluate if the translation have multiple variants
   * @property {Array|object} [formatValues] values for apply in the translation
   * @property {string} [locale] override default locale to translate this text
   */

  /**
   * function to translate text with values loaded in the module
   * @param {string} text text to translate
   * @param {translateArgs} options
   */
  translate(text, options = {}) {
    const { value = null, formatValues = [], locale = null } = options
    /**
     * Search value in locales
     * first check if locale is override or use default locale
     * after if the value not exit in the locale use the fallback locale
     */
    const translation =
      (this._locales[locale || this._defaultLocale] &&
        this._locales[locale || this._defaultLocale][text]) ||
      this._locales[this._fallback][text]

    // if none of this conditions are met then use original string and show a warning
    if (!translation) {
      console.warn(`the translation of "${text}" doesn't exist`)
      return this.applyFormatting(this.applyNumbers(text, value), formatValues)
    }
    // if the translation haven't variants format and return translation
    if (typeof translation === 'string')
      return this.applyFormatting(
        this.applyNumbers(translation, value),
        formatValues,
      )

    /**
     * if the translation has variants, look for each one which meets the condition
     * [min,max, variant]
     * to get the variant to correspond evaluate if de value is in the range of min and
     */
    if (translation instanceof Array) {
      let a = value === null
      for (let i = 0; i <= translation.length; i++) {
        const variant = translation[i]
        let b = variant[0] === null
        let c = variant[1] === null
        let d = value >= variant[0]
        let e = value <= variant[1]
        if (
          (a && b && c) ||
          (!a && ((!b && d && (c || e)) || (b && !c && e)))
        ) {
          return this.applyFormatting(
            this.applyNumbers(variant[2], value),
            formatValues,
          )
        }
      }
    }
  }
}
const instance = new i18n()

export default instance
