<template>
  <div>
    <div>
      <el-button type="danger" round icon="el-icon-close" @click="del">删除</el-button>
      <el-button type="success" round icon="el-icon-circle-plus-outline" @click="add">添加</el-button>
      <el-button type="primary" round icon="el-icon-search" @click="query">查询</el-button>
      <el-button type="primary" round icon="el-icon-orange" @click="modify">修改</el-button>
    </div>
    <div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="mallTypeId"
          label="种类ID"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="种类名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="addDate"
          label="添加日期"
          width="120">
          <template slot-scope="scope">{{ scope.row.addDate }}</template>
        </el-table-column>
        <el-table-column
          prop="modifyDate"
          label="修改日期"
          width="120">
          <template slot-scope="scope">{{ scope.row.modifyDate }}</template>
        </el-table-column>
        <el-table-column
          prop="goodsCounts"
          label="现有商品数"
          width="120">
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="添加新类别"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="类别名称">
          <el-input
            type="text"
            placeholder="请输入类别名称"
            v-model="form.name"
            maxlength="10"
            show-word-limit
          >
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible=false">取 消</el-button>
        <el-button type="primary" @click="addConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>

import {addMallType,getMallTypeList} from '../../../api/data'
export default {
  name : 'mallTypeManage',
  data (){
    return {
      dialogVisible: false,
      tableData:[
        { 
          mallTypeId:'0001',
          name:'五金',
          addDate:'2020-10-22',
          modifyDate:'2020-10-22',
          goodsCounts:'100',
        }
      ],
      multipleSelection: [],
      form: {
        name: ''
      }
    }
  },
  mounted(){
    console.log('@@@@@@@@@@ getMallTypeList')
    getMallTypeList().then((res)=>{
      const {code,data} = res.data
      if(code === 20000){
        this.tableData = data.tableData
      }
      console.log(res)
    })
  },
  methods:{
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    del(){
      console.log('del');
    },
    add(){
      this.form.name = '';
      console.log('add');
      this.dialogVisible = true;
    },
    addConfirm() {
      console.log('addconfirm');
      console.log(this.form.name);
      // this.dialogVisible = true;
      addMallType().then((res)=>{
        const {code,data} = res.data
        if(code === 20000){
          this.tableData = data.tableData
        }
        console.log(res)
      })
    },
    query(){
      console.log('query');
    },
    modify(){
      console.log('modify');
    }
  }
  
}
</script>
