// Copyright 2021-2024, University of Colorado Boulder

/**
 * ParticleNode is the view for a particle. It is responsible for the visual representation of a particle,
 * and keeping that visual representation synchronized with a Particle instance.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import ShadedSphereNode, { ShadedSphereNodeOptions } from '../../../../scenery-phet/js/ShadedSphereNode.js';
import exampleSim from '../../exampleSim.js';
import Particle from '../model/Particle.js';

type SelfOptions = EmptySelfOptions;
type ParticleNodeOptions = SelfOptions & ShadedSphereNodeOptions;

export default class ParticleNode extends ShadedSphereNode {

  public readonly particle: Particle;

  /**
   * particle - the model of a particle
   * modelViewTransform - transform between model and view coordinates
   * providedOptions
   */
  public constructor( particle: Particle, modelViewTransform: ModelViewTransform2, providedOptions?: ParticleNodeOptions ) {

    // Demonstrate a common pattern for specifying options and providing default values
    const options = optionize<ParticleNodeOptions, SelfOptions, ShadedSphereNodeOptions>()( {

      // Default values for optional ShadedSphereNodeOptions
      mainColor: particle.color
    }, providedOptions );

    super( modelViewTransform.modelToViewDeltaX( particle.diameter ), options );

    this.particle = particle;

    // Update the view position to match the model position.
    // Note that we're applying the transform from model to view coordinates.
    particle.positionProperty.link( position => {
      this.translation = modelViewTransform.modelToViewPosition( position );
    } );

    // Update opacity to match the model.
    particle.opacityProperty.link( opacity => {
      this.opacity = opacity;
    } );
  }
}

exampleSim.register( 'ParticleNode', ParticleNode );