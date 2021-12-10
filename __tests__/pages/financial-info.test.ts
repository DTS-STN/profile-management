/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Index from '../../pages/financial-info/index'
import Edit from '../../pages/financial-info/edit'

import * as nextRouter from 'next/router'

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

  it('should render the Index component', async () => {
    render(React.createElement(Index, { data }))
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })

  it('should render the Edit component', async () => {
    render(React.createElement(Edit, { data }))
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })
})
