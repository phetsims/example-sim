// Copyright 2002-2012, University of Colorado

/**
 * Control panel.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( [
          'i18n!../../nls/example-sim-strings',
          'tpl!../../html/control-panel.html'
        ],
        function ( strings, controlPanelTemplate ) {
          "use strict"

          function ControlPanel() {
          }

          ControlPanel.init = function () {

            // DOM modification ------------------------------------------------------------

            // Add the control panel to the DOM
            var controlPanelFragment = controlPanelTemplate(
                {
                  showFramesPerSecond:strings.showFramesPerSecond,
                  flipMagnet:strings.flipMagnet,
                  resetAll:strings.resetAll
                } );
            $( "#optionsPanelDiv" ).append( $( controlPanelFragment ) ).trigger( "create" );

            /*
             * Workaround for jQuery.mobile bug,
             * see http://stackoverflow.com/questions/8088837/jquery-mobile-triggercreate-command-not-working
             */
            $( ".ui-page" ).trigger( 'pagecreate' );

            // Make the Options panel the same height as the window
            $( "#optionsPanel" ).on(
                {
                  popupbeforeposition:function () {
                    var h = $( window ).height();
                    $( "#optionsPanel" ).css( "height", h );
                  }
                } );

            // Wire up DOM components ------------------------------------------------------

            // TBD
          }

          return ControlPanel;
        } );
