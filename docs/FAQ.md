# FAQ

## 怎么用R？

首先确保仔细阅读了本文档关于R的部分，确保自己真的下载了R Studio，然后思考自己想用R做什么，并把诉求告诉ai让ai生成代码（一般ai会告诉你需要改它的代码的哪里，需要仔细看看，如果不懂可以继续问它，有一些基础性问题它也会告诉你，比如#后面跟的文字是对代码的描述）

## 通过conda环境使用R时无法安装R包！

如果是Windows系统，检查是否安装了与R版本一致的Rtools。如果是Linux系统，miniconda/miniforge不带全套编译工具，在R里安装包时可能编译失败，可以改用mamba安装R包：

```bash
mamba install -n {环境名} {R包名} -y
```

注意mamba安装时R包的命名方式为`r-{package}`，如`r-tidyverse`。也可以使用`sudo apt`在系统级安装好编译工具，如`gcc`、`make`等。