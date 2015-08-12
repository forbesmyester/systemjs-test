var Builder = require('systemjs-builder');

var builder = new Builder({
    map: {
        babel: './node_modules/babel-core/browser.js'
    },
    baseURL: './src',
    transpiler: 'babel',
    babelOptions: {
    }
})
.buildSFX('index.esm.js', 'dist.js', { sfxFormat: 'amd' })
.then(function() {
    console.log('Build complete');
})
.catch(function(err) {
    console.log('Build error');
    console.log(err);
});
