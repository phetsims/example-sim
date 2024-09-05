// Copyright 2021, University of Colorado Boulder

/**
 * Particle is the model of a simple particle.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import NumberProperty from '../../../../axon/js/NumberProperty.js';
import dotRandom from '../../../../dot/js/dotRandom.js';
import Range from '../../../../dot/js/Range.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import Vector2Property from '../../../../dot/js/Vector2Property.js';
import merge from '../../../../phet-core/js/merge.js';
import ExampleSimConstants from '../../common/ExampleSimConstants.js';
import exampleSim from '../../exampleSim.js';

// constants
const DEFAULT_POSITION = new Vector2( 0, 0 ); // in nm

class Particle {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {

    options = merge( {
      diameter: 2000, // {number} nm
      position: DEFAULT_POSITION, // {Vector2} nm
      color: ExampleSimConstants.PARTICLE_COLOR // {Color|string}
    }, options );

    // @public (read-only) the particle's diameter, in nm
    this.diameter = options.diameter;

    // @public the particle's position, in nm
    this.positionProperty = new Vector2Property( options.position );

    // @public (read-only)
    this.color = options.color;

    // @private the particle's velocity, in nm/sec
    this.velocity = new Vector2( dotRandom.nextIntBetween( -500, 500 ), dotRandom.nextIntBetween( -100, -1000 ) );

    // @public
    this.opacityProperty = new NumberProperty( 1, {
      range: new Range( 0, 1 )
    } );

    // @public (read-only) whether this particle has been disposed, and should therefore no longer be used
    this.isDisposed = false;
  }

  /**
   * Call this method when an instance is ready to be freed, so that it becomes eligible for garbage collection.
   * @public
   */
  dispose() {
    this.positionProperty.dispose();
    this.opacityProperty.dispose();
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
  }
}

exampleSim.register( 'Particle', Particle );
export default Particle;