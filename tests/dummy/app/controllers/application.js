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
