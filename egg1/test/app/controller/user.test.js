'use strict';

const { app } = require('egg-mock/bootstrap');

describe('单元测试 app/controller/user.js', () => {
  it('user.js', () => {
    return app.httpRequest()
      .get('/user/userList')
      .expect(200)
      .expect('<h2>用户列表333</h2>');
  });

  it('user.js addUsers', async () => {
    return app.httpRequest()
      .get('/user/addUser')
      .expect(200)
      .expect('<h4>Nicholas Zakas添加成功</h4>');
  });
});
