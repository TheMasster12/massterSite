module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    less:
      all:
        options:
          yuicompress: true
          compress: true
        files:
          'prod/style.css': 'less/style.less'

    concat:
      options:
        separator: ';'
      all:
        src:
          [
            "js/bootstrap.min.js"
            "js/index.js"
          ]
        dest:
          "prod/all.js"

    uglify:
      all:
        files:
          "prod/all.min.js": "prod/all.js"

    htmlmin:
      all:
        options:
          removeComments: true,
          collapseWhitespace: true
        files:
          "prod/index.html": "index.html"

    copy:
      all:
        files: [{expand: true, src: ['img/*'], dest: 'prod/', filter: 'isFile'},
                {expand: true, src: ['font/*'], dest: 'prod/', filter: 'isFile'}]

    clean:
      js: ["prod/all.js"]
      res: ["prod/font", "prod/img"]

    watch:
      less:
        files: ['less/*.less', 'less/bootstrap/*.less']
        tasks: ['less:all']
      concat:
        files: ['js/*.js']
        tasks: ['concat:all', 'uglify:all', 'clean:js']
      htmlmin:
        files: ['index.html']
        tasks: ['htmlmin:all']
      copy:
        files: ['font/*', 'img/*']
        tasks: ['clean:res', 'copy:all']

  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-htmlmin'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-watch'

  grunt.registerTask 'default', ['less', 'concat', 'uglify', 'htmlmin', 'copy', 'clean:js', 'watch']
