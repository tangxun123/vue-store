<template>
  <div class="app">
    <div>
      <!-- lazy 修饰符  在“change”时而非“input”时更新 -->
      <input type="text" v-model.lazy="input" />---{{ input }}
    </div>
    <br />
    <info :putString="string" :putAry="ary" v-on:addFont="addFontsize"></info>
    <info></info>
    <info></info>

    <br /><br /><br />
    <div>
      <d2-crud
        :columns="columns"
        :data="data"
        :options="options"
        :loading="loading"
        :loading-options="loadingOptions"
        :index-row="indexRow"
        :selection-row="selectionRow"
        @d2-data-change="handleDataChange"
        :pagination="pagination"
        @pagination-current-change="paginationCurrentChange"
        :form-options="formOptions"
        @select="select"
        @select-all="selectAll"
        @cell-click="cellClick"
        @updateRow="updateRow"


        edit-title="我的修改"
        :edit-template="editTemplate"
        @dialog-open="handleDialogOpen"
        @row-edit="handleRowEdit"
        @dialog-cancel="handleDialogCancel"
      />
    </div>
    <el-input v-model.number="test"></el-input>
  </div>
</template>
<script>
import info from "../myFile/info";
import MyTag from "./MyTag";
export default {
  name: "Three",
  components: {
    info,
    MyTag
  },
  data() {
    return {
      test:"",
      input: "",
      input1: 0,
      string: "随时变化的句子．",
      ary: [1, 2, 3, 4, 5],
      fontSize: 16,

      // 表头数据
      columns: [
        {
          title: "日期",
          key: "date"
        },
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "地址",
          key: "address"
        },
        {
          title: "标签",
          key: "tag",
          filters: [
            { text: "家", value: "家" },
            { text: "公司", value: "公司" }
          ],
          filterMethod(value, row) {
            return row.tag === value;
          },
          filterPlacement: "bottom-end"
        },
        {
          title: "检查状态（点击可修改）",
          key: "check",
          component: {
            name: MyTag,
            props: {
              myProps: "我是通过props传过来的数据！"
            }
          }
        }
      ],
      // 列表显示的数据
      data: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家",
          check: false
        },
        {
          date: "2013-06-12",
          name: "王二虎",
          address:
            "上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄",
          tag: "公司",
          check: true
        },
        {
          date: "2013-12-11",
          name: "王大虎",
          address:
            "上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄",
          tag: "公司",
          check: false
        },
        {
          date: "2013-06-12",
          name: "王二虎",
          address:
            "上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄",
          tag: "公司",
          check: true
        },
        {
          date: "2013-12-11",
          name: "王大虎",
          address:
            "上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄",
          tag: "公司",
          check: false
        }
      ],
      // 基础配置
      options: {
        stripe: true,
        border: true,
        // height:"200px",
        // maxHeight: "300px",
        // showHeader:false,
        highlightCurrentRow: true,
        emptyText: "本次为空", // 列表数组数据为空时,的提示语..实现自定义提示
        tooltipEffect: "dark",

        // 行的 className 的回调方法
        rowClassName: function({ row, rowIndex }) {
          // console.log({row,rowIndex})
          // console.log(row)
          // console.log(rowIndex)
          if (rowIndex === 0) {
            return "name-one";
          } else if (rowIndex === 1) {
            return "name-two";
          }
          // return "name-row" // 为所有行统一设置样式类
        },
        // 单元格的 className 的回调方法
        cellClassName: function({ row, column, rowIndex, columnIndex }) {
          // console.log({row, column, rowIndex, columnIndex})
          // console.log(row)
          // console.log(rowIndex)
          // console.log(column)
          // console.log(columnIndex)
          return "name-all"; // 为所有单元格统一设置样式类
        }
      },
      // 自定义loading
      loading: false,
      loadingOptions: {
        text: "拼命加载中...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.55)"
      },
      // 列宽拖动
      indexRow: {
        title: "序号",
        resizable: true // 可拖动改变列宽 配合options设置border为true
      },
      selectionRow: {
        title: "11",
        resizable: true // 可拖动改变列宽 配合options设置border为true
      },
      // 分页器
      pagination: {
        currentPage: 1,
        pageSize: 5,
        total: 11,
        background: true,
      },
      formOptions: {
        labelWidth: "120px"
      }
    };
  },
  mounted () {
    let myData = this.data;
    this.data = [];
    this.loading = true;
    setTimeout(() => {
      this.data = myData;
      this.loading = false;
    }, 3000);
  },
  methods: {
    handleDataChange(data) {
      console.log(data);
    },
    paginationCurrentChange(currentPage) {
      this.pagination.currentPage = currentPage;
      // this.fetchData();
    },
    fetchData() {
      res = {
        list: this.data,
        page: {
          total: 11
        }
      };
      this.data = res.list;
      this.pagination.total = res.page.total;
    },
    select(selection, row) {
      console.log(selection);
      console.log(row);
    },
    selectAll(selection) {
      console.log(selection);
    },
    cellClick(row, column, cell, event) {
      console.log(row, column, cell, event);
    },
    updateRow(index,row) {
      console.log(index,row);
    },


    addFontsize(a) {
      console.log(a);
      this.fontSize += 0.5;
    }
  }
};
</script>
<style scoped>
.name-two,
.name-two {
  height: 50px !important;
}
</style>