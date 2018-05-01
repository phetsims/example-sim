// Copyright 2013-2017, University of Colorado Boulder

/**
 * View for the bar magnet object, which can be dragged to translate.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var exampleSim = require( 'EXAMPLE_SIM/exampleSim' );
  var Image = require( 'SCENERY/nodes/Image' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var SimpleDragHandler = require( 'SCENERY/input/SimpleDragHandler' );

  // images
  var barMagnetImage = require( 'image!EXAMPLE_SIM/barMagnet.png' );

  /**
   * Constructor for the BarMagnetNode which renders the bar magnet as a scenery node.
   *
   * @param {BarMagnet} barMagnet - the model of the bar magnet
   * @param {ModelViewTransform2} modelViewTransform - the coordinate transform between model coordinates and view coordinates
   * @constructor
   */
  function BarMagnetNode( barMagnet, modelViewTransform ) {

    var self = this;

    // Call the super constructor
    Node.call( this, {

      // Show a cursor hand over the bar magnet
      cursor: 'pointer'
    } );

    // Add the centered bar magnet image
    this.addChild( new Image( barMagnetImage, {
      centerX: 0,
      centerY: 0
    } ) );

    // Scale it so it matches the model width and height
    var scaleX = modelViewTransform.modelToViewDeltaX( barMagnet.size.width ) / this.width;
    var scaleY = modelViewTransform.modelToViewDeltaY( barMagnet.size.height ) / this.height;
    this.scale( scaleX, scaleY );

    // When dragging, move the bar magnet
    this.addInputListener( new SimpleDragHandler( {

      // When dragging across it in a mobile device, pick it up
      allowTouchSnag: true,

      // Translate on drag events
      translate: function( args ) {
        barMagnet.locationProperty.set( modelViewTransform.viewToModelPosition( args.position ) );
      }
    } ) );

    // Observe changes in model location and update the view. This element always exists and does not need to be
    // unlinked.
    barMagnet.locationProperty.link( function( location ) {
      self.translation = modelViewTransform.modelToViewPosition( location );
    } );

    // Observe changes in model orientation and update the view. This element always exists and does not need to be
    // unlinked.
    barMagnet.orientationProperty.link( function( orientation ) {
      self.rotation = orientation;
    } );
  }

  exampleSim.register( 'BarMagnetNode', BarMagnetNode );

  return inherit( Node, BarMagnetNode );
} );
