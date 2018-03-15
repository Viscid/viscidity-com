import * as React from 'react';
import './App.css';
import PaneSelector from './components/paneSelector/';
import Pane from './components/pane/';

interface AppState {
  activePane: number;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      activePane: 0
    };
  }

  setActivePane(n: number) {
    this.setState({
      activePane: n
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="headerFullname"> MARK GILLIS </h1>
          <h2 className="headerSubheading"> Full-Stack Web Developer </h2>
        </header>
        <section className="controls">
          <PaneSelector
            items={['About', 'Capabilities', 'Projects', 'Contact']}
            color="#d18042"
            width={400}
            onSelect={(n) => this.setActivePane(n)}
          />
        </section>
        <section className="panesContainer">
          <Pane n={this.state.activePane} />
        </section>
      </div>
    );
  }
}

export default App;