// Copyright 2013-2018, University of Colorado Boulder

/**
 * View for the 'Example' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const BarMagnetNode = require( 'EXAMPLE_SIM/example/view/BarMagnetNode' );
  const Bounds2 = require( 'DOT/Bounds2' );
  const ControlPanel = require( 'EXAMPLE_SIM/example/view/ControlPanel' );
  const exampleSim = require( 'EXAMPLE_SIM/exampleSim' );
  const inherit = require( 'PHET_CORE/inherit' );
  const ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  const ScreenView = require( 'JOIST/ScreenView' );
  const Vector2 = require( 'DOT/Vector2' );

  /**
   * Constructor for the ExampleScreenView, it creates the bar magnet node and control panel node.
   *
   * @param {ExampleModel} model - the model for the entire screen
   * @constructor
   */
  function ExampleScreenView( model ) {

    ScreenView.call( this, {
      layoutBounds: new Bounds2( 0, 0, 768, 504 )
    } );

    // model-view transform
    const center = new Vector2( this.layoutBounds.width / 2, this.layoutBounds.height / 2 );
    const modelViewTransform = ModelViewTransform2.createOffsetScaleMapping( center, 1 );

    this.addChild( new BarMagnetNode( model.barMagnet, modelViewTransform ) );
    this.addChild( new ControlPanel( model, {
      x: 50,
      y: 50
    } ) );
  }

  exampleSim.register( 'ExampleScreenView', ExampleScreenView );

  return inherit( ScreenView, ExampleScreenView );
} );
