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

  async useEjs() {
    const { ctx } = this;
    await ctx.render("home.html", {
      id: 1000,
      name: "王五",
      age: 16,
      skill: [
        "技能1", "技能2", "技能3"
      ]
    });
  }

  async add() {
    const { ctx } = this;
    ctx.cookies.set("user", "Nicholas Zakas");
    ctx.body = {
      status: 200,
      data: "Cookie添加成功"
    };
  }

  async del() {
    const { ctx } = this;
    ctx.cookies.set("user", null);
    ctx.body = {
      status: 200,
      data: "Cookie删除成功"
    };
  }

  async edit() {
    const { ctx } = this;
    ctx.cookies.set("user", "c3333ookie");
    ctx.body = {
      status: 200,
      data: "Cookie修改成功"
    };
  }

  async show() {
    const { ctx } = this;
    const cookie = ctx.cookies.get("user");
    ctx.body = {
      status: 200,
      data: cookie
    };
  }
}

module.exports = HomeController;
