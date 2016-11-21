import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.main.onCreated(function helloOnCreated() {
  let instance = this
  instance.json = new ReactiveVar(null)
});

Template.main.helpers({
  haveJson() {
    return Template.instance().json.get()
  },
  getJson() {
    return JSON.stringify(Template.instance().json.get())
  }
});

Template.main.events({
  'click button'(event, instance) {
    let options = {
      script_id: parseInt(event.currentTarget.getAttribute('data-id'))
    }
    Meteor.call('callPython', options, function(err, result) {
      if (err) {
        console.warn("Error : ", err)
      }
      instance.json.set(result)
    })
  },
});
