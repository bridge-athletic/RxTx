module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'bower:install',
		'clean:dev',
    'html2js:app',
    'html2js:common',
		'jst:dev',
    'sass:dev',
		//'less:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
