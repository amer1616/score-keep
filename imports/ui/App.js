import React from 'react'
import TitleBar from './TitleBar'
import AddPlayer from './AddPlayer'
import PlayerList from './PlayerList'
import PropTypes from 'prop-types'

// Main App rendering all components
export default class App extends React.Component{

  render(){
    return (
      <div>
        <TitleBar title={this.props.title} subtitle="Created By Amer" />
        <div className="wrapper">
        <PlayerList players={this.props.players} />
        <AddPlayer>
          <h3>Test</h3>
        </AddPlayer >
        </div>
       

      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
}