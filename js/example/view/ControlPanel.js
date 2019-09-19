// Copyright 2013-2018, University of Colorado Boulder

/**
 * Panel of controls at the top left of the sim. It contains controls for flipping the magnet and the reset all button.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const exampleSim = require( 'EXAMPLE_SIM/exampleSim' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Panel = require( 'SUN/Panel' );
  const PhetFont = require( 'SCENERY_PHET/PhetFont' );
  const ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  const TextPushButton = require( 'SUN/buttons/TextPushButton' );
  const VBox = require( 'SCENERY/nodes/VBox' );

  // strings
  const flipPolarityString = require( 'string!EXAMPLE_SIM/flipPolarity' );

  /**
   * @param {ExampleModel} model - the model for the entire screen
   * @param {Object} [options] - scenery options for rendering the control panel, see the constructor for options
   * @constructor
   */
  function ControlPanel( model, options ) {

    // Demonstrate a common pattern for specifying options and providing default values
    options = _.extend( {
        xMargin: 10,
        yMargin: 10,
        stroke: 'orange',
        lineWidth: 3
      }, options );

    // 'Flip Polarity' button
    const flipButton = new TextPushButton( flipPolarityString, {
      font: new PhetFont( 16 ),
      baseColor: 'yellow',
      xMargin: 10,
      listener: function() {
        const orientation = model.barMagnet.orientationProperty.get() + Math.PI;
        model.barMagnet.orientationProperty.set( orientation );
      }
    } );

    // 'Reset All' button, resets the sim to its initial state
    const resetAllButton = new ResetAllButton( {
      listener: function() {
        model.reset();
      }
    } );

    // The contents of the control panel
    const content = new VBox( {
      align: 'center',
      spacing: 10,
      children: [
        flipButton,
        resetAllButton
      ]
    } );

    Panel.call( this, content, options );
  }

  exampleSim.register( 'ControlPanel', ControlPanel );

  return inherit( Panel, ControlPanel );
} );
