import React, { Component } from 'react'

import { styles } from './styles'

class JestUsage extends Component {
  render() {
    return (
      <div>
        <h1>Using Jest</h1>
        <span style={styles.highlight}>yarn test</span><br />
        <span style={styles.highlight}>yarn test -- --coverage</span>
      </div>
    )
  }
}

export default JestUsage
