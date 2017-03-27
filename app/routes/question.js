import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord("question", params.question_id);
  },
  actions: {
    delete(question) {
      question.destroyRecord();
      this.transitionTo("index");
    },
    edit(question, params) {
      question.save();
      this.transitionTo("index");
    }
  }
});
