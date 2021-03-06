"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);

  router.get("/getUser", controller.home.getUser);
  router.get("/getProvince", controller.home.getProvince);
  router.post("/addUser", controller.home.addUser);
  router.post("/getCity", controller.city.getCity);
};
