"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }

  async getUser() {
    console.time("start");
    const { ctx } = this;
    // const id = ctx.request.query.id;
    // 获取客户端通过query方式请求的参数
    const id = ctx.request.query.id;
    console.log("id:", id);
    const sql = "select * from user where id = " + id;
    const userInfo = await this.app.mysql.query(sql);
    console.timeEnd("start");
    ctx.body = {
      code: 1,
      data: {
        userInfo
      }
    };
  }

  async getProvince() {
    const { ctx } = this;
    const sql = "select * from province";
    const province = await this.app.mysql.query(sql);
    ctx.body = {
      code: 0,
      data: province
    };
  }

  async addUser() {
    const { ctx } = this;
    const user = ctx.body;
    console.log(user);
    const sql = "";
    const rst = await this.app.mysql.query(sql);
    ctx.body = {
      code: 0,
      rst
    };
  }
}

module.exports = HomeController;
