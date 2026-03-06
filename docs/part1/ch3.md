# 第3章 提示词工程与AI助研

## 学习目标
- [ ] 理解如何有效地与AI进行学术协作
- [ ] 掌握关键的提示词模板与技巧
- [ ] 学会利用AI检验、改进和加速你的研究工作

## 关键概念
- 提示词工程：通过精心设计问题来引导AI给出高质量回答的方法
- 学术应用场景：idea检验、研究设计评估、文献阅读、代码编写等
- AI的特点与优劣：不同AI模型的适用场景与局限性

## 正文

### 利用AI检验你的研究idea

AI可以作为你的学术对手与批评家，帮助识别研究设计中的缺陷。

#### 关键技巧

1. **要求AI持有相反观点**
   - 让AI代表为什么你的假设或结论是错误的
   - 这样可以激发不同的思维角度，发现潜在的问题
   - 例："请作为一个怀疑者，指出我这个研究假设可能存在的5个主要缺陷"

2. **邀请顶刊审稿人的"批评"**
   - 要求AI扮演Nature/Science级别期刊的审稿人
   - 批判你论文的方法论、创新性、结论的合理性
   - 这能帮助你预测可能的审稿意见并提前改进

3. **列举对立假设的成立条件**
   - 要求AI明确指出：在什么条件下你的结论会被推翻
   - 帮助你理解研究结果的边界条件

4. **要求标注不确定与来源**
   - 明确告诉AI："请标注你的哪些回答是基于已知事实，哪些是推测"
   - "请为重要观点附加引用源或出处"
   - AI容易产生"幻觉"，这个步骤可以帮助识别不靠谱的地方

5. **多轮对话与多模型对比**
   - 在一个新的临时会话中重新提出同样的问题，让AI重新思考
   - 使用多个不同的AI模型（如Claude和GPT），让它们互相反驳
   - 对多个答案进行综合判断

### 让AI成为你的研究助手

#### 让AI评估你的研究

当你有了初步的研究设计时，告诉AI以下信息：

**必须包含的信息**：
```
1. 研究背景：我在做什么领域的研究？
2. 研究方法：
   - 我使用的是什么范式？（实验？问卷？纵向追踪？）
   - 主要变量有哪些？
   - 采用什么样的统计或分析模型？
3. 研究假设：
   - 我想验证什么？
   - 我通过数据想知道什么？
   - 我期望会看到什么样的结果？
4. 疑问：
   - 这个设计是否合理？哪些地方可能有问题？
   - 我的假设逻辑是否成立？
```

#### 让AI帮你读文献

对于关键论文，可以这样要求AI：
- 这篇论文研究了什么问题、得到什么结论？
- 样本量与采样方法是什么？
- 实验设计有什么创新之处？
- 核心指标是怎么定义和测量的？
- 这篇文献与我的研究有什么关系？
- 这篇论文引用的最关键的5篇参考文献是什么？

#### 让AI帮你学习新知识

**场景**：你需要学习一个陌生的理论或方法（如计算模型、强化学习），但没有相关的数学或编程基础

**最佳策略**：
1. **明确你的学习背景**
   ```
   我是[专业背景]的[学位]学生
   我需要在[具体项目/研究]中使用[概念/方法]
   我目前的数学与编程基础是[说明]
   我的学习目标是[具体度量]
   ```

2. **要求设计学习计划**
   - 你认为我需要掌握哪些基础知识点？
   - 请给出学习大纲与学习顺序
   - 预计需要多长时间？关键的难点在哪里？

3. **使用高中生能理解的类比**
   - 明确告诉AI："请用高中数学水平的学生能理解的类比解释这个概念"
   - 要求提供具体的现实例子而不是抽象的数学定义

4. **以提问与自我评估循环学习**
   - 让AI评估你对概念的理解程度
   - 用自己的话复述关键概念，让AI检查是否正确

### 有用的AI工具选择

不同AI模型有不同的优势，选择合适的工具能提高效率：

| AI模型 | 主要优势 | 适用场景 |
|--------|--------|--------|
| **Claude** | 擅长代码编写与逻辑分析 | 编程、复杂问题分析、学术文本处理 |
| **GPT** | 强大的推理与问题解决能力 | 思维链推理、论文撰写、创意工作 |
| **Gemini** | 多模态输入（文本+图片）、写作风格优雅 | 创意写作、制作演示文稿、设计思路 |
| **Kimi** | 擅长长上下文、中文理解 | 科普解释、长文档分析 |

### 提示词模板库

#### 模板1：检验研究假设

```
You are a critical reviewer. I have a research hypothesis that [假设内容]. 
Please provide:
1. Three major flaws with this hypothesis
2. Alternative explanations I might not have considered
3. What empirical evidence would be needed to support this hypothesis
4. What would definitively refute this hypothesis
```

#### 模板2：评估实验设计

```
I am designing a study with the following characteristics:
- Research question: [问题]
- IV (Independent Variables): [自变量]
- DV (Dependent Variables): [因变量]
- Sample: [被试信息]
- Design: [设计]
- Analysis approach: [分析方法]

Please evaluate:
1. Is the design appropriate for answering the research question?
2. What confounds or alternative explanations exist?
3. What is the statistical power likely to be?
4. What specific improvements would you recommend?
```

#### 模板3：学习新概念

```
I am a [专业] student with [背景知识] background, and I need to understand 
[概念/方法] for my research project on [项目内容].

Please:
1. Explain [概念] using analogies that a high school student would understand
2. Provide 2-3 concrete examples from [我的专业领域]
3. What are the main assumptions or limitations of [概念]?
4. Design a 4-week learning plan for me to master this topic
```

#### 模板4：代码调试

```
[背景信息]. I'm using [函数/脚本] to [分析目标], but encountered errors.

Here is the error log:
[错误信息]

Here is my code:
[代码片段]

Function specification:
[函数说明]

Expected output: [期望结果]
Actual output: [实际结果]

Please:
1. Identify what went wrong
2. Fix the code with comments on changes
3. Explain why this error occurred
```

### 优化AI对话的核心原则

1. **具体而非笼统**
   - 不好："帮我设计一个实验" 
   - 很好："我想研究焦虑如何影响决策，考虑用风险趋避任务，被试是大学生，样本量500人，我想用混合线性模型分析，这个设计合理吗？"

2. **上下文与背景**
   - 告诉AI你是谁、你的专业背景、你要做什么
   - AI根据你的水平进行针对性回答

3. **多批评者模式**
   - 让AI采取不同的角色（审稿人、怀疑者、支持者）
   - 这会得到更全面的视角

4. **验证与复核**
   - 要求AI标注不确定之处
   - 对关键观点进行交叉验证
   - 不要无脑接受AI的所有建议

## 小结

1. **idea检验**：用AI作为对手来批判、检验你的研究思路
2. **高效学习**：通过结构化的对话与具体背景，让AI成为个性化的学习助手
3. **研究加速**：在阅读、编码、分析等多个环节利用AI节省时间
4. **谨慎使用**：记住AI的局限性，不要过度依赖，保持学术批判精神

## 练习与思考

1. 选择你当前的一个研究idea，用本章提供的模板与AI进行一次"对话"，体验批判式提问能如何改进你的想法。
2. 找一篇你需要理解的论文中的关键概念，用"学习新知识"的模板要求AI进行讲解，评估你是否能够理解。
3. 用"多轮对话"的方式，在不同的AI平台（如Claude和GPT）上提出同样的学术问题，对比它们的回答有什么不同。
