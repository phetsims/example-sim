// Copyright 2013-2024, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Sim, { SimOptions } from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import ExampleSimStrings from './ExampleSimStrings.js';
import './common/ExampleSimQueryParameters.js';
import MagnetsScreen from './magnets/MagnetsScreen.js';
import ParticlesScreen from './particles/ParticlesScreen.js';

// Launch the sim. Beware that scenery Image nodes created outside simLauncher.launch() will have zero bounds
// until the images are fully loaded. See https://github.com/phetsims/coulombs-law/issues/70#issuecomment-429037461
simLauncher.launch( () => {

  const titleStringProperty = ExampleSimStrings[ 'example-sim' ].titleStringProperty;

  const screens = [ new MagnetsScreen(), new ParticlesScreen() ];

  const options: SimOptions = {

    // These credits will appear in the About dialog, accessed from the PhET menu in the navigation bar.
    // All credits fields are optional, see joist.AboutDialog.
    credits: {
      leadDesign: 'Boris',
      softwareDevelopment: 'Natasha',
      team: 'Chico, Groucho, Gummo, Harpo, Zeppo',
      contributors: '',
      qualityAssurance: 'Curly, Larry, Moe',
      graphicArts: 'Dali, Picasso, Warhol',
      soundDesign: 'Bach, Mozart',
      thanks: 'Thanks to the ACME Dynamite Company for funding this sim!'
    }
  };

  const sim = new Sim( titleStringProperty, screens, options );
  sim.start();
} );