import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('<App />', () => {
  test('App mounts properly', () => {
    const wrapper = render(<App />)
    expect(wrapper).toBeTruthy()

    const tableTitle = screen.getByText(
        /Fake User List/i
      );
      expect(tableTitle.textContent).toBeTruthy()
  })
})
