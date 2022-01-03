"use strict";
const Controller = require("egg").Controller;

class UserController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = "<h1>个人中心</h1>"
    }

    async list() {
        const { ctx } = this;
        ctx.body = "<h2>用户列表333</h2>";
    }
}

module.exports = UserController;