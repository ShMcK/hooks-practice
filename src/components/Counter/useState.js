import React from 'react'
import { Panel, PanelGroup, ButtonToolbar, Button } from 'rsuite'

const styles = {
	container: {
		width: '12rem',
	},
	header: {
		display: 'flex',
		justifyContent: 'center',
	},
}

const Counter = ({ initialCount }) => {
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

	return (
		<Panel style={styles.container}>
			<PanelGroup style={styles.header}>
				<h3>{count}</h3>
			</PanelGroup>
			<PanelGroup>
				<ButtonToolbar>
					<Button onClick={increment}>+</Button>
					<Button onClick={decrement}>-</Button>
					<Button onClick={reset} appearance="subtle">
						RESET
					</Button>
				</ButtonToolbar>
			</PanelGroup>
		</Panel>
	)
}

export default Counter
