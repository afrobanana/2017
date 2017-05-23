const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');

console.log('Optimizing...');

imagemin([
    'build/static/media/*.{jpg,png}'
], 'build/static/media', {
    plugins: [
        imageminJpegtran({
            min: 60,
            max: 80,
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
