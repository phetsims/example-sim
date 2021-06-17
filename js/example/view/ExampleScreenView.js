// Copyright 2013-2020, University of Colorado Boulder

/**
 * ExampleScreenView is the top-level view component for the 'Example' screen. All of the components that make up
 * the screen's view are added here.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import Bounds2 from '../../../../dot/js/Bounds2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import ScreenView from '../../../../joist/js/ScreenView.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import exampleSim from '../../exampleSim.js';
import BarMagnetNode from './BarMagnetNode.js';
import ControlPanel from './ControlPanel.js';

class ExampleScreenView extends ScreenView {

  /**
   * @param {ExampleModel} model - the top-level model for this screen
   */
  constructor( model ) {

    super( {
      layoutBounds: new Bounds2( 0, 0, 768, 504 )
    } );

    // model-view transform
    const center = new Vector2( this.layoutBounds.width / 2, this.layoutBounds.height / 2 );
    const modelViewTransform = ModelViewTransform2.createOffsetScaleMapping( center, 1 );

    this.addChild( new BarMagnetNode( model.barMagnet, modelViewTransform ) );
    this.addChild( new ControlPanel( model, {
      x: 50,
      y: 50
    } ) );
  }
}

exampleSim.register( 'ExampleScreenView', ExampleScreenView );
export default ExampleScreenView;