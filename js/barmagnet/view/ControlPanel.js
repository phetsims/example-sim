// Copyright 2002-2013, University of Colorado Boulder

/**
 * Control panel.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // imports
  var ExampleSimStrings = require( 'common/ExampleSimStrings' );
  var Font = require( 'SCENERY/util/Font' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Panel = require( 'SUN/Panel' );
  var RectangleButton = require( 'SUN/RectangleButton' );
  var ResetAllButton = require( 'SCENERY_PHET/ResetAllButton' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  /**
   * @param {BarMagnetModel} model
   * @param {*} options
   * @constructor
   */
  function ControlPanel( model, options ) {

    // Demonstrate a common pattern for specifying options and providing default values.
    options = _.extend( { xMargin: 10,
                          yMargin: 10,
                          stroke: 'orange',
                          lineWidth: 3 },
                        options );

    // "Flip Polarity" button
    var flipLabel = new Text( ExampleSimStrings.flipPolarity, { font: new Font( '20px Arial' ) } );
    var flipButton = new RectangleButton( flipLabel, function() {
      model.barMagnet.orientation.value = model.barMagnet.orientation.value + Math.PI;
    }, { rectangleXMargin: 10, rectangleFill: 'yellow' } );

    // "Reset All" button, resets the sim to its initial state
    var resetAllButton = new ResetAllButton( function() {
      model.reset();
    } );

    // The contents of the control panel
    var content = new VBox( {align: 'center', spacing: 10, children: [flipButton, resetAllButton] } );

    Panel.call( this, content, options );
  }

  inherit( Panel, ControlPanel );

  return ControlPanel;
} );
