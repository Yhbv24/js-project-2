import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    isShowing: false,
    showForm() {
      this.set("isShowing", true);
    },
    hideForm() {
      this.set("isShowing", false);
    },
    newQuestion() {
    }
  }
});
