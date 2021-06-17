// Copyright 2013-2020, University of Colorado Boulder

/**
 * ParticlesScreenView is the top-level view component for the 'Magnets' screen. All of the components that make up
 * the screen's view are added here.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import ScreenView from '../../../../joist/js/ScreenView.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import ExampleSimConstants from '../../common/ExampleSimConstants.js';
import exampleSim from '../../exampleSim.js';
import ParticleNode from './ParticleNode.js';

class ParticlesScreenView extends ScreenView {

  /**
   * @param {ParticlesModel} model - the top-level model for this screen
   */
  constructor( model ) {

    super();

    // Transform from model coordinates to view coordinates. We're using an identity transform here to demonstrate,
    // but it's almost always a good idea to have such a transform.
    const modelViewTransform = ModelViewTransform2.createIdentity();

    // Add the 'Reset All' button. This resets the simulation to its initial state. By PhET convention, this
    // button is positioned at the lower-right of the screen.
    this.addChild( new ResetAllButton( {
      listener: () => model.reset(),
      right: this.layoutBounds.right - ExampleSimConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.bottom - ExampleSimConstants.SCREEN_VIEW_Y_MARGIN
    } ) );

    // The parent for all ParticleNode instances. Grouping them under here ensures that we're only looking at
    // ParticleNode instances when trying to identify which ParticleNode corresponds to a specific Particle.
    const particlesNode = new Node();
    this.addChild( particlesNode );

    // When a particle is added to the model, add its corresponding view.
    model.particleAddedEmitter.addListener( particle => {
      particlesNode.addChild( new ParticleNode( particle, modelViewTransform ) );
    } );

    // When a Particle is removed from the model, remove its corresponding ParticleNode from the view.
    model.particleRemovedEmitter.addListener( particle => {
      particlesNode.children.forEach( particleNode => {
        if ( particleNode.particle === particle ) {
          particleNode.dispose(); // this also removes particleNode from particlesNode
        }
      } );
    } );

    // @private
    this.model = model;
    this.particlesNode = particlesNode;
  }

  /**
    * Steps the view each time the clock ticks.
    * @param {number} dt - time step, in seconds
    * @public
    */
  step( dt ) {

    // Run with ?log to verify that model and view array sizes stabilize, and we're not leaking memory.
    phet.log && phet.log( `model.particles.length=${this.model.particles.length}` );
    phet.log && phet.log( `particlesNode.children.length=${this.particlesNode.children.length}` );
  }
}

exampleSim.register( 'ParticlesScreenView', ParticlesScreenView );
export default ParticlesScreenView;