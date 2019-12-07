import React from 'react'
import {
	Panel,
	ButtonToolbar,
	Button,
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
} from 'rsuite'

class LoginForm extends React.Component {
	state = {
		values: {
			email: '',
			password: '',
		},
	}
	handleChange = values => {
		this.setState({ values })
	}
	handleSubmit = () => {
		const { email, password } = this.state.values
		// TODO: API request
		console.log('submit', { email, password })
	}
	render() {
		return (
			<Panel header={<h3>Login</h3>}>
				<Form formValue={this.state.values} onChange={this.handleChange}>
					<FormGroup>
						<ControlLabel>Email</ControlLabel>
						<FormControl name="email" type="email" />
					</FormGroup>
					<FormGroup>
						<ControlLabel>Password</ControlLabel>
						<FormControl name="password" type="password" />
					</FormGroup>
					<FormGroup>
						<ButtonToolbar>
							<Button appearance="primary" onClick={this.handleSubmit}>
								Submit
							</Button>
						</ButtonToolbar>
					</FormGroup>
				</Form>
			</Panel>
		)
	}
}

export default LoginForm
