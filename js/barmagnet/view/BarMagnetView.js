// Copyright 2002-2013, University of Colorado Boulder

/**
 * View for the "Bar Magnet" tab.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // imports
  var BarMagnetNode = require( 'barmagnet/view/BarMagnetNode' );
  var ControlPanel = require( 'barmagnet/view/ControlPanel' );
  var Bounds2 = require( 'DOT/Bounds2' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  var TabView = require( 'JOIST/TabView' );
  var Vector2 = require( 'DOT/Vector2' );

  // constants
  var UNITY_WINDOW_SIZE = new Dimension2( 1024, 768 ); // At this window size, scaling is 1.

  function BarMagnetView( model ) {

    var thisView = this;
    TabView.call( thisView );

    // model-view transform
    var MVT_SCALE = 1;
    var MVT_OFFSET = new Vector2( UNITY_WINDOW_SIZE.width / 2, UNITY_WINDOW_SIZE.height / 2 );
    var mvt = new ModelViewTransform2.createOffsetScaleMapping( MVT_OFFSET, MVT_SCALE );

    thisView.addChild( new BarMagnetNode( model.barMagnet, mvt ) );
    thisView.addChild( new ControlPanel( model, { x: 50, y: 50 } ) );
  }

  inherit( TabView, BarMagnetView, {layoutBounds: new Bounds2( 0, 0, UNITY_WINDOW_SIZE.width, UNITY_WINDOW_SIZE.height )} ); // prototype chaining

  return BarMagnetView;
} );
