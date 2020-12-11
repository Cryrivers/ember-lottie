import Controller from "@ember/controller";

export default Controller.extend({
  currentTime: 0,
  totalTime: 0,

  actions: {
    animationHandler(animation) {
      this.animation = animation;
      this.animation.addEventListener("enterFrame", (evt) => {
        this.set("totalTime", evt.totalTime.toFixed(3));
        this.set("currentTime", evt.currentTime.toFixed(3));
      });
    },
    play() {
      this.animation && this.animation.play();
    },
    pause() {
      this.animation && this.animation.pause();
    },
    rewind() {
      this.animation && this.animation.goToAndPlay(0, true);
    },
  },
});
