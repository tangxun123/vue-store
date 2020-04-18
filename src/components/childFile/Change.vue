<template>
  <div style="border:">
    <el-input
      v-model="input"
      placeholder="请输入！！！"
      style="width:30%;"
    ></el-input>
    <el-button @click="refresh_btn" type="primary">子组件刷新</el-button>

    <br /><br /><br />
    <!-- 文件图片上传 -->
    <div class="editImg" @click="selectFile">
      <img :src="imgUrl || ''" :onerror="defaultLogo" alt />
      <div class="mask">
        <div class="mask-content">
          <i class="el-icon-picture" />
          <div class="mask-text">修改图片</div>
        </div>
      </div>
    </div>
    <el-upload
      ref="upload"
      class="upload-demo"
      action
      :on-change="fileChange"
      :show-file-list="false"
      accept="image/gif, image/jpeg, image/jpg, image/bmp, image/png"
      :auto-upload="false"
    >
      <el-button size="small" ref="avatarUpload">上传图片</el-button>
      <div
        style="font-size:12px; color:#999999; font-weight:Regular;line-height:24px"
      >
        支持JPG、JPEG、PNG、BMP格式，图片大小在 5M 以内
      </div>
    </el-upload>
  </div>
</template>
<script>
export default {
  inject: ["reload"],
  data() {
    return {
      input: "",

      imgUrl: "",
      defaultLogo: ""
    };
  },
  mounted () {
    this.defaultLogo = 'this.src="' + require("../../assets/logo.png") + '"'; //默认图片
  },
  methods: {
    // <!-- 实现子组件刷新方法 -->
    refresh_btn() {
      if (this.input) {
        this.reload();
        console.log("子组件刷新");
      }
    },

    fileChange(file) {
      console.log(file);
      this.imgUrl = URL.createObjectURL(file.raw);
    },
    selectFile() {
      this.$refs.avatarUpload.$el.click();
      // console.log(this.$refs)
    }
  }
};
</script>
<style scoped>
.editImg {
  width: 300px;
  height: 250px;
  border-radius: 6px;
  margin: 0px auto;
  margin-bottom: 20px;
  position: relative;
}
.editImg > img {
  height: 100%;
  width: 100%;
  border-radius: 6px;
}
.editImg:hover .mask{
  opacity: 1;
}
.editImg > .mask {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  transition: all 0.2s ease-in;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.342);
}
.editImg > .mask i {
  font-size: 42px;
  color: white;
}
.editImg > .mask .mask-text {
  font-size: 17px;
  color: white;
}
.mask-content{
  margin-top: 91.5px;
}
</style>