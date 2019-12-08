import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Counter from '../components/Counter/useState'

test('Counter displays initial value', () => {
	const { container } = render(<Counter initialCount={0} />)
	const count = container.querySelector('#count')
	expect(Number(count.innerHTML)).toBe(0)
})

test('Counter increments value by one on + button click', () => {
	const { container, getByText } = render(<Counter initialCount={0} />)
	fireEvent.click(getByText('+'))
	const count = container.querySelector('#count')
	expect(Number(count.innerHTML)).toBe(1)
	fireEvent.click(getByText('+'))
	expect(Number(count.innerHTML)).toBe(2)
})

test('Counter decrements value by one on - button click', () => {
	const { container, getByText } = render(<Counter initialCount={3} />)
	fireEvent.click(getByText('-'))
	const count = container.querySelector('#count')
	expect(Number(count.innerHTML)).toBe(2)
	fireEvent.click(getByText('-'))
	expect(Number(count.innerHTML)).toBe(1)
})

test('Counter should not decrement below 0', () => {
	const { container, getByText } = render(<Counter initialCount={0} />)
	fireEvent.click(getByText('-'))
	const count = container.querySelector('#count')
	expect(Number(count.innerHTML)).toBe(0)
})

test('Counter should reset on reset button click', () => {
	const { container, getByText } = render(<Counter initialCount={0} />)
	fireEvent.click(getByText('+'))
	fireEvent.click(getByText('+'))
	fireEvent.click(getByText('RESET'))
	const count = container.querySelector('#count')
	expect(Number(count.innerHTML)).toBe(0)
})

test('Counter should reset to initial count', () => {
	const { container, getByText } = render(<Counter initialCount={2} />)
	fireEvent.click(getByText('+'))
	fireEvent.click(getByText('+'))
	fireEvent.click(getByText('RESET'))
	const count = container.querySelector('#count')
	expect(Number(count.innerHTML)).toBe(2)
})
