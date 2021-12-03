/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { NavButtonProps, NavButtons } from '../../components/NavButtons'

describe('NavButton component', () => {
  it('should render a nevbutton component with correct back and next links', async () => {
    const props: NavButtonProps = {
      fromLocation: '/the-shire',
      toLocation: '/mordor',
    }
    render(React.createElement(NavButtons, props))
    const container = screen.getByRole('navigation')
    expect((container.childNodes[0] as any).href).toContain('the-shire')
    expect(container.childNodes[0].textContent).toContain('Back')
    expect((container.childNodes[1] as any).href).toContain('mordor')
    expect(container.childNodes[1].textContent).toContain('Next')
  })
})
