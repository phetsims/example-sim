// Copyright 2021-2024, University of Colorado Boulder

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
import { combineOptions } from '../../../../phet-core/js/optionize.js';
import { Color } from '../../../../scenery/js/imports.js';
import ExampleSimColors from '../../common/ExampleSimColors.js';
import exampleSim from '../../exampleSim.js';

// constants
const DEFAULT_DIAMETER = 2000; // in nm
const DEFAULT_POSITION = new Vector2( 0, 0 ); // in nm

type SelfOptions = {
  diameter?: number; // in nm
  position?: Vector2; // in nm
  color?: Color | string;
};

export type ParticleOptions = SelfOptions;

export default class Particle {

  // the particle's diameter, in nm
  public readonly diameter: number;

  // the particle's position, in nm
  public readonly positionProperty: Vector2Property;

  public readonly color: Color | string;

  // the particle's velocity, in nm/sec
  private velocity: Vector2;

  public readonly opacityProperty: NumberProperty;

  // whether this particle has been disposed, and should therefore no longer be used
  public isDisposed: boolean;

  public constructor( providedOptions?: ParticleOptions ) {

    // Demonstrate a common pattern for specifying options and providing default values
    const options = combineOptions<ParticleOptions>( {

      // Default values for optional SelfOptions
      diameter: DEFAULT_DIAMETER,
      position: DEFAULT_POSITION,
      color: ExampleSimColors.particleColorProperty.value
    }, providedOptions );

    this.diameter = options.diameter!;
    this.positionProperty = new Vector2Property( options.position! );
    this.color = options.color!;
    this.velocity = new Vector2( dotRandom.nextIntBetween( -500, 500 ), dotRandom.nextIntBetween( -100, -1000 ) );
    this.opacityProperty = new NumberProperty( 1, {
      range: new Range( 0, 1 )
    } );
    this.isDisposed = false;
  }

  /**
   * Call this method when an instance is ready to be freed, so that it becomes eligible for garbage collection.
   */
  public dispose(): void {
    this.positionProperty.dispose();
    this.opacityProperty.dispose();
    this.isDisposed = true;
  }

  /**
   * Applies a force to the particle, which will result in a change of position.
   */
  public applyForce( force: Vector2 ): void {
    assert && assert( !this.isDisposed, 'attempt to use disposed particle' );
    this.velocity.add( force );
    this.positionProperty.value = this.positionProperty.value.plus( this.velocity );
  }
}

exampleSim.register( 'Particle', Particle );