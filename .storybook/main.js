module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-links',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['postcss-loader'],
    })
    return config
  },
}
