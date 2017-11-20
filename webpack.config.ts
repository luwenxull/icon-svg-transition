
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as path from 'path'
import * as webpack from 'webpack'

const config: webpack.Configuration = {
  entry: [
    './test/index.tsx',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      chunksSortMode: 'dependency',
      template: path.resolve(__dirname, './template/index.ejs'),
      title: 'desvg.js',
    }),
  ],

  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.tsx?$/,
        loaders: [
          'ts-loader',
        ],
        exclude: path.resolve(__dirname, 'node_modules'),
        // include: path.resolve(__dirname, 'src'),
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },

  devServer: {
    hot: true,
  },

}

export default config
