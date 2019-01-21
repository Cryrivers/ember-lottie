'use strict';

module.exports = {
  name: require('./package').name,
  autoImport: {
    alias: {
      'lottie-web': 'build/player/lottie_light.js'
    }
},
  included: function() {
    this._super.included.apply(this, arguments);
  }

};
