'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>个人中心</h1>';
  }

  async list() {
    const { ctx } = this;
    ctx.body = '<h2>用户列表333</h2>';
  }

  async addUsers() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h4>Nicholas Zakas添加成功</h4>');
      }, 2000);
    });
  }

  // 自由传参模式
  async getUser() {
    const { ctx } = this;
    // console.log(ctx);
    const id = ctx.query.id;
    const res = await ctx.service.user.getUser(id);
    // 上面获取service的方法，也可以通过结构来获取到user，然后通过user来调用里面的方法
    // const { user } = ctx.service;
    // const res = await user.getUser(id);
    ctx.body = res;
  }

  // 严格传参模式
  // http://127.0.0.1:7001/user/zz/16  这样的路由样式
  async getUserProfile() {
    const { ctx } = this;
    const { name, age } = ctx.params;
    ctx.body = { // 接收多个参数
      name: name,
      age: age
    };
  }

  async addStu() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: ctx.request.body
    };
  }

}

module.exports = UserController;
