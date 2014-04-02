//  Copyright 2002-2014, University of Colorado Boulder

/**
 * Control panel.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // imports
  var Color = require( 'SCENERY/util/Color' );
  var Font = require( 'SCENERY/util/Font' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Panel = require( 'SUN/Panel' );
  var ResetAllButton = require( 'SCENERY_PHET/ResetAllButton' );
  var TextPushButton = require( 'SUN/TextPushButton' );
  var VBox = require( 'SCENERY/nodes/VBox' );
  var BarMagnet = require( 'EXAMPLE_SIM/example/model/BarMagnet' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var Vector2 = require( 'DOT/Vector2' );
  var BarMagnetNode = require( 'EXAMPLE_SIM/example/view/BarMagnetNode' );

  // strings
  var flipPolarityString = require( 'string!EXAMPLE_SIM/flipPolarity' );
  var moveMagnetString = require( 'string!EXAMPLE_SIM/moveMagnet' );
  var addMagnetString = require( 'string!EXAMPLE_SIM/addMagnet' );

  /**
   * @param {BarMagnetModel} model
   * @param {*} options
   * @constructor
   */
  function ControlPanel( model, options, mvt, thisView ) {

    // Demonstrate a common pattern for specifying options and providing default values.
    options = _.extend( {
        xMargin: 10,
        yMargin: 10,
        stroke: 'orange',
        lineWidth: 3 },
      options );

    // 'Flip Polarity' button
    var flipButton = new TextPushButton( flipPolarityString, {
      listener: function() { model.barMagnet.orientation = model.barMagnet.orientation + Math.PI; },
      font: new Font( '20px Arial' ),
      rectangleXMargin: 10,
      rectangleFillUp: new Color( 255, 255, 0 )
    } );

    // 'Move Bar Magnet' button
    // randomly moves the magnet to anywhere in the screen
    var moveButton = new TextPushButton( moveMagnetString, {
      listener: function() { model.barMagnet.location = new Vector2( (Math.random() - .5) * screen.width, (Math.random() - .5) * screen.height ); },
      font: new Font( '20px Arial' ),
      rectangleXMargin: 10,
      rectangleFillUp: new Color( 255, 255, 0 )
    } );

    // Number of new magnets added
    var numMags = 0;

    // 'Add Magnet' button
    // adds a new magnet to the screen
    var addButton = new TextPushButton( addMagnetString, {
      listener: function() {
        // these two lines of code don't work
        model.barMagArray[numMags] = new BarMagnet( new Vector2( 10, 10 ), new Dimension2( 375, 75 ), 0 );
        thisView.addChild( new BarMagnetNode( model.barMagArray[numMags], mvt ) );

        // this if loop works; it moves a created magnet onto the screen if offscreen, to a random location
//        if (model.barMagnet2.location.x == screen.width && model.barMagnet2.location.y == screen.height) {
//          model.barMagnet2.location = new Vector2( (Math.random()-.5) * screen.width, (Math.random()-.5) * screen.height );
//        }
        numMags += 1;
      },
      font: new Font( '20px Arial' ),
      rectangleXMargin: 10,
      rectangleFillUp: new Color( 255, 255, 0 )
    } );

    // 'Reset All' button, resets the sim to its initial state
    var resetAllButton = new ResetAllButton( function() {
      model.reset();
    } );

    // The contents of the control panel
    var content = new VBox( {align: 'center', spacing: 10, children: [flipButton, moveButton, addButton, resetAllButton] } );

    Panel.call( this, content, options );
  }

  return inherit( Panel, ControlPanel );
} );