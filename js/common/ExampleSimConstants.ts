// Copyright 2021-2024, University of Colorado Boulder

/**
 * ExampleSimConstants is a collection of constants that are used throughout this simulation.
 * If a constant is used in more than one place in the code, it is preferrable to put that constant here,
 * rather than duplicating it.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../../axon/js/Property.js';
import exampleSim from '../exampleSim.js';

export type ExampleSimScreenOptions = {
    backgroundColorProperty: Property<String>,

    showUnselectedHomeScreenIconFrame: boolean,

    showScreenIconFrameForNavigationBarFill: String
};

const ExampleSimConstants = {

  // Margins around the edge of the view
  SCREEN_VIEW_X_MARGIN: 20,
  SCREEN_VIEW_Y_MARGIN: 20,

  // Options common to all Screens
  //SCREEN_OPTIONS: ExampleSimScreenOptions = {
  SCREEN_OPTIONS: {
    backgroundColorProperty: new Property( 'black' ),

    // put a gray border around unselected icons on the home screen
    showUnselectedHomeScreenIconFrame: true,

    // put a gray border around screen icons when the navigation bar is black
    showScreenIconFrameForNavigationBarFill: 'black'
  },

  // Color used for particles
  PARTICLE_COLOR: 'rgb( 160, 160, 160 )'
};

exampleSim.register( 'ExampleSimConstants', ExampleSimConstants );
export default ExampleSimConstants;