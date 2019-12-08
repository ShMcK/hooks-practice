import React from 'react'
import Counter from './components/Counter/useEffect'
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
