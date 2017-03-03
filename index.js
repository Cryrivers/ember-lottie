/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-lottie',
  included: function() {
    this._super.included.apply(this, arguments);
    this.import('vendor/bodymovin/build/player/bodymovin_light.js');
    this.import('vendor/shims/bodymovin.js');
  }
};
