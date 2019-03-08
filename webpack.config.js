module.exports = {
  mode: 'production',
  entry: {
    enum: ['babel-polyfill', './src/Enum.js'],
  },

  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js'],
  },

  externals: {},
};
