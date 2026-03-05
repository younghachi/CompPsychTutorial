# 科研新手组合包

如果拿到`.md`格式的文件，请使用VS Code、[Dillinger](https://dillinger.io/)等markdwon解释器阅读。

## 0. Q&A

> Q1：怎么用R？
A1：首先确保仔细阅读了本文档关于R的部分，确保自己真的下载了r studio，然后思考自己想用R做什么，并把诉求告诉ai让ai生成代码（一般ai会告诉你需要改它的代码的哪里，需要仔细看看，如果不懂可以继续问它，有一些基础性问题它也会告诉你，比如#后面跟的文字是对代码的描述）

> Q2：通过conda环境使用R时无法安装R包！
A2：	如果是Windows系统，检查是否安装了与R版本一致的Rtools。如果是Linux系统，miniconda/miniforge不带全套编译工具，在R里安装包时可能编译失败，可以改用mamba安装R包：
```bash
mamba install -n {环境名} {R包名} -y
```
注意mamba安装时R包的命名方式为`r-{package}`，如`r-tidyverse`。也可以使用`sudo apt`在系统级安装好编译工具，如`gcc`、`make`等。


## 1. 文献管理

### Zotero

#### 使用Zotero保存文献

- 安装Zotero与浏览器插件：[下载Zotero](https://www.zotero.org/download/)
- Zotero浏览器插件  
  ![Edge浏览器中的Zotero插件](https://pic1.imgdb.cn/item/68fde48e3203f7be00a0682e.png)
- 在浏览器插件栏固定显示插件  
  ![常驻显示](https://pic1.imgdb.cn/item/68fde48e3203f7be00a0682f.png)
- 打开Zotero软件，然后在网页上保存文献  
  ![变成这种图标时说明可以保存](https://pic1.imgdb.cn/item/68fde48e3203f7be00a0682d.png)

#### Zotero插件

- 下载Zotero插件：[Zotero插件商店](https://zotero-chinese.com/plugins/)
- 在Zotero中安装插件  
  ![Step 1](https://pic1.imgdb.cn/item/68fde6cc3203f7be00a068d4.png)
  ![Step 2](https://pic1.imgdb.cn/item/68fde6cc3203f7be00a068d5.png)
- 推荐插件
  - Better Notes for Zotero
  - Ethereal Style
  - Easier Citation
  - Translate for Zotero
  - Zotero Attanger  
    - 使用OneDrive等网盘实现附件管理  
  ![Zotero附件管理](https://pic1.imgdb.cn/item/68fde57d3203f7be00a0688a.png)

#### 在Word中使用Zotero

![Zotero的Word插件](https://pic1.imgdb.cn/item/68fde41a3203f7be00a06813.png)

- 插入/更改引用
- 插入引文目录
- 更改引用风格  
  ![根据期刊要求选择](https://pic1.imgdb.cn/item/68fde41b3203f7be00a06816.png)  
- （可选）更改插入引用的快捷键  
  ![alt text](https://pic1.imgdb.cn/item/68fde41b3203f7be00a06815.png)  
  ![alt text](https://pic1.imgdb.cn/item/68fde41b3203f7be00a06814.png)  

### 文献查找

#### 在哪里找文献？

- 准备好梯子
- [Google Scholar](https://scholar.google.com/)
  - 关键词的选择
  - 筛选与高级搜索
    - 限定期刊
    - 限定发表时间
    - 限定作者
  - 被引搜索（Cited by）
  - 学术订阅
  - 学术主页
- [Consensus](https://consensus.app/search/)
  - 提一个精准的问题
  - 限定研究领域
    - In the field of moral psychology/cognitive neuroscience...
  - 问题可以用是/否回答
    - Do advantage inequality and disadvantage inequality involve different brain network?
    - Is there a pathway that connects the amygdala and vmPFC?
  - Consensus综述（50篇文献）
- [玻尔学术](https://www.bohrium.com/intro)
- 课题组/实验室主页

#### 找什么样的文献？

- 好期刊
  - 中科院一区或者二区top（心理学、神经科学、医学、精神病学）
  - Cell、Nature、Science及其子刊
  - 各学会/协会会刊、美国科学院、英国皇家学会
  - 年鉴(Annual)、评论(Review)、公报(Bulletin)系列
  - 金牌OA
    - eLife、PLOS Computational Biology、Science Advances...
- 好作者
  - 你知道他是大佬（T. Sharot、L. Hackel、R. Dolan、Yina Ma）
  - 你在这个领域的多篇文献见过他的名字或他的单位（一作、通讯）
  - 他的工作单位/师承很厉害
  - 他的H-index很高
- 高引用量

#### 在哪里找PDF全文？

- [科研通](https://www.ablesci.com/)
- [Research Gate](https://www.researchgate.net/)
- Research Square
- ProQuest
- [Z-Library](https://zh.z-library.sk/)（电子书）

### 文献阅读

#### 摘要提供的信息

![一段摘要](https://pic1.imgdb.cn/item/68fde48e3203f7be00a06830.png)

- 研究主题：整合社会与非社会学习的适应性行为的机制
- 研究方法：在Minecraft里做集体觅食任务
- 研究结果：行为指标体现了空间与时序上的互动行为
- 对结果的解释、结论：**适应能力**能够预测任务表现

#### 找关键内容

- 引言前3段：提出研究问题  
  > ![前言](https://pic1.imgdb.cn/item/68fde57d3203f7be00a06889.png)
- 引言倒数3段：概况研究方法  
  > ![方法](https://pic1.imgdb.cn/item/68fde57d3203f7be00a0688b.png)
- 摘要与讨论第一段：核心结果  
  > ![讨论](https://pic1.imgdb.cn/item/68fde6cc3203f7be00a068d6.png)
- 结论与讨论第一段：对核心结果的解读  
  > ![结论](https://pic1.imgdb.cn/item/68fde3603203f7be00a067c5.png)
- 方法
  - 样本量、样本特征
  - 实验设计与流程：新设计解决了哪些GAP？
  - 核心指标：怎么定义？为什么这个指标能回答研究问题？
  - 主要分析方法：怎么对指标进行检验或者计算以回答问题？
- 图表
  - 研究框架与实验流程  
    ![实验流程](https://pic1.imgdb.cn/item/68fde8113203f7be00a06929.png)
  - 关注的“效应”与“指标”结果  
    ![实验结果](https://pic1.imgdb.cn/item/68fde8113203f7be00a0692a.png)
    > 社会与非社会条件下，环境特点的效应
- 补充材料 Supplementary
  - 未写清的方法细节
  - 次要结果
  - 支撑性验证结果

#### 查找引用

- 不同的引用格式
  - APA：找作者名+年份
    - 原文：...when the outcome is a categorical variable, such as in the well-known “Weather Prediction Task” (Gluck, Shohamy, & Myers, 2002; **Speekenbrink**, Channon, & Shanks, **2008**).
    - 引文目录：**Speekenbrink, M.**, Channon, S., & Shanks, D. R. (**2008**). Learning strategies in amnesia. *Neuroscience and Biobehavioral Reviews*, 32, 292–310. doi: 10.1016/j.neubiorev.2007.07.005
  - GB/Numeric style：找序号
    - 原文：... based on context-dependent strategies that compare the quality of individual vs. social information $^{4,9,10}$.
    - 引文目录：**4.** Enquist, M. & Ghirlanda, S. Evolution of social learning does not explain the origin of human cumulative culture. *J. Theor. Biol.* 246, 129–135 (2007).

## 2. 使用AI

### 检验你的idea

- 要求AI持有与你相反的观点，与AI辩论
- 要求AI扮演顶刊级别的审稿人，批判自己的论文
- 要求AI给出对立答案的成立条件
- 要求AI明确标注不确定的内容、列出引用源
- 同时使用两个AI，让它们互相反驳
- 在新的临时会话中，让AI重新评估之前的总结

### 研究助手

- 让AI评估你的研究
  - 我在做一个什么样的研究（Methods）
  - 范式、变量、模型
  - 我的假设是什么/我想验证什么/我想通过数据知道什么
  - 如何解读我的分析结果
- 让AI读文献
  - 研究问题与结论
  - 样本量与采样方法
  - 实验设计与创新点
  - 核心指标的计算与解读
  - 与我的研究的关系
  - 核心引用文献
- 让AI帮自己学习：什么是计算模型？
  - 明确需求
    - 身份背景：我是心理学专业的硕士研究生
    - 学习动机：需要使用计算模型方法（如强化学习）进行研究
    - 背景知识：但是我没有相关的数学与编程基础
    - 学习目标：学到什么程度（具体到项目中）？
  - 声明自己是新手，要求使用高中生都可以理解的类比
  - 让AI设计学习计划：知识点、大纲、进度安排、预期目标
  - 让AI提问并评估，检验自己的掌握程度
  - 知识复述：Please check if I understand correctly
- 不同AI的特点
  - Gemini：写作，图片制作
  - GPT：思考或者写代码
  - Claude：写代码
  - Kimi：科普工具

### 一些（可能有用的）命令

- Be critical and strict, it's OK to respond harshly
- Never catering or flattering me
- Never trying to make a consistent story to justify your ideas
- Think step by step...
- Do not provide further suggestion unless I explicitly request you do so
- 用于写代码的提示词（根据自己的情况替换方括号内容）
	- I have a dataset named `[data]` in `[platform]`, each row is `[row description]` and each column is `[column description]`. The core variables are `[core variables]`, among which `[IVs]` are independent variables and `[DVs]` are dependent variables. Now I would like to perform a `[analysis description]` [using `[pacakge name]`], [to examine `[analysis goal]`]. I need the output includes `[output description]`. There should be comments for the crucial codes. If new functions were defined, document the function specification and instruction.
- 用于改bug的提示词
	- [Context description]. I'm using the function `[function()]`/the script `[script]` to `[analysis goal]`, but there are errors when executing the code. Here is the log and the function specification/script: `[log & specification/script]`.
	- [Context description]. I expect the outputs are `[expect output description]`, but the results are `[results description]`. Please review and modify the code and comment where you modified.
- 有一份代码后，让其他平台/临时对话进行技术评估
	- Here is my script to `[analysis goal]`. Evaluate the script from a methodological perspective rather than a programming perspective (follow the principle of simplicity and usability), especially whether its computational method implementation complies with specifications and can be accepted by mainstream psychological journals. 

### 怎么让AI帮忙改代码？

- *错误日志*是必需的！
- 与错误日志相关的前后5行代码
- 如果在用包中提供的函数，给AI看函数说明
- 期望结果与实际结果
- 开发环境：平台与包
- 伪代码：我心中的处理流程是怎么样的

## 3. 计算模型

### 理论模型与计算模型

- 理论：用一种idea描述、解释现象
- 理论模型：把idea结构化、标准化描述
- 理论模型可以预测现象，但无法用数据检验
- 计算模型：如何证明哪个理论更“好”？
  - 用数学公式表达理论模型，让数据自己说话
  - 使用数学指标比较模型
- 计算模型的成分
  - 输出：模型最终做出的预测是什么？
  - 变量：实验中采集到的数据
  - 参数：量化每个变量的影响
  - 算法：数据按照什么样的规则组合、计算，得到结果

### 估计模型参数

- 按照设计好的模型，参数取什么值能够让模型的输出更接近真实数据？
- 频率学派方法：计算量小但无法反映参数的不确定性
  - 最小二乘法
  - 极大似然估计
- 贝叶斯学派方法：得到参数的分布但计算复杂
  - 最大后验估计
  - 变分贝叶斯
  - MCMC

### 评估模型

- 残差估计：有多少变异性是模型无法解释的？
- 模型拟合系数：模型预测与真实数据的接近程度
  - R²
  - 对数似然 log-likelihood
  - 均方根误差 MSE
  - 预测准确率 Prediction
- 复杂度惩罚：结合拟合度与模型复杂度（参数的数量）
  - AIC、wAIC
  - BIC
  - LOO-VC
- 模型组比较：哪个模型解释效力最好？
  - PXP
- 参数恢复：模型的可靠性、稳定性
- 模型恢复：模型的有效性、可区分性

### 经典模型（理论框架）

- 结构方程模型（线性回归模型）：最简的数学描述
  - $Y = b_0x_0+b_1x_1+...+b_nx_n+e$
  - 管它这那的，全都当作线性的
- 效用模型：理性人的经济决策  
  - 核心思想：人们根据选项的“期望效用”做决策
  - $P(choice)=f(U)$  
  - 概念
    - 效用 Utility：基于什么做选择？
    - 折扣 Discount：有因素降低了效用
    - 权衡 Weight/Trade off：整合多个因素构造效用
    - Sigmoid与Softmax：从效用到选择概率（二选一、多选一）
  - 适用情境：需要决策的任务
- 强化学习模型：巴甫洛夫，强化与惩罚
  - 核心思想：经验中的奖赏与惩罚塑造了个体的行为
  - $Q_t(a,s)=Q_{t-1}(a,s) +\alpha (R_t-Q_{t-1}(a,s))$
  - 概念
    - 决策价值 $Q_t(a,s)$：效用模型中的期望效用
    - 反馈 $R_t$：奖赏，或者惩罚
    - 状态 $s$：当前面对的状态（哪两个老虎机？）
    - 动作 $a$：在状态$s$的情况下，做出$a$动作
    - 学习率 $\alpha$：对结果反馈的敏感度
  - 适用情境：需要学习的任务
- 证据积累模型：决策的过程
  
  ![DDM](https://pic1.imgdb.cn/item/68fde4d13203f7be00a06852.png)

  - 核心思想：逐步积累证据，直到达到阈限，最终做出决策
  - 概念
    - 漂移率 $v$：证据积累的速度
    - 决策阈限 $a$：做出行为反应所需要的证据量
    - 起始偏差 $z$：在积累证据之前的预期
  - 适用情境：关注反应时，需要决策的任务
- 贝叶斯模型：主观信念与不确定性
  - 核心思想：行为由个体信念决定；个体信念由先验信念与观察证据结合
  - 概念
    - 信念
    - 概率分布
    - 证据
  - 适用情境：需要表达不确定性、主观信念、推断的任务

## 4. 开发的基本概念

用做饭来描述开发过程：想象你的最终目标是做一顿饭，现在你买了一个有多个房间，但是所有房间都是厨房的房子。

|术语|类比|实例|
|----|----|----|
|操作系统 OS|房子。房子可以套房子（虚拟机，如WSL），但是占地面积永远只有那么大。|Windows，Linux，MacOS|
|核 Kernel/引擎 Engine/语言 Language|不同的厨房风格：西式，中式，露天。实际上一个厨房可能混搭了不同风格。|MATLAB，R，Python|
|包 Package/库 Library|预制菜或者料理包。想做火锅时候不用自己做火锅底料，直接买现成的就可以——而且不同品牌有不同口味。菜谱会告诉你它用了哪些料理包。|FieldTrip，ggplot2，PyMC|
|环境 Environment|房子里面的不同厨房，包括厨房里的所有料理包。一道菜只能在一个厨房完成制作。甚至有些菜谱对厨房的要求非常严格，把海盐换成井盐都做不出菜。|MATLAB R2024a，R 4.4，Python 11.3|
|Docker|装修公司按照标准模板搭建好的厨房。拎锅入住。|Docker hDDM，datascience notebook|
|镜像源 Mirror|买料理包的超市。大部分菜谱都假定你要在盒马买料理包，但实际上本地可能根本没开盒马。所以你要修改菜谱，写清楚自己可以在楼下的超市买料理包。|CRAN 清华源|
|集成开发环境 IDE|你实际使用的一套厨具。每种厨房可能有自己最适合的一套厨具，但也有厨具可以用在所有风格的厨房。| R Studio，VS Code，PyCharm|
|终端 Terminal/控制台 Console|原教旨主义，极简厨房，看起来就是个火坑。实际上最开始就是用它做饭的。|Power Shell，cmd，R Terminal|
|脚本 Script|菜谱。||

## 5. MATLAB

### 什么时候用MATLAB？

- 神经数据处理（常用）
  - SPM：有UI的全能工具包，MRI为主
  - Brainstorm：有UI的全能工具包
  - EEGLAB：有UI的脑电工具包
  - NIRS_KIT：有UI的近红外工具包
  - FieldTrip：有UI的全能工具包
  - BrainNet Viewer：有UI的脑模型绘图
- 计算模型&机器学习（一般）
  - Machine Learning Toolbox：自带工具箱，支持SVM、KNN、RF、NB等常用算法
  - Variational Bayesian Analysis：基于变分贝叶斯的计算模型
- 实验呈现（较少）
  - Psychtoolbox：无UI的实验程序编写
- 作图（视情况）
  - 如果你的整个分析流程都在MATLAB中实现，就直接用MATLAB作图
- 普通统计（罕见）
  - 可以，但完全没有必要

### 什么时候避免用MATLAB？

- 当你声明自己使用MATLAB进行数据处理，于是期刊要求提供MATLAB授权证明，而你没有证明
- 需要在不同机器上复现，但是别的机器没有装MATLAB
- 用Psychotoolbox写了实验程序，但是被试机的性能太差

### 怎么用MATLAB？

#### 安装

在网上自行寻找资源，R2018b以上版本，避免a系列版本号（测试版）

##### 实例：安装SPM工具箱

  默认库路径：
  > C:/User/用户名/Documents/MATLAB

  在MATLAB中安装新工具包：

  ![alt text](https://pic1.imgdb.cn/item/68fde3603203f7be00a067c3.png)

- 在网站[下载SPM工具箱](https://www.fil.ion.ucl.ac.uk/spm/software/spm12/)
- 把下载得到的压缩包解压到MATLAB库路径（如：C:/User/用户名/Documents/MATLAB/spm12）
- 在MATLAB中设置路径
- 添加文件夹及子文件夹
    > 不同工具箱对该设置有不同要求，如EEGLAB/FieldTrip需要你运行安装脚本来进行初始化配置
  >
#### 写脚本

- 新建MATLAB脚本（`.m`文件），在里面写代码
- 注意你的**工作路径**！！
  - 所有语言、平台都有工作路径(Current Working Directory)的概念
  - 在工作路径下的文件操作不需要绝对路径，当前路径以`.\`表示
  - 假设工作路径是`F:\Project\learning\`，直接读取`learning.csv`会在工作路径下查找文件(`.\learning.csv`)
  - 无法直接读取其他路径下的文件，需使用绝对路径(`C:\User\HP\Documents\data.csv`)
- 在右侧的变量区查看数据
- 在控制台做小测试
- 使用分节符`%%`控制脚本运行（按节执行，快捷键`Ctrl+Enter`）
- 使用断点、条件断点、逐步执行、步入执行来做调试

## 6. R

### 什么时候用R？

- 数据清洗与整理（预处理）
  - 整理什么样的数据？
    - 实验程序记录的、每个被试的Raw行为数据
    - 问卷星等平台采集的、所有被试的Raw问卷数据  
![原始数据](https://pic1.imgdb.cn/item/68fde3603203f7be00a067c2.png)  

  <img src="https://pic1.imgdb.cn/item/68fde3603203f7be00a067c6.png" alt="原始数据的内容" width="100%">

  - 怎么整理？
    - 剔除没用的变量（如采集时间）
    - 用易懂的方式重新命名变量和值（如`option2.onset.time`→`RT`）
    - 数据过滤与质量检查
    - 使用相同的流程处理所有被试的数据
    - 使用易懂的方式命名新的数据表
  - 整理到什么样子？
    - 每个被试一份预处理过的数据表，所有被试的数据表有相同的格式
    - 一份个体水平的所有被试的数据表（简单拼接）  
  ![个体水平预处理](https://pic1.imgdb.cn/item/68fde3603203f7be00a067c4.png)
    - 一份组水平的汇总数据表（跨被试平均）  
  ![跨被试平均](https://pic1.imgdb.cn/item/68fde57d3203f7be00a06888.png)

- 你能想到的大部分统计功能
  - 统计检验：summarise，correlation，ttest，ANOVA，regression
  - 计算建模：ggdmc，rstan，rjags
- 绘图
  - ggplot2，tidyplots

### 什么时候避免用R？

如果你的数据量非常非常大，R的运算会非常非常慢

### 怎么用R？

#### 环境配置

- 安装R，4.4及以上版本
  - [下载R](https://mirrors.tuna.tsinghua.edu.cn/CRAN/bin/windows/)
  - 为避免权限问题，建议仅为当前用户安装
- （可选）安装Rtools，注意需要与安装的R版本一致
  - [下载Rtools](https://cran.r-project.org/bin/windows/Rtools/)
  - 某些R包需要Rtools编译
- 安装R Studio
  - [下载R Studio](https://posit.co/download/rstudio-desktop/)
  - 真正写代码的地方
- （可选）修改配置文件
  - 打开`我的文档\.Rprofile`
  - 新增一行配置

```R
options("repos" = c(CRAN="https://mirrors.tuna.tsinghua.edu.cn/CRAN/"))
```

#### 写脚本

- 打开R Studio，选择安装好的R
- 新建R脚本(`.R`文件)
- 使用`install.pakcage()`命令安装新的包，`library()`加载包
  
  ```R
  install.package('bruceR')
  library('bruceR')
  ```

- 除语法，其余方面类似MATLAB

## 7. Python

### 什么时候用Python？

- 你能想到的大部分工作，不限于数据分析，都可以用Python实现
- 未来想从事技术工种（包括用研）
- 使用PsychoPy进行实验程序设计
- 使用Python MNE进行遵循神经科学统一规范的分析
- 当作者提供的代码是Python的

### 什么时候避免用Python？

- Python比R、MATLAB语法更复杂，环境配置更麻烦……
- 如果没有明确的需求，可以不用Python

### 怎么使用Python？

- 安装Python
  - [下载Python](https://www.python.org/downloads/)
- 待更新

## 8. Jupyter Lab

### Jupyter是干嘛的？

- Jupyter Lab是一个在浏览器里就可以写代码、运行代码、画图、做笔记、展示结果的多功能平台。
- 支持多种语言，通过内核（Kernel）切换你要使用的语言。
  - **Ju**lia+**Py**thon+**R** = **Ju-pyte-r**
- 和在IDE里写脚本有什么区别？
  
|特点|普通脚本(.py / .m / .R)|Jupyter Notebook|
|----|----|----|
| 运行方式 | 一次运行整个脚本| 可以分块运行（cell）|
| 输出结果 | 只显示最后一行| 每个代码块都可以单独显示输出|
| 适合场景 | 批量计算、最终分析脚本| 探索性分析、可视化、教学、展示|
| 可读性   | 不间断的一整段代码| 对代码块进行可视化分割，支持用Markdown 文本、图片进行详细流程记录|

- Jupyter编辑器界面：markdown（文本）、代码块、代码输出  
  ![Interface](https://pic1.imgdb.cn/item/68fdee3c3203f7be00a06dc0.png)

### 为什么要用Jupyter？

- 文字记录、代码脚本、图片输出全部在一个文档中完成
- 在统一的平台使用不同的Engine
- 当你不需要脚本全部运行，更想按功能/代码块逐步调试、观察结果

### 安装Jupyter

#### Windows系统

- 安装Anaconda：[下载Anaconda](https://www.anaconda.com/download/success)
  - 或者选择安装Miniconda，一个精简发行版
- 使用Anaconda管理环境
- Anaconda配置文件

  ``` yaml
  # 默认位置：C:\User\用户名\.condarc
  channels:
    - conda-forge
    - defaults
  channel_priority: flexible
  show_channel_urls: true

  # 把环境与缓存放在 $HOME
  envs_dirs:
    - ~/.conda/envs
  pkgs_dirs:
    - ~/.conda/pkgs

  # 使用清华镜像
  default_channels:
    - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
    - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
  custom_channels:
    conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
    bioconda:    https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  ```

- 待更新...

#### 命令行

- 安装Python
- 在命令行中安装Jupyter Lab

  ```bash
  mamba install jupyterlab ipykernel
  jupyter lab
  ```

### 使用Jupyter

#### 在浏览器上使用Jupyter

确保安装完成后，启动Jupyter Lab，在浏览器中输入地址：<http://localhost:8888>

## 9. VS Code

### VS Code是干嘛的？

- 轻量编辑器，可以集成写各种不同语言的代码、Markdown文档
- 内置AI功能(GitHub Copilot)，代码生成、自动补全
  - 有钱有闲可以尝试`Codex`(OpenAI的编程AI)
- [下载VS Code](https://code.visualstudio.com/Download)
- 安装`Chinese (Simplified)`、`GitHub Copilot`、`Data Wrangler`插件

### 在VS Code里用Python

- 安装`Python`、`Pylance`插件
- 配置默认Python解释器路径  
  ![配置Python解释器](https://pic1.imgdb.cn/item/68fde57d3203f7be00a06887.png)
  
### 在VS Code里用R

- 在R中安装`languageserver`、`IRkernel`包

  ```R
  install.package(c("languageserver","IRkernel","httpd"))
  #注册Jupyter的R内核
  IRkernel::installspec(displayname="R (Jupyter)")
  ```

- 在VS Code安装`R`、`R Debugger`、`R Extension Pack`插件
- （可选）安装radian
  - 这是一个基于Python的R终端，在VS Code环境下可以代替默认的R终端，有自动补全等功能
  - 配置Rterm（VS Code中使用的R终端）  
  ![配置Rterm](https://pic1.imgdb.cn/item/68fde4d13203f7be00a0684f.png)
    - 如果radian无法显示中文，在配置文件中设置utf8编码
  
```R
# ~/.Rprofile
is_uft8_support <- grepl("UTF-8|utf8", Sys.getenv("LANG"),
ignore.case = TRUE, perl = TRUE) &&
R.version$major >= 4L && 
R.version$minor >= 2.0
if (is_uft8_support) {
	suppressWarnings(Sys.setlocale("LC_ALL", Sys.getenv("LANG")))
}
```
	- 如果在Linux里使用Conda和VS Code但无法启动radian，需要为环境设置额外的启动脚本`run_radian.sh`

```bash
#!/bin/bash
source ~/miniforge3/bin/activate {环境名}
radian --no-site-file
```
	在bash终端为该脚本提供执行权限，

```bash
chmod +x {脚本路径}/run_radian.sh
```
	随后在vscode-r插件设置`r.term.linux`到该脚本。

```json
"r.rterm.linux": "{脚本路径}/run_radian.sh"
```

- 配置VS Code的R插件
  - 配置Rpath  
  ![配置Rpath](https://pic1.imgdb.cn/item/68fde4d13203f7be00a0684e.png)
  - 配置R在VS Code中的画图功能  
  ![设置画图功能](https://pic1.imgdb.cn/item/68fde4d13203f7be00a06850.png)

### 在VS Code里用MATLAB

- 安装`MATLAB`、`matlab-formatter`插件
- 配置MATLABl路径  
  ![配置MATLAB路径](https://pic1.imgdb.cn/item/68fde4d13203f7be00a06851.png)

### 在VS Code里用Jupyter

- 安装`Jupyter`、`Jupyter PowerToys`、`JupyterHub`插件

### 在WSL里用VS Code（推荐）
- 在BIOS里开启CPU虚拟化
- 安装并启用WSL（Windows Subsystem for Linux）功能
- 通过Microsoft Store或者GitHub安装Ubuntu发行版
	- 使用终端安装可以自定义路径与镜像名称
- 在Windows中，配置`C:/User/{用户名}/.wslconfig`
```
[wsl2]
autoProxy=true
localhostForwarding=true
networkingMode=mirrored 
```
- 在WSL中，配置`/etc/wsl.conf`
```
[boot]
systemd=true
[automount]
enabled=true
options="metadata,case=dir,umask=22,fmask=111,cache=mmap"
mountFsTab=true
```
- 把Windows上的项目目录整体挂载到WSL
	- 在用户根目录下新建项目文件夹：`mkdir -p /home/{username}/project`
	- 修改`/etc/fstab`挂载目录
```
{Windows路径} {WSL路径} drvfs rw,uid=1000,gid=1000,metadata 0 0
```
	- 在终端即时挂载：`sudo mount -a`
	- 重载daemon：`sudo systemctl daemon-reload`
- 安装miniforge3（必需）、g++等组件
```bash
sudo apt update
sudo apt install build-essential gfortran libxml2-dev libcurl4-openssl-dev libssl-dev libbz2-dev liblzma-dev
```
- 在Windows侧的VS Code安装WSL插件
- 在VS Code连接到WSL
- 在WSL侧VS Code安装需要的插件
	- 注意配置文件区分Windows侧、WSL侧
	- 注意区分Windows路径、Linux路径
## 10. 使用服务器

### 为什么使用服务器？

如果你懒得进行环境配置、不想安装各种软件，想要一个即开即用的平台

待更新...
  