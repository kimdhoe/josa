import { join } from 'path'

const context = join(__dirname, 'src')

const config = {
  context,
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'josa'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        include: context
      }
    ]
  }
}

export default config
