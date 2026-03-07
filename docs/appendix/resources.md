# 附录C 资源导航

## 学习目标
- [ ] 为第10章每类模型找到可复现学习资源
- [ ] 能从教程、工具和论文三个层次搭建学习路径

## 关键概念
- 工具链
- 可复现代码
- 参数恢复
- 模型比较

## 正文

### C1 入门教材（先概念后实现）

1. **Decision and Choice Models in Cognitive Science**（教材/综述）  
重点：效用、RL、DDM 的统一视角。
2. **Computational Modeling of Cognition and Behavior**（课程材料）  
重点：从理论到代码的建模流程。
3. **Bayesian Cognitive Modeling**（Kruschke）  
重点：贝叶斯建模思想与层次模型基础。

### C2 常用实现工具（按任务选择）

| 任务 | 推荐工具 | 说明 |
|-----|------|------|
| RL/效用模型拟合 | `PyMC` / `Stan` / `NumPyro` | 适合层次参数估计 |
| DDM 拟合 | `HDDM` / `PyDDM` | 可建模 RT + 选择 |
| 卡尔曼滤波 | `filterpy` / `pykalman` | 状态空间模型上手快 |
| HGF | `hBayesDM`（部分任务）/ 自定义 Stan | 常需按研究问题定制 |
| 吸引子动力学 | `Brian2` / `PyTorch` / `JAX` | 可做连续时间数值模拟 |

### C3 推荐论文方向（按模型）

1. **卡尔曼滤波器**：动态学习率与不确定性追踪。  
关键词：`Kalman learning rate`, `uncertainty tracking`, `volatile environment`。
2. **HGF**：精神病理学中的不确定性推断。  
关键词：`hierarchical gaussian filter`, `volatility`, `precision-weighted prediction error`。
3. **吸引子模型**：工作记忆、双稳态知觉与决策神经动力学。  
关键词：`attractor network`, `working memory persistent activity`, `bistable perception`。

### C4 最小可复现实践清单

1. 明确数据结构：是否有 trial-level 选择、反馈、RT。  
2. 先实现最简模型（如 RL 单学习率、DDM 固定边界）。  
3. 做参数恢复（至少 100 组模拟）。  
4. 做模型恢复（候选模型两两可分）。  
5. 再加入复杂机制（层次结构、动态噪声或吸引子动力学）。

### C5 阅读与复现顺序建议

1. 先复现 RL 或效用模型（低门槛）。  
2. 再加 DDM（引入 RT 的过程解释）。  
3. 再做卡尔曼滤波（不确定性与动态学习率）。  
4. 最后学习 HGF 与吸引子模型（层级与动力系统）。

## 小结
- 学习路径建议从“可解释的简单模型”逐步过渡到“层次和动力系统模型”。
- 每增加模型复杂度，都应同步增加验证（参数恢复、模型恢复）。

## 练习与思考
1. 为你的研究问题挑选一个 C2 工具，列出最小实现步骤。
2. 选一个 C3 关键词组合，检索 3 篇近五年论文并比较其模型验证策略。
