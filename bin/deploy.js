var ghpages = require('gh-pages');

console.log('Deploying to Github...')

ghpages.publish('.', {
    src: 'build/**'
}, function(err) {
    if (err) {
        console.log(err.message || err)
    }
    else {
        console.log('Deployed!')
    }
});
