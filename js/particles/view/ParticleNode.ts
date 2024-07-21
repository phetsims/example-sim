// Copyright 2021, University of Colorado Boulder

/**
 * ParticleNode is the view for a particle. It is responsible for the visual representation of a particle,
 * and keeping that visual representation synchronized with a Particle instance.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import ShadedSphereNode, { ShadedSphereNodeOptions } from '../../../../scenery-phet/js/ShadedSphereNode.js';
import exampleSim from '../../exampleSim.js';
import optionize from '../../../../phet-core/js/optionize.js';

type SelfOptions = EmptySelfOptions;
type ParticleNodeOptions = SelfOptions & ShadedSphereNodeOptions;

export default class ParticleNode extends ShadedSphereNode {

  readonly particle: Particle;

  /**
   * @param {Particle} particle - the model of a particle
   * @param {ModelViewTransform2} modelViewTransform - transform between model and view coordinates
   * @param {Options} [options]
   */
  public constructor( particle: Particle, modelViewTransform: ModelViewTransform2, providedOptions: ParticleNodeOptions ) {

    // Demonstrate a common pattern for specifying options and providing default values
    const options = optionize<MagnetsControlPanelOptions, SelfOptions, PanelOptions>()( {

      // Default values for optional ShadedSphereNodeOptions
      mainColor: particle.color
    }, providedOptions );

    super( modelViewTransform.modelToViewDeltaX( particle.diameter ), options );

    // @public (read-only)
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