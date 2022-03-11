<template>
  <div class="mall">
    <div class="search">
      <el-input class="input" placeholder="商品名"/>
      <el-input class="input" placeholder="价格范围(大于等于)"/>
      <el-input class="input" placeholder="价格范围(小于等于)"/>
      <el-select class="input" v-model="form.typeId" placeholder="请选择销售状态" style="width:100%">
        <el-option v-for="item in mallTypeList" :key="item.id" :label="item.name" :value="item.id">
        </el-option>
      </el-select>
      <el-select class="input" v-model="form.typeId" placeholder="请选择所属种类" style="width:100%">
        <el-option v-for="item in mallTypeList" :key="item.id" :label="item.name" :value="item.id">
        </el-option>
      </el-select>
      <el-button class="button" type="primary" circle icon="el-icon-search" @click="query"/>
      <el-input class="input" placeholder="请输入商品编号精确查找"/>
      <el-button class="button" type="primary" circle icon="el-icon-search" @click="query"/>
    </div>
    <div class="other">
        <el-button class="button" type="success" icon="el-icon-circle-plus-outline" @click="add"></el-button>
        <el-button calss="button" type="warning"  icon="el-icon-edit" @click="modify"/>
        <el-button class="button" type="danger"  icon="el-icon-delete" @click="del"></el-button>
    </div>
    <el-table
      class="table"
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      v-loading.fullscreen.lock="fullscreenLoading"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"/>
      <el-table-column
        prop="saleTypeId"
        label="销售种类Id"/>
      <el-table-column
        prop="saleTypeName"
        label="销售种类名称"/>
      <el-table-column
        label="下属商品数量">
        <template slot-scope="scope">
          <span :style="{'color':scope.row.goodsCount>5?'blue':'red'}">{{ scope.row.goodsCount }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="备注">
        <template slot-scope="scope">
          <span style="color:gray">{{ scope.row.detail }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="添加日期">
        <template slot-scope="scope">{{ scope.row.addTime|formatDate }}</template>
      </el-table-column>
      <el-table-column
        label="修改日期">
        <template slot-scope="scope">{{ scope.row.updateTime|formatDate }}</template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="operaTypeTitle"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="名称">
          <el-input
            type="text"
            placeholder="请输入销售方式名称"
            v-model="form.saleTypeName"
            maxlength="20"
            show-word-limit
          >
          </el-input>
        </el-form-item>
        <el-form-item label="备注">
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
        <el-button @click="dialogCancel">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>

import {addSaleType,getSaleTypeList,delSaleType,modSaleType} from '../../../api/data'
export default {
  name : 'saleTypeManage',
  data (){
    return {
      dialogVisible: false,
      fullscreenLoading:false,
      operaTypeId:-1,
      operaTypeTitle:'',
      tableData:[
        { 
          saleTypeId:'',
          saleTypeName:'',
          goodsCount:'',
          detail:'',
          addTime:'',
          updateTime:'',
        }
      ],
      multipleSelection: [],
      form: {
        saleTypeId:'',
        saleTypeName:'',
        goodsCount:'',
        detail:'',
        addTime:'',
        updateTime:'',
      },
      mallTypeList:[],
      saleTypeList:[],
      saleType:[
        {
          saleTypeId:'01',
          saleTypeName:'按G'
        }
      ],
      salePrice:[
        {
          saleTypeId:'02',
          saleTypeName:'袋重'
        }
      ]
    }
  },
  watch:{
    operaTypeId(val){
      this.operaTypeTitle = this.$store.state.commonmessage.saleType[val].dialogtitile;
    }
  },
  mounted(){
    this.operaTypeId=-1;
    this.getInitData();
  },
  methods:{
    //请求列表数据
    getInitData(){
      this.fullscreenLoading = true;
      console.log('@@@@@@@@@@ getSaleTypeList')
      getSaleTypeList().then((res)=>{
        const {code,data} = res.data
        if(code === 200){
          console.log(res);
          this.tableData = data
        }
      })
      this.fullscreenLoading=false;
    },
    //选择框切换事件监听
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val)
    },
    handleClose(done) {
      this.$confirm('确认关闭?')
        .then(_ => {
          this.dialogCancel();
          done();
        })
        .catch(_ => {});
    },
    copyMessage(parama){
      return JSON.parse(JSON.stringify(parama))
    },
    //新增、修改取消按钮
    dialogCancel(){
      this.dialogVisible = false
      let message = this.copyMessage(this.$store.state.commonmessage.saleType[this.operaTypeId].cancel);
      this.$message(message);
    },
    //新增、修改确定按钮
    submit(){
      switch(this.operaTypeId){
        // 新增确认
        case 0:
          this.addConfirm();
          break;
        //修改确认
        case 3:
          this.modifyConfirm();
          break;
      } 
    },
    // 删除操作1
    del(){
      this.operaTypeId = 1;
      if(this.multipleSelection.length<1){
        this.$message.error('请选择要删除的选项');
      }else{
        let warning = this.$store.state.commonmessage.saleType[this.operaTypeId].delete.message;
        this.$confirm(warning, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.fullscreenLoading=true;
          let list=this.multipleSelection.map((item,index)=>{
            return item.saleTypeId;
          })
          let parama = {
            idList: list
          }
          delSaleType(parama).then((res)=>{
            const {code,message,data} = res.data
            if(code === 200){
              // 删除成功
              this.$message(this.copyMessage(this.$store.state.commonmessage.saleType[this.operaTypeId].success));
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
          this.dialogCancel();
        });
      }
    },
    // 添加操作开始
    add(){
      this.operaTypeId = 0;
      this.initForm();
      this.dialogVisible = true;
    },
    // 添加操作2
    addConfirm() {
      console.log('addconfirm');
      console.log(this.form);
      //请求成功
      addSaleType(this.form).then((res)=>{
        const {code,message,data} = res.data
        if(code === 200){
          this.dialogVisible = false;
          this.getInitData();
          let message = this.copyMessage(this.$store.state.commonmessage.saleType[this.operaTypeId].success);
          this.$message(message);
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
      this.operaTypeId = 3;
      console.log('modify');
      if(this.multipleSelection.length!=1){
        this.$message({message:'只能选择一项进行修改',type:'warning'});
        return;
      }
      this.form = this.copyMessage(this.multipleSelection[0]);
      this.dialogVisible = true;  
    },
    //修改确认
    modifyConfirm(){
      let parama={
        requestData:this.form
      }
      console.log(this.form);
      modSaleType(this.form)
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
      this.form.saleTypeId=''
      this.form.saleTypeName=''
      this.form.goodsCount=''
      this.form.detail=''
      this.form.addTime=''
      this.form.updateTime=''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/mall"
</style>