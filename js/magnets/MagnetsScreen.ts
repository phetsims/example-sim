// Copyright 2013-2024, University of Colorado Boulder

/**
 * MagnetsScreen is the top-level component for the 'Magnets' screen.  It creates the model and view.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import { Image } from '../../../scenery/js/imports.js';
import barMagnet_png from '../../images/barMagnet_png.js';
import ExampleSimColors from '../common/ExampleSimColors.js';
import ExampleSimConstants from '../common/ExampleSimConstants.js';
import exampleSim from '../exampleSim.js';
import ExampleSimStrings from '../ExampleSimStrings.js';
import MagnetsModel from './model/MagnetsModel.js';
import MagnetsScreenView from './view/MagnetsScreenView.js';
import { optionize4, EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import Tandem from '../../../tandem/js/Tandem.js';

type SelfOptions = EmptySelfOptions;

type MagnetsScreenOptions = SelfOptions & ScreenOptions;

export default class MagnetsScreen extends Screen<MagnetsModel, MagnetsScreenView> {

  public constructor( providedOptions?: MagnetsScreenOptions ) {

    const options = optionize4<MagnetsScreenOptions, SelfOptions, ScreenOptions>()(
      {}, ExampleSimConstants.SCREEN_OPTIONS,
      {
        name: ExampleSimStrings.screen.magnetsStringProperty,
        homeScreenIcon: createScreenIcon(),
        tandem: Tandem.OPT_OUT
      },
      providedOptions );

    super(
      () => new MagnetsModel(),
      model => new MagnetsScreenView( model ),
      options
    );
  }
}

/**
 * Creates the icon for this screen. This will be used for the home screen and navigation bar.
 * Always use ScreenIcon for screen icons.
 */
function createScreenIcon(): ScreenIcon {
  const iconNode = new Image( barMagnet_png );
  return new ScreenIcon( iconNode, {
    fill: ExampleSimColors.screenBackgroundColorProperty
  } );
}

exampleSim.register( 'MagnetsScreen', MagnetsScreen );