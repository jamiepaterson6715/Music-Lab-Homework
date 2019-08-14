import React from 'react';
import MusicList from '../components/MusicList'

class MusicContainer extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        musicChart: []
      };
    }

  componentDidMount() {
      console.log("im the componentDidMount", this.state);
      const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

      fetch(url)
        .then(res => res.json())
        .then(musicChart => this.setState({ musicChart: musicChart.feed.entry }))
        .catch(err => console.error);
    }

    render() {
      return(
        <div>
          <h1>hello im a container</h1>
          <MusicList chart={this.state.musicChart}/>
        </div>
      )
    }
}

export default MusicContainer;
