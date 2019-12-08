import React from 'react'
import Counter from './components/Counter/useState'
import { Container, Content } from 'rsuite'

class App extends React.Component {
	render() {
		return (
			<Container>
				<Content>
					<Counter initialCount={0} />
				</Content>
			</Container>
		)
	}
}

export default App
