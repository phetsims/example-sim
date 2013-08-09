// Copyright 2002-2013, University of Colorado Boulder

//TODO this is a local copy, duplicated in all sims, migrate to sun.ResetAllButton
/**
 * Reset All button.
 */
define( function( require ) {
  'use strict';

  // imports
  var imageLoader = require( 'common/ExampleSimImages' );
  var Image = require( 'SCENERY/nodes/Image' );
  var inherit = require( 'PHET_CORE/inherit' );
  var PushButton = require( 'SUN/PushButton' );
  var Vector2 = require( 'DOT/Vector2' );

  var radius = 33; // hardcoded width/height for the circle of the reset all button
  var radiusSquared = radius * radius;
  var center = new Vector2( radius, radius );

  function ResetAllButton( callback, options ) {
    PushButton.call( this,
      new ResetAllImage( imageLoader.getImage( 'reset_button_up.png' ) ),
      new ResetAllImage( imageLoader.getImage( 'reset_button_over.png' ) ),
      new ResetAllImage( imageLoader.getImage( 'reset_button_down.png' ) ),
      new ResetAllImage( imageLoader.getImage( 'reset_button_disabled.png' ) ),
      callback, options );
  }

  function ResetAllImage( image ) {
    Image.call( this, image );
  }
  inherit( Image, ResetAllImage, {
    containsPointSelf: function( point ) {
      return point.distanceSquared( center ) <= radiusSquared;
    }
  } );

  return inherit( PushButton, ResetAllButton );
} );
