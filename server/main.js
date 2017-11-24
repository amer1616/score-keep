import { Meteor } from 'meteor/meteor';
import {Players} from './../imports/api/players'

Meteor.startup(() => {
  // code to run on server at startup
  console.log('Log from /server/main.js');
  //setting players mongo collection on server. not prefered method during development
  // Players.insert({
  //   name: 'Jon',
  //   score: 29
  // });
  // console.log(Players.find().fetch())
  
});


