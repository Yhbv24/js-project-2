import Ember from 'ember';

export default Ember.Component.extend({
  isShowing: false,
  actions: {
    delete(question) {
      question.destroyRecord();
      this.transitionTo("index");
    },
    edit(question, params) {
      this.sendAction("edit", question, params);
    },
    showEditForm() {
      this.set("isShowing", true);
    },
    hideEditForm() {
      this.set("isShowing", false);
    }
  }
});
