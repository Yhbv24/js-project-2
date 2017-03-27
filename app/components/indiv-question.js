import Ember from 'ember';

export default Ember.Component.extend({
  isShowing: false,
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
      this.set("isShowing", true);
    },
    hideEditForm() {
      this.set("isShowing", false);
    }
  }
});
