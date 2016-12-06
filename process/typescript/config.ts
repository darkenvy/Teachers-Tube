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
    // '@angular': 'https://unpkg.com/@angular', // Dead link. idk if need
    '@angular/common': 'js/lib/modules/@angular/common',
    '@angular/core': 'js/lib/modules/@angular/core',
    '@angular/compiler': 'js/lib/modules/@angular/compiler',
    '@angular/platform-browser-dynamic': 'js/lib/modules/@angular/platform-browser-dynamic',
    '@angular/platform-browser': 'js/lib/modules/@angular/platform-browser',
    'rxjs': 'js/lib/modules/rxjs',
    'ng2-youtube-player': 'js/lib/modules/ng2-youtube-player'
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