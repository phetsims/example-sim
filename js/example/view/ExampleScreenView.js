// Copyright 2013-2018, University of Colorado Boulder

/**
 * View for the 'Example' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var BarMagnetNode = require( 'EXAMPLE_SIM/example/view/BarMagnetNode' );
  var Bounds2 = require( 'DOT/Bounds2' );
  var ControlPanel = require( 'EXAMPLE_SIM/example/view/ControlPanel' );
  var exampleSim = require( 'EXAMPLE_SIM/exampleSim' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var Vector2 = require( 'DOT/Vector2' );

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
    var center = new Vector2( this.layoutBounds.width / 2, this.layoutBounds.height / 2 );
    var modelViewTransform = ModelViewTransform2.createOffsetScaleMapping( center, 1 );

    this.addChild( new BarMagnetNode( model.barMagnet, modelViewTransform ) );
    this.addChild( new ControlPanel( model, {
      x: 50,
      y: 50
    } ) );
  }

  exampleSim.register( 'ExampleScreenView', ExampleScreenView );

  return inherit( ScreenView, ExampleScreenView );
} );
