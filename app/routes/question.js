import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      question: this.store.findRecord("question", params.question_id, {include: "answers"})
    });
  },
  actions: {
    delete(question) {
      question.destroyRecord();
      this.transitionTo("index");
    },
    edit(question, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo("index");
    },
    addAnswer(params) {
      var newAnswer = this.store.createRecord("answer", params);
      var question = params.question;
      question.get("answer").addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo("question", question);
    }
  }
});
