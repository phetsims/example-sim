// Copyright 2002-2013, University of Colorado

"use strict";

/**
 * Model container.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( [
            'easel',
            'PHETCOMMON/math/Dimension2D',
            'PHETCOMMON/math/Point2D',
            'model/BarMagnet'
        ],
        function ( Easel, Dimension2D, Point2D, BarMagnet ) {

            function ExampleSimModel() {
                // model elements
                this.barMagnet = new BarMagnet( new Point2D( 0, 0 ), new Dimension2D( 375, 75 ), 0 );
            }

            // Resets all model elements
            ExampleSimModel.prototype.reset = function () {
                this.barMagnet.reset();
            };

            // Animates the model, called by Easel.Ticker
            ExampleSimModel.prototype.tick = function() {
                // Make model changes here.
            };

            return ExampleSimModel;
        } );
