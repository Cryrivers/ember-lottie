(function() {
  function vendorModule() {
    'use strict';
    return { 'default': window.bodymovin };
  }
  define('bodymovin', [], vendorModule);
})();
