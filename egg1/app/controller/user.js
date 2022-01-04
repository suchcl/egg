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
}

module.exports = UserController;
