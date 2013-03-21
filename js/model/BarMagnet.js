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
  //Parameters location,width,height,orientation are set in the constructor invocation
  var BarMagnet = Fort.Model.extend();

  //No custom methods or properties in this case.
  return BarMagnet;
} );

