/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Input, InputProps } from '../../components/Forms/Input'
import { addBasePath } from 'next/dist/shared/lib/router/router'

describe('Input component', () => {
  it('should render an input component that is required component', async () => {
    const props: InputProps = {
      name: 'firstName',
      label: 'First name',
      required: true,
    }
    render(React.createElement(Input, props))
    const input = screen.getByTestId('firstName')
    expect(input).toBeInTheDocument()
    expect(input.tagName).toBe('INPUT')
  })

  it('should render an input component that is required and has a custom error message', async () => {
    const props: InputProps = {
      name: 'firstName',
      label: 'First name',
      error: 'This field is required. Please do better!',
      required: true,
    }
    render(React.createElement(Input, props))
    const input = screen.getByTestId('firstName')
    expect(input).toBeDefined()
    expect(input).toBeRequired()
    expect(input).toBeInTheDocument()
    expect(input.tagName).toBe('INPUT')
    expect(input.getAttribute('error')).toBe(props.error)

    const label = screen.getByTestId('input-label')
    expect(label).toBeDefined()
    expect(label.textContent).toContain(props.error)
    expect(label.textContent).toContain(props.label)

    const errorLabel = screen.getByRole('alert')
    expect(errorLabel).toBeDefined()
    expect(errorLabel.textContent).toBe(props.error)
  })
})
