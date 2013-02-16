// Copyright 2002-2013, University of Colorado

//TODO this would be better implemented by subtyping Stats, but that wasn't working
/**
 * Displays frames-per-second (FPS) and frame rendering time in milliseconds.
 * Click on it to toggle between the 2 views.
 * Use this for performance debugging.
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

      // @param {Boolean} visible
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