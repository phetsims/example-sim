// Copyright 2002-2013, University of Colorado

/**
 * The Easel stage for this simulation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( [
            'easel',
            'phetcommon/view/ModelViewTransform2D',
            'phetcommon/math/Point2D',
            'view/BarMagnetDisplay',
            'view/FrameRateDisplay'
        ],
        function ( Easel, ModelViewTransform2D, Point2D, BarMagnetDisplay, FrameRateDisplay ) {

            function ExampleSimStage( canvas, model ) {

                Easel.Stage.call( this, canvas ); // constructor stealing

                this.enableMouseOver();

                // model-view transform
                var MVT_SCALE = 1; // 1 model unit == 1 view unit
                var MVT_OFFSET = new Point2D( 0, 0 ); // origin relative to rootContainer
                var mvt = new ModelViewTransform2D( MVT_SCALE, MVT_OFFSET );

                // canvas background
                var background = new Easel.Shape();

                // bar magnet
                var barMagnet = new BarMagnetDisplay( model.barMagnet, mvt );

                // compass
                var compass = new CompassDisplay( model.compass, mvt, NEEDLE_SIZE );

                // frame rate display, upper left (for performance debugging)
                this.frameRateDisplay = new FrameRateDisplay();
                this.frameRateDisplay.x = 20;
                this.frameRateDisplay.y = 20;

                // rendering order
                this.addChild( background );
                var rootContainer = new Easel.Container();
                this.addChild( rootContainer );
                rootContainer.addChild( barMagnet );
                rootContainer.addChild( this.frameRateDisplay );

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

            // prototype chaining via parasitic combination inheritance
            var prototype = Object( Easel.Stage.prototype ); // create a clone of the supertype's prototype
            prototype.constructor = ExampleSimStage; // account for losing the default constructor when prototype is overwritten
            ExampleSimStage.prototype = prototype; // assign cloned prototype to subtype

            return ExampleSimStage;
        } );
