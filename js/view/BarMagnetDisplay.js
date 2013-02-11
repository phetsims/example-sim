// Copyright 2002-2013, University of Colorado

/**
 * Easel display object for the bar magnet.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( [
            'easel',
            'easel-phet/events/DragHandler',
            'phetcommon/math/MathUtil',
            'image!images/barMagnet.png'
        ],
        function ( Easel, DragHandler, MathUtil, barMagnetImage ) {

            /**
             * @class BarMagnetDisplay
             * @constructor
             * @param {BarMagnet} barMagnet
             * @param {ModelViewTransform2D} mvt
             */
            function BarMagnetDisplay( barMagnet, mvt ) {

                // Use constructor stealing to inherit instance properties.
                Easel.Bitmap.call( this, barMagnetImage );

                // Compute scale factors to match model.
                this.scaleX = mvt.modelToView( barMagnet.size.width ) / this.image.width;
                this.scaleY = mvt.modelToView( barMagnet.size.height ) / this.image.height;

                // Move registration point to the center.
                this.regX = this.image.width / 2;
                this.regY = this.image.height / 2;

                // @param {Point2D} point
                DragHandler.register( this, function ( point ) {
                    barMagnet.location.set( mvt.viewToModel( point ) );
                } );

                // Register for synchronization with model.
                var that = this;
                barMagnet.location.addObserver( function updateLocation( /* Point2D */ location ) {
                    var point = mvt.modelToView( location );
                    that.x = point.x;
                    that.y = point.y;
                } );
                barMagnet.orientation.addObserver( function updateOrientation( orientation /* radians */ ) {
                    that.rotation = MathUtil.toDegrees( orientation );
                } );
            }

            // prototype chaining via parasitic combination inheritance
            var prototype = Object( Easel.Bitmap.prototype ); // create a clone of the supertype's prototype
            prototype.constructor = BarMagnetDisplay; // account for losing the default constructor when prototype is overwritten
            BarMagnetDisplay.prototype = prototype; // assign cloned prototype to subtype

            return BarMagnetDisplay;
        } );
