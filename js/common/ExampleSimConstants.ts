// Copyright 2021-2024, University of Colorado Boulder

/**
 * ExampleSimConstants is a collection of constants that are used throughout this simulation.
 * If a constant is used in more than one place in the code, it is preferrable to put that constant here,
 * rather than duplicating it.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../../axon/js/Property.js';
import ExampleSimColors from './ExampleSimColors.js';
import exampleSim from '../exampleSim.js';

export type ExampleSimScreenOptions = {
    backgroundColorProperty: Property<string>;

    showUnselectedHomeScreenIconFrame: boolean;

    showScreenIconFrameForNavigationBarFill: string;
};

const ExampleSimConstants = {

  // Margins around the edge of the view
  SCREEN_VIEW_X_MARGIN: 20,
  SCREEN_VIEW_Y_MARGIN: 20,

  // Options common to all Screens
  // SCREEN_OPTIONS: ExampleSimScreenOptions = { // should be this, but weirdly says ExampleSimScreenOptions doesn't exist
  SCREEN_OPTIONS: {
    backgroundColorProperty: ExampleSimColors.screenBackgroundColorProperty,

    // put a gray border around unselected icons on the home screen
    showUnselectedHomeScreenIconFrame: true,

    // put a gray border around screen icons when the navigation bar is black
    showScreenIconFrameForNavigationBarFill: 'black'
  }
};

exampleSim.register( 'ExampleSimConstants', ExampleSimConstants );
export default ExampleSimConstants;