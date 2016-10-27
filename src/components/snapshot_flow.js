import React, { Component } from 'react'

import { styles } from './styles'

class SnapshotFlow extends Component {
  render() {
    return (
      <div>
        <h1>Snapshot Workflow</h1>
        <h4>To create a component test</h4>
        <ol>
          <li>
            Add a test file <span style={styles.highlight}>[component_name].test.js</span> to
            a <span style={styles.highlight}>__tests__</span> directory close to the component code
          </li>
          <li>
            Use <span style={styles.highlight}>toMatchSnapshot()</span> to assert the
            rendered component matches the snapshot
          </li>
          <li>
            Running the test creates a snapshot file of the rendered component in
            the <span style={styles.highlight}>__tests__/__snapshots__</span> directory
          </li>
          <li>
            When the test passes <span style={styles.highlight}>git commit</span> the
            snapshot and component
          </li>
        </ol>

        <h4>Updating anything in a component breaks the snapshot</h4>
        <ol>
          <li>View the snapshot diff in the watcher</li>
          <li>
            To accept the changes: update the snapshot file (type
            <span style={styles.highlight}>u</span> in the watcher)
            and commit the updated snapshot and component
          </li>
          <li>To discard the changes: undo the component update to match the snapshot</li>
        </ol>
      </div>
    )
  }
}

export default SnapshotFlow
