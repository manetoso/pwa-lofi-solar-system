module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,png,html,txt,css,js,svg}'
	],
	swDest: 'build/sw.js',
	// ignoreURLParametersMatching: [
	// 	/^utm_/,
	// 	/^fbclid$/
	// ],
	swSrc: 'src/sw-template.js'
};