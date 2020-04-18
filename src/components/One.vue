<template>
  <div class="app">
    <el-form>
      <el-form-item label="输入框1:" class="width">
        <el-input v-model="input" class="ipt-width"></el-input>
        {{inputName}}
      </el-form-item>
      <el-form-item label="输入框2:" class="width">
        <el-input v-model="inputVal" class="ipt-width"></el-input>
        新值：{{ newV }}
        旧值：{{ oldV }}
      </el-form-item>
    </el-form>
    <br><br><br>

    
    <div class="no-center">
      <el-steps :active="activeStep">
        <el-step title="步骤 1" icon="el-icon-edit"></el-step>
        <el-step title="步骤 2" icon="el-icon-upload"></el-step>
        <el-step title="步骤 3" icon="el-icon-picture"></el-step>
      </el-steps>
      <div style="width:100%;height:200px;">
        <template v-if="componentsIsShow.first">
          <FirstStep></firstStep>
        </template>
        <template v-if="componentsIsShow.secend">
          <SecendStep></SecendStep>
        </template>
        <template v-if="componentsIsShow.third">
          <ThirdStep></ThirdStep>
        </template>
      </div>
      <div class="center">
        <el-button @click="changeStep">切换step</el-button>
        
      </div>
    </div>
    <br><br>

    <h1>可拖拽列表</h1>
    <el-table :data="tableData"
      border
      row-key="id"
      align="left">
     <el-table-column v-for="(item, index) in col"
        :key="`col_${index}`"
        :prop="dropCol[index].prop"
        :label="item.label"> 
      </el-table-column>
    </el-table>
    <br>
    <el-table :data="tableDatas"
      border
      row-key="id"
      align="left">
     <el-table-column v-for="(item, index) in cols"
        :key="`col_${index}`"
        :prop="dropCols[index].prop"
        :label="item.label"> 
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import Sortable from 'sortablejs'
import FirstStep from './steps/FirstStep'
import SecendStep from './steps/SecendStep'
import ThirdStep from './steps/ThirdStep'
export default {
  components: {
    FirstStep, SecendStep, ThirdStep
  },
  name: "One",
  data() {
    return {
      msg: "one",
      input:"",

      inputVal:"",
      newV:"",
      oldV:"",



      activeStep:1,
      componentsIsShow: {
        first: true,
        secend: false,
        third: false
      },

      
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar',
      tableData: [
        {
          id: '1',
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 100 弄'
        },
        {
          id: '2',
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 200 弄'
        },
        {
          id: '3',
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 300 弄'
        },
        {
          id: '4',
          date: '2016-05-03',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 400 弄'
        }
      ],
      col: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      dropCol: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      tableDatas: [
        {
          id: '1',
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 100 弄'
        },
        {
          id: '2',
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 200 弄'
        },
        {
          id: '3',
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 300 弄'
        },
        {
          id: '4',
          date: '2016-05-03',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 400 弄'
        }
      ],
      cols: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      dropCols: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      sortableNew:null
    };
  },
  watch: {
    input(val){
      console.log(val);
    },
    inputVal:{
      handler(newVal,oldVal){
        this.newV = newVal;
        this.oldV = oldVal;
      }
    },
    firstName: function (val) {
      console.log(val)
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      console.log(val)
      this.fullName = this.firstName + ' ' + val
    }
  },
  computed: {
    inputName(){
      let name = this.input
      return name ;
    }
  },
  mounted() {
    this.rowDrop()
    this.rowDrops()
    this.columnDrop()
  },
  methods: {
    changeStep(){
      this.activeStep++;
      if(this.activeStep > 3){
        this.activeStep = 1;
      }

      switch (this.activeStep) {
        case 1:
          this.componentsIsShow = {
            first: true,
            secend: false,
            third: false
          }
          break;
        case 2:
          this.componentsIsShow = {
            first: false,
            secend: true,
            third: false
          }
          break;
        case 3:
          this.componentsIsShow = {
            first: false,
            secend: false,
            third: true
          }
          break;
        default:
          break;
      }
    },
    //行拖拽
    rowDrop() {
      const tbody = document.querySelector('.el-table__body-wrapper tbody')
      const _this = this
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0]
          _this.tableData.splice(newIndex, 0, currRow)
        }
      })
    },
    //行拖拽
    rowDrops() {
      const tbody = document.querySelectorAll(
        ".el-table__body-wrapper  tbody"
      )[1];
      this.sortableNew = new Sortable(tbody, {
        sort: true,
        ghostClass: "blue-background-class", // drop placeholder的css类名
        chosenClass: "sortable-chosen", // 被选中项的css 类名
        dragClass: "sortable-drag", // 正在被拖拽中的css类名
        animation: 150
      });
    },
    //列拖拽
    columnDrop() {
      const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: evt => {
          const oldItem = this.dropCol[evt.oldIndex]
          this.dropCol.splice(evt.oldIndex, 1)
          this.dropCol.splice(evt.newIndex, 0, oldItem)
        }
      })
    }
  }
};
</script>
<style scoped>
.el-table {
  max-width: 600px;
}
.width{
  width: 500px;
}
.ipt-width{
  width: 500px;
}
.no-center{
  text-align: left;
}
.no-center .center {
  text-align: center;
}
</style>