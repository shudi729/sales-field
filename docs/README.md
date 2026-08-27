# 销练场 Sales Field

> 从“知道销售”，到“做到成交”。

一款面向大客户销售人员的沉浸式模拟训练游戏。玩家需要在有限时间、预算和信息条件下调查客户、识别关键人、自由输入真实话术，并承担每一次判断带来的连续项目后果。

![销练场首页场景](../assets/sales-lobby.webp)

## 为什么做销练场

大多数销售培训解决的是“听懂”，却很少让销售人员在安全环境里经历错判关键人、需求挖掘失败、竞品推进、价格压力和交付风险。

销练场把销售知识放进一个持续变化的客户世界：客户人物有隐藏立场，竞争对手会行动，时间和预算会消耗，前期遗漏会在后期产生代价。这里不是选择题，也不提前告诉玩家标准答案。

## 核心体验

- **动态客户组织**：职务不等于权力，每个人物拥有真实顾虑、个人动机与影响力。
- **连续项目战役**：从线索获取、客情建设、需求洞察一直推进到谈判、交付与复盘。
- **自由话术实战**：玩家直接输入自己的问题和回应，系统判断意图、证据、承诺与推进力度。
- **可选 AI 教练**：配置 OpenAI API Key 后，自由会谈会生成更自然的客户回应和销售教练点评。
- **有限资源决策**：时间、行动力、预算、客户信任和竞品威胁会共同改变项目走向。
- **知识融入局势**：SPIN、机会九宫格、关键人地图、内部教练、价值量化、采购标准和条件交换等方法不再只是卡片知识。
- **失败也有价值**：复盘记录人物、竞争、标准和项目推进之间的因果关系。

## 游戏路径

1. 线索获取——判断客户是否值得投入。
2. 客情建设——识别推动者、把关者与内部教练。
3. 洞察客户——让客户说出问题及改变的代价。
4. 商机挖掘——把兴趣变成有期限的项目承诺。
5. 方案胜出——建立对我方有利且可验证的采购标准。
6. 投标谈判——走出陪标区并守住真实利润。
7. 交付运营——让价值真正发生并完成验收。

![客户会议场景](../assets/sales-meeting.webp)

## 立即体验

### 本地运行

下载或克隆仓库后，直接打开 `index.html`。项目不需要安装依赖，也不需要构建。

### GitHub Pages

1. 进入仓库 **Settings → Pages**。
2. 在 **Build and deployment** 中选择 **Deploy from a branch**。
3. Branch 选择 `main`，目录选择 `/ (root)`。
4. 保存并等待 GitHub 生成访问地址。

> 当前体验版的手机号与昵称只保存在浏览器本地 `localStorage`，不会上传到服务器，也不会发送短信验证码。

### AI 教练

进入战役后点击顶部 **AI教练**，填写 OpenAI API Key 和模型名即可开启。默认模型是 `gpt-4o-mini`。

AI 教练只在自由会谈环节工作：玩家提交话术后，系统会先用本地规则即时判定，再尝试调用 AI 生成更自然的客户回应和一句销售教练反馈。API Key 保存在当前浏览器的 `localStorage`，不会写入仓库。

未配置 API Key、网络不可用或接口请求失败时，游戏会自动回退到本地规则判定。

## 技术特点

- 原生 HTML、CSS 和 JavaScript，无第三方运行依赖。
- 可选调用 OpenAI Chat Completions API，不配置时仍可离线体验核心流程。
- 响应式适配桌面端与移动端。
- 支持系统“减少动画”设置。
- 可直接部署到 GitHub Pages、Cloudflare Pages 或任意静态托管服务。

## 项目状态

当前版本：`v0.9.0`，属于可体验原型。已实现完整战役主循环、人物关系、随机事件、自由对话、评分复盘与反馈保存。

接下来重点完善：

- 更多行业、客户角色与项目背景。
- 更完整的政企销售知识内容。
- 对话判定与客户反应的真实性。
- 成长档案、能力图谱与长期任务。
- 企业版团队训练与场景共创。

完整计划见 [ROADMAP.md](ROADMAP.md)。仓库创建资料与 Star 增长计划分别见 [GITHUB_SETUP.md](GITHUB_SETUP.md) 和 [docs/STAR_GROWTH_PLAN.md](docs/STAR_GROWTH_PLAN.md)。

## 参与项目

欢迎提交真实销售场景、客户角色、判断争议和产品建议。请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。

如果这个项目让你看到了销售训练的新可能，欢迎点一个 **Star**。Star 不只是支持，也能让更多销售人员和产品开发者发现它。

## English

**Sales Field** is an immersive B2B sales simulation where players investigate accounts, map real influence, type their own sales dialogue, manage limited resources, and live with the downstream consequences of every decision.

## 版权

Copyright © 2026 Sales Field. All Rights Reserved. 详见 [LICENSE.md](LICENSE.md)。
