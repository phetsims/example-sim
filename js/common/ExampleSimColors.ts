// Copyright 2024-2025, University of Colorado Boulder

/**
 * Defines the colors for this sim.
 *
 * All simulations should have a Colors.js file, see https://github.com/phetsims/scenery-phet/issues/642.
 *
 * For static colors that are used in more than one place, add them here.
 *
 * For dynamic colors that can be controlled via colorProfileProperty.js, add instances of ProfileColorProperty here,
 * each of which is required to have a default color. Note that dynamic colors can be edited by running the sim from
 * phetmarks using the "Color Edit" mode.
 *
 * @author Franz Amador
 */

import ProfileColorProperty from '../../../scenery/js/util/ProfileColorProperty.js';
import exampleSim from '../exampleSim.js';

const ExampleSimColors = {

  controlPanelBorderColorProperty: new ProfileColorProperty( exampleSim, 'controlPanelBorder', {
    default: 'orange'
  } ),

  controlPanelButtonColorProperty: new ProfileColorProperty( exampleSim, 'controlPanelButton', {
    default: 'yellow'
  } ),

  particleColorProperty: new ProfileColorProperty( exampleSim, 'particle', {
    default: 'rgb( 160, 160, 160 )'
  } ),

  // Background color for screens in this sim
  screenBackgroundColorProperty: new ProfileColorProperty( exampleSim, 'background', {
    default: 'black'
  } )
};

exampleSim.register( 'ExampleSimColors', ExampleSimColors );
export default ExampleSimColors;