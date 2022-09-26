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
    'title': string;
    'titleStringProperty': LinkableProperty<string>;
  };
  'screen': {
    'magnets': string;
    'magnetsStringProperty': LinkableProperty<string>;
    'particles': string;
    'particlesStringProperty': LinkableProperty<string>;
  };
  'magnetControls': string;
  'magnetControlsStringProperty': LinkableProperty<string>;
  'flipPolarity': string;
  'flipPolarityStringProperty': LinkableProperty<string>;
};

const ExampleSimStrings = getStringModule( 'EXAMPLE_SIM' ) as StringsType;

exampleSim.register( 'ExampleSimStrings', ExampleSimStrings );

export default ExampleSimStrings;
