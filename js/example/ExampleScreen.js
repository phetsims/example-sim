// Copyright 2013-2018, University of Colorado Boulder

/**
 * The 'Bar Magnet' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var ExampleModel = require( 'EXAMPLE_SIM/example/model/ExampleModel' );
  var ExampleScreenView = require( 'EXAMPLE_SIM/example/view/ExampleScreenView' );
  var exampleSim = require( 'EXAMPLE_SIM/exampleSim' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );

  /**
   * Creates the model and view for the ExampleScreen
   * @constructor
   */
  function ExampleScreen() {

    var options = {
      backgroundColorProperty: new Property( 'rgb(50,50,50)' )
    };

    Screen.call( this,
      function() {
        return new ExampleModel();
      },
      function( model ) {
        return new ExampleScreenView( model );
      }, options );
  }

  exampleSim.register( 'ExampleScreen', ExampleScreen );

  return inherit( Screen, ExampleScreen );
} );
