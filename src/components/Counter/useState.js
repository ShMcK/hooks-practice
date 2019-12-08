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
	return (
		<Panel style={styles.container}>
			<PanelGroup style={styles.header}>
				<h3>{initialCount}</h3>
			</PanelGroup>
			<PanelGroup>
				<ButtonToolbar>
					<Button>+</Button>
					<Button>-</Button>
					<Button appearance="subtle">RESET</Button>
				</ButtonToolbar>
			</PanelGroup>
		</Panel>
	)
}

export default Counter
