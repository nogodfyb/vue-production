<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>生产计划安排</el-breadcrumb-item>
      <el-breadcrumb-item>计划列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-button type="primary" @click="addDialogVisible=true">添加计划</el-button>
      <!--        计划列表-->
      <el-table :data="productList" border stripe height="700">
        <el-table-column type="index"></el-table-column>
        <el-table-column label="产品编号" prop="code"></el-table-column>
        <el-table-column label="产品名称" prop="name"></el-table-column>
        <el-table-column label="产品单价/元" prop="unitPrice"></el-table-column>
      </el-table>
    </el-card>
    <el-dialog
      :visible.sync="addDialogVisible"
    width="50%"
    title="添加计划">
<!--      主体区域-->
      <el-form label-width="100px">
        <el-form-item label="计划批次号" >
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <!--      底部区域-->
      <span slot="footer" class="dialog-footer">
    <el-button @click="addDialogVisible = false">取 消</el-button>
    <el-button type="primary"  >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  created () {
    this.getProductList()
  },
  data () {
    return {
      productList: [],
      addDialogVisible: false,
      options: [{
        value: '202005',
        label: '计划批次1'
      }, {
        value: '202006',
        label: '计划批次2'
      }, {
        value: '202007',
        label: '计划批次3'
      }],
      value: '',
      planForm: {},
      productionOptions: [
        { productId: 1001, label: '' }
      ]
    }
  },
  watch: {
    value: function (val) {
      console.log(val)
    }
  },
  methods: {
    // 获取产品列表
    async getProductList () {
      const { data: res } = await this.$http.get('product/list')
      if (res.status !== 200) {
        return this.$message.error('获取产品列表失败！')
      }
      this.productList = res.data
    }
  }
}
</script>

<style scoped>

</style>
