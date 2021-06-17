// Copyright 2013-2020, University of Colorado Boulder

/**
 * MagnetsScreen is the top-level component for the 'Magnets' screen.  It creates the model and view.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../../axon/js/Property.js';
import Screen from '../../../joist/js/Screen.js';
import exampleSim from '../exampleSim.js';
import exampleSimStrings from '../exampleSimStrings.js';
import MagnetsModel from './model/MagnetsModel.js';
import MagnetsScreenView from './view/MagnetsScreenView.js';

class MagnetsScreen extends Screen {

  constructor() {
    super(
      () => new MagnetsModel(),
      model => new MagnetsScreenView( model ), {
        name: exampleSimStrings.screen.magnets,
        backgroundColorProperty: new Property( 'rgb( 50, 50, 50 )' )
        //TODO if you include homeScreenIcon or navigationBarIcon, use JOIST/ScreenIcon
      } );
  }
}

exampleSim.register( 'MagnetsScreen', MagnetsScreen );
export default MagnetsScreen;