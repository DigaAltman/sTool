<template>
  <div class="my-code">
    <div class="code" v-for="(item,index) in list" :index="index">
      <div class="code-header">
        <div class="btn-group">
          <div style="background-color: red;"></div>
          <div style="background-color: yellow;"></div>
          <div style="background-color: green;"></div>
        </div>
      </div>
      <div class="filename">{{item.fileName}}.{{item.codeType.toLowerCase()}}</div>
      <div class="code-body">
         <pre v-highlightjs>
            <code :class="item.codeType.toLowerCase()">
              {{item.body}}
            </code>
         </pre>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Code.vue",
    data() {
      return {
        // 存储数据文件的数组
        list: [
          {
            "codeType": "XML",
            "fileName": "pom",
            "body": "\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n    \n    <groupId>org.example</groupId>\n    <artifactId>WDNMD</artifactId>\n    <version>0.0.1.RELEASE</version>\n    <packaging>jar</packaging>\n\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>2.0.0.RELEASE</version>\n        <relativePath/>\n    </parent>\n\n    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n        <java.version>1.8</java.version>\n        <mysql.version>5.1.47</mysql.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.mybatis.spring.boot</groupId>\n            <artifactId>mybatis-spring-boot-starter</artifactId>\n            <version>1.3.2</version>\n        </dependency>\n        <dependency>\n            <groupId>com.github.pagehelper</groupId>\n            <artifactId>pagehelper-spring-boot-starter</artifactId>\n            <version>1.2.5</version>\n        </dependency>\n\n    </dependencies>\n</project>\n"
          }, {
            "codeType": "YAML",
            "fileName": "application",
            "body": "\nserver:\n  port: 8080\n\nspring:\n  datasource:\n    url: jdbc:mysql://localhost:3306/mysql\n    username: root\n    password: 1234\n    driver-class-name: com.mysql.jdbc.Driver\n\nmybatis:\n    mapper-locations: classpath:mybatis/*.xml\n    type-aliases-package: org.example.pojo\n\npagehelper:\n    helperDialect: MYSQL\n    reasonable: true\n    supportMethodsArguments: true\n    params: count=countSql\n    returnPageInfo: check\n\n"
          }, {
            "codeType": "JAVA",
            "fileName": "FoodUserMapper",
            "body": "\npackage org.example.mapper;\n\nimport java.util.List\nimport org.example.pojo.FoodUser\n\n\npublic class FoodUserMapper {\n\n    /**\n     * 基于主键字段 [主键id] 查询\n     * @param id\n     * @return 返回主键id的结果\n     */\n    FoodUser selectByPrimary(String id);\n\n\n    /**\n     * 基于主键字段 [主键id] 进行修改操作\n     * @param id\n     * @return 返回数据库影响条数\n     */\n    int updateByPrimary(String id);\n\n\n    /**\n     * 基于主键字段 [主键id] 进行删除操作\n     * @param id\n     * @return 返回数据库影响条数\n     */\n    int deleteByPrimary(String id);\n\n\n    /**\n     * 选择性插入对应字段的数据\n     * @param foodUser\n     * @return 返回数据库影响条数\n     */\n    int insertSelective(FoodUser foodUser);\n\n\n    /**\n     * 插入全部字段对应的数据\n     * @param foodUser\n     * @return 返回数据库影响条数\n     */\n    int insert(FoodUser foodUser);\n\n\n    /**\n     * 基于 [用户名] 字段查询,此方法走唯一索引\n     * @param username\n     * @return 返回符合条件的唯一一条结果\n     */\n    FoodUser selectByUsername(String username);\n\n\n    /**\n     * 是否包含 [用户名] 字段对应的结果,此方法走唯一索引\n     * @param username\n     * @return 返回结果 > 0表示数据已经存在\n     */\n    int containByUsername(String username);\n\n\n    /**\n     * 基于实体类进行条件查询\n     * @param foodUser\n     * @return 返回符合条件的一条或多条数据\n     */\n    List<FoodUser> selectByExampleEntity(FoodUser foodUser);\n}\n"
          }, {
            "codeType": "XML",
            "fileName": "FoodUserMapper",
            "body": "\n<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE mapper PUBLIC \n\t\"-//mybatis.org//DTD Mapper 3.0//EN\" \n\t\"http://mybatis.org/dtd/mybatis-3-mapper.dtd\">\n<mapper namespace=\"org.example.mapper.FoodUserMapper\">\n\n  <resultMap id=\"generalMap\" type=\"org.example.pojo.fooduser\">\n    <!-- 主键索引, 建议使用这个字段作为条件进行查询 -->\n    <id property=\"id\" column=\"id\"/>\n\n    <!-- 唯一索引, 建议使用这个字段作为条件进行查询 -->\n    <result property=\"username\" column=\"username\"/>\n\n    <result property=\"password\" column=\"password\"/>\n    <result property=\"nickname\" column=\"nickname\"/>\n    <result property=\"realname\" column=\"realname\"/>\n    <result property=\"face\" column=\"face\"/>\n    <result property=\"mobile\" column=\"mobile\"/>\n    <result property=\"email\" column=\"email\"/>\n    <result property=\"sex\" column=\"sex\"/>\n    <result property=\"birthday\" column=\"birthday\"/>\n    <result property=\"createTime\" column=\"create_time\"/>\n    <result property=\"updateTime\" column=\"update_time\"/>\n  </resultMap>\n\n\n  <sql id=\"generalSql\">\n    id,username,password,nickname,realname,face,mobile,email,sex,birthday,create_time,update_time\n  </sql>\n\n  <!--根据主键进行查询,推荐使用. 查询结果最多只有一条数据-->\n  <select id=\"selectByPrimary\" resultMap=\"generalMap\" parameterType=\"java.lang.String\" >\n    SELECT <include refid=\"generalSql\"/> FROM food_user WHERE id = #{id}\n  </select>\n\n  <!--根据主键选择性修改数据, 推荐使用-->\n  <update id=\"updateByPrimary\" resultType=\"int\" parameterType=\"java.lang.String\" >\n    UPDATE food_user\n    <set>\n      <if test=\"id != null\">id = #{id},</if>\n      <if test=\"username != null\">username = #{username},</if>\n      <if test=\"password != null\">password = #{password},</if>\n      <if test=\"nickname != null\">nickname = #{nickname},</if>\n      <if test=\"realname != null\">realname = #{realname},</if>\n      <if test=\"face != null\">face = #{face},</if>\n      <if test=\"mobile != null\">mobile = #{mobile},</if>\n      <if test=\"email != null\">email = #{email},</if>\n      <if test=\"sex != null\">sex = #{sex},</if>\n      <if test=\"birthday != null\">birthday = #{birthday},</if>\n      <if test=\"createTime != null\">create_time = #{createTime},</if>\n      <if test=\"updateTime != null\">update_time = #{updateTime},</if>\n    </set>\n    WHERE id = #{id}\n  </update>\n\n  <!--根据主键删除数据-->\n  <delete id=\"deleteByPrimary\" resultType=\"int\" parameterType=\"java.lang.String\" >\n    DELETE FROM food_user WHERE id = #{id} LIMIT 1\n  </delete>\n\n  <!--添加所有字段对应的数据-->\n  <insert id=\"insert\" resultType=\"int\" parameterType=\"org.example.pojo.fooduser\" >\n    INSERT INTO food_user(id,username,password,nickname,realname,face,mobile,email,sex,birthday,create_time,update_time) VALUES(#{id},#{username},#{password},#{nickname},#{realname},#{face},#{mobile},#{email},#{sex},#{birthday},#{createTime},#{updateTime})\n  </insert>\n\n  <!--选择性的添加字段数据-->\n  <insert id=\"insertSelective\" resultType=\"int\" parameterType=\"org.example.pojo.fooduser\" >\n    INSERT INTO food_user(\n    <trim prefix=\"(\" suffix=\")\" suffixOverrides=\",\" >\n      <if test=\"id != null\" >\n        id\n      </if>\n      <if test=\"username != null\" >\n        username\n      </if>\n      <if test=\"password != null\" >\n        password\n      </if>\n      <if test=\"nickname != null\" >\n        nickname\n      </if>\n      <if test=\"realname != null\" >\n        realname\n      </if>\n      <if test=\"face != null\" >\n        face\n      </if>\n      <if test=\"mobile != null\" >\n        mobile\n      </if>\n      <if test=\"email != null\" >\n        email\n      </if>\n      <if test=\"sex != null\" >\n        sex\n      </if>\n      <if test=\"birthday != null\" >\n        birthday\n      </if>\n      <if test=\"createTime != null\" >\n        create_time\n      </if>\n      <if test=\"updateTime != null\" >\n      </if>\n    </trim>\n    <trim prefix=\"VALUES (\" suffix=\")\" suffixOverrides=\",\" >\n      <if test=\"id != null\" >\n        #{id},\n      </if>\n      <if test=\"username != null\" >\n        #{username},\n      </if>\n      <if test=\"password != null\" >\n        #{password},\n      </if>\n      <if test=\"nickname != null\" >\n        #{nickname},\n      </if>\n      <if test=\"realname != null\" >\n        #{realname},\n      </if>\n      <if test=\"face != null\" >\n        #{face},\n      </if>\n      <if test=\"mobile != null\" >\n        #{mobile},\n      </if>\n      <if test=\"email != null\" >\n        #{email},\n      </if>\n      <if test=\"sex != null\" >\n        #{sex},\n      </if>\n      <if test=\"birthday != null\" >\n        #{birthday},\n      </if>\n      <if test=\"createTime != null\" >\n        #{createTime},\n      </if>\n      <if test=\"updateTime != null\" >\n      </if>\n    </trim>\n\n  </insert>\n\n  <!--基于唯一索引查询, 查询字段对应的数据是否已存在-->\n  <select id=\"selectByUsername\" resultMap=\"generalMap\" parameterType=\"java.lang.String\" >\n    SELECT <include refid=\"generalSql\"/> FROM food_user WHERE username = #{username}\n  </select>\n\n  <!--基于唯一索引查询, 判断数据是否已经存在数据库中-->\n  <select id=\"containByUsername\" resultMap=\"int\" parameterType=\"java.lang.String\" >\n    SELECT COUNT(1) FROM food_user WHERE username = #{username}\n  </select>\n\n  <!--基于实体对象模型进行查询-->\n  <select id=\"selectByExampleEntity\" resultMap=\"generalMap\" parameterType=\"org.example.pojo.fooduser\" >\n        SELECT <include refid=\"generalSql\"/> FROM food_user\n    <where>\n      <if test=\"id != null\">id = #{id}</if>\n      <if test=\"username != null\">username = #{username}</if>\n      <if test=\"password != null\">password = #{password}</if>\n      <if test=\"nickname != null\">nickname = #{nickname}</if>\n      <if test=\"realname != null\">realname = #{realname}</if>\n      <if test=\"face != null\">face = #{face}</if>\n      <if test=\"mobile != null\">mobile = #{mobile}</if>\n      <if test=\"email != null\">email = #{email}</if>\n      <if test=\"sex != null\">sex = #{sex}</if>\n      <if test=\"birthday != null\">birthday = #{birthday}</if>\n      <if test=\"createTime != null\">create_time = #{createTime}</if>\n      <if test=\"updateTime != null\">update_time = #{updateTime}</if>\n    </where>\n  </select>\n\n\n</mapper>      \n"
          }, {
            "codeType": "JAVA",
            "fileName": "FoodUser",
            "body": "\npackage xxx.xxx.entity;\n\nimport lombok.Data;\n\nimport java.io.Serializable;\nimport java.sql.Date;\n\n/**\n * @date        2020-10-25 20:53:42\n * @description food_user,存储引擎:InnoDB,字符集:utf8_general_ci\n */\npublic class FoodUser implements Serializable {\n\n\t/**\n\t * 所属索引[PRIMARY] {'类型': PRI,'结构':BTREE,'顺序':1,'备注':}\n\t * 主键id\n\t */\n\tprivate\tString\tid;\n\n\t/**\n\t * 所属索引[uni_username] {'类型': UNI,'结构':BTREE,'顺序':1,'备注':}\n\t * 用户名\n\t */\n\tprivate\tString\tusername;\n\n\t/**\n\t * 密码\n\t */\n\tprivate\tString\tpassword;\n\n\t/**\n\t * 昵称\n\t */\n\tprivate\tString\tnickname;\n\n\t/**\n\t * 真实姓名\n\t */\n\tprivate\tString\trealname;\n\n\t/**\n\t * 头像图片URL地址\n\t */\n\tprivate\tString\tface;\n\n\t/**\n\t * 手机号\n\t */\n\tprivate\tString\tmobile;\n\n\t/**\n\t * 邮箱地址\n\t */\n\tprivate\tString\temail;\n\n\t/**\n\t * 性别, 0:男,1:女,2:无\n\t */\n\tprivate\tInteger\tsex = 2;\n\n\t/**\n\t * 日期\n\t */\n\tprivate\tDate\tbirthday;\n\n\t/**\n\t * 创建时间\n\t */\n\tprivate\tDate\tcreateTime;\n\n\t/**\n\t * 最后一次更新时间\n\t */\n\tprivate\tDate\tupdateTime;\n}\n"
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-code {
    font-family: Menlo, Dejavu Sans Mono, 苹方, 微软雅黑;
    position: relative;
    width: 100%;
    height: 100%;

    .code {
      position: relative;
      width: 80%;
      margin: 10px auto;
      border-radius: 10px 10px 0px 0px;
      background-color: #282c34;

      .code-header {
        height: 30px;
        width: 100%;
        border-radius: 10px 10px 0px 0px;
        background-color: #323232;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .btn-group {
          width: 70px;
          padding-left: 10px;
          display: flex;
          justify-content: space-around;
          align-items: center;

          div {
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }
        }
      }

      .filename {
        border-top: 1px solid #444242;
        text-align: left;
        font-size: 17px;
        color: #fff;
        padding-left: 10px;
      }

      .code-body {
        text-align: left;
        padding: 0px 10px 10px 10px;
        font-size: 15px;
        border: 2px solid #323232;
        border-top: none;
        box-sizing: border-box;
      }
    }
  }


  .xml {
    background-color: #f9f9f9;
    color: #323232;
  }

  .yaml {
    background-color: #f9f9f9;
    color: #323232;
  }

  .java {
    background-color: #f9f9f9;
    color: #323232;
  }
</style>
