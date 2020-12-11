import Component from '@ember/component';
import { computed } from "@ember/object";
import { tryInvoke } from '@ember/utils';
import { htmlSafe } from '@ember/string';
import lottie from 'lottie-web';

function _convertToCSSPixel(number) {
  if (number) {
    return parseInt(number) + 'px';
  } else {
    return '100%';
  }
}
export default Component.extend({
  classNames: ['lottie-animation'],
  attributeBindings: ['style'],
  classNameBindings: ['class'],
  style: computed('width', 'height', function() {
    let { width, height } = this;
    return htmlSafe(`width: ${_convertToCSSPixel(width)}; height: ${_convertToCSSPixel(height)}; overflow: hidden;`);
  }),
  loop: false,
  autoplay: false,
  renderer: 'svg',
  didInsertElement() {
    this._super();
    let { loop, autoplay, path, animationData, renderer } = this;
    this._options = {
      container: this.element,
      renderer,
      animationData,
      loop,
      autoplay,
      path
    };
    this.animation = lottie.loadAnimation(this._options);
    tryInvoke(this, 'didCreate', [this.animation]);
  },
  willDestroyElement() {
    this._super();
    this.animation.destroy();
  }
});
