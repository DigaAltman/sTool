<template>
  <div class="table-structure">
    <div class="name">{{tableStructure.tableName}}</div>
    <div class="tab-message">
      <div class="charset" title="表对应字符集">{{tableStructure.charset}}</div>
      <div class="engine" title="表格存储引擎">{{tableStructure.engine}}</div>
      <div class="row-format" title="表对应行格式">{{tableStructure.rowFormat}}</div>
      <div class="size" title="数据占用空间">{{tableStructure.dataLength}}byte</div>
      <div class="length" title="表格数据条数">{{tableStructure.rows}}</div>
      <div class="max-size" title="占用空间限制">{{tableStructure.maxDataLength === 0 ? '无限制' : tableStructure.maxDataLength +
        'byte'}}
      </div>
      <div class="index-size" title="索引占用空间">{{tableStructure.indexLength}}byte</div>
      <div class="time" title="表格创建时间">{{formatTime(new Date(tableStructure.createTime))}}</div>
      <div class="time" title="最后更新时间">{{formatTime(new Date(tableStructure.updateTime))}}</div>
    </div>

    <div class="tab-body" v-if="tableStructure.columnDetailList.length > 0">
      <table>
        <tr>
          <th>字段名称</th>
          <th>字段类型</th>
          <th>字段长度</th>
          <th>允许为空</th>
          <th>对应索引</th>
          <th>默认赋值</th>
          <th>字段注释</th>
        </tr>
        <tr v-for="(column,index) in tableStructure.columnDetailList" :index="index">
          <td>{{column.column}}</td>
          <td>{{column.sqlType.includes('(') ? column.sqlType.substr(0, column.sqlType.indexOf("(")) :
            column.sqlType}}
          </td>
          <td>{{column.sqlType.includes('(') ? /.*\((.*)?\)/.exec('varchar(20)')[1] : 0}}</td>
          <td>{{column.allowNull ? '允许' : '不允许'}}</td>
          <td>{{column.key.length > 0 ? `${column.key}(${column.keyName})-${column.indexType}` : ''}}</td>
          <td>{{column.defaultValue}}</td>
          <td>{{column.comment}}</td>
        </tr>
      </table>
    </div>

    <!-- 生成SQL -->
    <div class="generate-body">
    </div>

    <!-- 预览SQL -->
    <div class="view-body">
      <div class="title">映射为SQL</div>
      <div class="body">SELECT course_id, course_name, course_address FROM database WHERE course_id = ?</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TableStructure",
    data() {
      return {
        tableStructure: {
          "tableName": "database",
          "entityName": "Database",
          "engine": "InnoDB",
          "version": 10,
          "rowFormat": "Dynamic",
          "rows": 4,
          "avgRowLength": 4096,
          "dataLength": 16384,
          "maxDataLength": 0,
          "indexLength": 0,
          "dataFree": 0,
          "createTime": 1603676052000,
          "updateTime": 1603804417000,
          "charset": "utf8_general_ci",
          "comment": "",
          "options": "",
          "columnDetailList": [
            {
              "column": "database_id",
              "property": "databaseId",
              "sqlType": "varchar(80)",
              "javaType": "java.lang.String",
              "allowNull": false,
              "keyName": "PRIMARY",
              "seqInIndex": 1,
              "defaultValue": null,
              "collation": "A",
              "indexType": "BTREE",
              "comment": "数据库的id",
              "indexComment": "",
              "extra": "",
              "key": "PRI"
            },
            {
              "column": "database_group_id",
              "property": "databaseGroupId",
              "sqlType": "varchar(80)",
              "javaType": "java.lang.String",
              "allowNull": true,
              "keyName": null,
              "seqInIndex": null,
              "defaultValue": null,
              "collation": null,
              "indexType": null,
              "comment": "对应的数据库组的id",
              "indexComment": null,
              "extra": "",
              "key": ""
            },
            {
              "column": "product_type",
              "property": "productType",
              "sqlType": "int(11)",
              "javaType": "java.lang.Integer",
              "allowNull": false,
              "keyName": null,
              "seqInIndex": null,
              "defaultValue": null,
              "collation": null,
              "indexType": null,
              "comment": "数据库产品类型,0:MySQL,1:Oracle",
              "indexComment": null,
              "extra": "",
              "key": ""
            },
            {
              "column": "url",
              "property": "url",
              "sqlType": "varchar(100)",
              "javaType": "java.lang.String",
              "allowNull": false,
              "keyName": null,
              "seqInIndex": null,
              "defaultValue": null,
              "collation": null,
              "indexType": null,
              "comment": "数据库的jdbc或ojdbc地址",
              "indexComment": null,
              "extra": "",
              "key": ""
            },
            {
              "column": "username",
              "property": "username",
              "sqlType": "varchar(100)",
              "javaType": "java.lang.String",
              "allowNull": false,
              "keyName": null,
              "seqInIndex": null,
              "defaultValue": null,
              "collation": null,
              "indexType": null,
              "comment": "数据库用户名称",
              "indexComment": null,
              "extra": "",
              "key": ""
            },
            {
              "column": "password",
              "property": "password",
              "sqlType": "varchar(100)",
              "javaType": "java.lang.String",
              "allowNull": false,
              "keyName": null,
              "seqInIndex": null,
              "defaultValue": null,
              "collation": null,
              "indexType": null,
              "comment": "数据库用户密码",
              "indexComment": null,
              "extra": "",
              "key": ""
            },
            {
              "column": "database_name",
              "property": "databaseName",
              "sqlType": "varchar(100)",
              "javaType": "java.lang.String",
              "allowNull": false,
              "keyName": null,
              "seqInIndex": null,
              "defaultValue": null,
              "collation": null,
              "indexType": null,
              "comment": "选择的数据库名称",
              "indexComment": null,
              "extra": "",
              "key": ""
            },
            {
              "column": "security_password",
              "property": "securityPassword",
              "sqlType": "varchar(200)",
              "javaType": "java.lang.String",
              "allowNull": false,
              "keyName": null,
              "seqInIndex": null,
              "defaultValue": null,
              "collation": null,
              "indexType": null,
              "comment": "数据库密码加密后",
              "indexComment": null,
              "extra": "",
              "key": ""
            },
            {
              "column": "create_time",
              "property": "createTime",
              "sqlType": "datetime",
              "javaType": "java.sql.Date",
              "allowNull": true,
              "keyName": null,
              "seqInIndex": null,
              "defaultValue": "CURRENT_TIMESTAMP",
              "collation": null,
              "indexType": null,
              "comment": "创建时间",
              "indexComment": null,
              "extra": "",
              "key": ""
            },
            {
              "column": "update_time",
              "property": "updateTime",
              "sqlType": "datetime",
              "javaType": "java.sql.Date",
              "allowNull": true,
              "keyName": null,
              "seqInIndex": null,
              "defaultValue": "CURRENT_TIMESTAMP",
              "collation": null,
              "indexType": null,
              "comment": "更新时间",
              "indexComment": null,
              "extra": "",
              "key": ""
            },
            {
              "column": "version",
              "property": "version",
              "sqlType": "bigint(20)",
              "javaType": "java.math.BigDecimal",
              "allowNull": false,
              "keyName": null,
              "seqInIndex": null,
              "defaultValue": null,
              "collation": null,
              "indexType": null,
              "comment": "版本号",
              "indexComment": null,
              "extra": "",
              "key": ""
            }
          ]
        }
      }
    },
    methods: {
      formatTime(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();

        return [year, month, day].map(this.formatNumber).join('-') + ' ' + [hour, minute, second].map(this.formatNumber).join(':');
      },
      formatNumber(n) {
        n = n.toString();
        return n[1] ? n : '0' + n
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table-structure {
    position: relative;
    width: 80%;
    color: #fff;
    margin: 20px auto;

    .name {
      text-align: left;
      font-size: 40px;
      letter-spacing: -2px;
      font-weight: 500;
    }

    .tab-message {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;

      div {
        padding: 5px 10px;
        border: 1px solid #FFE9D4;
        margin-top: 15px;
        margin-right: 15px;
        font-size: 18px;
        font-weight: 600;
      }

      .charset {
        background-color: #098808;
      }

      .engine {
        background-color: #6f6d6d;
      }

      .row-format {
        background-color: #5a03e2;
      }

      .size {
        background-color: #009fff;
      }

      .length {
        background-color: #bbbbbb;
      }

      .max-size {
        background-color: #b3b70d;
      }

      .index-size {
        background-color: #ff370a;
      }

      .time {
        background-color: blueviolet;
      }
    }


    .tab-body {
      margin-top: 30px;

      table {
        box-sizing: border-box;
        tr {

          th {
            font-weight: 600;
            letter-spacing: -1px;
            min-width: 100px;
            padding: 5px 10px;
            box-sizing: border-box;
            background-color: #f8352d;
            border: 1px solid #ccc;
            text-align: left;
          }

          td {
            padding: 5px 10px;
            border: 1px solid #ccc;
            text-align: left;
          }
        }
      }
    }

    .view-body {
      margin-top: 30px;
      text-align: left;
    }
  }
</style>
