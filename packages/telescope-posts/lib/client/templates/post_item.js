var post = {};

Template.post_item.created = function () {
  post = this.data;
};

Template.post_item.helpers({
  moduleContext: function () { // not used for now
    var module = this;
    module.templateClass = Telescope.utils.camelToDash(this.template) + ' ' + this.position + ' cell';
    module.post = post;
    return module;
  },
  postClass: function () {
    var post = this;
    var postClass = "author-"+post.author;
    postClass = Telescope.callbacks.run("postClass", postClass);
    return postClass;
  },
  public_id: function() {
    var post = this;
    return post.userId+"_"+post.img;
  }
});
