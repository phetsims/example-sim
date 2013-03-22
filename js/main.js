// Copyright 2002-2013, University of Colorado

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
require(
    [
      'fastclick',
      'PHETCOMMON/util/ImagesLoader',
      'model/ExampleSimModel',
      'view/ExampleSimView'
    ],
    function( FastClick, ImagesLoader, ExampleSimModel, ExampleSimView ) {
      "use strict";

      //On iPad, prevent buttons from flickering 300ms after press.  See https://github.com/twitter/bootstrap/issues/3772
      new FastClick( document.body );

      // model
      var model = new ExampleSimModel();

      //Polyfill for request animation frame
      //TODO: Factor out to common lib
      window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame ||
               window.oRequestAnimationFrame ||
               window.msRequestAnimationFrame ||
               function( callback ) {
                 window.setTimeout( callback, 1000 / 60 );
               };
      })();

      // initialize the view
      function initView( imagesLoader ) {

        // view
        var view = new ExampleSimView( imagesLoader, model );

        // Animation loop. Put all animation tasks in this function so that the FPS indicator is accurate.
        //http://paulirish.com/2011/requestanimationframe-for-smart-animating/
        // place the rAF *before* the render() to assure as close to
        // 60fps with the setTimeout fallback.
        (function animloop() {
          requestAnimFrame( animloop );
          view.performanceMonitor.begin();
          model.step();
          view.update();
          view.performanceMonitor.end();
        })();
      }

      // after images are loaded...
      new ImagesLoader( function( imagesLoader ) {

        initView( imagesLoader );

        // clean up the DOM
        $( "#images" ).remove();
        $( "#overlay" ).remove();
      } );
    } );
