module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    less:
      all:
        options:
          yuicompress: true
        files:
          'css/style.css': 'less/style.less'

    watch:
      less:
        files: ['less/*.less', 'less/bootstrap/*.less']
        tasks: ['less:all']
      reload:
        files: ['index.html', 'css/style.css']
        options:
          livereload: true

  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-contrib-watch'

  grunt.registerTask 'default', ['less', 'watch']
