'use strict';

module.exports = {
  name: require('./package').name,
  included: function() {
    this._super.included.apply(this, arguments);
    this.import('vendor/bodymovin/build/player/bodymovin_light.js');
    this.import('vendor/shims/bodymovin.js');
  }

};
