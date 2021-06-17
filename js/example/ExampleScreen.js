// Copyright 2013-2020, University of Colorado Boulder

/**
 * ExampleScreen is the top-level component for the 'Example' screen.  It creates the model and view.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../../axon/js/Property.js';
import Screen from '../../../joist/js/Screen.js';
import exampleSim from '../exampleSim.js';
import ExampleModel from './model/ExampleModel.js';
import ExampleScreenView from './view/ExampleScreenView.js';

class ExampleScreen extends Screen {

  constructor() {
    super(
      () => new ExampleModel(),
      model => new ExampleScreenView( model ), {
        backgroundColorProperty: new Property( 'rgb( 50, 50, 50 )' )
        //TODO if you include homeScreenIcon or navigationBarIcon, use JOIST/ScreenIcon
      } );
  }
}

exampleSim.register( 'ExampleScreen', ExampleScreen );
export default ExampleScreen;