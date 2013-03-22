// Copyright 2002-2013, University of Colorado

/**
 * Scenery display object (scene graph node) for the bar magnet.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  "use strict";
  var Inheritance = require( 'PHETCOMMON/util/Inheritance' );
  var MathUtil = require( 'PHETCOMMON/math/MathUtil' );
  var Image = require( "SCENERY/nodes/Image" );
  var SimpleDragHandler = require( 'SCENERY/input/SimpleDragHandler' );

  /**
   * @class BarMagnetNode
   * @constructor
   * @param {HTMLImageElement} barMagnetImageElement
   * @param {BarMagnet} barMagnet
   * @param {ModelViewTransform2D} mvt
   */
  function BarMagnetNode( barMagnetImageElement, barMagnet, mvt ) {
    var that = this;
    Image.call( this, barMagnetImageElement, {cursor: 'pointer'} ); // constructor stealing

    this.scale( mvt.modelToView( barMagnet.width ) / this.width,
                mvt.modelToView( barMagnet.height ) / this.height );

    // Move registration point to the center.
    this.regX = this.image.width / 2;
    this.regY = this.image.height / 2;

    //TODO: need to set the center of the bar magnet, not its top left coordinate
    this.addInputListener( new SimpleDragHandler(
        {
          //When dragging across it in a mobile device, pick it up
          allowTouchSnag: true,

          //Translate on drag events
          translate: function( options ) {
            barMagnet.location = mvt.viewToModel( options.position );
          }
        }
    ) );

    // Register for synchronization with model.
    barMagnet.link( 'location', function updateLocation( model, location ) {
      var point = mvt.modelToView( location );
      that.x = point.x;
      that.y = point.y;
    } );
    barMagnet.link( 'orientation', function updateOrientation( model, orientation ) {
      var centerX = that.centerX;
      var centerY = that.centerY;
      that.rotation = orientation;
      that.centerX = centerX;
      that.centerY = centerY;
    } );
  }

  Inheritance.inheritPrototype( BarMagnetNode, Image ); // prototype chaining

  return BarMagnetNode;
} );
