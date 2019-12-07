import React from 'react'
import LoginForm from './components/LoginForm/hooks'
import { Container, Content } from 'rsuite'

const styles = {
	app: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}

class App extends React.Component {
	render() {
		return (
			<Container>
				<Content>
					<LoginForm />
				</Content>
			</Container>
		)
	}
}

export default App
