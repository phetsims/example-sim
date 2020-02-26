// Copyright 2013-2020, University of Colorado Boulder

/**
 * Model for the 'Example' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const BarMagnet = require( 'EXAMPLE_SIM/example/model/BarMagnet' );
  const Dimension2 = require( 'DOT/Dimension2' );
  const exampleSim = require( 'EXAMPLE_SIM/exampleSim' );
  const Vector2 = require( 'DOT/Vector2' );

  class ExampleModel {

    constructor() {

      // @public {BarMagnet} initial bar magnet model element
      this.barMagnet = new BarMagnet( new Dimension2( 262.5, 52.5 ), new Vector2( 0, 0 ), 0 );
    }

    /**
     * Restores the initial state of all model elements. This method is called when the simulation "Reset All" button is
     * pressed.
     * @public
     */
    reset() {
      this.barMagnet.reset();
    }
  }

  return exampleSim.register( 'ExampleModel', ExampleModel );
} );
