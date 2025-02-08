// Copyright 2013-2025, University of Colorado Boulder

/**
 * MagnetsControlPanel is a panel that contains controls for magnets.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import VBox from '../../../../scenery/js/layout/nodes/VBox.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import RectangularPushButton from '../../../../sun/js/buttons/RectangularPushButton.js';
import Panel, { PanelOptions } from '../../../../sun/js/Panel.js';
import ExampleSimColors from '../../common/ExampleSimColors.js';
import exampleSim from '../../exampleSim.js';
import ExampleSimStrings from '../../ExampleSimStrings.js';
import MagnetsModel from '../model/MagnetsModel.js';

type SelfOptions = EmptySelfOptions;
type MagnetsControlPanelOptions = SelfOptions & PanelOptions;

export default class MagnetsControlPanel extends Panel {

  /**
   * model - the model for the entire screen
   * providedOptions - options for the control panel, see Panel.js for options
   */
  public constructor( model: MagnetsModel, providedOptions: MagnetsControlPanelOptions ) {

    // Demonstrate a common pattern for specifying options and providing default values
    const options = optionize<MagnetsControlPanelOptions, SelfOptions, PanelOptions>()( {

      // Default values for optional PanelOptions
      xMargin: 10,
      yMargin: 10,
      stroke: ExampleSimColors.controlPanelBorderColorProperty,
      lineWidth: 3
    }, providedOptions );

    // 'Magnet Controls' title
    const magnetControlsTitleNode = new Text( ExampleSimStrings.magnetControlsStringProperty, {
      font: new PhetFont( {
        size: 18,
        weight: 'bold'
      } )
    } );

    // 'Flip Polarity' button
    const flipPolarityButton = new RectangularPushButton( {
      content: new Text( ExampleSimStrings.flipPolarityStringProperty, {
        font: new PhetFont( 16 )
      } ),
      baseColor: ExampleSimColors.controlPanelButtonColorProperty,
      xMargin: 10,
      listener: () => {
        const orientation = model.barMagnet.orientationProperty.get() + Math.PI;
        model.barMagnet.orientationProperty.set( orientation );
      }
    } );

    // The contents of the control panel
    const content = new VBox( {
      align: 'center',
      spacing: 10,
      children: [
        magnetControlsTitleNode,
        flipPolarityButton
      ]
    } );

    super( content, options );
  }
}

exampleSim.register( 'MagnetsControlPanel', MagnetsControlPanel );