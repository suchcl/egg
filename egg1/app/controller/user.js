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
    ctx.body = ctx.query;
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

}

module.exports = UserController;
