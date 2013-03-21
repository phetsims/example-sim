// Copyright 2002-2013, University of Colorado

/**
 * Easel display object (scene graph node) for the bar magnet.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  "use strict";
  var Easel = require( 'easel' );
  var DragHandler = require( 'EASEL-PHET/events/DragHandler' );
  var Inheritance = require( 'PHETCOMMON/util/Inheritance' );
  var MathUtil = require( 'PHETCOMMON/math/MathUtil' );

  /**
   * @class BarMagnetNode
   * @constructor
   * @param {HTMLImageElement} barMagnetImageElement
   * @param {BarMagnet} barMagnet
   * @param {ModelViewTransform2D} mvt
   */
  function BarMagnetNode( barMagnetImageElement, barMagnet, mvt ) {

    Easel.Bitmap.call( this, barMagnetImageElement ); // constructor stealing

    // Compute scale factors to match model.
    this.scaleX = mvt.modelToView( barMagnet.width ) / this.image.width;
    this.scaleY = mvt.modelToView( barMagnet.height ) / this.image.height;

    // Move registration point to the center.
    this.regX = this.image.width / 2;
    this.regY = this.image.height / 2;

    // @param {Vector2} point
    DragHandler.register( this, function( point ) {
      barMagnet.location = mvt.viewToModel( point );
    } );

    // Register for synchronization with model.
    var that = this;
    barMagnet.sync( 'location', function updateLocation( model, location ) {
      var point = mvt.modelToView( location );
      that.x = point.x;
      that.y = point.y;
    } );
    barMagnet.sync( 'orientation', function updateOrientation( model, orientation ) {
      that.rotation = MathUtil.toDegrees( orientation );
    } );
  }

  Inheritance.inheritPrototype( BarMagnetNode, Easel.Bitmap ); // prototype chaining

  return BarMagnetNode;
} );
