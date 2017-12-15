module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
      // Metadata.
      pkg: grunt.file.readJSON('package.json'),
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
      // Task configuration.
      sass: { // Task
        cssdev: { // Target
          options: { // Target options
            style: 'expanded'
          },
          files: { // Dictionary of files
            'css/main.css': 'scss/main.scss', // 'destination': 'source'
          }
        },
        cssproduction: { // Target
          options: { // Target options
            style: 'compressed'
            // sourcemap: 'false'
          },
          files: { // Dictionary of files
            'css/main.min.css': 'scss/main.scss', // 'destination': 'source'
          }
        },
      },
      concat: {
        options: {
          banner: '<%= banner %>',
          stripBanners: true,
          separator: ';'
        },
        css: {
          src: ['css/main.min.css'],
          dest: 'css/style.min.css',
        },
        script: {
          src: [
                // 'bower_components/angular/angular.js',
                // 'bower_components/angular/angular-route.js',
                // 'bower_components/jquery/dist/jquery.js',
                'script/vue_js.js'],
          dest: 'script/production.concat.js'
        },
        // extrasJs: {
        //   src: ['script/main.js', 'script/custom.js'],
        //   dest: 'js/with_custom.js',
        // },

      },
      uglify: {
        production: {
          options: {
            banner: '<%= banner %>',
            // beautify: false
            mangle: true
          },
          files: {
            // 'js/production.min.js': ['script/main.js','script/custom.js']
            'js/production.min.js': 'script/production.concat.js'
            // src: 'js/production.js',
            // dest: 'js/production.min.js'
          }

        },
      },
      jshint: {
        options: {
          // curly: true,
          // eqeqeq: true,
          // immed: true,
          // latedef: true,
          // newcap: true,
          // noarg: true,
          // sub: true,
          // undef: true,
          // unused: true,
          // boss: true,
          // eqnull: true,
          // browser: true,
          // devel: true,
          globals: {
            jQuery: false,
            '$': false
          }
        },
        alljsfile: {
          // src: ['Gruntfile.js', 'script/*.js']
          src: ['Gruntfile.js', 'script/main.js', 'script/vue_js.js']
        },
    },
    watch: {
      all: {
        files : ['scss/**/*.scss', 'Gruntfile.js', 'script/*.js', '!lib/dontwatch.js'],
        tasks: ['sass','concat', 'uglify'],
        options: {
            spawn: false,
        },
      },
    },
  });

// These plugins provide necessary tasks.
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');

// Default task.
grunt.registerTask('default', ['sass', 'concat', 'jshint', 'uglify']);

};
