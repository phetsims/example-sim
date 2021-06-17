// Copyright 2013-2020, University of Colorado Boulder

/**
 * ParticlesScreen is the top-level component for the 'Particles' screen.  It creates the model and view.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../../axon/js/Property.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import ShadedSphereNode from '../../../scenery-phet/js/ShadedSphereNode.js';
import ExampleSimConstants from '../common/ExampleSimConstants.js';
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
      backgroundColorProperty: BACKGROUND_COLOR_PROPERTY,
      homeScreenIcon: createScreenIcon()
    };

    super(
      () => new ParticlesModel(),
      model => new ParticlesScreenView( model ),
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
  const iconNode = new ShadedSphereNode( 100, {
    mainColor: ExampleSimConstants.PARTICLE_COLOR
  } );
  return new ScreenIcon( iconNode, {
    fill: BACKGROUND_COLOR_PROPERTY
  } );
}

exampleSim.register( 'ParticlesScreen', ParticlesScreen );
export default ParticlesScreen;