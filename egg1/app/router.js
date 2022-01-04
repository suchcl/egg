'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.home.newsList);
  router.get('/profile', controller.user.index);
  router.get('/user/userList', controller.user.list);
  router.get('/user/addUser', controller.user.addUsers);
  // 自由传参模式路由注册
  router.get("/user/getUser", controller.user.getUser);
  // 严格传参模式路由注册
  router.get("/user/:name/:age", controller.user.getUserProfile);
  router.post("/addStudent", controller.user.addStu);
  router.get("/useEjs", controller.home.useEjs);
};
