// Copyright 2013-2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import exampleSimStrings from './example-sim-strings.js';
import ExampleScreen from './example/ExampleScreen.js';

const exampleSimTitleString = exampleSimStrings[ 'example-sim' ].title;

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

SimLauncher.launch( () => {
  const sim = new Sim( exampleSimTitleString, [ new ExampleScreen() ], simOptions );
  sim.start();
} );