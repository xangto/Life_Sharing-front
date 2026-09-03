# life-front

个人博客前端项目（XNAGTO'S BLOG），基于 Vue 3 + TypeScript + Vite 构建。

## 技术栈

| 分类     | 技术                                                        |
| -------- | ----------------------------------------------------------- |
| 框架     | [Vue 3](https://cn.vuejs.org/)（Composition API + `<script setup>`） |
| 语言     | TypeScript                                                  |
| 构建工具 | [Vite](https://cn.vite.dev/)                                |
| 路由     | [Vue Router](https://router.vuejs.org/zh/)（hash 模式）     |
| UI 组件库 | [Element Plus](https://element-plus.org/zh-CN/)（通过 unplugin-vue-components 自动按需导入） |
| 样式     | [Tailwind CSS](https://tailwindcss.com/) v4                 |
| 图标     | [Iconify](https://iconify.design/)                          |
| 请求库   | [Axios](https://axios-http.com/)                            |
| 包管理器 | pnpm                                                        |

## 功能特性

- **首页**：全屏背景大图、打字机动画标题、文章列表与分页
- **文章详情**：博客正文阅读页
- **分类 / 标签**：按分类、标签浏览文章，侧边栏标签云
- **友链**：友情链接展示
- **关于我**：关于页面
- **通用布局**：顶部导航栏、左侧用户资料卡片、右侧随机文章 / 分类 / 标签云、页脚、回到顶部按钮

## 环境要求

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/zh/) 9+

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器（默认端口 5174）
pnpm dev

# 构建生产版本
pnpm build

# 本地预览构建产物
pnpm preview
```

## 接口代理

开发环境下，`/api` 开头的请求会被代理到后端服务：

- 目标地址：`http://localhost:8080`

后端接口统一响应格式为 `{ code, message, data }`，`src/api/request.ts` 中的 Axios 拦截器会自动解包 `data` 并在请求失败时弹出错误提示。

## 目录结构

```
life-front
├── public/                 # 静态资源（背景图、头像、favicon 等）
├── src/
│   ├── api/                # 接口请求封装与类型定义
│   │   ├── request.ts      # Axios 实例与拦截器
│   │   ├── tag.ts          # 各模块接口函数
│   │   └── types.ts        # 接口类型定义（VO / DTO）
│   ├── components/         # 公共组件（BlogCard、TagItem、AnimatedText 等）
│   ├── hooks/              # 组合式函数（useScrollTOp 等）
│   ├── layouts/            # 布局组件（导航栏、侧边栏、页脚等）
│   ├── router/             # 路由配置
│   ├── style/              # 全局样式
│   ├── utils/              # 工具函数
│   ├── views/              # 页面（home / blog / category / tag / friend / about）
│   ├── App.vue             # 根组件
│   └── main.ts             # 入口文件
├── index.html              # HTML 模板
└── vite.config.ts          # Vite 配置（插件、别名、代理）
```

## 路由一览

| 路径                    | 页面         |
| ----------------------- | ------------ |
| `/home`                 | 首页         |
| `/blog/:blogId`         | 文章详情     |
| `/category/:categoryName` | 分类文章   |
| `/tag/:tagName`         | 标签文章     |
| `/friend`               | 友链         |
| `/about`                | 关于我       |
