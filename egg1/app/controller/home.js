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
    // 获取session，并返回给客户端去显示
    const username = ctx.session.username;
    await ctx.render("home.html", {
      id: 1000,
      name: "王五",
      age: 16,
      username,
      skill: [
        "技能1", "技能2", "技能3"
      ]
    });
  }

  async add() {
    const { ctx } = this;
    ctx.cookies.set("user", "Nicholas Zakas", {
      maxAge: 1000 * 600,
      httpOnly: false,
      // 加密
      encrypt: true
    });

    // 添加session
    ctx.session.username="Nicholas 第二";
    ctx.body = {
      status: 200,
      data: "Cookie添加成功"
    };
  }

  async del() {
    const { ctx } = this;
    ctx.cookies.set("user", null);
    // 删除session，其实就是把值赋值为了null
    ctx.session.username = null;
    ctx.body = {
      status: 200,
      data: "Cookie删除成功"
    };
  }

  async edit() {
    const { ctx } = this;
    ctx.cookies.set("user", "c3333ookie");
    // 修改session，本质上就是重新赋值，支持中文内容
    ctx.session.username = "尼古拉斯 中文名";
    ctx.body = {
      status: 200,
      data: "Cookie修改成功"
    };
  }

  async show() {
    const { ctx } = this;
    const cookie = ctx.cookies.get("user",{
      // 读取cookie，需要解密，encrypt在设置的时候的功能是加密，在读取cookie的时候作用是解密
      encrypt:true
    });
    ctx.body = {
      status: 200,
      data: cookie
    };
  }
}

module.exports = HomeController;
