// Copyright 2002-2013, University of Colorado Boulder

/**
 * View for the bar magnet object.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var Image = require( 'SCENERY/nodes/Image' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var SimpleDragHandler = require( 'SCENERY/input/SimpleDragHandler' );

  // images
  var barMagnetImage = require( 'image!EXAMPLE_SIM/barMagnet.png' );

  /**
   * @param {BarMagnet} barMagnet
   * @param {ModelViewTransform2} mvt
   */
  function BarMagnetNode( barMagnet, mvt ) {

    var thisNode = this;

    // supertype constructor
    Node.call( thisNode, {

      //Show a cursor hand over the bar magnet
      cursor: 'pointer'
    } );

    // add the centered bar magnet image
    thisNode.addChild( new Image( barMagnetImage, { centerX: 0, centerY: 0 } ) );

    // scale it so it matches the model width and height
    thisNode.scale( mvt.modelToViewDeltaX( barMagnet.size.width ) / this.width,
        mvt.modelToViewDeltaY( barMagnet.size.height ) / this.height );

    //When dragging, move the bar magnet
    thisNode.addInputListener( new SimpleDragHandler(
      {
        //When dragging across it in a mobile device, pick it up
        allowTouchSnag: true,

        //Translate on drag events
        translate: function( args ) {
          barMagnet.location = mvt.viewToModelPosition( args.position );
        }
      } ) );

    // Register for synchronization with model.
    barMagnet.locationProperty.link( function( location ) {
      thisNode.translation = mvt.modelToViewPosition( location );
    } );

    // Register for synchronization with model
    barMagnet.orientationProperty.link( function( orientation ) {
      thisNode.rotation = orientation;
    } );
  }

  return inherit( Node, BarMagnetNode );
} );
