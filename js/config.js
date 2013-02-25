// Copyright 2002-2013, University of Colorado

/**
 * RequireJS configuration file for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
require.config(
  {
    // An array of dependencies to load. Useful when require is defined as a config object before require.js
    // is loaded, and you want to specify dependencies to load as soon as require() is defined.
    deps: ["main"],

    // baseUrl: defaults to the location of the HTML page that loads require.js.

    // Path mappings for module names not found directly under baseUrl. The path settings are assumed to be
    // relative to baseUrl unless the paths setting starts with a "/" or has a URL protocol.
    paths: {
      // contrib
      easel: "../contrib/easel-0.5.0",
      i18n: "../contrib/i18n/i18n",
      image: "../contrib/image-0.2.1",
      tpl: "../contrib/tpl-0.2",
      stats: "../contrib/stats-r11",
      fastclick: "../contrib/fastclick-0.5.6",

      // common directories, uppercase names to identify them in require imports
      PHETCOMMON: "../common/phetcommon/js",
      'EASEL-PHET': "../common/easel-phet/js"
    },

    // Configure the dependencies and exports for older, traditional "browser globals" scripts
    // that do not use define() to declare the dependencies and set a module value.
    shim: {
      easel: {
        exports: "createjs"
      },
      stats: {
        exports: "Stats"
      },
      fastclick: {
        exports: "FastClick"
      }
    },

    //TODO: Remove this before deploy!
    urlArgs: new Date().getTime()  // cache buster to make browser reload all included scripts
  } );