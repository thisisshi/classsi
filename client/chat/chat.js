Template.Chat.helpers({
  messages: () => {
    var id = FlowRouter.getParam('id');
    $('input[name="classID"]').val(id);
    return Messages.find({});
  },
  class: ()=>{
    var id = FlowRouter.getParam('id');
    return Classes.findOne({_id: id});
  }
});

Template.Chat.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('messages', id);
    self.subscribe('singleClass',id)
  });
});
