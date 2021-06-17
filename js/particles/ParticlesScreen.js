// Copyright 2013-2020, University of Colorado Boulder

/**
 * ParticlesScreen is the top-level component for the 'Particles' screen.  It creates the model and view.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../../axon/js/Property.js';
import Screen from '../../../joist/js/Screen.js';
import exampleSim from '../exampleSim.js';
import exampleSimStrings from '../exampleSimStrings.js';
import ParticlesModel from './model/ParticlesModel.js';
import ParticlesScreenView from './view/ParticlesScreenView.js';

// constants
const BACKGROUND_COLOR_PROPERTY = new Property( 'white' );

class ParticlesScreen extends Screen {

  constructor() {
    
    const options = {
      name: exampleSimStrings.screen.particles,
      backgroundColorProperty: BACKGROUND_COLOR_PROPERTY
      //TODO if you include homeScreenIcon or navigationBarIcon, use JOIST/ScreenIcon
    };

    super(
      () => new ParticlesModel(),
      model => new ParticlesScreenView( model ),
      options
    );
  }
}

exampleSim.register( 'ParticlesScreen', ParticlesScreen );
export default ParticlesScreen;