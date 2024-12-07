import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import HomePage from "./page"

test('presses button and returns 40', async () => {
render(<HomePage/>)

await userEvent.click(screen.getByRole("button"))

const inputElement = screen.getByTestId("inputText");

fireEvent.change(inputElement, {target: {value: '40'}});

expect(screen.getByTestId('inputDisplay').value).toBe('40')

})
