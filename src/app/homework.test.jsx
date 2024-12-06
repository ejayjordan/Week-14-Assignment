import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import HomePage from "./page"
import { getExpectedRequestStore } from 'next/dist/server/app-render/work-unit-async-storage.external'

test('presses button and returns 40', async () => {
render(<HomePage/>)

await userEvent.click(screen.getByRole("button"))

expect (screen.getByRole("heading")).toHaveTextContent("1");

})
