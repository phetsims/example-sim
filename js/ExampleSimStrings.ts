// Copyright 2020-2024, University of Colorado Boulder

/* eslint-disable */
/* @formatter:off */

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */

import getStringModule from '../../chipper/js/browser/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/browser/LocalizedStringProperty.js';
import exampleSim from './exampleSim.js';

type StringsType = {
  'example-sim': {
    'titleStringProperty': LocalizedStringProperty;
  };
  'screen': {
    'magnetsStringProperty': LocalizedStringProperty;
    'particlesStringProperty': LocalizedStringProperty;
  };
  'magnetControlsStringProperty': LocalizedStringProperty;
  'flipPolarityStringProperty': LocalizedStringProperty;
};

const ExampleSimStrings = getStringModule( 'EXAMPLE_SIM' ) as StringsType;

exampleSim.register( 'ExampleSimStrings', ExampleSimStrings );

export default ExampleSimStrings;
