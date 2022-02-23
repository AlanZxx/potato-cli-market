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
        v-loading.fullscreen.lock="fullscreenLoading"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="typeId"
          label="种类ID"
          width="120">
        </el-table-column>
        <el-table-column
          prop="typeName"
          label="种类名称"
          width="120">
        </el-table-column>
        <el-table-column
          label="添加日期"
          width="120">
          <template slot-scope="scope">{{ scope.row.addTime }}</template>
        </el-table-column>
        <el-table-column
          label="修改日期"
          width="120">
          <template slot-scope="scope">{{ scope.row.updateTime|formatDate }}</template>
        </el-table-column>
        <el-table-column
          label="现有商品数"
          width="120">
          <template slot-scope="scope">
            <span :style="{'color':scope.row.mallCounts>0?'blue':'red'}">{{ scope.row.mallCounts }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="备注"
          width="120">
          <template slot-scope="scope">
            <span style="color:gray">{{ scope.row.detail }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="详细管理"
          width="120">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      :title="operaTypeTitle"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="类别名称">
          <el-input
            type="text"
            placeholder="请输入类别名称"
            v-model="form.typeName"
            maxlength="10"
            show-word-limit
          >
          </el-input>
        </el-form-item>
        <el-form-item label="类别名称">
          <el-input
            type="text"
            placeholder="请输入备注"
            v-model="form.detail"
            maxlength="255"
            show-word-limit
          >
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible=false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>

import {addMallType,getMallTypeList,delMallType,modMallType} from '../../../api/data'
export default {
  name : 'mallTypeManage',
  data (){
    return {
      dialogVisible: false,
      fullscreenLoading:false,
      operaTypeId:0,
      operaTypeTitle:'',
      tableData:[
        { 
          typeId:'0001',
          typeName:'五金',
          addDate:'2020-10-22',
          modifyDate:'2020-10-22',
          mallCounts:'100',
        }
      ],
      multipleSelection: [],
      form: {
        addTime:'',
        mallCounts:'',
        mallTypeStatus:'',
        typeId:'',
        updateTime:'',
        typeName: '',
        detail:''
      }
    }
  },
  watch:{
    operaTypeId(val){
      switch(val){
        case 0:
          this.operaTypeTitle='未知'
          break;
        case 2:
          this.operaTypeTitle='新增商品种类'
          break
        case 4:
          this.operaTypeTitle='修改商品种类'
          break
      }
    }
  },
  mounted(){
    this.getInitData();
  },
  methods:{
    //请求列表数据
    getInitData(){
      this.fullscreenLoading = true;
      console.log('@@@@@@@@@@ getMallTypeList')
      getMallTypeList().then((res)=>{
        const {code,data} = res.data
        if(code === 200){
          this.tableData = data
        }
      })
      this.fullscreenLoading=false;
    },
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
    //新增、修改确定按钮
    submit(){
      switch(this.operaTypeId){
        // 新增确认
        case 2:
          this.addConfirm();
          break;
        //修改确认
        case 4:
          this.modifyConfirm();
          break;
      } 
    },
    // 删除操作1
    del(){
      if(this.multipleSelection.length<1){
        this.$message.error('请选择要删除的选项');
      }else{
        this.$confirm('此操作将永久删除种类, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.fullscreenLoading=true;
          let list=this.multipleSelection.map((item,index)=>{
            return item.typeId;
          })
          let parama = {
            idList: list
          }
          delMallType(parama).then((res)=>{
            const {code,message,data} = res.data
            if(code === 200){
              // 删除成功
              this.$message({type: 'success',message: '删除成功!'});
              this.getInitData();
              this.fullscreenLoading=false;
            }
            if(code === 500){
              this.$message.error(message);
            }
          })
          .catch(()=>{
            this.fullscreenLoading=false;
          })
        }).catch(() => {
          // 取消删除
          this.$message({type: 'info',message: '已取消删除'});
        });
      }
    },
    // 添加操作开始
    add(){
      this.initForm();
      this.operaTypeId = 2;
      this.dialogVisible = true;
    },
    // 添加操作2
    addConfirm() {
      console.log('addconfirm');
      console.log(this.form);
      let params = {
        name:this.form.typeName,
        detail:this.form.detail
      }
      this.fullscreenLoading=true;
      //请求成功
      addMallType(params).then((res)=>{
        const {code,message,data} = res.data
        if(code === 200){
          this.$message({
            message: '添加成功',
            type: 'success'
          });
          this.dialogVisible = false;
          this.getInitData();
          this.fullscreenLoading=false;
        }
        if(code === 500){
          this.$message.error(message);
        }
      }).catch(()=>{
            this.fullscreenLoading=false;
          })
      this.fullscreenLoading=false;
    },
    // 查询操作
    query(){
      console.log('query');
      console.log(this.multipleSelection);
    },
    // 修改操作
    modify(){
      console.log('modify');
      console.log(this.multipleSelection);
      if(this.multipleSelection.length!=1){
        this.$message({message:'只能选择一项进行修改',type:'warning'});
        return;
      }
      this.form.typeName = this.multipleSelection[0].typeName;
      this.form.detail = this.multipleSelection[0].detail;
      this.form.typeId = this.multipleSelection[0].typeId;
      this.operaTypeId = 4;
      this.dialogVisible = true;
      console.log(this.form);          
    },
    //修改确认
    modifyConfirm(){
      // console.log();
      // let parama={
      //   requestData:this.form
      // }
      // console.log(parama)
      modMallType(this.form)
      .then((res)=>{
        const {code,message,data} = res.data
        if(code === 200){
          // 删除成功
          this.$message({type: 'success',message: '修改成功!'});
          this.getInitData();
          this.fullscreenLoading=false;
          this.dialogVisible = false;
        }
        if(code === 500){
          this.$message.error(message);
        }
      })
      .catch(()=>{
        this.fullscreenLoading=false;
      })
    },
    //操作编辑产品类别
    handleEdit(index, row) {
      console.log(index, row);
    },
    //初始化form数据
    initForm(){
      this.form.typeName = '';
      this.form.detail = '';
    }
  }
}
</script>
