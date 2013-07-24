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

  function ResetAllButton( callback, options ) {
    PushButton.call( this,
      new Image( imageLoader.getImage( 'reset_button_up.png' ) ),
      new Image( imageLoader.getImage( 'reset_button_over.png' ) ),
      new Image( imageLoader.getImage( 'reset_button_down.png' ) ),
      new Image( imageLoader.getImage( 'reset_button_disabled.png' ) ),
      callback, options );
  }

  return inherit( PushButton, ResetAllButton );
} );