// Copyright 2002-2013, University of Colorado Boulder

/**
 * RequireJS configuration file for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
require.config( {
  // An array of dependencies to load. Useful when require is defined as a config object before require.js
  // is loaded, and you want to specify dependencies to load as soon as require() is defined.
  deps: [ 'example-sim-main' ],

  // baseUrl: don't bother trying to set it here, it is overridden by data-main in the top-level HTML file

  // Path mappings for module names not found directly under baseUrl. The path settings are assumed to be
  // relative to baseUrl unless the paths setting starts with a '/' or has a URL protocol.
  paths: {

    // third-party libs
    text: '../../sherpa/text-2.0.12',

    // PhET plugins
    image: '../../chipper/js/requirejs-plugins/image',
    string: '../../chipper/js/requirejs-plugins/string',

    // common directories, uppercase names to identify them in require imports
    AXON: '../../axon/js',
    BRAND: '../../brand/js',
    DOT: '../../dot/js',
    JOIST: '../../joist/js',
    KITE: '../../kite/js',
    PHET_CORE: '../../phet-core/js',
    PHETCOMMON: '../../phetcommon/js',
    REPOSITORY: '..',
    SCENERY: '../../scenery/js',
    SCENERY_PHET: '../../scenery-phet/js',
    SUN: '../../sun/js',

    // this sim
    EXAMPLE_SIM: '.'
  },

  // optional cache buster to make browser refresh load all included scripts, can be disabled with ?cacheBuster=false
  urlArgs: phet.chipper.getCacheBusterArgs()
} );