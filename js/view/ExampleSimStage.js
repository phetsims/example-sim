// Copyright 2002-2013, University of Colorado

/**
 * The Easel stage for this simulation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( [
            'easel',
            'easel-phet/nodes/FrameRateNode',
            'phetcommon/view/Inheritance',
            'phetcommon/view/ModelViewTransform2D',
            'phetcommon/math/Point2D',
            'view/BarMagnetNode'
        ],
        function ( Easel, FrameRateNode, Inheritance, ModelViewTransform2D, Point2D, BarMagnetNode ) {

            function ExampleSimStage( canvas, model ) {

                Easel.Stage.call( this, canvas ); // constructor stealing

                this.enableMouseOver();

                // model-view transform
                var MVT_SCALE = 1; // 1 model unit == 1 view unit
                var MVT_OFFSET = new Point2D( 0, 0 ); // origin relative to rootContainer
                var mvt = new ModelViewTransform2D( MVT_SCALE, MVT_OFFSET );

                // canvas background
                var background = new Easel.Shape();

                // frame rate display, upper left (for performance debugging)
                var frameRateNode = new FrameRateNode();
                frameRateNode.x = 20;
                frameRateNode.y = 20;

                // bar magnet
                var barMagnetNode = new BarMagnetNode( model.barMagnet, mvt );

                // rendering order
                this.addChild( background );
                var rootContainer = new Easel.Container();
                this.addChild( rootContainer );
                rootContainer.addChild( frameRateNode );
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

                    // scale the scenegraph
                    // TODO

                    // force rendering update
                    that.tick();
                };
                $( window ).resize( handleResize );
                handleResize(); // initial size
            }

            Inheritance.inheritPrototype( ExampleSimStage, Easel.Stage ); // prototype chaining

            return ExampleSimStage;
        } );
