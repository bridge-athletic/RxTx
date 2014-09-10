module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
    'jst:dev',
    'html2js:app',
    'html2js:common',
    'sass:dev',
		//'less:dev',
		'sync:dev',
		'coffee:dev'
	]);
};
