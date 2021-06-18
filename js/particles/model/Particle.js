// Copyright 2021, University of Colorado Boulder

/**
 * Particle is the model of a simple particle.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import NumberProperty from '../../../../axon/js/NumberProperty.js';
import dotRandom from '../../../../dot/js/dotRandom.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import Vector2Property from '../../../../dot/js/Vector2Property.js';
import exampleSim from '../../exampleSim.js';

// constants
const DELTA_AGE = 5;

class Particle {

  /**
   * @param {number} x - x coordinate of initial position
   * @param {number} y - y coordinate of initial position
   */
  constructor( x, y ) {

    // @private
    this.velocity = new Vector2( dotRandom.nextIntBetween( -5, 5 ), dotRandom.nextIntBetween( 1, 10 ) );

    // @public
    this.positionProperty = new Vector2Property( new Vector2( x, y ) );

    // @public
    this.ageProperty = new NumberProperty( 0 );

    // @public (read-only) whether this particle has been disposed, and should therefore no longer be used
    this.isDisposed = false;
  }

  /**
   * Call this method when an instance is ready to be freed, so that it becomes eligible for garbage collection.
   * @public
   */
  dispose() {
    this.positionProperty.dispose();
    this.ageProperty.dispose();
    this.isDisposed = true;
  }

  /**
   * Applies a force to the particle, which will result in a change of position.
   * @param {Vector2} force
   * @public
   */
  applyForce( force ) {
    assert && assert( !this.isDisposed, 'attempt to use disposed particle' );
    this.velocity.add( force );
    this.positionProperty.value = this.positionProperty.value.plus( this.velocity );
    this.ageProperty.value += DELTA_AGE;
  }

  /**
   * Determines whether the particle has exceeded its lifespan.
   * @returns {boolean}
   * @public
   */
  hasExceededLifespan() {
    return ( this.ageProperty.value >= Particle.MAX_AGE );
  }
}

// @public
Particle.MAX_AGE = 255;

exampleSim.register( 'Particle', Particle );
export default Particle;