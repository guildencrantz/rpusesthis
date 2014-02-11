'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/javascripts/*.js',
        '!assets/javascripts/scripts.min.js'
      ]
    },
    sass: {
      dist: {
        files: {
          'assets/stylesheets/styles.min.css' : 'assets/stylesheets/source/styles.scss'
        },
        options: {
          style: 'compressed',
          sourceMap: false
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/javascripts/scripts.min.js': [
            'assets/javascripts/source/*.js'
          ]
        },
        options: {
          // JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
          // sourceMap: 'assets/javascripts/scripts.min.js.map',
          // sourceMappingURL: '/app/themes/roots/assets/javascripts/scripts.min.js.map'
        }
      }
    },
    watch: {
      sass: {
        files: [
          'assets/stylesheets/source/**/*.scss'
        ],
        tasks: ['sass']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjavascripts/grunt-contrib-watch#live-reloading
        options: {
          livereload: false
        },
        files: [
          'assets/stylesheets/styles.min.css',
          'assets/javascripts/scripts.min.js',
        ]
      }
    },
    clean: {
      dist: [
        'assets/stylesheets/styles.min.css',
        'assets/javascripts/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'sass',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
