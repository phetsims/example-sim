// Copyright 2002-2013, University of Colorado

/**
 * Model of a simple bar magnet.
 * The magnet has fixed size, and mutable location and orientation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function ( require ) {
  'use strict';

  // imports
  var Fort = require( 'FORT/Fort' );

  // Constructor for BarMagnet.
  var BarMagnet = Fort.Model.extend(
      {
        defaults: {
          width: 375,
          height: 75,
          orientation: 0,
          location: {x: 0, y: 0} }
      } );

  return BarMagnet;
} );
