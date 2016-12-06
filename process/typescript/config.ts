System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  //map tells the System loader where to look for things
  map: {
    app: './js',
    '@angular': 'https://unpkg.com/@angular',
    '@angular/common': 'https://unpkg.com/@angular/common@2.0.1',
    '@angular/core': 'https://unpkg.com/@angular/core@2.0.1',
    '@angular/compiler': 'https://unpkg.com/@angular/compiler@2.0.1',
    '@angular/platform-browser-dynamic': 'https://unpkg.com/@angular/platform-browser-dynamic@2.0.1',
    '@angular/platform-browser': 'https://unpkg.com/@angular/platform-browser@2.0.1',
    'rxjs': 'https://unpkg.com/rxjs@5.0.0-beta.12',
    'ng2-youtube-player': 'https://unpkg.com/ng2-youtube-player@0.0.1'

    // ++++++ When migrating to a full host site, use this: ++++++++
    // '@angular': 'node_modules/@angular',
    // '@angular/common': 'node_modules/@angular/common@2.0.1',
    // '@angular/core': 'node_modules/@angular/core@2.0.1',
    // '@angular/compiler': 'node_modules/@angular/compiler@2.0.1',
    // '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic@2.0.1',
    // '@angular/platform-browser': 'node_modules/@angular/platform-browser@2.0.1',
    // 'rxjs': 'node_modules/rxjs@5.0.0-beta.12',
    // 'ng2-youtube-player': 'node_modules/ng2-youtube-player@0.0.1'
  },
  //packages defines our app package
  packages: {
    app: {
      main: 'main.js',
      // defaultExtension: 'ts'
    },
    '@angular/core': {
      main: 'bundles/core.umd.js',
      defaultExtension: 'js'
    },
    '@angular/compiler': {
      main: 'bundles/compiler.umd.js',
      defaultExtension: 'js'
    },
    '@angular/common': {
      main: 'bundles/common.umd.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser-dynamic': {
      main: 'bundles/platform-browser-dynamic.umd.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser': {
      main: 'bundles/platform-browser.umd.js',
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    },
    'ng2-youtube-player': {
      main: 'ng2-youtube-player.js',
      defaultExtension: 'js'
    }
  }
});