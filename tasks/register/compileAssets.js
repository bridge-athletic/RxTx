module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'bower:install',
		'clean:dev',
		'jst:dev',
    'sass:dev',
		//'less:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
