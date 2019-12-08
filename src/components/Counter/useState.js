import React from 'react'
import { Panel, PanelGroup, ButtonToolbar, Button } from 'rsuite'
import './styles.css'

export const useCounter = initialCount => {
	const [count, setCount] = React.useState(initialCount)

	const increment = () => {
		setCount(c => c + 1)
	}

	const decrement = () => {
		setCount(c => (c > 0 ? c - 1 : 0))
	}

	const reset = () => {
		setCount(initialCount)
	}

	return {
		state: {
			count,
		},
		methods: {
			increment,
			decrement,
			reset,
		},
	}
}

const Counter = ({ initialCount }) => {
	const { state, methods } = useCounter(initialCount)

	return (
		<Panel className="Counter" header={<h5>useState</h5>}>
			<PanelGroup className="Counter_Header">
				<h3 id="count">{state.count}</h3>
			</PanelGroup>
			<PanelGroup>
				<ButtonToolbar>
					<Button onClick={methods.increment}>+</Button>
					<Button onClick={methods.decrement}>-</Button>
					<Button onClick={methods.reset} appearance="subtle">
						RESET
					</Button>
				</ButtonToolbar>
			</PanelGroup>
		</Panel>
	)
}

export default Counter
