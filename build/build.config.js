'use strict';

//basic configuration object used by gulp tasks
module.exports = {
    port: 3000,
    tmp: 'build/tmp',
    dist: 'build/dist',
    base: 'client',
    tpl: 'client/views/**/*.html',
    mainScss: 'client/styles/main.scss',
    scss: 'client/styles/**/*.scss',
    js: [
        'client/scripts/**/*.js',
        '!client/bower_components/**/*.js',
        'client/test/unit/**/*.js',
        'client/test/e2e/**/*.js'
    ],
    index: 'client/index.html',
    assets: 'client/assets/**',
    images: 'client/assets/images/**/*',
    banner: ['/**',
        ' * <%= pkg.name %> - <%= pkg.description %>',
        ' * @version v<%= pkg.version %>',
        ' * @link <%= pkg.homepage %>',
        ' * @license <%= pkg.license %>',
        ' */',
        ''
    ].join('\n')
};
