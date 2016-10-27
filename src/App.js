import React, { Component } from 'react'

import SnapshotFlow from './components/snapshot_flow'
import JestUsage from './components/jest_usage'
import reactLogo from './images/react-logo.svg'
import { styles } from './styles'

class App extends Component {
  render() {
    return (
      <div>
        <div style={styles.header}>
          <img src={reactLogo} style={styles.logo} alt="react logo" />
          <h2>Test React components with Jest</h2>
        </div>
        <div style={styles.container}>
          <div style={styles.item}>
            <SnapshotFlow />
          </div>
          <div style={styles.item}>
            <JestUsage />
          </div>
        </div>
      </div>
    )
  }
}

export default App
