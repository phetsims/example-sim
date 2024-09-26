// Copyright 2013-2024, University of Colorado Boulder

/**
 * BarMagnet is the model of a simple bar magnet. The magnet has fixed size, and mutable position and orientation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import Dimension2 from '../../../../dot/js/Dimension2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import Property from '../../../../axon/js/Property.js';
import TModel from '../../../../joist/js/TModel.js';
import exampleSim from '../../exampleSim.js';

export default class BarMagnet implements TModel {

  // the size of the bar magnet in model coordinates
  public readonly size: Dimension2;

  // the position of the bar magnet in model coordinates
  public readonly positionProperty: Property<Vector2>;

  // orientation in radians
  public readonly orientationProperty: Property<number>;

  /**
   * size - the size of the bar magnet in model coordinates
   * position - the position of the bar magnet in model coordinates
   * orientation - in radians
   */
  public constructor( size: Dimension2, position: Vector2, orientation: number ) {
    this.size = size;
    this.positionProperty = new Property( position );
    this.orientationProperty = new Property( orientation );
  }

  /**
   * Restores the initial state of the BarMagnet. This method is called when the simulation's "Reset All" button is
   * pressed. Note that BarMagnet.size is constant and does not need to be reset.
   */
  public reset(): void {
    this.positionProperty.reset();
    this.orientationProperty.reset();
  }
}

exampleSim.register( 'BarMagnet', BarMagnet );