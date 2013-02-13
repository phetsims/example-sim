// Copyright 2002-2012, University of Colorado

/**
 * Control panel.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define(
  [
    'i18n!../../nls/example-sim-strings',
    'tpl!../../html/control-panel.html'
  ],
  function ( strings, controlPanelTemplate ) {
    "use strict";

    function ControlPanel() {
    }

    /*
     * Takes an HTML fragment that describes a control panel with DOM widgets,
     * internationalizes it, and wires up the DOM widgets.
     *
     * @param {ExampleSimModel} model
     * @param {ExampleSimStage} stage
     */
    ControlPanel.init = function ( model, stage ) {

      // Translate the HTML template.
      var controlPanelFragment = controlPanelTemplate(
        {
          showFramesPerSecond: strings.showFramesPerSecond,
          flipMagnet: strings.flipMagnet,
          resetAll: strings.resetAll
        } );

      // Add the HTML template to the DOM.
      $( "#control-panel-div" ).append( $( controlPanelFragment ) ).trigger( "create" );

      // Wire up DOM components.
      {
        // "Show Frames per Second" check box toggles visibility.
        $( "#showFramesPerSecondCheckBox" ).bind( 'change', function () {
          stage.frameRateVisibleProperty.set( !stage.frameRateVisibleProperty.get() );
        } );
        stage.frameRateVisibleProperty.addObserver( function( checked ) {
          $( "#showFramesPerSecondCheckBox" ).attr( "checked", checked );
        } );

        // "Flip Magnet" button rotates magnet by 90 degrees.
        $( "#flipMagnetButton" ).bind( 'click', function () {
          model.barMagnet.orientation.set( model.barMagnet.orientation.get() + Math.PI );
        } );

        // "Reset All" button returns sim to initial state.
        $( "#resetAllButton" ).bind( 'click', function () {
          model.reset();
          stage.reset();
        } );
      }
    }

    return ControlPanel;
  } );
