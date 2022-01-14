/* eslint valid-jsdoc: "off" */

"use strict";

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
  config.keys = appInfo.name + "_1641222489270_9845";

  // 配置中间件，不需要导入，直接将写好的中间名名称放到这里即可
  config.middleware = ["counter"];

  // CSRF
  config.security = {
    csrf: {
      enable: false
    }
  };

  // ejs模板引擎配置
  config.view = {
    mapping: {
      ".html": "ejs"
    }
  };

  config.ejs = {

  };

  config.session = {
    key: "WODESHEN_SESS",
    httpOnly: true,
    renew: true,
    maxAge: 1000 * 120
  };

  // 静态资源的默认存在位置
  // config.static = {
  //   prefix: "/assets/"
  // };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
