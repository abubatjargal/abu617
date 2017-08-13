import { Meteor } from 'meteor/meteor';

Tracks = new Mongo.Collection('tracks');


Meteor.startup(() => {
  // code to run on server at startup
});
