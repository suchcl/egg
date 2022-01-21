"use strict";

const Controller = require("egg").Controller;

class CityController extends Controller {
    async getCity() {
        const { ctx } = this;
        ctx.body = {
            code: 0,
            data: "请求成功了"
        };
    }
}

module.exports = CityController;