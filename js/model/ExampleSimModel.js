// Copyright 2002-2013, University of Colorado

/**
 * Model container.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  "use strict";
  var Dimension2 = require( 'DOT/Dimension2' );
  var Vector2 = require( 'DOT/Vector2' );
  var BarMagnet = require( 'model/BarMagnet' );
  var Fort = require( 'FORT/Fort' );

  var ExampleSimModel = Fort.Model.extend(
      {
        //All user settings belong in the model, whether or not they are part of the physical model
        defaults: {performanceMonitorVisible: true},

        init: function() {
          // model elements
          this.barMagnet = new BarMagnet( {location: {x: 0, y: 0}} );
        },

        // Resets all model elements
        reset: function() {

          //Call parent reset method to reset fields in this model, then ask child models to reset themselves.
          //In the future, Fort may automatically identify and reset child Fort models
          Fort.Model.prototype.reset.call( this );
          this.barMagnet.reset();
        },

        // Called by the animation loop
        step: function() {
          // Make model changes here.
        }} );

  return ExampleSimModel;
} );
