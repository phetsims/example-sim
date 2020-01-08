// Copyright 2013-2020, University of Colorado Boulder

/**
 * View for the bar magnet object, which can be dragged to translate.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const exampleSim = require( 'EXAMPLE_SIM/exampleSim' );
  const Image = require( 'SCENERY/nodes/Image' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Node = require( 'SCENERY/nodes/Node' );
  const SimpleDragHandler = require( 'SCENERY/input/SimpleDragHandler' );

  // images
  const barMagnetImage = require( 'image!EXAMPLE_SIM/barMagnet.png' );

  /**
   * Constructor for the BarMagnetNode which renders the bar magnet as a scenery node.
   *
   * @param {BarMagnet} barMagnet - the model of the bar magnet
   * @param {ModelViewTransform2} modelViewTransform - the coordinate transform between model coordinates and view coordinates
   * @constructor
   */
  function BarMagnetNode( barMagnet, modelViewTransform ) {

    const self = this;

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
    const scaleX = modelViewTransform.modelToViewDeltaX( barMagnet.size.width ) / this.width;
    const scaleY = modelViewTransform.modelToViewDeltaY( barMagnet.size.height ) / this.height;
    this.scale( scaleX, scaleY );

    // When dragging, move the bar magnet
    this.addInputListener( new SimpleDragHandler( {

      // When dragging across it in a mobile device, pick it up
      allowTouchSnag: true,

      // Translate on drag events
      translate: function( args ) {
        barMagnet.positionProperty.set( modelViewTransform.viewToModelPosition( args.position ) );
      }
    } ) );

    // Observe changes in model position and update the view. This element always exists and does not need to be
    // unlinked.
    barMagnet.positionProperty.link( function( position ) {
      self.translation = modelViewTransform.modelToViewPosition( position );
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
