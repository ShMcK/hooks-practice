import React from 'react'
import { Panel, PanelGroup } from 'rsuite'

const styles = {
	container: {
		width: '10rem',
	},
	header: {
		display: 'flex',
		justifyContent: 'center',
	},
}

const apiCall = async () => {
	// timeout
	await new Promise(resolve => {
		setTimeout(resolve, 1000)
	})
	const value = Math.floor(Math.random(0, 1) * 10)
	return value
}

const useCounter = () => {
	const [loading, setLoading] = React.useState(true)
	const [count, setCount] = React.useState(0)

	React.useEffect(() => {
		apiCall().then(value => {
			setCount(value)
			setLoading(false)
		})
	}, [])

	return {
		count,
		loading,
	}
}

const Counter = () => {
	const { loading, count } = useCounter()

	return (
		<Panel style={styles.container}>
			<PanelGroup style={styles.header}>
				{loading ? <p>Loading...</p> : <h3>{count}</h3>}
			</PanelGroup>
		</Panel>
	)
}

export default Counter
