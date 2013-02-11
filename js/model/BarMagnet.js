// Copyright 2002-2013, University of Colorado

/**
 * Model of a simple bar magnet.
 * The magnet has fixed size, and mutable location and orientation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( [
            'PHETCOMMON/math/Point2D',
            'PHETCOMMON/model/property/Property'
        ],
        function ( Point2D, Property ) {

            /**
             * @class BarMagnet
             * @constructor
             * @param {Point2D} location
             * @param {Dimension2D} size
             * @param {Number} orientation in radians
             */
            function BarMagnet( location, size, orientation ) {

                // initialize properties
                this.location = new Property( location );
                this.size = size;
                this.orientation = new Property( orientation );
            }

            // Resets all properties
            BarMagnet.prototype.reset = function () {
                this.location.reset();
                this.orientation.reset();
            };

            return BarMagnet;
        } );

