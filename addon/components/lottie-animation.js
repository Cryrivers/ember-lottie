import Component from '@ember/component';
import { computed } from "@ember/object";
import { tryInvoke } from '@ember/utils';
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
  style: computed('weight', 'height', function() {
    let { width, height } = this.getProperties(['width', 'height']);
    return `width: ${_convertToCSSPixel(width)}; height: ${_convertToCSSPixel(height)}; overflow: hidden;`;
  }),
  loop: false,
  autoplay: false,
  didInsertElement() {
    this._super();
    let { loop, autoplay, path, animationData } = this.getProperties(['loop', 'autoplay', 'path', 'animationData']);
    this._options = {
      container: this.element,
      renderer: 'svg',
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
