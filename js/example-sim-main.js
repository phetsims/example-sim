// Copyright 2013-2021, University of Colorado Boulder

/**
 * This is the main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import exampleSimStrings from './exampleSimStrings.js';
import MagnetsScreen from './magnets/MagnetsScreen.js';
import ParticlesScreen from './particles/ParticlesScreen.js';

const simOptions = {

  // These credits will appear in the About dialog, accessed from the PhET menu in the navigation bar.
  // All credits fields are optional, see joist.AboutDialog.
  credits: {
    leadDesign: 'Boris',
    softwareDevelopment: 'Natasha',
    team: 'Chico, Groucho, Gummo, Harpo, Zeppo',
    qualityAssurance: 'Curly, Larry, Moe',
    graphicArts: 'Rembrandt Harmenszoon van Rijn',
    thanks: 'Thanks to the ACME Dynamite Company for funding this sim!'
  }
};

simLauncher.launch( () => {
  const title = exampleSimStrings[ 'example-sim' ].title;
  const screens = [ new MagnetsScreen(), new ParticlesScreen() ];
  const sim = new Sim( title, screens, simOptions );
  sim.start();
} );