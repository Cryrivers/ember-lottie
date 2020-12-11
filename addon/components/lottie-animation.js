import classic from 'ember-classic-decorator';
import { classNames, attributeBindings, classNameBindings } from '@ember-decorators/component';
import { computed } from '@ember/object';
import Component from '@ember/component';
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
@classic
@classNames('lottie-animation')
@attributeBindings('style')
@classNameBindings('class')
export default class LottieAnimation extends Component {
  @computed('width', 'height')
  get style() {
    let { width, height } = this;
    return htmlSafe(`width: ${_convertToCSSPixel(width)}; height: ${_convertToCSSPixel(height)}; overflow: hidden;`);
  }

  loop = false;
  autoplay = false;
  renderer = 'svg';

  didInsertElement() {
    super.didInsertElement();
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
  }

  willDestroyElement() {
    super.willDestroyElement();
    this.animation.destroy();
  }
}
