module.exports = {
	bundle: {
		src: 'src/<%= pkg.name %>.html',
		dest: 'tmp/<%= pkg.name %>.html'
	},
	options: {
		process: true
	}
};
