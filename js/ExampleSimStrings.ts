// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import LinkableProperty from '../../axon/js/LinkableProperty.js';
import exampleSim from './exampleSim.js';

type StringsType = {
  'example-sim': {
    'titleStringProperty': LinkableProperty<string>;
  };
  'screen': {
    'magnetsStringProperty': LinkableProperty<string>;
    'particlesStringProperty': LinkableProperty<string>;
  };
  'magnetControlsStringProperty': LinkableProperty<string>;
  'flipPolarityStringProperty': LinkableProperty<string>;
};

const ExampleSimStrings = getStringModule( 'EXAMPLE_SIM' ) as StringsType;

exampleSim.register( 'ExampleSimStrings', ExampleSimStrings );

export default ExampleSimStrings;
