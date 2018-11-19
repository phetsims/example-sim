// Copyright 2013-2018, University of Colorado Boulder

/**
 * Model for the 'Example' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var BarMagnet = require( 'EXAMPLE_SIM/example/model/BarMagnet' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var exampleSim = require( 'EXAMPLE_SIM/exampleSim' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * Main constructor for ExampleModel, which contains the bar magnet.
   * @constructor
   */
  function ExampleModel() {

    // @public {BarMagnet} initial bar magnet model element
    this.barMagnet = new BarMagnet( new Dimension2( 262.5, 52.5 ), new Vector2( 0, 0 ), 0 );
  }

  exampleSim.register( 'ExampleModel', ExampleModel );

  return inherit( Object, ExampleModel, {

    /**
    * Restores the initial state of all model elements. This method is called when the simulation "Reset All" button is
    * pressed.
    * @public
    */
    reset: function() {
      this.barMagnet.reset();
    }
  } );
} );
