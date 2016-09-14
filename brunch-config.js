exports.config = {
  server: {
    port: 8100
  },
  npm: {enabled: false},
  modules: {
    definition: false,
    wrapper: false
  },
  paths: {
    "public": 'www'
  },
  conventions: {
    ignored: [/[\\\/]_/, /test/, 'bower_components/**/*.{css,scss}']
  },
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app/,
        'js/vendor.js': /^(bower_components|vendor)/
      }
    },
    stylesheets: {
      joinTo: 'css/app.css'
    },
    templates: {
      joinTo: {
        'js/app.js': /^app/
      }
    }
  },
  plugins: {
    html2js: {
      options: {
        base: 'app/features'
      }
    }
  }
};
