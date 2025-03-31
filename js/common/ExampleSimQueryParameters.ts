// Copyright 2024-2025, University of Colorado Boulder

/**
 * Defines query parameters that are specific to this simulation.
 * Run with ?log to print query parameters and their values to the browser console at startup.
 *
 * @author Franz Amador
 */

import logGlobal from '../../../phet-core/js/logGlobal.js';
import { QueryStringMachine } from '../../../query-string-machine/js/QueryStringMachineModule.js';
import exampleSim from '../exampleSim.js';

const ExampleSimQueryParameters = QueryStringMachine.getAll( {
  // None needed for example-sim?
} );

exampleSim.register( 'ExampleSimQueryParameters', ExampleSimQueryParameters );

// Log query parameters
logGlobal( 'phet.chipper.queryParameters' );
logGlobal( 'phet.preloads.phetio.queryParameters' );
logGlobal( 'phet.exampleSim.ExampleSimQueryParameters' );

export default ExampleSimQueryParameters;