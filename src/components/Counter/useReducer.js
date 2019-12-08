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

export const counterReducer = (state, action, init) => {
	switch (action) {
		case 'INCREMENT':
			return { count: state.count + 1 }
		case 'DECREMENT':
			return { count: state.count > 0 ? state.count - 1 : 0 }
		case 'RESET':
			return { count: init.count }
		default:
			return state
	}
}

const Counter = ({ initialCount }) => {
	const [state, dispatch] = React.useReducer(counterReducer, {
		count: initialCount,
	})

	return (
		<Panel style={styles.container}>
			<PanelGroup style={styles.header}>
				<h3>{state.count}</h3>
			</PanelGroup>
			<PanelGroup>
				<ButtonToolbar>
					<Button onClick={() => dispatch('INCREMENT')}>+</Button>
					<Button onClick={() => dispatch('DECREMENT')}>-</Button>
					<Button onClick={() => dispatch('RESET')} appearance="subtle">
						RESET
					</Button>
				</ButtonToolbar>
			</PanelGroup>
		</Panel>
	)
}

export default Counter
