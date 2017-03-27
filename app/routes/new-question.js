import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    newQuestion(params) {
      var question = this.store.createRecord("question", params);
      question.save();
      this.transitionTo("index");
    }
  }
});
