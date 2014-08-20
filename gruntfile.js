module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt, { pattern: ['grunt-*'] });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            dist: {
                files: {
                    'dist/<%= pkg.name %>.<%= pkg.version %>.min.js':
                        'dist/<%= pkg.name %>.<%= pkg.version %>.js'
                }
            }
        }
    });

};
