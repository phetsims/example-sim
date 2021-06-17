// Copyright 2013-2020, University of Colorado Boulder

/**
 * ExampleModel is the top-level model for the 'Example' screen. You can think of the top-level model as a container
 * for all of the pieces that make up the model for a screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import Dimension2 from '../../../../dot/js/Dimension2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import exampleSim from '../../exampleSim.js';
import BarMagnet from './BarMagnet.js';

class ExampleModel {

  constructor() {

    // @public {BarMagnet} initial bar magnet model element
    this.barMagnet = new BarMagnet( new Dimension2( 262.5, 52.5 ), new Vector2( 0, 0 ), 0 );
  }

  /**
   * Restores the initial state of all model elements.
   * This method is called when the simulation "Reset All" button is pressed.
   * @public
   */
  reset() {
    this.barMagnet.reset();
  }
}

exampleSim.register( 'ExampleModel', ExampleModel );
export default ExampleModel;