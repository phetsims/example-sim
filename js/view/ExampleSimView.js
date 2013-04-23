// Copyright 2002-2013, University of Colorado

/**
 * The Scenery scene for this simulation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // imports
  var Scene = require( 'SCENERY/Scene' );
  var Bounds2 = require( 'DOT/Bounds2' );
  var TabView = require( 'JOIST/TabView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var Vector2 = require( 'DOT/Vector2' );
  var BarMagnetNode = require( 'view/BarMagnetNode' );
  var ControlPanel = require( 'view/ControlPanel' );
  var strings = require( 'example-sim-strings' );

  // constants
  var UNITY_WINDOW_SIZE = new Dimension2( 1024, 768 ); // At this window size, scaling is 1.

  function ExampleSimView( imagesLoader, canvas, model ) {

    var scene = this;
    TabView.call( scene );

    // model-view transform
    var MVT_SCALE = 1;
    var MVT_OFFSET = new Vector2( UNITY_WINDOW_SIZE.width / 2, UNITY_WINDOW_SIZE.height / 2 );
    var mvt = new ModelViewTransform2.createOffsetScaleMapping( MVT_OFFSET, MVT_SCALE );

    // bar magnet
    var barMagnetNode = new BarMagnetNode( imagesLoader.getImage( 'barMagnet.png' ), model.barMagnet, mvt );

    // rendering order
    this.addChild( barMagnetNode );

    //Add the control panel.  Notice it will scale up and down
    this.addChild( new ControlPanel( strings, model ) );
  }

  inherit( ExampleSimView, TabView, {layoutBounds: new Bounds2( 0, 0, UNITY_WINDOW_SIZE.width, UNITY_WINDOW_SIZE.height )} ); // prototype chaining

  return ExampleSimView;
} );
