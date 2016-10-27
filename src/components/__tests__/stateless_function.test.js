import React from 'react' // needed to use JSX
import renderer from 'react-test-renderer'

import { MyComponent } from '../stateless_function'

test('JSX list', () => {
  const countries = [{ name: 'England' }, { name: 'Thailand' }, { name: 'Hong Kong'}]
  const component = renderer.create(<MyComponent countries={countries} />)
  expect(component).toMatchSnapshot()
})
