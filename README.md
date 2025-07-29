# AI番茄钟 - 智能专注时间管理工具

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://weiproduct.github.io/AITomatoClock)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

AI驱动的番茄工作法应用，利用人工智能优化你的专注时间，提升工作效率。

## 🍅 项目特点

- **AI智能调节**: 根据工作习惯自动调整番茄钟时长
- **数据分析**: 详细的专注时间统计和效率分析
- **智能提醒**: AI学习工作节奏，个性化提醒
- **个性化界面**: 多种主题和声音选择

## 🌐 在线体验

访问我们的官方网站: [https://weiproduct.github.io/AITomatoClock](https://weiproduct.github.io/AITomatoClock)

## 🚀 快速开始

### 部署到GitHub Pages

1. Fork这个仓库
2. 在仓库设置中启用GitHub Pages
3. 选择`main`分支作为源
4. 你的网站将在`https://yourusername.github.io/AITomatoClock`上线

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/WeiProduct/AITomatoClock.git

# 进入项目目录
cd AITomatoClock

# 使用任何HTTP服务器运行
# 例如使用Python
python -m http.server 8000

# 或使用Node.js
npx serve .
```

## 📁 项目结构

```
AITomatoClock/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # JavaScript功能
├── _config.yml         # GitHub Pages配置
└── README.md           # 项目说明
```

## 🎨 自定义配置

### 修改网站信息

编辑`_config.yml`文件来修改网站的基本信息:

```yaml
title: 你的网站标题
description: 你的网站描述
url: "https://yourusername.github.io"
baseurl: "/your-repo-name"
```

### 自定义样式

修改`style.css`中的CSS变量来改变网站主题:

```css
:root {
    --primary-color: #ff6b6b;    /* 主色调 */
    --secondary-color: #4ecdc4;  /* 辅助色 */
    --accent-color: #45b7d1;     /* 强调色 */
}
```

## 📱 响应式设计

网站完全响应式，支持:
- 桌面端 (1200px+)
- 平板端 (768px - 1199px)
- 移动端 (< 768px)

## 🔧 技术栈

- **HTML5**: 语义化标记
- **CSS3**: 现代CSS特性，Grid和Flexbox布局
- **JavaScript**: 原生JS，无依赖
- **Font Awesome**: 图标库
- **Google Fonts**: 字体服务

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交Issue和Pull Request!

## 📞 联系方式

- GitHub: [@WeiProduct](https://github.com/WeiProduct)
- 项目链接: [https://github.com/WeiProduct/AITomatoClock](https://github.com/WeiProduct/AITomatoClock)

---

⭐ 如果这个项目对你有帮助，请给个星标支持！