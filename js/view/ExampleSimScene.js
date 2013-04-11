// Copyright 2002-2013, University of Colorado

/**
 * The Scenery scene for this simulation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  var Scene = require( 'SCENERY/Scene' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ModelViewTransform2D = require( 'PHETCOMMON/view/ModelViewTransform2D' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var Vector2 = require( 'DOT/Vector2' );
  var BarMagnetNode = require( 'view/BarMagnetNode' );
  var ControlPanel = require( 'view/ControlPanel' );
  var strings = require( 'i18n!../../nls/example-sim-strings' );

  function ExampleSimScene( imagesLoader, canvas, model ) {
    var scene = this;

    //subclass Scene
    //NOTE: it's background color should be rendered in CSS, not the scene graph
    //Nodes added to the scene will be scaled as the browser window is resized.
    Scene.call( this, $( '.scene' ), { width: 200, height: 200, allowDevicePixelRatioScaling: true } );

    this.initializeStandaloneEvents(); // sets up listeners on the document with preventDefault(), and forwards those events to our scene
    this.resizeOnWindowResize(); // the scene gets resized to the full screen size

    // At this window size, scaling is 1.
    var UNITY_WINDOW_SIZE = new Dimension2( 1024, 768 );

    // model-view transform
    var MVT_SCALE = 1;
    var MVT_OFFSET = new Vector2( UNITY_WINDOW_SIZE.width / 2, UNITY_WINDOW_SIZE.height / 2 );
    var mvt = new ModelViewTransform2D( MVT_SCALE, MVT_OFFSET );

    // bar magnet
    var barMagnetNode = new BarMagnetNode( imagesLoader.getImage( 'barMagnet.png' ), model.barMagnet, mvt );

    // rendering order
    this.addChild( barMagnetNode );

    //Add the control panel.  Notice it will scale up and down
    this.addChild( new ControlPanel( strings, model ) );

    // window-resize handler
    var handleResize = function() {

      // get the window width
      var width = $( window ).width();
      var height = $( window ).height();

      //Find the minimum scale that will still allow everything to be seen based on the provided aspect ratio
      var scale = Math.min( width / UNITY_WINDOW_SIZE.width, height / UNITY_WINDOW_SIZE.height );

      //Update the scene's transform to match the 
      scene.resetTransform();
      scene.resize( width, height );
      scene.scale( scale );

      // force rendering update
      scene.updateScene();
    };
    $( window ).resize( handleResize );
    handleResize(); // initial size
  }

  inherit( ExampleSimScene, Scene ); // prototype chaining

  return ExampleSimScene;
} );
