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
import useForm from './useForm'

const LoginForm = () => {
	const initialValues = {
		email: '',
		password: '',
	}
	const { values, handleChange } = useForm({ initialValues })

	const handleSubmit = event => {
		event.preventDefault()
		console.log(values)
	}

	return (
		<Panel header={<h3>Login</h3>}>
			<Form formValue={values} onChange={handleChange} onSubmit={handleSubmit}>
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
						<Button appearance="primary" type="submit">
							Submit
						</Button>
					</ButtonToolbar>
				</FormGroup>
			</Form>
		</Panel>
	)
}

export default LoginForm
