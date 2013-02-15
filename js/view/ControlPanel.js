// Copyright 2002-2012, University of Colorado

/**
 * Control panel.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define(
  [
    'tpl!../../html/control-panel.html'
  ],
  function ( controlPanelTemplate ) {
    "use strict";

    function ControlPanel() {
    }

    /*
     * Takes an HTML fragment that describes a control panel with DOM widgets,
     * internationalizes it, and wires up the DOM widgets.
     *
     * @param strings internationalized strings
     * @param {ExampleSimModel} model
     * @param {ExampleSimView} view
     */
    ControlPanel.init = function ( strings, model, view ) {

      // Translate the HTML template.
      var controlPanelFragment = controlPanelTemplate(
        {
          showPerformanceMonitor: strings.showPerformanceMonitor,
          flipPolarity: strings.flipPolarity,
          resetAll: strings.resetAll
        } );

      // Add the HTML template to the DOM.
      $( "#control-panel-div" ).append( $( controlPanelFragment ) ).trigger( "create" );

      // Wire up DOM components.
      {
        // "Show Frame Rate" check box toggles visibility.
        var $performanceMonitorCheckBox = $( "#showPerformanceMonitorCheckBox" );
        $performanceMonitorCheckBox.bind( 'change', function () {
          view.performanceMonitorVisible.set( !view.performanceMonitorVisible.get() );
        } );
        view.performanceMonitorVisible.addObserver( function ( checked ) {
          $performanceMonitorCheckBox.attr( "checked", checked );
        } );

        // "Flip Polarity" button rotates magnet by 90 degrees.
        $( "#flipPolarityButton" ).bind( 'click', function () {
          model.barMagnet.orientation.set( model.barMagnet.orientation.get() + Math.PI );
        } );

        // "Reset All" button returns sim to initial state.
        $( "#resetAllButton" ).bind( 'click', function () {
          model.reset();
          view.reset();
        } );
      }
    };

    return ControlPanel;
  } );
