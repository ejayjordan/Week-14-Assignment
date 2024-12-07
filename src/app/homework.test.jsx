import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import HomePage from "./page"

/*jest.mock("next/navigation", () => ({
    useRouter() {
      return {
        prefetch: () => null
      };
    }
  }));*/

test('presses button and returns 40', async () => {
    render(<HomePage/>)
    const inputElement = screen.getByTestId('inputText')
    fireEvent.change(inputElement, {target: {value: '40'}})
    await userEvent.click(screen.getByRole("button"))
    expect(screen.getByTestId('inputDisplay').value).toBe('40')

})
