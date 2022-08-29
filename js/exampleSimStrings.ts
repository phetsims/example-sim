// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import exampleSim from './exampleSim.js';

type StringsType = {
  'example-sim': {
    'title': string;
    'titleStringProperty': TReadOnlyProperty<string>;
  };
  'screen': {
    'magnets': string;
    'magnetsStringProperty': TReadOnlyProperty<string>;
    'particles': string;
    'particlesStringProperty': TReadOnlyProperty<string>;
  };
  'magnetControls': string;
  'magnetControlsStringProperty': TReadOnlyProperty<string>;
  'flipPolarity': string;
  'flipPolarityStringProperty': TReadOnlyProperty<string>;
};

const exampleSimStrings = getStringModule( 'EXAMPLE_SIM' ) as StringsType;

exampleSim.register( 'exampleSimStrings', exampleSimStrings );

export default exampleSimStrings;
