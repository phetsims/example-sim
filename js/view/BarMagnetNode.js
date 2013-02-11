// Copyright 2002-2013, University of Colorado

/**
 * Easel display object (scene graph node) for the bar magnet.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( [
            'easel',
            'EASEL-PHET/events/DragHandler',
            'PHETCOMMON/model/Inheritance',
            'PHETCOMMON/math/MathUtil',
            'image!images/barMagnet.png'
        ],
        function ( Easel, DragHandler, Inheritance, MathUtil, barMagnetImage ) {

            /**
             * @class BarMagnetNode
             * @constructor
             * @param {BarMagnet} barMagnet
             * @param {ModelViewTransform2D} mvt
             */
            function BarMagnetNode( barMagnet, mvt ) {

                Easel.Bitmap.call( this, barMagnetImage ); // constructor stealing

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

            Inheritance.inheritPrototype( BarMagnetNode, Easel.Bitmap ); // prototype chaining

            return BarMagnetNode;
        } );
