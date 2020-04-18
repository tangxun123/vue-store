<template>
  <div class="app">
    <!-- 接口 -->
    <ol>
      <li v-for="item in data" :key="item.count">{{ item.name }}</li>
    </ol>
    <!-- 树形结构 -->
    <div>
      <el-tree
        :data="dataTre"
        :props="defaultProps"
        @node-click="handleNodeClick"
      ></el-tree>
    </div>
    <!-- 自定义指令 -->
    <input type="text" v-focus>
    <!-- mockJs -->
  </div>
</template>
<script>
// import https from "../http";
import Axios from "axios";
export default {
  name: "index",
  data() {
    return {
      aa:"",
      data: [],
      dataTre: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                  children: [
                    {
                      label: "四级 1-1-1",
                      children: [
                        {
                          label: "五级 1-1-1"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  // 自定义指令
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  },
  created() {
    this.get();
    this.mockData();
    // console.log(this.dataTre);
    this.decompose(this.dataTre);
  },
  methods: {
    // 树型数组　递归
    decompose(data) {
      data.forEach(item => {
        console.log(item.label);
        if (item.children) {
          this.decompose(item.children);
        }
      });
    },
    get() {
      Axios("/v2/restaurant/category?latitude=24.430489&longitude=118.115857")
      .then(res => {
        if (res.status === 200) {
          this.data = res.data;
        }
      })
      .catch(res => {
        console.log(res);
        this.$message.error("失败");
      });
    },
    mockData() {
      Axios("/root/login/checkMemberLogin")
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          this.data = res.data;
        }
      })
      .catch(res => {
        console.log(res);
        this.$message.error("失败");
      });
    },

    handleNodeClick(data) {
      console.log(data);
    }
  }
};
</script>
<style scoped >
ul {
  width: 100px;
  text-align: center !important;
  /* list-style: none; */
}
</style>