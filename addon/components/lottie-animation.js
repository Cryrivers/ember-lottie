import Ember from 'ember';
import bodymovin from 'bodymovin';

export default Ember.Component.extend({
  classNames: ['lottie-animation'],
  attributeBindings: ['style'],
  classNameBindings: ['class'],
  style: Ember.computed(function() {
    return 'width: 800px; height: 500px; overflow: hidden; margin: 0 auto;';
  }),
  init() {
    this._super();
    this.animation = bodymovin.loadAnimation({});
    this.animation.renderer = 'svg';
  },
  didInsertElement() {
    this._super();
    this._options = {
      container: this.element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/lottie-logo.json'
    };
    this.animation.path = '/lottie-logo.json';
    // this.animation.play();
    // this.animation = bodymovin.loadAnimation(this._options);
    // this.animation.addEventListener('enterFrame', () => {
    //
    // });
  },
  willDestroyElement() {
    this.super();
    this.animation.destroy();
  }
});
