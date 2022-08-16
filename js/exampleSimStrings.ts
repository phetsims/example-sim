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
    'titleProperty': TReadOnlyProperty<string>;
  };
  'screen': {
    'magnets': string;
    'magnetsProperty': TReadOnlyProperty<string>;
    'particles': string;
    'particlesProperty': TReadOnlyProperty<string>;
  };
  'magnetControls': string;
  'magnetControlsProperty': TReadOnlyProperty<string>;
  'flipPolarity': string;
  'flipPolarityProperty': TReadOnlyProperty<string>;
};

const exampleSimStrings = getStringModule( 'EXAMPLE_SIM' ) as StringsType;

exampleSim.register( 'exampleSimStrings', exampleSimStrings );

export default exampleSimStrings;
