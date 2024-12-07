import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import HomePage from "./page"

test('presses button and returns 40', async () => {
render(<HomePage/>)

await userEvent.click(screen.getByRole("button"))

const inputElement = screen.getByRole("inputText");

fireEvent.change(inputElement, {target: {value: '40'}});

expect (inputElement.value).toBe('40');

})
