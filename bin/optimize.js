const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

console.log('Optimizing...');

imagemin([
    'build/static/media/*.{jpg,png}'
], 'build/static/media', {
    plugins: [
        imageminJpegtran({
            progressive: true,
        }),
        imageminPngquant({
            quality: '65-100',
            verbose: true,
        })
    ]
}).then(files => {
    console.log(`Optimized ${ files.length } images!`);
}, err =>
    console.log(err)
);
