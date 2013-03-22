// Copyright 2002-2013, University of Colorado

/**
 * Model container.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  "use strict";
  var BarMagnet = require( 'model/BarMagnet' );
  var Fort = require( 'FORT/Fort' );

  var ExampleSimModel = Fort.Model.extend(
      {
        //Properties of the model.  All user settings belong in the model, whether or not they are part of the physical model
        defaults: {performanceMonitorVisible: true},

        init: function() {
          // child model elements that are not direct properties
          this.barMagnet = new BarMagnet( {location: {x: 0, y: 0}} );
        },

        // Called by the animation loop
        step: function() {
          // Make model changes here.
        }} );

  return ExampleSimModel;
} );