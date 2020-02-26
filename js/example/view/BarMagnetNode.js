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
  const DragListener = require( 'SCENERY/listeners/DragListener' );
  const exampleSim = require( 'EXAMPLE_SIM/exampleSim' );
  const Image = require( 'SCENERY/nodes/Image' );
  const Node = require( 'SCENERY/nodes/Node' );

  // images
  const barMagnetImage = require( 'image!EXAMPLE_SIM/barMagnet.png' );

  class BarMagnetNode extends Node {

    /**
     * @param {BarMagnet} barMagnet - the model of the bar magnet
     * @param {ModelViewTransform2} modelViewTransform - the coordinate transform between model coordinates and view coordinates
     */
    constructor( barMagnet, modelViewTransform ) {

      super( {

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
      this.addInputListener( new DragListener( {

        // When dragging across it in a mobile device, pick it up
        allowTouchSnag: true,

        positionProperty: barMagnet.positionProperty,
        transform: modelViewTransform
      } ) );

      // Observe changes in model position and update the view. This element always exists and does not need to be
      // unlinked.
      barMagnet.positionProperty.link( position => {
        this.translation = modelViewTransform.modelToViewPosition( position );
      } );

      // Observe changes in model orientation and update the view. This element always exists and does not need to be
      // unlinked.
      barMagnet.orientationProperty.link( orientation => {
        this.rotation = orientation;
      } );
    }
  }

  return exampleSim.register( 'BarMagnetNode', BarMagnetNode );
} );
