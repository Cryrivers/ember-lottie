import Ember from 'ember';

export default Ember.Controller.extend({
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
