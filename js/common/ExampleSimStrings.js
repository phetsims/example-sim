// Copyright 2002-2013, University of Colorado Boulder

/**
 * Load the strings only once and from a single location, because loading them from different relative paths
 * causes them to fall back to the root language sometimes for unknown reasons.
 * See #17 at https://github.com/phetsims/resistance-in-a-wire/issues/17
 *
 * @author Sam Reid (PhET Interactive Simulations)
 *
 */
define( function( require ) {
  'use strict';
  return require( 'i18n!EXAMPLE_SIM/../nls/example-sim-strings' );
} );