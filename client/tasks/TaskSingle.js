Template.TaskSingle.helpers({
  task: ()=> {
    var id = FlowRouter.getParam('id');
    return Tasks.findOne({_id: id});
  },
  momentFormat: function(time) {
    if ((moment().local() - moment(time).add(5,'hour')) < 2400) {
        return moment(time).add(5,'hour').fromNow();
    } else {
        return moment(time).add(5,'hour').format("MM-DD-YYYY");
    }
},
});
Template.TaskSingle.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id');
    self.subscribe('singleTask', id);
  });
});
