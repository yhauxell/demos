/*
 * demogrunt
 * https://github.com/yhauxell/demos/grunt
 *
 * Copyright (c) 2015 Yausell
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.demogrunt = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.demogrunt = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.demogrunt.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.demogrunt.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].demogrunt = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
