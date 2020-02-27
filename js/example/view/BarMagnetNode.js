// Copyright 2013-2020, University of Colorado Boulder

/**
 * View for the bar magnet object, which can be dragged to translate.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import DragListener from '../../../../scenery/js/listeners/DragListener.js';
import Image from '../../../../scenery/js/nodes/Image.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import barMagnetImage from '../../../images/barMagnet_png.js';
import exampleSim from '../../exampleSim.js';

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

      // When dragging across it on a touch device, pick it up
      allowTouchSnag: true,

      positionProperty: barMagnet.positionProperty,
      transform: modelViewTransform
    } ) );

    // Observe changes in model position and update the view.
    // This element always exists and does not need to be unlinked.
    barMagnet.positionProperty.link( position => {
      this.translation = modelViewTransform.modelToViewPosition( position );
    } );

    // Observe changes in model orientation and update the view.
    // This element always exists and does not need to be unlinked.
    barMagnet.orientationProperty.link( orientation => {
      this.rotation = orientation;
    } );
  }
}

exampleSim.register( 'BarMagnetNode', BarMagnetNode );
export default BarMagnetNode;