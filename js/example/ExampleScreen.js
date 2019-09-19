// Copyright 2013-2018, University of Colorado Boulder

/**
 * The 'Bar Magnet' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const ExampleModel = require( 'EXAMPLE_SIM/example/model/ExampleModel' );
  const ExampleScreenView = require( 'EXAMPLE_SIM/example/view/ExampleScreenView' );
  const exampleSim = require( 'EXAMPLE_SIM/exampleSim' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );

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
