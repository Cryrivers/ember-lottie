import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ApplicationController extends Controller {
  @tracked
  currentTime = 0;

  @tracked
  totalTime = 0;

  @action animationHandler(animation) {
    console.log("animatino handler!");
    this.animation = animation;
    this.animation.addEventListener("enterFrame", (evt) => {
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
