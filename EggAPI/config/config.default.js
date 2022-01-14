/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1642127159778_1397';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    client: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'Wb403lmq',
      database: 'LingYi',
    },
    app: true,
    agent: false,
  };

  // 配置跨域，跨域了，就降低了安全级别了
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ['http://localhost:8080'],
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,POST,PUT,DELETE,PATCH',
  };

  return {
    ...config,
    ...userConfig,
  };
};
