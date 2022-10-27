/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	plugins: ['vuejs-accessibility'],
	extends: [
		'standard',
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier',
		'plugin:vuejs-accessibility/recommended'
	],
	parserOptions: {
		ecmaVersion: 'latest'
	}
}
