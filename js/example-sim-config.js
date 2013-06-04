// Copyright 2002-2013, University of Colorado

/**
 * RequireJS configuration file for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
require.config( {

  // An array of dependencies to load. Useful when require is defined as a config object before require.js
  // is loaded, and you want to specify dependencies to load as soon as require() is defined.
  deps: ['example-sim-main'],

  // baseUrl: don't bother trying to set it here, it is overridden by data-main in the top-level HTML file

  // Path mappings for module names not found directly under baseUrl. The path settings are assumed to be
  // relative to baseUrl unless the paths setting starts with a '/' or has a URL protocol.
  paths: {

    // third-party libs
    i18n: "../lib/i18n-2.0.2",
    imagesloaded: "../lib/jquery.imagesloaded-2.1.1",

    // common directories, uppercase names to identify them in require imports
    PHETCOMMON: '../../phetcommon/js',
    SCENERY: '../../scenery/js',
    KITE: '../../kite/js',
    PHET_CORE: '../../phet-core/js',
    DOT: '../../dot/js',
    ASSERT: '../../assert/js',
    FORT: '../../fort/js',
    SCENERY_PHET: '../../scenery-phet/js',
    SUN: '../../sun/js',
    JOIST: '../../joist/js'
  },

  // Configure dependencies for 'browser globals' scripts that do not use RequireJS.
  shim: {
    jquery: { exports: "$" }
  },

  config: {
    i18n: {
      locale: 'en_us' // change this to test other locales
    }
  },

  //TODO: Remove this before deploy!
  urlArgs: new Date().getTime()  // cache buster to make browser reload all included scripts
} );
