const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

console.log('Optimizing...');

imagemin([
    'build/static/media/*.{jpg,png}'
], 'build/static/media', {
    plugins: [
        imageminJpegtran(),
        imageminPngquant({quality: '65-80'})
    ]
}).then(files => {
    console.log(`Optimized ${ files.length } images!`);
});
