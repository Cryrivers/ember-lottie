import Component from "@ember/component";
import {
  tagName,
  classNames,
  attributeBindings,
} from "@ember-decorators/component";
import { tryInvoke } from "@ember/utils";
import { htmlSafe } from "@ember/string";
import { tracked } from "@glimmer/tracking";
import lottie from "lottie-web";

function _convertToCSSPixel(number) {
  if (number) {
    return parseInt(number) + "px";
  } else {
    return "100%";
  }
}

@tagName("div")
@classNames("lottie-animation")
@attributeBindings("style")
export default class LottieAnimation extends Component {
  @tracked
  width;

  @tracked
  height;

  @tracked
  loop = false;

  @tracked
  autoplay = false;

  @tracked
  renderer = "svg";

  get style() {
    let { width, height } = this;
    return htmlSafe(
      `width: ${_convertToCSSPixel(width)};
      height: ${_convertToCSSPixel(height)};
      overflow: hidden;`
    );
  }

  didInsertElement() {
    super.didInsertElement();
    let { loop, autoplay, path, animationData, renderer } = this;
    this._options = {
      container: this.element,
      renderer,
      animationData,
      loop,
      autoplay,
      path,
    };
    this.animation = lottie.loadAnimation(this._options);
    tryInvoke(this, "didCreate", [this.animation]);
  }

  willDestroyElement() {
    super.willDestroyElement();
    this.animation.destroy();
  }
}
