<template>
  <div class="app-container">
    <el-form ref="corporationForm"  label-position="left" label-width="90px" :model="corporation" :disabled="operate == 0">
      <el-form-item label="公司名称" prop="name" required>
        <el-input v-model="corporation.name" placeholder="请输入公司名称" />
      </el-form-item>
      <el-form-item label="公司类型" prop="mold" required>
        <el-radio-group v-model="corporation.mold">
          <el-radio-button label="0">集团</el-radio-button>
          <el-radio-button label="1">单体</el-radio-button>
          <el-radio-button label="2">子公司</el-radio-button>
          <el-radio-button label="3">股份制</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="地址" prop="address" required>
        <el-input v-model="corporation.address" />
      </el-form-item>
      <el-form-item label="注册日期" prop="registerDate" required>
        <el-date-picker v-model="corporation.registerDate"></el-date-picker>
      </el-form-item>
      <el-form-item label="开业日期" prop="openDate" required>
        <el-date-picker v-model="corporation.openDate" type="date"></el-date-picker>
      </el-form-item>
      <el-form-item label="法人代表" prop="corporateRepresentative">
        <el-input v-model="corporation.corporateRepresentative" />
      </el-form-item>
      <el-form-item label="行业信息" prop="trade">
        <el-input type="textarea" v-model="corporation.trade" />
      </el-form-item>
      <el-form-item label="备注" prop="memo">
        <el-input type="textarea" v-model="corporation.memo" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    corporation: {
      type: Object,
      default: () => {}
    },
    operate: {
      type: Number,
      default: () => 0
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.app-container {
  position: relative;
  .app-main-container {
    padding: 40px 45px 20px 50px;
    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;
      .postInfo-container-item {
        float: left;
      }
    }
  }
}

</style>