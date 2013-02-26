// Copyright 2002-2013, University of Colorado

/**
 * Encapsulation of the imagesloaded jquery plugin. Assumes that your <img> tags are
 * enclosed in <body>, and the images are stored in the images/ directory at the
 * top-level of the repository.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define(
  [
    'imagesloaded'
  ],
  function ( imagesloaded ) {

    /**
     * @param callback called after the images have been loaded, has one {ImageLoader} arg
     * @constructor
     */
    function ImageLoader( callback ) {

      var imageLoader = this;

      $( 'body' ).imagesLoaded( function ( $images, $proper, $broken ) {
        imageLoader.images = $images;
        imageLoader.proper = $proper;
        imageLoader.broken = $broken;
        callback( imageLoader );
      } );

      /**
       * Gets an image.
       * @param {String} basename
       * @return HTMLImageElement
       */
      imageLoader.getImage = function( basename ) {
        var selector = 'img[src^="images/' + basename + '"]';
        return imageLoader.images.parent().find( selector )[0];
      };
    }

    return ImageLoader;
  } );