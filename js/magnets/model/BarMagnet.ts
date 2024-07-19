// Copyright 2013-2021, University of Colorado Boulder

/**
 * BarMagnet is the model of a simple bar magnet. The magnet has fixed size, and mutable position and orientation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import Property from '../../../../axon/js/Property.js';
import exampleSim from '../../exampleSim.js';

export default class BarMagnet {

  /**
   * @param {Dimension2} size - the size of the bar magnet in model coordinates
   * @param {Vector2} position - the position of the bar magnet in model coordinates
   * @param {number} orientation - in radians
   */
  public constructor( size: Dimension2, position: Vector2, orientation: number ) {

    // @public (read-only) {Dimension2} the size of the bar magnet in model coordinates
    this.size = size;

    // @public {Vector2} the position of the bar magnet in model coordinates
    this.positionProperty = new Property( position );

    // @public {number} in radians
    this.orientationProperty = new Property( orientation );
  }

  /**
   * Restores the initial state of the BarMagnet. This method is called when the simulation's "Reset All" button is
   * pressed. Note that BarMagnet.size is constant and does not need to be reset.
   * @public
   */
  public reset(): void {
    this.positionProperty.reset();
    this.orientationProperty.reset();
  }
}

exampleSim.register( 'BarMagnet', BarMagnet );