// Copyright 2013-2020, University of Colorado Boulder

/**
 * MagnetsScreen is the top-level component for the 'Magnets' screen.  It creates the model and view.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../../axon/js/Property.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import Image from '../../../scenery/js/nodes/Image.js';
import exampleSim from '../exampleSim.js';
import exampleSimStrings from '../exampleSimStrings.js';
import MagnetsModel from './model/MagnetsModel.js';
import MagnetsScreenView from './view/MagnetsScreenView.js';
import barMagnetImage from '../../images/barMagnet_png.js';

// constants
const BACKGROUND_COLOR_PROPERTY = new Property( 'rgb( 50, 50, 50 )' );

class MagnetsScreen extends Screen {

  constructor() {

    const options = {
      name: exampleSimStrings.screen.magnets,
      backgroundColorProperty: BACKGROUND_COLOR_PROPERTY,
      homeScreenIcon: createScreenIcon()
    };

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
 * @returns {ScreenIcon}
 */
function createScreenIcon() {
  const iconNode = new Image( barMagnetImage );
  return new ScreenIcon( iconNode, {
    fill: BACKGROUND_COLOR_PROPERTY
  } );
}

exampleSim.register( 'MagnetsScreen', MagnetsScreen );
export default MagnetsScreen;