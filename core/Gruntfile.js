const webpack_config = require('./webpack.config.js');
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        shell: {
            src: {
                command: `tsc -p src`,
                failOnError: false,
            },
            webpack: {
                command: `webpack`,
                failOnError: false
            }
        }
    })

    grunt.registerTask('default', ['shell']);
}