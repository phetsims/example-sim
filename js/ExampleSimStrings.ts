// Copyright 2020-2024, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/LocalizedStringProperty.js';
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
