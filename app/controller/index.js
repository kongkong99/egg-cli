'use strict';
// 操作员管理

const Controller = require('egg').Controller;

class IndexController extends Controller {
  index() {
    const { ctx } = this;
    ctx.helper.formatResponse(ctx,
      ctx.service.index.index, {
        successMsg: null,
        errorMsg: '获取失败',
      });
  }

  async create() {
    const { ctx } = this;
    ctx.helper.formatResponse(ctx,
      () => { ctx.service.index.create(ctx.request.body); }, {
        successMsg: '添加成功',
        errorMsg: '添加失败',
      });
  }

  async update() {
    const { ctx } = this;
    ctx.helper.formatResponse(ctx,
      () => { ctx.service.index.update(ctx.request.body); }, {
        successMsg: '修改成功',
        errorMsg: '修改失败',
      });
  }

  async destory() {
    const { ctx } = this;
    ctx.helper.formatResponse(ctx,
      () => { ctx.service.index.destory(ctx.params.id); }, {
        successMsg: '删除成功',
        errorMsg: '删除失败',
      });
  }
}

module.exports = IndexController;
