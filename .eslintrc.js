module.exports = {
	extends: 'react-app',
	plugins: [
    'react-hooks'
	],
	env: {
		'es6': true		
	},
	parser: 'babel-eslint',
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
	}
}