// Copyright 2002-2013, University of Colorado

/**
 * The Easel stage for this simulation.
 *grunt
 * @author Chris Malley (PixelZoom, Inc.)
 */
define(
  [
    'easel',
    'EASEL-PHET/nodes/FrameRateNode',
    'PHETCOMMON/model/Inheritance',
    'PHETCOMMON/view/ModelViewTransform2D',
    'PHETCOMMON/math/Dimension2D',
    'PHETCOMMON/math/Point2D',
    'PHETCOMMON/model/property/Property',
    'view/BarMagnetNode'
  ],
  function ( Easel, FrameRateNode, Inheritance, ModelViewTransform2D, Dimension2D, Point2D, Property, BarMagnetNode ) {
    "use strict";

    function ExampleSimStage( canvas, model ) {

      Easel.Stage.call( this, canvas ); // constructor stealing

      this.enableMouseOver();

      // At this window size, scaling is 1.
      var UNITY_WINDOW_SIZE = new Dimension2D( 1024, 768 );

      // model-view transform
      var MVT_SCALE = 1;
      var MVT_OFFSET = new Point2D( 0, 0 ); // origin relative to rootContainer
      var mvt = new ModelViewTransform2D( MVT_SCALE, MVT_OFFSET );

      // canvas background
      var background = new Easel.Shape();

      // frame rate display, upper left (for performance debugging)
      var frameRateNode = new FrameRateNode( 'white' );
      frameRateNode.x = 20;
      frameRateNode.y = 20;

      // bar magnet
      var barMagnetNode = new BarMagnetNode( model.barMagnet, mvt );

      // rendering order
      this.addChild( background );
      this.addChild( frameRateNode );
      var rootContainer = new Easel.Container();
      this.addChild( rootContainer );
      rootContainer.addChild( barMagnetNode );

      // resize handler
      var that = this;
      var handleResize = function () {

        // get the window width
        var windowSize = new Dimension2D( $( window ).width(), $( window ).height() );

        // make the canvas fill the window
        canvas.width = windowSize.width;
        canvas.height = windowSize.height;

        // expand the background to fill the canvas
        background.graphics
          .beginFill( 'black' )
          .rect( 0, 0, canvas.width, canvas.height );

        // move the root node to the center of the canvas, so the origin remains at the center
        rootContainer.x = canvas.width / 2;
        rootContainer.y = canvas.height / 2;

        // isometric scaling
        var scale = Math.min( windowSize.width / UNITY_WINDOW_SIZE.width, windowSize.height / UNITY_WINDOW_SIZE.height );
        rootContainer.scaleX = scale;
        rootContainer.scaleY = scale;

        // force rendering update
        that.tick();
      };
      $( window ).resize( handleResize );
      handleResize(); // initial size

      // view-specific properties
      this.frameRateVisibleProperty = new Property( true );
      this.frameRateVisibleProperty.addObserver( function( visible ) {
           frameRateNode.visible = visible;
      } );
    }

    Inheritance.inheritPrototype( ExampleSimStage, Easel.Stage ); // prototype chaining

    ExampleSimStage.prototype.reset = function () {
      this.frameRateVisibleProperty.reset();
      // If you need to reset anything else when the "Reset All" button is pressed, add it here.
    };

    return ExampleSimStage;
  } );
