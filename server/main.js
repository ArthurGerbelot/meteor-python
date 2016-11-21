import { Meteor } from 'meteor/meteor';

let exec = Npm.require('child_process').exec;
let Fiber = Npm.require('fibers');
let Future
 = Npm.require('fibers/future');

Meteor.methods({
  callPython: function(options) {
    let future = new Future()

    exec('python ' + process.env.PWD + '/python/script' + options.script_id + '.py', function (error, stdout, stderr) {
      if (error) {
        future.throw(error)
      }
      return future.return(JSON.parse(stdout))
    });

    // Wait and return
    try {
      let wait = future.wait()
      return future.wait();
    }
    catch(err) {
      // Replace this with whatever you want sent to the client.
      throw new Meteor.Error(401, err.reason || err.message || err);
    }
  },

});