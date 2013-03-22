// Copyright 2002-2013, University of Colorado

/**
 * Model of a simple bar magnet.
 * The magnet has fixed size, and mutable location and orientation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  "use strict";
  var Fort = require( 'FORT/Fort' );

  //Constructor for BarMagnet.
  //Parameters location & orientation are set in the constructor invocation
  var BarMagnet = Fort.Model.extend(
      {
        //All bar magnets have the same size and initial orientation.  The position is set in the constructor.
        defaults: {width: 375, height: 75, orientation: 0}
      } );

  //No custom methods or properties in this case.
  return BarMagnet;
} );

