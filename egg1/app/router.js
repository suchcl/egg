'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get("/news", controller.home.newsList);
  router.get("/profile", controller.user.index);
  router.get("/user/userList", controller.user.list);
};
