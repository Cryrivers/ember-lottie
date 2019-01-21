ember-lottie
==============================================================================

Render After Effects animations natively with [Ember.js](https://www.emberjs.com) and [Lottie Web](http://airbnb.io/lottie/).



Compatibility
------------------------------------------------------------------------------

* Ember.js v3.7 or above
* Ember CLI v3.7 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-lottie
```


Usage
------------------------------------------------------------------------------

Simple example

`Note: Height and width are optional`


```
{{!-- app/templates/application.hbs --}}
{{lottie-animation width=640 height=480 path="lottie-logo.json" didCreate=(action "animationHandler")}}
<button {{action "play"}}>Play</button>
<button {{action "pause"}}>Pause</button>
```


```
// app/controllers/application.js

import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    animationHandler(animation) {
      this.animation = animation;
    },
    play() {
      this.animation && this.animation.play();
    },
    pause() {
      this.animation && this.animation.pause();
    }
  }
});
```


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
