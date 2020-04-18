<template>
  <div>

              <!-- <el-popover
                placement="right"
                trigger="click"
                popper-class="popover-change"
              >
                <div>
                  <el-button type="text" @click="copy(system_local_dir)"
                    >复制</el-button
                  >
                </div>
                <el-input
                  v-model="system_local_dir"
                  placeholder="system_local_dir"
                  slot="reference"
                />
              </el-popover> -->
  </div>
</template>
<script>
export default {
   props: {
    pushValue: String,
    required: true
  },
  name:"Copy",
  data() {
    return {
      inputValue:this.pushValue,
      isHover: true,
      // time: null
    };
  },
  created () {
    // console.log(this.pushValue)
    // console.log(this.inputValue)
  },
  methods: {
    hover1(data) {
      this.isHover = true;
      this.$emit('childByValue', this.isHover)
    },
    leaver() {
      this.isHover = false;
      this.$emit('childByValue', this.isHover)
    },
    copy(data) {
      var Url2 = data;
      var oInput = document.createElement("input");
      oInput.value = Url2;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.className = "oInput";
      oInput.style.display = "none";
      alert("复制成功");
    }
  }
};
</script>
<style scoped>
.el-input {
  width: 300px;
}
.copytext {
  margin: 10px auto;
  width: 60px;
  height: 40px;
  box-shadow: 0px 0px 6px #ccc;
  position: relative;
  left: 200px;
  bottom: 50px;
  border-radius: 4px;
}
.copytext:before,
.copytext:after {
  position: absolute;
  content: "";
  left: 50%;
  overflow: hidden;
  pointer-events: none;
  -webkit-transform: rotate(45deg);
  -mz-transform: rotate(45deg);
  transform: rotate(45deg);
}
.copytext:before {
  box-shadow: 0px 0px 6px #ccc;
  left: -7px;
  width: 11px;
  height: 11px;
  margin-top: 14px;
}
.copytext:after {
  left: -7px;
  width: 15px;
  height: 15px;
  margin-top: 12px;
  background: #fff;
  box-shadow: none;
}
</style>