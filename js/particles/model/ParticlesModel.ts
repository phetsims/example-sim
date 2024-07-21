// Copyright 2021-2024, University of Colorado Boulder

/**
 * ParticlesModel is the top-level model for the 'Particles' screen. You can think of the top-level model as a container
 * for all of the pieces that make up the model for a screen.
 *
 * Model units are nm (nanometers) and seconds. +x is to the right, +y is up.
 *
 * The origin (0,0) of the model is the position where the particles originate.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import BooleanProperty from '../../../../axon/js/BooleanProperty.js';
import Emitter from '../../../../axon/js/Emitter.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import exampleSim from '../../exampleSim.js';
import Particle from './Particle.js';

// constants
const GRAVITY = new Vector2( 0, -20 ); // in nm/sec
const OPACITY_DELTA = 0.02; // opacity is decreased by this amount on each animation step

export default class ParticlesModel {

  // the complete set of particles
  public particles: Particle[];

  // Notifies listeners when a Particle is added.
  public particleAddedEmitter: Emitter;

  // Notifies listeners when a Particle is removed.
  public particleRemovedEmitter: Emitter;

  // Whether the model is advanced on each call to step.
  public isPlayingProperty: BooleanProperty;

  public constructor() {

    this.particles = [];
    this.particleAddedEmitter = new Emitter( {
      parameters: [ { valueType: Particle } ]
    } );
    this.particleRemovedEmitter = new Emitter( {
      parameters: [ { valueType: Particle } ]
    } );
    this.isPlayingProperty = new BooleanProperty( true );
  }

  /**
   * Resets the model to its initial state. This method is called when the simulation's "Reset All" button is pressed.
   */
  public reset(): void {

    // Remove all particles.
    while ( this.particles.length > 0 ) {
      this.removeParticle( this.particles[ this.particles.length - 1 ] );
    }
  }

  /**
   * Steps the model each time the clock ticks.
   * dt - time step, in seconds
   */
  public step( dt: number ): void {
    if ( this.isPlayingProperty.value ) {
      this.stepOnce();
    }
  }

  /**
   * Steps the model one step. Called directly when using the step button of the time control.
   */
  public stepOnce(): void {

    // Create some new particles
    for ( let i = 0; i < 3; i++ ) {
      const particle = new Particle();
      this.particles.push( particle );
      this.particleAddedEmitter.emit( particle );
    }

    // For each Particle...
    this.particles.forEach( particle => {

      // Apply a force, resulting in motion.
      particle.applyForce( GRAVITY );

      // Reduce opacity.
      particle.opacityProperty.value = Math.max( 0, particle.opacityProperty.value - OPACITY_DELTA );

      // Remove particles that have become invisible.
      if ( particle.opacityProperty.value === 0 ) {
        this.removeParticle( particle );
      }
    } );
  }

  /**
   * Removes a particle.
   */
  private removeParticle( particle: Particle ): void {
    this.particles.splice( this.particles.indexOf( particle ), 1 );
    this.particleRemovedEmitter.emit( particle );
    particle.dispose();
  }
}

exampleSim.register( 'ParticlesModel', ParticlesModel );