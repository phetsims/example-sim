// Copyright 2013-2022, University of Colorado Boulder

/**
 * BarMagnetNode is the view for the bar magnet. It is responsible for the visual representation of a bar magnet,
 * and keeping that visual representation synchronized with a BarMagnet instance.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import { DragListener, Image, Node } from '../../../../scenery/js/imports.js';
import barMagnet_png from '../../../images/barMagnet_png.js';
import exampleSim from '../../exampleSim.js';
import BarMagnet from '../model/BarMagnet.js';

export default class BarMagnetNode extends Node {

  /**
   * @param {BarMagnet} barMagnet - the model of the bar magnet
   * @param {ModelViewTransform2} modelViewTransform - the transform between model coordinates and view coordinates
   */
  public constructor( barMagnet: BarMagnet, modelViewTransform: ModelViewTransform2 ) {

    // This is an example of using assertions to check for potential programming errors. In this case, we are verifying
    // that the arguments have the expected type.  Run the simulation with query parameter ?ea to enable assertions.
    assert && assert( barMagnet instanceof BarMagnet, 'invalid barMagnet' );
    assert && assert( modelViewTransform instanceof ModelViewTransform2, 'invalid modelViewTransform' );

    super( {

      // Show a cursor hand over the bar magnet
      cursor: 'pointer'
    } );

    // The bar magnet is rendered using an image file. This creates the scenery Node that will render that image
    // file, and moves the origin (0,0) to the center of the Node.
    this.addChild( new Image( barMagnet_png, {
      centerX: 0,
      centerY: 0
    } ) );

    // Scale this Node, so that it matches the model width and height.
    const scaleX = modelViewTransform.modelToViewDeltaX( barMagnet.size.width ) / this.width;
    const scaleY = modelViewTransform.modelToViewDeltaY( barMagnet.size.height ) / this.height;
    this.scale( scaleX, scaleY );

    // Move the magnet by dragging it.
    this.addInputListener( new DragListener( {
      allowTouchSnag: true, // When dragging across it on a touch device, pick it up
      positionProperty: barMagnet.positionProperty,
      transform: modelViewTransform
    } ) );

    // Observe changes in model position, and move this Node to the new position in the view.
    // This Property exists for the lifetime of the simulation, so this listener does not need to be unlinked.
    barMagnet.positionProperty.link( position => {
      this.translation = modelViewTransform.modelToViewPosition( position );
    } );

    // Observe changes in model orientation, and update the orientation in the view.
    // This Property exists for the lifetime of the simulation, so this listener does not need to be unlinked.
    barMagnet.orientationProperty.link( orientation => {
      this.rotation = orientation;
    } );
  }
}

exampleSim.register( 'BarMagnetNode', BarMagnetNode );