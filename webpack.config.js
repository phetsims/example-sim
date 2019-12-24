const path = require( 'path' );

module.exports = {
  optimization: {
    minimize: false, // <---- disables uglify.
  },

  entry: [ './js/example-sim-main.js', '../circuit-construction-kit-ac/js/circuit-construction-kit-ac-main.js' ],
  output: {
    filename: 'main.js',
    path: path.resolve( __dirname, 'dist' ),
    publicPath: path.resolve( __dirname, '/js/' )
  },
  watchOptions: {
    poll: true
  },
  devServer: {
    contentBase: path.join( __dirname, '../' ),
    compress: true,
    port: 9000,
    publicPath: path.resolve( __dirname, '/js/' ),
    hot: true
  },
  // devtool: 'source-map',
  // watch:true,
  resolve: {
    alias: {
      ACID_BASE_SOLUTIONS: path.resolve( __dirname, '../acid-base-solutions/js' ),
      AXON: path.resolve( __dirname, '../axon/js' ),
      BRAND: path.resolve( __dirname, '../brand/phet/js' ), // TODO: how to support multiple brands?
      CIRCUIT_CONSTRUCTION_KIT_AC: path.resolve( __dirname, '../circuit-construction-kit-ac/js' ),
      CIRCUIT_CONSTRUCTION_KIT_COMMON: path.resolve( __dirname, '../circuit-construction-kit-common/js' ),
      DOT: path.resolve( __dirname, '../dot/js' ),
      EXAMPLE_SIM: path.resolve( __dirname, './js' ),
      GRIDDLE: path.resolve( __dirname, '../griddle/js' ),
      JOIST: path.resolve( __dirname, '../joist/js' ),
      KITE: path.resolve( __dirname, '../kite/js' ),
      PHETCOMMON: path.resolve( __dirname, '../phetcommon/js' ),
      PHET_CORE: path.resolve( __dirname, '../phet-core/js' ),
      PHET_IO: path.resolve( __dirname, '../phet-io/js' ),
      REPOSITORY: path.resolve( __dirname, '../circuit-construction-kit-ac/' ),
      SCENERY: path.resolve( __dirname, '../scenery/js' ),
      SCENERY_PHET: path.resolve( __dirname, '../scenery-phet/js' ),
      SUN: path.resolve( __dirname, '../sun/js' ),
      TAMBO: path.resolve( __dirname, '../tambo/js' ),
      TANDEM: path.resolve( __dirname, '../tandem/js' ),
      TWIXT: path.resolve( __dirname, '../twixt/js' ),
      UTTERANCE_QUEUE: path.resolve( __dirname, '../utterance-queue/js' )
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: path.resolve( 'loaders/phet-image-loader.js' ),
            options: {/* ... */ }
          },
          {
            loader: 'url-loader',
            options: {
              limit: 999999999
            }
          }
        ]
      },
      {
        test: /\.(mp3|wav)$/i,
        use: [
          {
            loader: path.resolve( 'loaders/phet-sound-loader.js' ),
            options: {/* ... */ }
          },
          {
            loader: 'url-loader',
            options: {
              limit: 999999999
            }
          }
        ]
      }

    ]
  }
};