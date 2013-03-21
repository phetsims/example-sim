// Copyright 2002-2013, University of Colorado

/**
 * Model container.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define(
    [
      'easel',
      'DOT/Dimension2',
      'DOT/Vector2',
      'model/BarMagnet'
    ],
    function( Easel, Dimension2, Vector2, BarMagnet ) {
      "use strict";

      function ExampleSimModel() {
        // model elements
        this.barMagnet = new BarMagnet( new Vector2( 0, 0 ), new Dimension2( 375, 75 ), 0 );
      }

      // Resets all model elements
      ExampleSimModel.prototype.reset = function() {
        this.barMagnet.reset();
      };

      // Called by the animation loop
      ExampleSimModel.prototype.step = function() {
        // Make model changes here.
      };

      return ExampleSimModel;
    } );
