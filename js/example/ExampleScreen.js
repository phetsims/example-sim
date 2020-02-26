// Copyright 2013-2020, University of Colorado Boulder

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
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );

  class ExampleScreen extends Screen {

    constructor() {
      super(
        () => new ExampleModel(),
        model => new ExampleScreenView( model ), {
          backgroundColorProperty: new Property( 'rgb( 50, 50, 50 )' )
        } );
    }
  }

  return exampleSim.register( 'ExampleScreen', ExampleScreen );
} );
