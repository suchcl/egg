'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, Hello world  sss';
  }

  async newsList() {
    const { ctx } = this;
    ctx.body = "新闻消息";
  }
}

module.exports = HomeController;
