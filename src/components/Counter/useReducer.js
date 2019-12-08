import React from 'react'
import { Panel, PanelGroup, ButtonToolbar, Button } from 'rsuite'
import './styles.css'

const counterReducer = init => (state, action) => {
	switch (action) {
		case 'INCREMENT':
			return { count: state.count + 1 }
		case 'DECREMENT':
			return { count: state.count > 0 ? state.count - 1 : 0 }
		case 'RESET':
			return { count: init }
		default:
			return state
	}
}

const Counter = ({ initialCount }) => {
	const [state, dispatch] = React.useReducer(counterReducer(initialCount), {
		count: initialCount,
	})

	return (
		<Panel className="Counter" header={<h5>useReducer</h5>}>
			<PanelGroup className="Counter_Header">
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
