# 开发环境搭建

## 安装 Java JDK(Java Development Kit )

1. 注册ORACLE账号：
```
596659597@qq.com
Abin7987~~.
```
2. 下载 JDK
   * oracle 官方下载地址：https://www.oracle.com/java/technologies/downloads/#jdk17-windows
   * java8 下载链接：https://www.oracle.com/java/technologies/downloads/#java8
3. 配置环境变量：

**设置 JAVA_HOME**

- 在“系统变量”中“新建”并输入 JAVA_HOME。
- 将变量值设置为 JDK 安装路径，例如 C:\Program Files\Java\jdk-15.0.2。

**添加到 Path**
- 在“系统变量”中的“Path”变量上点击“编辑”，然后点击“新建”，添加 %JAVA_HOME%\bin。

验证是否安装成功：

![](./验证%20Java%20是否正确安装.png)

对于Java 8，推荐使用Tomcat 8.5.x 或 Tomcat 9.x 版本

## 安装 Tomcat
以下是详细步骤：

1. 下载Tomcat 9：
   * 访问官方下载页面：https://tomcat.apache.org/download-90.cgi
   * 在"Binary Distributions"下的"Core"部分
   * 下载"64-bit Windows zip"版本（文件名类似：apache-tomcat-9.0.85-windows-x64.zip）
2. 安装步骤：
   * 创建目录：建议在 C:\Program Files 下创建 Apache 文件夹
   * 解压下载的zip文件到该目录
   * 解压后的路径应该类似：C:\Program Files\Apache\apache-tomcat-9.0.85
3. 配置环境变量：
   * 新建系统环境变量 CATALINA_HOME，值为Tomcat安装路径
   * 将 %CATALINA_HOME%\bin 添加到 Path 环境变量
4. 测试安装： 当您完成上述步骤后，告诉我，我会帮您：
   * 启动Tomcat服务器
   * 验证服务是否正常运行
   * 访问Tomcat默认页面（默认端口8080）

注意事项：

* 确保下载的是64位版本
* 安装路径最好不要包含空格和中文
* 默认端口8080不要被其他程序占用

验证：

Tomcat服务已经成功启动！我来总结一下验证结果：

1. 服务启动状态：✅ 成功
   * 使用 startup.bat 成功启动
   * 使用 shutdown.bat 关闭服务
   * Java进程正在运行（PID: 9652）
2. 环境配置：✅ 正确
   * CATALINA_BASE: C:\Program Files\Apache\apache-tomcat-9.0.100
   * CATALINA_HOME: C:\Program Files\Apache\apache-tomcat-9.0.100
   * JRE_HOME: C:\Program Files\Java\jdk-1.8
3. Web服务：✅ 正常
   * 已在默认端口 8080 上运行
   * 您可以通过以下方式访问：
     * 浏览器打开：`http://localhost:8080`
     * 或点击上面提供的预览链接

## 安装 Maven

Maven的安装和配置。

首先，您需要：

1. 下载Maven：
   * 访问官方下载页面：https://maven.apache.org/download.cgi
   * 下载 "apache-maven-3.9.6-bin.zip"
2. 安装步骤：
   * 创建目录：C:\Program Files\Apache\maven
   * 解压下载的zip文件到该目录
   * 最终路径应该是：C:\Program Files\Apache\maven\apache-maven-3.9.6
3. 环境变量配置（下载完成后我来帮您配置）：
   * 新建系统变量 MAVEN_HOME，指向Maven安装目录
   * 将 %MAVEN_HOME%\bin 添加到 Path 环境变量
4. 验证：
   * `mvn -version`

* 我注意到您已经有：

* Java 8 安装在：C:\Program Files\Java\jdk-1.8
* Tomcat 9 安装在：C:\Program Files\Apache\apache-tomcat-9.0.100

* 这些都是Maven所需的前提条件，所以Java环境已经准备好了。

## 安装 IDE(Integrated Development Environment)

https://www.jetbrains.com/idea/