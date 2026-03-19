# Vite 架构转 Next.js 架构 - 实现计划

## 项目概述
将 `testloginpage` 目录下的 Vite 架构登录页面转写成 Next.js 架构，确保转写后 build 的登录页面效果与原 Vite 版本完全一致。

## 详细任务分解

### [x] Task 1: 分析 Vite 项目结构和实现
- **Priority**: P0
- **Depends On**: None
- **Description**:
  - 分析 `testloginpage` 目录下的项目结构
  - 理解登录页面的实现逻辑和样式
  - 识别关键组件和功能
- **Success Criteria**:
  - 完整了解 Vite 项目的结构和实现
  - 识别所有需要转写的组件和功能
- **Test Requirements**:
  - `programmatic` TR-1.1: 列出 Vite 项目的所有关键文件和组件
  - `human-judgement` TR-1.2: 理解登录页面的完整实现逻辑
- **Notes**:
  - Vite 项目结构：
    - src/components/LoginPage.tsx - 登录页面组件
    - src/App.tsx - 主应用组件
    - public/l@3000x2250@1x-v2.webp - 背景图片
  - 关键功能：邮箱密码登录、表单验证、加载状态、错误提示、Google登录、记住我功能

### [x] Task 2: 创建 Next.js 登录页面结构
- **Priority**: P0
- **Depends On**: Task 1
- **Description**:
  - 在 `src/app` 目录下创建 `login` 页面
  - 复制 Vite 项目中的 `LoginPage` 组件到 Next.js 项目
  - 确保组件结构与 Vite 版本一致
- **Success Criteria**:
  - Next.js 项目中存在 `login` 页面
  - `LoginPage` 组件结构与 Vite 版本一致
- **Test Requirements**:
  - `programmatic` TR-2.1: 验证 `src/app/login/page.tsx` 文件存在
  - `human-judgement` TR-2.2: 验证组件结构与 Vite 版本一致
- **Notes**:
  - 创建了 `src/app/login/page.tsx` 文件
  - 更新了 `src/components/LoginPage.tsx` 文件，确保与 Vite 版本一致
  - 添加了 'use client' 指令以确保客户端组件正常工作

### [x] Task 3: 配置 Tailwind CSS 样式
- **Priority**: P0
- **Depends On**: Task 2
- **Description**:
  - 确保 Next.js 项目的 Tailwind CSS 配置与 Vite 版本一致
  - 复制 Vite 项目中的 Tailwind 配置到 Next.js 项目
  - 确保颜色、字体、阴影等样式配置一致
- **Success Criteria**:
  - Next.js 项目的 Tailwind 配置与 Vite 版本一致
  - 登录页面的样式与 Vite 版本一致
- **Test Requirements**:
  - `programmatic` TR-3.1: 验证 `tailwind.config.js` 配置与 Vite 版本一致
  - `human-judgement` TR-3.2: 验证登录页面的样式与 Vite 版本一致
- **Notes**:
  - 更新了 `tailwind.config.js` 文件，添加了与 Vite 版本一致的配置
  - 确保颜色、字体、阴影等样式配置与 Vite 版本一致
  - 添加了 `corePlugins: { preflight: true }` 配置

### [x] Task 4: 处理背景图片和静态资源
- **Priority**: P1
- **Depends On**: Task 2
- **Description**:
  - 将 Vite 项目中的背景图片复制到 Next.js 项目的 `public` 目录
  - 确保图片路径引用正确
  - 验证图片加载正常
- **Success Criteria**:
  - 背景图片在 Next.js 版本中正确显示
  - 图片路径引用正确
- **Test Requirements**:
  - `programmatic` TR-4.1: 验证背景图片文件存在于 `public` 目录
  - `human-judgement` TR-4.2: 验证背景图片在登录页面中正确显示
- **Notes**:
  - 已将 `l@3000x2250@1x-v2.webp` 图片复制到 `public` 目录
  - 确保图片路径引用正确，使用 `/l@3000x2250@1x-v2.webp`

### [x] Task 5: 实现表单功能和状态管理
- **Priority**: P0
- **Depends On**: Task 2
- **Description**:
  - 确保表单验证功能与 Vite 版本一致
  - 实现加载状态和错误提示
  - 确保 Google 登录功能正常
- **Success Criteria**:
  - 表单验证功能正常工作
  - 加载状态和错误提示与 Vite 版本一致
  - Google 登录功能正常
- **Test Requirements**:
  - `programmatic` TR-5.1: 验证表单验证功能正常工作
  - `human-judgement` TR-5.2: 验证加载状态和错误提示与 Vite 版本一致
- **Notes**:
  - 表单功能和状态管理已经在 LoginPage 组件中实现
  - 包含邮箱验证、密码验证、记住我功能、加载状态、错误提示和 Google 登录功能
  - 实现与 Vite 版本完全一致

### [x] Task 6: 测试和验证
- **Priority**: P0
- **Depends On**: Task 3, Task 4, Task 5
- **Description**:
  - 运行 Next.js 开发服务器
  - 访问登录页面并验证效果
  - 构建项目并验证 build 后的效果
- **Success Criteria**:
  - 登录页面在开发模式下正常显示
  - 构建后的登录页面效果与 Vite 版本一致
- **Test Requirements**:
  - `programmatic` TR-6.1: 验证 `npm run build` 命令执行成功
  - `human-judgement` TR-6.2: 验证构建后的登录页面效果与 Vite 版本一致
- **Notes**:
  - 登录页面在开发模式下正常显示
  - 构建命令执行成功，生成了优化后的生产版本
  - 构建后的登录页面效果与 Vite 版本一致

## 技术要点

1. **文件结构转换**:
   - Vite: `src/components/LoginPage.tsx` → Next.js: `src/components/LoginPage.tsx`
   - Vite: `src/App.tsx` → Next.js: `src/app/login/page.tsx`

2. **样式配置**:
   - 确保 Tailwind CSS 配置一致
   - 保持颜色、字体、阴影等样式配置相同

3. **背景图片**:
   - 将背景图片从 Vite 的 `public` 目录复制到 Next.js 的 `public` 目录
   - 确保图片路径引用正确

4. **功能实现**:
   - 保持表单验证逻辑一致
   - 保持加载状态和错误提示一致
   - 保持 Google 登录功能一致

5. **构建验证**:
   - 确保 `npm run build` 命令执行成功
   - 验证构建后的登录页面效果与 Vite 版本一致

## 验收标准

1. **视觉效果**:
   - 登录页面的布局、颜色、字体、阴影等视觉效果与 Vite 版本一致
   - 背景图片正确显示

2. **功能效果**:
   - 表单验证功能正常工作
   - 加载状态和错误提示正常显示
   - Google 登录功能正常

3. **构建效果**:
   - `npm run build` 命令执行成功
   - 构建后的登录页面效果与 Vite 版本一致

4. **性能效果**:
   - 页面加载速度正常
   - 交互响应速度正常