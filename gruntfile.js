module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt, { pattern: ['grunt-*'] });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dist: {
                src: 'dist/*.*'
            }
        },

        copy: {
            dist: {
                files: {
                    'dist/<%= pkg.name %>.<%= pkg.version %>.js': 'src/<%= pkg.name %>.js'
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    'dist/<%= pkg.name %>.<%= pkg.version %>.min.js': 'dist/<%= pkg.name %>.<%= pkg.version %>.js'
                }
            }
        }
    });

    grunt.registerTask('default', ['clean:dist', 'copy:dist', 'uglify:dist']);

};
