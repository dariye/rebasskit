module.exports = (baseConfig, env, defaultConfig) => ({
  ...defaultConfig,
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules
    ],
  }
})
