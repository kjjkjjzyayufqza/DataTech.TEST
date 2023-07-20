import { expect } from 'vitest'
import { fireEvent, getByText, render, screen } from '@testing-library/react'
import UserDrawer from '../components/UserDrawer'

it('Click the UserDrawer button', () => {
  const wrapper = render(<UserDrawer id={''} />)
  const button = wrapper.container.querySelector('Button') as HTMLButtonElement

  // Looking the View Button
  expect(button.textContent).toBe('View')

  fireEvent(
    getByText(button, 'View'),
    new MouseEvent('click', {
      bubbles: true
    })
  )

  // Make sure UserDrawerTitle is showing
  const UserDrawerTitle = screen.getByText(
    /User Detail/i
  );
  expect(UserDrawerTitle.textContent).toBeTruthy()
})
