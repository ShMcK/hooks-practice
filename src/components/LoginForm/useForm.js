import React from 'react'

const useForm = ({ initialValues }) => {
	const [values, setValues] = React.useState(initialValues)

	const handleChange = values => {
		setValues(values)
	}

	return {
		values,
		handleChange,
	}
}

export default useForm
