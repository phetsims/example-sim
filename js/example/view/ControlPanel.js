// Copyright 2013-2020, University of Colorado Boulder

/**
 * Panel of controls at the top left of the sim. It contains controls for flipping the magnet and the reset all button.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import merge from '../../../../phet-core/js/merge.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import VBox from '../../../../scenery/js/nodes/VBox.js';
import TextPushButton from '../../../../sun/js/buttons/TextPushButton.js';
import Panel from '../../../../sun/js/Panel.js';
import exampleSim from '../../exampleSim.js';
import exampleSimStrings from '../../exampleSimStrings.js';

class ControlPanel extends Panel {

  /**
   * @param {ExampleModel} model - the model for the entire screen
   * @param {Object} [options] - scenery options for rendering the control panel, see the constructor for options
   */
  constructor( model, options ) {

    // Demonstrate a common pattern for specifying options and providing default values
    options = merge( {
      xMargin: 10,
      yMargin: 10,
      stroke: 'orange',
      lineWidth: 3
    }, options );

    // 'Flip Polarity' button
    const flipButton = new TextPushButton( exampleSimStrings.flipPolarity, {
      font: new PhetFont( 16 ),
      baseColor: 'yellow',
      xMargin: 10,
      listener: () => {
        const orientation = model.barMagnet.orientationProperty.get() + Math.PI;
        model.barMagnet.orientationProperty.set( orientation );
      }
    } );

    // 'Reset All' button, resets the sim to its initial state
    const resetAllButton = new ResetAllButton( {
      listener: () => model.reset()
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

    super( content, options );
  }
}

exampleSim.register( 'ControlPanel', ControlPanel );
export default ControlPanel;