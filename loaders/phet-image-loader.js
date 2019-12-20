// Copyright 2013-2019, University of Colorado Boulder

/**
 * Converts a resource (like an image or sound file) to base64.
 */

/* eslint-env browser, node */
'use strict';

module.exports = function( source, map ) {

  const replaceAll = function( target, search, replacement ) {
    return target.split( search ).join( replacement );
  };

  // strip out export default so we just get the base 64 string
  source = replaceAll( source, `export default`, '' );

  const newString = 'const x = function(){ ' +
                    'var img = new Image();\n' +
                    'window.phetImages = window.phetImages || []\n' +
                    'window.phetImages.push(img);\n' +
                    'img.src=' + source + ';\n' +
                    'return img;};\n' +
                    'const y = x();\n' +
                    'export default y;';

  // console.log( newString );

  this.callback( null, newString, map );
};