'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async newsList() {
    const { ctx } = this;
    ctx.body = '新闻消息';
  }

  async useEjs(){
    const {ctx} = this;
    await ctx.render("home.html");
  }
}

module.exports = HomeController;
