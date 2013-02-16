// Copyright 2002-2013, University of Colorado

/**
 * This is a specialization/encapsulation of github.com/mrdoob/stats.js.
 * It's a DOM-based performance monitor that displays frames-per-second (fps) xor
 * frame rendering time in milliseconds (ms). Click on it to toggle between the 2 views.
 * Use this for performance debugging.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define(
  [
    "stats",
    "PHETCOMMON/model/Inheritance"
  ],
  function ( Stats, Inheritance ) {
    "use strict";

    function PerformanceMonitor() {

      Stats.call( this ); // constructor stealing

      var stats = this;

      stats.setMode( 0 ); // 0: fps, 1: ms

      // align at top-left
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.left = '0px';
      stats.domElement.style.top = '0px';

      // add to DOM
      document.body.appendChild( stats.domElement );

      /*
       * Encapsulate the style properties used to control visibility.
       * @param {Boolean} visible
       */
      stats.setVisible = function ( visible ) {
        if ( visible ) {
          stats.domElement.style.visibility = "visible";
        }
        else {
          stats.domElement.style.visibility = "hidden";
        }
      }
    }

    // use this form of prototype chaining, Stats is not set up to support parasitic combination inheritance.
    PerformanceMonitor.prototype = new Stats();

    return PerformanceMonitor;
  }
)