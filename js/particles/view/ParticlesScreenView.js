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
import TimeControlNode from '../../../../scenery-phet/js/TimeControlNode.js';
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
    // but it's almost always a good idea to have such a transform. To see how a different transform can result in
    // a different result in the view, try using this transform, which will cause the particles to flow upward:
    // const modelViewTransform = ModelViewTransform2.createOffsetXYScaleMapping( new Vector2( 0, 500 ), 1, -1 );
    const modelViewTransform = ModelViewTransform2.createIdentity();

    // Add the 'Reset All' button. This resets the simulation to its initial state. By PhET convention, this
    // button is positioned at the lower-right of the screen.
    const resetAllButton = new ResetAllButton( {
      listener: () => {
        model.reset();
        this.logArrayLengths();
      },
      right: this.layoutBounds.right - ExampleSimConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.bottom - ExampleSimConstants.SCREEN_VIEW_Y_MARGIN
    } );
    this.addChild( resetAllButton );

    // Time controls, used to play/pause the animation
    const timeControlNode = new TimeControlNode( model.isPlayingProperty, {
      playPauseStepButtonOptions: {
        stepForwardButtonOptions: {
          listener: () => model.stepOnce()
        }
      },
      right: resetAllButton.left - 40,
      bottom: this.layoutBounds.bottom - ExampleSimConstants.SCREEN_VIEW_Y_MARGIN
    } );
    this.addChild( timeControlNode );

    // The parent for all ParticleNode instances. Grouping them under here ensures that we're only looking at
    // ParticleNode instances when trying to identify which ParticleNode corresponds to a specific Particle.
    const particlesNode = new Node();
    this.addChild( particlesNode );

    // When a particle is added to the model, add its corresponding view.
    // removeListener is not needed, because model exists for the lifetime of the sim.
    model.particleAddedEmitter.addListener( particle => {
      particlesNode.addChild( new ParticleNode( particle, modelViewTransform ) );
    } );

    // When a Particle is removed from the model, remove its corresponding ParticleNode from the view.
    // removeListener is not needed, because model exists for the lifetime of the sim.
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
    if ( this.model.isPlayingProperty.value ) {
      this.logArrayLengths();
    }
  }

  /**
   * Run with ?log to verify that model and view array sizes stabilize, and we're not leaking memory.
   * @private
   */
  logArrayLengths() {
    phet.log && phet.log( `model.particles.length=${this.model.particles.length}` );
    phet.log && phet.log( `particlesNode.children.length=${this.particlesNode.children.length}` );
  }
}

exampleSim.register( 'ParticlesScreenView', ParticlesScreenView );
export default ParticlesScreenView;