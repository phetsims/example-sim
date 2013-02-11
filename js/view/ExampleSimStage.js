// Copyright 2002-2013, University of Colorado

/**
 * The Easel stage for this simulation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( [
            'easel',
            'EASEL-PHET/nodes/FrameRateNode',
            'PHETCOMMON/model/Inheritance',
            'PHETCOMMON/view/ModelViewTransform2D',
            'PHETCOMMON/math/Dimension2D',
            'PHETCOMMON/math/Point2D',
            'view/BarMagnetNode'
        ],
        function ( Easel, FrameRateNode, Inheritance, ModelViewTransform2D, Dimension2D, Point2D, BarMagnetNode ) {

            function ExampleSimStage( canvas, model ) {

                Easel.Stage.call( this, canvas ); // constructor stealing

                this.enableMouseOver();

                // Store the initial window size, for scaling
                var initialWindowSize = new Dimension2D($( window ).width(), $( window ).height() );

                // At this window size, the model-view scaling is 1:1.
                var referenceSize = new Dimension2D( 1024, 768 );

                // model-view transform
                var MVT_SCALE = Math.min( initialWindowSize.width / referenceSize.width, initialWindowSize.height / referenceSize.height );
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
                    var width = $( window ).width();
                    var height = $( window ).height();

                    // make the canvas fill the window
                    canvas.width = width;
                    canvas.height = height;

                    // expand the background to fill the canvas
                    background.graphics
                            .beginFill( 'black' )
                            .rect( 0, 0, canvas.width, canvas.height );

                    // move the root node to the center of the canvas, so the origin remains at the center
                    rootContainer.x = canvas.width / 2;
                    rootContainer.y = canvas.height / 2;

                    // isometric scaling
                    var scale = Math.min( canvas.width / initialWindowSize.width, canvas.height / initialWindowSize.height );
                    rootContainer.scaleX = scale;
                    rootContainer.scaleY = scale;

                    // force rendering update
                    that.tick();
                };
                $( window ).resize( handleResize );
                handleResize(); // initial size
            }

            Inheritance.inheritPrototype( ExampleSimStage, Easel.Stage ); // prototype chaining

            return ExampleSimStage;
        } );
