const webpack = require('webpack');

module.exports = {
  webpack(config) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer']
      })
    );

    config.resolve.fallback = {
      buffer: require.resolve('buffer'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify')
    };

    return config;
  }
};

/*
const webpack = require('webpack');
const { removeModuleScopePlugin, override } = require('customize-cra');

module.exports = override(
  (() => config => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer']
      })
    );

    config.resolve.fallback = {
      buffer: require.resolve('buffer'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify')
    };

    return config;
  })(),
  removeModuleScopePlugin()
);
*/
