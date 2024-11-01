# 基于SSM框架做项目开发总结

## Mybatis

### 1. 阿里巴巴 链接池 mybatis-plus jdbc 配置

```
<!-- 1. 配置数据源 -->
<bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
    <property name="driverClassName" value="com.mysql.cj.jdbc.Driver"/>
    <property name="url" value="jdbc:mysql://127.0.0.1:3060"/>
    <property name="username" value="123"/>
    <property name="password" value="123"/>
    <property name="initialSize" value="5"/>
    <property name="maxActive" value="20"/>
</bean>
```

### 2. 在 MyBatis 的 XML 映射文件中使用 `CDATA` 是为了确保包含特殊字符的 SQL 语句能够被正确处理。XML 解析器在解析文档时，会将 < 和 & 等字符视为特殊字符，因为它们在 XML 中具有特定的含义。如果 SQL 语句中包含这些字符，而没有进行适当处理，就会导致解析错误。

以下是关于 MyBatis 中 `CDATA` 的使用说明：

保留原始字符：`CDATA` 允许您在 XML 文件中包含不被解析的文本数据，例如 SQL 语句中的特殊字符 `<、>` 和 `&` 等。这些字符在 `CDATA` 区段内不会被 XML 解析器当作标记解析，从而避免了解析错误
。

简化转义操作：使用 `CDATA` 可以避免对 SQL 语句中的每个特殊字符进行逐一转义，简化了编写和维护 SQL 语句的工作量
。

使用示例：在 MyBatis 映射文件中，如果 SQL 语句包含特殊字符，可以将这些语句包裹在 `<![CDATA[ ... ]]>` 标记内。例如：

```
<if test="end_time != null and end_time.trim()!=''">
    and timeFormat <![CDATA[ <= ]]> #{end_time}
</if>
```

## 生产打包关闭 junit

clean install -U -D maven.test.skip=true 这个命令的意思是：

* clean：这个目标会删除 target 目录下的所有生成的文件，这通常包括编译后的 .class 文件和打包后的 .jar 或 .war 文件等。
* install：这个目标会将项目打包并安装到本地仓库中，这样其他项目就可以将此项目作为依赖项。
* -U：这个参数的意思是 "Update Snapshots"，它会强制 Maven 检查并更新所有快照版本的依赖项（即版本号以 -SNAPSHOT 结尾的依赖项）。
* -D：这个参数后面跟随的是属性定义，用于在命令行中设置或覆盖 Maven 属性。
* maven.test.skip=true：这是一个 Maven 属性，设置为 true 表示跳过测试编译和执行阶段。也就是说，在构建过程中，Maven 不会运行任何测试用例。