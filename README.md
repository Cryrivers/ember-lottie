# ember-lottie

Render After Effects animations natively with [Ember.js](https://www.emberjs.com) and [Lottie Web](http://airbnb.io/lottie/).

## Compatibility

- Ember.js v3.16 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Installation

```
ember install ember-lottie
```

## Usage

Simple example. You can use the methods and subscribe to the events as described in the Lottie-web documentation: https://airbnb.io/lottie/#/web?id=usage

`Note: Width, height, autoplay, loop are all optional`.

```hbs
{{!-- app/templates/application.hbs --}}
<div class="demo">
  <LottieAnimation
    @class="demo__animation"
    @path="bodymovin.json"
    @width={{660}}
    @height={{100}}
    @autoplay={{true}}
    @loop={{true}}
    @didCreate={{this.animationHandler}}
  />

  <div class="demo__controls">
    <button type="button" onclick={{fn this.rewind}}>
      Rewind
    </button>
    <button type="button" onclick={{fn this.play}}>
      Play
    </button>
    <button type="button" onclick={{fn this.pause}}>
      Pause
    </button>
  </div>

  <div class="demo__progress">
    Progress: {{this.currentTime}} of {{this.totalTime}}
  </div>
</div>
```

```js
// app/controllers/application.js
import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ApplicationController extends Controller {
  @tracked
  currentTime = 0;

  @tracked
  totalTime = 0;

  @action animationHandler(animation) {
    this.animation = animation;
    this.animation.addEventListener("enterFrame", (evt) => {
      // Note: .toFixed rounds the long floats to N decimals, you are not required to use this!
      this.totalTime = evt.totalTime.toFixed(3);
      this.currentTime = evt.currentTime.toFixed(3);
    });
  }

  @action
  play() {
    this.animation && this.animation.play();
  }

  @action
  pause() {
    this.animation && this.animation.pause();
  }

  @action
  rewind() {
    this.animation && this.animation.goToAndPlay(0, true);
  }
}
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
