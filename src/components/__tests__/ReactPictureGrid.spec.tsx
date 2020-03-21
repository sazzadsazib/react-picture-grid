import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ReactPictureGrid } from '../../index'

test('Renders', async () => {
  const { getByRole } = render(<ReactPictureGrid />)
  expect(getByRole('heading')).toHaveTextContent('ReactPictureGrid')
})
