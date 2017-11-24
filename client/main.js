import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { Players,  ClaculatedPlayerPositions } from './../imports/api/players'

import App from './../imports/ui/App'


Meteor.startup(() => {
  // using Tracker to track changes in database asynchorounsly
  Tracker.autorun(() => {
   // fetching Players collection from minimogo, sorting score in decending order
    let players = Players.find({}, {sort: {score: -1}}).fetch();
    let positionedPlayers = ClaculatedPlayerPositions(players);
    let title = 'Score Keep';
    

    ReactDOM.render(<App title= {title} players= {positionedPlayers}/>, document.getElementById('app'))
  })
})