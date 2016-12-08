/// <reference path="./node_modules/ng1-template-gulp/typings/gulp.config.d.ts"/>

'use strict';

let utils: IUtils = require('ng1-template-gulp').utils;

module.exports = function (config: IConfig) {
    //Modules
    let commonModule: IModule = config.modules[0];

    config.modules.push(utils.createModule('misc'));
    config.modules.push(utils.createModule('security', {
       dependencies: ['wo.grecaptcha']
    }));

    config.coreDependencies.push('ui.bootstrap');

    //CSS styles from Bower packages
    config.styles.injections.unshift(`${config.folders.bower}font-awesome/css/font-awesome.css`);
    config.styles.injections.unshift(`${config.folders.bower}bootstrap/dist/css/bootstrap.css`);

    //Font files from Bower packages
    config.staticFiles.fonts['bootstrap'] = (rootFolder, cssFolder) => ({
        src: `${config.folders.bower}bootstrap/dist/fonts/*.*`,
        dest: `${rootFolder}fonts`
    });
    config.staticFiles.fonts['font-awesome'] = (rootFolder, cssFolder) => ({
        src: `${config.folders.bower}font-awesome/fonts/*.*`,
        dest: `${rootFolder}fonts`
    });

    //Additional preferences
    config.preferences.addModuleImagesToStaticFiles = true;
    config.preferences.vetBeforeDevBuild = false;
};
