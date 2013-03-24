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

    // baseUrl: don't bother trying to set it here, it is overridden by data-main in the top-level HTML file

    // Path mappings for module names not found directly under baseUrl. The path settings are assumed to be
    // relative to baseUrl unless the paths setting starts with a "/" or has a URL protocol.
    paths: {

      // common directories, uppercase names to identify them in require imports
      PHETCOMMON: "../../phetcommon/js",
      EASEL_PHET: "../../easel-phet/js",
      DOT: "../../dot/js",
      ASSERT: "../../assert/js",

      // contrib dependencies required by common directories
      stats: "../../phetcommon/contrib/stats-r11",
      imagesloaded: "../../phetcommon/contrib/jquery.imagesloaded-2.1.1",

      // local contrib dependencies
      easel: "../contrib/easeljs-0.6.0.min",
      i18n: "../contrib/i18n-2.0.2",
      tpl: "../contrib/tpl-0.2",
      fastclick: "../contrib/fastclick-0.5.6"
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

    config: {
      i18n: {
        locale: "en_us" // change this to test other locales
      }
    },

    //TODO: Remove this before deploy!
    urlArgs: new Date().getTime()  // cache buster to make browser reload all included scripts
  } );