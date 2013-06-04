// Copyright 2002-2013, University of Colorado

/**
 * The "Example Sim" tab. Conforms to the contract specified in joist/Tab
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // imports
  var BarMagnetModel = require( 'barmagnet/model/BarMagnetModel' );
  var BarMagnetView = require( 'barmagnet/view/BarMagnetView' );
  var ExampleSimStrings = require( 'common/ExampleSimStrings' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );

  function BarMagnetTab() {

    this.name = ExampleSimStrings.exampleSim;
    this.icon = new Rectangle( 0, 0, 50, 50, {fill: 'blue'} ); // a dummy icon for single-tab sim
    this.backgroundColor = 'rgb(50,50,50)'; // dark gray

    this.createModel = function() {
      return new BarMagnetModel();
    };

    this.createView = function( model ) {
      return new BarMagnetView( model );
    };
  }


  return BarMagnetTab;
} );