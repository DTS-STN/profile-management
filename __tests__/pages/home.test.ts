/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages/index'

import * as nextRouter from 'next/router'
import React from 'react'

describe('index page', () => {
  let useRouter, data
  // mocking useRouter for the navigation header, will probably need to add to this more as time goes on
  beforeAll(() => {
    useRouter = jest.spyOn(nextRouter, 'useRouter')
    useRouter.mockImplementation(() => ({
      route: '/',
      pathname: '/',
      query: '',
      asPath: '',
    }))

    // change with API request
    data = {
      id: 1,
      firstName: 'Sidra',
      lastName: 'Doe',
      middleName: 'K',
      dob: '1989-01-23',
      sin: '555 555 555',
      maritalStatus: 'Married',
    }
  })

  it('should render', async () => {
    // Once API is ready, fetch here
    render(React.createElement(Home, { data }))
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })
})
