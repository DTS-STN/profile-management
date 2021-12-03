/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages/index'

import * as nextRouter from 'next/router'

describe('index page', () => {
  // mocking useRouter for the navigation header, will probably need to add to this more as time goes on
  nextRouter.useRouter = jest.fn()
  nextRouter.useRouter.mockImplementation(() => ({ pathname: '/' }))

  it('should render', () => {
    render(
      <Home
        data={{
          id: 1,
          firstName: 'Sidra',
          lastName: 'Doe',
          middleName: 'K',
          dob: '1989-01-23',
          sin: '555 555 555',
          maritalStatus: 'Married',
        }}
      />
    )
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })
})
