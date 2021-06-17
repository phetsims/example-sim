// Copyright 2021, University of Colorado Boulder

/**
 * ExampleSimConstants is a collection of constants that are used throughout this simulation.
 * If a constant is used in more than one place in the code, it is preferrable to put that constant here,
 * rather than duplicating it.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import exampleSim from '../exampleSim.js';

const ExampleSimConstants = {

  // Margins around the edge of the view
  SCREEN_VIEW_X_MARGIN: 20,
  SCREEN_VIEW_Y_MARGIN: 20
};

exampleSim.register( 'ExampleSimConstants', ExampleSimConstants );
export default ExampleSimConstants;