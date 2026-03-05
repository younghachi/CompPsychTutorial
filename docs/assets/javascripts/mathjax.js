// MathJax 3 配置
// 支持行内公式 ($...$) 和块级公式 ($$...$$)

window.MathJax = {
  tex: {
    // 行内公式分隔符
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    // 块级公式分隔符
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    // 允许使用物理包等功能
    packages: {'[+]': ['ams', 'boldsymbol', 'physics']},
    // 自动编号
    tags: 'ams',
    // 宏定义（可选）
    macros: {
      // 认知科学常用符号
      RT: '\\mathrm{RT}',
      ACC: '\\mathrm{ACC}',
      drift: 'v',
      boundary: 'a',
      nondecision: 't_0',
      // 统计常用
      E: '\\mathbb{E}',
      Var: '\\mathrm{Var}',
      SD: '\\mathrm{SD}',
      SE: '\\mathrm{SE}',
      CI: '\\mathrm{CI}',
      // 机器学习/强化学习
      reward: 'R',
      value: 'V',
      policy: '\\pi',
      state: 's',
      action: 'a'
    }
  },
  svg: {
    fontCache: 'global'
  },
  options: {
    // 跳过特定元素的渲染
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    // 处理忽略的内容
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process'
  },
  startup: {
    // 页面加载完成后执行
    pageReady: () => {
      return MathJax.startup.defaultPageReady().then(() => {
        console.log('MathJax 3 初始化完成');
      });
    }
  },
  // 加载的扩展包
  loader: {
    load: ['[tex]/ams', '[tex]/boldsymbol']
  }
};

// 与 MkDocs Material 的即时导航兼容
// 处理动态加载的内容
document.addEventListener('DOMContentLoaded', () => {
  // 监听 MkDocs 的即时导航事件
  if (typeof app !== 'undefined' && app && app.location$) {
    app.location$.subscribe(() => {
      // 页面切换后重新渲染数学公式
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
      }
    });
  }
});

// 备用：监听所有可能的动态内容加载
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length > 0) {
      // 检测到新内容，延迟渲染以确保 DOM 就绪
      setTimeout(() => {
        if (window.MathJax && window.MathJax.typesetPromise) {
          window.MathJax.typesetPromise();
        }
      }, 100);
    }
  });
});

// 启动观察器
observer.observe(document.body, {
  childList: true,
  subtree: true
});