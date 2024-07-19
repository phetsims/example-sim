// Copyright 2021-2024, University of Colorado Boulder

/**
 * MagnetsScreenView is the top-level view component for the 'Magnets' screen. All of the components that make up
 * the screen's view are added here.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import Vector2 from '../../../../dot/js/Vector2.js';
import ScreenView, { ScreenViewOptions } from '../../../../joist/js/ScreenView.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import ExampleSimConstants from '../../common/ExampleSimConstants.js';
import exampleSim from '../../exampleSim.js';
import BarMagnetNode from './BarMagnetNode.js';
import MagnetsControlPanel from './MagnetsControlPanel.js';
import optionize from '../../../../phet-core/js/optionize.js';

type SelfOptions = {
  //TODO add options that are specific to MagnetsScreenView here
};

type MagnetsScreenViewOptions = SelfOptions & ScreenViewOptions;

export default class MagnetsScreenView extends ScreenView {

  /**
   * @param {MagnetsModel} model - the top-level model for this screen
   */
  public constructor( model: MagnetsModel, providedOptions: MagnetsScreenViewOptions ) {

    const options = optionize<MagnetsScreenViewOptions, SelfOptions, ScreenViewOptions>()( {

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenViewOptions here
    }, providedOptions );

    super( options );

    // transform between model coordinates and view coordinates
    const center = new Vector2( this.layoutBounds.width / 2, this.layoutBounds.height / 2 );
    const modelViewTransform = ModelViewTransform2.createOffsetScaleMapping( center, 1 );

    // Add a magnet. The model determines its position.
    this.addChild( new BarMagnetNode( model.barMagnet, modelViewTransform ) );

    // Add the control panel for magnets, positioned at the top-right of the screen.
    this.addChild( new MagnetsControlPanel( model, {
      right: this.layoutBounds.right - ExampleSimConstants.SCREEN_VIEW_X_MARGIN,
      top: this.layoutBounds.top + ExampleSimConstants.SCREEN_VIEW_Y_MARGIN
    } ) );

    // Add the 'Reset All' button. This resets the simulation to its initial state. By PhET convention, this
    // button is positioned at the lower-right of the screen.
    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - ExampleSimConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - ExampleSimConstants.SCREEN_VIEW_Y_MARGIN
      // tandem: options.tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  /**
   * Resets the view.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the view.
   * @param dt - time step, in seconds
   */
  public override step( dt: number ): void {
    //TODO
  }
}

exampleSim.register( 'MagnetsScreenView', MagnetsScreenView );