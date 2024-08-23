'use strict';

const glob = require('glob'),
    os = require('os'),
    path = require('path')

module.exports = (app) => {

    const routes = 'modules/**/*.routes.js',
        version = '/api',
        language = '/v1/:lang',
        baseUrl = `${version}${language}`;
        
    let newPath = path.join(__dirname, '../modules');

    newPath = `${newPath}/**/*.routes.js`;

    if (os.platform() === 'win32') {

        glob.sync(routes).forEach((file) => {

            console.log(file)
            require(`../${file}`)(app, baseUrl);

        });

    } else {

        const syncedPath = glob.sync(newPath);

        syncedPath.forEach((file) => {

            require(`${file}`)(app, baseUrl);

        });

    }

};