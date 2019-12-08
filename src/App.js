import React from 'react'
import StateCounter from './components/Counter/useState'
import ReducerCounter from './components/Counter/useReducer'
import EffectCounter from './components/Counter/useEffect'
import { Container, Content } from 'rsuite'

class App extends React.Component {
	render() {
		return (
			<Container>
				<Content className="Content">
					<StateCounter initialCount={0} />
					<ReducerCounter initialCount={0} />
					<EffectCounter />
				</Content>
			</Container>
		)
	}
}

export default App
