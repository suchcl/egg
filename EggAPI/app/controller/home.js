"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }

  async getUser() {
    const { ctx } = this;
    // const userInfo = await this.app.mysql.get("user", { id: 2 });
    const sql = "select * from user";
    const userInfo = await this.app.mysql.query(sql);
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
