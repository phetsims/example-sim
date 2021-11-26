// Copyright 2021, University of Colorado Boulder

/**
 * ParticlesScreenView is the top-level view component for the 'Magnets' screen. All of the components that make up
 * the screen's view are added here.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Vector2 from '../../../../dot/js/Vector2.js';
import ScreenView from '../../../../joist/js/ScreenView.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import TimeControlNode from '../../../../scenery-phet/js/TimeControlNode.js';
import { Node } from '../../../../scenery/js/imports.js';
import ExampleSimConstants from '../../common/ExampleSimConstants.js';
import exampleSim from '../../exampleSim.js';
import ParticleNode from './ParticleNode.js';

// The model is in nanometers, and this is the number of nanometers per 1 unit in the view.
const NANOMETERS_PER_PIXEL = 100;

class ParticlesScreenView extends ScreenView {

  /**
   * @param {ParticlesModel} model - the top-level model for this screen
   */
  constructor( model ) {

    super();

    // Transform from model coordinates to view coordinates. The model's origin is at the position where the
    // particles originate. Move that position to the top center of the screen.  Since the model is in nm,
    // scale up from model to view. And since +y is up in the model, the y scale is negative because +y is
    // down in the view (scenery).
    const viewOffset = new Vector2( this.layoutBounds.centerX, 20 );
    const modelViewTransform = ModelViewTransform2.createOffsetXYScaleMapping( viewOffset,
      1 / NANOMETERS_PER_PIXEL, -1 / NANOMETERS_PER_PIXEL );

    // Add the 'Reset All' button. This resets the simulation to its initial state. By PhET convention, this
    // button is positioned at the lower-right of the screen.
    const resetAllButton = new ResetAllButton( {
      listener: () => {

        // Interrupt any other user interactions that may be in progress, needed for multi-touch.
        this.interruptSubtreeInput();

        // This is an example of using phet.log. Adding the 'log' query parameter to your URL will enabled phet.log
        // output to the console. In this example, we will print the size of the model and view arrays before and
        // after resetting, to confirm that we're not leaking memory.
        phet.log && phet.log( 'Before reset:' );
        phet.log && phet.log( `# Particles=${this.model.particles.length}` );
        phet.log && phet.log( `# ParticlesNodes=${this.particlesNode.children.length}` );

        // Reset the model
        model.reset();

        phet.log && phet.log( 'After reset:' );
        phet.log && phet.log( `# Particles=${this.model.particles.length}` );
        phet.log && phet.log( `# ParticlesNodes=${this.particlesNode.children.length}` );
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

    // The parent for all ParticleNode instances. Grouping them here ensures that we're only looking at
    // ParticleNode instances when trying to identify which ParticleNode corresponds to a specific Particle.
    const particlesNode = new Node();
    this.addChild( particlesNode );

    // When a Particle is added to the model, add a corresponding ParticleNode to the view.
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
}

exampleSim.register( 'ParticlesScreenView', ParticlesScreenView );
export default ParticlesScreenView;