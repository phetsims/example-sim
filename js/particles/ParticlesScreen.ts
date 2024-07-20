// Copyright 2021-2024, University of Colorado Boulder

/**
 * ParticlesScreen is the top-level component for the 'Particles' screen.  It creates the model and view.
 *
 * This screen was inspired by Alberto, a member of the PhET Google Group. He had written a particle simulation
 * in p5.js, and was interested in how it could be ported to PhET libraries.
 * See https://groups.google.com/g/developing-interactive-simulations-in-html5/c/nrBahpJjAf0
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../../axon/js/Property.js';
import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import merge from '../../../phet-core/js/merge.js';
import ShadedSphereNode from '../../../scenery-phet/js/ShadedSphereNode.js';
import ExampleSimConstants, { ExampleSimScreenOptions } from '../common/ExampleSimConstants.js';
import exampleSim from '../exampleSim.js';
import ExampleSimStrings from '../ExampleSimStrings.js';
import ParticlesModel from './model/ParticlesModel.js';
import ParticlesScreenView from './view/ParticlesScreenView.js';
import optionize from '../../../phet-core/js/optionize.js';

// constants
const BACKGROUND_COLOR_PROPERTY = new Property( 'black' );

type SelfOptions = ExampleSimScreenOptions & EmptySelfOptions;
type ParticlesScreenOptions = SelfOptions & ScreenOptions;

export default class ParticlesScreen extends Screen<ParticlesModel, ParticlesScreenView> {

  public constructor( providedOptions?: ParticlesScreenOptions ) {

    const options = optionize<ParticlesScreenOptions, SelfOptions, ScreenOptions>()(
      ExampleSimConstants.SCREEN_OPTIONS,
      {
        name: ExampleSimStrings.screen.particlesStringProperty,
        homeScreenIcon: createScreenIcon()
      },
      providedOptions );

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
function createScreenIcon(): ScreenIcon {
  const iconNode = new ShadedSphereNode( 100, {
    mainColor: ExampleSimConstants.PARTICLE_COLOR
  } );
  return new ScreenIcon( iconNode, {
    fill: BACKGROUND_COLOR_PROPERTY
  } );
}

exampleSim.register( 'ParticlesScreen', ParticlesScreen );