// Copyright 2020-2021, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import exampleSim from './exampleSim.js';

type StringsType = {
  'example-sim': {
    'title': string;
  };
  'screen': {
    'magnets': string;
    'particles': string;
  };
  'magnetControls': string;
  'flipPolarity': string;
};

const exampleSimStrings = getStringModule( 'EXAMPLE_SIM' ) as StringsType;

exampleSim.register( 'exampleSimStrings', exampleSimStrings );

export default exampleSimStrings;
