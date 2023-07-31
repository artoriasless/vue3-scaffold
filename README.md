# vue3-scaffold

- vue3 简易脚手架，集成了一个可编辑表格组件（基于 revolist - revogrid）

## 技术栈

- **`vue3`**
- **`vuex`**
- **`vue-router`**
- **`element-plus`**
- **`typescript`**

## 包含内容

1. 提供了一个前端 mock 的注册、登录逻辑，在注册或登录成功后返回 token ，会在所有接口发送请求的时候带上该 token
2. 提供了一个基础的脚手架，支持 **`vue3`** + **`typescript`**
3. 提供了一个 demo 页面，包含基础的逻辑：新增页面、新增路由等相关逻辑
4. demo 页包含了部分组件的二次封装
   - _`revogrid - 可编辑表格`_
     - 自定义的下拉选择
     - 可远程搜索的下拉选择
     - switcher 开关
     - 日期选择
     - 附件上传
     - 单元格联动逻辑
     - 自定义单元格渲染
