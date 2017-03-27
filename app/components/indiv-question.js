import Ember from 'ember';

export default Ember.Component.extend({
  isEditShowing: false,
  isAddAnswerShowing: false,
  actions: {
    delete(question) {
      this.sendAction("delete", question);
    },
    edit(question) {
      var params = {
        title: this.get("title"),
        body: this.get("body"),
        author: this.get("author")
      };
      this.sendAction("edit", question, params);
      this.set("isShowing", false);
    },
    showEditForm() {
      this.set("isEditShowing", true);
    },
    hideEditForm() {
      this.set("isEditShowing", false);
    },
    showAnswerForm() {
      this.set("isAddAnswerShowing", true);
    },
    hideAnswerForm() {
      this.set("isAddAnswerShowing", false);
    }
  }
});
