// Copyright 2002-2013, University of Colorado

/**
 * RequireJS configuration file for the sim.
 * Paths are relative to the location of this file.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
require.config(
  {
    deps: ["main"],

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

    urlArgs: new Date().getTime()  // cache buster to make browser refresh load all included scripts
  } );