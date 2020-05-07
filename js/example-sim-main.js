// Copyright 2013-2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import ExampleScreen from './example/ExampleScreen.js';
import exampleSimStrings from './exampleSimStrings.js';

const simOptions = {
  credits: {
    // all credits fields are optional, see joist.AboutDialog
    leadDesign: 'Boris',
    softwareDevelopment: 'Natasha',
    team: 'Chico, Groucho, Gummo, Harpo, Zeppo',
    qualityAssurance: 'Curly, Larry, Moe',
    graphicArts: 'Rembrandt Harmenszoon van Rijn',
    thanks: 'Thanks to the ACME Dynamite Company for funding this sim!'
  }
};

simLauncher.launch( () => {
  const sim = new Sim( exampleSimStrings[ 'example-sim' ].title, [ new ExampleScreen() ], simOptions );
  sim.start();
} );