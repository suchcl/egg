"use strict";

const Service = require("egg").Service;

class UserService extends Service {
    async getUser(id) {
        return {
            id: id,
            name: "王二",
            age: 16
        }
    }
}

module.exports = UserService;