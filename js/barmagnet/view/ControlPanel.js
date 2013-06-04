// Copyright 2002-2012, University of Colorado

/**
 * Control panel.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // imports
  var Button = require( "SUN/Button" );
  var ExampleSimStrings = require( "common/ExampleSimStrings" );
  var Font = require( "SCENERY/util/Font" );
  var inherit = require( 'PHET_CORE/inherit' );
  var VBox = require( "SCENERY/nodes/VBox" );
  var PanelNode = require( "SUN/PanelNode" );
  var ResetAllButton = require( "SCENERY_PHET/ResetAllButton" );
  var Text = require( "SCENERY/nodes/Text" );

  /**
   * @param {BarMagnetModel} model
   * @param {*} options
   * @constructor
   */
  function ControlPanel( model, options ) {

    options = _.extend( { xMargin: 10, yMargin: 10 }, options );

    var flipLabel = new Text( ExampleSimStrings.flipPolarity, { font: new Font( "20px Arial" ) } );
    var flipButton = new Button( flipLabel, function() {
      model.barMagnet.orientation.value = model.barMagnet.orientation.value + Math.PI;
    }, { xMargin: 10, fill: 'yellow' } );

    var resetAllButton = new ResetAllButton( function() {
      model.reset();
    } );

    var content = new VBox( {align: 'center', spacing: 10, children: [flipButton, resetAllButton] } );

    PanelNode.call( this, content, options );
  }

  inherit( ControlPanel, PanelNode );

  return ControlPanel;
} );
