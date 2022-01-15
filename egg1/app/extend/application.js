"use strict";
module.exports = {
  // 方法扩展  扩展的方法，可以在其他模块直接通过app调用，如app.currentTime();
  currentTime() {
    return getTime();
  },

  // 属性的扩展，通过get关键字
  get nowTime() {
    return getTime();
  }
};

function getTime() {
  const now = new Date();
  const year = now.getFullYear(); // 得到年份
  const month = now.getMonth() + 1; // 获取月份
  const date = now.getDate(); // 获取当前日期
  const hours = now.getHours(); // 获取小时时间
  const minute = now.getMinutes(); // 获取分钟数
  const second = now.getSeconds(); // 获取秒数
  const nowTime = `${year}年${month}月${date}${hours}点${minute}分${second}`;
  return nowTime;
}
