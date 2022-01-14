"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 获取中间件
  const counter = app.middleware.counter();
  router.get("/", controller.home.index);
  router.get("/news", controller.home.newsList);
  router.get("/profile", controller.user.index);
  router.get("/user/userList", controller.user.list);
  router.get("/user/addUser", controller.user.addUsers);
  // 自由传参模式路由注册
  router.get("/user/getUser", controller.user.getUser);
  // 严格传参模式路由注册
  router.get("/user/:name/:age", controller.user.getUserProfile);
  router.post("/addStudent", controller.user.addStu);
  // 路由级别的中间件，作为router请求方法的第2个参数，只在该路由中生效，其他路由无效
  router.get("/useEjs", counter, controller.home.useEjs);

  router.post("/add", controller.home.add);
  router.post("/del", controller.home.del);
  router.post("/edit2", controller.home.edit);
  router.post("/show", controller.home.show);
};
