import React from 'react'
import renderer from 'react-test-renderer'

import SnapshotFlow from '../snapshot_flow'

test('JSX matches snapshot', () => {
  const component = renderer.create(<SnapshotFlow />)
  expect(component).toMatchSnapshot()
})
