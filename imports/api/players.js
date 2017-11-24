import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';

// defining mongo collection
export const Players = new Mongo.Collection('players');

// calculate positions of players

export const ClaculatedPlayerPositions = (players) => {
  let rank = 1;
  
  // iterating players to get their positions 
  return players.map((player, index) => {
    // increment rank by one, if player position not at 0 and previous player score is larger than the current player
    if (index !== 0 && players[index-1].score > player.score){
      rank++;
    } 
    return {
      ...player,
      rank,
      position: numeral(rank).format('0o')
    }
  })
}