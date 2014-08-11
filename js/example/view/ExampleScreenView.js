// Copyright 2002-2013, University of Colorado Boulder

/**
 * View for the 'Example' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var BarMagnetNode = require( 'EXAMPLE_SIM/example/view/BarMagnetNode' );
  var ControlPanel = require( 'EXAMPLE_SIM/example/view/ControlPanel' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * Constructor for the ExampleScreenView, it creates the bar magnet node and control panel node.
   * @param {BarMagnetModel} model the model for the entire screen
   * @constructor
   */
  function ExampleScreenView( model ) {

    var exampleScreenView = this;
    ScreenView.call( exampleScreenView );

    // model-view transform
    var modelViewTransform = ModelViewTransform2.createOffsetScaleMapping( new Vector2( exampleScreenView.layoutBounds.width / 2, exampleScreenView.layoutBounds.height / 2 ), 1 );

    exampleScreenView.addChild( new BarMagnetNode( model.barMagnet, modelViewTransform ) );
    exampleScreenView.addChild( new ControlPanel( model, { x: 50, y: 50 } ) );
  }

  return inherit( ScreenView, ExampleScreenView );
} );