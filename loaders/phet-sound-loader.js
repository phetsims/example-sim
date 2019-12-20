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
  const newString = 'export default {name:"hello",base64:' + source.trim() + '};\n';

  this.callback( null, newString, map );
};