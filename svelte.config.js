const autoPreprocess = require('svelte-preprocess')

module.exports = {
  preprocess: autoPreprocess({
    postcss: true,
    typescript: true,
    defaults: { style: 'postcss' },
  }),
}
